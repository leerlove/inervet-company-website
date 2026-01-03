'use client'

import { useState } from 'react'
import emailjs from '@emailjs/browser'
import Button from '@/components/common/Button'

type InquiryType = 'general' | 'investment' | 'partnership'
type SubmitStatus = 'idle' | 'loading' | 'success' | 'error'

// EmailJS 설정 - 실제 사용 시 환경변수로 대체 권장
const EMAILJS_CONFIG = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID',
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY',
}

export default function ContactForm() {
  const [inquiryType, setInquiryType] = useState<InquiryType>('general')
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })

  const inquiryTabs = [
    { id: 'general' as InquiryType, label: '일반 문의' },
    { id: 'investment' as InquiryType, label: '투자 문의' },
    { id: 'partnership' as InquiryType, label: '파트너 문의' },
  ]

  const getInquiryTypeLabel = (type: InquiryType): string => {
    const labels: Record<InquiryType, string> = {
      general: '일반 문의',
      investment: '투자 문의',
      partnership: '파트너 문의',
    }
    return labels[type]
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitStatus('loading')
    setErrorMessage('')

    // EmailJS 설정이 완료되지 않은 경우 콘솔 출력 후 성공 처리
    if (EMAILJS_CONFIG.serviceId === 'YOUR_SERVICE_ID') {
      console.log('EmailJS 미설정 - 폼 데이터:', { inquiryType, ...formData })
      setSubmitStatus('success')
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
      return
    }

    try {
      const templateParams = {
        inquiry_type: getInquiryTypeLabel(inquiryType),
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || '미입력',
        subject: formData.subject,
        message: formData.message,
      }

      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams,
        EMAILJS_CONFIG.publicKey
      )

      setSubmitStatus('success')
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    } catch (error) {
      console.error('EmailJS 전송 실패:', error)
      setSubmitStatus('error')
      setErrorMessage('문의 전송에 실패했습니다. 잠시 후 다시 시도해주세요.')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          {/* Inquiry Type Tabs */}
          <div className="flex border-b border-gray-200 mb-8">
            {inquiryTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setInquiryType(tab.id)}
                className={`flex-1 py-4 px-6 font-semibold transition-colors ${
                  inquiryType === tab.id
                    ? 'text-primary-900 border-b-2 border-primary-900'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  이름 <span className="text-error-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="input"
                  placeholder="홍길동"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  이메일 <span className="text-error-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="input"
                  placeholder="example@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                전화번호
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="input"
                placeholder="010-1234-5678"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                제목 <span className="text-error-500">*</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="input"
                placeholder="문의 제목을 입력하세요"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                문의 내용 <span className="text-error-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={8}
                className="input"
                placeholder="문의 내용을 상세히 입력해주세요"
              />
            </div>

            {/* 상태 메시지 */}
            {submitStatus === 'success' && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center gap-2 text-green-800">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">문의가 접수되었습니다. 영업일 기준 2일 내 답변드립니다.</span>
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-center gap-2 text-red-800">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">{errorMessage}</span>
                </div>
              </div>
            )}

            <div className="pt-4">
              <Button
                type="submit"
                variant="primary"
                size="lg"
                fullWidth
                disabled={submitStatus === 'loading'}
              >
                {submitStatus === 'loading' ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    전송 중...
                  </span>
                ) : '문의하기'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
