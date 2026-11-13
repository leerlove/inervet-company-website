import Reveal from '@/components/common/Reveal'

const RESULTS = [
  {
    value: '2주 → 2일',
    title: '고객 요청에서 제안까지',
    desc: '제조 기업 · 미팅 녹음부터 업무 분류, 협력사 선정, 도면 제안까지 AI가 이어서 처리',
  },
  {
    value: '50%',
    title: '외주 검토 비용 감소',
    desc: '토지개발 기업 · 부지 검토와 인허가 가능성 분석을 AI가 먼저 정리하고, 계열사 프로젝트를 본사에서 통합 관리',
  },
  {
    value: '50%+',
    title: '검수 시간 단축',
    desc: '인쇄 공정 · 사람 눈으로 하던 품질 검수를 AI 판독으로 전환',
  },
  {
    value: '12명 → 3명',
    title: '서비스 운영 인원',
    desc: 'INERVET 자사 AI 서비스 · AI 네이티브 운영으로 같은 서비스를 더 적은 인원으로 운영',
  },
]

export default function AxResults() {
  return (
    <section className="bg-slate-950 py-24 text-white lg:py-32">
      <div className="container-custom">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="text-3xl font-extrabold leading-tight tracking-[-0.03em] text-white sm:text-[2.75rem]">
            말보다 숫자로
            <br />
            확인하세요
          </h2>
          <p className="max-w-md text-slate-400">
            고객사 이름은 계약에 따라 공개하지 않습니다. 점검 통화에서 실제 운영 화면을 보여드립니다.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-white/10 md:grid-cols-2 lg:grid-cols-4">
          {RESULTS.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.05} className="bg-slate-950">
              <div className="h-full p-7">
                <p className="text-4xl font-extrabold tracking-[-0.03em] text-white lg:text-[2.75rem]">{r.value}</p>
                <p className="mt-3 font-bold text-primary-300">{r.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{r.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
