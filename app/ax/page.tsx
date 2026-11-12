import type { Metadata } from 'next'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import AxHero from '@/components/ax/AxHero'
import AxProblems from '@/components/ax/AxProblems'
import AxSystem from '@/components/ax/AxSystem'
import AxResults from '@/components/ax/AxResults'
import AxSecurity from '@/components/ax/AxSecurity'
import AxProcess from '@/components/ax/AxProcess'
import AxWhy from '@/components/ax/AxWhy'
import AxFaq from '@/components/ax/AxFaq'
import AxForm from '@/components/ax/AxForm'

export const metadata: Metadata = {
  title: '기업 AI 전환 | 무료 AI 전환 점검 | INERVET',
  description:
    '회사 데이터를 Claude·GPT에 권한대로 안전하게 연결하고, 업무와 고객 관리를 하나의 AI 운영체계로 묶습니다. 엔지니어가 회사 안에 들어가 직접 만듭니다. 무료 AI 전환 점검을 신청하세요.',
  alternates: { canonical: '/ax' },
  openGraph: {
    title: '기업 AI 전환 | INERVET',
    description:
      '회사 데이터를 AI에 안전하게 연결하고, 업무와 고객 관리를 하나의 AI 운영체계로. 무료 AI 전환 점검.',
    url: 'https://inervet.com/ax',
  },
}

export default function AxPage() {
  return (
    <>
      <Header tone="light" />
      <main id="main-content" className="bg-white text-slate-900">
        <AxHero />
        <AxProblems />
        <AxSystem />
        <AxResults />
        <AxSecurity />
        <AxProcess />
        <AxWhy />
        <AxFaq />
        <AxForm />
      </main>
      <Footer />
    </>
  )
}
