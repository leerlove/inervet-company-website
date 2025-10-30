import Image from 'next/image'

export default function ServiceShowcase() {
  return (
    <section className="section bg-gradient-to-br from-blue-50 via-purple-50 to-blue-50">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              AI 펫닥터 서비스 미리보기
            </h2>
            <p className="text-lg text-gray-600">
              우리 아이를 위한 24시간 맞춤형 AI 수의사 서비스
            </p>
          </div>

          {/* Images Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Main Screen */}
            <div className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 group-hover:shadow-3xl group-hover:-translate-y-1 p-4">
                <div className="relative w-full h-[500px]">
                  <Image
                    src="/ai-pet-doctor-main.png"
                    alt="AI 펫닥터 메인 화면"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">메인 대시보드</h3>
                <p className="text-gray-600">우리 아이의 건강 상태를 한눈에 확인하세요</p>
              </div>
            </div>

            {/* Nutrition Management */}
            <div className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 group-hover:shadow-3xl group-hover:-translate-y-1 p-4">
                <div className="relative w-full h-[500px]">
                  <Image
                    src="/ai-pet-doctor-nutrition.png"
                    alt="AI 펫닥터 영양 관리 화면"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">영양 관리</h3>
                <p className="text-gray-600">맞춤형 식단과 영양 정보를 제공합니다</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <a
              href="https://www.aipetdoctor.co.kr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-primary-900 text-white rounded-lg font-semibold hover:bg-primary-800 transition-colors shadow-lg hover:shadow-xl"
            >
              지금 시작하기
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
