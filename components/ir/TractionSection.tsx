import investmentData from '@/data/investment.json'

export default function TractionSection() {
  const { traction } = investmentData

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              MVP를 통한 초기 시장 검증
            </h2>
            <p className="text-lg text-gray-600">
              데이터로 검증된 서비스의 신뢰성
            </p>
          </div>

          {/* MVP Results */}
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
            {traction.mvpResults.map((result, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-3xl lg:text-4xl font-bold text-primary-900 mb-2">
                  {result.value}
                </div>
                <div className="text-sm font-semibold text-gray-700 mb-1">{result.metric}</div>
                <div className="text-xs text-gray-500">{result.description}</div>
              </div>
            ))}
          </div>

          {/* 8개월간 성과 */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              8개월간 핵심 성과
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {traction.achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-900 text-white rounded-lg flex items-center justify-center font-bold">
                      {(index + 1).toString().padStart(2, '0')}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">{achievement.title}</h4>
                      <p className="text-sm text-gray-600">{achievement.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
