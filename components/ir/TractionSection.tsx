import investmentData from '@/data/investment.json'
import Reveal from '@/components/common/Reveal'

export default function TractionSection() {
  const { traction, consultingTraction } = investmentData

  return (
    <section className="py-24 lg:py-32 border-t border-white/5">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent-400 mb-4">
                Traction
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                실행력으로 증명하는 트랙션
              </h2>
              <p className="text-lg text-gray-400">
                데이터로 검증된 서비스의 신뢰성
              </p>
            </div>
          </Reveal>

          {/* Consulting Traction */}
          <Reveal>
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                AI 네이티브 전환 컨설팅 실적
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {consultingTraction.map((item, index) => (
                  <Reveal key={index} delay={index * 0.05}>
                    <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 h-full">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs font-semibold text-gray-500">{item.period}</span>
                      </div>
                      <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-500 mb-3">{item.client}</p>
                      <p className="text-sm text-gray-400 mb-4">{item.description}</p>
                      <div className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-bold bg-gradient-to-r from-primary-300 to-accent-300 bg-clip-text text-transparent">
                        {item.result}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>

          {/* MVP Results */}
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
            {traction.mvpResults.map((result, index) => (
              <Reveal key={index} delay={Math.min(index * 0.05, 0.3)}>
                <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 text-center hover:bg-white/[0.06] transition-colors h-full">
                  <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary-300 to-accent-300 bg-clip-text text-transparent mb-2">
                    {result.value}
                  </div>
                  <div className="text-sm font-semibold text-gray-300 mb-1">{result.metric}</div>
                  <div className="text-xs text-gray-500">{result.description}</div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* 8개월간 성과 */}
          <Reveal>
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                AI 펫닥터 핵심 성과
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {traction.achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="bg-white/[0.03] border border-white/10 rounded-xl p-6"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-primary-500 to-accent-500 text-white rounded-lg flex items-center justify-center font-bold">
                        {(index + 1).toString().padStart(2, '0')}
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-2">{achievement.title}</h4>
                        <p className="text-sm text-gray-400">{achievement.description}</p>
                      </div>
                    </div>
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
