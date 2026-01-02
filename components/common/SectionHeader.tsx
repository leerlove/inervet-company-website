import { clsx } from 'clsx'
import type { SectionHeaderProps } from '@/types'

/**
 * 재사용 가능한 SectionHeader 컴포넌트
 * 섹션 제목과 설명을 일관된 스타일로 표시합니다.
 */
export default function SectionHeader({
  badge,
  title,
  description,
  align = 'center',
  className,
}: SectionHeaderProps) {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }

  return (
    <div className={clsx('mb-12 lg:mb-16', alignClasses[align], className)}>
      {badge && (
        <span className="inline-block px-4 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
          {badge}
        </span>
      )}
      <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  )
}
