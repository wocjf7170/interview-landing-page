/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // 핵심 브랜드 컬러 (따뜻하고 친근한 코랄)
        brand: {
          50: '#fff3f1',
          100: '#ffe4df',
          200: '#ffc9c0',
          300: '#ffa496',
          400: '#ff7d6b',
          500: '#ff6b5e', // 시그니처 코랄
          600: '#ed4e3c', // CTA·버튼
          700: '#c63a2b', // 진한 텍스트·hover
          800: '#9f3023',
          900: '#822a20',
        },
        // 포인트 컬러 (강조·뱃지용 따뜻한 옐로)
        accent: {
          400: '#ffd373',
          500: '#ffc24b',
          600: '#f4a81f',
        },
        cream: '#fff7f2', // 따뜻한 배경
        ink: '#2a211c', // 본문 텍스트 기본색 (웜 차콜)
        // 응원 포스트잇 종이 색 (시그니처 스티커 전용 — 브랜드 색이 아님)
        note: {
          yellow: '#fff1a8',
          coral: '#ffd7cf',
          mint: '#c9ecd2',
          sky: '#d3e7fb',
        },
      },
      fontFamily: {
        // 본문 — 가독성 좋은 국문 산세리프
        sans: [
          'Pretendard',
          'Pretendard Variable',
          '-apple-system',
          'BlinkMacSystemFont',
          'Apple SD Gothic Neo',
          'Malgun Gothic',
          'system-ui',
          'sans-serif',
        ],
        // 제목·로고 — 둥글고 친근한 디스플레이
        display: ['Jua', 'Pretendard', 'Apple SD Gothic Neo', 'sans-serif'],
        // 응원 메모 손글씨 — 포스트잇 전용
        hand: ['"Nanum Pen Script"', 'Pretendard', 'cursive'],
      },
      maxWidth: {
        content: '72rem',
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      },
      boxShadow: {
        card: '0 1px 2px rgba(42, 33, 28, 0.04), 0 10px 30px rgba(42, 33, 28, 0.06)',
        lift: '0 14px 40px rgba(237, 78, 60, 0.20)',
        // 포스트잇이 벽에 붙은 듯한 부드러운 그림자
        note: '0 6px 16px rgba(42, 33, 28, 0.14)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        // hover 시 살짝 흔들리는 장난스러운 인터랙션 (회전값 미지정 시 0deg 폴백)
        wiggle: {
          '0%, 100%': { transform: 'rotate(var(--tw-rotate, 0deg))' },
          '25%': { transform: 'rotate(-4deg)' },
          '75%': { transform: 'rotate(4deg)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
        wiggle: 'wiggle 0.5s ease-in-out',
      },
    },
  },
  plugins: [],
}
