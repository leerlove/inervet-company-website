import Reveal from '@/components/common/Reveal'
import metrics from '@/data/metrics.json'

/** Flagship proof — 펫닥터 실적 지표로 "말이 아니라 제품으로 증명" */

const STATS = [
  { value: `${metrics.consultations.toLocaleString()}+`, label: '누적 AI 상담' },
  { value: `${metrics.satisfaction}%`, label: '사용자 만족도' },
  { value: `${metrics.responseTime}분`, label: '평균 연결 시간' },
  { value: metrics.availability, label: '연중무휴 상담' },
]

export default function ProofSection() {
  return (
    <section className="border-t border-white/5 py-24 lg:py-32">
      <div className="container-custom">
        <Reveal>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-accent-400">
            Proof
          </p>
          <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            우리는 말이 아니라
            <br className="sm:hidden" /> 제품으로 증명합니다
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-gray-400">
            AI 펫닥터는 AI 기반의 초개인화 펫 헬스케어 글로벌 서비스입니다. AI 네이티브
            전환을 통해 기존 12명이 하던 운영을 단 3명으로 줄이고, 고객 대응 속도를
            200% 이상 높이는 성과를 달성했습니다.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1}>
              <div className="flex h-full flex-col gap-2 bg-ink-900 p-8 lg:p-10">
                <span className="bg-gradient-to-r from-primary-300 to-accent-300 bg-clip-text text-4xl font-bold text-transparent lg:text-5xl">
                  {s.value}
                </span>
                <span className="text-sm tracking-wide text-gray-400">{s.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
