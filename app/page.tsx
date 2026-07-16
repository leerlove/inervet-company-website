import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import ScrollToTop from '@/components/common/ScrollToTop'
import CinematicHero from '@/components/home/umbrella/CinematicHero'
import ThesisSection from '@/components/home/umbrella/ThesisSection'
import TwoPillars from '@/components/home/umbrella/TwoPillars'
import ProofSection from '@/components/home/umbrella/ProofSection'
import ApproachSection from '@/components/home/umbrella/ApproachSection'
import HomeCTA from '@/components/home/umbrella/HomeCTA'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <CinematicHero />
        {/*
          고정된 배경 영상 위로 스크롤되어 올라오는 콘텐츠 레이어.
          불투명 다크 배경(bg-ink-900)이 영상을 덮으며 som.com식 전환을 완성한다.
        */}
        <div className="relative z-10 bg-ink-900">
          <ThesisSection />
          <TwoPillars />
          <ProofSection />
          <ApproachSection />
          <HomeCTA />
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
