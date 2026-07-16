'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { EXTERNAL_LINKS } from '@/constants/externalLinks'

/** AI 펫닥터 헤더 — 라이트/틸 브랜드. 스크롤 시 흰 배경 고정 */
export default function AipdHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-gray-100 bg-white/95 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="container-custom flex items-center justify-between py-4">
        <Link href="/" className="flex items-center" aria-label="AI펫닥터 홈">
          <Image
            src="/logo-aipetdoctor.png"
            alt="AI 펫닥터"
            width={630}
            height={175}
            priority
            className="h-8 w-auto sm:h-9"
          />
        </Link>

        <a
          href={EXTERNAL_LINKS.APP_DOWNLOAD_IOS}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-pet-400 px-5 py-2.5 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-pet-500"
        >
          앱 다운로드
        </a>
      </nav>
    </header>
  )
}
