import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

/**
 * 문의 폼 서버 발송 (Vercel 서버리스 함수).
 *
 * 인증정보(SMTP_APP_PASSWORD)는 이 서버 코드에서만 읽으며,
 * NEXT_PUBLIC_ 접두사가 없으므로 클라이언트 번들에 포함되지 않는다.
 *
 * 필요 환경변수 (Vercel 대시보드에서 설정):
 * - SMTP_USER          : 발신 Google Workspace 계정 (예: support@inervet.com)
 * - SMTP_APP_PASSWORD  : 2단계 인증 후 발급한 앱 비밀번호 16자리
 * - CONTACT_TO         : (선택) 수신 주소. 미설정 시 SMTP_USER로 수신
 */

// nodemailer는 Node 런타임 필요 (Edge 불가)
export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const INQUIRY_LABELS: Record<string, string> = {
  general: '일반 문의',
  investment: '투자 문의',
  partnership: '파트너 문의',
}

const MAX = { name: 100, email: 200, phone: 40, subject: 200, message: 5000 }

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)

const esc = (s: string) =>
  s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')

const str = (v: unknown) => (typeof v === 'string' ? v.trim() : '')

export async function POST(request: Request) {
  let body: Record<string, unknown>
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: '잘못된 요청입니다.' }, { status: 400 })
  }

  // 허니팟: 사람에게는 보이지 않는 필드. 봇이 채우면 조용히 무시(성공으로 응답)
  if (str(body.company)) {
    return NextResponse.json({ ok: true })
  }

  const inquiryType = str(body.inquiryType) || 'general'
  const name = str(body.name)
  const email = str(body.email)
  const phone = str(body.phone)
  const subject = str(body.subject)
  const message = str(body.message)

  const invalid: string[] = []
  if (!name || name.length > MAX.name) invalid.push('이름')
  if (!email || !isEmail(email) || email.length > MAX.email) invalid.push('이메일')
  if (!subject || subject.length > MAX.subject) invalid.push('제목')
  if (!message || message.length > MAX.message) invalid.push('문의 내용')
  if (phone.length > MAX.phone) invalid.push('전화번호')

  if (invalid.length > 0) {
    return NextResponse.json(
      { error: `입력값을 확인해 주세요: ${invalid.join(', ')}` },
      { status: 400 }
    )
  }

  const user = process.env.SMTP_USER
  const pass = process.env.SMTP_APP_PASSWORD
  const to = process.env.CONTACT_TO || user

  // 설정이 없으면 "가짜 성공"을 내지 않고 명확히 실패를 알린다
  if (!user || !pass) {
    console.error('[contact] SMTP 환경변수 미설정 (SMTP_USER / SMTP_APP_PASSWORD)')
    return NextResponse.json(
      {
        error:
          '현재 문의 접수가 일시적으로 불가합니다. support@inervet.com 으로 보내주시면 빠르게 답변드리겠습니다.',
      },
      { status: 503 }
    )
  }

  const label = INQUIRY_LABELS[inquiryType] ?? '일반 문의'

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: { user, pass },
  })

  const text = [
    `문의 유형: ${label}`,
    `이름: ${name}`,
    `이메일: ${email}`,
    `전화번호: ${phone || '미입력'}`,
    `제목: ${subject}`,
    '',
    '문의 내용:',
    message,
  ].join('\n')

  const html = `
    <div style="font-family:system-ui,-apple-system,'Segoe UI',sans-serif;line-height:1.7;color:#111">
      <h2 style="margin:0 0 16px">[${esc(label)}] ${esc(subject)}</h2>
      <table style="border-collapse:collapse;margin-bottom:20px">
        <tr><td style="padding:4px 12px 4px 0;color:#666">이름</td><td>${esc(name)}</td></tr>
        <tr><td style="padding:4px 12px 4px 0;color:#666">이메일</td><td>${esc(email)}</td></tr>
        <tr><td style="padding:4px 12px 4px 0;color:#666">전화번호</td><td>${esc(phone || '미입력')}</td></tr>
      </table>
      <div style="white-space:pre-wrap;padding:16px;background:#f6f7f9;border-radius:8px">${esc(message)}</div>
      <p style="margin-top:20px;color:#888;font-size:12px">inervet.com 문의 폼에서 발송되었습니다. 이 메일에 그대로 답장하면 문의자에게 전달됩니다.</p>
    </div>
  `

  try {
    await transporter.sendMail({
      // Gmail은 발신자가 인증 계정(또는 등록된 별칭)이어야 한다
      from: `"INERVET 문의" <${user}>`,
      to,
      // 답장하면 문의자에게 바로 가도록
      replyTo: `${name} <${email}>`,
      subject: `[${label}] ${subject}`,
      text,
      html,
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    // 내부 오류 상세는 클라이언트에 노출하지 않는다
    console.error('[contact] 메일 발송 실패:', error)
    return NextResponse.json(
      { error: '메일 발송에 실패했습니다. 잠시 후 다시 시도해 주세요.' },
      { status: 502 }
    )
  }
}
