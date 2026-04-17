# Metro Safety Products — Verification Checklist

Red-Green TDD checklist for post-generation verification. Every item below should be ticked before shipping to Google Ads.

WhatsApp number used throughout: **+91 99530 62517** → `919953062517`

---

## 1. Structural / SEO

- [ ] **Exactly one `<h1>`** on the page — the hero headline ("Safety belts, built in Delhi. Shipped across India.")
- [ ] `<title>` present, descriptive, ≤ 65 characters
- [ ] `<meta name="description">` present, ≤ 160 characters
- [ ] `<link rel="canonical">` points to `./index.html`
- [ ] Open Graph tags (`og:title`, `og:description`, `og:image`, `og:type`, `og:locale=en_IN`) all present
- [ ] Favicon wired to `./assets/images/metro-safety-products-logo.svg`
- [ ] All `<img>` tags have non-empty `alt` OR `aria-hidden="true"` (decorative icons next to labels)
- [ ] Image filenames follow SEO norms — lowercase, hyphen-separated, keywords (e.g. `full-body-safety-harness-delhi.svg`, `shock-absorbing-lanyard-belt-delhi.svg`)
- [ ] **No absolute paths** for internal assets — all internal references use `./` or `#`
- [ ] All asset paths resolve inside `assets/images/` or `assets/icons/`

## 2. Content sections (in the required order)

- [ ] Sticky header (logo + nav + Call + WhatsApp + theme toggle) with hazard-tape top strip
- [ ] Hero — **asymmetric split-screen** (7/12 text + 5/12 image), NOT centred
- [ ] Hazard ticker band (editorial break)
- [ ] §01 About Us — founder 1998 / Okhla / pan-India / export mention
- [ ] §02 Safety Belt Products — all **8 variants** present with spec sheets
- [ ] §03 Why Choose Us — 6 B2B trust signals
- [ ] §04 Certifications & Standards — IS 3521, IS 2925, CE EN 355, BIS ISO 9001
- [ ] §05 Industries / Clients Served — 7 industries + clientele mentioned
- [ ] §06 Bulk Enquiry Form — all required fields
- [ ] §07 Testimonials — 6 Google-review-style quotes
- [ ] §08 FAQ — 7 B2B-focused Q&A
- [ ] §09 "We Also Supply" — compact teaser strip with 8 categories
- [ ] Footer — NAP + social icons (as `<img>`) + Request Catalogue CTA
- [ ] Mobile floating bottom bar (Call + WhatsApp)

## 3. "We Also Supply" is visually subordinate

- [ ] Wrapped in an `<aside>`, labelled "09 · Catalogue teaser · not our primary offer"
- [ ] Uses smaller heading (`text-xl`/`text-2xl`), not `h2-section`
- [ ] Cards are compact (`h-16` images, mono-sized labels)
- [ ] Does NOT contain any primary CTAs; only a single "Request full catalogue" link
- [ ] Takes less vertical space than the Products section

## 4. Primary CTAs — placement check

The two primary CTAs must appear in all five required placements:

| Placement | WhatsApp CTA | Call CTA |
|-----------|:------------:|:--------:|
| Sticky header | ☐ | ☐ |
| Hero section (prominently) | ☐ | ☐ |
| After the Products section | ☐ | ☐ |
| After the Bulk Enquiry Form | ☐ | ☐ |
| Mobile floating bottom bar | ☐ | ☐ |

- [ ] All WhatsApp CTAs open `https://wa.me/919953062517?text=I%20would%20like%20to%20enquire%20about%20safety%20belts%20in%20bulk`
- [ ] All Call CTAs use `tel:+919953062517`
- [ ] **No email CTA anywhere** on the page
- [ ] Footer "Request Catalogue" CTA opens `https://wa.me/919953062517?text=Please%20send%20me%20the%20Metro%20Safety%20Products%20catalogue`

## 5. Bulk Enquiry Form → WhatsApp handoff

Section title must read: **"Get a Bulk Quote — We'll Call You Back"** ✓

Required fields present:

- [ ] Name *
- [ ] Company Name *
- [ ] Designation
- [ ] Phone Number *
- [ ] Product Interest (dropdown of all 8 belt variants + Mixed + Other) *
- [ ] Approximate Quantity Required
- [ ] City / State
- [ ] Message

- [ ] Submit button label reads exactly **"Send Enquiry on WhatsApp"**
- [ ] On submit, browser opens `https://wa.me/919953062517?text=...`
- [ ] Required-field validation triggers when Name/Company/Phone/Product are empty (inline error shown, no redirect)
- [ ] WhatsApp message format exactly:

  ```
  *Bulk Enquiry — Metro Safety Products*
  Name: <name>
  Company: <company>
  Designation: <designation>
  Phone: <phone>
  Product: <product>
  Quantity: <quantity>
  Location: <city_state>
  Message: <message>
  ```

- [ ] Meta Pixel `Lead` event fires (safe no-op if fbq missing)
- [ ] GTM `dataLayer` push `bulk_enquiry_whatsapp` fires
- [ ] Form does **not** POST to any server — it only opens `wa.me`

### Manual form test cases

| # | Name | Company | Designation | Phone | Product | Quantity | Location | Message | Expected |
|---|------|---------|-------------|-------|---------|----------|----------|---------|----------|
| 1 | Ravi | L&T | Sr. Buyer | +919812345678 | Full Body Safety Harness (IS 3521) | 500 | Mumbai, MH | For Coastal Road site | All 9 lines in message |
| 2 | Asha | DMRC | Procurement | 9891234567 | Double Lanyard Safety Belt | 1200 | Delhi | *(empty)* | 9 lines with "Message: -" |
| 3 | *(empty)* | ACL | — | 98xxxx | — | — | — | — | Inline error; no redirect |
| 4 | Kiran | BHEL | — | *(empty)* | Lineman | 300 | Bhopal | Yes | Inline error; no redirect |

## 6. Anchor navigation

- [ ] `#top`            → `<main id="top">`
- [ ] `#about`          → `<section id="about">`
- [ ] `#products`       → `<section id="products">`
- [ ] `#why-us`         → `<section id="why-us">`
- [ ] `#certifications` → `<section id="certifications">`
- [ ] `#industries`     → `<section id="industries">`
- [ ] `#enquiry`        → `<section id="enquiry">`
- [ ] `#reviews`        → `<section id="reviews">`
- [ ] `#faq`            → `<section id="faq">`
- [ ] `#we-also-supply` → `<aside id="we-also-supply">`

Every header and footer nav link resolves to an existing id above.

## 7. Schema.org JSON-LD

- [ ] `Manufacturer` (LocalBusiness-equivalent) with name, logo, image, telephone, address, geo, openingHours, aggregateRating, sameAs
- [ ] `@graph` of 8 `Product` entries — one per belt variant
- [ ] `FAQPage` with 7 Q&A matching the visible FAQ
- [ ] `Review` with rating 5 from a named person
- [ ] All four JSON blocks parse as valid JSON — validate at https://validator.schema.org/ and https://search.google.com/test/rich-results

## 8. Responsive rendering

Load the page at each viewport and confirm no horizontal scroll, all CTAs reachable, hero split collapses cleanly:

- [ ] **Mobile** — 375 × 812 (iPhone 12)
- [ ] **Mobile large** — 414 × 896 (iPhone Pro Max)
- [ ] **Tablet portrait** — 768 × 1024 (iPad)
- [ ] **Tablet landscape** — 1024 × 768
- [ ] **Desktop** — 1440 × 900
- [ ] **Wide desktop** — 1920 × 1080

Specific regressions:

- Mobile floating CTA bar hides on `md+`
- Header nav hides on `<lg`; Call CTA hides on `<md`
- Hero split collapses to stacked blocks on mobile
- Product rows stack image-above-spec on mobile; alternate sides on desktop
- Why Us 6-tile grid becomes single column on mobile
- Industries 7-tile strip wraps to 2 or 3 columns on mobile

## 9. Day / night mode

- [ ] Theme toggle visible on `sm+`
- [ ] Click flips `dark` class on `<html>`
- [ ] Night mode: near-black bg, Safety-Yellow accents retained, light ink
- [ ] Choice persists via `localStorage` key `metro-theme`
- [ ] `prefers-color-scheme: dark` respected on first load

## 10. Theming config block

A single `:root { ... }` block (plus `html.dark { ... }` override) holds every theme token:

- [ ] Colour: `--brand-primary`, `--brand-secondary`, `--brand-ink`, `--brand-bg`, `--brand-surface`, `--brand-muted`, `--brand-hairline`
- [ ] Fonts: `--font-display`, `--font-body`, `--font-mono`
- [ ] Section font sizes: `--fs-display`, `--fs-h2`, `--fs-h3`, `--fs-lead`, `--fs-body`, `--fs-eyebrow`, `--fs-mono`
- [ ] Changing any token live in DevTools re-themes the page consistently

## 11. Text-wrapping rule

No bare text nodes alongside inline SVG/`<img>`/`<i>` icons. Spot-check:

- [ ] Every `<button>` and `<a>` with an icon wraps its label in `<span>`
- [ ] Every `<summary>` wraps the question text in `<span>`
- [ ] Every `<figcaption>` wraps name + context in `<span>`
- [ ] `<address>` text runs are wrapped in `<span>`
- [ ] Spec list `<dt>`/`<dd>` use `<span>` for text

## 12. Analytics

- [ ] GTM container script in `<head>` (ID: `GTM-EXAMPLE1`) + `<noscript>` iframe fallback
- [ ] Meta Pixel script present (ID: `000000000000000`) + `<noscript>` fallback
- [ ] No console errors on load
- [ ] `dataLayer` push on form submit
- [ ] `fbq('track', 'Lead')` on form submit

## 13. Localisation

- [ ] Phone in Indian format (`+91 99530 62517`)
- [ ] Address uses Indian pin format (110020)
- [ ] Hindi sub-tagline present in hero (`सुरक्षा हमारी प्राथमिकता है`)
- [ ] No `$` / `€` — prices presented as **"Price on Request"** / **"Get Bulk Quote"** only
- [ ] Clientele references are Indian (Railways, NTPC, L&T, Ahluwalia, Ambuja, BHEL, Reliance Infra)

## 14. B2B tone audit

Scan the page copy and confirm:

- [ ] No retail phrasing like "Buy now", "Add to cart", "Shop now"
- [ ] No per-unit MRP displayed
- [ ] Language used: "bulk orders", "MOQ", "OEM supply", "dealer enquiries welcome", "pan-India distribution" ✓
- [ ] Pricing context: "Price on request" / "Get Bulk Quote" ✓

## 15. Divergence from reference site (metrosafetypro.com)

- [ ] No centred hero
- [ ] No equal-column service grid
- [ ] Hero→features→CTA is NOT the section order — we use hero → ticker → about → products → why → certifications → industries → enquiry → reviews → FAQ → we-also-supply → footer
- [ ] Layout is **asymmetric split-screen + industrial editorial breaks** (catalogue-meets-command-centre) — distinctly different

---

## How to run this checklist

1. Open `../index.html` in a browser.
2. Use DevTools device toolbar to cycle through the §8 viewports.
3. Submit the form with each §5 test case and decode the `wa.me` URL's `text=` parameter to verify the message body line-by-line.
4. Run JSON-LD through https://validator.schema.org/ and https://search.google.com/test/rich-results.
5. Validate with Lighthouse (target ≥ 95 accessibility, best practices, SEO).
6. Grep for forbidden absolute paths and bare text nodes:
   ```bash
   grep -n 'src="/\|href="/' index.html   # should return nothing
   grep -n '<h1' index.html               # should return exactly 1 match
   ```
