import companyData from '@/data/company.json'

export default function OfficeSection() {
  const { office } = companyData

  const contactItems = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: '주소',
      value: `${office.address} ${office.addressDetail}`,
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: '전화',
      value: office.phone,
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: '이메일',
      value: office.email,
    },
  ]

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            회사 정보
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">연락처</h3>
              {contactItems.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-900">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-500 mb-1">
                      {item.label}
                    </p>
                    <p className="text-gray-900 font-medium">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Business Info */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">사업자 정보</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-gray-500 mb-1">
                    상호
                  </p>
                  <p className="text-gray-900 font-medium">
                    주식회사 이너벳 (INERVET Co., Ltd)
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-500 mb-1">
                    사업자등록번호
                  </p>
                  <p className="text-gray-900 font-medium">
                    {office.business.registration}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-500 mb-1">
                    대표자
                  </p>
                  <p className="text-gray-900 font-medium">
                    {office.business.representative}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
