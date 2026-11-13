import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'

export const metadata: Metadata = {
  title: '점검 신청 완료 | INERVET',
  robots: { index: false, follow: false },
}

export default function AxThanksPage() {
  return (
    <>
      <Header tone="light" />
      <main id="main-content" className="flex min-h-[70vh] items-center bg-[#F4F6FA] pt-28 text-slate-900">
        <div className="container-custom max-w-2xl py-20 text-center">
          <p className="text-sm font-bold text-primary-600">신청 완료</p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-[-0.03em] text-slate-950 sm:text-5xl">
            무료 AI 전환 점검이 접수되었습니다
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            1영업일 안에 대표가 직접 연락드려 점검 일정을 잡겠습니다. 급하시면{' '}
            <a href="tel:0415621118" className="font-semibold text-slate-900 underline underline-offset-4">
              041-562-1118
            </a>
            로 전화 주세요.
          </p>
          <Link
            href="/ax"
            className="mt-10 inline-flex rounded-full border border-slate-300 bg-white px-7 py-3.5 font-bold text-slate-900 hover:border-slate-400"
          >
            페이지로 돌아가기
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
