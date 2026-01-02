import { clsx } from 'clsx'
import type { CardProps } from '@/types'

/**
 * 재사용 가능한 Card 컴포넌트
 * 일관된 카드 스타일링을 제공합니다.
 */
export default function Card({
  children,
  className,
  hover = false,
  padding = 'md',
}: CardProps) {
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  }

  return (
    <div
      className={clsx(
        'bg-white rounded-2xl shadow-sm border border-gray-100 transition-all duration-300',
        paddingClasses[padding],
        hover && 'hover:shadow-lg hover:-translate-y-2',
        className
      )}
    >
      {children}
    </div>
  )
}
