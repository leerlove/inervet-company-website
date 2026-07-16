import investmentData from '@/data/investment.json'
import Reveal from '@/components/common/Reveal'

type RoadmapItem = {
  stage: string
  year: string
  title: string
  description: string
  status: string
}

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

function Timeline({ items }: { items: RoadmapItem[] }) {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute bottom-0 left-1/2 top-0 hidden w-1 -translate-x-1/2 transform bg-white/10 lg:block"></div>

      <div className="space-y-12">
        {items.map((item, index) => (
          <Reveal key={`${item.stage}-${index}`} delay={Math.min(index * 0.05, 0.3)}>
            <div
              className={`relative flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } items-center gap-8`}
            >
              {/* Content */}
              <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                <div
                  className={`inline-block rounded-2xl border border-white/10 bg-white/[0.03] p-6 ${
                    index % 2 === 0 ? 'lg:ml-auto' : 'lg:mr-auto'
                  } max-w-md`}
                >
                  <div className="mb-3 flex items-center gap-2">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-bold ${getStatusColor(item.status)}`}
                    >
                      {getStatusText(item.status)}
                    </span>
                    <span className="text-sm font-semibold text-gray-500">{item.year}</span>
                  </div>
                  <div className="mb-2 text-lg font-bold text-accent-400">{item.stage}</div>
                  <h3 className="mb-2 text-xl font-bold text-white">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </div>

              {/* Timeline dot */}
              <div className="absolute left-1/2 hidden -translate-x-1/2 transform items-center justify-center lg:flex">
                <div
                  className={`h-6 w-6 rounded-full border-4 border-ink-900 shadow-lg ${
                    item.status === 'completed'
                      ? 'bg-success-500'
                      : item.status === 'in_progress'
                        ? 'bg-primary-500'
                        : 'bg-white/20'
                  }`}
                ></div>
              </div>

              {/* Spacer */}
              <div className="flex-1"></div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  )
}

export default function RoadmapSection() {
  const { roadmap, aiNativeRoadmap } = investmentData

  return (
    <section className="border-t border-white/5 py-24 lg:py-32">
      <div className="container-custom">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <div className="mb-12 text-center">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-accent-400">
                Roadmap
              </p>
              <h2 className="mb-4 text-3xl font-bold text-white lg:text-4xl">로드맵</h2>
              <p className="text-lg text-gray-400">
                AI 네이티브 전환을 축으로, 두 사업이 함께 성장합니다
              </p>
            </div>
          </Reveal>

          {/* 1) AI 네이티브 전환 (주력) */}
          <Reveal>
            <div className="mb-10 text-center">
              <h3 className="inline-block rounded-full border border-primary-400/30 bg-primary-500/10 px-5 py-2 text-sm font-bold text-primary-200">
                AI 네이티브 전환 · 2026–2027
              </h3>
            </div>
          </Reveal>
          <Timeline items={aiNativeRoadmap} />

          {/* 2) AI 펫 헬스케어 */}
          <Reveal>
            <div className="mb-10 mt-24 text-center">
              <h3 className="inline-block rounded-full border border-accent-400/30 bg-accent-500/10 px-5 py-2 text-sm font-bold text-accent-200">
                AI 펫 헬스케어 · 2024–2029
              </h3>
            </div>
          </Reveal>
          <Timeline items={roadmap} />
        </div>
      </div>
    </section>
  )
}
