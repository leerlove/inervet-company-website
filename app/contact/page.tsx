import type { Metadata } from 'next'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import ScrollToTop from '@/components/common/ScrollToTop'
import HeroSection from '@/components/contact/HeroSection'
import ContactForm from '@/components/contact/ContactForm'
import ContactInfo from '@/components/contact/ContactInfo'

export const metadata: Metadata = {
  title: '문의하기 | INERVET - AI 펫 헬스케어',
  description:
    'INERVET에 문의하세요. 일반 문의, 투자 문의, 파트너 문의를 받고 있습니다. 영업일 기준 2일 내 답변드립니다.',
  keywords: [
    'INERVET',
    '문의',
    '연락처',
    '투자 문의',
    '파트너 문의',
    'AI 펫 헬스케어',
  ],
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <HeroSection />
        <ContactForm />
        <ContactInfo />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
