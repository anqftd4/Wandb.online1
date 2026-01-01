import { Metadata } from 'next'
import { AlertCircle, Building2, DollarSign, Shield, FileCheck } from 'lucide-react'
import { siteConfig } from '@/lib/siteConfig'
import { Reveal, StaggerContainer, StaggerItem } from '@/components/Reveal'

export const metadata: Metadata = {
  title: 'Disclosures',
  description: 'Important disclosures about wandb.online - our independence, compensation, and how we operate.',
}

const disclosures = [
  {
    icon: Building2,
    title: 'Independence Statement',
    content: `${siteConfig.name} is an independent comparison and information service. We are NOT affiliated with, endorsed by, sponsored by, or an authorized representative of any internet or TV service provider. We operate as a third-party comparison platform designed to help consumers explore their options.`,
  },
  {
    icon: DollarSign,
    title: 'Compensation Disclosure',
    content: `${siteConfig.name} may receive compensation when you contact a provider or sign up for services through our referrals. This compensation helps fund our operations and allows us to provide our comparison service at no cost to you. Our compensation arrangements may vary by provider and do not influence our presentation of information.`,
  },
  {
    icon: Shield,
    title: 'Trademark Notice',
    content: 'All provider names, logos, trademarks, and service marks displayed on this website are the property of their respective owners. Their inclusion on our website is for informational and identification purposes only. We do not claim ownership of these marks, and their use does not imply any affiliation, endorsement, or sponsorship by the trademark owners.',
  },
  {
    icon: FileCheck,
    title: 'Pricing Disclaimer',
    content: 'All pricing information displayed on this website represents EXAMPLE pricing for illustrative purposes only. Actual pricing, availability, promotions, and terms vary significantly by location, are subject to change without notice, and may include additional fees, taxes, or equipment charges not shown. You must verify all pricing and terms directly with the provider before making any purchase decision.',
  },
]

export default function DisclosuresPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Header */}
      <section className="pt-32 pb-12 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle className="w-8 h-8 text-amber-500" />
              <span className="text-sm text-slate-500 dark:text-slate-400">Important Information</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white mb-4">
              Disclosures
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-slate-600 dark:text-slate-400">
              Transparency is important to us. Please review these important disclosures 
              about who we are and how we operate.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Disclosures */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="space-y-8">
            {disclosures.map((disclosure) => (
              <StaggerItem key={disclosure.title}>
                <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-900/40 
                                   flex items-center justify-center flex-shrink-0">
                      <disclosure.icon className="w-6 h-6 text-amber-600 dark:text-amber-400" />
                    </div>
                    <div>
                      <h2 className="font-display font-bold text-xl text-slate-900 dark:text-white mb-3">
                        {disclosure.title}
                      </h2>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        {disclosure.content}
                      </p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-12 bg-slate-100 dark:bg-slate-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-display font-bold text-2xl text-slate-900 dark:text-white mb-6">
              Additional Information
            </h2>
          </Reveal>
          
          <div className="space-y-6">
            <Reveal>
              <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
                <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white mb-3">
                  How We Present Information
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  We strive to present information fairly and objectively. The order in which 
                  providers or plans appear on our website is not necessarily based on ranking 
                  or recommendation. We encourage you to explore all options and choose what 
                  best meets your specific needs.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
                <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white mb-3">
                  Our Role
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {siteConfig.name} serves as an information resource. When you contact us or 
                  express interest in a provider&apos;s services, we may connect you with the 
                  provider or their authorized representatives. The final service agreement 
                  is between you and the provider, and we are not a party to that agreement.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
                <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white mb-3">
                  Availability
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Not all providers or plans are available in all areas. Service availability 
                  depends on your specific address and may be affected by factors including 
                  infrastructure, local regulations, and provider coverage areas. Always verify 
                  availability at your address before making decisions.
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
                <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white mb-3">
                  Information Updates
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  We make reasonable efforts to keep our information current, but provider 
                  offerings change frequently. Information on our website may not reflect 
                  the most recent updates from providers. Always confirm current offerings 
                  directly with the provider.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="p-6 rounded-2xl bg-brand-50 dark:bg-brand-900/20 border border-brand-200 dark:border-brand-800">
              <h3 className="font-display font-bold text-lg text-brand-900 dark:text-brand-200 mb-3">
                Questions About These Disclosures?
              </h3>
              <p className="text-brand-800 dark:text-brand-300 mb-4">
                If you have questions about these disclosures or how we operate, 
                please don&apos;t hesitate to contact us.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href={`mailto:${siteConfig.email}`}
                  className="text-brand-700 dark:text-brand-400 font-medium hover:underline"
                >
                  {siteConfig.email}
                </a>
                <a 
                  href={siteConfig.phoneLink}
                  className="text-brand-700 dark:text-brand-400 font-medium hover:underline"
                >
                  {siteConfig.phone}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
