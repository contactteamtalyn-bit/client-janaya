import { SmartImage } from '@/components/ui/SmartImage'
import { Reveal } from '@/components/ui/Reveal'
import { Tilt } from '@/components/ui/Tilt'

export function EnzymotherapieBelmak() {
  return (
    <section id="enzymotherapie" className="bg-nacre py-24 md:py-32">
      <div className="wrap grid gap-12 md:grid-cols-12 md:gap-16">
        {/* Prose éditoriale */}
        <div className="md:col-span-7">
          <Reveal>
            <p className="eyebrow text-argile">— Notre signature</p>
          </Reveal>
          <Reveal delay={70}>
            <h2 className="mt-6 font-display italic text-noir" style={{ fontSize: 'clamp(2.4rem,5vw,4rem)', lineHeight: 1.08 }}>
              L&apos;Enzymothérapie
              <br />
              <span className="text-argile">Belmakosmetik.</span>
            </h2>
          </Reveal>
          <Reveal delay={130}>
            <p className="mt-8 font-display text-[17px] leading-[1.85] text-noir/80">
              L&apos;Enzymothérapie Belmakosmetik est née d&apos;une conviction : le lissage ne devrait jamais se
              faire au détriment du cheveu. Formulée à 90% d&apos;origine biologique, elle marie les vertus du
              tanin végétal — extrait des écorces de plantes — avec l&apos;action réparatrice d&apos;enzymes
              sélectionnées pour leur affinité avec la fibre capillaire humaine.
            </p>
          </Reveal>
          <Reveal delay={170}>
            <p className="mt-5 font-display text-[17px] leading-[1.85] text-noir/80">
              Contrairement aux lissages chimiques classiques, l&apos;enzymothérapie ne brise pas les ponts
              disulfures du cheveu. Elle enveloppe, nourrit et discipline. Le résultat est une chevelure lissée
              en profondeur, sans alourdir ni fragiliser — une légèreté que vous ressentirez dès le premier
              passage.
            </p>
          </Reveal>
          <Reveal delay={210}>
            <p className="mt-5 font-display text-[17px] leading-[1.85] text-noir/80">
              La coloration peut être réalisée le même jour. Le lissage tient jusqu&apos;à six mois selon
              l&apos;entretien. Et parce que chaque chevelure est différente, nos coiffeurs établissent
              systématiquement un diagnostic avant chaque séance.
            </p>
          </Reveal>
          <Reveal delay={250}>
            <div className="mt-9 border-l-[3px] border-argile bg-beige p-7">
              <p className="font-sans text-[12px] font-bold uppercase tracking-[0.16em] text-argile">En pratique</p>
              <div className="mt-4 space-y-2 font-sans text-[14px] font-light text-noir/75">
                <p><span className="font-medium text-noir">Durée :</span> jusqu&apos;à 6 mois · coloration possible le même jour</p>
                <p><span className="font-medium text-noir">Ingrédients stars :</span> tanin végétal · enzymes réparatrices · 90% Bio</p>
                <p><span className="font-medium text-noir">Tarifs :</span> dès 300€ (courts) · 350€ (mi-longs) · 390€ (longs)</p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Image flottante 3D */}
        <Reveal delay={120} className="md:col-span-5">
          <Tilt max={5}>
            <div className="relative aspect-[3/4] overflow-hidden border border-argile/40 bg-beige">
              <SmartImage
                src="/images/realisations/enzymotherapie.jpg"
                alt="Résultat après enzymothérapie — Janaya Coiffure"
                fill
                sizes="(max-width:768px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </Tilt>
        </Reveal>
      </div>
    </section>
  )
}
