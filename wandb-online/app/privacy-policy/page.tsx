import { Metadata } from 'next'
import { Shield } from 'lucide-react'
import { siteConfig } from '@/lib/siteConfig'
import { Reveal } from '@/components/Reveal'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for wandb.online - learn how we collect, use, and protect your information.',
}

export default function PrivacyPolicyPage() {
  const lastUpdated = 'January 1, 2026'

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {/* Header */}
      <section className="pt-32 pb-12 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-8 h-8 text-brand-500" />
              <span className="text-sm text-slate-500 dark:text-slate-400">Legal</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-slate-900 dark:text-white mb-4">
              Privacy Policy
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
              <h2>Introduction</h2>
              <p>
                {siteConfig.name} (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates the website {siteConfig.url} 
                (the &quot;Service&quot;). This Privacy Policy explains how we collect, use, disclose, and 
                safeguard your information when you visit our website.
              </p>
              <p>
                Please read this privacy policy carefully. If you do not agree with the terms 
                of this privacy policy, please do not access the site.
              </p>
            </Reveal>

            <Reveal>
              <h2>Information We Collect</h2>
              
              <h3>Information You Provide</h3>
              <p>We may collect information you voluntarily provide when you:</p>
              <ul>
                <li>Enter your ZIP code to search for available services</li>
                <li>Contact us via phone, email, or contact form</li>
                <li>Subscribe to our newsletter (if applicable)</li>
              </ul>
              <p>
                This information may include your name, email address, phone number, 
                ZIP code, and any other information you choose to provide.
              </p>

              <h3>Automatically Collected Information</h3>
              <p>
                When you visit our website, we may automatically collect certain information 
                about your device and your visit, including:
              </p>
              <ul>
                <li>IP address and geographic location</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website or source</li>
                <li>Device identifiers</li>
              </ul>
            </Reveal>

            <Reveal>
              <h2>How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Provide and maintain our Service</li>
                <li>Help you find internet and TV services available at your address</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send you relevant information about services you may be interested in</li>
                <li>Analyze website usage to improve our Service</li>
                <li>Comply with legal obligations</li>
              </ul>
            </Reveal>

            <Reveal>
              <h2>Sharing Your Information</h2>
              <p>We may share your information in the following situations:</p>
              <ul>
                <li>
                  <strong>With Service Providers:</strong> When you express interest in 
                  a provider&apos;s services, we may share your contact information with that 
                  provider or their authorized representatives to facilitate your request.
                </li>
                <li>
                  <strong>With Analytics Partners:</strong> We use analytics services to 
                  understand how visitors use our website. These services may collect 
                  information about your use of our website.
                </li>
                <li>
                  <strong>Legal Requirements:</strong> We may disclose your information 
                  if required to do so by law or in response to valid legal requests.
                </li>
                <li>
                  <strong>Business Transfers:</strong> In connection with any merger, 
                  sale of company assets, or acquisition, your information may be 
                  transferred.
                </li>
              </ul>
            </Reveal>

            <Reveal>
              <h2>Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar tracking technologies to collect information 
                about your browsing activities. These technologies help us:
              </p>
              <ul>
                <li>Remember your preferences</li>
                <li>Understand how you use our website</li>
                <li>Improve our services</li>
                <li>Deliver relevant advertising</li>
              </ul>
              <p>
                You can control cookies through your browser settings. However, disabling 
                cookies may limit your ability to use certain features of our website.
              </p>
            </Reveal>

            <Reveal>
              <h2>Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible 
                for the privacy practices of these websites. We encourage you to review the 
                privacy policies of any third-party sites you visit.
              </p>
            </Reveal>

            <Reveal>
              <h2>Data Security</h2>
              <p>
                We implement appropriate technical and organizational security measures to 
                protect your personal information. However, no method of transmission over 
                the Internet or electronic storage is 100% secure, and we cannot guarantee 
                absolute security.
              </p>
            </Reveal>

            <Reveal>
              <h2>Your Rights</h2>
              <p>Depending on your location, you may have certain rights regarding your personal information:</p>
              <ul>
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt out of marketing communications</li>
                <li>Object to processing of your information</li>
              </ul>
              <p>
                To exercise these rights, please contact us using the information provided below.
              </p>
            </Reveal>

            <Reveal>
              <h2>California Privacy Rights</h2>
              <p>
                If you are a California resident, you have specific rights under the California 
                Consumer Privacy Act (CCPA), including the right to know what personal information 
                we collect, the right to delete your information, and the right to opt out of the 
                sale of your personal information. Contact us to exercise these rights.
              </p>
            </Reveal>

            <Reveal>
              <h2>Children&apos;s Privacy</h2>
              <p>
                Our Service is not directed to individuals under the age of 18. We do not 
                knowingly collect personal information from children. If you believe we have 
                collected information from a child, please contact us immediately.
              </p>
            </Reveal>

            <Reveal>
              <h2>Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of 
                any changes by posting the new Privacy Policy on this page and updating the 
                &quot;Last updated&quot; date.
              </p>
            </Reveal>

            <Reveal>
              <h2>Contact Us</h2>
              <p>If you have questions about this Privacy Policy, please contact us:</p>
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
