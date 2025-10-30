import companyData from '@/data/company.json'

export default function ValuesSection() {
  const { values } = companyData

  const iconMap: { [key: string]: string } = {
    innovation: '💡',
    connection: '🔗',
    expertise: '🎓',
    trust: '✓',
  }

  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            핵심 가치
          </h2>
          <p className="text-lg text-gray-600">
            INERVET이 추구하는 4가지 핵심 가치입니다
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm p-8 hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{iconMap[value.icon] || '⭐'}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
