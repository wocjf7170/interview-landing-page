import Container from './ui/Container'
import { IconArrowRight, IconCheck, IconVideo, IconShield, IconMapPin } from './icons'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-cream">
      {/* 은은한 배경 장식 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 h-80 w-80 rounded-full bg-brand-200/50 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-accent-400/30 blur-3xl"
      />

      <Container className="relative grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:gap-8 lg:py-28">
        {/* 카피 */}
        <div className="animate-fade-up text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-1.5 text-sm font-semibold text-brand-700">
            <span className="h-2 w-2 rounded-full bg-accent-500" />
            취준생 모의면접 모임
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.15] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]">
            거울 보고 하는 면접 연습,
            <br />
            <span className="text-brand-600">실전에선 왜 안 될까요?</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-stone-600 lg:mx-0">
            실제 사람 앞에서 말해봐야 늡니다.
            같은 목표의 사람들과 모의면접 상대를 매칭해드려요 — 화상이나 미리 잡아둔 면접장에서 실전처럼.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
            <a href="#rooms" className="btn-primary w-full sm:w-auto">
              면접 파트너 매칭
              <IconArrowRight className="h-5 w-5" />
            </a>
            <a href="#how" className="btn-secondary w-full sm:w-auto">
              어떻게 동작하나요?
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-stone-500 lg:justify-start">
            <li className="flex items-center gap-1.5">
              <IconCheck className="h-4 w-4 text-brand-600" /> 매칭·기본 기능 무료
            </li>
            <li className="flex items-center gap-1.5">
              <IconVideo className="h-4 w-4 text-brand-600" /> 화상·오프라인 선택
            </li>
            <li className="flex items-center gap-1.5">
              <IconShield className="h-4 w-4 text-brand-600" /> 예치금으로 노쇼 방지
            </li>
          </ul>
        </div>

        {/* 모집 현황 방 카드 목업 */}
        <div className="animate-fade-up [animation-delay:120ms]">
          <RoomMockup />
        </div>
      </Container>
    </section>
  )
}

/** Hero 우측의 "모집 현황" 방 카드 목업 — 플랩풋볼식 모임 구조를 한눈에 보여준다 */
function RoomMockup() {
  // 최소 3명 / 정원 4명 중 3명 모집 → 성사 확정 상태
  const current = 3
  const min = 3
  const max = 4

  return (
    <div className="relative mx-auto max-w-md rounded-3xl border border-stone-100 bg-white p-5 shadow-card sm:p-6">
      <div className="flex items-center justify-between">
        <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
          ✓ 최소 인원 달성 · 성사 확정
        </span>
        <span className="text-xs font-semibold text-stone-400">방 #128</span>
      </div>

      <h3 className="mt-4 text-lg font-bold text-ink">백엔드 신입 기술면접 모의</h3>

      {/* 일정 · 장소 */}
      <div className="mt-3 flex flex-wrap gap-2 text-xs">
        <span className="inline-flex items-center gap-1 rounded-lg bg-stone-100 px-2.5 py-1 font-medium text-stone-600">
          📅 7월 3일 (목) 오후 7:00
        </span>
        <span className="inline-flex items-center gap-1 rounded-lg bg-brand-50 px-2.5 py-1 font-medium text-brand-700">
          <IconMapPin className="h-3.5 w-3.5" /> 강남 스터디룸 (확보됨)
        </span>
      </div>

      {/* 모집 현황 */}
      <div className="mt-5 rounded-2xl bg-cream p-4">
        <div className="flex items-center justify-between text-sm">
          <span className="font-semibold text-ink">모집 현황</span>
          <span className="font-bold text-brand-600">
            {current}
            <span className="text-stone-400">/{max}명</span>
          </span>
        </div>

        {/* 참가자 아바타 + 빈 자리 */}
        <div className="mt-3 flex items-center gap-2">
          {['🙂', '😀', '🤓'].map((face, i) => (
            <span
              key={i}
              className="grid h-9 w-9 place-items-center rounded-full bg-white text-lg shadow-sm ring-2 ring-brand-100"
            >
              {face}
            </span>
          ))}
          <span className="grid h-9 w-9 place-items-center rounded-full border-2 border-dashed border-stone-300 text-sm font-bold text-stone-400">
            +1
          </span>
        </div>

        {/* 진행 바 (최소 인원 지점 표시) */}
        <div className="relative mt-4 h-2 rounded-full bg-stone-200">
          <div
            className="h-2 rounded-full bg-brand-500"
            style={{ width: `${(current / max) * 100}%` }}
          />
          <span
            className="absolute top-1/2 h-3.5 w-0.5 -translate-y-1/2 rounded bg-emerald-500"
            style={{ left: `${(min / max) * 100}%` }}
            aria-hidden="true"
          />
        </div>
        <p className="mt-2 text-xs text-stone-500">
          최소 {min}명 달성! 한 자리 남았어요.
        </p>
      </div>

      <div className="mt-4 flex items-center gap-2 rounded-xl bg-white px-3 py-2 text-xs text-stone-600 ring-1 ring-stone-100">
        <IconShield className="h-4 w-4 text-accent-600" />
        예치금 <strong className="text-ink">10,000원</strong> · 참여 시 전액 환급
      </div>
    </div>
  )
}
