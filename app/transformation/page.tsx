import type { Metadata } from 'next'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import ScrollToTop from '@/components/common/ScrollToTop'
import Reveal from '@/components/common/Reveal'

export const metadata: Metadata = {
  title: 'AI 네이티브 전환 | INERVET',
  description:
    'FDE가 직접 고객사에 투입되어, 온톨로지 기반으로 그 기업만의 AI 네이티브 전환을 설계·구축합니다. 현재 토지개발·부동산 섹터에 집중.',
}

const DIFFERENTIATORS = [
  {
    title: 'FDE 직접 투입',
    desc: '만들어 넘기고 끝이 아닙니다. FDE(Forward Deployed Engineer)가 고객사 안으로 들어가, 현장에서 함께 설계하고 구축하고 운영합니다.',
  },
  {
    title: '온톨로지 기반 설계',
    desc: '그 회사의 업(業)을 온톨로지로 모델링합니다. 정해진 템플릿이 아니라, 그 기업에만 맞는 AI 네이티브 구조를 그립니다.',
  },
  {
    title: '백지에서 그리는 최적 설계',
    desc: '기존 시스템에 AI를 덧대는 방식이 아니라, 처음부터 AI를 전제로 가장 효율적인 그림을 설계합니다.',
  },
]

const LEVERAGE = [
  { title: '효율 극대화', desc: '레거시 제약이 적어, 처음부터 최적 구조로 설계할 수 있습니다.' },
  { title: '성과 극대화', desc: 'AI 네이티브 효과가 가장 크게 나타나는 영역이 1차 산업입니다.' },
  { title: '시간 단축', desc: '덧대고 고치는 과정 없이, 빠르게 전환을 실현합니다.' },
]

const STEPS = [
  { no: '01', title: '진단', desc: '현황·데이터·업(業)을 깊이 이해하고 전환 레버리지 지점을 찾습니다.' },
  { no: '02', title: '온톨로지 설계', desc: '고객의 업을 온톨로지로 모델링해 그 기업만의 AI 구조를 설계합니다.' },
  { no: '03', title: '구축', desc: 'FDE가 현장에서 작동하는 AI 제품·시스템을 만들고 검증합니다.' },
  { no: '04', title: '운영·고도화', desc: '상주하며 지표를 보고 고도화합니다. 운영 단계까지 함께합니다.' },
]

export default function TransformationPage() {
  return (
    <>
      <Header />
      <main className="bg-ink-900 text-white">
        {/* Hero band */}
        <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(96,165,250,0.14),transparent_60%)]" />
          <div className="container-custom relative">
            <Reveal>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-accent-400">
                AI Native Transformation
              </p>
              <h1 className="max-w-4xl text-4xl font-bold leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl">
                AI를 납품하지 않습니다.
                <br />
                <span className="bg-gradient-to-r from-primary-300 via-accent-300 to-primary-200 bg-clip-text text-transparent">
                  고객사 안에서, 함께 전환합니다.
                </span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg">
                FDE가 직접 고객사에 투입되어, 온톨로지 기반으로 그 기업만의 AI 네이티브
                구조를 설계하고 구축합니다. 외주 개발이 아니라, 전환의 파트너입니다.
              </p>
              <a
                href="/contact"
                className="mt-10 inline-flex items-center justify-center rounded-lg bg-white px-7 py-3.5 text-sm font-semibold tracking-wide text-primary-900 transition-all hover:-translate-y-0.5 hover:bg-blue-50"
              >
                전환 컨설팅 문의하기
              </a>
            </Reveal>
          </div>
        </section>

        {/* Differentiators — 왜 다른가 */}
        <section className="border-t border-white/5 py-24 lg:py-32">
          <div className="container-custom">
            <Reveal>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-gray-500">
                Why We're Different
              </p>
              <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
                AI 개발사가 아니라,
                <br className="sm:hidden" /> 전환의 파트너
              </h2>
            </Reveal>
            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {DIFFERENTIATORS.map((d, i) => (
                <Reveal key={d.title} delay={i * 0.1}>
                  <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition-colors hover:border-primary-400/50 lg:p-9">
                    <h3 className="text-xl font-bold text-white">{d.title}</h3>
                    <p className="mt-4 text-base leading-relaxed text-gray-400">{d.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Why primary industries — 그린필드 레버리지 */}
        <section className="border-t border-white/5 py-24 lg:py-32">
          <div className="container-custom">
            <Reveal>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-accent-400">
                Why Primary Industries
              </p>
              <h2 className="max-w-3xl text-3xl font-bold leading-snug tracking-tight text-white sm:text-4xl">
                가장 큰 도약은
                <br />
                <span className="text-blue-200/90">백지에서</span> 시작됩니다.
              </h2>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-400">
                AI 네이티브 전환의 효과가 가장 크게 나타나는 곳은 1차 산업입니다. 디지털
                레거시가 얇은 백지 상태의 기업일수록, 처음부터 AI를 전제로 최적의 구조를
                그릴 수 있어 효율과 성과, 시간 단축이 극대화됩니다.
              </p>
            </Reveal>
            <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:grid-cols-3">
              {LEVERAGE.map((l, i) => (
                <Reveal key={l.title} delay={i * 0.1}>
                  <div className="flex h-full flex-col bg-ink-900 p-8 lg:p-9">
                    <h3 className="text-lg font-bold text-white">{l.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-gray-400">{l.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Focus sector — 토지개발/부동산 + 익명 대표 프로젝트 */}
        <section className="border-t border-white/5 py-24 lg:py-32">
          <div className="container-custom">
            <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
              <Reveal>
                <div>
                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-gray-500">
                    Focus Sector
                  </p>
                  <h2 className="text-3xl font-bold leading-snug tracking-tight text-white sm:text-4xl">
                    지금, 토지개발·부동산 섹터
                  </h2>
                  <p className="mt-6 text-base leading-relaxed text-gray-400 sm:text-lg">
                    첫 진입 섹터로 토지개발·부동산을 공략합니다. 백지 상태의 1차 산업에서
                    AI 네이티브 전환의 레버리지가 가장 크기 때문입니다.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-primary-900/25 to-ink-800 p-8 lg:p-10">
                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-300">
                    Flagship Project
                  </span>
                  <h3 className="mt-4 text-2xl font-bold text-white">
                    국내 토지개발 전문 기업과 진행 중
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-gray-400">
                    현재 토지개발 전문 기업과 AI 네이티브 전환 프로젝트를 수행하고 있습니다.
                    FDE가 상주하며 온톨로지 기반으로 해당 기업만의 AI 구조를 설계·구축하고
                    있습니다.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Method */}
        <section className="border-t border-white/5 py-24 lg:py-32">
          <div className="container-custom">
            <Reveal>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-gray-500">
                How We Work
              </p>
              <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
                일하는 방식
              </h2>
            </Reveal>
            <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:grid-cols-2 lg:grid-cols-4">
              {STEPS.map((s, i) => (
                <Reveal key={s.no} delay={i * 0.1}>
                  <div className="flex h-full flex-col bg-ink-900 p-8 lg:p-9">
                    <span className="text-sm font-semibold tracking-widest text-primary-400">{s.no}</span>
                    <h3 className="mt-4 text-xl font-bold text-white">{s.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-gray-400">{s.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-white/5 py-24 lg:py-32">
          <div className="container-custom">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-primary-900/40 via-ink-800 to-accent-900/30 px-8 py-16 text-center lg:px-16 lg:py-20">
              <Reveal>
                <h2 className="mx-auto max-w-2xl text-3xl font-bold leading-snug tracking-tight text-white sm:text-4xl">
                  전환, 어디서부터 시작할지<br />함께 그려드립니다
                </h2>
                <a
                  href="/contact"
                  className="mt-10 inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-sm font-semibold tracking-wide text-primary-900 transition-all hover:-translate-y-0.5 hover:bg-blue-50"
                >
                  전환 컨설팅 문의하기
                </a>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
