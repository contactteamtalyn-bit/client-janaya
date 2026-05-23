import { Reveal } from '@/components/ui/Reveal'
import { Leaf } from '@/components/ui/Leaf'

export function ManifestoStrip() {
  return (
    <section className="relative flex min-h-[50vh] items-center overflow-hidden bg-noir py-24 text-center">
      <Leaf className="pointer-events-none absolute left-6 top-8 hidden h-28 w-20 opacity-[0.06] md:block" />
      <Leaf className="pointer-events-none absolute bottom-8 right-6 hidden h-32 w-24 rotate-180 opacity-[0.06] md:block" />

      <div className="wrap-narrow relative z-10">
        <Reveal>
          <p className="font-display italic text-nacre" style={{ fontSize: 'clamp(1.9rem,4vw,3.2rem)', lineHeight: 1.4 }}>
            «&nbsp;Certains salons vendent une coupe.
            <br />
            Chez Janaya, nous offrons un soin.&nbsp;»
          </p>
          <p className="mt-8 font-sans text-[14px] font-light tracking-wider text-argile">
            — La philosophie Janaya, Paris 17e
          </p>
        </Reveal>
      </div>
    </section>
  )
}
