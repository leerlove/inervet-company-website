'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { EXTERNAL_LINKS } from '@/constants/externalLinks'

/**
 * 우산 브랜드 시네마틱 히어로 (som.com 방식).
 * - 배경 영상을 화면에 고정(fixed)하고, 하위 콘텐츠가 그 위로 스크롤되어 올라옴
 * - 스크롤할수록 어둠 오버레이가 짙어지며 히어로 텍스트는 서서히 사라짐
 * - 첫 화면을 지나면 배경 페이드아웃 + 영상 정지(자원 절약)
 * - autoPlay + muted + playsInline + loop: 모바일 자동재생 필수 조합
 * - prefers-reduced-motion 존중, 일시정지 버튼(WCAG 2.2.2)
 */

const CLIPS = [
  { src: '/videos/hero-cityscape.mp4' },
  { src: '/videos/hero-lighttrails.mp4' },
]
const POSTER = '/videos/hero-poster.jpg'
const CLIP_DURATION_MS = 9000
const FADE_MS = 1200

export default function CinematicHero() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)
  const [progress, setProgress] = useState(0)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mq.matches)
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  // 스크롤 진행도(0~1) — 어두워짐/덮임 연출
  useEffect(() => {
    let raf = 0
    const update = () => {
      raf = 0
      const vh = window.innerHeight || 1
      setProgress(Math.min(window.scrollY / vh, 1))
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  const heroOffscreen = progress >= 0.999

  useEffect(() => {
    if (paused || reducedMotion || heroOffscreen || CLIPS.length < 2) return
    timerRef.current = setTimeout(() => {
      setActive((i) => (i + 1) % CLIPS.length)
    }, CLIP_DURATION_MS)
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [active, paused, reducedMotion, heroOffscreen])

  useEffect(() => {
    videoRefs.current.forEach((v, i) => {
      if (!v) return
      if (i === active && !paused && !reducedMotion && !heroOffscreen) {
        v.play().catch(() => {})
      } else {
        v.pause()
      }
    })
  }, [active, paused, reducedMotion, heroOffscreen])

  const togglePause = useCallback(() => setPaused((p) => !p), [])

  const darkenOpacity = progress * 0.86
  const heroTextOpacity = Math.max(1 - progress * 1.4, 0)
  const heroTextShift = progress * -48
  const bgOpacity = Math.max(1 - (progress - 0.85) / 0.15, 0)

  return (
    <>
      {/* 고정 배경 영상 레이어 */}
      <div
        className="fixed inset-0 z-0"
        aria-hidden="true"
        style={{ opacity: bgOpacity, visibility: bgOpacity <= 0 ? 'hidden' : 'visible' }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${POSTER})` }}
        />
        {!reducedMotion &&
          CLIPS.map((clip, i) => (
            <video
              key={clip.src}
              ref={(el) => {
                videoRefs.current[i] = el
              }}
              className="absolute inset-0 h-full w-full object-cover transition-opacity ease-in-out"
              style={{ opacity: i === active ? 1 : 0, transitionDuration: `${FADE_MS}ms` }}
              src={clip.src}
              poster={i === 0 ? POSTER : undefined}
              muted
              loop
              playsInline
              autoPlay={i === 0}
              preload={i === 0 ? 'auto' : 'metadata'}
            />
          ))}
        {/* 기본 그라데이션 (가독성 + 브랜드 틴트) */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/70 via-ink-900/30 to-ink-900" />
        <div className="absolute inset-0 bg-gradient-to-tr from-primary-900/30 via-transparent to-accent-900/20" />
        {/* 스크롤 연동 어둠 오버레이 */}
        <div className="absolute inset-0 bg-ink-950" style={{ opacity: darkenOpacity }} />
      </div>

      {/* 히어로 콘텐츠 (첫 화면) */}
      <section id="hero" className="relative z-10 h-[100svh] min-h-[600px] w-full text-white">
        <div
          className="container-custom flex h-full flex-col justify-end pb-24 lg:pb-28"
          style={{
            opacity: heroTextOpacity,
            transform: `translateY(${heroTextShift}px)`,
            willChange: 'opacity, transform',
          }}
        >
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-accent-300">
            AI Native Transformation
          </p>
          <h1 className="max-w-4xl text-4xl font-bold leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl">
            AI 펫닥터로 증명했습니다.
            <br />
            <span className="bg-gradient-to-r from-primary-300 via-accent-300 to-primary-200 bg-clip-text text-transparent">
              다음은 당신의 산업입니다.
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-blue-100/90 sm:text-lg">
            수만 건의 상담으로 검증한 AI 실행력으로,
            <br className="hidden sm:block" />
            이제 부동산 산업의 AI 네이티브 전환을 함께합니다.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-white px-7 py-3.5 text-sm font-semibold tracking-wide text-primary-900 transition-all hover:-translate-y-0.5 hover:bg-blue-50"
            >
              부동산 AI 전환 문의
            </a>
            <a
              href={EXTERNAL_LINKS.APP_MAIN}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-white/40 px-7 py-3.5 text-sm font-semibold tracking-wide text-white transition-colors hover:border-white hover:bg-white/10"
            >
              AI 펫닥터 보기
            </a>
          </div>
        </div>

        {/* 일시정지 (접근성) */}
        {!reducedMotion && heroTextOpacity > 0.05 && (
          <button
            type="button"
            onClick={togglePause}
            aria-label={paused ? '배경 영상 재생' : '배경 영상 일시정지'}
            className="absolute bottom-8 right-6 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/40 text-white/80 transition-colors hover:border-white hover:text-white sm:right-10"
            style={{ opacity: heroTextOpacity }}
          >
            {paused ? (
              <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
                <path d="M3 1.5l9 5.5-9 5.5V1.5z" />
              </svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
                <rect x="2.5" y="1.5" width="3" height="11" />
                <rect x="8.5" y="1.5" width="3" height="11" />
              </svg>
            )}
          </button>
        )}
      </section>
    </>
  )
}
