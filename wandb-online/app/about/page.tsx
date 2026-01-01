import { Metadata } from 'next'
import { Users, Target, Shield, Heart, ArrowRight, Phone } from 'lucide-react'
import { siteConfig } from '@/lib/siteConfig'
import { SignalBackground } from '@/components/SignalBackground'
import { StickyCallBar } from '@/components/StickyCallBar'
import { FloatingCallButton } from '@/components/FloatingCallButton'
import { Reveal, StaggerContainer, StaggerItem } from '@/components/Reveal'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about wandb.online - an independent internet and TV comparison service helping you find the right provider.',
}

const values = [
  {
    icon: Shield,
    title: 'Independence',
    description: 'We operate independently from internet and TV providers. Our comparisons are designed to help you, not push a specific brand.',
  },
  {
    icon: Target,
    title: 'Transparency',
    description: 'We clearly label example pricing and disclose that availability varies by location. No hidden agendas or misleading claims.',
  },
  {
    icon: Heart,
    title: 'Customer Focus',
    description: 'Our team is here to help you navigate options and find what works for your household\'s specific needs.',
  },
  {
    icon: Users,
    title: 'Real People',
    description: 'When you call, you speak with real people who can answer questions and help you understand your options.',
  },
]

const team = [
  {
    role: 'Customer Support',
    description: 'Our support specialists are trained to help you compare plans, understand pricing, and navigate the process.',
  },
  {
    role: 'Research Team',
    description: 'We continuously research and update our information to reflect current offerings from providers.',
  },
  {
    role: 'Quality Assurance',
    description: 'We review our content regularly to ensure accuracy and compliance with advertising standards.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <SignalBackground variant="section" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full 
                             bg-brand-100 dark:bg-brand-900/40 text-brand-700 dark:text-brand-400 
                             text-sm font-medium mb-6">
                <Users className="w-4 h-4" />
                About Us
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="font-display font-bold text-4xl sm:text-5xl text-slate-900 dark:text-white mb-6">
                About {siteConfig.name}
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                We are an independent comparison service dedicated to helping you explore 
                internet and TV options in your area.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-slate-100 dark:bg-slate-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-display font-bold text-2xl text-slate-900 dark:text-white mb-6 text-center">
              Our Mission
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700">
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                Choosing an internet or TV provider can be overwhelming. With so many options, 
                varying prices, and availability that changes by address, it is difficult to know 
                where to start. {siteConfig.name} exists to simplify this process.
              </p>
              <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mt-4">
                We provide information about major providers, example pricing, and plan features 
                to help you understand what might be available. When you are ready to learn more 
                or sign up, our team is available by phone to assist you.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-display font-bold text-2xl text-slate-900 dark:text-white mb-12 text-center">
              Our Values
            </h2>
          </Reveal>
          
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 h-full">
                  <div className="w-12 h-12 rounded-xl bg-brand-100 dark:bg-brand-900/40 
                                 flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-brand-600 dark:text-brand-400" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    {value.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="font-display font-bold text-2xl text-slate-900 dark:text-white mb-8 text-center">
              Our Team
            </h2>
          </Reveal>
          
          <StaggerContainer className="space-y-4">
            {team.map((member) => (
              <StaggerItem key={member.role}>
                <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                  <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white mb-2">
                    {member.role}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    {member.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="p-6 rounded-2xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800">
              <h3 className="font-display font-bold text-lg text-amber-900 dark:text-amber-200 mb-3">
                Important Information
              </h3>
              <p className="text-amber-800 dark:text-amber-300 text-sm leading-relaxed">
                {siteConfig.name} is an independent comparison service. We are not affiliated with, 
                endorsed by, or an authorized agent of any internet or TV provider. Provider names 
                and trademarks belong to their respective owners. We may receive compensation when 
                you sign up for service through our referrals. All pricing shown is for example 
                purposes only; actual pricing and availability vary by location.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-100 dark:bg-slate-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="font-display font-bold text-2xl text-slate-900 dark:text-white mb-4">
              Ready to Explore Your Options?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-slate-600 dark:text-slate-400 mb-8">
              Call our team to discuss what services might be available at your address.
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
      </section>

      <StickyCallBar />
      <FloatingCallButton />
    </>
  )
}
