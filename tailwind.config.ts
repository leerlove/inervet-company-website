import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          '900': '#1e3a8a', // Primary Blue
          '800': '#1e40af',
          '700': '#1d4ed8',
          '600': '#2563eb',
          '500': '#3b82f6', // Primary Light
          '400': '#60a5fa',
          '300': '#93c5fd',
          '200': '#bfdbfe',
          '100': '#dbeafe',
          '50': '#eff6ff',
        },
        accent: {
          '900': '#5b21b6',
          '800': '#6b21a8',
          '700': '#7c3aed',
          '600': '#8b5cf6', // Accent Purple
          '500': '#a78bfa',
          '400': '#c4b5fd',
          '300': '#ddd6fe',
          '200': '#e9d5ff',
          '100': '#f3e8ff',
          '50': '#faf5ff',
        },
        success: {
          '900': '#14532d',
          '800': '#166534',
          '700': '#15803d',
          '600': '#16a34a',
          '500': '#22c55e',
          '400': '#4ade80',
          '300': '#86efac',
          '200': '#bbf7d0',
          '100': '#dcfce7',
          '50': '#f0fdf4',
        },
        warning: {
          '900': '#78350f',
          '800': '#92400e',
          '700': '#b45309',
          '600': '#d97706',
          '500': '#f59e0b',
          '400': '#fbbf24',
          '300': '#fcd34d',
          '200': '#fde68a',
          '100': '#fef3c7',
          '50': '#fffbeb',
        },
        error: {
          '900': '#7f1d1d',
          '800': '#991b1b',
          '700': '#b91c1c',
          '600': '#dc2626',
          '500': '#ef4444',
          '400': '#f87171',
          '300': '#fca5a5',
          '200': '#fecaca',
          '100': '#fee2e2',
          '50': '#fef2f2',
        },
      },
      fontFamily: {
        sans: ['var(--font-pretendard)', 'system-ui', 'sans-serif'],
        inter: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Desktop sizes
        'h1-desktop': ['3.75rem', { lineHeight: '1.2', fontWeight: '700' }], // 60px
        'h2-desktop': ['3rem', { lineHeight: '1.25', fontWeight: '700' }], // 48px
        'h3-desktop': ['2.25rem', { lineHeight: '1.3', fontWeight: '600' }], // 36px
        'h4-desktop': ['1.875rem', { lineHeight: '1.35', fontWeight: '600' }], // 30px
        'h5-desktop': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }], // 24px
        'h6-desktop': ['1.25rem', { lineHeight: '1.5', fontWeight: '600' }], // 20px

        // Mobile sizes
        'h1-mobile': ['2.5rem', { lineHeight: '1.2', fontWeight: '700' }], // 40px
        'h2-mobile': ['2rem', { lineHeight: '1.25', fontWeight: '700' }], // 32px
        'h3-mobile': ['1.75rem', { lineHeight: '1.3', fontWeight: '600' }], // 28px
        'h4-mobile': ['1.5rem', { lineHeight: '1.35', fontWeight: '600' }], // 24px
        'h5-mobile': ['1.25rem', { lineHeight: '1.4', fontWeight: '600' }], // 20px
        'h6-mobile': ['1.125rem', { lineHeight: '1.5', fontWeight: '600' }], // 18px

        // Body text
        'body-lg': ['1.125rem', { lineHeight: '1.75' }], // 18px
        'body': ['1rem', { lineHeight: '1.75' }], // 16px
        'body-sm': ['0.875rem', { lineHeight: '1.75' }], // 14px
        'body-xs': ['0.75rem', { lineHeight: '1.75' }], // 12px
      },
      spacing: {
        '18': '4.5rem', // 72px
        '88': '22rem', // 352px
        '112': '28rem', // 448px
        '128': '32rem', // 512px
      },
      boxShadow: {
        'xs': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'sm': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
        'DEFAULT': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
        'md': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
        'lg': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
        'xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'slide-in-left': 'slideInLeft 0.5s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
