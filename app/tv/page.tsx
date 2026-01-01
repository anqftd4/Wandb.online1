import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Tv, Monitor, Film, Trophy, Newspaper, Play } from 'lucide-react'
import { siteConfig } from '@/lib/siteConfig'
import { SignalBackground } from '@/components/SignalBackground'
import { StickyCallBar } from '@/components/StickyCallBar'
import { FloatingCallButton } from '@/components/FloatingCallButton'
import { Reveal, StaggerContainer, StaggerItem } from '@/components/Reveal'

export const metadata: Metadata = {
  title: 'TV Options & Packages',
  description: 'Explore TV packages from major providers. Compare channels, features, and bundle options. Call to confirm availability.',
}

const tvCategories = [
  { icon: Newspaper, name: 'News & Info', examples: 'CNN, Fox News, MSNBC, Bloomberg' },
  { icon: Trophy, name: 'Sports', examples: 'ESPN, Fox Sports, NFL Network, NBA TV' },
  { icon: Film, name: 'Movies', examples: 'HBO, Showtime, Starz, Cinemax' },
  { icon: Play, name: 'Entertainment', examples: 'USA, TNT, FX, Comedy Central' },
]

const samplePackages = [
  {
    provider: 'Verizon',
    color: '#ee0000',
    packages: [
      { name: 'Your Fios TV', channels: '125+', price: '$70/mo*', note: 'Customize your channel lineup' },
      { name: 'More Fios TV', channels: '300+', price: '$90/mo*', note: 'Includes sports and premium' },
      { name: 'The Most Fios TV', channels: '425+', price: '$110/mo*', note: 'Everything included' },
    ],
  },
  {
    provider: 'Spectrum',
    color: '#0075c9',
    packages: [
      { name: 'TV Select', channels: '125+', price: '$59.99/mo*', note: 'Popular channels included' },
      { name: 'TV Silver', channels: '175+', price: '$79.99/mo*', note: 'More sports and entertainment' },
      { name: 'TV Gold', channels: '200+', price: '$99.99/mo*', note: 'Premium channels included' },
    ],
  },
  {
    provider: 'AT&T',
    color: '#00a8e0',
    packages: [
      { name: 'Entertainment', channels: '160+', price: '$69.99/mo*', note: 'Great variety of channels' },
      { name: 'Choice', channels: '185+', price: '$84.99/mo*', note: 'Regional sports networks' },
      { name: 'Ultimate', channels: '250+', price: '$94.99/mo*', note: 'HBO Max included' },
    ],
  },
  {
    provider: 'Optimum',
    color: '#ff6900',
    packages: [
      { name: 'Core TV', channels: '100+', price: '$50/mo*', note: 'Essential channels' },
      { name: 'Select TV', channels: '170+', price: '$75/mo*', note: 'Sports and movies' },
      { name: 'Premier TV', channels: '340+', price: '$110/mo*', note: 'Premium everything' },
    ],
  },
]

export default function TVPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <SignalBackground variant="section" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
                             bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-400 
                             text-sm font-medium mb-6">
                <Tv className="w-4 h-4" />
                TV Options
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="font-display font-bold text-4xl sm:text-5xl text-slate-900 dark:text-white mb-6">
                Explore TV Packages
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
                Compare channel lineups and TV packages from major providers. These are sample options—
                call to confirm current packages and pricing for your address.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <a
                href={siteConfig.phoneLink}
                className="btn-primary inline-flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call {siteConfig.phone}
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Channel Categories */}
      <section className="py-16 bg-slate-100 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-display font-bold text-2xl text-slate-900 dark:text-white mb-8 text-center">
              Types of Channels Available
            </h2>
          </Reveal>
          
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tvCategories.map((cat) => (
              <StaggerItem key={cat.name}>
                <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
                  <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/40 
                                 flex items-center justify-center mb-4">
                    <cat.icon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white mb-2">
                    {cat.name}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Examples: {cat.examples}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Sample Packages by Provider */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-display font-bold text-2xl text-slate-900 dark:text-white mb-4 text-center">
              Sample TV Packages by Provider
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-center text-slate-500 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
              *Prices shown are examples. Actual pricing varies by location and current promotions.
            </p>
          </Reveal>

          <div className="space-y-12">
            {samplePackages.map((provider, idx) => (
              <Reveal key={provider.provider} delay={idx * 0.1}>
                <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700">
                  {/* Provider Header */}
                  <div 
                    className="px-6 py-4"
                    style={{ backgroundColor: `${provider.color}15` }}
                  >
                    <span 
                      className="font-display font-bold text-xl"
                      style={{ color: provider.color }}
                    >
                      {provider.provider}
                    </span>
                  </div>

                  {/* Packages Grid */}
                  <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200 dark:divide-slate-700">
                    {provider.packages.map((pkg) => (
                      <div key={pkg.name} className="p-6 bg-white dark:bg-slate-800">
                        <h4 className="font-display font-bold text-lg text-slate-900 dark:text-white mb-2">
                          {pkg.name}
                        </h4>
                        <p className="text-3xl font-bold text-slate-900 dark:text-white mb-1">
                          {pkg.channels}
                        </p>
                        <p className="text-sm text-slate-500 mb-3">channels</p>
                        <p className="text-brand-600 dark:text-brand-400 font-semibold mb-2">
                          {pkg.price}
                        </p>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                          {pkg.note}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-700">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                      <p className="text-sm text-slate-500">
                        Call to confirm current packages and pricing
                      </p>
                      <a
                        href={siteConfig.phoneLink}
                        className="btn-secondary flex items-center gap-2"
                      >
                        <Phone className="w-4 h-4" />
                        {siteConfig.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Streaming Note */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <Monitor className="w-12 h-12 mx-auto text-brand-500 mb-6" />
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display font-bold text-2xl text-slate-900 dark:text-white mb-4">
              Considering Streaming Instead?
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Many providers also offer streaming apps and on-demand content as part of their TV packages. 
              When you call, ask about streaming options and how they work with traditional TV service.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <Link href="/bundles" className="text-brand-600 dark:text-brand-400 font-medium hover:underline">
              Explore Bundle Options →
            </Link>
          </Reveal>
        </div>
      </section>

      <StickyCallBar />
      <FloatingCallButton />
    </>
  )
}
