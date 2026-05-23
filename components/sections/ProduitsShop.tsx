import { Reveal } from '@/components/ui/Reveal'
import { Tilt } from '@/components/ui/Tilt'
import { SmartImage } from '@/components/ui/SmartImage'
import { DemoCTA } from '@/components/DemoModal'

const produits = [
  { slug: 'enzymocurly-mask', name: 'Enzymocurly Mask 250ml', price: '34€', desc: 'Gamme Curly pour cheveux bouclés' },
  { slug: 'huile-thermique', name: 'Huile Thermique 100ml', price: '59€', desc: 'Réparateur élasticité & casse' },
  { slug: 'hair-growing', name: 'Hair Growing 02 60ml', price: '36€', desc: 'Favorise la croissance' },
  { slug: 'floral-detox', name: 'Floral Detox Oil 100ml', price: '42€', desc: 'Huile sérum floral detox' },
  { slug: 'blowout-cream', name: 'Blowout Cream 250ml', price: '59€', desc: 'Premier lissage sans fer à lisser' },
]

export function ProduitsShop() {
  return (
    <section id="produits" className="bg-beige py-24 md:py-32">
      <div className="wrap">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow text-argile">Belmakosmetik · E-Shop</p>
          </Reveal>
          <Reveal delay={70}>
            <h2 className="mt-6 font-display italic text-noir" style={{ fontSize: 'clamp(2.2rem,4.6vw,3.6rem)', lineHeight: 1.1 }}>
              Le soin
              <br />
              <span className="text-argile">entre les séances.</span>
            </h2>
          </Reveal>
          <Reveal delay={130}>
            <p className="mt-6 max-w-[480px] font-sans text-[17px] font-light leading-relaxed text-noir/65">
              Nos produits professionnels disponibles directement en ligne. Livraison gratuite en France
              métropolitaine.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5">
          {produits.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 5) * 70}>
              <Tilt max={8}>
                <div className="flex h-full flex-col border border-argile/20 bg-nacre p-4">
                  <div className="relative aspect-square overflow-hidden bg-beige">
                    <SmartImage
                      src={`/images/produits/${p.slug}.jpg`}
                      alt={p.name}
                      fill
                      sizes="(max-width:768px) 50vw, 20vw"
                      className="object-cover"
                    />
                  </div>
                  <h3 className="mt-4 font-display text-[17px] italic leading-tight text-noir">{p.name}</h3>
                  <p className="mt-1 flex-1 font-sans text-[12px] font-light leading-snug text-noir/60">{p.desc}</p>
                  <span className="mt-3 font-sans text-[16px] font-semibold text-argile">{p.price}</span>
                  <DemoCTA
                    ariaLabel={`Voir ${p.name}`}
                    className="link-underline mt-3 self-start font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-argile"
                  >
                    Voir le produit →
                  </DemoCTA>
                </div>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
