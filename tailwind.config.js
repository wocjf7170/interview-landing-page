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
      },
      fontFamily: {
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
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
      },
    },
  },
  plugins: [],
}
