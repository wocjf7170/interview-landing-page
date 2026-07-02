import { useState } from 'react'
import type { FormEvent } from 'react'
import Container from './ui/Container'
import StickyNote from './ui/StickyNote'
import { IconCheck } from './icons'

// 백엔드가 없는 정적 사이트이므로, 사전 신청은 클라이언트에서만 동작한다.
// 실제 수집이 필요해지면 이 핸들러를 폼 서비스(Formspree 등)나 API로 연결한다.
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function CTA() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!EMAIL_PATTERN.test(email)) {
      setError('올바른 이메일 주소를 입력해 주세요.')
      return
    }
    setError('')
    setSubmitted(true)
  }

  return (
    <section id="cta" className="py-20 sm:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-brand-600 px-6 py-14 text-center shadow-lift sm:px-12 sm:py-16">
          {/* 배경 장식 */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-brand-400/40 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-20 -left-12 h-56 w-56 rounded-full bg-accent-400/30 blur-3xl"
          />

          <div className="relative mx-auto max-w-xl">
            <StickyNote color="yellow" tilt="-rotate-3" className="mb-6">
              떨려도 괜찮아,
              <br />
              같이니까 🤞
            </StickyNote>
            <h2 className="font-display text-3xl leading-tight tracking-tight text-white sm:text-4xl">
              첫 모임, 가장 먼저 함께해요 🙌
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-brand-100">
              정식 오픈 소식과 사전 신청자 전용 혜택을 이메일로 보내드릴게요.
            </p>

            {submitted ? (
              <div className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-white px-6 py-4 text-left">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-emerald-500 text-white">
                  <IconCheck className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-bold text-ink">사전 신청이 접수되었어요!</p>
                  <p className="text-sm text-stone-500">오픈 소식을 가장 먼저 알려드릴게요.</p>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
                noValidate
              >
                <div className="flex-1 text-left">
                  <label htmlFor="cta-email" className="sr-only">
                    이메일 주소
                  </label>
                  <input
                    id="cta-email"
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    placeholder="이메일 주소를 입력하세요"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    aria-invalid={Boolean(error)}
                    aria-describedby={error ? 'cta-email-error' : undefined}
                    className="w-full rounded-full border border-transparent bg-white px-5 py-3.5 text-base text-ink placeholder:text-stone-400 focus:border-accent-400"
                  />
                  {error && (
                    <p id="cta-email-error" className="mt-2 pl-2 text-sm font-medium text-accent-400">
                      {error}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-accent-500 px-7 py-3.5 text-base font-bold text-ink shadow-lg transition hover:bg-accent-400 active:scale-[0.98]"
                >
                  사전 신청
                </button>
              </form>
            )}

            <p className="mt-5 text-sm text-brand-100/80">
              스팸은 보내지 않아요. 언제든 수신을 거부할 수 있어요.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
