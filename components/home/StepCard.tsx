import { clsx } from 'clsx'

interface StepCardProps {
  number: string
  badge: string
  badgeColor: string
  title: string
  description: string
  features: string[]
  icon: React.ReactNode
  bgGradient: string
  iconBg: string
  reverse?: boolean
}

/**
 * HowItWorks 섹션의 스텝 카드 컴포넌트
 */
export default function StepCard({
  number,
  badge,
  badgeColor,
  title,
  description,
  features,
  icon,
  bgGradient,
  iconBg,
  reverse = false,
}: StepCardProps) {
  return (
    <div
      className={clsx(
        'flex flex-col items-center gap-8',
        reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
      )}
    >
      {/* Visual */}
      <div className="flex-shrink-0 w-full lg:w-1/2">
        <div
          className={clsx(
            'bg-gradient-to-br rounded-2xl p-8 lg:p-12 h-64 flex items-center justify-center',
            bgGradient
          )}
        >
          <div className="text-center">
            <div
              className={clsx(
                'w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4',
                iconBg
              )}
            >
              {icon}
            </div>
            <span className="text-6xl font-bold text-gray-900/20">{number}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1">
        <div
          className={clsx(
            'inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4',
            badgeColor
          )}
        >
          {badge}
        </div>
        <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
          {title}
        </h3>
        <p className="text-lg text-gray-600 leading-relaxed mb-4">
          {description}
        </p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-gray-600">
              <svg
                className="w-6 h-6 text-green-500 flex-shrink-0"
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
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
