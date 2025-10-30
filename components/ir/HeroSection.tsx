import investmentData from '@/data/investment.json'

export default function HeroSection() {
  const { highlights } = investmentData

  return (
    <section className="hero-pattern pt-24 lg:pt-32 pb-16 lg:pb-24 text-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in-up">
            투자 정보 (IR)
          </h1>
          <p className="text-xl lg:text-2xl text-blue-100 animate-fade-in-up delay-100">
            펫 디지털 전환을 선도하는 글로벌 AI 펫 헬스케어 기업에 투자하세요
          </p>
        </div>

        {/* Investment Highlights */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
            <div className="text-sm text-blue-200 mb-2">투자 단계</div>
            <div className="text-3xl font-bold">{highlights.stage}</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
            <div className="text-sm text-blue-200 mb-2">모집 금액</div>
            <div className="text-3xl font-bold">{highlights.amount}</div>
            <div className="text-sm text-blue-200 mt-1">Pre Value {highlights.preValue}</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
            <div className="text-sm text-blue-200 mb-2">예상 ROI</div>
            <div className="text-xl font-bold leading-tight">{highlights.roi}</div>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
            <div className="text-sm text-blue-200 mb-2">목표 BEP</div>
            <div className="text-3xl font-bold">{highlights.bep}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
