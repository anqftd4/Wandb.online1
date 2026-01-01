# wandb.online

An independent internet and TV comparison service built with Next.js 14, designed to help users explore service options from major providers.

## Overview

wandb.online is a call-focused comparison website that helps consumers understand their internet and TV options. The site is designed to be Google Ads compliant with clear disclaimers about independence from providers.

**Live Site:** [https://wandb.online](https://wandb.online)

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Vercel

## Features

- 🔍 **ZIP Code Search** - Interactive search to explore available services
- 📊 **Plan Comparison** - Side-by-side plan comparison with filters
- 📞 **Call-First CTAs** - Phone number prominently displayed throughout
- 🌙 **Dark Mode** - Full dark theme support (default: light)
- ⚡ **Animations** - Smooth scroll reveals, route transitions, micro-interactions
- 📱 **Mobile Responsive** - Optimized for all device sizes
- ♿ **Accessible** - WCAG 2.1 Level AA compliance effort

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home - Hero with ZIP search, features overview |
| `/compare` | Interactive plan comparison table |
| `/deals` | Current promotional offers (examples) |
| `/tv` | TV package information |
| `/bundles` | Internet + TV bundle options |
| `/why-wandb` | Why use our service |
| `/faq` | Frequently asked questions |
| `/contact` | Contact information |
| `/about` | About the service |
| `/providers/[provider]` | Provider-specific pages with popup |
| `/privacy-policy` | Privacy policy |
| `/terms-and-conditions` | Terms of service |
| `/disclosures` | Important disclosures |
| `/accessibility` | Accessibility statement |
| `/sitemap` | HTML sitemap |

## Google Ads Compliance

The site includes several compliance features:

- Clear independence disclaimers on all pages
- "Example pricing" labels throughout
- Dedicated `/disclosures` page
- No "official" or "authorized" language
- Referral compensation disclosure
- Trademark notices

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/wandb-online.git
cd wandb-online

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
# Create production build
npm run build

# Start production server
npm start
```

## Project Structure

```
wandb-online/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   ├── compare/            # Comparison page
│   ├── deals/              # Deals page
│   ├── tv/                 # TV packages page
│   ├── bundles/            # Bundles page
│   ├── providers/          # Provider-specific pages
│   │   ├── verizon/
│   │   ├── spectrum/
│   │   ├── att/
│   │   └── optimum/
│   └── ...                 # Other pages
├── components/
│   ├── Header.tsx          # Site header with navigation
│   ├── Footer.tsx          # Site footer
│   ├── ZipSearchModule.tsx # ZIP code search component
│   ├── ComparisonTable.tsx # Plan comparison component
│   ├── ProviderPopup.tsx   # Provider modal popup
│   ├── StickyCallBar.tsx   # Desktop call bar
│   ├── FloatingCallButton.tsx # Mobile call button
│   ├── Reveal.tsx          # Scroll reveal animations
│   └── ...                 # Other components
├── lib/
│   ├── siteConfig.ts       # Site configuration
│   └── utils.ts            # Utility functions
├── public/                 # Static assets
├── tailwind.config.ts      # Tailwind configuration
└── package.json
```

## Configuration

Site-wide configuration is centralized in `lib/siteConfig.ts`:

```typescript
export const siteConfig = {
  name: 'wandb.online',
  tagline: 'Compare. Connect. Get Set Up.',
  phone: '(888) 524-0250',
  email: 'support@wandb.online',
  // ... more configuration
}
```

## Customization

### Colors

Brand colors are defined in `tailwind.config.ts`. The primary brand color scale (`brand-50` through `brand-950`) can be customized to match your branding.

### Fonts

The site uses:
- **Display:** Outfit
- **Body:** Plus Jakarta Sans

Fonts are loaded via Google Fonts in the root layout.

### Providers

Provider information (names, colors) is configured in `siteConfig.ts`. To add or modify providers, update the `providers` object.

## Deployment

The site is configured for deployment on Vercel:

1. Connect your GitHub repository to Vercel
2. Configure environment variables (if any)
3. Deploy

## License

This project is proprietary. All rights reserved.

## Contact

- **Phone:** (888) 524-0250
- **Email:** support@wandb.online
- **Hours:** Monday–Friday, 9AM–6PM EST
