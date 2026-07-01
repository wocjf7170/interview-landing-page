import { useState } from 'react'
import Container from './ui/Container'
import SectionHeading from './ui/SectionHeading'
import { IconChevronDown } from './icons'

const FAQS = [
  {
    q: '정말 무료인가요?',
    a: '방을 만들고 참여하는 것 자체는 무료입니다. 모임이 확정될 때 노쇼 방지를 위한 예치금 1만 원이 있으며, 면접에 참여하면 전액 환급되므로 실제 부담은 없습니다.',
  },
  {
    q: '방은 어떻게 만들고 참여하나요?',
    a: '희망 직무·면접 유형·날짜·장소(화상/오프라인)와 최소~최대 인원을 정해 방을 열 수 있습니다. 이미 열려 있는 방이 마음에 들면 신청만 하면 됩니다.',
  },
  {
    q: '최소 인원이 안 모이면 어떻게 되나요?',
    a: '모집 마감까지 최소 인원이 차지 않으면 모임은 자동 취소되고, 예치금은 전액 환급됩니다. 별도로 알림을 드리니 다른 방을 찾아 다시 신청하면 됩니다.',
  },
  {
    q: '화상·오프라인 장소는 누가 준비하나요?',
    a: '오프라인 방은 검증된 스터디룸·미팅룸을 마주가 미리 확보해 둡니다. 화상 방은 사이트 내 화상룸이 자동으로 만들어져, 참가자는 장소 걱정 없이 면접에만 집중하면 됩니다.',
  },
  {
    q: '참가자가 노쇼하면 어떻게 되나요?',
    a: '정당한 사유 없이 불참하면 예치금이 환급되지 않으며, 시간 내어 모인 다른 참가자를 보호하는 정책을 운영합니다. 반복 위반 시 참여가 제한될 수 있습니다.',
  },
  {
    q: '면접 경험이 전혀 없어도 괜찮나요?',
    a: '물론입니다. 마주는 잘하는 사람들의 공간이 아니라 함께 연습하며 나아지는 공간이에요. 부담 없이 방에 들어와 시작해 보세요.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-20 sm:py-24">
      <Container>
        <SectionHeading eyebrow="자주 묻는 질문" title="궁금한 점을 모았어요" />

        <div className="mx-auto mt-12 max-w-3xl divide-y divide-stone-200 overflow-hidden rounded-3xl border border-stone-200 bg-white">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div key={faq.q}>
                <h3>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <span className="text-base font-semibold text-ink">{faq.q}</span>
                    <IconChevronDown
                      className={`h-5 w-5 shrink-0 text-brand-600 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                </h3>
                <div
                  id={`faq-panel-${index}`}
                  className={`grid transition-all duration-200 ease-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 leading-relaxed text-stone-600">{faq.a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
