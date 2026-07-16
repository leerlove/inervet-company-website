import type { Metadata } from 'next'
import Header from '@/components/common/Header'
import Footer from '@/components/common/Footer'
import ScrollToTop from '@/components/common/ScrollToTop'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '개인정보처리방침 | INERVET - AI 펫닥터',
  description: 'INERVET AI 펫닥터 서비스의 개인정보처리방침입니다. 개인정보의 수집, 이용, 보관에 관한 안내입니다.',
  keywords: ['INERVET', '개인정보처리방침', 'AI 펫닥터', '개인정보보호'],
}

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-ink-900">
        {/* Hero Section */}
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-[radial-gradient(circle_at_50%_0%,rgba(96,165,250,0.12),transparent_60%)]">
          <div className="container-custom">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-accent-400">
              PRIVACY
            </p>
            <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">개인정보처리방침</h1>
            <p className="text-gray-400 text-lg">
              회원님의 개인정보는 안전하게 보호됩니다.
            </p>
            <p className="text-gray-500 text-sm mt-4">
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
                <nav className="sticky top-24 bg-white/[0.03] border border-white/10 rounded-2xl p-6">
                  <h3 className="font-semibold text-white mb-4">목차</h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <a href="#collection" className="text-gray-400 hover:text-primary-300 transition-colors">
                        1. 개인정보 수집 항목
                      </a>
                    </li>
                    <li>
                      <a href="#retention" className="text-gray-400 hover:text-primary-300 transition-colors">
                        2. 보유 및 이용 기간
                      </a>
                    </li>
                    <li>
                      <a href="#third-party" className="text-gray-400 hover:text-primary-300 transition-colors">
                        3. 제3자 제공
                      </a>
                    </li>
                    <li>
                      <a href="#sensitive" className="text-gray-400 hover:text-primary-300 transition-colors">
                        4. 민감정보 처리
                      </a>
                    </li>
                    <li>
                      <a href="#marketing" className="text-gray-400 hover:text-primary-300 transition-colors">
                        5. 마케팅 정보 수신
                      </a>
                    </li>
                    <li>
                      <a href="#officer" className="text-gray-400 hover:text-primary-300 transition-colors">
                        6. 개인정보보호 담당자
                      </a>
                    </li>
                  </ul>
                  <div className="mt-6 pt-4 border-t border-white/10">
                    <Link
                      href="/terms"
                      className="text-sm text-primary-300 hover:text-primary-200 font-medium"
                    >
                      이용약관 보기 →
                    </Link>
                  </div>
                </nav>
              </aside>

              {/* Main Content */}
              <div className="lg:col-span-3 space-y-8">
                {/* Mobile TOC */}
                <div className="lg:hidden bg-white/[0.03] border border-white/10 rounded-2xl p-4 mb-6">
                  <details className="group">
                    <summary className="flex items-center justify-between cursor-pointer font-semibold text-white">
                      목차 보기
                      <svg className="w-5 h-5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <ul className="mt-4 space-y-2 text-sm">
                      <li><a href="#collection" className="text-primary-300">1. 개인정보 수집 항목</a></li>
                      <li><a href="#retention" className="text-primary-300">2. 보유 및 이용 기간</a></li>
                      <li><a href="#third-party" className="text-primary-300">3. 제3자 제공</a></li>
                      <li><a href="#sensitive" className="text-primary-300">4. 민감정보 처리</a></li>
                      <li><a href="#marketing" className="text-primary-300">5. 마케팅 정보 수신</a></li>
                      <li><a href="#officer" className="text-primary-300">6. 개인정보보호 담당자</a></li>
                    </ul>
                  </details>
                </div>

                {/* Section 1: Collection */}
                <article id="collection" className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 lg:p-8 scroll-mt-24">
                  <h2 className="text-2xl font-bold text-white mb-6">1. 수집하는 개인정보 항목</h2>

                  <div className="space-y-6">
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="bg-white/[0.05]">
                            <th className="text-left py-3 px-4 font-semibold text-white">구분</th>
                            <th className="text-left py-3 px-4 font-semibold text-white">항목</th>
                            <th className="text-center py-3 px-4 font-semibold text-white">필수/선택</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/10">
                          <tr>
                            <td className="py-3 px-4 font-medium text-gray-100">회원 정보</td>
                            <td className="py-3 px-4 text-gray-300">이름, 닉네임, 이메일, 전화번호, 생년월일, 주소, 성별, 비밀번호</td>
                            <td className="py-3 px-4 text-center">
                              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-error-900/40 text-error-300">
                                필수
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 font-medium text-gray-100">반려동물 정보</td>
                            <td className="py-3 px-4 text-gray-300">이름, 종류, 품종, 생년월일, 성별, 중성화 여부, 특이사항, 건강정보</td>
                            <td className="py-3 px-4 text-center">
                              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-white/10 text-gray-300">
                                선택
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td className="py-3 px-4 font-medium text-gray-100">자동 수집</td>
                            <td className="py-3 px-4 text-gray-300">서비스 이용기록, 로그, 쿠키, IP, 결제기록, 기기정보</td>
                            <td className="py-3 px-4 text-center">
                              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary-900/40 text-primary-300">
                                자동
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </article>

                {/* Section 2: Retention */}
                <article id="retention" className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 lg:p-8 scroll-mt-24">
                  <h2 className="text-2xl font-bold text-white mb-6">2. 개인정보 보유 및 이용 기간</h2>

                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-white/[0.05]">
                          <th className="text-left py-3 px-4 font-semibold text-white">항목</th>
                          <th className="text-left py-3 px-4 font-semibold text-white">보유 기간</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/10">
                        <tr>
                          <td className="py-3 px-4 text-gray-300">회원 정보</td>
                          <td className="py-3 px-4 font-medium text-gray-100">회원 탈퇴 시까지</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 text-gray-300">전자상거래 기록</td>
                          <td className="py-3 px-4 font-medium text-gray-100">5년</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 text-gray-300">소비자 불만/분쟁 처리</td>
                          <td className="py-3 px-4 font-medium text-gray-100">3년</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-4 text-gray-300">서비스 이용 기록, 로그, IP</td>
                          <td className="py-3 px-4 font-medium text-gray-100">3개월</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="text-sm text-gray-500 mt-4">
                    * 관계 법령에 따라 보존이 필요한 경우 해당 기간 동안 보관합니다.
                  </p>
                </article>

                {/* Section 3: Third Party */}
                <article id="third-party" className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 lg:p-8 scroll-mt-24">
                  <h2 className="text-2xl font-bold text-white mb-6">3. 개인정보 제3자 제공</h2>

                  <div className="bg-primary-900/20 border border-primary-700/40 rounded-lg p-6">
                    <h3 className="font-semibold text-primary-200 mb-4">병원 예약 서비스 이용 시</h3>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-primary-300 font-medium mb-1">제공받는 자</p>
                        <p className="text-primary-100">제휴 동물병원</p>
                      </div>
                      <div>
                        <p className="text-primary-300 font-medium mb-1">제공 목적</p>
                        <p className="text-primary-100">병원 예약 서비스 제공</p>
                      </div>
                      <div>
                        <p className="text-primary-300 font-medium mb-1">제공 항목</p>
                        <p className="text-primary-100">이름, 전화번호, 반려동물 정보</p>
                      </div>
                      <div>
                        <p className="text-primary-300 font-medium mb-1">보유 기간</p>
                        <p className="text-primary-100">예약 서비스 종료 후 즉시 파기</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 mt-6">
                    회원의 동의 없이 개인정보를 제3자에게 제공하지 않습니다.
                    단, 법령의 규정에 의거하거나 수사기관의 요청이 있는 경우 예외로 합니다.
                  </p>
                </article>

                {/* Section 4: Sensitive Info */}
                <article id="sensitive" className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 lg:p-8 scroll-mt-24">
                  <h2 className="text-2xl font-bold text-white mb-6">4. 민감정보(건강정보) 처리</h2>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-200 mb-4">처리하는 민감정보 항목</h3>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="bg-white/[0.05]">
                              <th className="text-left py-3 px-4 font-semibold text-white">카테고리</th>
                              <th className="text-left py-3 px-4 font-semibold text-white">세부 항목</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-white/10">
                            <tr>
                              <td className="py-3 px-4 font-medium text-gray-100">기본 정보</td>
                              <td className="py-3 px-4 text-gray-300">이름, 종류, 품종, 나이, 성별, 중성화 여부, 체중</td>
                            </tr>
                            <tr>
                              <td className="py-3 px-4 font-medium text-gray-100">건강 정보</td>
                              <td className="py-3 px-4 text-gray-300">질병 이력, 현재 질환, 투약 정보, 알레르기</td>
                            </tr>
                            <tr>
                              <td className="py-3 px-4 font-medium text-gray-100">진료 기록</td>
                              <td className="py-3 px-4 text-gray-300">진료 날짜, 병원, 진단명, 처방, 검사 결과</td>
                            </tr>
                            <tr>
                              <td className="py-3 px-4 font-medium text-gray-100">예방접종</td>
                              <td className="py-3 px-4 text-gray-300">백신명, 접종일, 다음 접종 예정일</td>
                            </tr>
                            <tr>
                              <td className="py-3 px-4 font-medium text-gray-100">AI 상담</td>
                              <td className="py-3 px-4 text-gray-300">증상 설명, 사진, AI 답변 내용</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    <div className="bg-accent-900/20 border border-accent-700/40 rounded-lg p-6">
                      <h4 className="font-semibold text-accent-200 mb-3">AI 학습 데이터 활용</h4>
                      <ul className="text-accent-100 space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-accent-300">•</span>
                          <span>서비스 개선을 위해 <strong>익명화된</strong> 건강정보를 AI 학습에 활용 가능</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent-300">•</span>
                          <span>개인 식별 불가능하도록 <strong>비식별화</strong> 처리</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-accent-300">•</span>
                          <span>학습 데이터 활용 거부 가능 (별도 설정)</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-200 mb-3">동의 거부 시 이용 제한 서비스</h4>
                      <ul className="text-gray-300 space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-gray-500">•</span>
                          <span>AI 펫닥터 상담 서비스</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-gray-500">•</span>
                          <span>AI 영양사 상담 서비스</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-gray-500">•</span>
                          <span>건강 기록 관리 서비스</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-gray-500">•</span>
                          <span>병원 예약 서비스</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-gray-500">•</span>
                          <span>맞춤형 건강 정보 제공</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </article>

                {/* Section 5: Marketing */}
                <article id="marketing" className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 lg:p-8 scroll-mt-24">
                  <h2 className="text-2xl font-bold text-white mb-6">5. 마케팅 정보 수신</h2>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-200 mb-3">수신 방법</h3>
                      <div className="flex flex-wrap gap-2">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-white/[0.06] text-gray-300">
                          앱 푸시 알림
                        </span>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-white/[0.06] text-gray-300">
                          이메일 (E-mail)
                        </span>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-white/[0.06] text-gray-300">
                          문자 메시지 (SMS/MMS)
                        </span>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-white/[0.06] text-gray-300">
                          앱 내 알림 메시지
                        </span>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-white/[0.03] border border-white/10 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-200 mb-2">발송 시간</h4>
                        <p className="text-gray-300 text-sm">평일/주말: 오전 8시 ~ 오후 9시</p>
                        <p className="text-gray-500 text-xs mt-1">* 야간 시간대(오후 9시~오전 8시)는 제한</p>
                      </div>
                      <div className="bg-white/[0.03] border border-white/10 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-200 mb-2">예외 사항</h4>
                        <p className="text-gray-300 text-sm">긴급/중요 정보 또는 별도 야간 동의 시</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-200 mb-3">동의 철회 방법</h3>
                      <ol className="text-gray-300 space-y-2">
                        <li className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-900/50 text-primary-300 text-sm font-medium flex items-center justify-center">1</span>
                          <span>앱 내: 마이페이지 &gt; 설정 &gt; 알림 설정</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-900/50 text-primary-300 text-sm font-medium flex items-center justify-center">2</span>
                          <span>이메일/문자: &apos;수신거부&apos; 링크 클릭</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-900/50 text-primary-300 text-sm font-medium flex items-center justify-center">3</span>
                          <span>고객센터: 전화(041-562-1118) 또는 이메일</span>
                        </li>
                      </ol>
                    </div>
                  </div>
                </article>

                {/* Section 6: Officer */}
                <article id="officer" className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 lg:p-8 scroll-mt-24">
                  <h2 className="text-2xl font-bold text-white mb-6">6. 개인정보보호 담당자</h2>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white/[0.03] border border-white/10 rounded-lg p-6">
                      <h3 className="font-semibold text-gray-100 mb-4 flex items-center gap-2">
                        <svg className="w-5 h-5 text-primary-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        개인정보보호책임자
                      </h3>
                      <dl className="space-y-2 text-sm">
                        <div className="flex">
                          <dt className="w-16 text-gray-500">성명</dt>
                          <dd className="text-gray-200">이대섭</dd>
                        </div>
                        <div className="flex">
                          <dt className="w-16 text-gray-500">직책</dt>
                          <dd className="text-gray-200">대표이사</dd>
                        </div>
                        <div className="flex">
                          <dt className="w-16 text-gray-500">연락처</dt>
                          <dd className="text-gray-200">041-562-1118</dd>
                        </div>
                        <div className="flex">
                          <dt className="w-16 text-gray-500">이메일</dt>
                          <dd className="text-gray-200">support@inervet.com</dd>
                        </div>
                      </dl>
                    </div>

                    <div className="bg-white/[0.03] border border-white/10 rounded-lg p-6">
                      <h3 className="font-semibold text-gray-100 mb-4 flex items-center gap-2">
                        <svg className="w-5 h-5 text-primary-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        개인정보보호 담당부서
                      </h3>
                      <dl className="space-y-2 text-sm">
                        <div className="flex">
                          <dt className="w-16 text-gray-500">부서명</dt>
                          <dd className="text-gray-200">개인정보보호팀</dd>
                        </div>
                        <div className="flex">
                          <dt className="w-16 text-gray-500">담당자</dt>
                          <dd className="text-gray-200">이선영</dd>
                        </div>
                        <div className="flex">
                          <dt className="w-16 text-gray-500">연락처</dt>
                          <dd className="text-gray-200">041-562-1118</dd>
                        </div>
                        <div className="flex">
                          <dt className="w-16 text-gray-500">이메일</dt>
                          <dd className="text-gray-200">support@inervet.com</dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                </article>

                {/* Rights Section */}
                <div className="bg-success-900/20 border border-success-700/40 rounded-2xl p-6 lg:p-8">
                  <h3 className="font-bold text-success-300 mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    정보주체의 권리
                  </h3>
                  <ul className="text-success-100 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-success-400">✓</span>
                      <span>개인정보 열람, 정정, 삭제, 처리정지 요구</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-success-400">✓</span>
                      <span>개인정보 이용내역 통지 요구</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-success-400">✓</span>
                      <span>동의 철회 (언제든지 가능)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-success-400">✓</span>
                      <span>개인정보 분쟁조정위원회 분쟁해결 신청</span>
                    </li>
                  </ul>
                </div>

                {/* Contact Info */}
                <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 lg:p-8">
                  <h3 className="font-bold text-white mb-4">문의처</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-gray-300">
                    <div>
                      <p className="font-medium text-gray-100">주식회사 이너벳</p>
                      <p>대표이사: 이대섭</p>
                    </div>
                    <div>
                      <p>전화: 041-562-1118</p>
                      <p>이메일: support@inervet.com</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mt-4">
                    자세한 개인정보처리방침 전문은 AI 펫닥터 앱 내에서 확인하실 수 있습니다.
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
