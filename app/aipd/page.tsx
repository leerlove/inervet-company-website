import Image from 'next/image'
import AipdHeader from '@/components/aipd/AipdHeader'
import AppBadges from '@/components/aipd/AppBadges'
import AipdFooter from '@/components/aipd/AipdFooter'
import Reveal from '@/components/common/Reveal'

/**
 * AI 펫닥터 랜딩 (aipetdoctor.co.kr).
 * 기존 Figma Sites 사이트의 1:1 이전. 에셋 매핑은 docs/aipd-asset-map.md 참고.
 */

const A = '/aipd/assets'

const PROBLEMS = [
  {
    icon: `${A}/2a6d104637880c346877a6d3e79da2c48f2b78fc.png`,
    q: '병원에 당장 가야 할까? 집에서 지켜봐도 괜찮을까?',
    body: '증상이 발견되었지만 어느 타이밍에\n병원에 가야 하는지 잘 모르겠을 때',
  },
  {
    icon: `${A}/65790bd3420b3c2b847650ff0d54ea4b0e3d5c2a.png`,
    q: '괜히 데리고 나갔다가 비용만 날리는 건 아닐까?',
    body: '집 밖으로 나가면 스트레스 받는 우리 아이\n이런 걸로 병원에 가도 될까 고민될 때',
  },
  {
    icon: `${A}/8ecbd9b0da3903144bac28b5e897a7958fdef966.png`,
    q: '밥을 잘 안 먹는 것 같은데... 살이 좀 빠졌는데 아픈 걸까?',
    body: '어딘가 애매~한 우리 아이의 증상\n전문가의 조언이 궁금할 때',
  },
]

const STATS = [
  { label: '사용자 상담 데이터', value: '18,000여 건 +' },
  { label: '상담 정확도', value: '85%' },
  { label: '사용자 평점', value: '4.9 ★' },
  { label: '다운로드 수', value: '1만 회 +' },
]

const FEATURES = [
  {
    tag: 'AI 건강 상담 기능',
    title: '새벽 2시에도 깨어있는\nAI 주치의',
    body: '아이가 갑자기 아플 때,\n검색하느라 시간 낭비하지 마세요.\n\n우리 아이의 헬스 데이터를 바탕으로\n빠르게 해당 증상에 대해 분석합니다.',
    img: `${A}/2c2df18f633d89c9f7ec0d35c423a4a1c57c4443.png`,
    w: 350,
    h: 390,
  },
  {
    tag: '내 주변 병원 찾기',
    title: '가장 위급한 순간에도\n당황할 필요없어요',
    body: '급하다고 허둥지둥 당황하면\n아이들도 불안을 느껴요.\n\n현재 내 위치를 기반으로\n가장 가까운 동물병원은 어디인지,\n어떻게 운영하지 간편하게 알 수 있습니다.',
    img: `${A}/d5911dfffee669fdaf04d6b0f968d7c5324353e0.png`,
    w: 320,
    h: 356,
  },
  {
    tag: '건강체크키트 구독',
    title: '매월 집으로 도착하는\n우리 아이 건강 안심 습관',
    body: '한 번의 구독으로 간편하게\n집에서도 정기적인 헬스 체크를 진행하고\n맞춤 리포트를 받아볼 수 있어요.\n\n꾸준히 아이의 건강 변화를 기록하고,\n아프기 전에 미리 지켜줄 수 있습니다.',
    img: `${A}/a5b46837a965118d07997bb27fad7912510985c5.png`,
    w: 350,
    h: 390,
  },
  {
    tag: '맞춤 영양 관리',
    title: '1:1 맞춤 영양 관리로\n매일매일 건강하게',
    body: '정확한 급여량 분석부터\n규칙적인 식사 습관을 만들어주는 급여 알림까지.\n\n매일 먹는 사료가\n최고의 보약이 될 수 있도록 도와드릴게요.',
    img: `${A}/319dfc67e050605dba79f096e86ea379008783c9.png`,
    w: 350,
    h: 390,
  },
  {
    tag: '영양 궁합 분석',
    title: "오직 '우리 아이'에게만\n최고의 궁합인 사료",
    body: '너~무 좋다던 그 사료,\n우리 아이에게는 위험할 수도 있다면?\n\n지금 먹이고 있는 사료와 간식의 뒷면을 찍어 보세요.\nAI가 꼼꼼하게 분석한 뒤\n우리 아이와의 궁합 점수를 알려드려요.',
    img: `${A}/3a8b52b5107f946558fdd9dd9ee1648ef47fd9b4.png`,
    w: 350,
    h: 390,
  },
]

const CARDS = [
  {
    img: `${A}/46ce5a829f179d5d6dbd28abe3b43a247c9e59f9.png`,
    title: '작은 증상이라도\n가볍게 넘어가지 않아요',
    body: '검색하느라 시간 낭비는 그만.\n\n우리 아이를 가장 잘 알고 있는\n나만의 AI펫닥터에게 바로바로 물어봐요.',
  },
  {
    img: `${A}/4ffd7e4e24ab8c439fd0d8365899a94ca07f6779.png`,
    title: '병원비 걱정 덜어주는\n사전 체크 어플',
    body: '당장 병원에 가야 할 응급 상황인지,\n혹은 조금 더 경과를 지켜봐도 괜찮을지.\n\n고민하는 보호자들의 마음을 헤아렸어요.',
  },
  {
    img: `${A}/79cc24768250c6a5b4133a384b3f5ecbbd0ea4fc.png`,
    title: '언제, 어디서나\n주머니 속 나만의 펫닥터',
    body: '동물병원이 문을 닫는 새벽 3시에도,\n산책 나온 집 앞 공원 벤치에서도.\n\n궁금한 점은 언제든지 물어볼 수 있답니다.',
  },
]

const REVIEWS = [
  {
    avatar: `${A}/3c8413f5b8f065f5e119be497bd42be5d5fa1dfe.png`,
    who: '심장병, 폐수종에 걸린 ♥♥의\n예후를 걱정하던 보호자',
    reply: '너무 감사합니다.ㅠㅠㅠ 이해하기 어려웠는데 조금 알것 같아요! 더 공부해볼께요.ㅎㅎ',
  },
  {
    avatar: `${A}/4f244d0d9e3719a00cf35388d7687dcfbaf31b38.png`,
    who: '산책후 이상징후가 걱정되던 보호자',
    reply:
      '세심하고 꼼꼼하게 알려주어서 한결 마음이 놓입니다. 눈으로 확인하고 볼 수 있으니 더 잘 인식이 되고 이해가 더 빠르게 됩니다!!',
  },
  {
    avatar: `${A}/e6a0b049d52e380bceb591e157748c28ff76ab23.png`,
    who: '1년차 초보 집사인 보호자',
    reply:
      '답변을 명쾌하게 해주신 것 같아 그래도 한결 맘도 놓이고 정확하게 어떤 상황인지도 인지할 수 있게 된 것 같습니다. 덕분에 마음 졸이지 않고 차분히 애기 상태를 다시 볼 수 있을것 같아요 🫡',
  },
  {
    avatar: `${A}/6480a52b4ccf55f226f31501e403af0ce0530229.png`,
    who: '담낭 점액종 진단 후 케어 방향이\n궁금했던 포메라니안 보호자',
    reply:
      '병원에서 담낭슬러지 점액종 진단 받아서 당황스러웠는데 케어방향이나 질환에대해 이해 하기 쉽게 너무 자세히 알려주셔서 많이 도움이되었어요👍',
  },
  {
    avatar: `${A}/da8217be3a9800e58f64ba5360a965b783e63a56.png`,
    who: '몰티즈의 배변 실수가 걱정된 보호자',
    reply:
      '정말 AI챗상담 기능 최고네요. 단순하게만 생각했는데 우리 몰티즈가 배변 장애를 겪고 있는 경우가 굉장히 여러 경우일 거라고 알려 주었어요. 관찰하는데 많은 도움을 주네요.',
  },
  {
    avatar: `${A}/6504dabaf7fbac15a19529f56d3fe80adae05c90.png`,
    who: '포메라니안의 행동이 궁금했던 보호자',
    reply: '전체적으로 정확성이 높고 특정 반려동물 이름을 말하지도않았는데 제대로 분석해냈습니다',
  },
]

export default function AipdPage() {
  return (
    <>
      <AipdHeader />

      <main>
        {/* 1. 히어로 */}
        <section className="relative overflow-hidden bg-gradient-to-b from-pet-50 via-white to-white pt-28 pb-16 lg:pt-36 lg:pb-24">
          <div className="container-custom">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <Reveal>
                <div>
                  <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
                    꼭 필요한 순간에
                    <br />
                    <span className="text-pet-500">동물병원에 갈 수 있다면</span>
                  </h1>
                  <p className="mt-6 text-base leading-relaxed text-gray-600 sm:text-lg">
                    새벽 2시, 반려동물이 갑자기 이상 증세를 보이나요?
                    <br />
                    검색하느라 시간 낭비는 그만.
                  </p>
                  <p className="mt-4 text-base leading-relaxed text-gray-600 sm:text-lg">
                    병원 가기 전 1분도 안 되는 시간으로
                    <br />
                    우리 아이만을 위한 맞춤형 분석 결과를 받아보세요.
                  </p>
                  <p className="mt-8 text-sm font-semibold text-pet-600">
                    24시 반려동물 건강 상담 서비스
                  </p>
                  <div className="mt-4">
                    <AppBadges />
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="flex justify-center lg:justify-end">
                  <Image
                    src={`${A}/dc435d56a8cb5efe06c21b868485b45f721b3d49.svg`}
                    alt="AI 펫닥터 앱 상담 화면"
                    width={409}
                    height={833}
                    priority
                    className="h-auto w-[280px] sm:w-[340px] lg:w-[380px]"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* 2. 문제 / 공감 */}
        <section className="bg-white py-20 lg:py-28">
          <div className="container-custom">
            <div className="mx-auto max-w-4xl space-y-6">
              {PROBLEMS.map((p, i) => (
                <Reveal key={p.q} delay={i * 0.1}>
                  <div className="flex items-start gap-5 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md lg:p-8">
                    <Image
                      src={p.icon}
                      alt=""
                      width={47}
                      height={47}
                      className="mt-1 h-11 w-11 flex-shrink-0"
                    />
                    <div>
                      <p className="text-lg font-bold text-gray-900 sm:text-xl">{p.q}</p>
                      <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-gray-500 sm:text-base">
                        {p.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 3. AI 헬스케어 서비스 소개 + 지표 */}
        <section className="bg-gradient-to-b from-white to-pet-50 py-20 lg:py-28">
          <div className="container-custom">
            <Reveal>
              <div className="mx-auto max-w-3xl text-center">
                <p className="text-sm font-semibold tracking-wide text-pet-600">AI 헬스케어 서비스</p>
                <h2 className="mt-4 text-2xl font-bold leading-snug text-gray-900 sm:text-3xl lg:text-4xl">
                  동물병원보다 가까운 내 손 안의 주치의
                  <br />
                  <span className="text-pet-500">이젠 AI펫닥터에게 물어보세요</span>
                </h2>
                <p className="mt-6 text-base leading-relaxed text-gray-600">
                  18,000여건 이상의 &lsquo;데이터&rsquo;를 학습한
                  <br />
                  반려동물 헬스 케어 전문 AI가 확신을 드릴게요
                </p>
              </div>
            </Reveal>

            <div className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-4 lg:grid-cols-4">
              {STATS.map((s, i) => (
                <Reveal key={s.label} delay={i * 0.08}>
                  <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
                    <p className="text-xs text-gray-500">{s.label}</p>
                    <p className="mt-2 text-xl font-bold text-pet-500 lg:text-2xl">{s.value}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 4. 기능 소개 */}
        <section id="features" className="bg-white py-20 lg:py-28">
          <div className="container-custom">
            <Reveal>
              <div className="mx-auto max-w-3xl text-center">
                <p className="text-sm font-semibold tracking-wide text-pet-600">서비스 기능 소개</p>
                <h2 className="mt-4 text-2xl font-bold leading-snug text-gray-900 sm:text-3xl lg:text-4xl">
                  더 똑똑하고 더 새로워진
                  <br />
                  AI 펫닥터의 기능을 소개할게요
                </h2>
                <p className="mt-4 text-base text-gray-500">반려동물과 함께하는 당신의 일상 속 AI</p>
              </div>
            </Reveal>

            <div className="mt-16 space-y-20 lg:space-y-28">
              {FEATURES.map((f, i) => (
                <Reveal key={f.tag} delay={0.05}>
                  <div
                    className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                      i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
                    }`}
                  >
                    <div>
                      <span className="inline-block rounded-full bg-pet-100 px-4 py-1.5 text-sm font-semibold text-pet-700">
                        {f.tag}
                      </span>
                      <h3 className="mt-5 whitespace-pre-line text-2xl font-bold leading-snug text-gray-900 sm:text-3xl">
                        {f.title}
                      </h3>
                      <p className="mt-5 whitespace-pre-line text-base leading-relaxed text-gray-600">
                        {f.body}
                      </p>
                    </div>
                    <div className="flex justify-center">
                      <Image
                        src={f.img}
                        alt={f.tag}
                        width={f.w}
                        height={f.h}
                        className="h-auto w-[280px] sm:w-[330px]"
                      />
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 5. 개인화 */}
        <section className="bg-pet-50 py-20 lg:py-28">
          <div className="container-custom">
            <Reveal>
              <div className="mx-auto max-w-3xl text-center">
                <p className="text-sm font-semibold tracking-wide text-pet-600">
                  세상에서 가장 특별한 우리 아이
                </p>
                <h2 className="mt-4 text-2xl font-bold leading-snug text-gray-900 sm:text-3xl lg:text-4xl">
                  우리 아이를 이해하는 주치의
                </h2>
                <p className="mt-6 text-base leading-relaxed text-gray-600">
                  다른 반려동물과 똑같은 방법으로 관리해도 될까요?
                  <br />
                  5살 말티즈와 10살 푸들의 건강 관리 방법은 달라야 하니까요.
                </p>
                <p className="mt-4 text-base leading-relaxed text-gray-600">
                  아이의 병력, 체중, 식습관, 특이사항을 꼼꼼히 분석하고
                  <br />
                  오직 우리 아이만을 위한 영양 설계와 헬스 케어 루틴을 만들어드립니다.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 6. 3 카드 */}
        <section className="bg-white py-20 lg:py-28">
          <div className="container-custom">
            <div className="grid gap-8 md:grid-cols-3">
              {CARDS.map((c, i) => (
                <Reveal key={c.title} delay={i * 0.1}>
                  <div className="flex h-full flex-col rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
                    <Image
                      src={c.img}
                      alt=""
                      width={278}
                      height={197}
                      className="mb-6 h-auto w-full rounded-2xl"
                    />
                    <h3 className="whitespace-pre-line text-xl font-bold leading-snug text-gray-900">
                      {c.title}
                    </h3>
                    <p className="mt-4 whitespace-pre-line text-sm leading-relaxed text-gray-600">
                      {c.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 7. 후기 */}
        <section className="bg-pet-50 py-20 lg:py-28">
          <div className="container-custom">
            <Reveal>
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-2xl font-bold leading-snug text-gray-900 sm:text-3xl lg:text-4xl">
                  이미 많은 반려인들이
                  <br />
                  펫닥터를 통해 안심하고 있어요
                </h2>
                <p className="mt-5 text-base text-gray-600">
                  5,000여 명이 먼저 펫닥터와 건강 관리를 진행해 봤어요.
                </p>
              </div>
            </Reveal>

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {REVIEWS.map((r, i) => (
                <Reveal key={r.who} delay={(i % 3) * 0.08}>
                  <div className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-sm">
                    <div className="flex items-start gap-3">
                      <Image
                        src={r.avatar}
                        alt=""
                        width={24}
                        height={24}
                        className="mt-1 h-8 w-8 flex-shrink-0 rounded-full"
                      />
                      <div>
                        <p className="whitespace-pre-line text-sm font-semibold text-gray-900">
                          {r.who}
                        </p>
                        <p className="mt-1 text-xs text-yellow-500">★★★★★</p>
                      </div>
                    </div>
                    <p className="mt-4 flex-1 text-sm leading-relaxed text-gray-600">{r.reply}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 8. 최종 CTA */}
        <section className="bg-white py-20 lg:py-28">
          <div className="container-custom">
            <div className="mx-auto max-w-3xl rounded-3xl bg-gradient-to-br from-pet-50 to-pet-100 px-8 py-14 text-center lg:px-16 lg:py-16">
              <Reveal>
                <Image
                  src={`${A}/bba7f462b257924bca8bb35ce0750e3adfb5fd15.png`}
                  alt=""
                  width={300}
                  height={300}
                  className="mx-auto mb-6 h-auto w-40 sm:w-48"
                />
                <h2 className="text-2xl font-bold leading-snug text-gray-900 sm:text-3xl">
                  우리 아이만을 위한 AI 주치의
                  <br />
                  지금 바로 만나볼까요?
                </h2>
                <p className="mt-4 text-sm font-semibold text-pet-600">
                  24시 반려동물 건강 상담 서비스
                </p>
                <div className="mt-8 flex justify-center">
                  <AppBadges />
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <AipdFooter />
    </>
  )
}
