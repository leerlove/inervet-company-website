# INERVET 디자인 가이드

> **버전**: 1.0
> **작성일**: 2025-10-31
> **목적**: INERVET 홈페이지의 브랜드 아이덴티티 및 UI/UX 디자인 시스템

---

## 목차

1. [브랜드 아이덴티티](#1-브랜드-아이덴티티)
2. [컬러 시스템](#2-컬러-시스템)
3. [타이포그래피](#3-타이포그래피)
4. [간격 시스템](#4-간격-시스템)
5. [그림자 & 깊이](#5-그림자--깊이)
6. [컴포넌트 스타일](#6-컴포넌트-스타일)
7. [아이콘 시스템](#7-아이콘-시스템)
8. [이미지 가이드](#8-이미지-가이드)
9. [그리드 시스템](#9-그리드-시스템)
10. [애니메이션](#10-애니메이션)
11. [반응형 디자인](#11-반응형-디자인)
12. [접근성](#12-접근성)

---

## 1. 브랜드 아이덴티티

### 1.1 브랜드 키워드
- **혁신 (Innovation)**: AI 기술의 선도성
- **신뢰 (Trust)**: 98% 만족도, 18,000건 검증
- **전문성 (Professional)**: 수의학 + IT 전문가 팀
- **친근함 (Friendly)**: 반려동물과 보호자를 위한 서비스
- **미래지향 (Future-oriented)**: 소프트웨어 3.0 시대

### 1.2 디자인 원칙
1. **명료함 (Clarity)**: 정보 전달이 명확하고 직관적
2. **일관성 (Consistency)**: 모든 페이지에서 통일된 경험
3. **반응성 (Responsiveness)**: 모든 디바이스에서 최적화
4. **접근성 (Accessibility)**: WCAG 2.1 AA 준수
5. **성능 (Performance)**: 빠른 로딩, 부드러운 애니메이션

### 1.3 타겟별 디자인 접근

#### 일반 사용자 (반려인)
- **톤**: 따뜻하고 친근한 느낌
- **비주얼**: 반려동물 이미지, 밝은 색상
- **CTA**: 명확하고 눈에 띄는 버튼
- **콘텐츠**: 쉽게 이해할 수 있는 설명

#### 투자자
- **톤**: 전문적이고 신뢰감 있는 느낌
- **비주얼**: 차트, 그래프, 데이터 시각화
- **CTA**: 명확한 투자 유도
- **콘텐츠**: 수치와 근거 중심

---

## 2. 컬러 시스템

### 2.1 브랜드 컬러

#### Primary Color (주 색상)
```
Primary Blue
- HEX: #1E3A8A
- RGB: rgb(30, 58, 138)
- HSL: hsl(219, 64%, 33%)
- Tailwind: blue-900

용도:
- 메인 CTA 버튼
- 헤더 (스크롤 시)
- 중요 텍스트 강조
- 링크
```

```
Primary Light
- HEX: #3B82F6
- RGB: rgb(59, 130, 246)
- HSL: hsl(217, 91%, 60%)
- Tailwind: blue-500

용도:
- 버튼 hover 상태
- 아이콘
- 그래프 메인 색상
```

#### Secondary Color (보조 색상)
```
Accent Purple
- HEX: #8B5CF6
- RGB: rgb(139, 92, 246)
- HSL: hsl(258, 90%, 66%)
- Tailwind: violet-500

용도:
- CTA 섹션 그라데이션
- 보조 버튼
- 강조 요소
- 프리미엄 플랜 뱃지
```

#### Neutral Colors (중립 색상)
```
Gray Scale
- Gray 50:  #F9FAFB (배경)
- Gray 100: #F3F4F6 (섹션 배경)
- Gray 200: #E5E7EB (테두리)
- Gray 300: #D1D5DB (비활성 요소)
- Gray 400: #9CA3AF (보조 텍스트)
- Gray 500: #6B7280 (본문 텍스트)
- Gray 600: #4B5563 (제목)
- Gray 700: #374151 (강조 텍스트)
- Gray 800: #1F2937 (헤더 텍스트)
- Gray 900: #111827 (최고 강조)

용도:
- 텍스트 계층 구조
- 배경 및 구분선
- 비활성 상태
```

### 2.2 Semantic Colors (의미론적 색상)

#### Success (성공)
```
Green
- HEX: #10B981
- RGB: rgb(16, 185, 129)
- Tailwind: green-500

용도:
- 성공 메시지
- 체크 아이콘
- 긍정적 지표 (만족도 98%)
```

#### Warning (경고)
```
Yellow
- HEX: #F59E0B
- RGB: rgb(245, 158, 11)
- Tailwind: yellow-500

용도:
- 경고 메시지
- 주의 필요 항목
```

#### Error (오류)
```
Red
- HEX: #EF4444
- RGB: rgb(239, 68, 68)
- Tailwind: red-500

용도:
- 에러 메시지
- 필수 입력 표시
- 폼 검증 오류
```

#### Info (정보)
```
Cyan
- HEX: #06B6D4
- RGB: rgb(6, 182, 212)
- Tailwind: cyan-500

용도:
- 정보 메시지
- 툴팁
- 안내 사항
```

### 2.3 Gradient (그라데이션)

#### Primary Gradient
```css
background: linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%);
/* Primary Blue → Primary Light */

용도:
- Hero Section 오버레이
- 카드 헤더
```

#### CTA Gradient
```css
background: linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%);
/* Primary Light → Accent Purple */

용도:
- CTA 섹션 배경
- 프리미엄 플랜 카드
- 투자 하이라이트 배경
```

#### Subtle Gradient
```css
background: linear-gradient(180deg, #F9FAFB 0%, #FFFFFF 100%);
/* Gray 50 → White */

용도:
- 섹션 배경
- 카드 배경
```

### 2.4 투명도 (Opacity)

| 용도 | Opacity | Tailwind |
|------|---------|----------|
| 비활성 요소 | 50% | opacity-50 |
| 오버레이 배경 | 80% | opacity-80 |
| 호버 효과 | 90% | opacity-90 |
| 그림자 | 10-20% | - |

### 2.5 컬러 사용 예시

#### 홈 페이지
- **Hero Section**: Primary Blue (텍스트), CTA Gradient (버튼)
- **Core Value**: Gray 50 (배경), Primary Blue (제목)
- **Key Metrics**: White (배경), Accent Purple (아이콘)
- **CTA Section**: CTA Gradient (배경), White (텍스트)

#### IR 페이지
- **Investment Highlights**: Primary Blue (강조), Success Green (ROI)
- **Charts**: Primary Light (메인), Accent Purple (보조)
- **Tables**: Gray 100 (배경), Gray 800 (텍스트)

---

## 3. 타이포그래피

### 3.1 폰트 패밀리

#### 한글
```css
font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI',
             'Noto Sans KR', sans-serif;
```

**Pretendard**
- 라이센스: SIL Open Font License
- 다운로드: https://github.com/orioncactus/pretendard
- 특징: 한글 + 영문 혼용 최적화, 9단계 폰트 굵기

**대체 폰트**
- macOS/iOS: San Francisco (-apple-system)
- Windows: Segoe UI
- Google Fonts: Noto Sans KR (백업)

#### 영문
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

**Inter**
- 라이센스: SIL Open Font License
- 다운로드: https://fonts.google.com/specimen/Inter
- 특징: 가독성 우수, 숫자 표현 명확

### 3.2 폰트 굵기 (Font Weight)

| 이름 | Weight | Tailwind | 용도 |
|------|--------|----------|------|
| Light | 300 | font-light | 보조 텍스트 |
| Regular | 400 | font-normal | 본문 텍스트 |
| Medium | 500 | font-medium | 강조 텍스트 |
| SemiBold | 600 | font-semibold | 소제목 |
| Bold | 700 | font-bold | 제목, CTA |
| ExtraBold | 800 | font-extrabold | Hero 제목 |

### 3.3 타이포그래피 스케일

#### Desktop (1280px+)

| 요소 | 크기 | 행간 | 굵기 | Tailwind | 용도 |
|------|------|------|------|----------|------|
| H1 | 48px | 56px (1.17) | 800 | text-5xl font-extrabold leading-tight | Hero 제목 |
| H2 | 36px | 44px (1.22) | 700 | text-4xl font-bold leading-tight | 섹션 제목 |
| H3 | 24px | 32px (1.33) | 600 | text-2xl font-semibold leading-snug | 카드 제목 |
| H4 | 20px | 28px (1.4) | 600 | text-xl font-semibold leading-normal | 소제목 |
| Body Large | 18px | 28px (1.56) | 400 | text-lg font-normal leading-relaxed | 본문 (중요) |
| Body | 16px | 24px (1.5) | 400 | text-base font-normal leading-6 | 본문 (일반) |
| Body Small | 14px | 20px (1.43) | 400 | text-sm font-normal leading-5 | 보조 텍스트 |
| Caption | 12px | 16px (1.33) | 400 | text-xs font-normal leading-4 | 캡션, 라벨 |

#### Mobile (375px+)

| 요소 | 크기 | 행간 | 굵기 | Tailwind |
|------|------|------|------|----------|
| H1 | 32px | 40px (1.25) | 800 | text-3xl font-extrabold leading-tight |
| H2 | 24px | 32px (1.33) | 700 | text-2xl font-bold leading-snug |
| H3 | 20px | 28px (1.4) | 600 | text-xl font-semibold leading-normal |
| H4 | 18px | 26px (1.44) | 600 | text-lg font-semibold leading-normal |
| Body Large | 16px | 24px (1.5) | 400 | text-base font-normal leading-6 |
| Body | 16px | 24px (1.5) | 400 | text-base font-normal leading-6 |
| Body Small | 14px | 20px (1.43) | 400 | text-sm font-normal leading-5 |
| Caption | 12px | 16px (1.33) | 400 | text-xs font-normal leading-4 |

### 3.4 텍스트 컬러

| 용도 | 컬러 | Tailwind |
|------|------|----------|
| 주 제목 | Gray 900 (#111827) | text-gray-900 |
| 부 제목 | Gray 800 (#1F2937) | text-gray-800 |
| 본문 | Gray 700 (#374151) | text-gray-700 |
| 보조 텍스트 | Gray 500 (#6B7280) | text-gray-500 |
| 비활성 텍스트 | Gray 400 (#9CA3AF) | text-gray-400 |
| 강조 텍스트 | Primary Blue (#1E3A8A) | text-blue-900 |
| 링크 | Primary Light (#3B82F6) | text-blue-500 hover:text-blue-600 |
| 흰색 배경용 | White (#FFFFFF) | text-white |

### 3.5 타이포그래피 사용 예시

#### Hero Section
```html
<h1 class="text-5xl md:text-3xl font-extrabold text-gray-900 leading-tight">
  반려동물 건강관리에 시간과 공간의 경계를 허무는 혁신을 추구합니다.
</h1>
<p class="text-lg md:text-base font-normal text-gray-600 leading-relaxed mt-4">
  24시간 나만의 AI 수의사, 실시간 건강 모니터링부터 맞춤 영양 관리까지
</p>
```

#### 섹션 제목
```html
<h2 class="text-4xl md:text-2xl font-bold text-gray-900 leading-tight">
  신뢰할 수 있는 AI 펫 헬스케어
</h2>
```

#### 카드 제목
```html
<h3 class="text-2xl md:text-xl font-semibold text-gray-800 leading-snug">
  24시간 전담 AI 수의사
</h3>
<p class="text-base font-normal text-gray-600 leading-6 mt-2">
  개인화 학습을 통한 맞춤 상담, 빠른 진료 환경 제공
</p>
```

---

## 4. 간격 시스템

### 4.1 Spacing Scale

Tailwind의 4px 기반 스케일 사용:

| 이름 | 크기 | Tailwind | 용도 |
|------|------|----------|------|
| 0 | 0px | 0 | - |
| 1 | 4px | 1 | 아이콘 간격 |
| 2 | 8px | 2 | 최소 간격 |
| 3 | 12px | 3 | 텍스트-아이콘 간격 |
| 4 | 16px | 4 | 요소 간 간격 (기본) |
| 5 | 20px | 5 | 요소 간 간격 |
| 6 | 24px | 6 | 요소 간 간격 (중간) |
| 8 | 32px | 8 | 섹션 내부 간격 |
| 10 | 40px | 10 | 섹션 간격 (모바일) |
| 12 | 48px | 12 | 섹션 간격 |
| 16 | 64px | 16 | 섹션 간격 (데스크톱) |
| 20 | 80px | 20 | 대형 섹션 간격 |
| 24 | 96px | 24 | Hero Section |
| 32 | 128px | 32 | 특별 섹션 |

### 4.2 컨테이너 너비

| 디바이스 | 최대 너비 | Tailwind |
|----------|-----------|----------|
| Mobile | 100% (padding 20px) | max-w-full px-5 |
| Tablet | 768px | max-w-3xl |
| Desktop | 1280px | max-w-7xl |
| Large Desktop | 1536px | max-w-screen-2xl |

### 4.3 섹션 Padding

#### Vertical Padding (상하)
| 디바이스 | Padding | Tailwind |
|----------|---------|----------|
| Mobile | 40px | py-10 |
| Tablet | 60px | md:py-15 |
| Desktop | 80px | lg:py-20 |

#### Horizontal Padding (좌우)
| 디바이스 | Padding | Tailwind |
|----------|---------|----------|
| Mobile | 20px | px-5 |
| Tablet | 32px | md:px-8 |
| Desktop | 40px | lg:px-10 |

### 4.4 컴포넌트 간격

#### 카드 간격
```css
gap: 24px (모바일)
gap: 32px (데스크톱)
/* Tailwind: gap-6 lg:gap-8 */
```

#### 요소 간격 (제목-본문)
```css
margin-top: 16px
/* Tailwind: mt-4 */
```

#### 버튼 내부 Padding
```css
/* Small */
padding: 8px 16px  /* py-2 px-4 */

/* Medium */
padding: 12px 24px  /* py-3 px-6 */

/* Large */
padding: 16px 32px  /* py-4 px-8 */
```

---

## 5. 그림자 & 깊이

### 5.1 Shadow Scale

| 레벨 | Shadow | Tailwind | 용도 |
|------|--------|----------|------|
| None | none | shadow-none | 플랫 요소 |
| XS | 0 1px 2px rgba(0,0,0,0.05) | shadow-xs | 텍스트 위 |
| SM | 0 1px 3px rgba(0,0,0,0.1) | shadow-sm | 입력 필드 |
| Base | 0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06) | shadow | 카드 (기본) |
| MD | 0 4px 6px rgba(0,0,0,0.1) | shadow-md | 카드 (hover) |
| LG | 0 10px 15px rgba(0,0,0,0.1) | shadow-lg | 모달, 드롭다운 |
| XL | 0 20px 25px rgba(0,0,0,0.1) | shadow-xl | 팝업 |
| 2XL | 0 25px 50px rgba(0,0,0,0.25) | shadow-2xl | 최상위 레이어 |

### 5.2 컴포넌트별 그림자

| 컴포넌트 | 기본 상태 | Hover 상태 | Active 상태 |
|----------|-----------|------------|-------------|
| Card | shadow | shadow-md | shadow-lg |
| Button | shadow-sm | shadow-md | shadow-sm |
| Modal | shadow-2xl | - | - |
| Dropdown | shadow-lg | - | - |
| Input | shadow-sm | shadow-md (focus) | - |
| Header | none | shadow-md (스크롤 시) | - |

### 5.3 Elevation (깊이)

| 레벨 | Z-Index | 용도 |
|------|---------|------|
| Base | 0 | 기본 콘텐츠 |
| Dropdown | 10 | 드롭다운 메뉴 |
| Sticky | 20 | Sticky Header |
| Fixed | 30 | Fixed 요소 |
| Modal Backdrop | 40 | 모달 배경 |
| Modal | 50 | 모달 창 |
| Popover | 60 | 툴팁, 팝오버 |
| Toast | 70 | 토스트 알림 |

---

## 6. 컴포넌트 스타일

### 6.1 Button (버튼)

#### Primary Button
```css
/* Default State */
background: #1E3A8A (Primary Blue)
color: #FFFFFF
padding: 12px 24px (py-3 px-6)
border-radius: 8px (rounded-lg)
font-size: 16px (text-base)
font-weight: 600 (font-semibold)
box-shadow: 0 1px 3px rgba(0,0,0,0.1) (shadow-sm)
transition: all 0.2s ease

/* Hover State */
background: #3B82F6 (Primary Light)
box-shadow: 0 4px 6px rgba(0,0,0,0.1) (shadow-md)
transform: translateY(-2px)

/* Active State */
background: #1E40AF (Primary Dark)
box-shadow: 0 1px 3px rgba(0,0,0,0.1) (shadow-sm)
transform: translateY(0)

/* Disabled State */
background: #D1D5DB (Gray 300)
color: #9CA3AF (Gray 400)
cursor: not-allowed
```

**Tailwind 클래스**:
```html
<button class="bg-blue-900 hover:bg-blue-500 active:bg-blue-950
               text-white font-semibold py-3 px-6 rounded-lg
               shadow-sm hover:shadow-md hover:-translate-y-0.5
               transition-all duration-200 disabled:bg-gray-300
               disabled:text-gray-400 disabled:cursor-not-allowed">
  지금 시작하기
</button>
```

#### Secondary Button
```css
/* Default State */
background: transparent
color: #1E3A8A (Primary Blue)
border: 2px solid #1E3A8A
padding: 12px 24px (py-3 px-6)
border-radius: 8px (rounded-lg)

/* Hover State */
background: #1E3A8A (Primary Blue)
color: #FFFFFF
```

**Tailwind 클래스**:
```html
<button class="bg-transparent hover:bg-blue-900
               text-blue-900 hover:text-white
               border-2 border-blue-900 font-semibold
               py-3 px-6 rounded-lg transition-all duration-200">
  자세히 보기
</button>
```

#### Text Button
```css
/* Default State */
background: transparent
color: #3B82F6 (Primary Light)
padding: 8px 16px (py-2 px-4)
font-weight: 500 (font-medium)

/* Hover State */
color: #1E3A8A (Primary Blue)
text-decoration: underline
```

**Tailwind 클래스**:
```html
<button class="bg-transparent text-blue-500 hover:text-blue-900
               hover:underline font-medium py-2 px-4
               transition-colors duration-200">
  더 알아보기 →
</button>
```

#### Button Sizes
```html
<!-- Small -->
<button class="py-2 px-4 text-sm">Small Button</button>

<!-- Medium (기본) -->
<button class="py-3 px-6 text-base">Medium Button</button>

<!-- Large -->
<button class="py-4 px-8 text-lg">Large Button</button>

<!-- Full Width (모바일) -->
<button class="w-full py-3 px-6">Full Width Button</button>
```

---

### 6.2 Card (카드)

#### Default Card
```css
background: #FFFFFF
border-radius: 12px (rounded-xl)
padding: 24px (p-6)
box-shadow: 0 1px 3px rgba(0,0,0,0.1) (shadow)
border: 1px solid #E5E7EB (Gray 200)
transition: all 0.3s ease

/* Hover State */
box-shadow: 0 4px 6px rgba(0,0,0,0.1) (shadow-md)
transform: translateY(-4px)
```

**Tailwind 클래스**:
```html
<div class="bg-white rounded-xl p-6 shadow border border-gray-200
            hover:shadow-md hover:-translate-y-1
            transition-all duration-300">
  <!-- Card Content -->
</div>
```

#### Service Highlight Card
```html
<div class="bg-white rounded-xl p-8 shadow hover:shadow-lg
            hover:-translate-y-2 transition-all duration-300
            border-2 border-transparent hover:border-blue-500">
  <!-- Icon -->
  <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center
              justify-center mb-4">
    <svg class="w-8 h-8 text-blue-500">...</svg>
  </div>

  <!-- Title -->
  <h3 class="text-2xl font-semibold text-gray-800 mb-2">
    24시간 전담 AI 수의사
  </h3>

  <!-- Description -->
  <p class="text-base text-gray-600 leading-6 mb-4">
    개인화 학습을 통한 맞춤 상담, 빠른 진료 환경 제공
  </p>

  <!-- CTA Link -->
  <a href="#" class="text-blue-500 hover:text-blue-900 font-medium">
    자세히 보기 →
  </a>
</div>
```

#### Pricing Card
```html
<div class="bg-white rounded-xl p-8 shadow-lg border-2
            hover:border-blue-500 transition-all duration-300
            relative overflow-hidden">

  <!-- Badge (추천 플랜) -->
  <div class="absolute top-0 right-0 bg-gradient-to-r
              from-blue-500 to-violet-500 text-white
              px-4 py-1 text-sm font-semibold rounded-bl-lg">
    ⭐ 추천
  </div>

  <!-- Plan Name -->
  <h3 class="text-2xl font-bold text-gray-900 mb-2">
    프리미엄
  </h3>

  <!-- Price -->
  <div class="mb-6">
    <span class="text-4xl font-extrabold text-blue-900">25,000</span>
    <span class="text-lg text-gray-600">원/월</span>
  </div>

  <!-- Features -->
  <ul class="space-y-3 mb-6">
    <li class="flex items-start">
      <svg class="w-5 h-5 text-green-500 mr-2 mt-0.5">✓</svg>
      <span class="text-gray-700">스탠다드+ 기능</span>
    </li>
    <!-- ... -->
  </ul>

  <!-- CTA Button -->
  <button class="w-full bg-blue-900 hover:bg-blue-500
                 text-white font-semibold py-3 px-6
                 rounded-lg transition-colors duration-200">
    시작하기
  </button>

  <!-- Margin Info -->
  <p class="text-sm text-gray-500 mt-4 text-center">
    Gross Margin: 20%
  </p>
</div>
```

---

### 6.3 Input (입력 필드)

#### Text Input
```css
/* Default State */
background: #FFFFFF
border: 1px solid #E5E7EB (Gray 200)
border-radius: 8px (rounded-lg)
padding: 12px 16px (py-3 px-4)
font-size: 16px (text-base)
color: #374151 (Gray 700)
box-shadow: 0 1px 3px rgba(0,0,0,0.05) (shadow-sm)
transition: all 0.2s ease

/* Focus State */
border-color: #3B82F6 (Primary Light)
box-shadow: 0 0 0 3px rgba(59,130,246,0.1)
outline: none

/* Error State */
border-color: #EF4444 (Red)
box-shadow: 0 0 0 3px rgba(239,68,68,0.1)

/* Disabled State */
background: #F3F4F6 (Gray 100)
color: #9CA3AF (Gray 400)
cursor: not-allowed
```

**Tailwind 클래스**:
```html
<input
  type="text"
  class="w-full bg-white border border-gray-200 rounded-lg
         py-3 px-4 text-base text-gray-700 shadow-sm
         focus:border-blue-500 focus:ring-4 focus:ring-blue-100
         focus:outline-none transition-all duration-200
         disabled:bg-gray-100 disabled:text-gray-400
         disabled:cursor-not-allowed"
  placeholder="이름을 입력하세요"
/>

<!-- Error State -->
<input
  type="email"
  class="w-full border border-red-500 rounded-lg py-3 px-4
         focus:ring-4 focus:ring-red-100"
/>
<p class="text-sm text-red-500 mt-1">올바른 이메일을 입력하세요</p>
```

#### Textarea
```html
<textarea
  rows="5"
  class="w-full bg-white border border-gray-200 rounded-lg
         py-3 px-4 text-base text-gray-700 shadow-sm
         focus:border-blue-500 focus:ring-4 focus:ring-blue-100
         focus:outline-none transition-all duration-200 resize-none"
  placeholder="문의 내용을 입력하세요"
></textarea>
```

#### Select
```html
<select
  class="w-full bg-white border border-gray-200 rounded-lg
         py-3 px-4 text-base text-gray-700 shadow-sm
         focus:border-blue-500 focus:ring-4 focus:ring-blue-100
         focus:outline-none transition-all duration-200
         appearance-none cursor-pointer">
  <option>선택하세요</option>
  <option>동물병원</option>
  <option>아파트</option>
  <option>기업</option>
</select>
```

#### Checkbox
```html
<label class="flex items-center cursor-pointer">
  <input
    type="checkbox"
    class="w-5 h-5 text-blue-500 border-gray-300 rounded
           focus:ring-2 focus:ring-blue-500 cursor-pointer"
  />
  <span class="ml-2 text-gray-700">개인정보 수집 및 이용 동의</span>
</label>
```

---

### 6.4 Modal (모달)

```html
<!-- Backdrop -->
<div class="fixed inset-0 bg-black bg-opacity-50 z-40
            flex items-center justify-center p-4">

  <!-- Modal Container -->
  <div class="bg-white rounded-2xl shadow-2xl max-w-2xl w-full
              max-h-[90vh] overflow-y-auto z-50
              animate-fade-in-up">

    <!-- Modal Header -->
    <div class="flex items-center justify-between p-6
                border-b border-gray-200">
      <h2 class="text-2xl font-bold text-gray-900">
        투자 문의
      </h2>
      <button class="text-gray-400 hover:text-gray-600
                     transition-colors duration-200">
        <svg class="w-6 h-6">✕</svg>
      </button>
    </div>

    <!-- Modal Body -->
    <div class="p-6">
      <!-- Content -->
    </div>

    <!-- Modal Footer -->
    <div class="flex justify-end gap-3 p-6
                border-t border-gray-200 bg-gray-50">
      <button class="bg-transparent text-gray-700
                     border border-gray-300 hover:bg-gray-100
                     font-semibold py-2 px-6 rounded-lg
                     transition-colors duration-200">
        취소
      </button>
      <button class="bg-blue-900 hover:bg-blue-500
                     text-white font-semibold py-2 px-6
                     rounded-lg transition-colors duration-200">
        제출
      </button>
    </div>
  </div>
</div>
```

---

### 6.5 Badge (뱃지)

```html
<!-- Success Badge -->
<span class="inline-flex items-center px-3 py-1 rounded-full
             text-sm font-medium bg-green-100 text-green-800">
  ✓ 검증 완료
</span>

<!-- Primary Badge -->
<span class="inline-flex items-center px-3 py-1 rounded-full
             text-sm font-medium bg-blue-100 text-blue-800">
  New
</span>

<!-- Warning Badge -->
<span class="inline-flex items-center px-3 py-1 rounded-full
             text-sm font-medium bg-yellow-100 text-yellow-800">
  ⚠ 주의
</span>

<!-- Premium Badge (Gradient) -->
<span class="inline-flex items-center px-3 py-1 rounded-full
             text-sm font-medium bg-gradient-to-r
             from-blue-500 to-violet-500 text-white">
  ⭐ 프리미엄
</span>
```

---

### 6.6 Accordion (아코디언)

```html
<div class="border border-gray-200 rounded-lg overflow-hidden">

  <!-- Accordion Item -->
  <div class="border-b border-gray-200 last:border-b-0">
    <!-- Header (Button) -->
    <button class="w-full flex items-center justify-between
                   p-4 text-left bg-white hover:bg-gray-50
                   transition-colors duration-200">
      <span class="text-lg font-semibold text-gray-900">
        AI 펫닥터는 어떻게 사용하나요?
      </span>
      <svg class="w-5 h-5 text-gray-500 transform
                  transition-transform duration-200
                  [open]:-rotate-180">
        ▼
      </svg>
    </button>

    <!-- Content -->
    <div class="p-4 bg-gray-50 border-t border-gray-200">
      <p class="text-base text-gray-700 leading-6">
        AI 펫닥터 앱을 다운로드하고 회원가입 후 바로 사용할 수 있습니다...
      </p>
    </div>
  </div>

  <!-- More Accordion Items... -->
</div>
```

---

## 7. 아이콘 시스템

### 7.1 아이콘 라이브러리
**Heroicons** (권장)
- 라이센스: MIT
- 다운로드: https://heroicons.com
- 스타일: Outline (기본), Solid (강조)
- 크기: 24x24px (기본)

**대체**: Lucide Icons, Feather Icons

### 7.2 아이콘 크기

| 사이즈 | 크기 | Tailwind | 용도 |
|--------|------|----------|------|
| XS | 12px | w-3 h-3 | 작은 뱃지 |
| SM | 16px | w-4 h-4 | 텍스트 옆 |
| Base | 20px | w-5 h-5 | 일반 아이콘 |
| MD | 24px | w-6 h-6 | 버튼, 카드 |
| LG | 32px | w-8 h-8 | 큰 아이콘 |
| XL | 48px | w-12 h-12 | Feature 아이콘 |
| 2XL | 64px | w-16 h-16 | Hero 아이콘 |

### 7.3 아이콘 사용 예시

```html
<!-- 버튼 내 아이콘 -->
<button class="flex items-center gap-2 ...">
  <svg class="w-5 h-5">...</svg>
  <span>다운로드</span>
</button>

<!-- 리스트 아이콘 -->
<ul class="space-y-2">
  <li class="flex items-start gap-2">
    <svg class="w-5 h-5 text-green-500 mt-0.5">✓</svg>
    <span>AI 전담 수의사 상담</span>
  </li>
</ul>

<!-- Feature 카드 아이콘 -->
<div class="w-16 h-16 bg-blue-100 rounded-full
            flex items-center justify-center">
  <svg class="w-8 h-8 text-blue-500">🩺</svg>
</div>
```

### 7.4 주요 아이콘 목록

| 용도 | 이모지 | Heroicon |
|------|--------|----------|
| AI 수의사 | 🩺 | user-circle |
| 영양 관리 | 🍎 | cake |
| AIoT | ⌚ | device-phone-mobile |
| DTx | 📋 | clipboard-document-list |
| 상담 | 💬 | chat-bubble-left-right |
| 만족도 | ⭐ | star |
| 리텐션 | 📊 | chart-bar |
| 시간 | ⏱️ | clock |
| 병원 | 🏥 | building-office-2 |
| 펫푸드 | 🍖 | shopping-bag |
| 성공 | ✓ | check-circle |
| 오류 | ✕ | x-circle |
| 정보 | ℹ | information-circle |
| 경고 | ⚠ | exclamation-triangle |

---

## 8. 이미지 가이드

### 8.1 이미지 형식

| 용도 | 형식 | 압축 | 크기 |
|------|------|------|------|
| 사진 (Hero, 팀) | JPG/WebP | 80% | < 200KB |
| 로고, 아이콘 | SVG/PNG | - | < 50KB |
| 앱 스크린샷 | PNG/WebP | 85% | < 150KB |
| 썸네일 | JPG/WebP | 70% | < 100KB |

### 8.2 이미지 크기

| 위치 | 권장 크기 (px) | 비율 |
|------|----------------|------|
| Hero Background | 1920x1080 | 16:9 |
| Feature Image | 1200x800 | 3:2 |
| 팀 프로필 | 360x360 | 1:1 |
| 로고 | 200x80 | - |
| 앱 스크린샷 | 390x844 | 9:19.5 |
| 썸네일 | 400x300 | 4:3 |

### 8.3 이미지 최적화

```html
<!-- 반응형 이미지 -->
<img
  src="/images/hero-mobile.jpg"
  srcset="/images/hero-mobile.jpg 768w,
          /images/hero-tablet.jpg 1024w,
          /images/hero-desktop.jpg 1920w"
  sizes="(max-width: 768px) 100vw,
         (max-width: 1024px) 768px,
         1920px"
  alt="AI 펫닥터 앱"
  loading="lazy"
  class="w-full h-auto"
/>

<!-- Next.js Image 컴포넌트 (권장) -->
<Image
  src="/images/hero.jpg"
  alt="AI 펫닥터 앱"
  width={1920}
  height={1080}
  priority  // Hero 이미지는 priority
  quality={85}
/>
```

### 8.4 Placeholder

로딩 중:
```html
<div class="w-full h-64 bg-gray-200 animate-pulse rounded-lg"></div>
```

---

## 9. 그리드 시스템

### 9.1 레이아웃 그리드

```html
<!-- 12-Column Grid (Tailwind) -->
<div class="container mx-auto px-4">
  <div class="grid grid-cols-12 gap-4">
    <!-- 요소들 -->
  </div>
</div>
```

### 9.2 카드 그리드

```html
<!-- 반응형 카드 그리드 -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
            xl:grid-cols-4 gap-6">
  <!-- 카드들 -->
</div>

<!-- 주요 섹션 (2열) -->
<div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
  <!-- 좌측 -->
  <!-- 우측 -->
</div>
```

### 9.3 Flexbox 레이아웃

```html
<!-- Center Alignment -->
<div class="flex items-center justify-center h-screen">
  <!-- Content -->
</div>

<!-- Space Between -->
<div class="flex items-center justify-between">
  <div>Left</div>
  <div>Right</div>
</div>

<!-- Vertical Stack -->
<div class="flex flex-col gap-4">
  <!-- Items -->
</div>
```

---

## 10. 애니메이션

### 10.1 Transition Duration

| 속도 | Duration | Tailwind | 용도 |
|------|----------|----------|------|
| Fast | 150ms | duration-150 | 작은 변화 |
| Base | 200ms | duration-200 | 일반 (권장) |
| Medium | 300ms | duration-300 | 카드 hover |
| Slow | 500ms | duration-500 | 큰 변화 |

### 10.2 Easing Functions

```css
/* Tailwind */
ease-linear    /* linear */
ease-in        /* cubic-bezier(0.4, 0, 1, 1) */
ease-out       /* cubic-bezier(0, 0, 0.2, 1) */
ease-in-out    /* cubic-bezier(0.4, 0, 0.2, 1) */
```

**권장**: `ease-out` (대부분), `ease-in-out` (모달)

### 10.3 Framer Motion 애니메이션

#### Fade In
```tsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.6 }}
>
  {children}
</motion.div>
```

#### Slide Up
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
>
  {children}
</motion.div>
```

#### Stagger Children
```tsx
<motion.div
  initial="hidden"
  animate="visible"
  variants={{
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }}
>
  {items.map((item) => (
    <motion.div
      key={item.id}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
    >
      {item.content}
    </motion.div>
  ))}
</motion.div>
```

#### Scale on Hover
```tsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  transition={{ duration: 0.2 }}
>
  Click Me
</motion.button>
```

#### Number Count Up
```tsx
import { useMotionValue, useSpring } from "framer-motion";

// 18,000 → 애니메이션
const value = useMotionValue(0);
const spring = useSpring(value, { duration: 1500 });

useEffect(() => {
  value.set(18000);
}, []);
```

---

## 11. 반응형 디자인

### 11.1 브레이크포인트

| 디바이스 | 최소 너비 | Tailwind | 비고 |
|----------|-----------|----------|------|
| Mobile | 0px | (기본) | 375px 기준 디자인 |
| Tablet | 768px | md: | iPad 세로 |
| Desktop | 1024px | lg: | 노트북 |
| Large Desktop | 1280px | xl: | 데스크톱 |
| Extra Large | 1536px | 2xl: | 대형 모니터 |

### 11.2 반응형 패턴

#### 숨기기/보이기
```html
<!-- Mobile만 표시 -->
<div class="block md:hidden">Mobile Only</div>

<!-- Desktop만 표시 -->
<div class="hidden lg:block">Desktop Only</div>
```

#### 그리드 변화
```html
<!-- Mobile: 1열, Tablet: 2열, Desktop: 3열 -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <!-- Items -->
</div>
```

#### 텍스트 크기 변화
```html
<!-- Mobile: 32px, Desktop: 48px -->
<h1 class="text-3xl lg:text-5xl font-extrabold">
  제목
</h1>
```

#### Padding 변화
```html
<!-- Mobile: 20px, Desktop: 40px -->
<section class="py-10 lg:py-20">
  <!-- Content -->
</section>
```

---

## 12. 접근성

### 12.1 WCAG 2.1 AA 준수

#### 색상 대비
- **일반 텍스트**: 최소 4.5:1
- **큰 텍스트 (18px+)**: 최소 3:1
- **UI 컴포넌트**: 최소 3:1

#### 검증된 조합
| 전경색 | 배경색 | 대비율 | 통과 |
|--------|--------|--------|------|
| Gray 900 | White | 18.7:1 | ✓ AAA |
| Gray 700 | White | 10.8:1 | ✓ AAA |
| Primary Blue | White | 9.7:1 | ✓ AAA |
| Gray 500 | White | 4.6:1 | ✓ AA |
| Primary Light | White | 3.4:1 | ✓ Large Text |

### 12.2 키보드 네비게이션

```html
<!-- Focus Visible -->
<button class="focus:outline-none focus:ring-4
               focus:ring-blue-100 focus:ring-offset-2">
  버튼
</button>

<!-- Skip to Content -->
<a href="#main-content"
   class="sr-only focus:not-sr-only focus:absolute
          focus:top-4 focus:left-4 focus:z-50
          focus:bg-blue-900 focus:text-white
          focus:px-4 focus:py-2 focus:rounded">
  본문으로 건너뛰기
</a>
```

### 12.3 시맨틱 HTML

```html
<!-- 올바른 구조 -->
<header>
  <nav aria-label="주 메뉴">...</nav>
</header>

<main id="main-content">
  <article>
    <h1>제목</h1>
    <section>...</section>
  </article>
</main>

<footer>...</footer>
```

### 12.4 ARIA 레이블

```html
<!-- 아이콘 버튼 -->
<button aria-label="메뉴 열기">
  <svg>☰</svg>
</button>

<!-- 링크 -->
<a href="/ir" aria-label="투자자 정보 페이지로 이동">
  IR
</a>

<!-- 로딩 상태 -->
<div role="status" aria-live="polite">
  <span class="sr-only">로딩 중...</span>
</div>
```

---

## 변경 이력

| 날짜 | 버전 | 변경 내용 | 작성자 |
|------|------|-----------|--------|
| 2025-10-31 | 1.0 | 초안 작성 | - |

---

**다음 단계**: 콘텐츠 작성 가이드 (카피라이팅, 톤앤매너)
