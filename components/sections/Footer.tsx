import { DemoCTA } from '@/components/DemoModal'

export function Footer() {
  return (
    <footer className="bg-noir-profond py-16 text-nacre">
      <div className="wrap">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-sans text-[13px] font-bold uppercase tracking-[0.2em] text-nacre">Janaya Coiffure</p>
            <p className="mt-2 font-display text-[14px] italic text-argile">Enzymothérapie · Argile · Organique · Paris 17e</p>
            <p className="mt-4 font-sans text-[13px] font-light leading-relaxed text-nacre/60">
              89 Avenue de Wagram · 75017 Paris
              <br />
              +33 1 47 63 70 70 · info@janayacoiffure.com
            </p>
          </div>

          <div className="flex flex-col items-start gap-2 font-sans text-[13px] font-light text-nacre/60">
            <a href="#produits" className="link-underline">E-Shop Belmakosmetik</a>
            <DemoCTA ariaLabel="Carte cadeau" className="link-underline text-left">Carte Cadeau</DemoCTA>
            <DemoCTA ariaLabel="Points fidélité" className="link-underline text-left">Points Fidélité</DemoCTA>
            <DemoCTA ariaLabel="Mentions légales" className="link-underline text-left">Mentions légales</DemoCTA>
          </div>

          <div className="font-sans text-[13px] font-light leading-relaxed text-nacre/60">
            <p className="font-sans text-[10px] font-bold uppercase tracking-[0.18em] text-argile">Horaires</p>
            <p className="mt-2">Lundi · 10h – 19h</p>
            <p>Mardi au Vendredi · 9h30 – 19h</p>
            <p>Samedi · 9h30 – 18h30</p>
          </div>
        </div>

        {/* Bandeau anti-vol */}
        <div className="mt-12 border border-argile/40 bg-noir/40 p-5 text-center">
          <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.14em] text-argile">
            ⚠ Maquette démonstration non finale
          </p>
          <p className="mt-2 font-sans text-[12px] font-light leading-relaxed text-nacre/60">
            Site créé par Maison Talyn —{' '}
            <a
              href="https://instagram.com/maison.talyn"
              target="_blank"
              rel="noopener noreferrer"
              className="text-argile underline underline-offset-2"
            >
              @maison.talyn
            </a>
            . Tous les contenus sont des placeholders. Contact pour publication : @maison.talyn
          </p>
        </div>

        <p className="mt-8 text-center font-sans text-[11px] text-nacre/35">
          © {new Date().getFullYear()} Janaya Coiffure · Maquette Maison Talyn
        </p>
      </div>
    </footer>
  )
}
