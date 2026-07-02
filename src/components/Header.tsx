import { useState } from 'react'
import Container from './ui/Container'
import { IconMenu, IconClose } from './icons'

const NAV_LINKS = [
  { href: '#rooms', label: '둘러보기' },
  { href: '#how', label: '이용 방법' },
  { href: '#deposit', label: '예치금' },
  { href: '#faq', label: '자주 묻는 질문' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-stone-100 bg-cream/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        {/* 로고 */}
        <a href="#top" className="flex items-center gap-2" aria-label="마주 홈으로">
          <span className="grid h-8 w-8 -rotate-3 place-items-center rounded-xl bg-brand-600 font-display text-base text-white">
            마
          </span>
          <span className="font-display text-xl tracking-tight text-ink">마주</span>
        </a>

        {/* 데스크톱 내비게이션 */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="주요 메뉴">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-stone-600 transition hover:text-brand-700"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a href="#cta" className="btn-primary !px-5 !py-2.5 !text-sm">
            사전 신청
          </a>
        </div>

        {/* 모바일 메뉴 토글 */}
        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-lg text-stone-700 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? '메뉴 닫기' : '메뉴 열기'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <IconClose /> : <IconMenu />}
        </button>
      </Container>

      {/* 모바일 드롭다운 메뉴 */}
      {open && (
        <div id="mobile-menu" className="border-t border-stone-100 bg-cream md:hidden">
          <Container className="flex flex-col gap-1 py-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2.5 text-base font-medium text-stone-700 transition hover:bg-brand-50"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#cta"
              className="btn-primary mt-2"
              onClick={() => setOpen(false)}
            >
              사전 신청
            </a>
          </Container>
        </div>
      )}
    </header>
  )
}
