import Container from './ui/Container'
import SectionHeading from './ui/SectionHeading'
import mirrorPractice from '../assets/mirror-practice.jpg'

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
          description="거울에 포스트잇을 아무리 붙여도, 거울은 대답해주지 않아요. 사람 앞에서 말해보는 경험은 혼자 만들기 어렵거든요."
        />

        <div className="mt-12 grid items-center gap-12 lg:mt-16 lg:grid-cols-[1.15fr_1fr] lg:gap-14">
          {/* 마스킹테이프로 벽에 붙여둔 사진 — 혼자 하는 연습의 현실 (StickyNote와 같은 테이프 문법) */}
          <figure className="relative mx-auto max-w-xl -rotate-1 transition-transform duration-300 ease-out hover:rotate-0">
            <span
              aria-hidden="true"
              className="absolute -top-3 left-8 z-10 h-6 w-20 -rotate-6 rounded-[2px] bg-white/60 shadow-sm ring-1 ring-black/5"
            />
            <span
              aria-hidden="true"
              className="absolute -top-3 right-8 z-10 h-6 w-20 rotate-3 rounded-[2px] bg-white/60 shadow-sm ring-1 ring-black/5"
            />
            <div className="rounded-lg bg-white p-3 pb-4 shadow-note sm:p-4 sm:pb-5">
              <img
                src={mirrorPractice}
                width={1400}
                height={933}
                alt="정장을 입은 취준생이 '자신감', '미소', '눈 맞추기' 포스트잇이 붙은 거울 앞에서 혼자 면접 연습을 하는 모습"
                className="rounded-[4px]"
              />
              <figcaption className="mt-3 text-center font-hand text-xl leading-tight text-ink/70 sm:mt-4 sm:text-2xl">
                자신감, 미소, 눈 맞추기… 다 붙여놨는데{' '}
                <span className="inline-block text-brand-600">정작 봐줄 사람이 없다</span>
              </figcaption>
            </div>
          </figure>

          <ul className="flex flex-col gap-4 sm:gap-5">
            {PAINS.map((pain) => (
              <li
                key={pain.title}
                className="flex items-start gap-4 rounded-2xl border border-stone-100 bg-white p-5 shadow-card sm:p-6"
              >
                <span
                  className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-2xl"
                  aria-hidden="true"
                >
                  {pain.emoji}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-ink">{pain.title}</h3>
                  <p className="mt-1.5 leading-relaxed text-stone-600">{pain.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <p className="mx-auto mt-12 max-w-2xl text-center text-lg font-medium text-stone-700">
          그래서 <span className="font-bold text-brand-600">마주</span>는 모임을 만들었어요.
          방을 열고, 최소 인원만 모이면 — 함께 연습이 시작됩니다. 🙌
        </p>
      </Container>
    </section>
  )
}
