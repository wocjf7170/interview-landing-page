import Container from './ui/Container'

const FOOTER_LINKS = [
  { href: '#rooms', label: '둘러보기' },
  { href: '#how', label: '이용 방법' },
  { href: '#deposit', label: '예치금' },
  { href: '#faq', label: '자주 묻는 질문' },
]

export default function Footer() {
  return (
    <footer className="border-t border-stone-100 bg-cream py-12">
      <Container className="flex flex-col items-center justify-between gap-6 sm:flex-row sm:items-start">
        <div className="text-center sm:text-left">
          <a href="#top" className="flex items-center justify-center gap-2 sm:justify-start">
            <span className="grid h-8 w-8 -rotate-3 place-items-center rounded-xl bg-brand-600 font-display text-base text-white">
              마
            </span>
            <span className="font-display text-xl tracking-tight text-ink">마주</span>
          </a>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-stone-500">
            방을 열고 같이 모여 연습하는, 취준생 모의면접 모임 서비스.
          </p>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2" aria-label="푸터 메뉴">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-stone-500 transition hover:text-brand-700"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </Container>

      <Container className="mt-8 border-t border-stone-100 pt-6">
        <p className="text-center text-xs text-stone-400 sm:text-left">
          © 2026 마주(Maju). 본 페이지는 서비스 소개를 위한 랜딩 페이지입니다.
        </p>
      </Container>
    </footer>
  )
}
