'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Phone, ChevronDown, Wifi, Zap, Home, Gamepad2, 
  Monitor, Users, Check, X as XIcon 
} from 'lucide-react'
import { siteConfig } from '@/lib/siteConfig'
import { cn } from '@/lib/utils'
import { Reveal, StaggerContainer, StaggerItem } from './Reveal'

interface Plan {
  id: string
  provider: string
  providerColor: string
  name: string
  speed: string
  speedValue: number
  price: string
  priceNote: string
  features: string[]
  tags: string[]
  bestFor: string[]
}

const samplePlans: Plan[] = [
  {
    id: 'v1',
    provider: 'Verizon',
    providerColor: '#ee0000',
    name: 'Fios 300',
    speed: '300 Mbps',
    speedValue: 300,
    price: '$49.99/mo',
    priceNote: 'Example price, varies by location',
    features: ['Symmetrical upload/download', 'No data caps', 'Free router for 12 mo'],
    tags: ['fiber', 'no-contract'],
    bestFor: ['streaming', 'work-from-home'],
  },
  {
    id: 'v2',
    provider: 'Verizon',
    providerColor: '#ee0000',
    name: 'Fios Gigabit',
    speed: '940 Mbps',
    speedValue: 940,
    price: '$89.99/mo',
    priceNote: 'Example price, varies by location',
    features: ['Symmetrical speeds', 'Unlimited data', 'Whole-home WiFi option'],
    tags: ['fiber', 'no-contract'],
    bestFor: ['gaming', 'streaming', 'work-from-home', 'large-household'],
  },
  {
    id: 's1',
    provider: 'Spectrum',
    providerColor: '#0075c9',
    name: 'Internet',
    speed: '300 Mbps',
    speedValue: 300,
    price: '$49.99/mo',
    priceNote: 'Example price, varies by location',
    features: ['No contracts', 'Free modem', 'Free antivirus'],
    tags: ['cable', 'no-contract'],
    bestFor: ['streaming', 'work-from-home'],
  },
  {
    id: 's2',
    provider: 'Spectrum',
    providerColor: '#0075c9',
    name: 'Internet Ultra',
    speed: '500 Mbps',
    speedValue: 500,
    price: '$69.99/mo',
    priceNote: 'Example price, varies by location',
    features: ['No contracts', 'Free modem', 'Advanced WiFi option'],
    tags: ['cable', 'no-contract'],
    bestFor: ['gaming', 'streaming', 'work-from-home'],
  },
  {
    id: 'a1',
    provider: 'AT&T',
    providerColor: '#00a8e0',
    name: 'Fiber 300',
    speed: '300 Mbps',
    speedValue: 300,
    price: '$55/mo',
    priceNote: 'Example price with autopay',
    features: ['Symmetrical speeds', 'Unlimited data', 'Smart Home Manager'],
    tags: ['fiber'],
    bestFor: ['streaming', 'work-from-home'],
  },
  {
    id: 'a2',
    provider: 'AT&T',
    providerColor: '#00a8e0',
    name: 'Fiber 1 Gig',
    speed: '1000 Mbps',
    speedValue: 1000,
    price: '$80/mo',
    priceNote: 'Example price with autopay',
    features: ['Symmetrical speeds', 'Unlimited data', 'HBO Max included'],
    tags: ['fiber'],
    bestFor: ['gaming', 'streaming', 'work-from-home', 'large-household'],
  },
  {
    id: 'o1',
    provider: 'Optimum',
    providerColor: '#ff6900',
    name: 'Optimum 300',
    speed: '300 Mbps',
    speedValue: 300,
    price: '$40/mo',
    priceNote: 'Example price for first year',
    features: ['No annual contract', 'Free installation', 'Smart WiFi 6'],
    tags: ['fiber', 'cable', 'no-contract'],
    bestFor: ['streaming', 'work-from-home'],
  },
  {
    id: 'o2',
    provider: 'Optimum',
    providerColor: '#ff6900',
    name: 'Optimum Fiber 1 Gig',
    speed: '940 Mbps',
    speedValue: 940,
    price: '$80/mo',
    priceNote: 'Example price for first year',
    features: ['Fiber network', 'No data caps', 'WiFi 6 router included'],
    tags: ['fiber', 'no-contract'],
    bestFor: ['gaming', 'streaming', 'work-from-home', 'large-household'],
  },
]

const filterChips = [
  { id: 'work-from-home', label: 'Work from Home', icon: Home },
  { id: 'gaming', label: 'Gaming', icon: Gamepad2 },
  { id: 'streaming', label: 'Streaming', icon: Monitor },
  { id: 'large-household', label: 'Large Household', icon: Users },
]

const sortOptions = [
  { id: 'price-low', label: 'Price: Low to High' },
  { id: 'price-high', label: 'Price: High to Low' },
  { id: 'speed-high', label: 'Speed: Fastest First' },
  { id: 'speed-low', label: 'Speed: Lowest First' },
]

export function ComparisonTable() {
  const [activeFilters, setActiveFilters] = useState<string[]>([])
  const [speedRange, setSpeedRange] = useState<[number, number]>([0, 1000])
  const [sortBy, setSortBy] = useState('speed-high')
  const [expandedPlan, setExpandedPlan] = useState<string | null>(null)

  const toggleFilter = (id: string) => {
    setActiveFilters((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    )
  }

  const filteredPlans = samplePlans
    .filter((plan) => {
      // Speed filter
      if (plan.speedValue < speedRange[0] || plan.speedValue > speedRange[1]) {
        return false
      }
      // Category filter
      if (activeFilters.length > 0) {
        return activeFilters.some((filter) => plan.bestFor.includes(filter))
      }
      return true
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, ''))
        case 'price-high':
          return parseFloat(b.price.replace(/[^0-9.]/g, '')) - parseFloat(a.price.replace(/[^0-9.]/g, ''))
        case 'speed-high':
          return b.speedValue - a.speedValue
        case 'speed-low':
          return a.speedValue - b.speedValue
        default:
          return 0
      }
    })

  return (
    <div className="space-y-8">
      {/* Filter Section */}
      <Reveal>
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
          {/* Filter Chips */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-3">
              What do you need it for?
            </h3>
            <div className="flex flex-wrap gap-2">
              {filterChips.map((chip) => {
                const Icon = chip.icon
                const isActive = activeFilters.includes(chip.id)
                return (
                  <motion.button
                    key={chip.id}
                    onClick={() => toggleFilter(chip.id)}
                    className={cn(
                      'flex items-center gap-2 px-4 py-2 rounded-xl font-medium text-sm transition-colors',
                      isActive
                        ? 'bg-brand-500 text-white'
                        : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
                    )}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Icon className="w-4 h-4" />
                    {chip.label}
                  </motion.button>
                )
              })}
            </div>
          </div>

          {/* Speed Slider */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-3">
              Speed range (Mbps)
            </h3>
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-slate-600 dark:text-slate-400 w-20">
                {speedRange[0]} Mbps
              </span>
              <input
                type="range"
                min="0"
                max="500"
                value={speedRange[0]}
                onChange={(e) => setSpeedRange([parseInt(e.target.value), speedRange[1]])}
                className="flex-1 h-2 rounded-full bg-slate-200 dark:bg-slate-700 appearance-none cursor-pointer
                           [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 
                           [&::-webkit-slider-thumb]:bg-brand-500 [&::-webkit-slider-thumb]:rounded-full 
                           [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-lg"
              />
              <span className="text-sm font-medium text-slate-600 dark:text-slate-400 w-8">to</span>
              <input
                type="range"
                min="100"
                max="1000"
                value={speedRange[1]}
                onChange={(e) => setSpeedRange([speedRange[0], parseInt(e.target.value)])}
                className="flex-1 h-2 rounded-full bg-slate-200 dark:bg-slate-700 appearance-none cursor-pointer
                           [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 
                           [&::-webkit-slider-thumb]:bg-brand-500 [&::-webkit-slider-thumb]:rounded-full 
                           [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-lg"
              />
              <span className="text-sm font-medium text-slate-600 dark:text-slate-400 w-24">
                {speedRange[1]} Mbps
              </span>
            </div>
          </div>

          {/* Sort */}
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-500 dark:text-slate-400">
              Showing {filteredPlans.length} of {samplePlans.length} sample plans
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-700 
                         text-slate-700 dark:text-slate-300 text-sm font-medium
                         border-0 focus:ring-2 focus:ring-brand-500"
            >
              {sortOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </Reveal>

      {/* Disclaimer */}
      <Reveal delay={0.1}>
        <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800">
          <p className="text-sm text-amber-800 dark:text-amber-200">
            <strong>Note:</strong> These are sample offers for illustration purposes. 
            Actual pricing, speeds, and availability vary by location. Call to confirm current offers.
          </p>
        </div>
      </Reveal>

      {/* Plans Grid */}
      <StaggerContainer className="grid gap-4">
        <AnimatePresence mode="popLayout">
          {filteredPlans.map((plan) => (
            <StaggerItem key={plan.id}>
              <motion.div
                layout
                className="card-interactive overflow-hidden"
              >
                {/* Main Row */}
                <div className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                    {/* Provider & Plan Name */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: plan.providerColor }}
                        />
                        <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                          {plan.provider}
                        </span>
                      </div>
                      <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white">
                        {plan.name}
                      </h3>
                    </div>

                    {/* Speed */}
                    <div className="flex items-center gap-2 lg:w-40">
                      <Zap className="w-5 h-5 text-brand-500" />
                      <div>
                        <p className="font-bold text-slate-900 dark:text-white">{plan.speed}</p>
                        <p className="text-xs text-slate-500">download</p>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="lg:w-40">
                      <p className="font-display font-bold text-2xl text-slate-900 dark:text-white">
                        {plan.price}
                      </p>
                      <p className="text-xs text-slate-500">{plan.priceNote}</p>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setExpandedPlan(expandedPlan === plan.id ? null : plan.id)}
                        className="p-2 rounded-xl bg-slate-100 dark:bg-slate-700 
                                   text-slate-600 dark:text-slate-400
                                   hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                      >
                        <motion.div
                          animate={{ rotate: expandedPlan === plan.id ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronDown className="w-5 h-5" />
                        </motion.div>
                      </button>
                      <motion.a
                        href={siteConfig.phoneLink}
                        className="btn-primary flex items-center gap-2"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Phone className="w-4 h-4" />
                        <span>Call Now</span>
                      </motion.a>
                    </div>
                  </div>
                </div>

                {/* Expanded Details */}
                <AnimatePresence>
                  {expandedPlan === plan.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-slate-100 dark:border-slate-700">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
                              Features
                            </h4>
                            <ul className="space-y-2">
                              {plan.features.map((feature) => (
                                <li key={feature} className="flex items-start gap-2">
                                  <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span className="text-slate-600 dark:text-slate-400">
                                    {feature}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-slate-900 dark:text-white mb-3">
                              Best For
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {plan.bestFor.map((tag) => (
                                <span
                                  key={tag}
                                  className="px-3 py-1.5 text-sm font-medium rounded-lg
                                             bg-brand-50 dark:bg-brand-900/30 
                                             text-brand-600 dark:text-brand-400"
                                >
                                  {tag.replace('-', ' ')}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="mt-6 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50">
                          <p className="text-sm text-slate-600 dark:text-slate-400">
                            Call <a href={siteConfig.phoneLink} className="text-brand-500 font-semibold hover:underline">{siteConfig.phone}</a> to 
                            confirm this plan is available at your address and get the latest pricing.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </StaggerItem>
          ))}
        </AnimatePresence>
      </StaggerContainer>

      {filteredPlans.length === 0 && (
        <div className="text-center py-12">
          <p className="text-slate-500 dark:text-slate-400">
            No plans match your filters. Try adjusting your criteria.
          </p>
        </div>
      )}
    </div>
  )
}
