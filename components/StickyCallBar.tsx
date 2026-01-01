'use client'

import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { Phone, Clock } from 'lucide-react'
import { siteConfig } from '@/lib/siteConfig'

const excludedPaths = ['/', '/privacy-policy', '/terms-and-conditions']

export function StickyCallBar() {
  const pathname = usePathname()

  if (excludedPaths.includes(pathname)) {
    return null
  }

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.4, ease: 'easeOut' }}
      className="fixed bottom-0 left-0 right-0 z-40 hidden lg:block"
    >
      <div className="bg-slate-900/95 backdrop-blur-xl border-t border-slate-700/50 shadow-2xl shadow-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-slate-400">
                <Clock className="w-4 h-4" />
                <span className="text-sm">{siteConfig.hours}</span>
              </div>
              <p className="text-white font-medium">
                Call to confirm availability at your address
              </p>
            </div>
            <motion.a
              href={siteConfig.phoneLink}
              className="relative group flex items-center gap-3 px-8 py-3 
                         bg-gradient-to-r from-brand-500 to-cyan-500 
                         rounded-xl font-semibold text-white
                         shadow-lg shadow-brand-500/30"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Phone className="w-5 h-5" />
              <span className="text-lg">{siteConfig.phone}</span>
              
              {/* Shimmer effect */}
              <div className="absolute inset-0 rounded-xl overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
              </div>
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
