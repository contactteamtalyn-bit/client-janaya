import { SmartImage } from '@/components/ui/SmartImage'
import { Leaf } from '@/components/ui/Leaf'
import { DemoCTA } from '@/components/DemoModal'

const line1 = ['La', 'beauté']
const line2 = ['du', 'cheveu,']

export function Hero() {
  let k = 0
  const word = (w: string) => {
    const d = 0.15 + k * 0.08
    k++
    return (
      <span key={w} className="mr-[0.2em] inline-block animate-fade-up" style={{ animationDelay: `${d}s` }}>
        {w}
      </span>
    )
  }

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-nacre px-6 pb-16 pt-[140px] md:pt-[120px]"
    >
      {/* Botanicals animés */}
      <Leaf className="pointer-events-none absolute -right-6 top-[150px] hidden h-40 w-28 animate-leaf-drift opacity-[0.14] md:block" />
      <Leaf className="pointer-events-none absolute -left-8 bottom-12 hidden h-52 w-36 rotate-[200deg] animate-leaf-drift-slow opacity-[0.1] md:block" />

      <div className="relative z-10 flex w-full max-w-3xl flex-col items-center">
        {/* Image */}
        <div className="order-2 mt-12 w-full animate-fade-up md:order-1 md:mt-0" style={{ animationDelay: '0.3s' }}>
          <div className="relative mx-auto aspect-[16/10] w-full overflow-hidden">
            <SmartImage
              src="/images/hero/main.jpg"
              alt="Cheveux naturels après enzymothérapie — Janaya Coiffure"
              fill
              priority
              sizes="(max-width:768px) 100vw, 768px"
              className="object-cover"
            />
            <div aria-hidden className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(173,136,88,0.06), transparent 50%)' }} />
          </div>
        </div>

        {/* Texte */}
        <div className="order-1 text-center md:order-2 md:mt-12">
          <p className="eyebrow animate-fade-up text-argile">Wagram · Paris 17e · English speaking</p>
          <span className="mx-auto my-5 block h-px w-10 animate-fade-up bg-argile" style={{ animationDelay: '0.1s' }} aria-hidden />
          <h1 className="font-display italic text-noir" style={{ fontSize: 'clamp(2.8rem,6.5vw,5rem)', lineHeight: 1.1 }}>
            <span className="block">{line1.map(word)}</span>
            <span className="block">{line2.map(word)}</span>
            <span className="block animate-fade-up text-argile" style={{ animationDelay: `${0.15 + k * 0.08}s` }}>
              naturellement.
            </span>
          </h1>
          <p
            className="mx-auto mt-7 max-w-[560px] animate-fade-up font-display text-[18px] leading-[1.7] text-noir/70"
            style={{ animationDelay: '0.7s' }}
          >
            Au salon Janaya, avenue de Wagram, nous avons fait le choix de la nature. Enzymothérapie végétale,
            argile minérale, plantes organiques — chaque technique respecte la fibre capillaire tout en
            sublimant votre chevelure.
          </p>
          <p className="mt-6 animate-fade-up font-sans text-[13px] tracking-wide text-argile" style={{ animationDelay: '0.78s' }}>
            4,7★ · 503 avis Google · 90% Bio
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 animate-fade-up" style={{ animationDelay: '0.86s' }}>
            <DemoCTA
              ariaLabel="Prendre rendez-vous"
              className="bg-argile px-9 py-4 font-sans text-[14px] font-medium tracking-wide text-nacre transition-colors duration-300 hover:bg-noir"
            >
              Prendre rendez-vous
            </DemoCTA>
            <a
              href="#enzymotherapie"
              className="link-underline font-display text-[16px] italic text-argile transition-transform duration-300 hover:translate-y-0.5"
            >
              Découvrir l&apos;Enzymothérapie ↓
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
