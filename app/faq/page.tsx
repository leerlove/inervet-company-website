'use client'

import { useState } from 'react'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'

interface FAQItem {
  id: string
  question: string
  answer: string
  category: string
}

const faqData: FAQItem[] = [
  // 서비스 이용
  {
    id: '1',
    category: 'service',
    question: 'AI 펫닥터는 어떤 서비스인가요?',
    answer: 'AI 펫닥터는 반려동물 건강관리를 위한 AI 기반 상담 서비스입니다. 18,000건 이상의 수의사 상담 데이터로 학습된 AI가 24시간 반려동물의 건강 상태를 분석하고 맞춤형 조언을 제공합니다. 텍스트, 음성, 영상 상담을 지원하며, 반려동물의 정보를 학습하여 개인화된 전담 AI 수의사가 상담을 진행합니다.',
  },
  {
    id: '2',
    category: 'service',
    question: 'AI 상담은 실제 수의사 진료를 대체할 수 있나요?',
    answer: 'AI 펫닥터의 상담은 반려동물의 건강관리를 위한 정보 제공 및 가이드 목적으로, 전문 수의사의 대면 진료를 대체하지 않습니다. 응급 상황이나 정확한 진단이 필요한 경우 반드시 가까운 동물병원을 방문해주세요. AI 펫닥터는 상담 내용을 리포트로 제공하여 병원 방문 시 활용하실 수 있습니다.',
  },
  {
    id: '3',
    category: 'service',
    question: '어떤 동물의 상담이 가능한가요?',
    answer: '현재 AI 펫닥터는 강아지와 고양이를 대상으로 서비스를 제공하고 있습니다. 향후 소동물, 파충류 등으로 서비스 영역을 확대할 예정입니다.',
  },
  {
    id: '4',
    category: 'service',
    question: '상담 내용은 어떻게 저장되나요?',
    answer: '모든 상담 내용은 자동으로 저장되며, "상담 기록" 메뉴에서 언제든 확인하실 수 있습니다. 상담 결과는 PDF 리포트로 다운로드하여 동물병원 방문 시 수의사에게 보여드릴 수 있습니다.',
  },
  // 요금제
  {
    id: '5',
    category: 'pricing',
    question: '무료로 사용할 수 있나요?',
    answer: '네, Standard 요금제를 통해 월 3,000원에 5회 상담을 이용하실 수 있습니다. 첫 가입 시 무료 체험 기간도 제공되오니 부담 없이 서비스를 경험해보세요.',
  },
  {
    id: '6',
    category: 'pricing',
    question: '요금제 변경은 어떻게 하나요?',
    answer: '앱 내 "설정 > 요금제 관리" 메뉴에서 언제든 요금제를 변경하실 수 있습니다. 상위 요금제로 변경 시 즉시 적용되며, 하위 요금제로 변경 시 다음 결제일부터 적용됩니다.',
  },
  {
    id: '7',
    category: 'pricing',
    question: '환불은 어떻게 진행되나요?',
    answer: '결제일로부터 7일 이내에 서비스를 이용하지 않은 경우 전액 환불이 가능합니다. 서비스 이용 후에는 잔여 기간에 대한 부분 환불이 진행됩니다. 환불 요청은 앱 내 고객센터 또는 이메일(support@inervet.com)로 문의해주세요.',
  },
  // 계정 및 보안
  {
    id: '8',
    category: 'account',
    question: '반려동물 정보를 여러 마리 등록할 수 있나요?',
    answer: 'Standard+ 이상 요금제에서는 최대 3마리까지, Premium 이상 요금제에서는 무제한으로 반려동물을 등록하실 수 있습니다. 각 반려동물에 대해 개별 AI 수의사가 맞춤 상담을 제공합니다.',
  },
  {
    id: '9',
    category: 'account',
    question: '개인정보는 안전하게 보호되나요?',
    answer: '네, AI 펫닥터는 개인정보보호법을 준수하며 모든 데이터를 암호화하여 저장합니다. 반려동물의 건강정보는 민감정보로 분류되어 별도의 동의 하에 수집되며, 서비스 개선 및 맞춤 상담 목적으로만 활용됩니다. 자세한 내용은 개인정보처리방침을 확인해주세요.',
  },
  {
    id: '10',
    category: 'account',
    question: '회원 탈퇴는 어떻게 하나요?',
    answer: '앱 내 "설정 > 계정 관리 > 회원 탈퇴" 메뉴에서 탈퇴하실 수 있습니다. 탈퇴 시 모든 개인정보와 상담 기록은 관련 법령에 따른 보관 기간 후 즉시 삭제됩니다. 유료 구독 중인 경우 환불 정책에 따라 처리됩니다.',
  },
  // 기술 및 기타
  {
    id: '11',
    category: 'tech',
    question: 'AI의 상담 정확도는 어느 정도인가요?',
    answer: 'AI 펫닥터는 18,000건 이상의 실제 수의사 상담 데이터로 학습되었으며, 98%의 사용자 만족도를 기록하고 있습니다. 다만 AI 상담은 참고용으로, 정확한 진단을 위해서는 전문 수의사의 진료가 필요합니다.',
  },
  {
    id: '12',
    category: 'tech',
    question: '사진이나 영상으로도 상담할 수 있나요?',
    answer: '네, 증상 설명 시 사진이나 영상을 첨부하시면 더 정확한 상담이 가능합니다. AI가 이미지를 분석하여 피부 상태, 눈 상태, 행동 패턴 등을 파악하고 맞춤 조언을 제공합니다.',
  },
  {
    id: '13',
    category: 'tech',
    question: '앱이 지원하는 기기는 무엇인가요?',
    answer: 'AI 펫닥터는 iOS 14.0 이상, Android 8.0 이상의 스마트폰에서 이용하실 수 있습니다. 태블릿에서도 사용 가능하며, 웹 버전은 현재 개발 중입니다.',
  },
  {
    id: '14',
    category: 'tech',
    question: '오프라인에서도 사용할 수 있나요?',
    answer: 'AI 상담은 인터넷 연결이 필요합니다. 다만 이전 상담 기록 조회와 저장된 리포트 확인은 오프라인에서도 가능합니다.',
  },
]

const categories = [
  { id: 'all', label: '전체' },
  { id: 'service', label: '서비스 이용' },
  { id: 'pricing', label: '요금제' },
  { id: 'account', label: '계정 및 보안' },
  { id: 'tech', label: '기술 및 기타' },
]

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [openItems, setOpenItems] = useState<string[]>([])

  const filteredFAQ = activeCategory === 'all'
    ? faqData
    : faqData.filter(item => item.category === activeCategory)

  const toggleItem = (id: string) => {
    setOpenItems(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  return (
    <>
      <Header />
      <main id="main-content" className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary-50 to-white py-16 lg:py-24">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                자주 묻는 질문
              </h1>
              <p className="text-lg text-gray-600">
                AI 펫닥터 서비스 이용에 대한 궁금증을 해결해드립니다
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              {/* Category Tabs */}
              <div className="flex flex-wrap justify-center gap-2 mb-12">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-6 py-2 rounded-full font-medium transition-colors ${
                      activeCategory === category.id
                        ? 'bg-primary-900 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>

              {/* FAQ List */}
              <div className="space-y-4">
                {filteredFAQ.map(item => (
                  <div
                    key={item.id}
                    className="border border-gray-200 rounded-xl overflow-hidden"
                  >
                    <button
                      onClick={() => toggleItem(item.id)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left bg-white hover:bg-gray-50 transition-colors"
                      aria-expanded={openItems.includes(item.id)}
                    >
                      <span className="font-semibold text-gray-900 pr-4">
                        {item.question}
                      </span>
                      <svg
                        className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${
                          openItems.includes(item.id) ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {openItems.includes(item.id) && (
                      <div className="px-6 pb-5 bg-gray-50">
                        <p className="text-gray-600 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Contact CTA */}
              <div className="mt-16 p-8 bg-primary-50 rounded-2xl text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  원하시는 답변을 찾지 못하셨나요?
                </h3>
                <p className="text-gray-600 mb-6">
                  고객센터로 문의해주시면 빠르게 답변드리겠습니다.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 bg-primary-900 text-white rounded-lg font-semibold hover:bg-primary-800 transition-colors"
                  >
                    문의하기
                  </a>
                  <a
                    href="mailto:support@inervet.com"
                    className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary-900 border border-primary-900 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
                  >
                    이메일 보내기
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
