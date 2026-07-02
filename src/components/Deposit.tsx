import Container from './ui/Container'
import { IconCheck, IconShield } from './icons'

const POINTS = [
  {
    title: '방이 확정되면 1만 원 예치',
    desc: '최소 인원이 모여 모임이 확정될 때만 예치해요. 가벼운 보증금이 "진짜 올 사람"만 남깁니다.',
  },
  {
    title: '참여하면 전액 환급',
    desc: '모의면접에 성실히 참여하면 예치금 10,000원을 그대로 돌려드립니다. 실제 부담은 0원이에요.',
  },
  {
    title: '노쇼는 함께한 사람을 보호',
    desc: '정당한 사유 없이 나타나지 않으면 예치금이 환급되지 않아, 시간 내어 모인 다른 참가자를 보호합니다.',
  },
]

export default function Deposit() {
  return (
    <section id="deposit" className="py-20 sm:py-24">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* 설명 */}
        <div>
          <span className="mb-4 inline-flex -rotate-1 items-center gap-1.5 rounded-full bg-note-yellow px-3.5 py-1 text-sm font-bold text-ink/80 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
            신뢰 시스템
          </span>
          <h2 className="font-display text-3xl leading-tight tracking-tight text-ink sm:text-4xl">
            노쇼 없는 약속,
            <br />
            <span className="text-brand-600">예치금</span>으로 지켜요
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-stone-600">
            여러 명이 모인 방에서 한 명만 안 나타나도 모임이 무너져요. 마주는 작은 예치금으로
            서로의 시간을 존중하는 문화를 만듭니다.
          </p>

          <ul className="mt-8 space-y-5">
            {POINTS.map((point) => (
              <li key={point.title} className="flex gap-4">
                <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-600 text-white">
                  <IconCheck className="h-4 w-4" />
                </span>
                <div>
                  <h3 className="font-bold text-ink">{point.title}</h3>
                  <p className="mt-1 leading-relaxed text-stone-600">{point.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* 예치금 흐름 카드 */}
        <div className="mx-auto w-full max-w-sm">
          <div className="rounded-3xl border border-stone-100 bg-white p-7 shadow-card">
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent-500/15 text-accent-600">
                <IconShield className="h-7 w-7" />
              </span>
              <div>
                <p className="text-sm text-stone-500">면접 예치금</p>
                <p className="text-2xl font-extrabold text-ink">10,000원</p>
              </div>
            </div>

            <div className="my-6 h-px bg-stone-100" />

            <div className="space-y-3 text-sm">
              <FlowRow label="방 확정 시 예치" value="-10,000원" tone="neutral" />
              <FlowRow label="면접 참여 완료" value="+10,000원 환급" tone="positive" />
            </div>

            <div className="mt-6 flex items-center justify-between rounded-2xl bg-brand-50 px-4 py-3">
              <span className="font-semibold text-brand-800">실제 부담</span>
              <span className="text-lg font-extrabold text-brand-700">0원</span>
            </div>
            <p className="mt-3 text-center text-xs text-stone-400">
              * 참여 시 기준. 노쇼 등 정책 위반 시 환급이 제한될 수 있습니다.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}

interface FlowRowProps {
  label: string
  value: string
  tone: 'neutral' | 'positive'
}

function FlowRow({ label, value, tone }: FlowRowProps) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-stone-600">{label}</span>
      <span
        className={`font-semibold ${tone === 'positive' ? 'text-emerald-600' : 'text-stone-700'}`}
      >
        {value}
      </span>
    </div>
  )
}
