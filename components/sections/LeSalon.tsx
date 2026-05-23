import { SmartImage } from '@/components/ui/SmartImage'
import { Reveal } from '@/components/ui/Reveal'

export function LeSalon() {
  return (
    <section id="salon" className="bg-beige py-24 md:py-32">
      <div className="wrap grid items-center gap-12 md:grid-cols-2 md:gap-16">
        {/* Texte éditorial */}
        <div>
          <Reveal>
            <p className="eyebrow text-argile">— Le salon</p>
          </Reveal>
          <Reveal delay={70}>
            <h2 className="mt-6 font-display italic text-noir" style={{ fontSize: 'clamp(2.2rem,4.6vw,3.6rem)', lineHeight: 1.1 }}>
              Avenue de Wagram,
              <br />
              <span className="text-argile">Paris 17e.</span>
            </h2>
          </Reveal>
          <Reveal delay={130}>
            <p className="mt-7 font-display text-[17px] leading-[1.8] text-noir/75">
              Au numéro 89 de l&apos;avenue de Wagram, Janaya a ouvert ses portes avec une ambition simple :
              faire de chaque séance une pause dans le quotidien. Un moment dédié au soin de vos cheveux, dans
              un cadre chaleureux, avec une équipe à votre écoute.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-5 font-display text-[17px] italic leading-[1.8] text-argile">
              English speaking hairdressers — car la beauté n&apos;a pas de frontières.
            </p>
          </Reveal>
        </div>

        {/* Bento ambiance (aucun portrait) */}
        <Reveal delay={120}>
          <div className="grid grid-cols-2 gap-3">
            <div className="relative col-span-2 aspect-[16/9] overflow-hidden bg-nacre">
              <SmartImage src="/images/salon/salon-01.jpg" alt="Le salon Janaya — vue générale" fill sizes="(max-width:768px) 100vw, 45vw" className="object-cover" />
            </div>
            <div className="relative aspect-square overflow-hidden bg-nacre">
              <SmartImage src="/images/salon/salon-02.jpg" alt="Détail du salon Janaya" fill sizes="(max-width:768px) 50vw, 22vw" className="object-cover" />
            </div>
            <div className="relative aspect-square overflow-hidden bg-nacre">
              <SmartImage src="/images/salon/salon-03.jpg" alt="Ambiance du salon Janaya" fill sizes="(max-width:768px) 50vw, 22vw" className="object-cover" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
