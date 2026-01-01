import { Metadata } from 'next'
import { Phone, Package, Wifi, Tv, Smartphone, Check, ArrowRight } from 'lucide-react'
import { siteConfig } from '@/lib/siteConfig'
import { SignalBackground } from '@/components/SignalBackground'
import { StickyCallBar } from '@/components/StickyCallBar'
import { FloatingCallButton } from '@/components/FloatingCallButton'
import { Reveal, StaggerContainer, StaggerItem } from '@/components/Reveal'

export const metadata: Metadata = {
  title: 'Bundle Deals - Internet + TV',
  description: 'Explore internet and TV bundle options from major providers. Combine services and potentially save. Call to confirm availability.',
}

const bundleTypes = [
  {
    icon: Wifi,
    title: 'Internet + TV',
    description: 'The most popular bundle. Combine high-speed internet with your favorite channels.',
  },
  {
    icon: Smartphone,
    title: 'Internet + Mobile',
    description: 'Some providers offer discounts when you add mobile service to your internet plan.',
  },
  {
    icon: Package,
    title: 'Triple Play',
    description: 'Internet, TV, and phone service combined into one package.',
  },
]

const sampleBundles = [
  {
    provider: 'Verizon',
    color: '#ee0000',
    name: 'Fios Internet + TV Bundle',
    internet: '300 Mbps',
    tv: '125+ channels',
    price: '$119.99/mo',
    savings: 'Example: save vs. separate',
    features: ['No annual contract option', 'Free router for 12 mo', 'DVR included'],
  },
  {
    provider: 'Spectrum',
    color: '#0075c9',
    name: 'Internet + TV Select',
    internet: '300 Mbps',
    tv: '125+ channels',
    price: '$109.98/mo',
    savings: 'Example bundle pricing',
    features: ['No contracts', 'Free modem', 'DVR service included'],
  },
  {
    provider: 'AT&T',
    color: '#00a8e0',
    name: 'Fiber + Entertainment',
    internet: '300 Mbps Fiber',
    tv: '160+ channels',
    price: '$125/mo',
    savings: 'Example with autopay',
    features: ['Symmetrical speeds', 'HBO Max included', 'Cloud DVR'],
  },
  {
    provider: 'Optimum',
    color: '#ff6900',
    name: 'Internet + Select TV',
    internet: '300 Mbps',
    tv: '170+ channels',
    price: '$115/mo',
    savings: 'Example first year price',
    features: ['No annual contract', 'WiFi 6 router', 'Sports included'],
  },
]

export default function BundlesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <SignalBackground variant="section" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
                             bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400 
                             text-sm font-medium mb-6">
                <Package className="w-4 h-4" />
                Bundle Options
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="font-display font-bold text-4xl sm:text-5xl text-slate-900 dark:text-white mb-6">
                Internet + TV Bundles
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
                Combining services into a bundle can sometimes offer savings and convenience. 
                Explore sample bundles below and call to confirm what is available at your address.
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

      {/* Bundle Types */}
      <section className="py-16 bg-slate-100 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-display font-bold text-2xl text-slate-900 dark:text-white mb-8 text-center">
              Types of Bundles
            </h2>
          </Reveal>
          
          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {bundleTypes.map((type) => (
              <StaggerItem key={type.title}>
                <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 h-full">
                  <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/40 
                                 flex items-center justify-center mb-4">
                    <type.icon className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white mb-2">
                    {type.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    {type.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Sample Bundles */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-display font-bold text-2xl text-slate-900 dark:text-white mb-4 text-center">
              Sample Bundle Packages
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-center text-slate-500 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
              These are example bundles for illustration. Actual pricing and availability vary by location.
            </p>
          </Reveal>

          <StaggerContainer className="grid lg:grid-cols-2 gap-8">
            {sampleBundles.map((bundle) => (
              <StaggerItem key={bundle.name}>
                <div className="card-interactive overflow-hidden h-full">
                  {/* Header */}
                  <div 
                    className="px-6 py-4 flex items-center justify-between"
                    style={{ backgroundColor: `${bundle.color}15` }}
                  >
                    <span 
                      className="font-display font-bold text-lg"
                      style={{ color: bundle.color }}
                    >
                      {bundle.provider}
                    </span>
                    <span className="text-sm text-slate-500">{bundle.savings}</span>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white mb-4">
                      {bundle.name}
                    </h3>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800">
                        <div className="flex items-center gap-2 mb-1">
                          <Wifi className="w-4 h-4 text-brand-500" />
                          <span className="text-sm text-slate-500">Internet</span>
                        </div>
                        <p className="font-bold text-slate-900 dark:text-white">{bundle.internet}</p>
                      </div>
                      <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800">
                        <div className="flex items-center gap-2 mb-1">
                          <Tv className="w-4 h-4 text-purple-500" />
                          <span className="text-sm text-slate-500">TV</span>
                        </div>
                        <p className="font-bold text-slate-900 dark:text-white">{bundle.tv}</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <span className="font-display font-bold text-3xl text-slate-900 dark:text-white">
                        {bundle.price}
                      </span>
                      <span className="text-slate-500 text-sm ml-2">*example pricing</span>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {bundle.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                          <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href={siteConfig.phoneLink}
                      className="btn-primary w-full flex items-center justify-center gap-2"
                    >
                      <Phone className="w-4 h-4" />
                      Call to Confirm Bundle
                    </a>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Why Bundle */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-display font-bold text-2xl text-slate-900 dark:text-white mb-6 text-center">
              Benefits of Bundling
            </h2>
          </Reveal>
          <StaggerContainer className="space-y-4">
            <StaggerItem>
              <div className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-1">One Bill</h4>
                <p className="text-slate-600 dark:text-slate-400">Simplify your monthly payments with a single statement.</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Potential Savings</h4>
                <p className="text-slate-600 dark:text-slate-400">Bundles may offer lower combined pricing than separate services.</p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                <h4 className="font-semibold text-slate-900 dark:text-white mb-1">One Provider</h4>
                <p className="text-slate-600 dark:text-slate-400">Deal with one company for support and service questions.</p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      <StickyCallBar />
      <FloatingCallButton />
    </>
  )
}
