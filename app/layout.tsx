import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI 펫닥터 INERVET | 24시간 반려동물 건강 상담 서비스',
  description: '반려동물이 아플 때 24시간 언제든 수의사와 상담하세요. AI 증상 분석과 실시간 영상 상담으로 18,000건 이상의 상담 완료.',
  keywords: ['AI 펫닥터', '반려동물', '수의사 상담', '24시간 상담', '펫헬스케어', 'INERVET'],
  authors: [{ name: 'INERVET' }],
  creator: 'INERVET',
  publisher: 'INERVET',

  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://inervet.com',
    siteName: 'INERVET',
    title: 'AI 펫닥터 INERVET | 24시간 반려동물 건강 상담 서비스',
    description: '반려동물이 아플 때 24시간 언제든 수의사와 상담하세요. AI 증상 분석과 실시간 영상 상담으로 18,000건 이상의 상담 완료.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'INERVET AI 펫닥터',
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'AI 펫닥터 INERVET | 24시간 반려동물 건강 상담 서비스',
    description: '반려동물이 아플 때 24시간 언제든 수의사와 상담하세요.',
    images: ['/images/twitter-image.jpg'],
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
