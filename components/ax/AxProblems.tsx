import Reveal from '@/components/common/Reveal'

const PROBLEMS = [
  {
    title: '직원이 개인 AI 계정에 회사 자료를 붙여넣고 있습니다',
    desc: '계약서, 견적, 고객 정보가 어디로 나갔는지 회사는 모릅니다. 막으면 일이 느려지고, 두면 위험합니다.',
  },
  {
    title: '시범 도입은 했는데 현업이 쓰지 않습니다',
    desc: '데모는 잘 돌았지만 실제 업무 흐름, 권한, 기존 시스템과 붙지 않아 몇 달 뒤 멈춥니다.',
  },
  {
    title: '자료는 많은데 AI가 답을 못 합니다',
    desc: '메일, 드라이브, 그룹웨어, ERP에 흩어진 자료가 연결되지 않아 AI가 회사 맥락을 모릅니다.',
  },
  {
    title: '영업과 고객 현황이 담당자 머릿속에만 있습니다',
    desc: '누가 어떤 고객과 어디까지 왔는지 대표가 물어봐야 알 수 있고, 담당자가 바뀌면 이력이 사라집니다.',
  },
]

export default function AxProblems() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container-custom">
        <Reveal className="max-w-3xl">
          <h2 className="text-3xl font-extrabold leading-tight tracking-[-0.03em] text-slate-950 sm:text-[2.75rem]">
            AI 도입은 했는데,
            <br />
            회사는 왜 그대로일까요?
          </h2>
          <p className="mt-5 text-lg text-slate-600">
            도구가 부족해서가 아닙니다. AI가 회사 데이터와 업무 안으로 들어오지 못했기 때문입니다.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-x-12 border-t-2 border-slate-900 md:grid-cols-2">
          {PROBLEMS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05}>
              <div className="flex gap-6 border-b border-slate-200 py-8">
                <span className="w-8 flex-none text-sm font-bold tabular-nums text-primary-600">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-xl font-bold leading-snug text-slate-950">{p.title}</h3>
                  <p className="mt-2 leading-relaxed text-slate-600">{p.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
