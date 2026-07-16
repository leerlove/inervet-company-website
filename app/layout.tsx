import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'INERVET | AI 네이티브 전환 회사',
  description: 'AI 펫닥터를 만든 팀이 이끄는 AI 네이티브 전환 회사. 직접 만들고 운영하는 AI 실행력으로 산업의 전환을 함께합니다.',
  keywords: ['INERVET', 'AI 네이티브 전환', 'AI 컨설팅', '부동산 AI', 'AI 펫닥터', '펫헬스케어'],
  authors: [{ name: 'INERVET' }],
  creator: 'INERVET',
  publisher: 'INERVET',

  // 상대 경로 이미지·URL 해석 기준 (미설정 시 빌드 경고 발생)
  metadataBase: new URL('https://inervet.com'),

  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://inervet.com',
    siteName: 'INERVET',
    title: 'INERVET | AI 네이티브 전환 회사',
    description: 'FDE가 직접 고객사에 투입되어 온톨로지 기반으로 기업 맞춤 AI 네이티브 전환을 설계·구축합니다. AI 펫닥터를 만든 팀의 실행력으로.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'INERVET - AI 네이티브 전환 회사',
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'INERVET | AI 네이티브 전환 회사',
    description: 'FDE·온톨로지 기반 기업 맞춤 AI 네이티브 전환. AI 펫닥터를 만든 팀의 실행력으로.',
    images: ['/images/og-image.jpg'],
  },

  // Verification
  verification: {
    google: 'google-site-verification-code',
    // Add other verification codes as needed
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#1e3a8a" />
      </head>
      <body className="antialiased">
        {/* Skip to Content - Accessibility */}
        <a href="#main-content" className="skip-to-content">
          본문으로 바로가기
        </a>
        {children}
      </body>
    </html>
  )
}
