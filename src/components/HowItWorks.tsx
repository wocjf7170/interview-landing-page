import Container from './ui/Container'
import SectionHeading from './ui/SectionHeading'
import { IconPlus, IconUsers, IconShield, IconSparkles } from './icons'

const STEPS = [
  {
    icon: <IconPlus />,
    title: '방 만들기 · 참여하기',
    desc: '직무·면접 유형·일정·장소(화상/오프라인)를 정해 방을 열거나, 열려 있는 방에 신청합니다.',
  },
  {
    icon: <IconUsers />,
    title: '최소 인원 모집',
    desc: '같은 목표의 사람들이 모여요. 정해둔 최소 인원이 차는 순간 모임이 자동으로 확정됩니다.',
  },
  {
    icon: <IconShield />,
    title: '예치 후 확정',
    desc: '1만 원을 예치하면 약속 확정. 화상룸과 오프라인 면접장은 이미 준비되어 있습니다.',
  },
  {
    icon: <IconSparkles />,
    title: '면접 & 환급',
    desc: '실전처럼 모의면접을 진행하고, 참여하면 예치금 전액 환급. 서로 피드백을 주고받아요.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how" className="bg-brand-50/50 py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="이용 방법"
          title="방 열고, 모이면, 면접 — 4단계면 충분해요"
          description="플랩풋볼에서 풋살방 모이듯, 모의면접도 방을 열고 최소 인원만 모으면 바로 시작됩니다."
        />

        <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, index) => (
            <li key={step.title} className="relative">
              {/* 데스크톱에서 단계 사이를 잇는 연결선 */}
              {index < STEPS.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute left-[calc(50%+2rem)] top-7 hidden h-px w-[calc(100%-4rem)] bg-gradient-to-r from-brand-200 to-transparent lg:block"
                />
              )}

              <div className="flex flex-col items-center text-center">
                <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-brand-600 text-white shadow-lift">
                  {step.icon}
                  <span className="absolute -right-1.5 -top-1.5 grid h-6 w-6 place-items-center rounded-full bg-accent-500 text-xs font-bold text-white">
                    {index + 1}
                  </span>
                </span>
                <h3 className="mt-5 text-lg font-bold text-ink">{step.title}</h3>
                <p className="mt-2 max-w-[16rem] leading-relaxed text-stone-600">{step.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
