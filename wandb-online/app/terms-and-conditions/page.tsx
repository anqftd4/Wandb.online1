import { Metadata } from 'next'
import { FileText } from 'lucide-react'
import { siteConfig } from '@/lib/siteConfig'
import { Reveal } from '@/components/Reveal'

export const metadata: Metadata = {
  title: 'Terms and Conditions',
  description: 'Terms and conditions for using wandb.online - an independent internet and TV comparison service.',
}

export default function TermsPage() {
  const lastUpdated = 'January 1, 2026'

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Header */}
      <section className="pt-32 pb-12 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-8 h-8 text-brand-500" />
              <span className="text-sm text-slate-500 dark:text-slate-400">Legal</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white mb-4">
              Terms and Conditions
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-slate-600 dark:text-slate-400">
              Last updated: {lastUpdated}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <Reveal>
              <h2>Agreement to Terms</h2>
              <p>
                By accessing or using {siteConfig.name} ({siteConfig.url}), you agree to be 
                bound by these Terms and Conditions. If you disagree with any part of these 
                terms, you may not access our website.
              </p>
            </Reveal>

            <Reveal>
              <h2>Description of Service</h2>
              <p>
                {siteConfig.name} is an independent comparison and information service that 
                helps consumers explore internet and TV service options. We provide information 
                about various providers, example pricing, and plan features.
              </p>
              <p>
                <strong>Important:</strong> We are not a provider of internet or TV services. 
                We are not affiliated with, endorsed by, or authorized agents of any provider. 
                We operate independently as a comparison service.
              </p>
            </Reveal>

            <Reveal>
              <h2>Information Accuracy</h2>
              <p>
                While we strive to provide accurate and up-to-date information, we make no 
                representations or warranties about the accuracy, completeness, or reliability 
                of any information on our website. All pricing and plan details shown are for 
                example purposes only.
              </p>
              <ul>
                <li>Actual pricing, availability, and terms vary by location</li>
                <li>Providers may change their offerings without notice</li>
                <li>You should verify all details directly with the provider before signing up</li>
                <li>Example pricing does not constitute an offer or guarantee</li>
              </ul>
            </Reveal>

            <Reveal>
              <h2>Referral Compensation</h2>
              <p>
                {siteConfig.name} may receive compensation when you sign up for services through 
                our referrals. This compensation helps us operate our comparison service. Our goal 
                is to provide helpful information regardless of which provider you choose.
              </p>
            </Reveal>

            <Reveal>
              <h2>Trademarks</h2>
              <p>
                All provider names, logos, and trademarks mentioned on this website are the 
                property of their respective owners. Their use on our website is for identification 
                purposes only and does not imply endorsement or affiliation.
              </p>
              <p>
                The {siteConfig.name} name and logo are our trademarks. You may not use our 
                trademarks without our prior written permission.
              </p>
            </Reveal>

            <Reveal>
              <h2>User Responsibilities</h2>
              <p>When using our website, you agree to:</p>
              <ul>
                <li>Provide accurate information when requested</li>
                <li>Use the website only for lawful purposes</li>
                <li>Not attempt to interfere with the website&apos;s operation</li>
                <li>Not copy, reproduce, or distribute our content without permission</li>
                <li>Not use automated systems to access our website</li>
              </ul>
            </Reveal>

            <Reveal>
              <h2>Third-Party Services</h2>
              <p>
                When you choose to sign up with a provider through our service, you will be 
                entering into a separate agreement with that provider. We are not a party to 
                that agreement and are not responsible for:
              </p>
              <ul>
                <li>The provider&apos;s services or customer service</li>
                <li>Billing disputes with the provider</li>
                <li>Service quality or availability</li>
                <li>Any issues arising from your relationship with the provider</li>
              </ul>
            </Reveal>

            <Reveal>
              <h2>Disclaimer of Warranties</h2>
              <p>
                Our website is provided &quot;as is&quot; and &quot;as available&quot; without warranties of 
                any kind, either express or implied. We do not warrant that:
              </p>
              <ul>
                <li>The website will be uninterrupted or error-free</li>
                <li>Information on the website is accurate or complete</li>
                <li>Any defects will be corrected</li>
                <li>The website is free of viruses or harmful components</li>
              </ul>
            </Reveal>

            <Reveal>
              <h2>Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, {siteConfig.name} shall not be liable 
                for any indirect, incidental, special, consequential, or punitive damages 
                arising from your use of our website or any services obtained through our 
                referrals.
              </p>
              <p>
                Our total liability for any claims arising from your use of our website shall 
                not exceed the amount you paid us in the twelve months prior to the claim, if any.
              </p>
            </Reveal>

            <Reveal>
              <h2>Indemnification</h2>
              <p>
                You agree to indemnify and hold harmless {siteConfig.name}, its officers, 
                directors, employees, and agents from any claims, damages, or expenses 
                arising from your use of our website or violation of these terms.
              </p>
            </Reveal>

            <Reveal>
              <h2>Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms and Conditions at any time. 
                Changes will be effective immediately upon posting to our website. Your 
                continued use of the website after changes constitutes acceptance of the 
                modified terms.
              </p>
            </Reveal>

            <Reveal>
              <h2>Governing Law</h2>
              <p>
                These Terms and Conditions shall be governed by and construed in accordance 
                with the laws of the United States, without regard to conflict of law principles.
              </p>
            </Reveal>

            <Reveal>
              <h2>Severability</h2>
              <p>
                If any provision of these Terms and Conditions is found to be unenforceable, 
                the remaining provisions will continue in full force and effect.
              </p>
            </Reveal>

            <Reveal>
              <h2>Contact Information</h2>
              <p>For questions about these Terms and Conditions, please contact us:</p>
              <ul>
                <li>Email: <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></li>
                <li>Phone: <a href={siteConfig.phoneLink}>{siteConfig.phone}</a></li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  )
}
