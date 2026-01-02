/**
 * TypeScript 타입 정의
 * 프로젝트 전체에서 사용되는 공통 타입들
 */

// ============================================
// Navigation & Links
// ============================================

export interface NavLink {
  name: string
  href: string
}

export interface SocialLink extends NavLink {
  icon: React.ReactNode
}

// ============================================
// Metrics & Data
// ============================================

export interface Metric {
  value: string
  label: string
  description?: string
}

export interface KeyMetric {
  id: string
  value: string
  label: string
  icon?: React.ReactNode
}

// ============================================
// Pricing
// ============================================

export interface PricingPlan {
  id: string
  name: string
  price: number
  period: string
  description: string
  features: string[]
  popular?: boolean
  cta: string
  href: string
}

// ============================================
// Testimonials
// ============================================

export interface Testimonial {
  id: string
  name: string
  role: string
  avatar?: string
  content: string
  rating?: number
  petType?: string
}

// ============================================
// Team & Company
// ============================================

export interface TeamMember {
  id: string
  name: string
  role: string
  image?: string
  bio?: string
  social?: {
    linkedin?: string
    twitter?: string
    email?: string
  }
}

export interface CompanyInfo {
  name: string
  nameKr: string
  ceo: string
  email: string
  phone: string
  address: string
  founded?: string
}

// ============================================
// How It Works / Steps
// ============================================

export interface Step {
  number: string
  badge: string
  title: string
  description: string
  icon?: React.ReactNode
  color?: string
}

// ============================================
// Investment / IR
// ============================================

export interface InvestmentHighlight {
  id: string
  title: string
  value: string
  description?: string
  trend?: 'up' | 'down' | 'neutral'
}

export interface RoadmapItem {
  year: string
  quarter?: string
  title: string
  description: string
  status: 'completed' | 'in-progress' | 'planned'
}

export interface FinancialProjection {
  year: string
  revenue: number
  users: number
  growth?: number
}

// ============================================
// Contact Form
// ============================================

export type InquiryType = 'general' | 'investment' | 'partnership'

export interface ContactFormData {
  name: string
  email: string
  phone?: string
  company?: string
  inquiryType: InquiryType
  subject: string
  message: string
}

// ============================================
// Common UI Components
// ============================================

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'text'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  className?: string
  href?: string
  onClick?: () => void
  disabled?: boolean
  loading?: boolean
}

export interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  padding?: 'sm' | 'md' | 'lg'
}

export interface SectionHeaderProps {
  badge?: string
  title: string
  description?: string
  align?: 'left' | 'center' | 'right'
  className?: string
}

// ============================================
// Problems / Pain Points
// ============================================

export interface Problem {
  id: string
  icon: React.ReactNode
  title: string
  description: string
  stat?: string
}

// ============================================
// Services / Features
// ============================================

export interface Feature {
  id: string
  icon: React.ReactNode
  title: string
  description: string
  badge?: string
}

export interface ServiceImage {
  src: string
  alt: string
  title: string
  description: string
}
