import Container from './ui/Container'
import SectionHeading from './ui/SectionHeading'

const PAINS = [
  {
    emoji: '🧍',
    title: '같이 연습할 사람이 없어요',
    desc: '면접 스터디는 모으기도 일이고, 막상 들어가도 직무·일정이 안 맞아 흐지부지되기 일쑤예요.',
  },
  {
    emoji: '🔍',
    title: '내 답변, 뭐가 문제인지 몰라요',
    desc: '혼자 준비하면 피드백이 없어요. 어디서 말이 꼬이고 설득력이 떨어지는지는, 남이 봐줘야 비로소 보입니다.',
  },
  {
    emoji: '👻',
    title: '어렵게 잡은 약속도 노쇼',
    desc: '겨우 일정을 맞췄는데 상대가 갑자기 사라지면, 준비한 내 시간만 통째로 날아가요.',
  },
]

export default function Problem() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="이런 고민 있으셨죠?"
          title="면접 준비, 제일 막막한 건 '실전 연습'"
          description="지식은 책과 강의로 채울 수 있어도, 사람 앞에서 말해보는 경험은 혼자 만들기 어렵습니다."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PAINS.map((pain) => (
            <div
              key={pain.title}
              className="rounded-3xl border border-stone-100 bg-white p-7 shadow-card"
            >
              <span className="text-3xl" aria-hidden="true">
                {pain.emoji}
              </span>
              <h3 className="mt-4 text-lg font-bold text-ink">{pain.title}</h3>
              <p className="mt-2 leading-relaxed text-stone-600">{pain.desc}</p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-lg font-medium text-stone-700">
          그래서 <span className="font-bold text-brand-600">마주</span>는 모임을 만들었어요.
          방을 열고, 최소 인원만 모이면 — 함께 연습이 시작됩니다. 🙌
        </p>
      </Container>
    </section>
  )
}
