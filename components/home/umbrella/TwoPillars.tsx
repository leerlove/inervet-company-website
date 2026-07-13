import Reveal from '@/components/common/Reveal'
import { EXTERNAL_LINKS } from '@/constants/externalLinks'

/** 두 사업 기둥 — 대등 카드 (Lunit식 명료함) */

const PILLARS = [
  {
    tag: 'Product · B2C',
    title: 'AI 펫닥터',
    desc: '24시간 반려동물 AI 건강 상담. 수만 건의 상담으로 검증된, 우리가 직접 만들고 운영하는 첫 AI 제품입니다.',
    href: EXTERNAL_LINKS.APP_MAIN,
    external: true,
    cta: '서비스 보기',
    ring: 'hover:border-accent-500/60',
    glow: 'from-accent-500/20',
    tagColor: 'text-accent-300',
  },
  {
    tag: 'Consulting · B2B',
    title: '부동산 AI 네이티브 전환',
    desc: '진단부터 설계·구축·운영까지. 부동산 산업의 AI 전환을 실행 단계까지 함께 설계하는 컨설팅입니다.',
    href: '/contact',
    external: false,
    cta: '컨설팅 문의',
    ring: 'hover:border-primary-400/60',
    glow: 'from-primary-500/20',
    tagColor: 'text-primary-300',
  },
]

export default function TwoPillars() {
  return (
    <section id="what-we-do" className="border-t border-white/5 py-24 lg:py-32">
      <div className="container-custom">
        <Reveal>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-gray-500">
            What We Do
          </p>
          <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            하나의 팀, 두 개의 AI 사업
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.12}>
              <a
                href={p.href}
                target={p.external ? '_blank' : undefined}
                rel={p.external ? 'noopener noreferrer' : undefined}
                className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 hover:-translate-y-1 lg:p-10 ${p.ring}`}
              >
                <div
                  className={`pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gradient-to-br ${p.glow} to-transparent opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100`}
                />
                <span className={`text-xs font-semibold uppercase tracking-[0.25em] ${p.tagColor}`}>
                  {p.tag}
                </span>
                <h3 className="mt-5 text-2xl font-bold text-white sm:text-3xl">{p.title}</h3>
                <p className="mt-4 flex-1 text-base leading-relaxed text-gray-400">{p.desc}</p>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white">
                  {p.cta}
                  <svg
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
