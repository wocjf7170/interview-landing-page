import type { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  className?: string
}

/** 모든 섹션이 공유하는 가로 폭·좌우 여백 컨테이너 */
export default function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-content px-5 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  )
}
