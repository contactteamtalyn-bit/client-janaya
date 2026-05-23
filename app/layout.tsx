import type { Metadata } from 'next'
import { Lora, Poppins } from 'next/font/google'
import './globals.css'
import { DemoModalProvider } from '@/components/DemoModal'
import { DemoBanner } from '@/components/DemoBanner'
import { Navigation } from '@/components/Navigation'

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-lora',
  display: 'swap',
  adjustFontFallback: false,
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-poppins',
  display: 'swap',
  adjustFontFallback: false,
})

export const metadata: Metadata = {
  title: 'Janaya Coiffure — Enzymothérapie · Argile · Coloration Organique · Paris 17e',
  description:
    "Salon spécialisé en lissage enzymothérapie Belmakosmetik, balayage minéral à l'argile et coloration organique sans ammoniaque. 89 Avenue de Wagram, Paris 17e. 4,7★ · 503 avis Google.",
  robots: { index: false, follow: false },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={`${lora.variable} ${poppins.variable} font-sans bg-nacre text-noir antialiased`}>
        <DemoModalProvider>
          <DemoBanner />
          <Navigation />
          {children}
        </DemoModalProvider>
      </body>
    </html>
  )
}
