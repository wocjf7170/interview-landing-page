import type { ReactNode } from 'react'
import Container from './ui/Container'
import SectionHeading from './ui/SectionHeading'
import { IconUsers, IconCheck, IconMapPin, IconShield } from './icons'

interface Feature {
  icon: ReactNode
  title: string
  desc: string
}

const FEATURES: Feature[] = [
  {
    icon: <IconUsers />,
    title: '원하는 방, 골라서 참여',
    desc: '직무·업계·면접 유형·지역·시간대로 열린 방을 찾아 신청. 마음에 드는 방이 없으면 직접 열어 모집합니다.',
  },
  {
    icon: <IconCheck />,
    title: '최소 인원 모이면 자동 성사',
    desc: '어중간한 1:1 대신 여러 명이 함께. 정해둔 최소 인원이 차면 모임이 확정되고, 못 모으면 자동 취소·전액 환급.',
  },
  {
    icon: <IconMapPin />,
    title: '장소는 이미 준비 완료',
    desc: '오프라인은 검증된 스터디룸·미팅룸을 미리 확보, 화상은 사이트 내 화상룸이 자동 생성. 장소 잡느라 헤맬 필요 없어요.',
  },
  {
    icon: <IconShield />,
    title: '예치금으로 노쇼 걱정 끝',
    desc: '확정 시 1만 원 예치, 참여하면 전액 환급. 가벼운 약속 장치가 "진짜 올 사람"만 남겨 모두의 시간을 지킵니다.',
  },
]

export default function Features() {
  return (
    <section id="features" className="bg-brand-50/50 py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="핵심 기능"
          title="혼자선 못 만드는 '실전 환경'"
          description="방을 열고 사람을 모으는 것부터 면접장·피드백까지, 번거로운 건 마주가 대신 챙깁니다."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-3xl border border-stone-100 bg-white p-7 shadow-card transition hover:-translate-y-1 hover:shadow-lift"
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-600 transition group-hover:bg-brand-600 group-hover:text-white">
                {feature.icon}
              </span>
              <h3 className="mt-5 text-lg font-bold text-ink">{feature.title}</h3>
              <p className="mt-2 leading-relaxed text-stone-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
