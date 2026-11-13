import Reveal from '@/components/common/Reveal'

/** 첫 화면: 메시지 + 실제 업무 화면처럼 보이는 Slack 에이전트 목업 */
export default function AxHero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-[#F4F6FA] pt-32 lg:pt-40">
      <div className="container-custom relative">
        <Reveal className="mx-auto max-w-4xl text-center">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-1.5 text-sm font-semibold text-slate-700">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-600" aria-hidden="true" />
            기업 AI 전환 · INERVET
          </p>
          <h1 className="text-[2.5rem] font-extrabold leading-[1.12] tracking-[-0.04em] text-slate-950 sm:text-6xl lg:text-[4.5rem]">
            AI를 쓰는 직원 말고,
            <br />
            <span className="text-primary-600">AI로 일하는 회사</span>로.
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
            회사 데이터를 Claude·GPT에 권한대로 안전하게 연결하고, 업무와 고객 관리를
            하나의 AI 운영체계로 묶습니다. 엔지니어가 회사 안에 들어가 직접 만듭니다.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#apply"
              className="inline-flex w-full items-center justify-center rounded-full bg-primary-600 px-8 py-4 text-base font-bold text-white transition-colors hover:bg-primary-700 sm:w-auto"
            >
              무료 AI 전환 점검 신청
            </a>
            <a
              href="#process"
              className="inline-flex w-full items-center justify-center rounded-full border border-slate-300 bg-white px-8 py-4 text-base font-bold text-slate-900 transition-colors hover:border-slate-400 sm:w-auto"
            >
              진행 방식 보기
            </a>
          </div>
          <p className="mt-5 text-sm text-slate-500">
            60분 화상 점검 · 점검 결과 요약서 제공 · 계약 권유 없이 끝내셔도 됩니다
          </p>
        </Reveal>

        <Reveal delay={0.15} className="relative mx-auto mt-16 max-w-5xl">
          <SlackMock />
        </Reveal>
      </div>
    </section>
  )
}

function SlackMock() {
  return (
    <div
      className="overflow-hidden rounded-t-2xl border border-b-0 border-slate-300 bg-white shadow-[0_30px_80px_-30px_rgba(15,23,42,0.35)]"
      role="img"
      aria-label="Slack 채널에서 직원이 요청하면 회사 AI 에이전트가 권한을 확인하고 근거와 함께 답하는 화면 예시"
    >
      {/* window bar */}
      <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-xs text-slate-400">회사 업무 채널</span>
      </div>

      <div className="grid md:grid-cols-[200px_1fr]">
        {/* sidebar */}
        <aside className="hidden border-r border-slate-200 bg-[#1f2433] p-4 text-sm text-slate-300 md:block">
          <p className="mb-3 font-bold text-white">우리회사</p>
          <p className="mb-1 text-xs text-slate-500">채널</p>
          <ul className="space-y-1">
            <li className="rounded px-2 py-1"># 경영지원</li>
            <li className="rounded bg-primary-600 px-2 py-1 text-white"># 영업팀</li>
            <li className="rounded px-2 py-1"># 생산</li>
            <li className="rounded px-2 py-1"># 프로젝트-B</li>
          </ul>
          <p className="mb-1 mt-5 text-xs text-slate-500">AI 에이전트</p>
          <ul className="space-y-1">
            <li className="rounded px-2 py-1">영업 비서</li>
            <li className="rounded px-2 py-1">문서 검토</li>
            <li className="rounded px-2 py-1">주간 보고</li>
          </ul>
        </aside>

        {/* conversation */}
        <div className="space-y-5 p-5 text-left text-[15px] sm:p-7">
          <div className="flex gap-3">
            <div className="flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-amber-500 text-sm font-bold text-white">
              김
            </div>
            <div>
              <p className="text-sm">
                <b className="text-slate-900">김과장</b>{' '}
                <span className="text-slate-400">오전 9:12</span>
              </p>
              <p className="mt-1 text-slate-700">
                @영업비서 이번 분기 진행 중인 견적 건들 상태랑 이번 주에 챙길 것 정리해줘
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-primary-600 text-xs font-bold text-white">
              AI
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm">
                <b className="text-slate-900">영업 비서</b>{' '}
                <span className="rounded bg-slate-100 px-1.5 py-0.5 text-[11px] font-semibold text-slate-500">
                  앱
                </span>{' '}
                <span className="text-slate-400">오전 9:12</span>
              </p>
              <div className="mt-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-600">
                권한 확인 완료 · 영업팀 권한으로 열람 가능한 자료 14건을 참고했습니다
              </div>
              <p className="mt-3 text-slate-700">이번 분기 진행 중인 견적은 5건입니다.</p>
              <ul className="mt-2 space-y-1.5 text-slate-700">
                <li>
                  <b>계약 임박 2건</b> — 최종 단가 회신 대기, 금요일까지 회신 필요
                </li>
                <li>
                  <b>지연 1건</b> — 고객 미팅 후 14일간 후속 연락 없음
                </li>
                <li>
                  <b>검토 중 2건</b> — 사양 변경 요청 반영본 작성 필요
                </li>
              </ul>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                {['CRM 고객 이력', '견적서 v3.xlsx', '미팅록 10/28', '메일 스레드 6건'].map((s) => (
                  <span
                    key={s}
                    className="rounded-md border border-slate-200 bg-white px-2 py-1 text-slate-600"
                  >
                    근거 · {s}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-md bg-primary-600 px-3 py-1.5 text-xs font-bold text-white">
                  후속 메일 초안 만들기
                </span>
                <span className="rounded-md border border-slate-300 px-3 py-1.5 text-xs font-bold text-slate-700">
                  팀장 승인 요청
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
