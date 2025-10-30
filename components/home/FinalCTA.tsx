import Button from '../common/Button'
import metrics from '@/data/metrics.json'

export default function FinalCTA() {
  const guarantees = [
    { icon: '✓', text: '신용카드 등록 불필요' },
    { icon: '✓', text: '언제든 해지 가능' },
    { icon: '✓', text: '30일 환불 보장' },
  ]

  return (
    <section className="section gradient-primary text-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            우리 아이 건강,<br />
            더 이상 혼자 고민하지 마세요
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            지금 가입하면 첫 상담 무료.<br />
            우리 아이를 이해하는 전담 AI 수의사가 24시간 함께합니다.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button variant="primary" size="lg" className="bg-white text-primary-900 hover:bg-blue-50">
              무료로 시작하기
            </Button>
            <Button variant="secondary" size="lg" className="border-white text-white hover:bg-white/10">
              가격 안내 보기
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-blue-200">
            {guarantees.map((guarantee, index) => (
              <div key={index} className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{guarantee.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
