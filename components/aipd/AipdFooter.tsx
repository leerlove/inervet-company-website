import Image from 'next/image'
import { EXTERNAL_LINKS } from '@/constants/externalLinks'

/**
 * AI 펫닥터 푸터.
 * 페더레이션 브릿지: 회사/법적 정보는 INERVET(inervet.com)으로 연결한다.
 */

const INERVET = 'https://www.inervet.com'

const SUPPORT_LINKS = [
  { name: '고객 문의', href: 'http://pf.kakao.com/_vxhvWG/friend', external: true },
  { name: '업무 제휴 문의', href: `${INERVET}/contact`, external: true },
]

const ABOUT_LINKS = [
  { name: '서비스 이용약관', href: `${INERVET}/terms` },
  { name: '개인정보처리방침', href: `${INERVET}/privacy` },
  { name: '회사 소개', href: `${INERVET}/about` },
]

export default function AipdFooter() {
  return (
    <footer className="border-t border-gray-100 bg-gray-50 py-14">
      <div className="container-custom">
        <div className="grid gap-10 md:grid-cols-[1.6fr_1fr_1fr]">
          {/* 브랜드 + 사업자 정보 */}
          <div>
            <Image
              src="/aipd/assets/6ae1be5b7fdd58d85afdd62ff7d6595ed341f3f5.png"
              alt="INERVET"
              width={145}
              height={32}
              className="mb-4 h-7 w-auto"
            />
            <p className="text-sm leading-relaxed text-gray-600">
              반려동물 건강관리의 새로운 기준.
              <br />
              24시간 언제든, 어디서든.
            </p>
            <div className="mt-5 space-y-1 text-xs leading-relaxed text-gray-500">
              <p>(주)이너벳 &nbsp;|&nbsp; 대표자 이대섭</p>
              <p>주소 충청남도 아산시 탕정면 용머리길 40, 1동 522호 (유니콘101)</p>
              <p>
                사업자등록번호 392-88-03447 &nbsp;|&nbsp; 통신판매업 제2025-충남아산-0337호
              </p>
              <p>
                고객 문의{' '}
                <a
                  href={EXTERNAL_LINKS.COMPANY_EMAIL}
                  className="text-pet-600 underline-offset-4 hover:underline"
                >
                  support@inervet.com
                </a>
              </p>
            </div>
          </div>

          {/* Support */}
          <div>
            <h4 className="mb-4 text-sm font-bold text-gray-900">Support</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              {SUPPORT_LINKS.map((l) => (
                <li key={l.name}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-pet-600"
                  >
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h4 className="mb-4 text-sm font-bold text-gray-900">About Us</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              {ABOUT_LINKS.map((l) => (
                <li key={l.name}>
                  <a href={l.href} className="transition-colors hover:text-pet-600">
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-200 pt-6">
          <p className="text-xs text-gray-400">© 2026 INERVET. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
