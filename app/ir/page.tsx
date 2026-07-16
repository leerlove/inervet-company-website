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
  title: '투자 정보 (IR) | INERVET - AI 네이티브 전환 회사',
  description:
    'INERVET 투자 정보. Seed 라운드. AI 네이티브 전환 컨설팅과 AI 펫닥터, 두 축으로 성장하는 회사. TAM 2조 1600억, 만족도 98%, 18,000건 상담 검증, 제조업 전환 비용 45%+ 절감. AI 네이티브 전환을 선도하는 INERVET에 투자하세요.',
  keywords: [
    'INERVET',
    '투자',
    'IR',
    'Seed',
    'AI 네이티브 전환',
    'AI 컨설팅',
    'AI 펫 헬스케어',
    '펫테크',
    '스타트업 투자',
  ],
}

export default function IRPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-ink-900">
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
