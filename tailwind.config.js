/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0F1B2D',
          80: '#1C2E45',
          60: '#334E68',
          40: '#627D98',
          20: '#9FB3C8',
          10: '#D9E2EC',
          '05': '#F0F4F8',
        },
        stew: {
          DEFAULT: '#D97706',
          light: '#F59E0B',
          dark: '#B45309',
          bg: '#FFFBEB',
        },
        paper: '#FAFBFC',
        up: '#059669',
        down: '#DC2626',
      },
      fontFamily: {
        serif: ['Libre Baskerville', 'Georgia', 'serif'],
        sans: ['Inter', '-apple-system', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'SF Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
