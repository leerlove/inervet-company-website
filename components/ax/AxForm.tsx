'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

const SIZES = ['10명 미만', '10~49명', '50~299명', '300명 이상']

const EMPTY = {
  org: '',
  name: '',
  email: '',
  phone: '',
  size: '',
  message: '',
  company: '', // 허니팟: 사람은 비워둔다
}

export default function AxForm() {
  const router = useRouter()
  const [form, setForm] = useState(EMPTY)
  const [agree, setAgree] = useState(false)
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle')
  const [error, setError] = useState('')

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!agree) {
      setStatus('error')
      setError('개인정보 수집·이용에 동의해 주세요.')
      return
    }
    setStatus('loading')
    setError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          inquiryType: 'ax',
          ...form,
          subject: `${form.org} · 무료 AI 전환 점검 신청`,
          message: form.message || '(입력 없음)',
        }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        setStatus('error')
        setError(data?.error || '신청을 보내지 못했습니다. 잠시 후 다시 시도해 주세요.')
        return
      }
      router.push('/ax/thanks')
    } catch {
      setStatus('error')
      setError('네트워크 오류로 보내지 못했습니다. 잠시 후 다시 시도해 주세요.')
    }
  }

  const field =
    'w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-[15px] text-slate-900 placeholder:text-slate-400 outline-none transition-colors focus:border-primary-600 focus:ring-2 focus:ring-primary-600/20'
  const label = 'mb-2 block text-sm font-semibold text-slate-700'

  return (
    <section id="apply" className="scroll-mt-20 bg-white py-24 lg:py-32">
      <div className="container-custom grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h2 className="text-3xl font-extrabold leading-tight tracking-[-0.03em] text-slate-950 sm:text-[2.75rem]">
            무료 AI 전환 점검
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            60분이면 우리 회사가 지금 어디쯤인지, 무엇부터 바꾸면 효과가 큰지 알 수 있습니다.
          </p>
          <ul className="mt-10 space-y-6 border-t-2 border-slate-900 pt-8">
            {[
              ['점검하는 것', '데이터 연결 상태, 보안·권한, 반복 업무, 조직의 AI 활용 수준'],
              ['받으시는 것', '점검 결과 요약서 (우선 과제 3가지와 단계별 전환 방향)'],
              ['진행 방식', '신청 후 1영업일 안에 대표가 직접 연락드려 일정을 잡습니다'],
            ].map(([k, v]) => (
              <li key={k} className="grid gap-1 sm:grid-cols-[120px_1fr] sm:gap-6">
                <span className="font-bold text-slate-950">{k}</span>
                <span className="leading-relaxed text-slate-600">{v}</span>
              </li>
            ))}
          </ul>
          <p className="mt-10 text-sm text-slate-500">
            바로 통화를 원하시면{' '}
            <a href="tel:0415621118" className="font-semibold text-slate-900 underline underline-offset-4">
              041-562-1118
            </a>{' '}
            · 평일 9시~18시
          </p>
        </div>

        <form onSubmit={onSubmit} className="rounded-3xl border border-slate-200 bg-[#F4F6FA] p-6 sm:p-10" noValidate={false}>
          <div className="absolute -left-[9999px]" aria-hidden="true">
            <label htmlFor="ax-company">입력하지 마세요</label>
            <input id="ax-company" name="company" tabIndex={-1} autoComplete="off" value={form.company} onChange={onChange} />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="ax-org" className={label}>
                회사명 <span className="text-primary-600">*</span>
              </label>
              <input id="ax-org" name="org" required autoComplete="organization" className={field} value={form.org} onChange={onChange} />
            </div>
            <div>
              <label htmlFor="ax-name" className={label}>
                성함 · 직책 <span className="text-primary-600">*</span>
              </label>
              <input id="ax-name" name="name" required placeholder="예: 홍길동 대표" className={field} value={form.name} onChange={onChange} />
            </div>
            <div>
              <label htmlFor="ax-email" className={label}>
                업무용 이메일 <span className="text-primary-600">*</span>
              </label>
              <input id="ax-email" name="email" type="email" required autoComplete="email" className={field} value={form.email} onChange={onChange} />
            </div>
            <div>
              <label htmlFor="ax-phone" className={label}>
                연락처 <span className="text-primary-600">*</span>
              </label>
              <input id="ax-phone" name="phone" type="tel" required autoComplete="tel" placeholder="010-0000-0000" className={field} value={form.phone} onChange={onChange} />
            </div>
          </div>

          <div className="mt-5">
            <label htmlFor="ax-size" className={label}>
              회사 규모 (선택)
            </label>
            <select id="ax-size" name="size" className={field} value={form.size} onChange={onChange}>
              <option value="">선택해 주세요</option>
              {SIZES.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-5">
            <label htmlFor="ax-message" className={label}>
              가장 먼저 바꾸고 싶은 것 (선택)
            </label>
            <textarea
              id="ax-message"
              name="message"
              rows={4}
              placeholder="예: 직원들의 AI 사용을 안전하게 관리하고 싶다, 영업 현황을 한눈에 보고 싶다"
              className={field}
              value={form.message}
              onChange={onChange}
            />
          </div>

          <label className="mt-6 flex items-start gap-3 text-sm leading-relaxed text-slate-600">
            <input
              type="checkbox"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
              className="mt-1 h-4 w-4 flex-none accent-primary-600"
            />
            <span>
              점검 일정 안내를 위해 회사명, 성함, 연락처, 이메일을 수집·이용하는 데 동의합니다. 점검 외 용도로
              쓰지 않으며 상담 종료 후 파기합니다.
            </span>
          </label>

          {status === 'error' && (
            <p className="mt-5 rounded-xl border border-error-300 bg-error-50 px-4 py-3 text-sm text-error-700" role="alert">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={status === 'loading'}
            className="mt-6 w-full rounded-full bg-primary-600 py-4 text-base font-bold text-white transition-colors hover:bg-primary-700 disabled:opacity-60"
          >
            {status === 'loading' ? '보내는 중…' : '무료 AI 전환 점검 신청'}
          </button>
        </form>
      </div>
    </section>
  )
}
