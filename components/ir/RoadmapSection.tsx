import investmentData from '@/data/investment.json'
import Reveal from '@/components/common/Reveal'

export default function RoadmapSection() {
  const { roadmap } = investmentData

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-success-500/15 text-success-300'
      case 'in_progress':
        return 'bg-primary-500/15 text-primary-300'
      default:
        return 'bg-white/10 text-gray-400'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed':
        return '완료'
      case 'in_progress':
        return '진행중'
      default:
        return '예정'
    }
  }

  return (
    <section className="py-24 lg:py-32 border-t border-white/5">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-12">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent-400 mb-4">
                Roadmap
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                로드맵 (2024-2029)
              </h2>
              <p className="text-lg text-gray-400">
                글로벌 AI 펫 헬스케어 기업으로 성장하는 여정
              </p>
            </div>
          </Reveal>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-white/10 transform -translate-x-1/2"></div>

            {/* Roadmap items */}
            <div className="space-y-12">
              {roadmap.map((item, index) => (
                <Reveal key={index} delay={Math.min(index * 0.05, 0.3)}>
                  <div
                    className={`relative flex flex-col ${
                      index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    } items-center gap-8`}
                  >
                    {/* Content */}
                    <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                      <div
                        className={`inline-block bg-white/[0.03] border border-white/10 rounded-2xl p-6 ${
                          index % 2 === 0 ? 'lg:ml-auto' : 'lg:mr-auto'
                        } max-w-md`}
                      >
                        <div className="flex items-center gap-2 mb-3">
                          <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(item.status)}`}>
                            {getStatusText(item.status)}
                          </span>
                          <span className="text-sm font-semibold text-gray-500">{item.year}</span>
                        </div>
                        <div className="text-lg font-bold text-accent-400 mb-2">{item.stage}</div>
                        <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-gray-400">{item.description}</p>
                      </div>
                    </div>

                    {/* Timeline dot */}
                    <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                      <div className={`w-6 h-6 rounded-full border-4 border-ink-900 shadow-lg ${
                        item.status === 'completed' ? 'bg-success-500' :
                        item.status === 'in_progress' ? 'bg-primary-500' : 'bg-white/20'
                      }`}></div>
                    </div>

                    {/* Spacer */}
                    <div className="flex-1"></div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
