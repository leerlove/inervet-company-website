import Reveal from '@/components/common/Reveal'

const STEPS = [
  {
    no: '01',
    title: '무료 AI 전환 점검',
    time: '60분 · 화상',
    desc: '지금 쓰는 도구와 데이터, 반복 업무, 보안 상태를 함께 봅니다. 끝나면 점검 결과 요약서를 드립니다.',
    free: true,
  },
  {
    no: '02',
    title: '정밀 진단과 설계',
    time: '2~3주',
    desc: '부서별 인터뷰와 데이터 확인으로 전환 우선순위, 시스템 구조, 단계별 범위와 비용을 확정합니다.',
  },
  {
    no: '03',
    title: '핵심 업무 파일럿',
    time: '4~6주',
    desc: '효과가 가장 큰 업무 하나를 실제 데이터로 전환합니다. 현업이 매일 쓰는지로 성과를 판단합니다.',
  },
  {
    no: '04',
    title: '전사 확산과 운영 인계',
    time: '단계별',
    desc: '부서를 넓혀 가며 운영체계를 완성하고, 사내 담당자가 직접 운영할 수 있을 때까지 함께합니다.',
  },
]

export default function AxProcess() {
  return (
    <section id="process" className="scroll-mt-24 border-y border-slate-200 bg-[#F4F6FA] py-24 lg:py-32">
      <div className="container-custom">
        <Reveal className="max-w-3xl">
          <h2 className="text-3xl font-extrabold leading-tight tracking-[-0.03em] text-slate-950 sm:text-[2.75rem]">
            한 번에 크게 결정하지 않아도 됩니다
          </h2>
          <p className="mt-5 text-lg text-slate-600">
            단계마다 계약을 나누고, 결과를 보고 다음 단계로 갈지 직접 정하십니다.
          </p>
        </Reveal>

        <ol className="mt-14 grid gap-4 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <li key={s.no}>
              <Reveal
                delay={i * 0.06}
                className={`relative h-full rounded-2xl border p-7 ${
                  s.free ? 'border-primary-600 bg-white ring-1 ring-primary-600' : 'border-slate-300 bg-white'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold tabular-nums text-slate-400">{s.no}</span>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-bold ${
                      s.free ? 'bg-primary-600 text-white' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {s.free ? '무료 · ' + s.time : s.time}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-bold text-slate-950">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-slate-600">{s.desc}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
