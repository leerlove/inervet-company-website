import Reveal from '@/components/common/Reveal'

/** AI 네이티브 전환 방법론 — 우리가 일하는 방식 */

const STEPS = [
  {
    no: '01',
    title: '진단',
    desc: '현황과 데이터를 진단하고, AI로 가장 큰 레버리지가 나올 지점을 찾습니다.',
  },
  {
    no: '02',
    title: '설계',
    desc: '기능 추가가 아니라, AI를 전제로 한 제품·운영 아키텍처를 다시 설계합니다.',
  },
  {
    no: '03',
    title: '구축',
    desc: '실제로 작동하는 AI 제품과 시스템을 빠르게 만들어 시장에서 검증합니다.',
  },
  {
    no: '04',
    title: '운영',
    desc: '지표를 보며 고도화합니다. 넘겨주고 끝이 아니라, 운영 단계까지 함께합니다.',
  },
]

export default function ApproachSection() {
  return (
    <section id="approach" className="border-t border-white/5 py-24 lg:py-32">
      <div className="container-custom">
        <Reveal>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-gray-500">
            Approach
          </p>
          <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            AI 네이티브 전환,
            <br className="sm:hidden" /> 우리가 일하는 방식
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <Reveal key={s.no} delay={i * 0.1}>
              <div className="flex h-full flex-col bg-ink-900 p-8 lg:p-9">
                <span className="text-sm font-semibold tracking-widest text-primary-400">
                  {s.no}
                </span>
                <h3 className="mt-4 text-xl font-bold text-white">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-400">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
