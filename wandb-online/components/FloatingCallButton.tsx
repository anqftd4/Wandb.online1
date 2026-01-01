'use client'

import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { Phone } from 'lucide-react'
import { siteConfig } from '@/lib/siteConfig'

const excludedPaths = ['/', '/privacy-policy', '/terms-and-conditions']

export function FloatingCallButton() {
  const pathname = usePathname()

  if (excludedPaths.includes(pathname)) {
    return null
  }

  return (
    <motion.a
      href={siteConfig.phoneLink}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.5, type: 'spring', stiffness: 200, damping: 15 }}
      className="fixed bottom-6 right-6 z-40 lg:hidden
                 w-16 h-16 rounded-full
                 bg-gradient-to-br from-brand-500 to-cyan-500
                 shadow-xl shadow-brand-500/40
                 flex items-center justify-center"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Call us"
    >
      {/* Pulse rings */}
      <motion.div
        className="absolute inset-0 rounded-full bg-brand-500"
        animate={{
          scale: [1, 1.5],
          opacity: [0.3, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeOut',
        }}
      />
      <motion.div
        className="absolute inset-0 rounded-full bg-brand-500"
        animate={{
          scale: [1, 1.5],
          opacity: [0.3, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeOut',
          delay: 0.5,
        }}
      />
      
      <Phone className="w-7 h-7 text-white relative z-10" />
    </motion.a>
  )
}
