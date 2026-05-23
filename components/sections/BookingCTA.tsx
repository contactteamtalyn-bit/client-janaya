import { Reveal } from '@/components/ui/Reveal'
import { Leaf } from '@/components/ui/Leaf'
import { DemoCTA } from '@/components/DemoModal'

export function BookingCTA() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-noir py-24 text-center">
      <Leaf className="pointer-events-none absolute left-8 top-10 hidden h-36 w-24 animate-leaf-drift opacity-[0.05] md:block" />
      <Leaf className="pointer-events-none absolute bottom-10 right-8 hidden h-44 w-28 rotate-180 animate-leaf-drift-slow opacity-[0.05] md:block" />

      <div className="wrap relative z-10">
        <Reveal>
          <p className="eyebrow text-argile">Votre prochain rendez-vous</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mx-auto mt-6 max-w-4xl font-display italic text-nacre" style={{ fontSize: 'clamp(2.8rem,8vw,6rem)', lineHeight: 1.05 }}>
            Votre cheveu
            <br />
            <span className="text-argile">mérite le naturel.</span>
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mx-auto mt-6 max-w-[460px] font-display text-[18px] leading-relaxed text-nacre/60">
            Enzymothérapie, argile, coloration organique. 89 Avenue de Wagram, Paris 17e.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row">
            <DemoCTA
              ariaLabel="Prendre rendez-vous"
              className="bg-argile px-10 py-4 font-sans text-[14px] font-semibold tracking-wide text-nacre transition-colors duration-300 hover:bg-nacre hover:text-noir"
            >
              Prendre rendez-vous
            </DemoCTA>
            <a href="tel:+33147637070" className="link-underline font-sans text-[14px] font-light text-argile">
              Appeler · +33 1 47 63 70 70
            </a>
            <a href="mailto:info@janayacoiffure.com" className="link-underline font-sans text-[14px] font-light text-nacre/50">
              ✉ info@janayacoiffure.com
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
