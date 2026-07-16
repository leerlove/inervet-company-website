import Reveal from '@/components/common/Reveal'

/** "왜 지금 AI 네이티브 전환인가" — 짧은 매니페스토 */
export default function ThesisSection() {
  return (
    <section className="border-t border-white/5 py-24 lg:py-32">
      <div className="container-custom max-w-5xl">
        <Reveal>
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-accent-400">
            Why Now
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-3xl font-bold leading-snug tracking-tight text-white sm:text-4xl lg:text-5xl">
            AI는 이제 기능이 아니라,
            <br />
            <span className="text-blue-200/90">사업의 전제</span>가 되었습니다.
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-gray-400">
            도구를 몇 개 붙이는 수준으로는 부족합니다. 제품, 운영, 조직의 방식 자체를
            AI 위에서 다시 설계해야 합니다. INERVET은 그 전환을 이론이 아니라
            <span className="text-white"> 직접 만들고 운영하는 제품</span>으로 증명해 왔고,
            같은 실행력을 다른 산업으로 확장합니다.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
