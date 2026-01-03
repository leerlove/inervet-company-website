import StepCard from './StepCard'
import SectionHeader from '../common/SectionHeader'

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      badge: 'Step 1',
      badgeColor: 'bg-blue-100 text-primary-900',
      title: '증상 입력',
      description: '우리 아이의 증상을 간단히 입력하세요. 사진이나 영상도 함께 첨부할 수 있어요.',
      features: [
        '나이, 품종, 기존 질환 등 자동 입력 가이드',
        '사진/영상 첨부로 더 정확한 상담',
      ],
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
          />
        </svg>
      ),
      bgGradient: 'from-blue-50 to-purple-50',
      iconBg: 'bg-primary-900',
    },
    {
      number: '02',
      badge: 'Step 2',
      badgeColor: 'bg-purple-100 text-purple-900',
      title: 'AI 분석 및 학습',
      description: 'INERVET AI가 증상을 분석하고, 우리 아이의 데이터를 학습하여 전담 AI 수의사를 생성합니다.',
      features: [
        '18,000건 학습 데이터 기반 AI 분석',
        '개인화 학습을 통한 전담 AI 수의사 맞춤 상담',
      ],
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      bgGradient: 'from-purple-50 to-blue-50',
      iconBg: 'bg-accent-600',
    },
    {
      number: '03',
      badge: 'Step 3',
      badgeColor: 'bg-green-100 text-green-900',
      title: 'AI 수의사 상담',
      description: '우리 아이를 이해하는 전담 AI 수의사와 24시간 언제든지 상담할 수 있습니다.',
      features: [
        '텍스트/음성/영상 선택 가능',
        '개인화된 맞춤 상담 제공',
      ],
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
          />
        </svg>
      ),
      bgGradient: 'from-green-50 to-blue-50',
      iconBg: 'bg-green-600',
    },
    {
      number: '04',
      badge: 'Step 4',
      badgeColor: 'bg-blue-100 text-primary-900',
      title: '리포트 받기',
      description: '상담 내용과 권장 사항이 담긴 상세 리포트를 받아보세요.',
      features: [
        '상담 내용 자동 기록 및 저장',
        '병원 방문 시 활용 가능한 리포트',
      ],
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
      bgGradient: 'from-blue-50 to-purple-50',
      iconBg: 'bg-primary-600',
    },
  ]

  return (
    <section id="how-it-works" className="section bg-white">
      <div className="container-custom">
        <SectionHeader
          title="INERVET AI 펫닥터가 해결합니다"
          description="간단한 4단계로 전담 AI 수의사와 상담하세요"
          className="max-w-3xl mx-auto"
        />

        <div className="max-w-5xl mx-auto space-y-12 lg:space-y-16">
          {steps.map((step, index) => (
            <StepCard
              key={index}
              number={step.number}
              badge={step.badge}
              badgeColor={step.badgeColor}
              title={step.title}
              description={step.description}
              features={step.features}
              icon={step.icon}
              bgGradient={step.bgGradient}
              iconBg={step.iconBg}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
