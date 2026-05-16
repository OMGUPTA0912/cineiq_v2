import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-base': '#000000',
        'bg-surface': '#141414',
        'bg-elevated': '#2B2B2B',
        'accent-primary': '#E50914',
        'accent-secondary': '#B20710',
        'accent-cyan': '#38BDF8',
        'accent-green': '#4ADE80',
        'accent-amber': '#F59E0B',
        'accent-red': '#E50914',
        'accent-gold': '#F59E0B',
        'accent-violet': '#A78BFA',
        'text-primary': '#FFFFFF',
        'text-secondary': '#B3B3B3',
        'text-muted': '#808080',
        'border': '#404040',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'monospace'],
        oswald: ['var(--font-oswald)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
