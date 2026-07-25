# FreshlyToo Landing Page

Professional bilingual (TR/EN) landing page and web showcase for **FreshlyToo**, developed for the **TÜBİTAK 1812 BiGG Entrepreneurship Support Program** application.

> **Mission:** _Save surplus food, stop waste._

---

## 1) Project Vision & About

FreshlyToo is a product concept focused on reducing food waste by connecting consumers with quality surplus meals from nearby restaurants and bakeries.

This repository contains the marketing/validation web experience used to:

- communicate FreshlyToo’s social and environmental value proposition,
- present consumer and business-side workflows visually,
- support investor and program application storytelling for BiGG.

---

## 2) Key Features & Sections

### Bilingual Experience

- Full **TR/EN language switcher** in the header
- Centralized copy dictionary in `src/i18n/content.js`

### Hero / Home

- Real app screenshots inside reusable phone frames
- Visual-first messaging and primary CTA flow

### Core Product Story Modules

The product narrative and section modules cover:

- **How It Works** (3 steps): **Discover → Rescue → Pick Up**
- **Consumer Features**:
  - gamified **9-tier badge** progression,
  - **CO₂ impact** visibility,
  - wallet/refund/reward mechanics
- **Business Solutions**:
  - AI-powered listing support,
  - QR-based pickup operations,
  - sales analytics and operational insights,
  - **freemium model** framing
- **Social Proof** and impact storytelling

### Current Multi-Section Showcase Layout

The current composed flow in `App.jsx` is:

1. Hero / Home  
2. Businesses  
3. Pricing  
4. Our Story  
5. FAQ  
6. Contact & Waitlist

---

## 3) Tech Stack & Architecture

### Frontend Stack

- **React** (UI composition)
- **Vite** (dev server + build pipeline)
- **Standard CSS** (no CSS framework)
- Reusable UI components + section-based architecture

### Styling System

- Eco-friendly design tokens in `:root` (`src/styles/variables.css`)
- Warm base palette, dark charcoal typography, fresh green accents
- **8px spacing grid** via tokenized spacing scale
- Mobile-first responsive behavior with semantic HTML and a11y focus

### Multi-Agent Workflow Architecture (5 Roles)

FreshlyToo follows a role-based product workflow:

1. **PM Agent** — product scope, messaging, section priorities  
2. **SEO Agent** — metadata, semantic structure, alt-text/search intent  
3. **UI/UX Agent** — visual system, layout hierarchy, interaction patterns  
4. **Dev Agent** — React architecture, implementation, code quality  
5. **QA Agent** — verification gates (`lint`, `build`, consistency checks)

---

## 4) Project Structure

```text
FreshyToo/
├─ public/
│  ├─ favicon.svg
│  └─ icons.svg
├─ src/
│  ├─ assets/
│  │  ├─ shots/                  # Real app screenshots (home, map, detail, pickup-qr)
│  │  └─ mockups/                # SVG mockup placeholders/alternatives
│  ├─ components/
│  │  ├─ Button/
│  │  ├─ FeatureCard/
│  │  ├─ PhoneMockup/
│  │  └─ StatBadge/
│  ├─ hooks/
│  │  └─ useRevealOnScroll.js
│  ├─ i18n/
│  │  └─ content.js
│  ├─ layout/
│  │  ├─ Header/
│  │  └─ Footer/
│  ├─ sections/
│  │  ├─ Hero/
│  │  ├─ Businesses/
│  │  ├─ Pricing/
│  │  ├─ OurStory/
│  │  ├─ FAQ/
│  │  ├─ ContactWaitlist/
│  │  ├─ HowItWorks/             # Product-story module
│  │  ├─ ConsumerFeatures/       # Product-story module
│  │  ├─ BusinessSolutions/      # Product-story module
│  │  └─ SocialProof/            # Product-story module
│  ├─ styles/
│  │  ├─ variables.css
│  │  └─ global.css
│  ├─ App.jsx
│  └─ main.jsx
├─ docs/
├─ package.json
└─ vite.config.js
```

---

## 5) Getting Started

### Prerequisites

- Node.js 18+ recommended
- npm

### Install

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Then open the local Vite URL shown in terminal (usually `http://localhost:5173`).

### Quality checks

```bash
npm run lint
npm run build
```

---

## 6) Disclaimer (MVP / Showcase Scope)

- This project is an **MVP landing/web showcase** for product communication and validation.
- App screen assets are used to present the intended UX direction.
- Backend integrations, production telemetry, and full transactional flows are outside the current landing-page scope.
- Copy, pricing, and onboarding details may evolve during BiGG and post-validation iterations.
