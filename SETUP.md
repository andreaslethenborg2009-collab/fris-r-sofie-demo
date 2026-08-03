# Setup / onboarding checklist

Brug denne som seed til at genbruge templaten til en ny kunde.

## 1. Indhold — `src/data/site.js`

Udfyld med kundens rigtige data:

- `business`: navn, tagline, telefon, email, adresse, åbningstider
- `services`: 4-6 stk. med navn, beskrivelse og pris-fra
- `testimonials`: 2-3 rigtige (eller kundegodkendte) udtalelser
- `social`: rigtige links til Facebook/Instagram
- `theme`: primær-/accentfarve — se punkt 3

## 2. Billeder

Alle billeder er lige nu placeholders fra picsum.photos (til demo-brug). Før launch:

- Erstat `src/components/Hero.astro`, `About.astro` og `Gallery.astro`'s `src`-værdier med
  rigtige, lokale billeder lagt i `public/images/` (eller `src/assets/` hvis du vil bruge
  Astro's build-time optimering).
- Dette er også det, der løfter Lighthouse performance-scoren fra ~88 til 90+ — eksterne
  placeholder-billeder er den største flaskehals lige nu.

## 3. Farver og fonte — `src/styles/global.css`

Tailwind v4 læser farver/fonte fra `@theme`-blokken i denne fil, IKKE fra `site.js`. Når du
ændrer `theme`-objektet i `site.js`, skal du opdatere de samme værdier her:

```css
@theme {
  --color-primary: #9c4f3c;
  --color-accent: #e8c07d;
  --font-heading: "Playfair Display", serif;
  --font-body: "Inter", sans-serif;
}
```

Husk også at opdatere Google Fonts-linket i `src/layouts/BaseLayout.astro`, hvis du skifter fonte.

## 4. Kontaktformular (Web3Forms)

Formularen (`src/components/ContactForm.astro`) sender til Web3Forms. Gør dette per kunde:

1. Opret gratis konto på https://web3forms.com og opret en "access key" til kundens email.
2. Erstat `YOUR_WEB3FORMS_ACCESS_KEY` i `ContactForm.astro` med den rigtige nøgle.

## 5. Privatlivspolitik

`src/pages/privatlivspolitik.astro` indeholder generisk GDPR-tekst. Tilpas navn/adresse
(trækkes automatisk fra `site.js`) og gennemgå teksten, hvis kunden har særlige forhold
(fx nyhedsbrev, analytics, betalingsdata).

## 6. Site-URL

Opdater `site:` i `astro.config.mjs` til kundens rigtige domæne (bruges til sitemap,
canonical-links og Open Graph-billeder).

## 7. Deploy

1. `git init` (hvis ikke allerede gjort) → push til et GitHub-repo.
2. Connect repoet til Cloudflare Pages (eller Netlify) — build command `npm run build`,
   output-mappe `dist`.
3. Test den live URL på egen telefon, ikke kun desktop DevTools.
