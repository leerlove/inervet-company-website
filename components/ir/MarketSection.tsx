import investmentData from '@/data/investment.json'

export default function MarketSection() {
  const { market } = investmentData

  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              시장 분석
            </h2>
            <p className="text-lg text-gray-600">
              펫 헬스케어 시장의 규모와 성장 가능성
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Domestic Market */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">국내 시장</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-gray-500">TAM</span>
                    <span className="text-2xl font-bold text-primary-900">
                      {market.domestic.tam.value}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{market.domestic.tam.description}</p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-gray-500">SAM</span>
                    <span className="text-2xl font-bold text-accent-600">
                      {market.domestic.sam.value}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{market.domestic.sam.description}</p>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-gray-500">SOM</span>
                    <span className="text-2xl font-bold text-success-600">
                      {market.domestic.som.value}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{market.domestic.som.description}</p>
                </div>
              </div>
            </div>

            {/* Global Market & Pain Points */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">글로벌 시장</h3>
              <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">일본</div>
                    <div className="text-2xl font-bold text-gray-900">{market.global.japan}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">중국</div>
                    <div className="text-2xl font-bold text-gray-900">{market.global.china}</div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-6">주요 Pain Points</h3>
              <div className="space-y-4">
                {market.painPoints.map((point, index) => (
                  <div key={index} className="bg-white rounded-xl p-4 shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-gray-900">{point.problem}</span>
                      <span className="text-xl font-bold text-error-600">{point.rate}</span>
                    </div>
                    <p className="text-sm text-gray-600">{point.impact}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
