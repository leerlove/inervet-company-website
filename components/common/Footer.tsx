import Link from 'next/link'
import { EXTERNAL_LINKS } from '@/constants/externalLinks'

const BUSINESS_LINKS = [
  { name: 'AI 펫닥터', href: EXTERNAL_LINKS.APP_MAIN, external: true },
  { name: '부동산 AI 전환', href: '/real-estate', external: false },
]

const COMPANY_LINKS = [
  { name: '회사 소개', href: '/about' },
  { name: '투자 정보 (IR)', href: '/ir' },
  { name: '문의하기', href: '/contact' },
]

const SUPPORT_LINKS = [
  { name: 'FAQ', href: '/faq' },
  { name: '이용약관', href: '/terms' },
  { name: '개인정보처리방침', href: '/privacy' },
]

const socialLinks = [
  {
    name: 'LinkedIn',
    href: '#',
    icon: (
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    ),
  },
  {
    name: 'Instagram',
    href: '#',
    icon: (
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    ),
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-950 py-14 text-gray-400 lg:py-16">
      <div className="container-custom">
        <div className="mb-12 grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary-500 to-accent-600 text-lg font-bold text-white">
                I
              </span>
              <span className="text-xl font-bold text-white">INERVET</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              직접 만들고 운영하는 AI 실행력으로,
              <br />
              산업의 AI 네이티브 전환을 이끕니다.
            </p>
          </div>

          {/* Business */}
          <div>
            <h4 className="mb-4 font-semibold text-white">사업</h4>
            <ul className="space-y-2 text-sm">
              {BUSINESS_LINKS.map((link) =>
                link.external ? (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-white"
                    >
                      {link.name}
                    </a>
                  </li>
                ) : (
                  <li key={link.name}>
                    <Link href={link.href} className="transition-colors hover:text-white">
                      {link.name}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 font-semibold text-white">회사</h4>
            <ul className="space-y-2 text-sm">
              {COMPANY_LINKS.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="transition-colors hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="mb-4 font-semibold text-white">지원</h4>
            <ul className="space-y-2 text-sm">
              {SUPPORT_LINKS.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="transition-colors hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-gray-500">© 2026 INERVET. All rights reserved.</p>
            <div className="flex items-center gap-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-500 transition-colors hover:text-white"
                  aria-label={social.name}
                >
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    {social.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
