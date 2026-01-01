import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, Tag, Clock, Sparkles, AlertCircle } from 'lucide-react'
import { siteConfig } from '@/lib/siteConfig'
import { SignalBackground } from '@/components/SignalBackground'
import { ZipSearchModule } from '@/components/ZipSearchModule'
import { StickyCallBar } from '@/components/StickyCallBar'
import { FloatingCallButton } from '@/components/FloatingCallButton'
import { Reveal, StaggerContainer, StaggerItem } from '@/components/Reveal'

export const metadata: Metadata = {
  title: 'Current Deals & Offers',
  description: 'Explore sample internet and TV deals from major providers. Call to confirm current promotions available at your address.',
}

const sampleDeals = [
  {
    provider: 'Verizon',
    color: '#ee0000',
    title: 'Fios New Customer Offer',
    description: 'Sample offer for new Fios customers with 300 Mbps speeds.',
    price: 'Starting at $49.99/mo',
    features: ['300 Mbps speeds', 'No annual contract option', 'Free router for 12 months'],
    tag: 'Popular',
  },
  {
    provider: 'Spectrum',
    color: '#0075c9',
    title: 'Internet + TV Bundle',
    description: 'Sample bundle combining internet and TV service.',
    price: 'Starting at $89.98/mo',
    features: ['300 Mbps internet', '125+ TV channels', 'Free modem'],
    tag: 'Bundle',
  },
  {
    provider: 'AT&T',
    color: '#00a8e0',
    title: 'Fiber Autopay Discount',
    description: 'Sample discount when you set up autopay on fiber plans.',
    price: 'Starting at $55/mo',
    features: ['300 Mbps fiber', 'Autopay required', 'Unlimited data'],
    tag: 'Savings',
  },
  {
    provider: 'Optimum',
    color: '#ff6900',
    title: 'First Year Promo',
    description: 'Sample promotional pricing for the first 12 months.',
    price: 'Starting at $40/mo',
    features: ['300 Mbps speeds', 'First year pricing', 'No annual contract'],
    tag: 'Promo',
  },
]

export default function DealsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <SignalBackground variant="section" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
                             bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-400 
                             text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                Sample Offers
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="font-display font-bold text-4xl sm:text-5xl text-slate-900 dark:text-white mb-6">
                Current Deals & Offers
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                Browse sample deals from major providers. These are examples of typical offers—
                call to confirm what is currently available at your address.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.3}>
            <ZipSearchModule variant="compact" />
          </Reveal>
        </div>
      </section>

      {/* Disclaimer Banner */}
      <section className="py-6 bg-amber-50 dark:bg-amber-900/20 border-y border-amber-200 dark:border-amber-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4">
            <AlertCircle className="w-6 h-6 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-amber-800 dark:text-amber-200 font-medium">
                Deals shown are examples only
              </p>
              <p className="text-amber-700 dark:text-amber-300 text-sm mt-1">
                Actual offers depend on your location, provider availability, and current promotions. 
                Prices and terms change frequently. Call to verify.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Deals Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid md:grid-cols-2 gap-8">
            {sampleDeals.map((deal) => (
              <StaggerItem key={deal.title}>
                <div className="card-interactive overflow-hidden h-full">
                  {/* Provider Header */}
                  <div 
                    className="px-6 py-4 flex items-center justify-between"
                    style={{ backgroundColor: `${deal.color}15` }}
                  >
                    <span 
                      className="font-display font-bold text-lg"
                      style={{ color: deal.color }}
                    >
                      {deal.provider}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white dark:bg-slate-800 
                                    text-slate-700 dark:text-slate-300 shadow-sm">
                      {deal.tag}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white mb-2">
                      {deal.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4">
                      {deal.description}
                    </p>

                    <div className="mb-6">
                      <span className="font-display font-bold text-2xl text-slate-900 dark:text-white">
                        {deal.price}
                      </span>
                      <span className="text-slate-500 text-sm ml-2">*example pricing</span>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {deal.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                          <Tag className="w-4 h-4 text-brand-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href={siteConfig.phoneLink}
                      className="btn-primary w-full flex items-center justify-center gap-2"
                    >
                      <Phone className="w-4 h-4" />
                      Call to Confirm Offer
                    </a>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Why Deals Change */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Reveal>
              <h2 className="font-display font-bold text-2xl text-slate-900 dark:text-white mb-6 text-center">
                Why Deals Change Frequently
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <p>
                  Internet and TV providers regularly update their promotional offers based on market 
                  conditions, seasonal campaigns, and regional availability. This means the deals you 
                  see online—including on this page—may not reflect what is currently available.
                </p>
                <p>
                  Additionally, pricing often varies significantly by address. Two homes in the same 
                  ZIP code might have different provider options and pricing tiers. That is why we 
                  always recommend calling to confirm exact availability and current offers.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-brand-600 to-cyan-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="font-display font-bold text-3xl text-white mb-4">
              Want to Know What's Available at Your Address?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-white/80 mb-8 text-lg">
              Call now to speak with a specialist who can check current deals for your specific location.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <a
              href={siteConfig.phoneLink}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white rounded-xl 
                        font-bold text-lg text-brand-600 hover:scale-105 transition-transform"
            >
              <Phone className="w-5 h-5" />
              {siteConfig.phone}
            </a>
          </Reveal>
        </div>
      </section>

      <StickyCallBar />
      <FloatingCallButton />
    </>
  )
}
