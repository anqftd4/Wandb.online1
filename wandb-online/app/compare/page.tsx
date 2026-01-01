import { Metadata } from 'next'
import { siteConfig } from '@/lib/siteConfig'
import { SignalBackground } from '@/components/SignalBackground'
import { ZipSearchModule } from '@/components/ZipSearchModule'
import { ComparisonTable } from '@/components/ComparisonTable'
import { StickyCallBar } from '@/components/StickyCallBar'
import { FloatingCallButton } from '@/components/FloatingCallButton'
import { Reveal } from '@/components/Reveal'

export const metadata: Metadata = {
  title: 'Compare Internet Plans',
  description: 'Compare internet plans from major providers. Filter by speed, price, and features to find the right option for your needs.',
}

export default function ComparePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <SignalBackground variant="section" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <Reveal>
              <h1 className="font-display font-bold text-4xl sm:text-5xl text-slate-900 dark:text-white mb-6">
                Compare Internet Plans
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                Explore sample plans from major providers. Filter by your needs and call to 
                confirm actual pricing and availability at your address.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <ZipSearchModule variant="compact" />
          </Reveal>
        </div>
      </section>

      {/* Why Pricing Varies Notice */}
      <section className="py-8 bg-slate-100 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Reveal>
              <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
                <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white mb-3">
                  Why Pricing Changes
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  The prices shown below are examples based on typical offers. Actual pricing depends on your 
                  specific address, current promotions, and the provider's terms. Prices can change without notice. 
                  Additionally, introductory rates often differ from regular rates. Always call to confirm the 
                  current offer available to you.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ComparisonTable />
        </div>
      </section>

      {/* What We Do / Don't Do */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Reveal>
              <h2 className="font-display font-bold text-2xl text-slate-900 dark:text-white mb-8 text-center">
                What We Do & What We Don't Do
              </h2>
            </Reveal>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Reveal delay={0.1}>
                <div className="p-6 rounded-2xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
                  <h3 className="font-bold text-green-700 dark:text-green-400 mb-4">What We Do</h3>
                  <ul className="space-y-3 text-green-800 dark:text-green-300 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="mt-1">✓</span>
                      <span>Provide an overview of typical internet and TV options</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1">✓</span>
                      <span>Help you understand general plan differences</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1">✓</span>
                      <span>Connect you by phone to confirm availability</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1">✓</span>
                      <span>Operate transparently as an independent service</span>
                    </li>
                  </ul>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="p-6 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                  <h3 className="font-bold text-slate-700 dark:text-slate-300 mb-4">What We Don't Do</h3>
                  <ul className="space-y-3 text-slate-600 dark:text-slate-400 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="mt-1">✗</span>
                      <span>We are not the internet or TV provider</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1">✗</span>
                      <span>We cannot guarantee specific prices or availability</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1">✗</span>
                      <span>We do not process orders or installations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1">✗</span>
                      <span>We are not affiliated with or endorsed by providers</span>
                    </li>
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <StickyCallBar />
      <FloatingCallButton />
    </>
  )
}
