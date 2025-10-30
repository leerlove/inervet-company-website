import companyData from '@/data/company.json'

export default function VisionSection() {
  const { company } = companyData

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          {/* Vision */}
          <div className="mb-16">
            <div className="inline-block px-4 py-2 bg-primary-50 text-primary-900 rounded-full text-sm font-semibold mb-4">
              Vision
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              비전
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              {company.vision}
            </p>
          </div>

          {/* Mission */}
          <div className="mb-16">
            <div className="inline-block px-4 py-2 bg-accent-50 text-accent-600 rounded-full text-sm font-semibold mb-4">
              Mission
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              미션
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              {company.mission}
            </p>
          </div>

          {/* Core Service */}
          <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 lg:p-12 mb-16">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              핵심 서비스
            </h3>
            <p className="text-xl text-gray-800 font-semibold mb-8">
              {company.coreService}
            </p>

            {/* Core Features */}
            <div className="grid md:grid-cols-2 gap-6">
              {company.coreFeatures.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
