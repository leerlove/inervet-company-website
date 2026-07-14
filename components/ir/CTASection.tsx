import Button from '@/components/common/Button'

export default function CTASection() {
  return (
    <section className="py-24 lg:py-32 border-t border-white/5 bg-ink-800 text-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
            INERVET과 함께 성장하세요
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            펫 디지털 전환을 선도하는 글로벌 AI 펫 헬스케어 기업에 투자하세요.<br />
            지금 바로 투자 문의를 남겨주시면 상세한 IR 자료를 보내드립니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="secondary"
              size="lg"
              className="!bg-transparent !border !border-white/40 !text-white hover:!bg-white/10"
            >
              IR 자료 다운로드
            </Button>
            <Button
              variant="primary"
              size="lg"
              className="!bg-white !text-primary-900 hover:!bg-blue-50"
            >
              투자 문의하기
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
