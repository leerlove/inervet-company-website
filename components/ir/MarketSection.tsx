import investmentData from '@/data/investment.json'
import Reveal from '@/components/common/Reveal'

export default function MarketSection() {
  const { market, consultingMarket } = investmentData

  return (
    <section className="py-24 lg:py-32 border-t border-white/5">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent-400 mb-4">
                Market
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                시장 분석
              </h2>
              <p className="text-lg text-gray-400">
                AI 네이티브 전환 컨설팅과 AI 펫 헬스케어, 두 시장의 규모와 성장 가능성
              </p>
            </div>
          </Reveal>

          {/* Consulting Market */}
          <Reveal>
            <div className="mb-16">
              <div className="mb-8">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent-400 mb-3">
                  {consultingMarket.eyebrow}
                </p>
                <h3 className="text-2xl font-bold text-white mb-2">{consultingMarket.title}</h3>
                <p className="text-gray-400">{consultingMarket.description}</p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-6">
                {consultingMarket.stats.map((stat, index) => (
                  <Reveal key={index} delay={index * 0.05}>
                    <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 h-full">
                      <div className="text-sm font-semibold text-gray-500 mb-2">{stat.label}</div>
                      <div className="text-xl font-bold bg-gradient-to-r from-primary-300 to-accent-300 bg-clip-text text-transparent mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-400 mb-3">{stat.detail}</div>
                      <div className="text-xs text-gray-500">출처: {stat.source}</div>
                    </div>
                  </Reveal>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {consultingMarket.industryStats.map((stat, index) => (
                  <Reveal key={index} delay={index * 0.05}>
                    <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 h-full">
                      <div className="text-sm font-semibold text-gray-500 mb-2">{stat.label}</div>
                      <div className="text-xl font-bold text-accent-400 mb-1">{stat.value}</div>
                      <div className="text-sm text-gray-400 mb-3">{stat.detail}</div>
                      <div className="text-xs text-gray-500">출처: {stat.source}</div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Pet Healthcare Market */}
          <h3 className="text-2xl font-bold text-white mb-8">AI 펫 헬스케어 시장</h3>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Domestic Market */}
            <Reveal>
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">국내 시장</h3>
                <div className="space-y-4">
                  <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-gray-500">TAM</span>
                      <span className="text-2xl font-bold bg-gradient-to-r from-primary-300 to-accent-300 bg-clip-text text-transparent">
                        {market.domestic.tam.value}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400">{market.domestic.tam.description}</p>
                  </div>

                  <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-gray-500">SAM</span>
                      <span className="text-2xl font-bold text-accent-400">
                        {market.domestic.sam.value}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400">{market.domestic.sam.description}</p>
                  </div>

                  <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-gray-500">SOM</span>
                      <span className="text-2xl font-bold text-success-400">
                        {market.domestic.som.value}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400">{market.domestic.som.description}</p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Global Market & Pain Points */}
            <Reveal delay={0.1}>
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">글로벌 시장</h3>
                <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 mb-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-gray-500 mb-1">일본</div>
                      <div className="text-2xl font-bold text-white">{market.global.japan}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">중국</div>
                      <div className="text-2xl font-bold text-white">{market.global.china}</div>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-6">주요 Pain Points</h3>
                <div className="space-y-4">
                  {market.painPoints.map((point, index) => (
                    <div key={index} className="bg-white/[0.03] border border-white/10 rounded-xl p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-white">{point.problem}</span>
                        <span className="text-xl font-bold text-error-400">{point.rate}</span>
                      </div>
                      <p className="text-sm text-gray-400">{point.impact}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
