import Button from '../common/Button'
import pricingData from '@/data/pricing.json'

export default function PricingSection() {
  const { plans, comparison } = pricingData

  return (
    <section id="pricing" className="section bg-gray-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            합리적인 가격으로 시작하세요
          </h2>
          <p className="text-lg text-gray-600">3,000원부터 시작하는 AI 펫헬스케어 서비스</p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-2xl shadow-sm p-6 card-hover relative overflow-hidden ${
                plan.popular
                  ? 'bg-gradient-to-br from-primary-900 to-primary-700 text-white'
                  : 'bg-white'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && plan.badge && (
                <div className="absolute top-4 right-4 px-3 py-1 bg-accent-600 text-white text-sm font-semibold rounded-full">
                  {plan.badge}
                </div>
              )}

              <div className="mb-6">
                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <p className={plan.popular ? 'text-blue-100' : 'text-gray-600'}>{plan.description}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className={`text-5xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                    {plan.price.toLocaleString()}
                  </span>
                  <span className={`text-xl ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                    {plan.unit}
                  </span>
                </div>
                <p className={`text-sm mt-2 ${plan.popular ? 'text-blue-200' : 'text-gray-500'}`}>{plan.period}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, index) => {
                  const isBold = feature.includes('**')
                  const cleanFeature = feature.replace(/\*\*/g, '')

                  return (
                    <li key={index} className="flex items-start gap-3">
                      <svg
                        className={`w-6 h-6 flex-shrink-0 ${
                          plan.popular ? 'text-green-400' : 'text-green-500'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className={isBold ? 'font-bold' : ''}>{cleanFeature}</span>
                    </li>
                  )
                })}
              </ul>

              <Button
                variant={plan.popular ? 'primary' : 'secondary'}
                size="lg"
                fullWidth
                className={
                  plan.popular
                    ? 'bg-white text-primary-900 hover:bg-blue-50'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900 border-0'
                }
              >
                {plan.cta}
              </Button>

              {plan.note && (
                <p className="text-center text-sm text-blue-200 mt-4">{plan.note}</p>
              )}
            </div>
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
