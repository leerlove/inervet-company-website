import investmentData from '@/data/investment.json'

export default function FinancialsSection() {
  const { financials } = investmentData

  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              재무 정보
            </h2>
            <p className="text-lg text-gray-600">
              BEP 달성 계획과 수익성 지표
            </p>
          </div>

          {/* BEP Plan */}
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              BEP 달성 계획: 1년 내 58배 성장
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-sm text-gray-500 mb-2">서비스 런칭</div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {financials.bepPlan.start.period}
                </div>
                <div className="text-xl text-gray-700">{financials.bepPlan.start.revenue}</div>
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-500 mb-2">목표 BEP</div>
                <div className="text-3xl font-bold text-primary-900 mb-2">
                  {financials.bepPlan.target.period}
                </div>
                <div className="text-xl text-gray-700 mb-2">{financials.bepPlan.target.revenue}</div>
                <div className="inline-block px-4 py-2 bg-primary-100 text-primary-900 rounded-full text-sm font-bold">
                  {financials.bepPlan.target.growth}
                </div>
              </div>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <div className="text-sm text-gray-500 mb-2">ARPU</div>
              <div className="text-3xl font-bold text-gray-900">{financials.metrics.arpu}</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <div className="text-sm text-gray-500 mb-2">LTV/CAC</div>
              <div className="text-3xl font-bold text-gray-900">{financials.metrics.ltvCac}</div>
            </div>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <div className="text-sm text-gray-500 mb-2">Gross Margin</div>
              <div className="text-3xl font-bold text-gray-900">{financials.metrics.grossMargin}</div>
            </div>
          </div>

          {/* Financial Projections */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              재무 목표 (2027-2029)
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {financials.projections.map((projection, index) => (
                <div
                  key={index}
                  className="border-2 border-gray-200 rounded-xl p-6 text-center hover:border-primary-500 transition-colors"
                >
                  <div className="text-2xl font-bold text-gray-900 mb-4">
                    {projection.year}년
                  </div>
                  <div className="mb-4">
                    <div className="text-sm text-gray-500 mb-1">매출</div>
                    <div className="text-3xl font-bold text-primary-900">{projection.revenue}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">순이익</div>
                    <div className="text-2xl font-bold text-success-600">{projection.profit}</div>
                  </div>
                  {projection.cumulativeProfit && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <div className="text-xs text-gray-500 mb-1">누적 순이익</div>
                      <div className="text-lg font-bold text-gray-900">{projection.cumulativeProfit}</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
