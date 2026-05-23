import { Reveal } from '@/components/ui/Reveal'
import { DemoCTA } from '@/components/DemoModal'

export function Localisation() {
  return (
    <section id="contact" className="bg-nacre py-24 md:py-32">
      <div className="wrap grid items-stretch gap-12 md:grid-cols-2 md:gap-16">
        {/* Carte */}
        <Reveal>
          <div className="relative h-full min-h-[380px] overflow-hidden border border-argile/30">
            <iframe
              title="Janaya Coiffure — 89 Avenue de Wagram, Paris 17e"
              src="https://www.google.com/maps?q=89+Avenue+de+Wagram+75017+Paris&output=embed"
              className="absolute inset-0 h-full w-full"
              style={{ border: 0, filter: 'sepia(0.18) saturate(0.95) contrast(0.96)' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>

        {/* Infos */}
        <div className="flex flex-col justify-center">
          <Reveal>
            <p className="eyebrow text-argile">— Nous trouver</p>
          </Reveal>
          <Reveal delay={70}>
            <h2 className="mt-5 font-display italic text-noir" style={{ fontSize: 'clamp(2.2rem,4.6vw,3.6rem)', lineHeight: 1.05 }}>
              89, Avenue
              <br />
              <span className="text-argile">de Wagram.</span>
            </h2>
          </Reveal>
          <Reveal delay={130}>
            <div className="mt-8 space-y-6 font-sans text-[15px] font-light leading-relaxed text-noir/80">
              <div>
                <p className="font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-argile">Adresse</p>
                <p className="mt-1">89 Avenue de Wagram · 75017 Paris</p>
              </div>
              <div>
                <p className="font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-argile">Horaires</p>
                <p className="mt-1">Lundi · 10h00 – 19h00</p>
                <p>Mardi au Vendredi · 9h30 – 19h00</p>
                <p>Samedi · 9h30 – 18h30</p>
              </div>
              <div>
                <p className="font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-argile">Contact</p>
                <p className="mt-1">+33 1 47 63 70 70</p>
                <p>info@janayacoiffure.com · @janayacoiffure</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={190}>
            <DemoCTA
              ariaLabel="Prendre rendez-vous"
              className="mt-9 inline-block self-start bg-argile px-8 py-4 font-sans text-[13px] font-medium uppercase tracking-[0.12em] text-nacre transition-colors hover:bg-noir"
            >
              Prendre rendez-vous →
            </DemoCTA>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
