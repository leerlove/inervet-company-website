import type { Metadata } from 'next'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import ScrollToTop from '@/components/common/ScrollToTop'
import Reveal from '@/components/common/Reveal'
import { EXTERNAL_LINKS } from '@/constants/externalLinks'
import metrics from '@/data/metrics.json'

export const metadata: Metadata = {
  title: 'AI 펫닥터 | INERVET',
  description:
    '24시간 반려동물 AI 건강 상담. INERVET이 직접 만들고 운영하는 첫 AI 제품, AI 펫닥터.',
}

const STATS = [
  { value: `${metrics.consultations.toLocaleString()}+`, label: '누적 AI 상담' },
  { value: `${metrics.satisfaction}%`, label: '사용자 만족도' },
  { value: `${metrics.responseTime}분`, label: '평균 연결 시간' },
  { value: metrics.availability, label: '연중무휴 상담' },
]

const FEATURES = [
  { title: '증상 상담', desc: '구토·설사·피부 등 증상을 설명하면 AI가 맞춤 분석과 안내를 제공합니다.' },
  { title: '응급 안내', desc: '새벽에도 지금 병원에 가야 할지, 어떻게 대처할지 즉시 안내합니다.' },
  { title: '맞춤 리포트', desc: '우리 아이의 상태를 정리한 맞춤형 분석 리포트를 받아볼 수 있습니다.' },
]

export default function PetDoctorPage() {
  return (
    <>
      <Header />
      <main className="bg-ink-900 text-white">
        {/* Hero band */}
        <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(139,92,246,0.16),transparent_60%)]" />
          <div className="container-custom relative">
            <Reveal>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-accent-400">
                Product · AI Pet Doctor
              </p>
              <h1 className="max-w-4xl text-4xl font-bold leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl">
                24시간 반려동물
                <br />
                <span className="bg-gradient-to-r from-accent-300 via-primary-300 to-accent-200 bg-clip-text text-transparent">
                  AI 건강 상담
                </span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg">
                AI 펫닥터는 INERVET이 직접 만들고 운영하는 첫 AI 제품입니다.
                우리의 AI 실행력을 시장에서 증명하고 있는 서비스입니다.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href={EXTERNAL_LINKS.APP_MAIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg bg-white px-7 py-3.5 text-sm font-semibold tracking-wide text-primary-900 transition-all hover:-translate-y-0.5 hover:bg-blue-50"
                >
                  서비스 사이트 바로가기
                </a>
                <div className="flex gap-3">
                  <a
                    href={EXTERNAL_LINKS.APP_DOWNLOAD_IOS}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-lg border border-white/40 px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    App Store
                  </a>
                  <a
                    href={EXTERNAL_LINKS.APP_DOWNLOAD_ANDROID}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-lg border border-white/40 px-5 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    Google Play
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Stats */}
        <section className="border-t border-white/5 py-20 lg:py-24">
          <div className="container-custom">
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 lg:grid-cols-4">
              {STATS.map((s, i) => (
                <Reveal key={s.label} delay={i * 0.1}>
                  <div className="flex h-full flex-col gap-2 bg-ink-900 p-8 lg:p-10">
                    <span className="bg-gradient-to-r from-accent-300 to-primary-300 bg-clip-text text-4xl font-bold text-transparent lg:text-5xl">
                      {s.value}
                    </span>
                    <span className="text-sm tracking-wide text-gray-400">{s.label}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="border-t border-white/5 py-24 lg:py-32">
          <div className="container-custom">
            <Reveal>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-gray-500">
                Features
              </p>
              <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
                꼭 필요한 순간에, 바로
              </h2>
            </Reveal>
            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {FEATURES.map((f, i) => (
                <Reveal key={f.title} delay={i * 0.1}>
                  <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition-colors hover:border-accent-500/50">
                    <h3 className="text-xl font-bold text-white">{f.title}</h3>
                    <p className="mt-3 text-base leading-relaxed text-gray-400">{f.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Handoff CTA */}
        <section className="border-t border-white/5 py-24 lg:py-32">
          <div className="container-custom">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-accent-900/40 via-ink-800 to-primary-900/30 px-8 py-16 text-center lg:px-16 lg:py-20">
              <Reveal>
                <h2 className="mx-auto max-w-2xl text-3xl font-bold leading-snug tracking-tight text-white sm:text-4xl">
                  우리 아이만을 위한 AI 주치의,<br />지금 만나보세요
                </h2>
                <a
                  href={EXTERNAL_LINKS.APP_MAIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-10 inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-sm font-semibold tracking-wide text-primary-900 transition-all hover:-translate-y-0.5 hover:bg-blue-50"
                >
                  AI 펫닥터 시작하기
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
