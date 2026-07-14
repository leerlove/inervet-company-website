'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { EXTERNAL_LINKS } from '@/constants/externalLinks'

const BUSINESS = [
  { name: 'AI 펫닥터', href: EXTERNAL_LINKS.APP_MAIN, external: true, desc: '반려동물 AI 건강상담 (B2C)' },
  { name: '부동산 AI 전환', href: '/real-estate', external: false, desc: 'AI 네이티브 전환 컨설팅 (B2B)' },
]

const NAV = [
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
          {/* Logo (wordmark — 다크 배경 대응) */}
          <Link href="/" className="group flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary-500 to-accent-600 text-lg font-bold text-white">
              I
            </span>
            <span className="text-xl font-bold tracking-tight text-white">INERVET</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center gap-8 md:flex">
            {/* 사업 드롭다운 */}
            <div className="group relative">
              <button className="flex items-center gap-1 text-sm font-medium text-gray-200 transition-colors hover:text-white">
                사업
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="invisible absolute left-1/2 top-full w-72 -translate-x-1/2 pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                <div className="overflow-hidden rounded-xl border border-white/10 bg-ink-800/95 p-2 backdrop-blur-md">
                  {BUSINESS.map((b) => (
                    <a
                      key={b.name}
                      href={b.href}
                      target={b.external ? '_blank' : undefined}
                      rel={b.external ? 'noopener noreferrer' : undefined}
                      className="block rounded-lg px-4 py-3 transition-colors hover:bg-white/5"
                    >
                      <span className="block text-sm font-semibold text-white">{b.name}</span>
                      <span className="mt-0.5 block text-xs text-gray-400">{b.desc}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {NAV.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-200 transition-colors hover:text-white"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-primary-900 transition-all hover:-translate-y-0.5 hover:bg-blue-50 sm:block"
            >
              AI 전환 문의
            </Link>
            <button
              className="p-2 text-gray-200 transition-colors hover:text-white md:hidden"
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
          <div className="mt-4 border-t border-white/10 pt-4 md:hidden">
            <div className="flex flex-col gap-1">
              <span className="px-1 py-2 text-xs font-semibold uppercase tracking-widest text-gray-500">
                사업
              </span>
              {BUSINESS.map((b) => (
                <a
                  key={b.name}
                  href={b.href}
                  target={b.external ? '_blank' : undefined}
                  rel={b.external ? 'noopener noreferrer' : undefined}
                  className="rounded-lg px-3 py-2 text-gray-200 transition-colors hover:bg-white/5 hover:text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  {b.name}
                </a>
              ))}
              <div className="my-2 h-px bg-white/10" />
              {NAV.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="rounded-lg px-3 py-2 text-gray-200 transition-colors hover:bg-white/5 hover:text-white"
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
