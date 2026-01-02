/**
 * 외부 링크 및 URL 상수
 * 모든 외부 링크를 중앙에서 관리합니다.
 */

export const EXTERNAL_LINKS = {
  // AI 펫닥터 서비스
  APP_MAIN: 'https://www.aipetdoctor.co.kr',
  APP_DOWNLOAD_IOS: 'https://apps.apple.com/kr/app/ai-petdoctor',
  APP_DOWNLOAD_ANDROID: 'https://play.google.com/store/apps/details?id=com.inervet.aipetdoctor',

  // 회사 정보
  COMPANY_EMAIL: 'mailto:support@inervet.com',
  COMPANY_PHONE: 'tel:041-562-1118',
  CEO_EMAIL: 'mailto:dslee@inervet.com',

  // 소셜 미디어 (추후 업데이트)
  SOCIAL_TWITTER: '#',
  SOCIAL_INSTAGRAM: '#',
  SOCIAL_LINKEDIN: '#',
  SOCIAL_FACEBOOK: '#',

  // 법적 문서
  TERMS: '/terms',
  PRIVACY: '/privacy',

  // 외부 서비스
  DNS_CHECKER: 'https://dnschecker.org',
} as const

export const INTERNAL_LINKS = {
  HOME: '/',
  ABOUT: '/about',
  IR: '/ir',
  CONTACT: '/contact',
  TERMS: '/terms',
  PRIVACY: '/privacy',
  FAQ: '/faq',
  CAREERS: '/careers',
  SERVICE: '/service',
} as const

export const NAVIGATION_LINKS = [
  { name: 'AI 펫닥터', href: '/#features' },
  { name: '가격', href: '/#pricing' },
  { name: '회사소개', href: '/about' },
  { name: 'IR', href: '/ir' },
  { name: '문의', href: '/contact' },
] as const

export const FOOTER_SERVICE_LINKS = [
  { name: 'AI 펫닥터', href: '/service' },
  { name: '24시간 상담', href: '/service' },
  { name: '가격 안내', href: '/#pricing' },
  { name: '이용 방법', href: '/#how-it-works' },
] as const

export const FOOTER_COMPANY_LINKS = [
  { name: '회사 소개', href: '/about' },
  { name: '팀', href: '/about#team' },
  { name: '투자 정보 (IR)', href: '/ir' },
  { name: '채용', href: '/careers' },
] as const

export const FOOTER_SUPPORT_LINKS = [
  { name: 'FAQ', href: '/faq' },
  { name: '문의하기', href: '/contact' },
  { name: '이용약관', href: '/terms' },
  { name: '개인정보처리방침', href: '/privacy' },
] as const

export type ExternalLink = typeof EXTERNAL_LINKS[keyof typeof EXTERNAL_LINKS]
export type InternalLink = typeof INTERNAL_LINKS[keyof typeof INTERNAL_LINKS]
