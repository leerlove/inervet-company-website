import type { Metadata } from 'next'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import ScrollToTop from '@/components/common/ScrollToTop'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '이용약관 | INERVET - AI 펫닥터',
  description: 'INERVET AI 펫닥터 서비스 이용약관입니다. 서비스 이용 전 반드시 확인해 주세요.',
  keywords: ['INERVET', '이용약관', 'AI 펫닥터', '서비스 약관'],
}

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-900 to-primary-700 text-white py-16 lg:py-20">
          <div className="container-custom">
            <h1 className="text-3xl lg:text-4xl font-bold mb-4">이용약관</h1>
            <p className="text-primary-100 text-lg">
              AI 펫닥터 서비스 이용에 관한 약관입니다.
            </p>
            <p className="text-primary-200 text-sm mt-4">
              최종 수정일: 2024년 12월 19일 | 버전: 1.0
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 lg:py-16">
          <div className="container-custom">
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Table of Contents - Desktop */}
              <aside className="hidden lg:block">
                <nav className="sticky top-24 bg-white rounded-xl shadow-sm p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">목차</h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a href="#service-terms" className="text-gray-600 hover:text-primary-600 transition-colors">
                        1. 서비스 이용약관
                      </a>
                    </li>
                    <li>
                      <a href="#disclaimer" className="text-gray-600 hover:text-primary-600 transition-colors">
                        2. 면책조항
                      </a>
                    </li>
                    <li>
                      <a href="#location-terms" className="text-gray-600 hover:text-primary-600 transition-colors">
                        3. 위치정보 이용약관
                      </a>
                    </li>
                    <li>
                      <a href="#payment-terms" className="text-gray-600 hover:text-primary-600 transition-colors">
                        4. 유료 서비스 약관
                      </a>
                    </li>
                    <li>
                      <a href="#refund-policy" className="text-gray-600 hover:text-primary-600 transition-colors">
                        5. 환불 정책
                      </a>
                    </li>
                  </ul>
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <Link
                      href="/privacy"
                      className="text-sm text-primary-600 hover:text-primary-700 font-medium"
                    >
                      개인정보처리방침 보기 →
                    </Link>
                  </div>
                </nav>
              </aside>

              {/* Main Content */}
              <div className="lg:col-span-3 space-y-8">
                {/* Mobile TOC */}
                <div className="lg:hidden bg-white rounded-xl shadow-sm p-4 mb-6">
                  <details className="group">
                    <summary className="flex items-center justify-between cursor-pointer font-semibold text-gray-900">
                      목차 보기
                      <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <ul className="mt-4 space-y-2 text-sm">
                      <li><a href="#service-terms" className="text-primary-600">1. 서비스 이용약관</a></li>
                      <li><a href="#disclaimer" className="text-primary-600">2. 면책조항</a></li>
                      <li><a href="#location-terms" className="text-primary-600">3. 위치정보 이용약관</a></li>
                      <li><a href="#payment-terms" className="text-primary-600">4. 유료 서비스 약관</a></li>
                      <li><a href="#refund-policy" className="text-primary-600">5. 환불 정책</a></li>
                    </ul>
                  </details>
                </div>

                {/* Section 1: Service Terms */}
                <article id="service-terms" className="bg-white rounded-xl shadow-sm p-6 lg:p-8 scroll-mt-24">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">1. 서비스 이용약관</h2>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">제1조 (목적)</h3>
                      <p className="text-gray-600 leading-relaxed">
                        본 약관은 주식회사 이너벳(이하 &quot;회사&quot;)이 제공하는 AI 펫닥터 서비스(이하 &quot;서비스&quot;)의
                        이용조건 및 절차, 회사와 회원 간의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">제2조 (용어의 정의)</h3>
                      <ul className="text-gray-600 space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-primary-600 font-bold">•</span>
                          <span><strong>&quot;서비스&quot;</strong>: AI 기술을 활용한 반려동물 건강 상담, 영양 분석, 병원 예약 등의 서비스</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-600 font-bold">•</span>
                          <span><strong>&quot;회원&quot;</strong>: 본 약관에 동의하고 서비스를 이용하는 자</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-600 font-bold">•</span>
                          <span><strong>&quot;AI 상담&quot;</strong>: 인공지능 기술을 활용한 반려동물 건강 정보 제공 서비스</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">제3조 (약관의 게시와 개정)</h3>
                      <p className="text-gray-600 leading-relaxed">
                        회사는 약관을 개정할 경우 적용일자 및 개정사유를 명시하여 현행약관과 함께 적용일자
                        <strong className="text-primary-700"> 7일 전</strong>부터 공지합니다.
                        회원에게 불리한 약관 변경의 경우 30일 전에 공지합니다.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">제5조 (이용계약 체결)</h3>
                      <p className="text-gray-600 leading-relaxed">
                        서비스 이용계약은 회원이 되고자 하는 자가 약관의 내용에 동의한 후 회원가입신청을 하고,
                        회사가 이를 승낙함으로써 체결됩니다.
                        <strong className="text-primary-700"> 14세 미만</strong>의 아동은 법정대리인의 동의가 필요합니다.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">제7조 (서비스 제공)</h3>
                      <p className="text-gray-600 mb-3">회사가 제공하는 서비스는 다음과 같습니다:</p>
                      <ul className="text-gray-600 space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-green-500">✓</span>
                          <span>소변진단 키트를 통한 질병, 영양 등 13개 영역 진단 및 결과 보고서</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500">✓</span>
                          <span>소변진단 키트 검사결과 상담을 위한 전담 AI 수의사와 상담</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500">✓</span>
                          <span>동물병원 검색 및 예약 서비스</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500">✓</span>
                          <span>펫푸드(사료, 영양제, 간식)에 대한 정보 제공과 반려동물의 영양궁합 정보 제공</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">제11조 (회원의 의무)</h3>
                      <p className="text-gray-600 mb-3">회원은 다음 행위를 하여서는 안 됩니다:</p>
                      <ul className="text-gray-600 space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-red-500">✕</span>
                          <span>타인의 정보 도용</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-500">✕</span>
                          <span>서비스 운영 방해</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-500">✕</span>
                          <span>허위 정보 입력</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-500">✕</span>
                          <span>타인의 명예 훼손</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </article>

                {/* Section 2: Disclaimer */}
                <article id="disclaimer" className="bg-white rounded-xl shadow-sm p-6 lg:p-8 scroll-mt-24">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">2. 면책조항</h2>

                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-6">
                    <div className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <div>
                        <h3 className="font-bold text-amber-800 mb-2">제14조 제6항 - 핵심 면책 조항</h3>
                        <p className="text-amber-900 leading-relaxed">
                          AI 상담 서비스는 <strong>정보 제공 목적으로만</strong> 제공되며,
                          <strong> 실제 수의학적 진단이나 치료를 대체할 수 없습니다.</strong>
                          회원은 AI 상담 결과를 참고용으로만 활용해야 하며,
                          반려동물의 건강에 이상이 있을 경우 <strong>반드시 수의사의 진료를 받아야 합니다.</strong>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 text-gray-600">
                    <p>
                      회사는 천재지변, 전쟁, 기간통신사업자의 서비스 중지 등 불가항력적인 사유로 인한
                      서비스 중단에 대해 책임을 지지 않습니다.
                    </p>
                    <p>
                      회원이 서비스를 이용하여 기대하는 결과를 얻지 못하거나,
                      서비스를 통해 얻은 정보를 활용한 결과에 대해서는 회사가 책임지지 않습니다.
                    </p>
                  </div>
                </article>

                {/* Section 3: Location Terms */}
                <article id="location-terms" className="bg-white rounded-xl shadow-sm p-6 lg:p-8 scroll-mt-24">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">3. 위치정보 이용약관</h2>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">위치정보 활용 서비스</h3>
                      <ul className="text-gray-600 space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-primary-600">1.</span>
                          <span>주변 동물병원 검색 및 정보 제공</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-600">2.</span>
                          <span>현재 위치 기반 가까운 동물병원 추천</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-600">3.</span>
                          <span>동물병원까지 경로 안내 (지도 연동)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-600">4.</span>
                          <span>지역 기반 커뮤니티 서비스 (단지펫톡)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-600">5.</span>
                          <span>위치 기반 맞춤형 이벤트/프로모션 제공</span>
                        </li>
                      </ul>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900 mb-2">보유 기간</h4>
                        <p className="text-gray-600">위치정보 수집 시점으로부터 <strong>3개월</strong></p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900 mb-2">파기 방법</h4>
                        <p className="text-gray-600">영구 삭제</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">이용자 권리</h3>
                      <ul className="text-gray-600 space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-green-500">✓</span>
                          <span>언제든지 동의 철회 가능</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500">✓</span>
                          <span>이용 및 제공 현황 확인 가능</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-500">✓</span>
                          <span>14세 미만 아동: 법정대리인 동의 필요</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </article>

                {/* Section 4: Payment Terms */}
                <article id="payment-terms" className="bg-white rounded-xl shadow-sm p-6 lg:p-8 scroll-mt-24">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">4. 유료 서비스 및 상품 구매</h2>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">제1조 (유료 서비스의 정의 및 결제)</h3>
                      <p className="text-gray-600 mb-4">회사가 제공하는 유료 서비스는 다음과 같습니다:</p>
                      <ul className="text-gray-600 space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-primary-600 font-bold">•</span>
                          <span><strong>구독형 서비스</strong>: 월 정기 결제를 통해 AI 상담 무제한, 상세 리포트 등을 이용하는 멤버십 서비스</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-primary-600 font-bold">•</span>
                          <span><strong>상품 구매</strong>: 소변진단키트 등 실물 배송 상품</span>
                        </li>
                      </ul>
                      <p className="text-gray-600 mt-4">
                        회원은 회사가 제공하는 결제 수단(신용카드, 간편결제 등)을 통해 유료 서비스를 이용할 수 있으며,
                        정기 결제는 회원이 등록한 결제 수단으로 매월 정해진 날짜에 자동으로 결제됩니다.
                      </p>
                    </div>

                  </div>
                </article>

                {/* Section 5: Refund Policy */}
                <article id="refund-policy" className="bg-white rounded-xl shadow-sm p-6 lg:p-8 scroll-mt-24">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">5. 환불 정책</h2>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">제2조 (구독형 서비스의 해지 및 환불)</h3>

                      <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                        <h4 className="font-semibold text-green-800 mb-2">청약 철회 (서비스 미사용 시)</h4>
                        <p className="text-green-700">
                          회원은 유료 멤버십 결제 후 <strong>7일 이내</strong>에 서비스(AI 상담, 리포트 열람 등)를
                          전혀 이용하지 않은 경우, 청약 철회를 요청할 수 있으며 이 경우 <strong>전액 환불</strong>됩니다.
                        </p>
                      </div>

                      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-800 mb-2">중도 해지 (서비스 이용 후)</h4>
                        <p className="text-gray-600 mb-2">
                          회원은 언제든지 정기 결제 해지(구독 취소)를 신청할 수 있습니다.
                        </p>
                        <ul className="text-gray-600 space-y-1 text-sm">
                          <li>• 이미 결제된 기간에 대해서는 환불이 이루어지지 않습니다.</li>
                          <li>• 서비스 이용 권한은 해당 결제 주기의 마지막 날까지 유지됩니다.</li>
                          <li>• 다음 결제일부터는 자동으로 결제가 이루어지지 않습니다.</li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">제3조 (실물 상품의 반품 및 교환)</h3>

                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">단순 변심에 의한 반품</h4>
                          <p className="text-gray-600">
                            회원은 상품 수령일로부터 <strong>7일 이내</strong>에 반품 및 교환을 요청할 수 있습니다.
                            단, 제품 포장(밀봉 스티커, 비닐 등)을 개봉하지 않고, 전혀 사용하지 않은 상태여야만 가능합니다.
                          </p>
                        </div>

                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">반품/교환이 불가능한 경우</h4>
                          <ul className="text-gray-600 space-y-1">
                            <li className="flex items-start gap-2">
                              <span className="text-red-500">✕</span>
                              <span>회원의 책임 있는 사유로 상품이 멸실되거나 훼손된 경우</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-red-500">✕</span>
                              <span>회원의 사용 또는 일부 소비로 상품의 가치가 현저히 감소한 경우</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-red-500">✕</span>
                              <span>소변진단키트의 포장을 개봉하였거나 검사를 진행한 경우</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">제5조 (환불 절차)</h3>
                      <p className="text-gray-600">
                        회사는 반품된 재화가 도착하고 반품 사유 및 상태가 확인되면
                        <strong> 3영업일 이내</strong>에 환불 절차를 진행합니다.
                        신용카드나 간편결제로 결제한 경우, 결제 대행사를 통해 결제 승인을 취소합니다.
                      </p>
                    </div>
                  </div>
                </article>

                {/* Contact Info */}
                <div className="bg-primary-50 rounded-xl p-6 lg:p-8">
                  <h3 className="font-bold text-gray-900 mb-4">문의처</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-gray-600">
                    <div>
                      <p className="font-medium text-gray-900">주식회사 이너벳</p>
                      <p>대표이사: 이대섭</p>
                    </div>
                    <div>
                      <p>전화: 041-562-1118</p>
                      <p>이메일: support@inervet.com</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mt-4">
                    자세한 약관 전문은 AI 펫닥터 앱 내에서 확인하실 수 있습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
