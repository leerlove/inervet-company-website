import Reveal from '@/components/common/Reveal'

const ROWS = [
  { item: '접근 권한', how: '직원이 원래 볼 수 있는 자료만 AI도 봅니다. 그룹웨어·드라이브 권한을 그대로 따릅니다.' },
  { item: '사용 기록', how: '누가, 언제, 어떤 자료로 AI를 썼는지 남습니다. 관리자가 언제든 확인합니다.' },
  { item: '데이터 위치', how: '회사 계정과 회사가 정한 클라우드 안에서 처리합니다. 개인 계정으로 자료가 나가지 않습니다.' },
  { item: '모델 학습', how: '기업용 계약과 API로 구성해, 회사 대화와 자료가 AI 모델 학습에 쓰이지 않게 합니다.' },
  { item: '사람 승인', how: '메일 발송, 결재, 외부 전달처럼 되돌리기 어려운 일은 담당자 승인 뒤에 실행됩니다.' },
]

export default function AxSecurity() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container-custom grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <h2 className="text-3xl font-extrabold leading-tight tracking-[-0.03em] text-slate-950 sm:text-[2.75rem]">
            보안을 먼저 설계하고,
            <br />
            AI를 연결합니다
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            금융권 클라우드 보안을 설계해 온 팀이 만듭니다. 경영진과 IT 담당자가 함께 확인할 수 있도록,
            무엇을 어떻게 지키는지 처음부터 공개합니다.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <dl className="border-t-2 border-slate-900">
            {ROWS.map((r) => (
              <div key={r.item} className="grid gap-2 border-b border-slate-200 py-6 sm:grid-cols-[140px_1fr] sm:gap-8">
                <dt className="font-bold text-slate-950">{r.item}</dt>
                <dd className="leading-relaxed text-slate-600">{r.how}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
