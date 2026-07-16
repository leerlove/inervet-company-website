import companyData from '@/data/company.json'
import Reveal from '@/components/common/Reveal'

export default function TimelineSection() {
  const { timeline } = companyData

  return (
    <section className="py-24 lg:py-32 border-t border-white/5">
      <div className="container-custom">
        <Reveal>
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent-400 mb-4">
              History
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              회사 연혁
            </h2>
            <p className="text-lg text-gray-400">
              INERVET의 성장 과정을 함께해주세요
            </p>
          </div>
        </Reveal>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/10 transform md:-translate-x-1/2"></div>

            {/* Timeline items */}
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <Reveal key={index} delay={Math.min(index * 0.05, 0.3)}>
                  <div
                    className={`relative flex flex-col md:flex-row gap-8 ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Content */}
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <div className={`inline-block bg-white/[0.03] border border-white/10 rounded-xl p-6 ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'}`}>
                        <div className="flex items-center gap-2 mb-2 text-sm text-accent-400 font-semibold">
                          <span>{item.year}</span>
                          <span className="px-2 py-1 bg-white/10 rounded-full text-xs text-gray-300">
                            {item.quarter}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-400">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Timeline dot */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center">
                      <div className="w-4 h-4 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full border-4 border-ink-900 shadow"></div>
                    </div>

                    {/* Spacer */}
                    <div className="flex-1"></div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
