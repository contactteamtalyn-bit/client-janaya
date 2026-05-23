'use client'

import { useEffect, useState } from 'react'
import { DemoCTA } from '@/components/DemoModal'
import { cn } from '@/lib/utils'

const links = [
  { label: 'Enzymothérapie', href: '#enzymotherapie' },
  { label: 'Services', href: '#services' },
  { label: 'Réalisations', href: '#realisations' },
  { label: 'E-Shop', href: '#produits' },
  { label: 'Le salon', href: '#salon' },
  { label: 'Contact', href: '#contact' },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed left-0 right-0 top-[38px] z-50 transition-colors duration-300',
        scrolled ? 'border-b border-argile/15 bg-nacre/85 backdrop-blur-md' : 'bg-transparent'
      )}
    >
      <nav className="wrap-wide flex h-16 items-center justify-between">
        <a href="#top" className="font-display text-[23px] tracking-wide text-noir">
          Janaya <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-argile">Coiffure</span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="link-underline font-sans text-[13px] font-medium tracking-wide text-noir/70 transition-colors hover:text-argile"
            >
              {l.label}
            </a>
          ))}
        </div>

        <DemoCTA
          ariaLabel="Prendre rendez-vous"
          className="bg-argile px-6 py-2.5 font-sans text-[12px] font-semibold uppercase tracking-[0.14em] text-nacre transition-colors duration-300 hover:bg-noir"
        >
          Prendre RDV
        </DemoCTA>
      </nav>
    </header>
  )
}
