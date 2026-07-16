import { NextResponse, type NextRequest } from 'next/server'

/**
 * 한 코드베이스, 두 도메인.
 *
 * - inervet.com        → 기본 라우트 (AI 네이티브 전환 회사 · 다크 시네마틱)
 * - aipetdoctor.co.kr  → /aipd/* 로 rewrite (AI 펫 헬스케어 · 펫 브랜드 라이트)
 *
 * rewrite이므로 방문자에게 보이는 URL은 그대로 aipetdoctor.co.kr/... 이다.
 */

const PET_HOSTS = new Set([
  'aipetdoctor.co.kr',
  'www.aipetdoctor.co.kr',
])

export function middleware(request: NextRequest) {
  const host = (request.headers.get('host') ?? '').split(':')[0].toLowerCase()

  if (PET_HOSTS.has(host)) {
    const url = request.nextUrl.clone()

    // 이미 rewrite된 경로면 그대로 통과
    if (url.pathname.startsWith('/aipd')) {
      return NextResponse.next()
    }

    url.pathname = url.pathname === '/' ? '/aipd' : `/aipd${url.pathname}`
    return NextResponse.rewrite(url)
  }

  // 반대로, inervet 도메인에서 /aipd 직접 접근은 노출하지 않는다(프리뷰 도메인은 허용)
  return NextResponse.next()
}

export const config = {
  // 정적 파일(_next, 확장자 있는 파일)과 API는 제외
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)'],
}
