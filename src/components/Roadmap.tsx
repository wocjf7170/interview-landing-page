import Container from './ui/Container'
import SectionHeading from './ui/SectionHeading'
import { IconMapPin, IconSparkles } from './icons'

const PLANS = [
  {
    icon: <IconMapPin />,
    title: '면접장 제휴 확대',
    desc: '오프라인 방을 더 편하게. 전국 검증된 스터디룸·미팅룸과 제휴해, 방을 열면 장소 예약·결제까지 한 번에 끝나도록 준비합니다.',
  },
  {
    icon: <IconSparkles />,
    title: '현직자 면접관 매칭',
    desc: '또래끼리의 연습을 넘어, 현직자·면접 컨설턴트가 면접관으로 참여하는 방을 열어 더 깊은 피드백을 받도록 확장합니다.',
  },
]

export default function Roadmap() {
  return (
    <section className="bg-brand-50/50 py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="앞으로의 마주"
          title="또래 연습에서, 실전 인프라까지"
          description="모의면접 모임을 시작으로, 면접 준비에 필요한 모든 것을 한 곳에서 해결하도록 확장합니다."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {PLANS.map((plan) => (
            <div
              key={plan.title}
              className="relative overflow-hidden rounded-3xl border border-dashed border-brand-200 bg-white/70 p-8"
            >
              <span className="absolute right-5 top-5 rounded-full bg-accent-500/20 px-3 py-1 text-xs font-semibold text-amber-700">
                준비 중
              </span>
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-600 shadow-sm">
                {plan.icon}
              </span>
              <h3 className="mt-5 text-xl font-bold text-ink">{plan.title}</h3>
              <p className="mt-2 max-w-md leading-relaxed text-stone-600">{plan.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
