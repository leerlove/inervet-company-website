import type { Metadata } from 'next'

/**
 * AI 펫닥터 (aipetdoctor.co.kr) 레이아웃.
 * 전역 기본은 INERVET 다크 테마이므로, 여기서 `.theme-pet` 스코프로 라이트로 되돌린다.
 */

export const metadata: Metadata = {
  metadataBase: new URL('https://www.aipetdoctor.co.kr'),
  title: 'AI펫닥터 | 24시간 반려동물 건강 상담 서비스',
  description:
    '새벽 2시에도 깨어있는 내 손 안의 주치의. 18,000여 건의 데이터를 학습한 AI가 우리 아이 증상을 분석하고 맞춤 헬스케어를 제안합니다.',
  keywords: ['AI펫닥터', '반려동물 건강상담', '24시간 수의사', '펫 헬스케어', '강아지 증상', '고양이 증상'],
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://www.aipetdoctor.co.kr',
    siteName: 'AI펫닥터',
    title: 'AI펫닥터 | 24시간 반려동물 건강 상담 서비스',
    description: '동물병원보다 가까운 내 손 안의 주치의. 지금 AI펫닥터에게 물어보세요.',
  },
}

export default function AipdLayout({ children }: { children: React.ReactNode }) {
  return <div className="theme-pet min-h-screen">{children}</div>
}
