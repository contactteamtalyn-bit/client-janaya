import { Star, Gift } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'
import { DemoCTA } from '@/components/DemoModal'

export function FideliteCartesCadeaux() {
  return (
    <section className="bg-noir py-24 md:py-32">
      <div className="wrap grid gap-6 md:grid-cols-2">
        <Reveal>
          <div className="flex h-full flex-col border border-argile/40 bg-noir p-10">
            <Star size={32} strokeWidth={1.4} className="text-argile" />
            <h3 className="mt-6 font-display text-[28px] italic text-nacre">Chaque visite compte.</h3>
            <p className="mt-3 flex-1 font-sans text-[15px] font-light leading-relaxed text-nacre/70">
              Cumulez des points à chaque prestation et profitez d&apos;avantages exclusifs réservés aux
              clientes fidèles.
            </p>
            <DemoCTA
              ariaLabel="Voir mes points de fidélité"
              className="link-underline mt-6 self-start font-sans text-[12px] font-semibold uppercase tracking-[0.14em] text-argile"
            >
              Voir mes points →
            </DemoCTA>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="flex h-full flex-col bg-argile p-10">
            <Gift size={32} strokeWidth={1.4} className="text-nacre" />
            <h3 className="mt-6 font-display text-[28px] italic text-nacre">Offrez la beauté.</h3>
            <p className="mt-3 flex-1 font-sans text-[15px] font-light leading-relaxed text-nacre/85">
              La carte cadeau Janaya — le présent qui sublime. Disponible pour toutes les prestations du salon.
            </p>
            <DemoCTA
              ariaLabel="Offrir une carte cadeau"
              className="link-underline mt-6 self-start font-sans text-[12px] font-semibold uppercase tracking-[0.14em] text-nacre"
            >
              Offrir une carte →
            </DemoCTA>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
