import Reveal from '@/components/common/Reveal'
import { EXTERNAL_LINKS } from '@/constants/externalLinks'

/** 홈 마무리 — 이중 CTA (컨설팅 문의 / 펫닥터) */
export default function HomeCTA() {
  return (
    <section className="border-t border-white/5 py-28 lg:py-36">
      <div className="container-custom">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-primary-900/40 via-ink-800 to-accent-900/30 px-8 py-16 text-center lg:px-16 lg:py-24">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(96,165,250,0.15),transparent_60%)]" />
          <Reveal>
            <h2 className="mx-auto max-w-3xl text-3xl font-bold leading-snug tracking-tight text-white sm:text-4xl lg:text-5xl">
              당신의 산업에도,
              <br />
              AI 네이티브 전환이 필요합니다.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-blue-100/80">
              직접 만들고 운영해 본 팀과 이야기해 보세요. 어디서부터 시작할지,
              함께 그려드립니다.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-sm font-semibold tracking-wide text-primary-900 transition-all hover:-translate-y-0.5 hover:bg-blue-50"
              >
                부동산 AI 전환 문의
              </a>
              <a
                href={EXTERNAL_LINKS.APP_MAIN}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg border border-white/40 px-8 py-4 text-sm font-semibold tracking-wide text-white transition-colors hover:border-white hover:bg-white/10"
              >
                AI 펫닥터 만나보기
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
