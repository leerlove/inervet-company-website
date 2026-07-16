import investmentData from '@/data/investment.json'

export default function HeroSection() {
  const { highlights } = investmentData

  return (
    <section className="relative overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-24 bg-ink-900 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(96,165,250,0.12),transparent_60%)]" />
      <div className="container-custom relative">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent-400 mb-4 animate-fade-in-up">
            Investor Relations
          </p>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight text-white animate-fade-in-up delay-100">
            투자 정보 (IR)
          </h1>
          <p className="text-xl lg:text-2xl text-gray-400 animate-fade-in-up delay-200">
            AI 네이티브 전환 컨설팅과 AI 펫닥터, 두 축으로 성장하는 AI 네이티브 전환 회사 INERVET에 투자하세요
          </p>
        </div>

        {/* Investment Highlights */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-up delay-300">
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6">
            <div className="text-sm text-gray-500 mb-2">투자 단계</div>
            <div className="text-3xl font-bold text-white">{highlights.stage}</div>
          </div>
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6">
            <div className="text-sm text-gray-500 mb-3">사업 모델</div>
            <div className="space-y-2">
              {highlights.businessLines.map((line, index) => (
                <div key={index} className="text-sm font-bold text-white">
                  {line.label}
                </div>
              ))}
            </div>
          </div>
          {highlights.heroHighlights.map((item, index) => (
            <div key={index} className="bg-white/[0.03] border border-white/10 rounded-2xl p-6">
              <div className="text-sm text-gray-500 mb-2">{item.label}</div>
              <div className="text-3xl font-bold bg-gradient-to-r from-primary-300 to-accent-300 bg-clip-text text-transparent">
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
