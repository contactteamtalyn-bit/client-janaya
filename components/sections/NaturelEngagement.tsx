import { Leaf as LeafIcon, Droplet, Sprout } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'
import { Tilt } from '@/components/ui/Tilt'

const engagements = [
  {
    Icon: LeafIcon,
    title: 'Sans parabène',
    desc: 'Pureté absolue, douceur garantie. Nos formules éliminent tout conservateur perturbateur endocrinien pour respecter votre cuir chevelu.',
  },
  {
    Icon: Droplet,
    title: 'Sans sulfate',
    desc: "Nettoie, nourrit et protège naturellement. Pas de mousse agressive, juste l'essentiel du soin.",
  },
  {
    Icon: Sprout,
    title: 'Sans ammoniaque',
    desc: 'Coloration organique douce. Enrichie en kératine et collagène marin pour une couleur brillante qui respecte la fibre.',
  },
]

export function NaturelEngagement() {
  return (
    <section className="bg-beige py-24 md:py-32">
      <div className="wrap">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="eyebrow text-argile">L&apos;essence du naturel</p>
          </Reveal>
          <Reveal delay={70}>
            <h2 className="mt-6 font-display italic text-noir" style={{ fontSize: 'clamp(2.2rem,4.6vw,3.6rem)', lineHeight: 1.1 }}>
              Sans compromis
              <br />
              <span className="text-argile">sur votre santé.</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {engagements.map((e, i) => (
            <Reveal key={e.title} delay={i * 100}>
              <Tilt max={5}>
                <div className="flex h-full flex-col border border-argile/20 bg-nacre p-8">
                  <e.Icon size={32} strokeWidth={1.4} className="text-argile" />
                  <h3 className="mt-6 font-display text-[24px] italic text-noir">{e.title}</h3>
                  <p className="mt-3 font-sans text-[14px] font-light leading-relaxed text-noir/70">{e.desc}</p>
                </div>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
