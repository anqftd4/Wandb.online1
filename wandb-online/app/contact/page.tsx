'use client';

import { Phone, Mail, Clock, MapPin, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import { Reveal } from '@/components/Reveal';
import { StickyCallBar } from '@/components/StickyCallBar';
import { FloatingCallButton } from '@/components/FloatingCallButton';
import { siteConfig } from '@/lib/siteConfig';

const contactMethods = [
  {
    icon: Phone,
    title: 'Call Us',
    description: 'Speak directly with our team for immediate assistance',
    value: siteConfig.phone,
    href: siteConfig.phoneLink,
    primary: true,
  },
  {
    icon: Mail,
    title: 'Email Us',
    description: 'Send us a message and we\'ll respond within 24 hours',
    value: siteConfig.email,
    href: siteConfig.emailLink,
    primary: false,
  },
];

const expectations = [
  {
    title: 'Friendly Conversation',
    description: 'Our team is here to help, not to pressure. Ask questions, take your time, and get the information you need.',
  },
  {
    title: 'Clear Information',
    description: 'We explain options in plain language. No confusing jargon or hidden details.',
  },
  {
    title: 'Honest Guidance',
    description: 'We\'ll tell you what we know and what we don\'t. If we can\'t help, we\'ll say so.',
  },
  {
    title: 'No Obligation',
    description: 'Calling doesn\'t commit you to anything. Explore your options freely.',
  },
];

export default function ContactPage() {
  return (
    <>
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800" />
          <div className="absolute inset-0 opacity-30 dark:opacity-20">
            <div className="absolute top-20 left-1/4 w-72 h-72 bg-brand-200 dark:bg-brand-900 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-green-200 dark:bg-green-900 rounded-full blur-3xl" />
          </div>
          
          <div className="container relative z-10">
            <Reveal>
              <div className="max-w-3xl mx-auto text-center">
                <div className="w-16 h-16 bg-brand-100 dark:bg-brand-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <MessageSquare className="w-8 h-8 text-brand-600 dark:text-brand-400" />
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 dark:text-white mb-6">
                  Get in Touch
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  Have questions about internet or TV options? Our team is ready to help you explore what's available in your area.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {contactMethods.map((method, index) => (
                  <Reveal key={method.title} delay={index * 0.1}>
                    <motion.a
                      href={method.href}
                      whileHover={{ y: -4 }}
                      className={`block p-8 rounded-2xl border transition-all ${
                        method.primary
                          ? 'bg-gradient-to-br from-brand-600 to-blue-600 border-transparent'
                          : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-brand-300 dark:hover:border-brand-700'
                      }`}
                    >
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                        method.primary
                          ? 'bg-white/20'
                          : 'bg-brand-100 dark:bg-brand-900/30'
                      }`}>
                        <method.icon className={`w-7 h-7 ${
                          method.primary ? 'text-white' : 'text-brand-600 dark:text-brand-400'
                        }`} />
                      </div>
                      <h2 className={`text-2xl font-semibold mb-2 ${
                        method.primary ? 'text-white' : 'text-gray-900 dark:text-white'
                      }`}>
                        {method.title}
                      </h2>
                      <p className={`mb-4 ${
                        method.primary ? 'text-white/80' : 'text-gray-600 dark:text-gray-300'
                      }`}>
                        {method.description}
                      </p>
                      <span className={`text-xl font-semibold ${
                        method.primary ? 'text-white' : 'text-brand-600 dark:text-brand-400'
                      }`}>
                        {method.value}
                      </span>
                    </motion.a>
                  </Reveal>
                ))}
              </div>

              {/* Hours */}
              <Reveal delay={0.2}>
                <div className="mt-12 p-8 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-brand-100 dark:bg-brand-900/30 rounded-xl flex items-center justify-center">
                      <Clock className="w-6 h-6 text-brand-600 dark:text-brand-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Business Hours
                    </h3>
                  </div>
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    {siteConfig.hours}
                  </p>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    We try to respond to all emails within 24 business hours.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* What to Expect */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container">
            <Reveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">
                  What to Expect When You Call
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  We believe in making every interaction helpful and pressure-free.
                </p>
              </div>
            </Reveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {expectations.map((item, index) => (
                <Reveal key={item.title} delay={index * 0.1}>
                  <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700 h-full">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Link */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container">
            <Reveal>
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 dark:text-white mb-4">
                  Looking for Quick Answers?
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Check our FAQ page for answers to common questions about internet service, pricing, and how wandb.online works.
                </p>
                <motion.a
                  href="/faq"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 text-brand-600 dark:text-brand-400 font-semibold hover:underline"
                >
                  View Frequently Asked Questions
                  <span>→</span>
                </motion.a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Main CTA */}
        <section className="py-20 bg-gradient-to-br from-brand-600 to-blue-600 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          </div>
          
          <div className="container relative z-10">
            <Reveal>
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                  Ready to Explore Your Options?
                </h2>
                <p className="text-xl text-white/90 mb-8">
                  Our team can help you understand what's available at your address and answer any questions you have.
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
