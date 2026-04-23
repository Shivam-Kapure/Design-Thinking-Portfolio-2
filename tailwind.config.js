/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        sans: ['"DM Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      },
      colors: {
        ivory: { DEFAULT: '#FAF7F2', dark: '#0F0E0C' },
        ink: { DEFAULT: '#1A1814', dark: '#FAF7F2' },
        gold: { DEFAULT: '#C8A96E', dark: '#D4B97E' },
        rust: { DEFAULT: '#B54B2A', dark: '#D45C35' },
        sage: { DEFAULT: '#4A5E4F', dark: '#6A8A70' },
        muted: { DEFAULT: '#6B6560', dark: '#A09890' },
        surface: { DEFAULT: '#F2EDE5', dark: '#1C1A16' },
        card: { DEFAULT: '#FFFFFF', dark: '#242018' },
        border: { DEFAULT: '#DDD8CE', dark: '#333028' }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
