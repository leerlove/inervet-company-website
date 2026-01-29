# 가격 정보 백업

> 백업일: 2025-01-29
> 나중에 적용할 때 참고용

---

## 1. 이용약관 페이지 - 구독 요금제 테이블 (제거됨)

```html
<div>
  <h3 className="text-lg font-semibold text-gray-900 mb-3">구독 요금제</h3>
  <div className="overflow-x-auto">
    <table className="w-full text-sm">
      <thead>
        <tr className="bg-gray-50">
          <th className="text-left py-3 px-4 font-semibold text-gray-900">요금제</th>
          <th className="text-left py-3 px-4 font-semibold text-gray-900">가격</th>
          <th className="text-left py-3 px-4 font-semibold text-gray-900">주요 기능</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-100">
        <tr>
          <td className="py-3 px-4 text-gray-600">스탠다드 라이트</td>
          <td className="py-3 px-4 text-gray-900 font-medium">3,900원/월</td>
          <td className="py-3 px-4 text-gray-600">AI 상담 월 40~50회, 병원 검색</td>
        </tr>
        <tr>
          <td className="py-3 px-4 text-gray-600">스탠다드</td>
          <td className="py-3 px-4 text-gray-900 font-medium">9,900원/월</td>
          <td className="py-3 px-4 text-gray-600">AI 상담 확대, 예약 기록</td>
        </tr>
        <tr>
          <td className="py-3 px-4 text-gray-600">프리미엄</td>
          <td className="py-3 px-4 text-gray-900 font-medium">15,900원/월</td>
          <td className="py-3 px-4 text-gray-600">무제한 AI 상담, 영양 궁합 월 50회</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
```

### 요금제 정보 요약
| 요금제 | 가격 | 주요 기능 |
|--------|------|-----------|
| 스탠다드 라이트 | 3,900원/월 | AI 상담 월 40~50회, 병원 검색 |
| 스탠다드 | 9,900원/월 | AI 상담 확대, 예약 기록 |
| 프리미엄 | 15,900원/월 | 무제한 AI 상담, 영양 궁합 월 50회 |

---

## 2. 메인 페이지 - 가격안내 섹션 (PricingSection)

### 파일 위치
- 컴포넌트: `components/home/PricingSection.tsx`
- 데이터: `data/pricing.json`

### pricing.json 데이터

```json
{
  "plans": [
    {
      "id": "standard",
      "name": "스탠다드",
      "description": "AI 수의사와 기본 상담",
      "price": 3000,
      "unit": "원/월",
      "period": "월간 구독",
      "features": [
        "AI 수의사 24시간 상담",
        "맞춤 건강 관리",
        "상담 기록 저장",
        "기본 영양 정보 제공"
      ],
      "cta": "스탠다드 시작하기",
      "popular": false
    },
    {
      "id": "standard-plus",
      "name": "스탠다드+",
      "description": "프리미엄 기능 추가",
      "price": 9900,
      "unit": "원/월",
      "period": "월간 구독",
      "features": [
        "AI 수의사 무제한 상담",
        "맞춤 영양 관리",
        "건강 모니터링",
        "병원 예약 우선 연계",
        "상담 히스토리 분석"
      ],
      "cta": "스탠다드+ 시작하기",
      "badge": "인기",
      "popular": true,
      "note": "가장 많이 선택하는 플랜"
    },
    {
      "id": "premium",
      "name": "프리미엄",
      "description": "완벽한 건강 관리 솔루션",
      "price": 25000,
      "unit": "원/월",
      "period": "월간 구독",
      "features": [
        "스탠다드+ 모든 기능",
        "실시간 건강 모니터링 (AIoT)",
        "디지털 진료 기록 (DTx)",
        "전담 수의사 배정",
        "맞춤 영양 식단 제공"
      ],
      "cta": "프리미엄 시작하기",
      "popular": false
    },
    {
      "id": "premium-plus",
      "name": "프리미엄+",
      "description": "최고급 케어 서비스",
      "price": 50000,
      "unit": "원/월",
      "period": "월간 구독",
      "features": [
        "프리미엄 모든 기능",
        "월 2회 동물병원 방문 할인",
        "응급 상황 우선 처리",
        "건강 검진 리포트",
        "1:1 전담 케어 매니저"
      ],
      "cta": "프리미엄+ 시작하기",
      "popular": false
    }
  ],
  "comparison": {
    "title": "가격 비교",
    "items": [
      "동물병원 응급 방문: 평균 **10만~30만 원**",
      "정기 검진: 평균 **5만~15만 원**",
      "INERVET 스탠다드+: **9,900원/월** (무제한 AI 상담)"
    ]
  }
}
```

### PricingSection.tsx 컴포넌트

```tsx
import pricingData from '@/data/pricing.json'
import PricingCard from './PricingCard'
import SectionHeader from '../common/SectionHeader'

export default function PricingSection() {
  const { plans, comparison } = pricingData

  return (
    <section id="pricing" className="section bg-gray-50">
      <div className="container-custom">
        <SectionHeader
          title="합리적인 가격으로 시작하세요"
          description="3,000원부터 시작하는 AI 펫헬스케어 서비스"
          className="max-w-3xl mx-auto"
        />

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <PricingCard
              key={plan.id}
              id={plan.id}
              name={plan.name}
              description={plan.description}
              price={plan.price}
              unit={plan.unit}
              period={plan.period}
              features={plan.features}
              cta={plan.cta}
              popular={plan.popular}
              badge={plan.badge}
              note={plan.note}
            />
          ))}
        </div>

        {/* Price Comparison */}
        <div className="max-w-3xl mx-auto mt-12 p-6 bg-blue-50 rounded-xl">
          <div className="flex items-start gap-3">
            <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <p className="font-semibold text-gray-900 mb-2">{comparison.title}</p>
              <ul className="text-sm text-gray-700 space-y-1">
                {comparison.items.map((item, index) => {
                  const parts = item.split(/(\*\*.*?\*\*)/)
                  return (
                    <li key={index}>
                      •{' '}
                      {parts.map((part, i) =>
                        part.startsWith('**') && part.endsWith('**') ? (
                          <strong key={i}>{part.slice(2, -2)}</strong>
                        ) : (
                          <span key={i}>{part}</span>
                        )
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
```

### 요금제 요약

| 플랜 | 가격 | 주요 기능 |
|------|------|-----------|
| 스탠다드 | 3,000원/월 | AI 수의사 24시간 상담, 맞춤 건강 관리, 상담 기록 저장 |
| 스탠다드+ | 9,900원/월 | 무제한 상담, 맞춤 영양 관리, 건강 모니터링, 병원 예약 우선 연계 |
| 프리미엄 | 25,000원/월 | 실시간 건강 모니터링 (AIoT), 디지털 진료 기록 (DTx), 전담 수의사 |
| 프리미엄+ | 50,000원/월 | 월 2회 병원 방문 할인, 응급 상황 우선 처리, 1:1 전담 케어 매니저 |
