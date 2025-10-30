'use client'

import { useState } from 'react'
import Button from '@/components/common/Button'

type InquiryType = 'general' | 'investment' | 'partnership'

export default function ContactForm() {
  const [inquiryType, setInquiryType] = useState<InquiryType>('general')
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: 실제 폼 제출 로직 구현 (EmailJS or API)
    console.log('Form submitted:', { inquiryType, ...formData })
    alert('문의가 접수되었습니다. 영업일 기준 2일 내 답변드립니다.')
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

            <div className="pt-4">
              <Button type="submit" variant="primary" size="lg" fullWidth>
                문의하기
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
