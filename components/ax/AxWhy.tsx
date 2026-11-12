import Reveal from '@/components/common/Reveal'

const POINTS = [
  { k: '17년+', v: '오픈소스 기반 제품 개발, 클라우드 보안, AI 컨설팅 경력' },
  { k: '금융권', v: 'MSA 기반 금융 클라우드 보안 컨설팅·구축 수행' },
  { k: '직접 운영', v: 'AI 서비스를 직접 만들고 운영하며 검증한 방식으로 고객사를 전환' },
  { k: '현장 상주', v: '비즈니스 분석가와 AI 엔지니어가 고객사 업무 안에서 함께 구축' },
]

export default function AxWhy() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container-custom grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <h2 className="text-3xl font-extrabold leading-tight tracking-[-0.03em] text-slate-950 sm:text-[2.75rem]">
            우리가 먼저
            <br />
            AI로 일합니다
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            남에게 권하기 전에 우리 서비스부터 AI 네이티브로 운영해 왔습니다. 그 과정에서 쌓은 설계와
            운영 방식을 고객사에 그대로 옮깁니다. 진단부터 인계까지 대표가 직접 책임집니다.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <dl className="grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:grid-cols-2">
            {POINTS.map((p) => (
              <div key={p.k} className="bg-white p-7">
                <dt className="text-2xl font-extrabold tracking-tight text-slate-950">{p.k}</dt>
                <dd className="mt-2 leading-relaxed text-slate-600">{p.v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
