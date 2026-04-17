# Metro Safety Products — Google Ads Landing Page

Static B2B landing page for Metro Safety Products, an industrial safety-belt manufacturer based in Okhla, New Delhi.

## Stack

- **HTML + Tailwind CSS** (via CDN) — no build step
- **Vanilla JS** for theme toggle and the bulk-enquiry → WhatsApp handler
- **Archivo / Inter / IBM Plex Mono** via Google Fonts
- **Schema.org JSON-LD** inline for SEO

## Structure

```
metro-safety-landing-page/
├── index.html          # Markup + JSON-LD
├── index.css           # Brand tokens, typography, components
├── index.js            # Theme toggle + enquiry → WhatsApp
└── assets/
    ├── photos/         # Hero, product, reviewer images
    └── icons/          # SVG icons (logo, social, utility)
```

## Design

- Mobile-first, fluid typography via `clamp()`
- Safety Yellow `#FFC300` + Charcoal Black `#1A1A1A`
- Dark mode via `html.dark` (persisted to `localStorage`)
- Sticky mobile CTA bar (Call / WhatsApp) below `md`

## Run locally

Any static server works:

```bash
npx serve .
# or
python -m http.server 5500
```

Then open `http://localhost:5500`.

## Deploy

Drop the folder on any static host — Netlify, Vercel, Cloudflare Pages, GitHub Pages, or plain nginx. No build pipeline needed.

## Contact routing

- Phone: `tel:+919953062517`
- WhatsApp: `https://wa.me/919953062517`

Enquiry form submissions are formatted into a prefilled WhatsApp message client-side; there is no backend.
