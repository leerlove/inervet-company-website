'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

/** 두 사업을 상단에 직접 노출하고, 회사 메뉴가 뒤따른다 */
const NAV = [
  { name: 'AI 네이티브 전환', href: '/transformation' },
  { name: 'AI 펫 헬스케어', href: '/pet-doctor' },
  { name: '회사소개', href: '/about' },
  { name: 'IR', href: '/ir' },
  { name: '문의', href: '/contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || mobileOpen
          ? 'border-b border-white/10 bg-ink-900/90 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo (다크 배경 최적화 변형 — 다이아몬드 원본 색상 유지, 텍스트만 화이트) */}
          <Link href="/" className="group flex items-center" aria-label="INERVET 홈">
            <Image
              src="/logo-dark.png"
              alt="INERVET"
              width={486}
              height={106}
              priority
              className="h-9 w-auto transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-7 lg:flex">
            {NAV.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="whitespace-nowrap text-sm font-medium text-gray-200 transition-colors hover:text-white"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden whitespace-nowrap rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-primary-900 transition-all hover:-translate-y-0.5 hover:bg-blue-50 sm:block"
            >
              AI 전환 문의
            </Link>
            <button
              className="p-2 text-gray-200 transition-colors hover:text-white lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="메뉴 열기"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={mobileOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="mt-4 border-t border-white/10 pt-4 lg:hidden">
            <div className="flex flex-col gap-1">
              {NAV.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="rounded-lg px-3 py-2.5 text-gray-200 transition-colors hover:bg-white/5 hover:text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-3 rounded-lg bg-white px-5 py-3 text-center text-sm font-semibold text-primary-900"
                onClick={() => setMobileOpen(false)}
              >
                AI 전환 문의
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
