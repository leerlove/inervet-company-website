export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-24 bg-ink-900 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(96,165,250,0.12),transparent_60%)]" />
      <div className="container-custom relative">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent-400 mb-4 animate-fade-in-up">
            About INERVET
          </p>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight text-white animate-fade-in-up delay-100">
            INERVET
          </h1>
          <p className="text-2xl lg:text-3xl text-gray-300 mb-4 animate-fade-in-up delay-200">
            주식회사 이너벳
          </p>
          <p className="text-lg lg:text-xl text-gray-400 leading-relaxed animate-fade-in-up delay-300">
            반려동물 건강관리에 시간과 공간의 경계를 허무는 혁신을 추구합니다
          </p>
        </div>
      </div>
    </section>
  )
}
