import Reveal from '@/components/common/Reveal'

const FAQ = [
  {
    q: '비용은 어느 정도인가요?',
    a: '회사 규모와 연결할 시스템, 전환 범위에 따라 달라집니다. 무료 점검 뒤 단계별로 범위와 비용을 먼저 정리해 드리고, 동의하신 단계만 진행합니다.',
  },
  {
    q: '회사 자료가 외부 AI로 나가지 않나요?',
    a: '회사 계정과 기업용 계약 안에서 처리하고, 자료가 모델 학습에 쓰이지 않도록 구성합니다. 직원별 권한을 그대로 따르고 사용 기록이 남습니다.',
  },
  {
    q: '사내에 IT 담당자가 없어도 되나요?',
    a: '가능합니다. 엔지니어가 회사 업무 안에 들어가 구축하고, 담당자가 운영할 수 있을 때까지 교육과 운영을 함께합니다.',
  },
  {
    q: '이미 쓰고 있는 그룹웨어, ERP는 어떻게 되나요?',
    a: '바꾸지 않습니다. 지금 쓰는 시스템에 연결하는 것이 원칙입니다. 연결 방식은 점검과 진단 단계에서 확인합니다.',
  },
  {
    q: 'Claude와 GPT 중 무엇을 쓰나요?',
    a: '업무 성격과 보안 요구, 비용에 맞춰 선택하거나 함께 씁니다. 특정 모델에 묶이지 않게 설계합니다.',
  },
  {
    q: '무료 점검 뒤 계약을 꼭 해야 하나요?',
    a: '아닙니다. 점검 결과 요약서만 받고 끝내셔도 됩니다. 별도 영업 연락을 드리지 않습니다.',
  },
]

export default function AxFaq() {
  return (
    <section className="border-t border-slate-200 bg-[#F4F6FA] py-24 lg:py-32">
      <div className="container-custom max-w-4xl">
        <Reveal>
          <h2 className="text-3xl font-extrabold tracking-[-0.03em] text-slate-950 sm:text-[2.75rem]">
            자주 묻는 질문
          </h2>
        </Reveal>
        <div className="mt-12 border-t-2 border-slate-900">
          {FAQ.map((f) => (
            <details key={f.q} className="group border-b border-slate-300 py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-bold text-slate-950 [&::-webkit-details-marker]:hidden">
                {f.q}
                <span
                  className="flex h-8 w-8 flex-none items-center justify-center rounded-full border border-slate-300 text-slate-500 transition-transform group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-3xl leading-relaxed text-slate-600">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
