import type { CSSProperties } from 'react'

/** Feuille minimaliste au trait — décor botanique, or argile. */
export function Leaf({ className, style }: { className?: string; style?: CSSProperties }) {
  return (
    <svg className={className} style={style} viewBox="0 0 100 140" fill="none" aria-hidden>
      <path d="M50 6 C86 40 86 104 50 134 C14 104 14 40 50 6 Z" stroke="#AD8858" strokeWidth="1.4" />
      <path d="M50 14 L50 126" stroke="#AD8858" strokeWidth="1" />
      <path
        d="M50 42 C66 46 74 58 78 72 M50 66 C64 70 70 80 73 92 M50 42 C34 46 26 58 22 72 M50 66 C36 70 30 80 27 92"
        stroke="#AD8858"
        strokeWidth="0.8"
        opacity="0.7"
      />
    </svg>
  )
}
