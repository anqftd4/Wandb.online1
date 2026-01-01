'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, MapPin, Phone, Info, Loader2, Check, Wifi, Tv, Zap } from 'lucide-react'
import { siteConfig } from '@/lib/siteConfig'
import { validateZip, cn } from '@/lib/utils'

type SearchState = 'idle' | 'searching' | 'results' | 'error'

interface ProviderResult {
  name: string
  color: string
  speeds: string
  price: string
  features: string[]
}

const mockResults: ProviderResult[] = [
  {
    name: 'Verizon',
    color: '#ee0000',
    speeds: 'Up to 940 Mbps',
    price: '$49.99–$89.99/mo',
    features: ['Fiber available', 'No contract options', 'Free router rental'],
  },
  {
    name: 'Spectrum',
    color: '#0075c9',
    speeds: 'Up to 500 Mbps',
    price: '$49.99–$109.99/mo',
    features: ['No contracts', 'Free modem', 'TV bundles available'],
  },
  {
    name: 'AT&T',
    color: '#00a8e0',
    speeds: 'Up to 1000 Mbps',
    price: '$55–$180/mo',
    features: ['Fiber & DSL options', 'TV bundles', 'Autopay discount'],
  },
  {
    name: 'Optimum',
    color: '#ff6900',
    speeds: 'Up to 940 Mbps',
    price: '$40–$180/mo',
    features: ['Fiber network', 'No annual contract', 'Mobile savings'],
  },
]

export function ZipSearchModule({ variant = 'default' }: { variant?: 'default' | 'compact' }) {
  const [zip, setZip] = useState('')
  const [state, setState] = useState<SearchState>('idle')
  const [error, setError] = useState('')
  const [results, setResults] = useState<ProviderResult[]>([])
  const [showTooltip, setShowTooltip] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateZip(zip)) {
      setError('Please enter a valid 5-digit ZIP code')
      setState('error')
      return
    }

    setState('searching')
    setError('')

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Show mock results
    setResults(mockResults)
    setState('results')
  }

  const handleZipChange = (value: string) => {
    // Only allow digits
    const cleaned = value.replace(/\D/g, '').slice(0, 5)
    setZip(cleaned)
    if (state === 'error') {
      setState('idle')
      setError('')
    }
  }

  return (
    <div className={cn(
      'w-full max-w-2xl mx-auto',
      variant === 'compact' && 'max-w-xl'
    )}>
      {/* Search Form */}
      <form onSubmit={handleSubmit} className="relative">
        <div className={cn(
          'relative flex items-center gap-3 p-2 rounded-2xl',
          'bg-white dark:bg-slate-800',
          'border-2 transition-colors duration-200',
          state === 'error'
            ? 'border-red-400 dark:border-red-500'
            : 'border-slate-200 dark:border-slate-700 focus-within:border-brand-500'
        )}>
          <div className="flex items-center gap-2 pl-4">
            <MapPin className="w-5 h-5 text-brand-500" />
          </div>
          
          <input
            type="text"
            value={zip}
            onChange={(e) => handleZipChange(e.target.value)}
            placeholder="Enter your ZIP code"
            className="flex-1 py-3 bg-transparent text-lg font-medium
                       text-slate-900 dark:text-white
                       placeholder:text-slate-400 dark:placeholder:text-slate-500
                       focus:outline-none"
            aria-label="ZIP code"
          />

          {/* Tooltip trigger */}
          <button
            type="button"
            className="p-2 text-slate-400 hover:text-brand-500 transition-colors"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            aria-label="Why we need your ZIP code"
          >
            <Info className="w-5 h-5" />
          </button>

          <motion.button
            type="submit"
            disabled={state === 'searching'}
            className="flex items-center gap-2 px-6 py-3 
                       bg-gradient-to-r from-brand-600 to-brand-500 
                       rounded-xl font-semibold text-white
                       shadow-lg shadow-brand-500/25
                       disabled:opacity-70"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {state === 'searching' ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span className="hidden sm:inline">Checking...</span>
              </>
            ) : (
              <>
                <Search className="w-5 h-5" />
                <span className="hidden sm:inline">Check Options</span>
              </>
            )}
          </motion.button>
        </div>

        {/* Tooltip */}
        <AnimatePresence>
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="absolute right-0 top-full mt-2 p-4 max-w-xs
                         bg-slate-900 dark:bg-slate-700 text-white text-sm rounded-xl
                         shadow-xl z-10"
            >
              <p className="font-medium mb-1">Why ZIP matters:</p>
              <p className="text-slate-300">
                Availability and offers vary by address. Your ZIP helps us show 
                typical options in your area.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Error message */}
        <AnimatePresence>
          {error && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-2 text-red-500 text-sm font-medium pl-4"
            >
              {error}
            </motion.p>
          )}
        </AnimatePresence>
      </form>

      {/* Searching State */}
      <AnimatePresence>
        {state === 'searching' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mt-8 text-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl
                           bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              >
                <Wifi className="w-6 h-6" />
              </motion.div>
              <span className="font-medium">Checking typical options for {zip}...</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Results */}
      <AnimatePresence>
        {state === 'results' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mt-8"
          >
            <div className="flex items-center gap-2 mb-4">
              <Check className="w-5 h-5 text-green-500" />
              <p className="text-slate-600 dark:text-slate-400">
                Found {results.length} providers with typical service in your area
              </p>
            </div>

            <div className="grid gap-4">
              {results.map((provider, index) => (
                <motion.div
                  key={provider.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="card-interactive p-6"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: provider.color }}
                        />
                        <h3 className="font-display font-bold text-lg text-slate-900 dark:text-white">
                          {provider.name}
                        </h3>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-400 mb-3">
                        <span className="flex items-center gap-1">
                          <Zap className="w-4 h-4 text-brand-500" />
                          {provider.speeds}
                        </span>
                        <span className="font-semibold text-slate-900 dark:text-white">
                          {provider.price}*
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {provider.features.map((feature) => (
                          <span
                            key={feature}
                            className="px-3 py-1 text-xs font-medium rounded-full
                                       bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    <a
                      href={siteConfig.phoneLink}
                      className="btn-primary flex items-center justify-center gap-2 whitespace-nowrap"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Call Now</span>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Disclaimer */}
            <p className="mt-6 text-center text-sm text-slate-500 dark:text-slate-400">
              *Example pricing. Call to confirm current availability and offers at your address.
            </p>

            {/* Call CTA */}
            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-brand-50 to-cyan-50 
                           dark:from-brand-900/30 dark:to-cyan-900/30 text-center">
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                Ready to confirm pricing and availability at your exact address?
              </p>
              <a
                href={siteConfig.phoneLink}
                className="btn-primary inline-flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                <span>Call {siteConfig.phone}</span>
              </a>
              <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
                {siteConfig.hours}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
