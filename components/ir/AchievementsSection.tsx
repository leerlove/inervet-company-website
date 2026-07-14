import investmentData from '@/data/investment.json'
import Reveal from '@/components/common/Reveal'

export default function AchievementsSection() {
  const { highlights } = investmentData

  return (
    <section className="py-24 lg:py-32 border-t border-white/5">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent-400 mb-4">
                Achievements
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                핵심 성과
              </h2>
              <p className="text-lg text-gray-400">
                INERVET이 달성한 주요 성과를 확인하세요
              </p>
            </div>
          </Reveal>

          {/* Key Achievements */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {highlights.achievements.map((achievement, index) => (
              <Reveal key={index} delay={index * 0.1}>
                <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 text-center h-full">
                  <div className="text-4xl mb-4 text-accent-400">✓</div>
                  <p className="text-lg font-semibold text-white">{achievement}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Key Metrics */}
          <div className="space-y-4">
            {highlights.keyMetrics.map((metric, index) => (
              <Reveal key={index} delay={Math.min(index * 0.05, 0.3)}>
                <div className="flex items-center justify-between bg-white/[0.03] border border-white/10 rounded-xl p-6">
                  <div className="font-semibold text-gray-300">{metric.label}</div>
                  <div className="text-xl font-bold bg-gradient-to-r from-primary-300 to-accent-300 bg-clip-text text-transparent">
                    {metric.value}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
