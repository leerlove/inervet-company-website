import type { Metadata } from 'next'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import ScrollToTop from '@/components/common/ScrollToTop'
import HeroSection from '@/components/about/HeroSection'
import VisionSection from '@/components/about/VisionSection'
import ValuesSection from '@/components/about/ValuesSection'
import TimelineSection from '@/components/about/TimelineSection'
import CEOSection from '@/components/about/CEOSection'
import OfficeSection from '@/components/about/OfficeSection'

export const metadata: Metadata = {
  title: '회사 소개 | INERVET - AI 펫 헬스케어',
  description:
    'INERVET은 AI 기술과 수의학을 결합하여 반려동물 건강관리의 혁신을 추구합니다. 비전, 미션, 그리고 우리의 이야기를 만나보세요.',
  keywords: [
    'INERVET',
    '이너벳',
    '회사 소개',
    'AI 펫 헬스케어',
    '반려동물',
    '수의사',
    '펫테크',
  ],
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <HeroSection />
        <VisionSection />
        <ValuesSection />
        <TimelineSection />
        <CEOSection />
        <OfficeSection />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
