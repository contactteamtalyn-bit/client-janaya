import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        nacre: '#FAF9F6',
        argile: { DEFAULT: '#AD8858', clair: '#C9A982' },
        beige: '#E8DFD0',
        noir: { DEFAULT: '#1A1916', profond: '#0F0D0B' },
        sable: '#D4B896',
      },
      fontFamily: {
        display: ['var(--font-lora)', 'Georgia', 'serif'],
        sans: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(22px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'leaf-drift': {
          '0%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-9px) rotate(0.6deg)' },
          '100%': { transform: 'translateY(0) rotate(0deg)' },
        },
        breathe: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.03)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.9s cubic-bezier(0.22,1,0.36,1) both',
        'leaf-drift': 'leaf-drift 10s ease-in-out infinite',
        'leaf-drift-slow': 'leaf-drift 14s ease-in-out infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

export default config
