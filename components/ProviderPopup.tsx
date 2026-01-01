'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { Phone, Clock, Mail } from 'lucide-react'
import { siteConfig, Provider } from '@/lib/siteConfig'

interface ProviderPopupProps {
  provider: Provider
  isOpen: boolean
  onClose: () => void
}

export function ProviderPopup({ provider, isOpen, onClose }: ProviderPopupProps) {
  const prefersReducedMotion = useReducedMotion()
  const providerData = siteConfig.providers[provider]

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEsc)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEsc)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 25,
            }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div 
              className="relative w-full max-w-md overflow-hidden rounded-3xl shadow-2xl pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Provider Color Banner */}
              <div 
                className="relative px-8 py-12 text-center overflow-hidden"
                style={{ backgroundColor: providerData.color }}
              >
                {/* Floating particles */}
                {!prefersReducedMotion && (
                  <div className="absolute inset-0 overflow-hidden">
                    {[...Array(10)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1.5 h-1.5 rounded-full bg-white/30"
                        style={{
                          left: `${10 + i * 8}%`,
                          bottom: '-10%',
                        }}
                        animate={{
                          y: [0, -200],
                          opacity: [0, 0.6, 0],
                        }}
                        transition={{
                          duration: 4 + i * 0.5,
                          repeat: Infinity,
                          delay: i * 0.3,
                          ease: 'easeOut',
                        }}
                      />
                    ))}
                  </div>
                )}

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/30" />
                
                <div className="relative z-10">
                  <h2 className="font-display font-bold text-4xl text-white lowercase tracking-tight">
                    {providerData.name}
                  </h2>
                </div>
              </div>

              {/* Dark Glass Content Section */}
              <div className="relative bg-slate-900/95 backdrop-blur-xl px-8 py-10 text-center">
                {/* Subtle gradient overlay */}
                <div 
                  className="absolute inset-0 opacity-10"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${providerData.color}, transparent 70%)`,
                  }}
                />

                <div className="relative z-10">
                  <h3 className="font-display font-bold text-2xl text-white mb-3">
                    Connect with a {providerData.name} Specialist
                  </h3>
                  <p className="text-slate-400 mb-8">
                    Call to compare options and confirm availability for your address.
                  </p>

                  {/* CTA Button */}
                  <motion.a
                    href={siteConfig.phoneLink}
                    className="relative inline-flex items-center justify-center gap-3 w-full py-5 
                               rounded-2xl font-bold text-xl text-white overflow-hidden"
                    style={{ backgroundColor: providerData.color }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Glow effect */}
                    <motion.div
                      className="absolute inset-0"
                      animate={{
                        boxShadow: [
                          `0 0 20px ${providerData.color}40`,
                          `0 0 40px ${providerData.color}60`,
                          `0 0 20px ${providerData.color}40`,
                        ],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                    
                    {/* Shimmer sweep */}
                    {!prefersReducedMotion && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                        animate={{
                          x: ['-100%', '100%'],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                      />
                    )}
                    
                    <Phone className="w-6 h-6 relative z-10" />
                    <span className="relative z-10">{siteConfig.phone}</span>
                  </motion.a>

                  {/* Footer info */}
                  <div className="mt-8 pt-6 border-t border-slate-700/50">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-slate-400">
                      <span className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {siteConfig.hours}
                      </span>
                      <span className="hidden sm:inline text-slate-600">•</span>
                      <a 
                        href={siteConfig.emailLink}
                        className="flex items-center gap-2 hover:text-white transition-colors"
                      >
                        <Mail className="w-4 h-4" />
                        {siteConfig.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
