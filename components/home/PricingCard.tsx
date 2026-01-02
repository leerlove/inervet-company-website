import { clsx } from 'clsx'
import Button from '../common/Button'

interface PricingCardProps {
  id: string
  name: string
  description: string
  price: number
  unit: string
  period: string
  features: string[]
  cta: string
  popular?: boolean
  badge?: string
  note?: string
}

/**
 * 가격 플랜 카드 컴포넌트
 */
export default function PricingCard({
  name,
  description,
  price,
  unit,
  period,
  features,
  cta,
  popular = false,
  badge,
  note,
}: PricingCardProps) {
  return (
    <div
      className={clsx(
        'rounded-2xl shadow-sm p-6 card-hover relative overflow-hidden',
        popular
          ? 'bg-gradient-to-br from-primary-900 to-primary-700 text-white'
          : 'bg-white'
      )}
    >
      {/* Popular Badge */}
      {popular && badge && (
        <div className="absolute top-4 right-4 px-3 py-1 bg-accent-600 text-white text-sm font-semibold rounded-full">
          {badge}
        </div>
      )}

      <div className="mb-6">
        <h3
          className={clsx(
            'text-2xl font-bold mb-2',
            popular ? 'text-white' : 'text-gray-900'
          )}
        >
          {name}
        </h3>
        <p className={popular ? 'text-blue-100' : 'text-gray-600'}>
          {description}
        </p>
      </div>

      <div className="mb-6">
        <div className="flex items-baseline gap-2">
          <span
            className={clsx(
              'text-5xl font-bold',
              popular ? 'text-white' : 'text-gray-900'
            )}
          >
            {price.toLocaleString()}
          </span>
          <span
            className={clsx('text-xl', popular ? 'text-blue-100' : 'text-gray-600')}
          >
            {unit}
          </span>
        </div>
        <p
          className={clsx(
            'text-sm mt-2',
            popular ? 'text-blue-200' : 'text-gray-500'
          )}
        >
          {period}
        </p>
      </div>

      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => {
          const isBold = feature.includes('**')
          const cleanFeature = feature.replace(/\*\*/g, '')

          return (
            <li key={index} className="flex items-start gap-3">
              <svg
                className={clsx(
                  'w-6 h-6 flex-shrink-0',
                  popular ? 'text-green-400' : 'text-green-500'
                )}
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
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
        variant={popular ? 'primary' : 'secondary'}
        size="lg"
        fullWidth
        className={
          popular
            ? 'bg-white text-primary-900 hover:bg-blue-50'
            : 'bg-gray-100 hover:bg-gray-200 text-gray-900 border-0'
        }
      >
        {cta}
      </Button>

      {note && (
        <p className="text-center text-sm text-blue-200 mt-4">{note}</p>
      )}
    </div>
  )
}
