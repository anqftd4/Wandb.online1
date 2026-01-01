import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight, Wifi, Tv, Package, Shield, Clock, Users, CheckCircle2 } from 'lucide-react'
import { siteConfig } from '@/lib/siteConfig'
import { SignalBackground, WaveDivider } from '@/components/SignalBackground'
import { ZipSearchModule } from '@/components/ZipSearchModule'
import { Reveal, StaggerContainer, StaggerItem } from '@/components/Reveal'

export const metadata: Metadata = {
  title: `${siteConfig.name} - Compare Internet & TV Options`,
  description: 'Compare internet and TV options from major providers. Find plans that fit your needs and confirm availability at your address. Call to get connected today.',
}

const features = [
  {
    icon: Wifi,
    title: 'Internet Plans',
    description: 'Explore fiber, cable, and DSL options from major providers with speeds up to 1 Gbps.',
    href: '/compare',
  },
  {
    icon: Tv,
    title: 'TV Packages',
    description: 'Compare channel lineups, DVR features, and streaming options to find your perfect fit.',
    href: '/tv',
  },
  {
    icon: Package,
    title: 'Bundle Deals',
    description: 'Save with internet + TV combos. See what bundle options might be available in your area.',
    href: '/bundles',
  },
]

const benefits = [
  {
    icon: Shield,
    title: 'Independent & Transparent',
    description: 'We are not an internet provider. We help you compare options and connect with specialists.',
  },
  {
    icon: Clock,
    title: 'Save Time Researching',
    description: 'Get a quick overview of typical plans instead of visiting multiple provider websites.',
  },
  {
    icon: Users,
    title: 'Personal Assistance',
    description: 'Speak with a real person who can answer questions and confirm what is available at your address.',
  },
]

const steps = [
  { number: '01', title: 'Enter Your ZIP', description: 'See typical options in your area' },
  { number: '02', title: 'Compare Plans', description: 'Review speeds, features, and pricing' },
  { number: '03', title: 'Call to Confirm', description: 'Verify availability and current offers' },
]

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        <SignalBackground variant="hero" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <Reveal>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
                             bg-brand-100 dark:bg-brand-900/40 text-brand-600 dark:text-brand-400 
                             text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
                Independent Comparison Service
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl 
                           text-slate-900 dark:text-white mb-6 leading-tight">
                Find the Right
                <span className="block gradient-text dark:gradient-text-dark">
                  Internet & TV Plans
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto">
                Compare options from major providers, understand typical plan differences, 
                and connect by phone to confirm availability for your address.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <ZipSearchModule />
            </Reveal>

            <Reveal delay={0.4}>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <span className="text-slate-500 dark:text-slate-400">Or call directly:</span>
                <a
                  href={siteConfig.phoneLink}
                  className="inline-flex items-center gap-2 text-lg font-semibold 
                           text-brand-600 dark:text-brand-400 hover:underline"
                >
                  <Phone className="w-5 h-5" />
                  {siteConfig.phone}
                </a>
                <span className="text-slate-400 dark:text-slate-500 text-sm">
                  {siteConfig.hours}
                </span>
              </div>
            </Reveal>
          </div>
        </div>

        <WaveDivider className="absolute bottom-0 text-slate-100 dark:text-slate-800" />
      </section>

      {/* Features Section */}
      <section className="py-24 bg-slate-100 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white mb-4">
                What Are You Looking For?
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Explore different service categories to find options that match your needs.
              </p>
            </div>
          </Reveal>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <StaggerItem key={feature.title}>
                <Link href={feature.href} className="group block h-full">
                  <div className="card-interactive h-full p-8">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-500 to-cyan-500 
                                   flex items-center justify-center mb-6 
                                   shadow-lg shadow-brand-500/25 
                                   group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4">
                      {feature.description}
                    </p>
                    <span className="inline-flex items-center gap-2 text-brand-600 dark:text-brand-400 font-medium 
                                    group-hover:gap-3 transition-all">
                      Explore <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 relative overflow-hidden">
        <SignalBackground variant="section" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white mb-4">
                How It Works
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Getting started is simple. Here is our straightforward process.
              </p>
            </div>
          </Reveal>

          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <StaggerItem key={step.number}>
                <div className="relative text-center">
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 
                                   bg-gradient-to-r from-brand-500/50 to-transparent" />
                  )}
                  <div className="relative inline-flex items-center justify-center w-24 h-24 
                                 rounded-full bg-white dark:bg-slate-800 
                                 border-4 border-brand-500 mb-6 
                                 shadow-xl shadow-brand-500/20">
                    <span className="font-display font-bold text-3xl text-brand-500">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    {step.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Reveal>
                <h2 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white mb-6">
                  Why Use Our Service?
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
                  We are an independent comparison service—not an internet or TV provider. 
                  Our goal is to help you explore your options and connect you with specialists 
                  who can confirm what is available at your specific address.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <a
                  href={siteConfig.phoneLink}
                  className="btn-primary inline-flex items-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call {siteConfig.phone}
                </a>
              </Reveal>
            </div>

            <StaggerContainer className="space-y-6" delayChildren={0.2}>
              {benefits.map((benefit) => (
                <StaggerItem key={benefit.title}>
                  <div className="flex gap-5 p-6 rounded-2xl bg-white dark:bg-slate-800 
                                 border border-slate-200 dark:border-slate-700
                                 shadow-lg shadow-slate-200/50 dark:shadow-slate-900/50">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl 
                                   bg-brand-100 dark:bg-brand-900/40 
                                   flex items-center justify-center">
                      <benefit.icon className="w-6 h-6 text-brand-600 dark:text-brand-400" />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white mb-1">
                        {benefit.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Provider Logos / Trust Section */}
      <section className="py-16 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <p className="text-center text-sm text-slate-500 dark:text-slate-400 mb-8">
              Compare options from major providers
            </p>
          </Reveal>
          <StaggerContainer className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {Object.entries(siteConfig.providers).map(([key, provider]) => (
              <StaggerItem key={key}>
                <Link 
                  href={`/providers/${key}`}
                  className="text-xl font-display font-bold transition-colors"
                  style={{ color: provider.color }}
                >
                  {provider.name}
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <Reveal delay={0.3}>
            <p className="text-center text-xs text-slate-400 dark:text-slate-500 mt-8">
              Provider names are trademarks of their respective owners. We are not affiliated with these providers.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-600 to-cyan-600" />
        <SignalBackground variant="hero" className="opacity-30" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-6">
              Ready to Find Your Perfect Plan?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-xl text-white/80 mb-10">
              Call now to speak with a specialist who can confirm availability 
              and current offers for your address.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <a
              href={siteConfig.phoneLink}
              className="inline-flex items-center gap-3 px-10 py-5 
                        bg-white rounded-2xl font-bold text-xl text-brand-600
                        shadow-2xl shadow-black/20
                        hover:scale-105 transition-transform duration-300"
            >
              <Phone className="w-6 h-6" />
              {siteConfig.phone}
            </a>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-6 text-white/60">
              {siteConfig.hours}
            </p>
          </Reveal>
        </div>
      </section>
    </>
  )
}
