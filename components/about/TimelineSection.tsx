import companyData from '@/data/company.json'

export default function TimelineSection() {
  const { timeline } = companyData

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            회사 연혁
          </h2>
          <p className="text-lg text-gray-600">
            INERVET의 성장 과정을 함께해주세요
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary-200 transform md:-translate-x-1/2"></div>

            {/* Timeline items */}
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className={`inline-block bg-white rounded-xl shadow-md p-6 ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'}`}>
                      <div className="flex items-center gap-2 mb-2 text-sm text-primary-900 font-semibold">
                        <span>{item.year}</span>
                        <span className="px-2 py-1 bg-primary-100 rounded-full text-xs">
                          {item.quarter}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center">
                    <div className="w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow"></div>
                  </div>

                  {/* Spacer */}
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
