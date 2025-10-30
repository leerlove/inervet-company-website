import type { Metadata } from 'next'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import ScrollToTop from '@/components/common/ScrollToTop'
import HeroSection from '@/components/ir/HeroSection'
import AchievementsSection from '@/components/ir/AchievementsSection'
import MarketSection from '@/components/ir/MarketSection'
import TractionSection from '@/components/ir/TractionSection'
import FinancialsSection from '@/components/ir/FinancialsSection'
import RoadmapSection from '@/components/ir/RoadmapSection'
import CTASection from '@/components/ir/CTASection'

export const metadata: Metadata = {
  title: '투자 정보 (IR) | INERVET - AI 펫 헬스케어',
  description:
    'INERVET 투자 정보. Seed 투자 4억원 모집, 3년 내 5배 ROI. TAM 2조 1600억, 만족도 98%, 18,000건 상담 검증. 펫 디지털 전환을 선도하는 글로벌 AI 펫 헬스케어 기업에 투자하세요.',
  keywords: [
    'INERVET',
    '투자',
    'IR',
    'Seed',
    'AI 펫 헬스케어',
    '펫테크',
    '스타트업 투자',
    'ROI',
  ],
}

export default function IRPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <HeroSection />
        <AchievementsSection />
        <MarketSection />
        <TractionSection />
        <FinancialsSection />
        <RoadmapSection />
        <CTASection />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
