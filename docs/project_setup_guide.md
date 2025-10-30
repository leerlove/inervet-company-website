# React 프로젝트 구조 및 초기 설정 가이드

## 개요
INERVET 웹사이트 React 프로젝트의 초기 설정 및 구조 문서입니다.

## 완료된 작업

### 1. 프로젝트 초기화
- ✅ Next.js 14 + TypeScript 프로젝트 생성
- ✅ Tailwind CSS 3 설정
- ✅ ESLint, PostCSS, Autoprefixer 설정

### 2. 프로젝트 구조 생성
```
inervet-web/
├── app/                     # Next.js App Router
│   ├── layout.tsx          # 루트 레이아웃 (메타데이터 포함)
│   ├── page.tsx            # 홈페이지 (임시 플레이스홀더)
│   └── globals.css         # 글로벌 스타일 + Tailwind
├── components/             # React 컴포넌트 폴더
│   ├── common/            # 공통 컴포넌트 (Header, Footer, Button 등)
│   ├── home/              # 홈페이지 전용 컴포넌트
│   ├── service/           # 서비스 페이지 컴포넌트
│   ├── ir/                # IR 페이지 컴포넌트
│   ├── about/             # 회사 소개 컴포넌트
│   └── contact/           # 문의 페이지 컴포넌트
├── lib/                   # 유틸리티 함수
├── data/                  # 정적 데이터 (JSON)
│   └── metrics.json       # 주요 지표 데이터
├── public/                # 정적 파일
│   ├── images/            # 이미지
│   └── fonts/             # 폰트 (필요 시)
└── docs/                  # 프로젝트 문서
```

### 3. 설정 파일 생성

#### package.json
- Next.js 14.2.15
- React 18.3.1
- TypeScript 5.6.3
- Tailwind CSS 3.4.14
- Framer Motion 11.11.11
- 개발 도구: ESLint, PostCSS, Autoprefixer

#### tsconfig.json
- 타겟: ES2020
- 모듈: ESNext (Bundler)
- Path aliases: `@/*`
- Strict mode 활성화

#### tailwind.config.ts
디자인 가이드에 따른 커스텀 설정:

**Colors:**
- `primary-900`: #1e3a8a (Primary Blue)
- `primary-500`: #3b82f6 (Primary Light)
- `accent-600`: #8b5cf6 (Accent Purple)
- Success, Warning, Error 색상 팔레트

**Typography:**
- 한글: Pretendard (CDN)
- 영문: Inter (CDN fallback)
- Desktop/Mobile 반응형 폰트 크기 정의

**Spacing:**
- Tailwind 기본 4px 시스템
- 커스텀 간격: 18, 88, 112, 128

**Animations:**
- fadeIn, fadeInUp, slideInRight, slideInLeft, scaleIn

#### next.config.mjs
- Strict mode 활성화
- 이미지 최적화 설정 (AVIF, WebP)
- Framer Motion 패키지 최적화

#### .eslintrc.json
- Next.js 권장 설정
- TypeScript 지원

### 4. 글로벌 스타일 (app/globals.css)

#### Tailwind Layers
- **@layer base**: HTML 기본 스타일, 폰트 설정
- **@layer components**: 재사용 가능 컴포넌트 클래스
  - `.btn`, `.btn-primary`, `.btn-secondary`, `.btn-text`
  - `.card`, `.card-hover`
  - `.input`, `.input-error`
  - `.gradient-primary`, `.gradient-accent`
  - `.hero-pattern`
- **@layer utilities**: 유틸리티 클래스
  - `.text-gradient`
  - `.line-clamp-2`, `.line-clamp-3`
  - `.scrollbar-hide`, `.scrollbar-custom`

#### 폰트 설정
```css
@import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.css');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
```

#### 접근성
- Focus-visible 스타일
- Selection 스타일 (브랜드 컬러)
- WCAG 2.1 AA 준수 색상 대비

### 5. 루트 레이아웃 (app/layout.tsx)

#### SEO 메타데이터
```tsx
{
  title: 'AI 펫닥터 INERVET | 24시간 반려동물 건강 상담 서비스',
  description: '...',
  keywords: [...],
  openGraph: {...},
  twitter: {...},
  robots: {...}
}
```

#### 기본 HTML 구조
- `lang="ko"`
- `scroll-smooth` 활성화
- Favicon 및 manifest 설정
- Theme color: #1e3a8a

### 6. 임시 홈페이지 (app/page.tsx)
개발 진행 상황을 표시하는 플레이스홀더 페이지:
- Hero 섹션 미리보기
- 주요 메시지 및 CTA
- 개발 중 안내

### 7. 정적 데이터 (data/metrics.json)
```json
{
  "consultations": 18000,
  "satisfaction": 98,
  "responseTime": 5,
  "availability": "24/7",
  "veterinarians": 18,
  "retentionRate": 25
}
```

## 다음 단계

### Task 7: React 컴포넌트 개발
1. **공통 컴포넌트 개발** (`components/common/`)
   - Header.tsx
   - Footer.tsx
   - Button.tsx
   - Card.tsx
   - Badge.tsx
   - Input.tsx

2. **홈페이지 컴포넌트 개발** (`components/home/`)
   - HeroSection.tsx
   - KeyMetrics.tsx
   - ProblemSection.tsx
   - HowItWorks.tsx
   - PricingSection.tsx
   - Testimonials.tsx
   - FinalCTA.tsx

3. **추가 페이지 개발**
   - app/service/page.tsx
   - app/ir/page.tsx
   - app/contact/page.tsx

4. **유틸리티 함수** (`lib/`)
   - utils.ts (clsx helper 등)
   - constants.ts (상수 정의)

5. **애니메이션 추가**
   - Framer Motion 활용
   - Scroll animations
   - Page transitions

## 개발 서버 실행

### 개발 모드
```bash
npm run dev
# http://localhost:3000
```

### 프로덕션 빌드
```bash
npm run build
npm start
```

### 타입 체크
```bash
npm run type-check
```

### 린트
```bash
npm run lint
```

## 현재 상태

### ✅ 완료
- [x] 프로젝트 구조 생성
- [x] Next.js 14 + TypeScript 설정
- [x] Tailwind CSS 커스텀 설정
- [x] 디자인 시스템 구현 (Colors, Typography, Spacing)
- [x] 글로벌 스타일 및 컴포넌트 클래스
- [x] SEO 메타데이터 설정
- [x] 루트 레이아웃 및 임시 홈페이지
- [x] 의존성 설치 (389 packages)
- [x] 정적 데이터 구조

### ⏳ 다음 작업
- [ ] 공통 컴포넌트 개발
- [ ] 홈페이지 섹션 컴포넌트 개발
- [ ] 추가 페이지 개발
- [ ] 애니메이션 구현
- [ ] 폼 연동 (EmailJS)
- [ ] 이미지 최적화

## 프로젝트 특징

### 1. 디자인 시스템 기반
`docs/design_guide.md`의 모든 스펙을 Tailwind 설정에 반영:
- 브랜드 컬러 팔레트
- 타이포그래피 스케일
- 스페이싱 시스템
- 애니메이션 키프레임

### 2. 타입 안정성
- 모든 컴포넌트 TypeScript로 작성
- Props 타입 명시
- 런타임 오류 최소화

### 3. 성능 최적화
- Next.js App Router (Server Components)
- 자동 코드 스플리팅
- 이미지 최적화 (next/image)
- 폰트 최적화 (CDN)

### 4. SEO 친화적
- 메타데이터 API 활용
- Open Graph, Twitter Card
- Semantic HTML
- Sitemap 및 robots.txt (추후 추가)

### 5. 접근성 (A11y)
- WCAG 2.1 AA 준수
- Focus-visible 스타일
- Semantic tags
- ARIA attributes (추후 컴포넌트에 추가)

### 6. 개발자 경험
- TypeScript 자동완성
- ESLint 코드 품질 관리
- Hot reload 개발 서버
- Path aliases (`@/*`)

## 참고 문서

1. [프로젝트 기획](./inervet_website_plan.md)
2. [개발 명세서](./development_specification.md)
3. [와이어프레임](./wireframes.md)
4. [디자인 가이드](./design_guide.md)
5. [콘텐츠 작성 가이드](./content_writing_guide.md)
6. [HTML 프로토타입](../prototype/index.html)

## 트러블슈팅

### Q: Next.js 서버가 실행되지 않아요
```bash
# node_modules 삭제 후 재설치
rm -rf node_modules package-lock.json
npm install
```

### Q: Tailwind 클래스가 적용되지 않아요
1. `tailwind.config.ts`의 content 경로 확인
2. `globals.css`에 @tailwind 지시자 확인
3. 개발 서버 재시작

### Q: 타입 에러가 발생해요
```bash
# TypeScript 컴파일러로 타입 체크
npm run type-check
```

### Q: 이미지가 표시되지 않아요
- `public/images/` 폴더에 이미지 배치
- `next/image` 컴포넌트 사용
- 절대 경로로 참조: `/images/logo.png`

## 추가 정보

### 의존성 버전
- Node.js: ≥ 18.x
- Next.js: 14.2.15
- React: 18.3.1
- TypeScript: 5.6.3
- Tailwind CSS: 3.4.14

### 브라우저 지원
- Chrome (최신 2개 버전)
- Firefox (최신 2개 버전)
- Safari (최신 2개 버전)
- Edge (최신 2개 버전)

### 배포 환경 (권장)
- Vercel (최적화된 Next.js 호스팅)
- Netlify
- AWS Amplify

---

**작성일**: 2024-10-31
**버전**: 1.0
**담당**: INERVET 개발팀
