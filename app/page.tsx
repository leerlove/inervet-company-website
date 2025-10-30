import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import ScrollToTop from '@/components/common/ScrollToTop'
import HeroSection from '@/components/home/HeroSection'
import KeyMetrics from '@/components/home/KeyMetrics'
import ProblemSection from '@/components/home/ProblemSection'
import ServiceShowcase from '@/components/home/ServiceShowcase'
import HowItWorks from '@/components/home/HowItWorks'
import PricingSection from '@/components/home/PricingSection'
import Testimonials from '@/components/home/Testimonials'
import FinalCTA from '@/components/home/FinalCTA'

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <HeroSection />
        <KeyMetrics />
        <ProblemSection />
        <ServiceShowcase />
        <HowItWorks />
        <PricingSection />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
