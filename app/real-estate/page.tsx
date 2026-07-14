import type { Metadata } from 'next'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import ScrollToTop from '@/components/common/ScrollToTop'
import Reveal from '@/components/common/Reveal'

export const metadata: Metadata = {
  title: '부동산 AI 네이티브 전환 | INERVET',
  description:
    '진단부터 설계·구축·운영까지. 부동산 산업의 AI 네이티브 전환을 실행 단계까지 함께 설계하는 컨설팅.',
}

/*
 * NOTE: 아래 서비스/사례 콘텐츠는 톤·구조용 플레이스홀더입니다.
 * 보유하신 실제 서비스 목록·고객 사례로 교체 예정 (문구 다듬기 단계).
 */

const SERVICES = [
  {
    title: 'AI 매물·시세 인텔리전스',
    desc: '흩어진 매물·거래·입지 데이터를 통합해, 의사결정에 바로 쓰는 예측·분석 레이어를 구축합니다.',
  },
  {
    title: 'AI 고객 응대 자동화',
    desc: '문의 상담·매칭·예약을 AI로 자동화해, 24시간 응대와 전환율을 동시에 끌어올립니다.',
  },
  {
    title: '업무 프로세스 자동화',
    desc: '반복 문서·심사·리포트 업무를 AI 워크플로우로 재설계해 운영 비용을 줄입니다.',
  },
  {
    title: 'AI 데이터 인프라 구축',
    desc: 'AI가 전제가 되는 데이터 파이프라인·거버넌스를 설계해 지속 가능한 전환 기반을 만듭니다.',
  },
]

const STEPS = [
  { no: '01', title: '진단', desc: '현황·데이터·조직을 진단하고 AI 레버리지 지점을 찾습니다.' },
  { no: '02', title: '설계', desc: 'AI를 전제로 한 제품·운영 아키텍처를 설계합니다.' },
  { no: '03', title: '구축', desc: '작동하는 AI 제품·시스템을 빠르게 만들어 검증합니다.' },
  { no: '04', title: '운영', desc: '지표를 보며 고도화하고 운영 단계까지 함께합니다.' },
]

const CASES = [
  { tag: 'Case', title: '중개 플랫폼 AI 상담 자동화', desc: '문의 응대 자동화로 응답 시간 단축 및 상담 처리량 개선.' },
  { tag: 'Case', title: '자산운용 리서치 자동화', desc: '시세·입지 분석 리포트 생성을 AI로 자동화해 리서치 리드타임 단축.' },
]

export default function RealEstatePage() {
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
                Real Estate · AI Transformation
              </p>
              <h1 className="max-w-4xl text-4xl font-bold leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl">
                부동산 산업의
                <br />
                <span className="bg-gradient-to-r from-primary-300 via-accent-300 to-primary-200 bg-clip-text text-transparent">
                  AI 네이티브 전환
                </span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg">
                도구 몇 개를 붙이는 수준이 아니라, 제품과 운영을 AI 위에서 다시 설계합니다.
                진단부터 구축·운영까지 실행 단계를 함께합니다.
              </p>
              <a
                href="/contact"
                className="mt-10 inline-flex items-center justify-center rounded-lg bg-white px-7 py-3.5 text-sm font-semibold tracking-wide text-primary-900 transition-all hover:-translate-y-0.5 hover:bg-blue-50"
              >
                컨설팅 문의하기
              </a>
            </Reveal>
          </div>
        </section>

        {/* Services */}
        <section className="border-t border-white/5 py-24 lg:py-32">
          <div className="container-custom">
            <Reveal>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-gray-500">
                Services
              </p>
              <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
                무엇을 함께 만드나요
              </h2>
            </Reveal>
            <div className="mt-14 grid gap-6 md:grid-cols-2">
              {SERVICES.map((s, i) => (
                <Reveal key={s.title} delay={i * 0.1}>
                  <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition-colors hover:border-primary-400/50 lg:p-10">
                    <h3 className="text-xl font-bold text-white sm:text-2xl">{s.title}</h3>
                    <p className="mt-4 text-base leading-relaxed text-gray-400">{s.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Approach */}
        <section className="border-t border-white/5 py-24 lg:py-32">
          <div className="container-custom">
            <Reveal>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-gray-500">
                Approach
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

        {/* Cases */}
        <section className="border-t border-white/5 py-24 lg:py-32">
          <div className="container-custom">
            <Reveal>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-accent-400">
                Work
              </p>
              <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
                대표 사례
              </h2>
            </Reveal>
            <div className="mt-14 grid gap-6 md:grid-cols-2">
              {CASES.map((c, i) => (
                <Reveal key={c.title} delay={i * 0.1}>
                  <div className="h-full rounded-2xl border border-white/10 bg-gradient-to-br from-primary-900/20 to-ink-800 p-8 lg:p-10">
                    <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-300">
                      {c.tag}
                    </span>
                    <h3 className="mt-4 text-xl font-bold text-white sm:text-2xl">{c.title}</h3>
                    <p className="mt-4 text-base leading-relaxed text-gray-400">{c.desc}</p>
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
                  컨설팅 문의하기
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
