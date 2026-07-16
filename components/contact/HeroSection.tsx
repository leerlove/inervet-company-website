import Reveal from '@/components/common/Reveal'

export default function HeroSection() {
  return (
    <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-[radial-gradient(circle_at_50%_0%,rgba(96,165,250,0.12),transparent_60%)]">
      <div className="container-custom">
        <Reveal>
          <div className="max-w-4xl mx-auto text-center">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-accent-400">
              Contact
            </p>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight text-white">
              문의하기
            </h1>
            <p className="text-xl lg:text-2xl text-gray-400">
              궁금한 사항이 있으신가요?<br />
              언제든지 문의해주세요. 빠르게 답변드리겠습니다.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
