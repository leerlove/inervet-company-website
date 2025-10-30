import companyData from '@/data/company.json'

export default function CEOSection() {
  const { ceo } = companyData

  return (
    <section className="section bg-gradient-to-br from-primary-50 to-accent-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            대표 이사
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              {/* Profile Image Placeholder */}
              <div className="flex-shrink-0">
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary-900 to-primary-500 flex items-center justify-center">
                  <span className="text-6xl text-white font-bold">
                    {ceo.name.charAt(0)}
                  </span>
                </div>
              </div>

              {/* Profile Info */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  {ceo.name}
                </h3>
                <p className="text-xl text-primary-900 font-semibold mb-6">
                  {ceo.position}
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {ceo.bio}
                </p>

                {/* Experience */}
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">경력</h4>
                  <ul className="space-y-2">
                    {ceo.experience.map((exp, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-700">
                        <svg className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>{exp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
