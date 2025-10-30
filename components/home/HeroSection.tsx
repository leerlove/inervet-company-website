import Button from '../common/Button'
import metrics from '@/data/metrics.json'

export default function HeroSection() {
  const trustIndicators = [
    { icon: '✓', text: `${metrics.satisfaction}% 만족도` },
    { icon: '✓', text: `평균 ${metrics.responseTime}분 내 연결` },
    { icon: '✓', text: '신용카드 등록 없음' },
  ]

  return (
    <section className="hero-pattern pt-24 lg:pt-32 pb-16 lg:pb-24 text-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium mb-6 animate-fade-in-up">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            {metrics.consultations.toLocaleString()}건 이상의 상담으로 검증된 신뢰
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in-up delay-100">
            반려동물 응급 상황,<br />
            <span className="text-purple-300">24시간 수의사</span>가<br className="sm:hidden" />
            함께합니다
          </h1>

          {/* Subheading */}
          <p className="text-lg lg:text-xl text-blue-100 mb-8 leading-relaxed animate-fade-in-up delay-200">
            우리 아이를 이해하는 전담 AI 수의사가 24시간 맞춤 상담을 제공합니다.<br />
            밤늦게 아이가 아파도, 지금 바로 도움을 받으세요.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up delay-300">
            <Button
              variant="primary"
              size="lg"
              className="bg-white text-primary-900 hover:bg-blue-50"
            >
              지금 무료 상담 시작
            </Button>
            <Button variant="secondary" size="lg" className="border-white text-white hover:bg-white/10">
              서비스 둘러보기
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-blue-200 animate-fade-in-up delay-400">
            {trustIndicators.map((indicator, index) => (
              <div key={index} className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{indicator.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
