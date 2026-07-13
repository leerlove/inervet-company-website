# INERVET 사이트 리디자인 기획 (우산 브랜드 + 시네마틱)

> 상태: 기획 확정 · 실행 착수
> 브랜치: `redesign/umbrella-cinematic`
> 반영 방식: 브랜치 작업 → Vercel 프리뷰 배포로 검토 → OK 시 main 병합(→라이브)

## 1. 포지셔닝 (확정)

INERVET = **"AI 펫닥터를 만든 팀이 이끄는 AI 네이티브 전환 회사"** (우산 브랜드).
두 사업을 하나의 "AI 네이티브" 서사로 묶는다.

- **사업 ① AI 펫닥터** — B2C 반려동물 건강 (제품, 앱). 실력을 증명하는 flagship proof.
- **사업 ② 부동산 AI 전환 컨설팅** — B2B 엔터프라이즈 (서비스). 서비스·사례 콘텐츠 보유.

미감 기준점: **som.com** — 시네마틱 다크, 고정 배경 영상 + 스크롤 어두워짐, 에디토리얼 타이포.
(참고 벤치마크: Runway=시네마틱 영상 히어로, x.company/aifund=우산 IA, Lunit=2세그먼트 명료함, Sierra=절제된 모션.)

## 2. IA (확정)

```
INERVET
├─ Home ★신규            우산 서사 · 시네마틱 히어로 · 두 기둥 · 증거 · 이중 CTA
├─ 사업 (What We Do)      [상단 드롭다운]
│   ├─ AI 펫닥터 ★재편     얇은 개요 → aipetdoctor.co.kr로 핸드오프
│   └─ 부동산 AI 전환 ★신규 컨설팅(B2B): 서비스 · 사례 · 방법론 · 문의
├─ About ★재편           AI 네이티브 회사 스토리 · 팀 · 비전 · 연혁
├─ IR ★유지·재편          투자자용, 우산 서사로 톤 조정
├─ Contact ★재편          두 갈래 문의(펫닥터 / 컨설팅)
└─ Footer: FAQ · 이용약관 · 개인정보처리방침 (유지)
```

### 홈 섹션 순서
1. **Hero** — 우산 선언 한 줄 + 배경 영상 + 스크롤 어두워짐
2. **Thesis** — "왜 지금 AI 네이티브 전환인가" 매니페스토
3. **Two Pillars** — 두 사업 대등 카드 → 각 페이지
4. **Proof** — 펫닥터 실적 지표 + 컨설팅 대표 사례 (flagship proof)
5. **Approach** — AI 네이티브 방법론
6. **CTA** — 이중 전환("펫닥터 시작" / "컨설팅 문의") + Contact

## 3. AI 펫닥터 병합 방식 (확정: 페더레이션)

- **aipetdoctor.co.kr 유지** — 제품·앱 다운로드 퍼널. 제품명 도메인 = B2C 자산 보존.
- 현재 aipetdoctor.co.kr은 **Figma Sites**로 제작(앱 랜딩: 히어로→기능→후기→CTA). 푸터가 이미 inervet.com/about·/contact·/terms·/privacy를 참조 → 우산 구조 암묵적 존재.
- INERVET의 "AI 펫닥터" 페이지 = **얇은 개요 + aipetdoctor.co.kr 딥링크** (상세 콘텐츠 중복 재현하지 않음).
- **개선 방향(모델 B): 통합 Next.js 재구축, 도메인은 유지** — 한 코드베이스가 두 도메인(inervet.com + aipetdoctor.co.kr)을 서빙. 디자인 시스템·브랜드 토큰 공유 → 한 패밀리. 도메인·퍼널·타깃은 각자 유지. Figma Sites의 시네마틱 연출·성능·SEO 한계 해소.

## 4. 실행 순서 (시퀀스)

```
M1. INERVET 디자인 시스템(브랜드 토큰·타이포·컴포넌트) + 새 시네마틱 홈
M2. 부동산 AI 전환 컨설팅 페이지 (보유 서비스·사례 콘텐츠 투입)
M3. AI 펫닥터 개요 페이지 + About/IR/Contact 재편
M4. aipetdoctor.co.kr을 통합 디자인 시스템으로 재구축 (도메인 유지)
M5. 양방향 내비게이션 브릿지 정비
```
원칙: 디자인 시스템이 먼저 나와야 aipetdoctor가 거기서 파생됨. aipetdoctor 단독 선(先)작업 금지.

## 5. 기술/제약 메모

- INERVET: Next.js 14 + TypeScript + Tailwind 3 + framer-motion + EmailJS.
- 기존 홈 컴포넌트(Hero/KeyMetrics/Problem/ServiceShowcase/HowItWorks/Testimonials/FinalCTA)는 전부 펫닥터 콘텐츠 → 펫닥터 개요/aipetdoctor로 흡수, 홈은 우산용 신규.
- 브랜드 컬러: 파랑(primary-900 `#1e3a8a`) + 퍼플 계열, Pretendard 폰트. 시네마틱 다크로 재해석하되 액센트 유지.
- 라이브 자동배포 연결됨 → 반드시 브랜치+프리뷰로 검토 후 병합.

## 6. 오픈 이슈 / 필요 입력

- [ ] 부동산 AI 컨설팅 **서비스 목록 · 고객 사례** 원문 (M2 착수에 필요)
- [ ] 우산 히어로 **카피/톤** 확정 (M1)
- [ ] 배경 영상 테마 (반려동물/도시·부동산/추상 — 라이선스 프리 소스)
