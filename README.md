# FreshlyToo Landing Page

Bilingual (TR/EN) marketing site for **FreshlyToo**, built for the **TÜBİTAK 1812 BiGG Entrepreneurship Support Program** application.

> **Mission:** _Save surplus food, stop waste._

---

## 1) Project Vision & About

FreshlyToo reduces food waste by connecting people with surplus meals from nearby restaurants and bakeries. This repository contains the marketing/validation web experience used to:

- communicate FreshlyToo's social and environmental value proposition,
- present consumer and business-side workflows visually,
- collect waitlist signups and business applications ahead of launch,
- support investor and program application storytelling for BiGG.

The app is not yet released, so **every primary CTA leads to the email waitlist**, not to an App Store link.

---

## 2) Design source of truth

The site is a build of the handoff package in `design_handoff_freshlytoo_site/`:

- `README.md` — full spec (sections, measurements, colors, copy, animation, states)
- `FreshlyToo Site.dc.html` — working prototype of the design (open in a browser)
- `tokens.css` — color / typography / geometry tokens

`design_handoff_freshlytoo_site/` is **reference only**. Its `support.js` and `image-slot.js` are the prototype runtime and are excluded from linting and the build. Design tokens live in `src/styles/tokens.css` — do not introduce colors, radii, shadows or fonts outside that file.

The prototype ships three hero variants (`editoryal` / `manifesto` / `vitrin`). The home page uses **manifesto**; **editoryal** is also built and can be swapped back with one line in `src/pages/Home/Home.jsx`. `vitrin` is not implemented.

---

## 3) Routes

| Route | Page |
|---|---|
| `/` | Home (hero, category marquee, three steps, impact, app, waitlist) |
| `/isletmeler` | For businesses |
| `/fiyatlandirma` | Pricing |
| `/hikayemiz` | Our story |
| `/sss` | FAQ |
| `/iletisim` | Contact |

`/#waitlist` scrolls to the waitlist form from any page.

Routing is client-side (`react-router-dom`) with real URLs. Because GitHub Pages has no SPA rewrite, `vite.config.js` copies `index.html` to `404.html` at build time and `base` is `/FreshlyTooWebApp/`; the router derives its `basename` from `import.meta.env.BASE_URL`.

---

## 4) Tech Stack & Architecture

- **React 19** + **Vite** + plain CSS (no framework)
- Design tokens in `:root` (`src/styles/tokens.css`), shared primitives in `src/styles/global.css`, everything else co-located per section/page
- **Instrument Sans / Instrument Serif** via Google Fonts with `display=swap`
- Copy lives in one dictionary (`src/i18n/content.js`) with `tr` and `en` sharing the same key structure; language is held in React context and persisted to `localStorage`

### Motion

All scroll reveals, counters and progress bars run off **one shared `IntersectionObserver`** (`src/lib/scrollObserver.js`), consumed through the `useInView` hook. Under `prefers-reduced-motion: reduce` the observer is never attached: content is visible immediately, counters render their final value, bars sit at full width and the marquee stops.

### Interactive components

Only these hold state — everything else is static markup: hero mini card (CSS only), marquee, reveal/counter/bar, FAQ accordion, waitlist form, contact form.

---

## 5) Forms & Supabase

Both forms go through a single entry point, `src/lib/actions.js`, which inserts directly into Supabase over PostgREST. There is no server runtime — the site is static.

Create the tables with the migration in `supabase/migrations/`:

```bash
supabase db push
```

It creates `waitlist` and `contact_messages` with **RLS allowing INSERT only** for `anon` — nobody can read, update or delete through the public key. KVKK consent is recorded as `consented_at` at insert time.

Then set the environment variables (see `.env.example`):

```bash
cp .env.example .env.local
# VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY
```

Without them the forms validate normally but report a submission error and log a warning to the console.

---

## 6) Project Structure

```text
FreshlyTooWebApp/
├─ public/
├─ supabase/
│  └─ migrations/            # waitlist + contact_messages, RLS insert-only
├─ src/
│  ├─ assets/
│  │  ├─ shots/              # Real app screenshots (home, map, detail, pickup-qr)
│  │  ├─ photos/             # PLACEHOLDER food photography — see §7
│  │  └─ icon.png
│  ├─ components/            # Counter, Headline, Reveal, ScrollManager, StatBar
│  ├─ hooks/                 # useInView, usePageTitle, usePrefersReducedMotion
│  ├─ i18n/                  # content.js (TR/EN), LanguageContext.jsx
│  ├─ layout/                # Header (+ scroll progress), Footer
│  ├─ lib/                   # actions.js (forms), scrollObserver.js
│  ├─ pages/                 # Home, Businesses, Pricing, Story, Faq, Contact
│  ├─ sections/              # Home sections: HeroManifesto (in use), Hero
│  │                         #   (editorial variant), Marquee, Steps, Impact,
│  │                         #   AppShowcase, Waitlist
│  ├─ styles/                # tokens.css, global.css
│  ├─ routes.js
│  ├─ App.jsx
│  └─ main.jsx
├─ design_handoff_freshlytoo_site/   # Design reference — not built or linted
└─ vite.config.js
```

---

## 7) Getting Started

### Prerequisites

- Node.js 20+ (CI runs 24)
- npm

```bash
npm install
npm run dev      # http://localhost:5173/FreshlyTooWebApp/
npm run lint
npm run build
```

---

## 8) Disclaimer (MVP / Showcase Scope)

- This project is an **MVP landing/web showcase** for product communication and validation.
- App screen assets in `src/assets/shots/` are real screenshots of the product.
- **The food photography in `src/assets/photos/` is AI-generated placeholder material and is not cleared for commercial use.** Replace it with licensed stock or your own photography before any public launch. The `alt` text is already written per image and lives in `src/i18n/content.js`.
- Legal pages (KVKK notice, terms, privacy) and the press kit download are not written yet; those links are inert placeholders.
- Copy, pricing, and onboarding details may evolve during BiGG and post-validation iterations.
