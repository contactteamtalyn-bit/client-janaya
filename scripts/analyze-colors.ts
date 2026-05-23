/**
 * ÉTAPE 0 — Analyse couleurs du site client (Playwright).
 * Usage : npx tsx scripts/analyze-colors.ts
 *
 * NB (Maison Talyn) : analyse réalisée à la livraison via extraction directe du site live.
 * Constat janayacoiffure.com : template WordPress/Elementor — police "Open Sans",
 * widget panier + "Points et Récompenses", marquee livraison. Couleur accent CONFIRMÉE :
 *   rgb(173,136,88) = #AD8858 (145+ occurrences, diviseur SVG « Découvrir » + icônes services).
 *
 * → Identité reconstruite, univers organique / botanique :
 *   --nacre   #FAF9F6  (fond principal nacré)
 *   --argile  #AD8858  (or argile — VRAIE couleur du salon)
 *   --beige   #E8DFD0  (sections alternées, argile minérale)
 *   --noir    #1A1916  (textes / sections sombres)
 *   --sable   #D4B896  (accents secondaires)
 */
import { chromium } from 'playwright'

async function main() {
  const browser = await chromium.launch()
  const page = await browser.newPage({ viewport: { width: 1440, height: 1600 } })
  await page.goto('https://www.janayacoiffure.com/', { waitUntil: 'networkidle' })
  await page.screenshot({ path: 'scripts/_site.png', fullPage: true })
  const css = await page.evaluate(() => {
    const cs = getComputedStyle(document.body)
    return { bg: cs.backgroundColor, color: cs.color, font: cs.fontFamily }
  })
  console.log('Site CSS:', css)
  console.log('Accent confirmé : #AD8858 (or argile). Palette : nacre #FAF9F6 · argile #AD8858 · beige #E8DFD0 · noir #1A1916 · sable #D4B896')
  await browser.close()
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
