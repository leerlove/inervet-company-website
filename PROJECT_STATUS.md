# INERVET 웹사이트 프로젝트 진행 상황

## 프로젝트 정보
- **프로젝트명**: INERVET 회사 웹사이트
- **기술 스택**: Next.js 14, TypeScript, Tailwind CSS
- **GitHub**: https://github.com/leerlove/inervet-company-website
- **Production URL**: https://inervet-web.vercel.app
- **목표 도메인**: https://inervet.com

---

## 완료된 작업

### 1. 웹사이트 개발 (✅ 완료)
- [x] 메인 페이지 (Hero, KeyMetrics, Problem, ServiceShowcase, HowItWorks, Testimonials, FinalCTA)
- [x] 회사 소개 페이지 (/about)
- [x] 투자 정보 페이지 (/ir)
- [x] 문의 페이지 (/contact)
- [x] 이용약관 페이지 (/terms)
- [x] 개인정보처리방침 페이지 (/privacy)
- [x] FAQ 페이지 (/faq)
- [x] 공통 컴포넌트 (Header, Footer, Button, ScrollToTop, Card, SectionHeader)

### 2. 로고 및 이미지 적용 (✅ 완료)
- [x] 회사 로고 (logo.png) 헤더에 적용
- [x] 로고 크기 최적화 (w-40 h-16)
- [x] AI 펫닥터 서비스 스크린샷 추가
- [x] ServiceShowcase 컴포넌트 생성

### 3. 외부 링크 연결 (✅ 완료)
- [x] "지금 시작하기" 버튼 → https://www.aipetdoctor.co.kr
- [x] 헤더 CTA 버튼 링크 적용
- [x] 중앙 집중식 URL 관리 (constants/externalLinks.ts)

### 4. 코드 품질 개선 (✅ 완료)
- [x] TypeScript 타입 정의 파일 생성 (types/index.ts)
- [x] 재사용 가능한 컴포넌트 생성
  - Card.tsx - 범용 카드 컴포넌트
  - SectionHeader.tsx - 섹션 헤더 컴포넌트
  - StepCard.tsx - HowItWorks용 스텝 카드
  - PricingCard.tsx - 가격 플랜 카드
- [x] 컴포넌트 리팩토링 (HowItWorks, PricingSection에 재사용 컴포넌트 적용)
- [x] 접근성 개선 (skip-to-content, aria-hidden, prefers-reduced-motion)

### 5. ContactForm EmailJS 연동 (✅ 완료)
- [x] @emailjs/browser 패키지 설치
- [x] 환경변수 기반 설정 지원
- [x] 로딩 상태 및 성공/에러 UI 추가
- [x] 폼 제출 시 검증 및 피드백

### 6. 이용약관 페이지 (✅ 완료)
- [x] 서비스 이용약관, 면책조항, 위치정보 이용약관
- [x] 유료 서비스 약관, 환불 정책
- [x] 반응형 목차 (데스크탑 사이드바 / 모바일 드롭다운)

#### 최근 수정사항
- **제7조 (서비스 제공)** 업데이트:
  1. 소변진단 키트를 통한 질병, 영양 등 13개 영역 진단 및 결과 보고서
  2. 소변진단 키트 검사결과 상담을 위한 전담 AI 수의사와 상담
  3. 동물병원 검색 및 예약 서비스
  4. 펫푸드(사료, 영양제, 간식)에 대한 정보 제공과 반려동물의 영양궁합 정보 제공

- **유료 서비스 정의** 업데이트:
  - 멤버십 회원 서비스: 월 정기 결제를 통해 소변진단키트의 검사와 상세 리포트 등을 이용하는 멤버십 서비스
  - 제공 상품: 반려동물 전용 소변진단키트 배송 및 건강 진단 레포트, AI 진단 결과 상담 서비스

- **제거된 항목**: 구독 요금제 테이블 (백업 완료)

### 7. 가격 섹션 백업 및 제거 (✅ 완료)
- [x] 백업 파일 생성: `docs/backup/pricing-backup.md`
- [x] 메인 페이지에서 PricingSection 제거
- [x] 헤더 네비게이션에서 "가격 안내" 링크 제거
- [x] Footer에서 "가격 안내" 링크 제거

**유지된 파일 (나중에 복원 가능)**:
- `components/home/PricingSection.tsx`
- `components/home/PricingCard.tsx`
- `data/pricing.json`

### 8. Vercel 배포 (✅ 완료)
- [x] Vercel CLI 설치 및 로그인
- [x] 프로덕션 배포 완료
- [x] 자동 배포 설정 (GitHub push 시)

---

## 프로젝트 구조

```
inervet-web/
├── app/
│   ├── page.tsx              # 메인 페이지
│   ├── layout.tsx            # 레이아웃 (skip-to-content 포함)
│   ├── globals.css           # 전역 스타일 (접근성 스타일 포함)
│   ├── about/page.tsx        # 회사 소개
│   ├── ir/page.tsx           # 투자 정보
│   ├── contact/page.tsx      # 문의
│   ├── terms/page.tsx        # 이용약관
│   ├── privacy/page.tsx      # 개인정보처리방침
│   └── faq/page.tsx          # FAQ
├── components/
│   ├── common/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Button.tsx
│   │   ├── ScrollToTop.tsx
│   │   ├── Card.tsx          # 재사용 카드 컴포넌트
│   │   └── SectionHeader.tsx # 재사용 섹션 헤더
│   ├── home/
│   │   ├── HeroSection.tsx
│   │   ├── KeyMetrics.tsx
│   │   ├── ProblemSection.tsx
│   │   ├── ServiceShowcase.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── StepCard.tsx      # HowItWorks용 카드
│   │   ├── PricingSection.tsx # (미사용, 백업됨)
│   │   ├── PricingCard.tsx   # (미사용, 백업됨)
│   │   ├── Testimonials.tsx
│   │   └── FinalCTA.tsx
│   ├── contact/
│   │   └── ContactForm.tsx   # EmailJS 연동
│   └── ...
├── constants/
│   └── externalLinks.ts      # URL 상수 관리
├── types/
│   └── index.ts              # TypeScript 타입 정의
├── data/
│   ├── metrics.json
│   ├── pricing.json          # (미사용, 백업됨)
│   └── ...
├── docs/
│   ├── inervet_website_plan.md
│   └── backup/
│       └── pricing-backup.md # 가격 정보 백업
└── public/
    ├── logo.png
    └── ...
```

---

## 환경 설정

### EmailJS 설정 (선택사항)
Contact Form에서 실제 이메일을 수신하려면:
```env
# .env.local
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

---

## 배포 명령어

```bash
# 개발 서버 실행
npm run dev

# 빌드 테스트
npm run build

# Vercel 배포
vercel --prod --token YOUR_TOKEN

# Git 커밋 및 푸시
git add -A && git commit -m "message" && git push origin main
```

---

## 다음 진행 예정 사항

### 우선순위 높음
- [ ] 도메인(inervet.com) 연결 및 SSL 설정
- [ ] EmailJS 실제 설정 (이메일 수신 테스트)

### 우선순위 중간
- [ ] 가격 섹션 복원 (새로운 가격 정책 확정 후)
- [ ] SEO 최적화 (메타데이터, OG 이미지)
- [ ] 성능 최적화 (이미지 최적화, 코드 스플리팅)

### 우선순위 낮음
- [ ] 다국어 지원 (영어, 일본어)
- [ ] 블로그/뉴스 섹션
- [ ] 고객 대시보드

---

## Git 커밋 히스토리 (최근)

```
0722717 fix: update paid service definitions in terms page
1c3ace4 feat: backup and remove pricing section for future update
533cfcd fix: update terms page - modify service provision and remove pricing table
527ab74 feat: add FAQ page, EmailJS integration, and component refactoring
fa983f0 refactor: code quality improvements and component optimization
ab927ab feat: add terms and privacy pages with accessibility improvements
```

---

**최종 업데이트**: 2025-01-29
**작성자**: Claude Code
**프로젝트 진행률**: 90% (기능 개발 완료, 도메인 연결 대기 중)
