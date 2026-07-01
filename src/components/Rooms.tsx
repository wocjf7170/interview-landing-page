import Container from './ui/Container'
import SectionHeading from './ui/SectionHeading'
import { IconMapPin, IconVideo, IconClock, IconPlus, IconArrowRight } from './icons'

type Mode = '화상' | '오프라인'

interface Room {
  title: string
  field: string
  when: string
  mode: Mode
  place: string
  current: number
  min: number
  max: number
}

// 랜딩용 예시 데이터 (실제 모집 데이터가 아니라 서비스 동작을 보여주는 목업)
const ROOMS: Room[] = [
  {
    title: '백엔드 신입 기술면접 모의',
    field: '개발 · 백엔드',
    when: '7월 3일 (목) 19:00',
    mode: '오프라인',
    place: '강남 스터디룸',
    current: 3,
    min: 3,
    max: 4,
  },
  {
    title: '대기업 인성면접 집중 연습',
    field: '공통 · 인성',
    when: '7월 5일 (토) 14:00',
    mode: '화상',
    place: '사이트 내 화상룸',
    current: 4,
    min: 4,
    max: 6,
  },
  {
    title: '신입 PM 직무·케이스 면접',
    field: '기획 · PM',
    when: '7월 6일 (일) 11:00',
    mode: '화상',
    place: '사이트 내 화상룸',
    current: 2,
    min: 3,
    max: 4,
  },
  {
    title: '디자이너 포트폴리오 면접',
    field: '디자인 · UX',
    when: '7월 8일 (화) 20:00',
    mode: '오프라인',
    place: '홍대 미팅룸',
    current: 1,
    min: 3,
    max: 5,
  },
  {
    title: '금융권 직무면접 스터디방',
    field: '금융 · 일반',
    when: '7월 10일 (목) 19:30',
    mode: '오프라인',
    place: '여의도 스터디룸',
    current: 2,
    min: 2,
    max: 4,
  },
  {
    title: '데이터 분석가 기술면접',
    field: '개발 · 데이터',
    when: '7월 12일 (토) 15:00',
    mode: '화상',
    place: '사이트 내 화상룸',
    current: 5,
    min: 3,
    max: 6,
  },
]

export default function Rooms() {
  return (
    <section id="rooms" className="bg-cream py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="지금 열린 방"
          title="마음에 드는 방에 신청하면 끝"
          description="원하는 직무·일정·장소의 방을 골라 신청하세요. 최소 인원이 차는 순간 모임이 확정됩니다."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ROOMS.map((room) => (
            <RoomCard key={room.title} room={room} />
          ))}
        </div>

        {/* 직접 방 만들기 유도 */}
        <div className="mt-8 flex flex-col items-center justify-between gap-5 rounded-3xl border border-brand-200 bg-white p-7 text-center shadow-card sm:flex-row sm:text-left">
          <div className="flex items-center gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-50 text-brand-600">
              <IconPlus className="h-6 w-6" />
            </span>
            <div>
              <h3 className="text-lg font-bold text-ink">원하는 방이 없나요?</h3>
              <p className="mt-1 text-stone-600">직접 방을 열고 같이 연습할 사람을 모아보세요.</p>
            </div>
          </div>
          <a href="#cta" className="btn-primary w-full shrink-0 sm:w-auto">
            방 만들기
            <IconArrowRight className="h-5 w-5" />
          </a>
        </div>
      </Container>
    </section>
  )
}

function RoomCard({ room }: { room: Room }) {
  const { title, field, when, mode, place, current, min, max } = room
  const confirmed = current >= min // 최소 인원 달성 → 성사 확정
  const almostFull = !confirmed && max - current <= 1 // 마감 임박
  const isOffline = mode === '오프라인'

  // 정원 대비 채움 비율 (최소 인원 지점도 함께 표시)
  const fillPct = Math.min(100, (current / max) * 100)
  const minPct = Math.min(100, (min / max) * 100)

  return (
    <article className="flex flex-col rounded-3xl border border-stone-100 bg-white p-6 shadow-card transition hover:-translate-y-1 hover:shadow-lift">
      {/* 상태 뱃지 */}
      <div className="flex items-center justify-between">
        <StatusBadge confirmed={confirmed} almostFull={almostFull} />
        <span
          className={`inline-flex items-center gap-1 rounded-lg px-2.5 py-1 text-xs font-semibold ${
            isOffline ? 'bg-accent-500/15 text-amber-700' : 'bg-brand-50 text-brand-700'
          }`}
        >
          {isOffline ? <IconMapPin className="h-3.5 w-3.5" /> : <IconVideo className="h-3.5 w-3.5" />}
          {mode}
        </span>
      </div>

      <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-brand-500">{field}</p>
      <h3 className="mt-1 text-lg font-bold leading-snug text-ink">{title}</h3>

      {/* 일정 · 장소 */}
      <ul className="mt-3 space-y-1.5 text-sm text-stone-600">
        <li className="flex items-center gap-2">
          <IconClock className="h-4 w-4 text-stone-400" />
          {when}
        </li>
        <li className="flex items-center gap-2">
          <IconMapPin className="h-4 w-4 text-stone-400" />
          {place}
        </li>
      </ul>

      {/* 모집 현황 */}
      <div className="mt-auto pt-5">
        <div className="flex items-center justify-between text-sm">
          <span className="text-stone-500">모집 현황</span>
          <span className="font-bold text-ink">
            {current}
            <span className="font-medium text-stone-400">/{max}명</span>
            <span className="ml-1.5 text-xs font-medium text-stone-400">· 최소 {min}명</span>
          </span>
        </div>

        <div className="relative mt-2 h-2 rounded-full bg-stone-200">
          <div
            className={`h-2 rounded-full ${confirmed ? 'bg-emerald-500' : 'bg-brand-500'}`}
            style={{ width: `${fillPct}%` }}
          />
          {/* 최소 인원 도달 지점 마커 */}
          <span
            className="absolute top-1/2 h-3.5 w-0.5 -translate-y-1/2 rounded bg-stone-400"
            style={{ left: `${minPct}%` }}
            aria-hidden="true"
          />
        </div>

        <a
          href="#cta"
          className={`mt-4 inline-flex w-full items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition ${
            confirmed
              ? 'bg-white text-brand-700 ring-1 ring-brand-200 hover:bg-brand-50'
              : 'bg-brand-600 text-white hover:bg-brand-700'
          }`}
        >
          {confirmed ? '대기 명단으로 신청' : '이 방 신청하기'}
        </a>
      </div>
    </article>
  )
}

function StatusBadge({ confirmed, almostFull }: { confirmed: boolean; almostFull: boolean }) {
  if (confirmed) {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> 성사 확정
      </span>
    )
  }
  if (almostFull) {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-500/20 px-3 py-1 text-xs font-bold text-amber-700">
        <span className="h-1.5 w-1.5 rounded-full bg-accent-500" /> 마감 임박
      </span>
    )
  }
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-xs font-bold text-brand-700">
      <span className="h-1.5 w-1.5 rounded-full bg-brand-500" /> 모집 중
    </span>
  )
}
