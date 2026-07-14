import companyData from '@/data/company.json'
import Reveal from '@/components/common/Reveal'

export default function VisionSection() {
  const { company } = companyData

  return (
    <section className="py-24 lg:py-32 border-t border-white/5">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          {/* Vision */}
          <Reveal>
            <div className="mb-16">
              <div className="text-xs font-semibold uppercase tracking-[0.35em] text-accent-400 mb-4">
                Vision
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                비전
              </h2>
              <p className="text-xl text-gray-400 leading-relaxed">
                {company.vision}
              </p>
            </div>
          </Reveal>

          {/* Mission */}
          <Reveal delay={0.1}>
            <div className="mb-16">
              <div className="text-xs font-semibold uppercase tracking-[0.35em] text-accent-400 mb-4">
                Mission
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                미션
              </h2>
              <p className="text-xl text-gray-400 leading-relaxed">
                {company.mission}
              </p>
            </div>
          </Reveal>

          {/* Core Service */}
          <Reveal delay={0.2}>
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 lg:p-12 mb-16">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                핵심 서비스
              </h3>
              <p className="text-xl bg-gradient-to-r from-primary-300 to-accent-300 bg-clip-text text-transparent font-semibold mb-8">
                {company.coreService}
              </p>

              {/* Core Features */}
              <div className="grid md:grid-cols-2 gap-6">
                {company.coreFeatures.map((feature, index) => (
                  <div key={index} className="bg-ink-800 rounded-xl p-6">
                    <h4 className="text-lg font-bold text-white mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
