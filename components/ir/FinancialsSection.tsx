import investmentData from '@/data/investment.json'
import Reveal from '@/components/common/Reveal'

export default function FinancialsSection() {
  const { financials } = investmentData

  return (
    <section className="py-24 lg:py-32 border-t border-white/5">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent-400 mb-4">
                Financials
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                재무 정보
              </h2>
              <p className="text-lg text-gray-400">
                BEP 달성 계획과 수익성 지표
              </p>
            </div>
          </Reveal>

          {/* BEP Plan */}
          <Reveal delay={0.1}>
            <div className="bg-ink-800 border border-white/10 rounded-2xl p-8 lg:p-12 mb-12">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">
                BEP 달성 계획: 1년 내 58배 성장
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-sm text-gray-500 mb-2">서비스 런칭</div>
                  <div className="text-3xl font-bold text-white mb-2">
                    {financials.bepPlan.start.period}
                  </div>
                  <div className="text-xl text-gray-400">{financials.bepPlan.start.revenue}</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-500 mb-2">목표 BEP</div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary-300 to-accent-300 bg-clip-text text-transparent mb-2">
                    {financials.bepPlan.target.period}
                  </div>
                  <div className="text-xl text-gray-400 mb-2">{financials.bepPlan.target.revenue}</div>
                  <div className="inline-block px-4 py-2 bg-white/10 text-white rounded-full text-sm font-bold">
                    {financials.bepPlan.target.growth}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Key Metrics */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Reveal>
              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6 text-center h-full">
                <div className="text-sm text-gray-500 mb-2">ARPU</div>
                <div className="text-3xl font-bold text-white">{financials.metrics.arpu}</div>
              </div>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6 text-center h-full">
                <div className="text-sm text-gray-500 mb-2">LTV/CAC</div>
                <div className="text-3xl font-bold text-white">{financials.metrics.ltvCac}</div>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6 text-center h-full">
                <div className="text-sm text-gray-500 mb-2">Gross Margin</div>
                <div className="text-3xl font-bold text-white">{financials.metrics.grossMargin}</div>
              </div>
            </Reveal>
          </div>

          {/* Financial Projections */}
          <Reveal>
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                재무 목표 (2027-2029)
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {financials.projections.map((projection, index) => (
                  <div
                    key={index}
                    className="border border-white/10 rounded-xl p-6 text-center hover:border-accent-400/50 transition-colors"
                  >
                    <div className="text-2xl font-bold text-white mb-4">
                      {projection.year}년
                    </div>
                    <div className="mb-4">
                      <div className="text-sm text-gray-500 mb-1">매출</div>
                      <div className="text-3xl font-bold bg-gradient-to-r from-primary-300 to-accent-300 bg-clip-text text-transparent">
                        {projection.revenue}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">순이익</div>
                      <div className="text-2xl font-bold text-success-400">{projection.profit}</div>
                    </div>
                    {projection.cumulativeProfit && (
                      <div className="mt-4 pt-4 border-t border-white/10">
                        <div className="text-xs text-gray-500 mb-1">누적 순이익</div>
                        <div className="text-lg font-bold text-white">{projection.cumulativeProfit}</div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
