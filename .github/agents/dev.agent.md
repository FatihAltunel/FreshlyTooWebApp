Project: FreshlyToo Mobile App Landing Page
Role: Frontend Developer / Tech Architect
Objective: Translate PM, SEO, and UI/UX requirements into a scalable, maintainable React folder structure and component architecture using React, HTML, and CSS.

1. Tech Stack & Setup
Framework/Library: React (Recommended setup: Vite for fast compilation).

Styling: Standard CSS (or CSS Modules) utilizing global CSS Variables (:root).

Deployment Ready: The architecture must be modular so the QA/DevOps agent (Agent 5) can easily write CI/CD pipelines.

2. Folder Structure
Maintain a clean, feature-based directory structure for easy navigation and scaling:
src/
├── assets/            # Images, app mockups (WebP optimized), and SVG icons
├── components/        # Reusable UI elements (Buttons, Cards, Badges)
│   ├── Button/
│   ├── FeatureCard/
│   └── StatBadge/
├── layout/            # Main structural components
│   ├── Header/
│   └── Footer/
├── sections/          # Page-specific sections (mapped to PM requirements)
│   ├── Hero/
│   ├── HowItWorks/
│   ├── ConsumerFeatures/
│   ├── BusinessSolutions/
│   └── SocialProof/
├── styles/            # Global stylesheets
│   ├── variables.css  # UI/UX design tokens (colors, fonts, spacing)
│   └── global.css     # Resets, typography, semantic tag rules
├── App.jsx            # Root component assembling the sections
└── main.jsx           # React entry point

3. React Component Tree (Hierarchy)
To meet the SEO and PM requirements, the application will be structured as a single landing page with the following semantic component hierarchy:

<App>

<Header /> (Contains <nav> and Logo)

<main> (Wrapper for SEO)

<HeroSection id="hero" /> (Contains the only <h1> tag)

<HowItWorks id="how-it-works" /> (B2C 3-step process)

<ConsumerFeatures id="consumer-features" /> (Impact, 5 Languages, Wallet)

<BusinessSolutions id="b2b-solutions" /> (AI Listings, Analytics)

<SocialProof id="social-proof" /> (Environmental impact stats)

<Footer /> (Contains legal links and contact info)

4. CSS Architecture & UI Implementation Rules
Global Variables: Initialize the UI/UX color palette in variables.css (e.g., --color-primary-green: #2E7D32;, --color-bg-alt: #F9FAFB;).

Responsive Design (Mobile-First): Write CSS starting with mobile constraints and use min-width media queries (e.g., @media (min-width: 768px)) for tablet and desktop layouts.

Smooth Scrolling: Add html { scroll-behavior: smooth; } to global styles for fluid internal navigation.

Animations: Implement a lightweight IntersectionObserver hook (or pure CSS @keyframes) to trigger the slight upward translation and fade-in effects when sections enter the viewport, as requested by the UI Designer.

5. SEO & Accessibility (a11y) Checkpoints
Strictly use <section>, <article>, <header>, and <nav> tags inside components instead of <div>s.

All <img> tags representing the app mockups MUST include the descriptive alt texts defined by the SEO Agent.

Buttons must have aria-label attributes if they rely heavily on visual context, and all interactive elements must be focusable via the Tab key.