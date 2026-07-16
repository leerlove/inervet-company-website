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

          {/* BEP Outlook */}
          <Reveal delay={0.1}>
            <div className="bg-ink-800 border border-white/10 rounded-2xl p-8 lg:p-12 mb-12 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                {financials.bepOutlook.title}
              </h3>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                {financials.bepOutlook.description}
              </p>
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

          {/* Growth Outlook */}
          <Reveal>
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                성장 방향 (2027-2029)
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {financials.growthOutlook.map((outlook, index) => (
                  <div
                    key={index}
                    className="border border-white/10 rounded-xl p-6 text-center hover:border-accent-400/50 transition-colors"
                  >
                    <div className="text-2xl font-bold text-white mb-4">
                      {outlook.year}년
                    </div>
                    <p className="text-gray-400">{outlook.description}</p>
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
