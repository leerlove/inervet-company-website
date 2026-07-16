import type { Metadata } from 'next'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import ScrollToTop from '@/components/common/ScrollToTop'
import Reveal from '@/components/common/Reveal'

export const metadata: Metadata = {
  title: 'AI 네이티브 전환 | INERVET',
  description:
    'FDE가 직접 고객사에 투입되어 온톨로지 기반으로 흩어진 데이터를 연결하고, DataOps + AgenticOps 환경을 구축합니다. 진단부터 운영 인계까지.',
}

const DIFFERENTIATORS = [
  {
    title: 'FDE 직접 투입',
    desc: '만들어 넘기고 끝이 아닙니다. FDE(Forward Deployed Engineer)가 고객사 안으로 들어가, 담당자와 함께 설계하고 구축합니다.',
  },
  {
    title: '온톨로지 기반 설계',
    desc: '그 회사의 업(業)을 온톨로지로 모델링합니다. 정해진 템플릿이 아니라, 그 기업에만 맞는 AI 네이티브 구조를 그립니다.',
  },
  {
    title: '운영까지 내재화',
    desc: '고객 담당자를 교육하고, 스스로 운영 가능해질 때까지 운영을 대행합니다. 전환의 끝은 인계입니다.',
  },
]

const STEPS = [
  {
    no: '01',
    title: 'AI 네이티브 전환 진단',
    desc: '고객이 원하는 전환 영역을 파악하고, 데이터 상태와 현재 업무 프로세스를 진단해 전환 리포트를 제공합니다.',
  },
  {
    no: '02',
    title: 'MVP 수행',
    desc: '초기 1달간 1개 영역을 실제로 AI 네이티브 전환합니다. 고객과 데모를 리뷰하며 방향을 맞춥니다.',
  },
  {
    no: '03',
    title: '온톨로지 구축',
    desc: '흩어진 데이터를 연결하는 온톨로지를 구축해, 기업의 업을 기계가 이해할 수 있는 구조로 만듭니다.',
  },
  {
    no: '04',
    title: 'AgenticOS 구축',
    desc: '온톨로지 위에 에이전트와 업무 플로우를 구축해 실시간 자동화와 의사결정 지원을 구현합니다.',
  },
  {
    no: '05',
    title: '운영자 교육',
    desc: '구축 전 과정을 고객 담당자와 함께 진행하고, 사내에서 AI 네이티브 운영이 가능하도록 교육합니다.',
  },
  {
    no: '06',
    title: '인계',
    desc: '운영 담당자가 직접 운영할 수 있을 때까지 운영을 대행한 뒤, 안정적으로 인계합니다.',
  },
]

const OPS = [
  {
    title: 'DataOps',
    desc: '구두 승인·채팅·문서로 흩어져 잠자던 데이터를 온톨로지 기반의 연결된 데이터로 통합하고, 기업 내 데이터를 자동으로 확보·갱신합니다.',
  },
  {
    title: 'AgenticOps',
    desc: '연결된 데이터 위에서 에이전트가 실시간으로 업무를 자동화하고, 의사결정에 필요한 인사이트를 제시합니다.',
  },
]

const LEVERAGE = [
  { title: '효율 극대화', desc: '레거시 제약이 적어, 처음부터 최적 구조로 설계할 수 있습니다.' },
  { title: '성과 극대화', desc: 'AI 네이티브 효과가 가장 크게 나타나는 영역이 1차 산업입니다.' },
  { title: '시간 단축', desc: '덧대고 고치는 과정 없이, 빠르게 전환을 실현합니다.' },
]

const CASES = [
  {
    period: '2026.02 – 2026.04',
    sector: '제조 · 3D 컨셉 도면 설계',
    client: '국내 제조 기업',
    title: '수동 설계 프로세스 전 구간 자동화',
    desc: '고객 미팅부터 제품 기획, 컨셉 도면 설계와 수정, 최종 도면 생성, 맞춤 업체 연결까지 수동으로 하던 전 과정을 AI 네이티브로 전환했습니다.',
    result: '비용 45% 이상 절감',
  },
  {
    period: '2026.06 – 진행 중',
    sector: '토지개발',
    client: '국내 토지개발 전문 기업',
    title: '의사결정 가이드와 문서 자동 생성',
    desc: '토지개발 관련 법률·인허가·동향을 자동으로 반영해 인사이트를 도출하고, 에이전트가 사업 진행 의사결정을 가이드합니다. 사업계획서·투자의뢰서·공공기관 제출 문서를 자동 생성합니다.',
    result: 'MVP 완료 · 전사 확장 예정',
  },
]

const TEAM = [
  { role: 'FDE 2명', detail: '비즈니스 분석 전문가 + AI 개발·구축 PM (MVP 기준)' },
  { role: '+ AI Agent 개발자', detail: '본 사업 범위에 따라 추가 투입' },
  { role: '+ 문서 작성 담당자', detail: '본 사업 범위에 따라 추가 투입' },
]

export default function TransformationPage() {
  return (
    <>
      <Header />
      <main className="bg-ink-900 text-white">
        {/* Hero */}
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
                FDE가 직접 고객사에 투입되어, 흩어진 데이터를 온톨로지로 연결하고
                에이전트가 일하는 환경을 구축합니다. 진단부터 운영 인계까지 함께합니다.
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

        {/* Differentiators */}
        <section className="border-t border-white/5 py-24 lg:py-32">
          <div className="container-custom">
            <Reveal>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-gray-500">
                Why We&apos;re Different
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

        {/* What we build — DataOps + AgenticOps */}
        <section className="border-t border-white/5 py-24 lg:py-32">
          <div className="container-custom">
            <Reveal>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-accent-400">
                What We Build
              </p>
              <h2 className="max-w-3xl text-3xl font-bold leading-snug tracking-tight text-white sm:text-4xl">
                잠자던 데이터를 연결해,
                <br />
                <span className="text-blue-200/90">에이전트가 일하게</span> 만듭니다.
              </h2>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-400">
                기업 안에는 구두 승인, 채팅, 문서로 흩어져 활용되지 못하는 데이터가 쌓여
                있습니다. 이를 온톨로지 기반의 연결된 데이터로 통합하고 자동으로 확보·갱신해,
                실시간 업무 자동화와 의사결정을 돕는 환경을 만듭니다.
              </p>
            </Reveal>
            <div className="mt-14 grid gap-6 md:grid-cols-2">
              {OPS.map((o, i) => (
                <Reveal key={o.title} delay={i * 0.12}>
                  <div className="h-full rounded-2xl border border-white/10 bg-gradient-to-br from-primary-900/20 to-ink-800 p-8 lg:p-10">
                    <h3 className="bg-gradient-to-r from-primary-300 to-accent-300 bg-clip-text text-2xl font-bold text-transparent">
                      {o.title}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-gray-400">{o.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Process — 6 steps */}
        <section className="border-t border-white/5 py-24 lg:py-32">
          <div className="container-custom">
            <Reveal>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-gray-500">
                Process
              </p>
              <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
                진단에서 인계까지, 6단계
              </h2>
            </Reveal>
            <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:grid-cols-2 lg:grid-cols-3">
              {STEPS.map((s, i) => (
                <Reveal key={s.no} delay={i * 0.08}>
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

        {/* Engagement — 기간 · 팀 */}
        <section className="border-t border-white/5 py-24 lg:py-32">
          <div className="container-custom">
            <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
              <Reveal>
                <div>
                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-gray-500">
                    Engagement
                  </p>
                  <h2 className="text-3xl font-bold leading-snug tracking-tight text-white sm:text-4xl">
                    한 달이면,
                    <br />
                    <span className="bg-gradient-to-r from-primary-300 to-accent-300 bg-clip-text text-transparent">
                      작동하는 것
                    </span>
                    을 봅니다.
                  </h2>
                  <p className="mt-6 text-base leading-relaxed text-gray-400 sm:text-lg">
                    진단과 MVP 데모 시연까지 통상 1~2개월. 소수 정예가 고객사에 들어가
                    실제로 작동하는 결과를 먼저 보여드립니다.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="space-y-3">
                  {TEAM.map((t) => (
                    <div
                      key={t.role}
                      className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 lg:p-7"
                    >
                      <h3 className="text-lg font-bold text-white">{t.role}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-gray-400">{t.detail}</p>
                    </div>
                  ))}
                  <p className="pt-2 text-sm text-gray-500">
                    본 사업은 범위에 따라 최대 5명 이내의 소수 정예로 진행합니다.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Why primary industries + focus sector */}
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
                그릴 수 있어 효율과 성과, 시간 단축이 극대화됩니다. 그래서 첫 진입 섹터로
                토지개발·부동산을 공략하고 있습니다.
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

        {/* Cases */}
        <section className="border-t border-white/5 py-24 lg:py-32">
          <div className="container-custom">
            <Reveal>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-accent-400">
                Work
              </p>
              <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
                실제로 전환한 것들
              </h2>
            </Reveal>
            <div className="mt-14 grid gap-6 lg:grid-cols-2">
              {CASES.map((c, i) => (
                <Reveal key={c.title} delay={i * 0.12}>
                  <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-gradient-to-br from-primary-900/20 to-ink-800 p-8 lg:p-10">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
                      <span className="font-semibold uppercase tracking-[0.2em] text-primary-300">
                        {c.sector}
                      </span>
                      <span className="text-gray-600">·</span>
                      <span className="text-gray-500">{c.period}</span>
                    </div>
                    <h3 className="mt-4 text-xl font-bold text-white sm:text-2xl">{c.title}</h3>
                    <p className="mt-2 text-sm text-gray-500">{c.client}</p>
                    <p className="mt-4 flex-1 text-base leading-relaxed text-gray-400">{c.desc}</p>
                    <div className="mt-8 border-t border-white/10 pt-5">
                      <span className="bg-gradient-to-r from-primary-300 to-accent-300 bg-clip-text text-lg font-bold text-transparent">
                        {c.result}
                      </span>
                    </div>
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
                  전환, 어디서부터 시작할지
                  <br />
                  함께 그려드립니다
                </h2>
                <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-blue-100/80">
                  진단부터 시작합니다. 현재 데이터와 업무 프로세스를 보고,
                  어디를 먼저 전환할지 리포트로 제안드립니다.
                </p>
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
