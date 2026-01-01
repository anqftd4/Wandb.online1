'use client'

import { useEffect, useState } from 'react'
import { Metadata } from 'next'
import { Phone, Wifi, Tv, Check, ArrowRight } from 'lucide-react'
import { siteConfig } from '@/lib/siteConfig'
import { SignalBackground } from '@/components/SignalBackground'
import { ProviderPopup } from '@/components/ProviderPopup'
import { StickyCallBar } from '@/components/StickyCallBar'
import { FloatingCallButton } from '@/components/FloatingCallButton'
import { Reveal, StaggerContainer, StaggerItem } from '@/components/Reveal'

const providerData = siteConfig.providers.optimum

const samplePlans = [
  {
    name: 'Optimum 300',
    speed: '300 Mbps',
    price: '$40/mo',
    features: ['No annual contract', 'WiFi included', 'Smart Router'],
  },
  {
    name: 'Optimum 500',
    speed: '500 Mbps',
    price: '$60/mo',
    features: ['No annual contract', 'Great for streaming', 'WiFi 6 router'],
  },
  {
    name: 'Optimum 1 Gig',
    speed: '940 Mbps',
    price: '$80/mo',
    features: ['No annual contract', 'Fiber speeds available', 'Whole-home WiFi'],
  },
]

export default function OptimumPage() {
  const [popupOpen, setPopupOpen] = useState(true)

  return (
    <>
      <ProviderPopup
        provider="optimum"
        isOpen={popupOpen}
        onClose={() => setPopupOpen(false)}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <SignalBackground variant="section" />
        
        {/* Provider-tinted vignette */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            background: `radial-gradient(ellipse at center, ${providerData.color}40, transparent 70%)`,
          }}
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Reveal>
              <h1 className="font-display font-bold text-4xl sm:text-5xl text-slate-900 dark:text-white mb-6">
                <span style={{ color: providerData.color }}>{providerData.name}</span> Internet Plans
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
                Explore sample {providerData.name} internet plans. Actual availability and pricing 
                depend on your location. Call to confirm options at your address.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <a
                href={siteConfig.phoneLink}
                className="btn-primary inline-flex items-center gap-2"
                style={{ backgroundColor: providerData.color }}
              >
                <Phone className="w-5 h-5" />
                Call {siteConfig.phone}
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-4 bg-amber-50 dark:bg-amber-900/20 border-y border-amber-200 dark:border-amber-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-amber-800 dark:text-amber-200 text-center">
            <strong>Note:</strong> {siteConfig.name} is an independent comparison service, not affiliated with {providerData.name}. 
            Pricing shown is for example purposes only. {providerData.name} is a trademark of its respective owner.
          </p>
        </div>
      </section>

      {/* Sample Plans */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-display font-bold text-2xl text-slate-900 dark:text-white mb-4 text-center">
              Sample {providerData.name} Plans
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-center text-slate-500 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
              These are example plans for illustration. Verify current offers by calling.
            </p>
          </Reveal>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {samplePlans.map((plan, index) => (
              <StaggerItem key={plan.name}>
                <div className="card-interactive p-6 h-full flex flex-col">
                  <div 
                    className="w-full h-2 rounded-full mb-6"
                    style={{ backgroundColor: providerData.color }}
                  />
                  
                  <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white mb-2">
                    {plan.name}
                  </h3>
                  
                  <div className="flex items-baseline gap-2 mb-4">
                    <Wifi className="w-5 h-5" style={{ color: providerData.color }} />
                    <span className="font-bold text-2xl text-slate-900 dark:text-white">{plan.speed}</span>
                  </div>
                  
                  <div className="mb-6">
                    <span className="font-display font-bold text-3xl text-slate-900 dark:text-white">
                      {plan.price}
                    </span>
                    <span className="text-slate-500 text-sm ml-2">*example</span>
                  </div>
                  
                  <ul className="space-y-2 mb-6 flex-grow">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                        <Check className="w-4 h-4 flex-shrink-0" style={{ color: providerData.color }} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href={siteConfig.phoneLink}
                    className="btn-secondary w-full flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    Call to Verify
                  </a>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* About Provider */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-display font-bold text-2xl text-slate-900 dark:text-white mb-6 text-center">
              About {providerData.name}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="prose prose-slate dark:prose-invert max-w-none">
              <p>
                {providerData.name} (formerly Cablevision and Altice USA) provides cable and fiber 
                internet service primarily in the New York, New Jersey, and Connecticut tri-state 
                area, as well as parts of other states.
              </p>
              <p>
                {providerData.name} has been expanding its fiber-optic network, offering faster 
                speeds in areas where fiber is available. Their service typically includes no 
                annual contracts and comes with a WiFi router.
              </p>
              <p>
                Call to check availability and current offers at your specific address.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="font-display font-bold text-2xl text-slate-900 dark:text-white mb-4">
              Check {providerData.name} Availability
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-slate-600 dark:text-slate-400 mb-8">
              Call to verify if {providerData.name} is available at your address and get current pricing.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <a
              href={siteConfig.phoneLink}
              className="btn-primary inline-flex items-center gap-2"
              style={{ backgroundColor: providerData.color }}
            >
              <Phone className="w-5 h-5" />
              Call {siteConfig.phone}
            </a>
          </Reveal>
        </div>
      </section>

      <StickyCallBar />
      <FloatingCallButton />
    </>
  )
}
