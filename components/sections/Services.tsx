'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { cn } from '@/lib/utils'
import { SmartImage } from '@/components/ui/SmartImage'
import { Reveal } from '@/components/ui/Reveal'

const services = [
  { t: 'Lissage Enzymothérapie Belmakosmetik', p: 'courts 300€ · mi-longs 350€ · longs 390€', d: 'Notre signature. 90% bio, tanin + enzymes, coloration possible le même jour.' },
  { t: "Balayage Minéral à l'Argile", p: 'courts & mi-courts 95€ · mi-longs & longs 125€', d: 'Alternative naturelle aux décolorations classiques. Minéraux + pigments organiques.' },
  { t: 'Coloration Organique', p: 'racines organique 58€ · racines végétale 68€', d: 'Sans ammoniaque ni PPD. Kératine + collagène marin. Couvrance parfaite.' },
  { t: 'Soins Capillaires', p: 'Express 12€ · Réparateur 30€ · Hydratant 22€ · Complet 45€ · Expert Janaya 55€ · Botox AGE DEFI 150–250€', d: 'Tanin, kératine, avocat, jojoba, argan, enzymes.' },
  { t: 'Shampoing Brushing', p: 'courts 29€ · très longs 45€', d: 'Shampoing soins + brushing parfait.' },
  { t: 'Shampoing Coupe Brushing', p: 'courts 51€ · très longs 75€', d: '' },
  { t: 'Coupe Homme', p: '36€', d: '' },
]

export function Services() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <section id="services" className="bg-nacre py-24 md:py-32">
      <div className="wrap grid gap-12 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-7">
          <Reveal>
            <p className="eyebrow text-argile">Nos prestations</p>
          </Reveal>
          <Reveal delay={70}>
            <h2 className="mt-6 font-display italic text-noir" style={{ fontSize: 'clamp(2.2rem,4.6vw,3.6rem)', lineHeight: 1.1 }}>
              Chaque soin,
              <br />
              <span className="text-argile">sur mesure.</span>
            </h2>
          </Reveal>

          <div className="mt-10 border-t border-argile/20">
            {services.map((s, i) => {
              const isOpen = open === i
              return (
                <div key={s.t} className="border-b border-argile/20">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-argile"
                  >
                    <span className="font-display text-[20px] italic text-noir md:text-[22px]">{s.t}</span>
                    {isOpen ? <Minus size={18} className="shrink-0 text-argile" /> : <Plus size={18} className="shrink-0 text-argile" />}
                  </button>
                  <div className={cn('acc', isOpen && 'open')}>
                    <div>
                      <div className="pb-6">
                        <p className="font-sans text-[13px] font-medium tracking-wide text-argile">{s.p}</p>
                        {s.d && <p className="mt-2 font-sans text-[14px] font-light leading-relaxed text-noir/65">{s.d}</p>}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Image sticky */}
        <div className="md:col-span-5">
          <div className="md:sticky md:top-32">
            <div className="relative aspect-[3/4] overflow-hidden border border-argile/40 bg-beige">
              <SmartImage
                src="/images/salon/wagram.jpg"
                alt="Le salon Janaya — avenue de Wagram"
                fill
                sizes="(max-width:768px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
