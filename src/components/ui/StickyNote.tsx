import type { ReactNode } from 'react'

type NoteColor = 'yellow' | 'coral' | 'mint' | 'sky'

interface StickyNoteProps {
  children: ReactNode
  /** 종이 색 (스터디룸 응원 메모 톤) */
  color?: NoteColor
  /** 기울기 — Tailwind 회전 유틸리티 (예: '-rotate-3') */
  tilt?: string
  className?: string
}

const PAPER: Record<NoteColor, string> = {
  yellow: 'bg-note-yellow',
  coral: 'bg-note-coral',
  mint: 'bg-note-mint',
  sky: 'bg-note-sky',
}

/**
 * 시그니처 요소 — 벽에 붙인 응원 포스트잇.
 * 손글씨(Nanum Pen Script)로 취준생을 향한 한마디를 담고,
 * 상단의 마스킹테이프와 살짝 기운 각도로 촉감을 준다.
 * hover하면 반듯하게 펴지며 살짝 흔들려 장난스럽게 반응한다.
 */
export default function StickyNote({
  children,
  color = 'yellow',
  tilt = '-rotate-2',
  className = '',
}: StickyNoteProps) {
  return (
    <div
      className={`group/note relative inline-block ${tilt} transition-transform duration-300 ease-out hover:rotate-0 hover:animate-wiggle motion-reduce:hover:animate-none ${className}`}
    >
      {/* 마스킹테이프 */}
      <span
        aria-hidden="true"
        className="absolute -top-2.5 left-1/2 h-5 w-16 -translate-x-1/2 -rotate-3 rounded-[2px] bg-white/60 shadow-sm ring-1 ring-black/5"
      />
      <div
        className={`${PAPER[color]} rounded-[4px] px-5 pb-4 pt-5 text-center shadow-note`}
      >
        <p className="font-hand text-2xl leading-tight text-ink/85">{children}</p>
      </div>
    </div>
  )
}
