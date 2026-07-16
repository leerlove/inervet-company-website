import companyData from '@/data/company.json'
import Reveal from '@/components/common/Reveal'

export default function ValuesSection() {
  const { values } = companyData

  const iconMap: { [key: string]: string } = {
    innovation: '💡',
    connection: '🔗',
    expertise: '🎓',
    trust: '✓',
  }

  return (
    <section className="py-24 lg:py-32 border-t border-white/5">
      <div className="container-custom">
        <Reveal>
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent-400 mb-4">
              Core Values
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              핵심 가치
            </h2>
            <p className="text-lg text-gray-400">
              INERVET이 추구하는 4가지 핵심 가치입니다
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 hover:bg-white/[0.06] transition-colors h-full">
                <div className="text-4xl mb-4">{iconMap[value.icon] || '⭐'}</div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
