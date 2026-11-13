import Reveal from '@/components/common/Reveal'

const SOURCES = ['메일', '문서 · 드라이브', '그룹웨어 · 결재', 'ERP · 사내 DB', '고객 · 영업 기록']
const OUTPUTS = [
  { name: '업무 채팅의 AI 에이전트', note: 'Slack에서 요청하고 결과를 받습니다' },
  { name: '업무 자동화', note: '보고서, 견적, 문서 검토, 취합' },
  { name: 'AI CRM', note: '고객·영업·사업 현황과 다음 할 일' },
]

const CAPABILITIES = [
  {
    label: 'FDE 컨설팅',
    title: '엔지니어가 회사 안에서 끝까지 만듭니다',
    desc: '보고서를 넘기고 떠나지 않습니다. 현업 담당자 옆에서 업무를 해부하고, 실제로 쓰일 때까지 고칩니다.',
  },
  {
    label: 'AI 브릿지',
    title: '직원별 권한 그대로, 회사 자료를 AI에 연결합니다',
    desc: '영업팀은 영업 자료만, 경영지원은 경영 자료만. 누가 어떤 자료를 AI에 썼는지 기록이 남습니다.',
  },
  {
    label: '에이전트 브릿지 · Slack',
    title: '회사 채팅 하나에서 사람과 AI가 함께 일합니다',
    desc: '도구를 옮겨 다니지 않습니다. 평소 쓰는 업무 채팅에서 에이전트에게 요청하고, 승인하고, 결과를 받습니다.',
  },
  {
    label: '인텔리전트 메모리 · 온톨로지',
    title: '회사의 일하는 방식을 기억하는 AI',
    desc: '프로젝트, 문서, 산출물, 의사결정을 서로 연결해 둡니다. 담당자가 바뀌어도 맥락이 남고, 질문 하나로 근거까지 찾습니다.',
  },
  {
    label: 'AI CRM',
    title: '고객과 영업, 사업 현황을 AI가 정리합니다',
    desc: '메일과 미팅, 견적이 자동으로 고객 이력이 됩니다. 대표는 아침마다 지연 건과 다음 할 일을 받아봅니다.',
  },
]

export default function AxSystem() {
  return (
    <section className="border-y border-slate-200 bg-[#F4F6FA] py-24 lg:py-32">
      <div className="container-custom">
        <Reveal className="max-w-3xl">
          <h2 className="text-3xl font-extrabold leading-tight tracking-[-0.03em] text-slate-950 sm:text-[2.75rem]">
            회사 하나에 맞춘
            <br />
            AI 운영체계를 만듭니다
          </h2>
          <p className="mt-5 text-lg text-slate-600">
            흩어진 데이터를 안전하게 연결하고, 그 위에서 에이전트가 일하게 합니다. 새 프로그램을 배우게 하지
            않고, 지금 쓰는 도구 안에 넣습니다.
          </p>
        </Reveal>

        {/* 구조도 */}
        <Reveal delay={0.1} className="mt-14">
          <div
            className="grid items-stretch gap-4 lg:grid-cols-[1fr_auto_1.3fr_auto_1fr]"
            role="img"
            aria-label="회사 데이터가 권한과 기록을 관리하는 AI 브릿지를 거쳐 Claude·GPT로 연결되고, 업무 채팅 에이전트·업무 자동화·AI CRM으로 이어지는 구조"
          >
            <div className="rounded-2xl border border-slate-300 bg-white p-6">
              <p className="text-sm font-bold text-slate-500">회사 데이터</p>
              <ul className="mt-4 space-y-2">
                {SOURCES.map((s) => (
                  <li key={s} className="rounded-lg bg-slate-100 px-3 py-2 text-[15px] font-semibold text-slate-800">
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            <Arrow />

            <div className="flex flex-col gap-3">
              <div className="rounded-2xl border-2 border-primary-600 bg-white p-6">
                <p className="text-sm font-bold text-primary-600">AI 브릿지</p>
                <p className="mt-1 text-lg font-bold text-slate-950">직원별 권한 · 사용 기록 · 승인</p>
              </div>
              <div className="flex-1 rounded-2xl bg-slate-950 p-6 text-white">
                <p className="text-sm font-bold text-slate-400">AI 모델</p>
                <p className="mt-1 text-2xl font-extrabold tracking-tight text-white">Claude · GPT</p>
                <p className="mt-2 text-sm text-slate-400">회사 상황에 맞게 선택 · 혼용</p>
              </div>
              <div className="rounded-2xl border border-slate-300 bg-white p-6">
                <p className="text-sm font-bold text-slate-500">회사 메모리 · 온톨로지</p>
                <p className="mt-1 text-[15px] font-semibold text-slate-800">
                  프로젝트 · 문서 · 산출물 · 의사결정의 연결
                </p>
              </div>
            </div>

            <Arrow />

            <div className="rounded-2xl border border-slate-300 bg-white p-6">
              <p className="text-sm font-bold text-slate-500">일하는 곳</p>
              <ul className="mt-4 space-y-3">
                {OUTPUTS.map((o) => (
                  <li key={o.name} className="rounded-lg border border-slate-200 px-3 py-2.5">
                    <p className="text-[15px] font-bold text-slate-900">{o.name}</p>
                    <p className="text-sm text-slate-500">{o.note}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        {/* 구성 요소 */}
        <div className="mt-20 border-t-2 border-slate-900">
          {CAPABILITIES.map((c, i) => (
            <Reveal key={c.label} delay={i * 0.04}>
              <div className="grid gap-3 border-b border-slate-300 py-8 md:grid-cols-[220px_1fr_1.2fr] md:gap-10">
                <p className="text-sm font-bold text-primary-600">{c.label}</p>
                <h3 className="text-xl font-bold leading-snug text-slate-950">{c.title}</h3>
                <p className="leading-relaxed text-slate-600">{c.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Arrow() {
  return (
    <div className="flex items-center justify-center text-slate-400" aria-hidden="true">
      <svg className="h-6 w-6 rotate-90 lg:rotate-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  )
}
