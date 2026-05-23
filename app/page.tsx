import { Hero } from '@/components/sections/Hero'
import { ManifestoStrip } from '@/components/sections/ManifestoStrip'
import { EnzymotherapieBelmak } from '@/components/sections/EnzymotherapieBelmak'
import { NaturelEngagement } from '@/components/sections/NaturelEngagement'
import { Services } from '@/components/sections/Services'
import { Realisations } from '@/components/sections/Realisations'
import { ProduitsShop } from '@/components/sections/ProduitsShop'
import { Avis } from '@/components/sections/Avis'
import { LeSalon } from '@/components/sections/LeSalon'
import { FideliteCartesCadeaux } from '@/components/sections/FideliteCartesCadeaux'
import { Localisation } from '@/components/sections/Localisation'
import { BookingCTA } from '@/components/sections/BookingCTA'
import { Footer } from '@/components/sections/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <ManifestoStrip />
      <EnzymotherapieBelmak />
      <NaturelEngagement />
      <Services />
      <Realisations />
      <ProduitsShop />
      <Avis />
      <LeSalon />
      <FideliteCartesCadeaux />
      <Localisation />
      <BookingCTA />
      <Footer />
    </main>
  )
}
