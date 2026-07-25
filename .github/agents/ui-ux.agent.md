Project: FreshlyToo Mobile App Landing Page
Role: UI/UX Designer


Objective: Establish a cohesive, eco-friendly design system that aligns with the "Save surplus food, stop waste" mission, utilizing a vibrant green-themed visual language.

1. Color Palette (Eco-Friendly Theme)
To reflect our environmental mission and match the mobile app's native feel, we will use the following color variables in our CSS:


Primary Green (#2E7D32 or similar): Used for primary buttons (e.g., "Download the App"), header navigation active states, and highlighted eco-metrics.


Secondary/Action Orange (#F57C00): Used sparingly to draw attention to urgency (e.g., the countdown timers mentioned in the app's "Time Left" UI).  
PDF

Backgrounds:

Main Background: Clean White (#FFFFFF) to keep the interface spacious and legible.

Section Background (Alternate): Soft Off-White/Light Gray (#F9FAFB) for alternating sections (e.g., "How It Works" vs "Features") to create depth.

Text Colors:

Primary Text (Headings): Dark Charcoal (#1F2937) for strong readability.

Secondary Text (Paragraphs): Muted Gray (#4B5563).

2. Typography
Font Family: Inter or Roboto (Google Fonts). These sans-serif fonts offer clear, transparent, and modern readability on both desktop and mobile screens.

Font Weights:

H1 & H2: Bold (700) - For strong mission statements.

H3: Semi-Bold (600).

Paragraphs/UI elements: Regular (400) and Medium (500).

3. Component Styling & Layout
Buttons:

Shape: Fully rounded (pill shape) to match modern app aesthetics border-radius: 9999px;.

Default State: Solid Primary Green background with white text.


Animations: Must include polished hover and focus states. On hover, apply a slight upward lift (transform: translateY(-2px);) and a soft drop shadow (box-shadow: 0 4px 6px rgba(46, 125, 50, 0.2);).

Feature Cards (For B2C and B2B Sections):

Clean white background cards with a subtle border (1px solid #E5E7EB) and soft shadow.

Border radius: 12px to mimic mobile app containers.

Icons: Use minimalist, green-tinted SVG icons for features like the "9-tier badge" , "Wallet" , and "5 languages".  
PDF
+ 2

Images & Mockups:

Use high-quality mockups of the provided PDF screens (e.g., Map View, Listing Feed, Order QR Code).

Ensure mockups have a slight shadow to pop out from the background.

4. Spacing and Mobile-First Rules
Use a consistent 8px grid system for paddings and margins (e.g., 16px, 24px, 32px, 64px).

Mobile-First: Since the primary goal is app downloads, the design must look flawless on mobile. Ensure tap targets (buttons, links) are at least 48px tall for accessibility. Stack flex/grid items vertically on screens below 768px.

5. Developer Handoff Notes (For Agent 4)
Please set up these colors as CSS Variables (Custom Properties) at the :root level for easy maintenance.

Implement smooth scrolling for internal anchor links (e.g., clicking "Features" in the nav smoothly scrolls down).

Apply a simple CSS fade-in animation (opacity: 0 to opacity: 1 with a slight upward translation) as sections enter the viewport to make the landing page feel dynamic.