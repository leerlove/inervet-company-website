import pricingData from '@/data/pricing.json'
import PricingCard from './PricingCard'
import SectionHeader from '../common/SectionHeader'

export default function PricingSection() {
  const { plans, comparison } = pricingData

  return (
    <section id="pricing" className="section bg-gray-50">
      <div className="container-custom">
        <SectionHeader
          title="합리적인 가격으로 시작하세요"
          description="3,000원부터 시작하는 AI 펫헬스케어 서비스"
          className="max-w-3xl mx-auto"
        />

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <PricingCard
              key={plan.id}
              id={plan.id}
              name={plan.name}
              description={plan.description}
              price={plan.price}
              unit={plan.unit}
              period={plan.period}
              features={plan.features}
              cta={plan.cta}
              popular={plan.popular}
              badge={plan.badge}
              note={plan.note}
            />
          ))}
        </div>

        {/* Price Comparison */}
        <div className="max-w-3xl mx-auto mt-12 p-6 bg-blue-50 rounded-xl">
          <div className="flex items-start gap-3">
            <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <p className="font-semibold text-gray-900 mb-2">{comparison.title}</p>
              <ul className="text-sm text-gray-700 space-y-1">
                {comparison.items.map((item, index) => {
                  // Parse markdown-style bold
                  const parts = item.split(/(\*\*.*?\*\*)/)
                  return (
                    <li key={index}>
                      •{' '}
                      {parts.map((part, i) =>
                        part.startsWith('**') && part.endsWith('**') ? (
                          <strong key={i}>{part.slice(2, -2)}</strong>
                        ) : (
                          <span key={i}>{part}</span>
                        )
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
