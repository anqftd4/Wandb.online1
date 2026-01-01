'use client';

import { useState } from 'react';
import { ChevronDown, Phone, HelpCircle, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Reveal } from '@/components/Reveal';
import { StickyCallBar } from '@/components/StickyCallBar';
import { FloatingCallButton } from '@/components/FloatingCallButton';
import { siteConfig } from '@/lib/siteConfig';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQItem[] = [
  // About Our Service
  {
    category: 'About Our Service',
    question: 'What is wandb.online?',
    answer: 'wandb.online is an independent comparison and connection service that helps you explore internet and TV options in your area. We provide information about typical plans, speeds, and pricing to help you understand your choices. We are not an internet provider—we\'re a service that helps you navigate and compare options.',
  },
  {
    category: 'About Our Service',
    question: 'Are you affiliated with Verizon, Spectrum, AT&T, or Optimum?',
    answer: 'No. We are completely independent and not affiliated with, endorsed by, or sponsored by any internet or TV provider. Provider names and trademarks belong to their respective owners. Our goal is to give you unbiased information to help you make decisions.',
  },
  {
    category: 'About Our Service',
    question: 'How does wandb.online make money?',
    answer: 'We may receive compensation when you connect with a provider through our service. This referral-based model allows us to provide our comparison service at no cost to you. We\'re transparent about this because we believe you should know how any service you use operates.',
  },
  {
    category: 'About Our Service',
    question: 'Is your service free?',
    answer: 'Yes. Our comparison and connection service is completely free for you to use. You won\'t pay us anything—any costs you incur are between you and the provider you choose to sign up with.',
  },
  // How It Works
  {
    category: 'How It Works',
    question: 'Why do I need to enter my ZIP code?',
    answer: 'Internet and TV availability varies significantly by location. What\'s available in one neighborhood may not be available a few streets away. Entering your ZIP code helps us show you options that are more likely to be available in your area. However, exact availability must be confirmed with the provider.',
  },
  {
    category: 'How It Works',
    question: 'Why should I call instead of just signing up online?',
    answer: 'Calling allows you to confirm exact availability, current pricing, and any promotions specific to your address. Online pricing is often general—a phone consultation ensures you get accurate information and can ask questions before committing.',
  },
  {
    category: 'How It Works',
    question: 'What happens when I call the number on your site?',
    answer: 'You\'ll speak with a member of our team who can help answer questions, explain options, and assist with confirming availability at your address. We don\'t use high-pressure tactics—our goal is to help you find the right service for your needs.',
  },
  {
    category: 'How It Works',
    question: 'Can you set up my service for me?',
    answer: 'We can guide you through the process and help you understand your options, but actual service setup, billing, and account management are handled directly by the provider you choose. We help you get to the right place.',
  },
  // Pricing & Plans
  {
    category: 'Pricing & Plans',
    question: 'Are the prices on your site guaranteed?',
    answer: 'No. All pricing shown on wandb.online is for example purposes only. Actual pricing varies by location, current promotions, and provider policies. We recommend calling to confirm current rates and availability at your specific address.',
  },
  {
    category: 'Pricing & Plans',
    question: 'Why does pricing vary so much by location?',
    answer: 'Providers price services based on many factors: infrastructure costs, competition in your area, regional promotions, and more. Two neighbors might pay different rates depending on when they signed up and what promotions were available. That\'s why confirming current pricing is so important.',
  },
  {
    category: 'Pricing & Plans',
    question: 'What speed do I actually need?',
    answer: 'It depends on how you use the internet. For basic browsing and email, 25-50 Mbps is typically sufficient. For streaming HD video, 50-100 Mbps works well for most households. Multiple users streaming 4K, gaming, or working from home may benefit from 200+ Mbps. Our team can help you think through your specific needs.',
  },
  {
    category: 'Pricing & Plans',
    question: 'Are bundles worth it?',
    answer: 'Bundles (combining internet, TV, and sometimes phone) can offer savings compared to purchasing services separately, but it depends on what you actually need. If you don\'t watch much TV, a standalone internet plan might be more cost-effective. We can help you compare the options.',
  },
  // Technical Questions
  {
    category: 'Technical Questions',
    question: 'What\'s the difference between fiber, cable, and DSL?',
    answer: 'Fiber uses light through glass cables and typically offers the fastest, most reliable speeds. Cable uses coaxial cables (same as cable TV) and offers good speeds in many areas. DSL uses phone lines and is widely available but usually slower. Availability depends on infrastructure in your area.',
  },
  {
    category: 'Technical Questions',
    question: 'Do I need to buy equipment?',
    answer: 'Most providers offer equipment rental (modem, router) for a monthly fee. Some allow you to purchase your own compatible equipment. Each approach has pros and cons—rental includes support and replacements, while owning can save money long-term. We can discuss options when you call.',
  },
  {
    category: 'Technical Questions',
    question: 'What about installation?',
    answer: 'Installation requirements vary by provider and your home\'s existing infrastructure. Some installations are simple self-installs; others require a technician visit. Installation fees may apply. These details are best confirmed directly when you\'re setting up service.',
  },
  // Privacy & Trust
  {
    category: 'Privacy & Trust',
    question: 'What do you do with my information?',
    answer: 'We only collect information necessary to help you explore options—like your ZIP code to show relevant services. We don\'t sell your personal information. See our Privacy Policy for complete details on how we handle data.',
  },
  {
    category: 'Privacy & Trust',
    question: 'How do I know I can trust this site?',
    answer: 'We\'re transparent about who we are, how we operate, and how we make money. We clearly state we\'re not affiliated with providers. We don\'t make guarantees we can\'t keep. We encourage you to verify any information we provide by calling providers directly.',
  },
];

const categories = Array.from(new Set(faqs.map(faq => faq.category)));

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = searchQuery === '' || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800" />
          <div className="absolute inset-0 opacity-30 dark:opacity-20">
            <div className="absolute top-20 right-10 w-72 h-72 bg-brand-200 dark:bg-brand-900 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-200 dark:bg-purple-900 rounded-full blur-3xl" />
          </div>
          
          <div className="container relative z-10">
            <Reveal>
              <div className="max-w-3xl mx-auto text-center">
                <div className="w-16 h-16 bg-brand-100 dark:bg-brand-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <HelpCircle className="w-8 h-8 text-brand-600 dark:text-brand-400" />
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 dark:text-white mb-6">
                  Frequently Asked Questions
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                  Find answers to common questions about our service, how internet plans work, and what to expect.
                </p>
              </div>
            </Reveal>

            {/* Search */}
            <Reveal delay={0.2}>
              <div className="max-w-xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search questions..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container">
            {/* Category Filters */}
            <Reveal>
              <div className="flex flex-wrap gap-3 justify-center mb-12">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    !selectedCategory
                      ? 'bg-brand-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                  }`}
                >
                  All Questions
                </button>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedCategory === category
                        ? 'bg-brand-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </Reveal>

            {/* FAQ List */}
            <div className="max-w-3xl mx-auto">
              {filteredFaqs.length === 0 ? (
                <Reveal>
                  <div className="text-center py-12">
                    <p className="text-gray-500 dark:text-gray-400">
                      No questions match your search. Try different keywords or{' '}
                      <button
                        onClick={() => {
                          setSearchQuery('');
                          setSelectedCategory(null);
                        }}
                        className="text-brand-600 hover:underline"
                      >
                        clear filters
                      </button>
                      .
                    </p>
                  </div>
                </Reveal>
              ) : (
                <div className="space-y-4">
                  {filteredFaqs.map((faq, index) => (
                    <Reveal key={index} delay={index * 0.03}>
                      <motion.div
                        className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden"
                        initial={false}
                      >
                        <button
                          onClick={() => setOpenIndex(openIndex === index ? null : index)}
                          className="w-full px-6 py-5 flex items-center justify-between text-left bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors"
                        >
                          <span className="font-medium text-gray-900 dark:text-white pr-4">
                            {faq.question}
                          </span>
                          <motion.div
                            animate={{ rotate: openIndex === index ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                          </motion.div>
                        </button>
                        
                        <AnimatePresence>
                          {openIndex === index && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <div className="px-6 pb-5 text-gray-600 dark:text-gray-300 border-t border-gray-100 dark:border-gray-700 pt-4">
                                {faq.answer}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    </Reveal>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Still Have Questions CTA */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container">
            <Reveal>
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-4">
                  Still Have Questions?
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  Our team is here to help. Call us Monday through Friday, 9AM to 6PM EST, and we'll answer any questions you have about finding the right internet or TV service.
                </p>
                <motion.a
                  href={siteConfig.phoneLink}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-3 bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
                >
                  <Phone className="w-6 h-6" />
                  {siteConfig.phone}
                </motion.a>
                <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                  Or email us at{' '}
                  <a href={siteConfig.emailLink} className="text-brand-600 hover:underline">
                    {siteConfig.email}
                  </a>
                </p>
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
