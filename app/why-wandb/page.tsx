'use client';

import { Metadata } from 'next';
import { Shield, Phone, Users, Eye, CheckCircle, ArrowRight, Zap, Heart, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { Reveal } from '@/components/Reveal';
import { StickyCallBar } from '@/components/StickyCallBar';
import { FloatingCallButton } from '@/components/FloatingCallButton';
import { siteConfig } from '@/lib/siteConfig';

const values = [
  {
    icon: Shield,
    title: 'Independence First',
    description: 'We\'re not owned by any internet provider. Our recommendations are based on what fits your needs, not on corporate partnerships or exclusive deals.',
  },
  {
    icon: Eye,
    title: 'Total Transparency',
    description: 'We clearly disclose how we operate, how we\'re compensated, and what we can and cannot do. No hidden agendas, no fine print surprises.',
  },
  {
    icon: Users,
    title: 'Human Connection',
    description: 'Real people answer your calls. Our team takes the time to understand your situation and explain options without pressure or scripts.',
  },
  {
    icon: Heart,
    title: 'Your Best Interest',
    description: 'We succeed when you find the right service for your home. That alignment means we\'re genuinely invested in helping you make a good decision.',
  },
];

const whatWeDo = [
  'Help you understand internet and TV options available in your area',
  'Explain typical speed tiers, equipment, and bundle configurations',
  'Compare general pricing structures across major providers',
  'Connect you with specialists who can verify exact availability',
  'Provide guidance on what to ask and what to look out for',
  'Answer questions about technology, installation, and service',
];

const whatWeDontDo = [
  'Claim to be an official provider or authorized dealer',
  'Guarantee specific pricing or promotional offers',
  'Process payments or handle account management',
  'Make promises about service quality or uptime',
  'Pressure you into decisions or use aggressive tactics',
  'Hide our identity or compensation structure',
];

const stats = [
  { value: '100%', label: 'Independent' },
  { value: '4', label: 'Major Providers' },
  { value: '5-Day', label: 'Support Week' },
  { value: 'Free', label: 'Service' },
];

export default function WhyWandbPage() {
  return (
    <>
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800" />
          <div className="absolute inset-0 opacity-30 dark:opacity-20">
            <div className="absolute top-20 left-10 w-72 h-72 bg-brand-200 dark:bg-brand-900 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200 dark:bg-blue-900 rounded-full blur-3xl" />
          </div>
          
          <div className="container relative z-10">
            <Reveal>
              <div className="max-w-3xl mx-auto text-center">
                <span className="inline-block px-4 py-2 bg-brand-100 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 rounded-full text-sm font-medium mb-6">
                  Our Promise
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 dark:text-white mb-6">
                  Why People Choose{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-blue-500">
                    wandb.online
                  </span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                  We built this service because finding the right internet provider shouldn't feel like navigating a maze. Here's what makes us different.
                </p>
              </div>
            </Reveal>

            {/* Stats */}
            <Reveal delay={0.2}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mt-12">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl md:text-4xl font-bold text-brand-600 dark:text-brand-400 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container">
            <Reveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">
                  Our Core Values
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  These principles guide every interaction and recommendation we make.
                </p>
              </div>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {values.map((value, index) => (
                <Reveal key={value.title} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700"
                  >
                    <div className="w-12 h-12 bg-brand-100 dark:bg-brand-900/30 rounded-xl flex items-center justify-center mb-4">
                      <value.icon className="w-6 h-6 text-brand-600 dark:text-brand-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {value.description}
                    </p>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* What We Do / Don't Do */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container">
            <Reveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">
                  Clear Expectations
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Transparency means being upfront about our capabilities and limitations.
                </p>
              </div>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* What We Do */}
              <Reveal>
                <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">What We Do</h3>
                  </div>
                  <ul className="space-y-4">
                    {whatWeDo.map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3"
                      >
                        <ArrowRight className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              {/* What We Don't Do */}
              <Reveal delay={0.1}>
                <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center">
                      <Shield className="w-5 h-5 text-red-600 dark:text-red-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">What We Don't Do</h3>
                  </div>
                  <ul className="space-y-4">
                    {whatWeDontDo.map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3"
                      >
                        <span className="w-5 h-5 flex items-center justify-center text-red-500 mt-0.5 flex-shrink-0">✕</span>
                        <span className="text-gray-600 dark:text-gray-300">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container">
            <Reveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">
                  Simple Process
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Getting connected takes just three steps.
                </p>
              </div>
            </Reveal>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { step: '1', title: 'Explore Options', description: 'Browse typical plans and providers. Use our tools to filter by speed, features, and service type.' },
                { step: '2', title: 'Call to Verify', description: 'Speak with our team to confirm what\'s actually available at your specific address and current pricing.' },
                { step: '3', title: 'Get Connected', description: 'We help coordinate next steps and ensure you have the information needed to proceed with confidence.' },
              ].map((item, index) => (
                <Reveal key={item.step} delay={index * 0.1}>
                  <div className="text-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-16 h-16 bg-gradient-to-br from-brand-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4"
                    >
                      <span className="text-2xl font-bold text-white">{item.step}</span>
                    </motion.div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-brand-600 to-blue-600 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          </div>
          
          <div className="container relative z-10">
            <Reveal>
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                  Ready to Find Your Connection?
                </h2>
                <p className="text-xl text-white/90 mb-8">
                  Our team is here Monday through Friday, 9AM to 6PM EST. Give us a call—no pressure, just help.
                </p>
                <motion.a
                  href={siteConfig.phoneLink}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-3 bg-white text-brand-600 px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-shadow"
                >
                  <Phone className="w-6 h-6" />
                  {siteConfig.phone}
                </motion.a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <StickyCallBar />
      <FloatingCallButton />
    </>
  );
}
