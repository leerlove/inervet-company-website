import Script from 'next/script'
import type { ReactNode } from 'react'

/**
 * 기업 AI 전환 랜딩(/ax) 전용 레이아웃.
 * 광고 전환 측정을 위해 Google 태그(GTM-W5QSFJP5)를 이 경로에서만 불러온다.
 */
export default function AxLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Script
        id="gtm-ax"
        src="https://www.googletagmanager.com/gtm.js?id=GTM-W5QSFJP5"
        strategy="afterInteractive"
      />
      <Script id="gtag-ax-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());`}
      </Script>
      {children}
    </>
  )
}
