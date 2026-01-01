import { Metadata } from 'next'
import { Accessibility, Phone, Mail, CheckCircle } from 'lucide-react'
import { siteConfig } from '@/lib/siteConfig'
import { Reveal, StaggerContainer, StaggerItem } from '@/components/Reveal'

export const metadata: Metadata = {
  title: 'Accessibility Statement',
  description: 'Our commitment to digital accessibility at wandb.online.',
}

const accessibilityFeatures = [
  'Semantic HTML structure for screen reader compatibility',
  'Keyboard navigation support throughout the website',
  'Sufficient color contrast ratios for readability',
  'Alternative text for meaningful images',
  'Clear and consistent navigation',
  'Resizable text without loss of functionality',
  'Focus indicators for interactive elements',
  'Skip navigation links for keyboard users',
  'ARIA labels where appropriate',
  'Reduced motion options for users who prefer less animation',
]

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Header */}
      <section className="pt-32 pb-12 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex items-center gap-3 mb-4">
              <Accessibility className="w-8 h-8 text-brand-500" />
              <span className="text-sm text-slate-500 dark:text-slate-400">Commitment</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white mb-4">
              Accessibility Statement
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-slate-600 dark:text-slate-400">
              {siteConfig.name} is committed to ensuring digital accessibility for people 
              with disabilities.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="prose prose-slate dark:prose-invert max-w-none mb-12">
              <h2>Our Commitment</h2>
              <p>
                We believe everyone should have equal access to information and functionality 
                on the web. We are actively working to increase the accessibility and usability 
                of our website and hold ourselves to a high standard of accessibility.
              </p>
              <p>
                Our ongoing accessibility effort works towards conformance with the Web Content 
                Accessibility Guidelines (WCAG) 2.1 Level AA standards. These guidelines explain 
                how to make web content more accessible for people with disabilities.
              </p>
            </div>
          </Reveal>

          {/* Features */}
          <Reveal>
            <h2 className="font-display font-bold text-2xl text-slate-900 dark:text-white mb-6">
              Accessibility Features
            </h2>
          </Reveal>
          
          <div className="mb-12">
            <StaggerContainer className="grid sm:grid-cols-2 gap-3">
              {accessibilityFeatures.map((feature) => (
                <StaggerItem key={feature}>
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-800">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          <Reveal>
            <div className="prose prose-slate dark:prose-invert max-w-none mb-12">
              <h2>Assistive Technology</h2>
              <p>
                Our website is designed to be compatible with the following assistive technologies:
              </p>
              <ul>
                <li>Screen readers (such as NVDA, JAWS, and VoiceOver)</li>
                <li>Screen magnification software</li>
                <li>Speech recognition software</li>
                <li>Keyboard-only navigation</li>
              </ul>

              <h2>Known Limitations</h2>
              <p>
                While we strive for comprehensive accessibility, some content may have limitations:
              </p>
              <ul>
                <li>Third-party content or embedded services may not meet the same accessibility standards</li>
                <li>Some older PDF documents may not be fully accessible</li>
                <li>Live chat features, if implemented, may have varying accessibility support</li>
              </ul>
              <p>
                We are continuously working to identify and address accessibility issues 
                across our website.
              </p>

              <h2>Browser Compatibility</h2>
              <p>
                Our website is designed to work with current versions of major browsers including:
              </p>
              <ul>
                <li>Google Chrome</li>
                <li>Mozilla Firefox</li>
                <li>Apple Safari</li>
                <li>Microsoft Edge</li>
              </ul>
              <p>
                For the best experience, we recommend keeping your browser updated to the 
                latest version.
              </p>
            </div>
          </Reveal>

          {/* Feedback */}
          <Reveal>
            <div className="p-6 rounded-2xl bg-brand-50 dark:bg-brand-900/20 border border-brand-200 dark:border-brand-800">
              <h2 className="font-display font-bold text-xl text-brand-900 dark:text-brand-200 mb-4">
                Feedback and Contact
              </h2>
              <p className="text-brand-800 dark:text-brand-300 mb-6">
                We welcome your feedback on the accessibility of {siteConfig.name}. If you 
                encounter any accessibility barriers or have suggestions for improvement, 
                please let us know.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-brand-100 dark:bg-brand-800 
                                 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-brand-600 dark:text-brand-400" />
                  </div>
                  <div>
                    <p className="text-sm text-brand-700 dark:text-brand-400">Phone</p>
                    <a 
                      href={siteConfig.phoneLink}
                      className="font-medium text-brand-900 dark:text-brand-200 hover:underline"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-brand-100 dark:bg-brand-800 
                                 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-brand-600 dark:text-brand-400" />
                  </div>
                  <div>
                    <p className="text-sm text-brand-700 dark:text-brand-400">Email</p>
                    <a 
                      href={`mailto:${siteConfig.email}`}
                      className="font-medium text-brand-900 dark:text-brand-200 hover:underline"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="mt-8 prose prose-slate dark:prose-invert max-w-none">
              <h2>Response Time</h2>
              <p>
                We aim to respond to accessibility feedback within 2-3 business days. 
                If you need immediate assistance, please call us during our business hours: 
                {siteConfig.hours}.
              </p>

              <h2>Continuous Improvement</h2>
              <p>
                We are committed to ongoing accessibility improvements and regularly review 
                our website against accessibility standards. This statement was last reviewed 
                and updated in January 2026.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
