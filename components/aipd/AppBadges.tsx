import Image from 'next/image'
import { EXTERNAL_LINKS } from '@/constants/externalLinks'

/** 앱스토어 / 구글플레이 다운로드 배지 (원본 사이트 에셋 사용) */
export default function AppBadges({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <a
        href={EXTERNAL_LINKS.APP_DOWNLOAD_IOS}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="App Store에서 AI펫닥터 다운로드"
        className="transition-transform hover:-translate-y-0.5"
      >
        <Image
          src="/aipd/assets/9fb06b12a1658b586017b99328b05213a15017b2.svg"
          alt="App Store에서 다운로드"
          width={180}
          height={52}
          className="h-[46px] w-auto sm:h-[52px]"
        />
      </a>
      <a
        href={EXTERNAL_LINKS.APP_DOWNLOAD_ANDROID}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Google Play에서 AI펫닥터 다운로드"
        className="transition-transform hover:-translate-y-0.5"
      >
        <Image
          src="/aipd/assets/a5f467464ecfbd84cc578a6aa2ec4553f0ea360c.svg"
          alt="Google Play에서 다운로드"
          width={178}
          height={52}
          className="h-[46px] w-auto sm:h-[52px]"
        />
      </a>
    </div>
  )
}
