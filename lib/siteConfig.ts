export const siteConfig = {
  name: 'wandb.online',
  tagline: 'Compare. Connect. Get Set Up.',
  description: 'An independent comparison and connection service helping you explore internet and TV options.',
  phone: '(888) 524-0250',
  phoneLink: 'tel:+18885240250',
  email: 'support@wandb.online',
  emailLink: 'mailto:support@wandb.online',
  hours: 'Mon–Fri 9AM–6PM EST',
  url: 'https://wandb.online',
  
  disclaimers: {
    footer: 'wandb.online is an independent comparison and connection service and is not affiliated with, endorsed by, or sponsored by Verizon, Spectrum, AT&T, or Optimum. Provider names and trademarks belong to their respective owners. Availability and pricing vary by location and are subject to change.',
    pricing: 'Prices shown are examples only. Actual pricing and availability depend on your specific address and are subject to change. Contact us to confirm current offers.',
    referral: 'We may receive compensation when you connect with providers through our service. This helps us keep our comparison service free.',
  },

  providers: {
    verizon: {
      name: 'Verizon',
      color: '#ee0000',
      colorLight: '#ff4444',
      description: 'Known for fiber-optic internet with fast upload and download speeds in select areas.',
    },
    spectrum: {
      name: 'Spectrum',
      color: '#0075c9',
      colorLight: '#3399ff',
      description: 'Widely available cable internet service with no contracts and included equipment.',
    },
    att: {
      name: 'AT&T',
      color: '#00a8e0',
      colorLight: '#33c4ff',
      description: 'Offers fiber and DSL internet options along with TV and phone bundles.',
    },
    optimum: {
      name: 'Optimum',
      color: '#ff6900',
      colorLight: '#ff9944',
      description: 'Regional cable and fiber provider with internet, TV, and phone services.',
    },
  },

  speedTiers: [
    { label: 'Basic', range: '25–100 Mbps', description: 'Good for light browsing and email' },
    { label: 'Standard', range: '100–300 Mbps', description: 'Great for streaming and multiple devices' },
    { label: 'Fast', range: '300–500 Mbps', description: 'Ideal for work-from-home and gaming' },
    { label: 'Ultra', range: '500+ Mbps', description: 'Best for large households and heavy usage' },
  ],

  navigation: [
    { name: 'Compare', href: '/compare' },
    { name: 'Deals', href: '/deals' },
    { name: 'TV', href: '/tv' },
    { name: 'Bundles', href: '/bundles' },
    { name: 'Why wandb', href: '/why-wandb' },
    { name: 'FAQ', href: '/faq' },
  ],

  footerLinks: {
    services: [
      { name: 'Compare Plans', href: '/compare' },
      { name: 'Current Deals', href: '/deals' },
      { name: 'TV Options', href: '/tv' },
      { name: 'Bundles', href: '/bundles' },
    ],
    providers: [
      { name: 'Verizon', href: '/providers/verizon' },
      { name: 'Spectrum', href: '/providers/spectrum' },
      { name: 'AT&T', href: '/providers/att' },
      { name: 'Optimum', href: '/providers/optimum' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Why wandb', href: '/why-wandb' },
      { name: 'Contact', href: '/contact' },
      { name: 'FAQ', href: '/faq' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy-policy' },
      { name: 'Terms & Conditions', href: '/terms-and-conditions' },
      { name: 'Disclosures', href: '/disclosures' },
      { name: 'Accessibility', href: '/accessibility' },
      { name: 'Sitemap', href: '/sitemap' },
    ],
  },
} as const

export type Provider = keyof typeof siteConfig.providers
