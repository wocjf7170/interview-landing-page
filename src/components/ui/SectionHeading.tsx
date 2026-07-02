import type { ReactNode } from 'react'

interface SectionHeadingProps {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  align?: 'center' | 'left'
}

/** 섹션 상단의 라벨·제목·설명을 일관된 스타일로 묶는 헤딩 컴포넌트 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <div className={`max-w-2xl ${alignment}`}>
      {eyebrow && (
        <span className="mb-4 inline-flex -rotate-1 items-center gap-1.5 rounded-full bg-note-yellow px-3.5 py-1 text-sm font-bold text-ink/80 shadow-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl leading-tight tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-stone-600">{description}</p>
      )}
    </div>
  )
}
