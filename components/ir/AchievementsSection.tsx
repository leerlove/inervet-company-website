import investmentData from '@/data/investment.json'

export default function AchievementsSection() {
  const { highlights } = investmentData

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              핵심 성과
            </h2>
            <p className="text-lg text-gray-600">
              INERVET이 달성한 주요 성과를 확인하세요
            </p>
          </div>

          {/* Key Achievements */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {highlights.achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-6 text-center"
              >
                <div className="text-4xl mb-4">✓</div>
                <p className="text-lg font-semibold text-gray-900">{achievement}</p>
              </div>
            ))}
          </div>

          {/* Key Metrics */}
          <div className="space-y-4">
            {highlights.keyMetrics.map((metric, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-gray-50 rounded-xl p-6"
              >
                <div className="font-semibold text-gray-700">{metric.label}</div>
                <div className="text-xl font-bold text-primary-900">{metric.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
