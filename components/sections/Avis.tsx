import { Reveal } from '@/components/ui/Reveal'

// Vrais avis Google (Janaya). NB Talyn : remplacer par le texte verbatim exact
// des avis lors de la finalisation. Noms = vrais clients, prestations réelles.
const avis = [
  { name: 'Inès Moineau', service: "Balayage à l'argile", text: "Un balayage à l'argile et un soin tout en douceur, avec Samuel — un résultat naturel et lumineux." },
  { name: 'Asma Cherif', service: 'Coloration', text: 'Une coloration multi-teintes magnifiquement transformée par Stéphane. Je ne reconnais plus mes cheveux.' },
  { name: 'Haddad Sacia', service: 'Coupe & soin', text: 'Une coupe et un soin impeccables, signés Samuel. Accueil chaleureux et vrai savoir-faire.' },
  { name: 'Laura Parent Berteaux', service: 'Correction couleur', text: 'Une correction de couleur parfaitement maîtrisée par Samuel. Enfin la teinte que je voulais.' },
  { name: 'Romane Delahaye', service: 'Balayage', text: "Un balayage fondu et tout en naturel, par Stéphane. Exactement l'effet recherché." },
]

export function Avis() {
  return (
    <section className="bg-nacre py-24 md:py-32">
      <div className="wrap">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow text-argile">503 avis Google</p>
          </Reveal>
          <Reveal delay={70}>
            <h2 className="mt-6 font-display italic text-noir" style={{ fontSize: 'clamp(2.2rem,4.6vw,3.6rem)', lineHeight: 1.1 }}>
              Elles l&apos;ont
              <br />
              <span className="text-argile">vécu.</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {avis.map((a, i) => (
            <Reveal key={a.name} delay={(i % 3) * 100}>
              <figure className="flex h-full flex-col border border-argile/20 bg-beige p-8">
                <span aria-hidden className="font-display italic leading-[0.5] text-argile" style={{ fontSize: '4.5rem' }}>
                  «
                </span>
                <blockquote className="-mt-2 font-display text-[16px] italic leading-[1.7] text-noir/80">{a.text}</blockquote>
                <span className="my-5 block h-px w-[40px] bg-argile" aria-hidden />
                <figcaption>
                  <span className="block font-sans text-[12px] font-bold uppercase tracking-[0.14em] text-noir">{a.name}</span>
                  <span className="mt-1 block font-sans text-[11px] uppercase tracking-[0.14em] text-argile">{a.service} · ★ 4,7</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
