import { Metadata } from 'next'
import Link from 'next/link'
import { Map, Home, BarChart2, Tag, Tv, Package, Users, HelpCircle, Phone, Info, Shield, FileText, AlertCircle, Accessibility, Building2 } from 'lucide-react'
import { siteConfig } from '@/lib/siteConfig'
import { Reveal, StaggerContainer, StaggerItem } from '@/components/Reveal'

export const metadata: Metadata = {
  title: 'Sitemap',
  description: 'Complete sitemap for wandb.online - find all pages on our website.',
}

const sitemapSections = [
  {
    title: 'Main Pages',
    links: [
      { href: '/', label: 'Home', icon: Home, description: 'Start your search for internet and TV services' },
      { href: '/compare', label: 'Compare Plans', icon: BarChart2, description: 'Compare plans from different providers' },
      { href: '/deals', label: 'Current Deals', icon: Tag, description: 'Browse sample promotional offers' },
      { href: '/tv', label: 'TV Packages', icon: Tv, description: 'Explore TV channel packages' },
      { href: '/bundles', label: 'Bundles', icon: Package, description: 'Internet and TV bundle options' },
    ],
  },
  {
    title: 'About Us',
    links: [
      { href: '/why-wandb', label: 'Why wandb.online', icon: Users, description: 'Learn why to use our service' },
      { href: '/about', label: 'About Us', icon: Info, description: 'Learn about our company' },
      { href: '/contact', label: 'Contact', icon: Phone, description: 'Get in touch with our team' },
      { href: '/faq', label: 'FAQ', icon: HelpCircle, description: 'Frequently asked questions' },
    ],
  },
  {
    title: 'Provider Information',
    links: [
      { href: '/providers/verizon', label: 'Verizon', icon: Building2, description: 'Verizon service information' },
      { href: '/providers/spectrum', label: 'Spectrum', icon: Building2, description: 'Spectrum service information' },
      { href: '/providers/att', label: 'AT&T', icon: Building2, description: 'AT&T service information' },
      { href: '/providers/optimum', label: 'Optimum', icon: Building2, description: 'Optimum service information' },
    ],
  },
  {
    title: 'Legal & Policies',
    links: [
      { href: '/privacy-policy', label: 'Privacy Policy', icon: Shield, description: 'How we handle your data' },
      { href: '/terms-and-conditions', label: 'Terms & Conditions', icon: FileText, description: 'Terms of using our service' },
      { href: '/disclosures', label: 'Disclosures', icon: AlertCircle, description: 'Important disclosures about our service' },
      { href: '/accessibility', label: 'Accessibility', icon: Accessibility, description: 'Our accessibility commitment' },
    ],
  },
]

export default function SitemapPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Header */}
      <section className="pt-32 pb-12 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex items-center gap-3 mb-4">
              <Map className="w-8 h-8 text-brand-500" />
              <span className="text-sm text-slate-500 dark:text-slate-400">Navigation</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white mb-4">
              Sitemap
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-slate-600 dark:text-slate-400">
              Find all pages available on {siteConfig.name}.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {sitemapSections.map((section, sectionIndex) => (
              <Reveal key={section.title} delay={sectionIndex * 0.1}>
                <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                  <h2 className="font-display font-bold text-xl text-slate-900 dark:text-white mb-4">
                    {section.title}
                  </h2>
                  <StaggerContainer className="space-y-3">
                    {section.links.map((link) => (
                      <StaggerItem key={link.href}>
                        <Link
                          href={link.href}
                          className="group flex items-start gap-3 p-3 -m-3 rounded-xl 
                                    hover:bg-white dark:hover:bg-slate-700 transition-colors"
                        >
                          <div className="w-8 h-8 rounded-lg bg-brand-100 dark:bg-brand-900/40 
                                         flex items-center justify-center flex-shrink-0
                                         group-hover:bg-brand-200 dark:group-hover:bg-brand-800 transition-colors">
                            <link.icon className="w-4 h-4 text-brand-600 dark:text-brand-400" />
                          </div>
                          <div>
                            <p className="font-medium text-slate-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                              {link.label}
                            </p>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                              {link.description}
                            </p>
                          </div>
                        </Link>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* XML Sitemap Note */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Looking for the XML sitemap for search engines? Visit{' '}
                <a href="/sitemap.xml" className="text-brand-600 dark:text-brand-400 hover:underline">
                  /sitemap.xml
                </a>
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
