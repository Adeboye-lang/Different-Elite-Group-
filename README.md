# DIFFERENT ELITE GROUP (DEG)
### Master Website & International Football Agency Platform

> **“More Than an Agency. A Pathway to Your Future.”**
> *Believe in Your Potential. Build Your Future. Become Elite.*

---

## 1. Overview

**Different Elite Group (DEG)** is an international sports management agency operating from the **United Kingdom** to guide talent across worldwide football leagues.

The website has been engineered to deliver an authentic, luxury football agency aesthetic:
- **Premier League & EA Sports FC Inspired Typography**: High-impact condensed uppercase display typography paired with crisp modern editorial body type.
- **Pure Football Agency Visual Language**: Authentic stadium floodlight atmosphere, dark matchday tunnel tones, and high-fashion athlete portraiture (avoiding tech/crypto wireframes or AI templates).
- **Direct Discretionary Contact Hub**: Form-free executive enquiry featuring direct 1-click confidential email dispatch, direct representation telephone line, and official Instagram connectivity.
- **Sole Official Social Network**: Curated exclusively around **Instagram** (`@differentelitegroup`).
- **No Physical Headquarters Listed**: Emphasizes global operations and executive discretion originating from the United Kingdom.
- **Comprehensive 7-Service Directory**: Interactive desktop dossier and mobile-optimized accordion covering representation, player progression, club pathways, 360° support, mentorship, player branding, and long-term career planning.

---

## 2. Technology Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Turbopack, React 19)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict type safety)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v4 & Custom Luxury CSS Tokens
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/) + Custom SVG Brand Elements
- **Typography**: `Barlow Condensed` (Premier League / FC display) & `Plus Jakarta Sans` (body)

---

## 3. Project Architecture

```
agency/
├── app/
│   ├── favicon.ico          # Browser favicon
│   ├── globals.css          # Design system, luxury tokens & FC display typography
│   ├── layout.tsx           # SEO metadata, FC/PL fonts, Navbar & Footer
│   ├── page.tsx             # Continuous single-page assembly + JSON-LD schema
│   ├── robots.ts            # Dynamic robots.txt generation
│   └── sitemap.ts           # Dynamic sitemap.xml generation
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx       # Sticky framed header with FC typography
│   │   │   ├── Footer.tsx       # Minimalist footer with Instagram & UK scope
│   │   │   └── MobileMenu.tsx   # Staggered animated mobile drawer
│   │   ├── sections/
│   │   │   ├── Hero.tsx         # Framed composition & athletic campaign visual
│   │   │   ├── About.tsx        # Identity, quotes & athletic portraiture
│   │   │   ├── Mission.tsx      # Purpose, pathway pillars & stadium imagery
│   │   │   ├── Services.tsx     # 7-service interactive directory & dossier
│   │   │   ├── Approach.tsx     # 5-value architectural grid
│   │   │   ├── BrandStatement.tsx # High-impact editorial manifesto
│   │   │   └── Contact.tsx      # Direct confidential enquiry desk
│   │   └── ui/
│   │       ├── Button.tsx       # Luxury button variants (gold, primary, outline, ghost)
│   │       ├── Logo.tsx         # Typographic DEG wordmark
│   │       ├── SectionHeading.tsx # FC-styled headings with gold accents
│   │       ├── HeroArtwork.tsx  # Campaign visual with stadium atmosphere
│   │       └── InstagramIcon.tsx # Official SVG Instagram brand icon
│   ├── config/
│   │   └── site.ts          # Central source of truth for all copy & contacts
│   ├── lib/
│   │   └── utils.ts         # Class merger & smooth scrolling helpers
│   └── types/
│       └── index.ts         # Type export barrel
└── public/
    └── images/              # High-resolution curated editorial football photography
```

---

## 4. Getting Started Locally

### Prerequisites
- Node.js `v20+` or `v24+`
- npm, pnpm, or yarn

### Installation
```bash
cd agency
npm install
```

### Running the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Creating a Production Build
```bash
npm run build
```

### Running the Production Server
```bash
npm run start
```

---

## 5. Central Configuration

All business copy, contact details, quotes, values, and services are centralized in:
[`src/config/site.ts`](src/config/site.ts)

You can customize:
- Direct email (`contact.email`)
- Telephone (`contact.phone`)
- Official Instagram URL & handle (`contact.instagramUrl`, `contact.instagramHandle`)
- Service descriptions & bullet points (`services`)
- Values & ethos principles (`values`)
