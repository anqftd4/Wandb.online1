'use client'

import { useReducedMotion } from 'framer-motion'
import { motion } from 'framer-motion'

interface SignalBackgroundProps {
  variant?: 'hero' | 'section' | 'subtle'
  className?: string
}

export function SignalBackground({ variant = 'hero', className = '' }: SignalBackgroundProps) {
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return (
      <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
        <div className="absolute inset-0 gradient-mesh-bg opacity-50" />
      </div>
    )
  }

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Gradient mesh background */}
      <div className="absolute inset-0 gradient-mesh-bg opacity-50" />
      
      {/* Animated signal lines */}
      {variant === 'hero' && (
        <>
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`h-${i}`}
              className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent"
              style={{ top: `${20 + i * 15}%` }}
              animate={{
                opacity: [0.2, 0.5, 0.2],
                scaleX: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.5,
              }}
            />
          ))}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={`v-${i}`}
              className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-brand-500/20 to-transparent"
              style={{ left: `${25 + i * 25}%` }}
              animate={{
                opacity: [0.1, 0.3, 0.1],
                scaleY: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 5 + i,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.7,
              }}
            />
          ))}
        </>
      )}

      {variant === 'section' && (
        <>
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={`s-${i}`}
              className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/20 to-transparent"
              style={{ top: `${30 + i * 20}%` }}
              animate={{
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.3,
              }}
            />
          ))}
        </>
      )}

      {/* Floating particles */}
      {variant === 'hero' && (
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`p-${i}`}
              className="absolute w-1 h-1 rounded-full bg-brand-500/40"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      )}

      {/* Corner glows */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-500/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
    </div>
  )
}

interface WaveDividerProps {
  className?: string
  flip?: boolean
}

export function WaveDivider({ className = '', flip = false }: WaveDividerProps) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <div className={`relative w-full overflow-hidden ${flip ? 'rotate-180' : ''} ${className}`}>
      <svg
        viewBox="0 0 1440 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0,50 C360,100 720,0 1080,50 C1260,75 1380,25 1440,50 L1440,100 L0,100 Z"
          fill="currentColor"
          className="text-slate-100 dark:text-slate-800"
          animate={
            prefersReducedMotion
              ? {}
              : {
                  d: [
                    'M0,50 C360,100 720,0 1080,50 C1260,75 1380,25 1440,50 L1440,100 L0,100 Z',
                    'M0,50 C360,0 720,100 1080,50 C1260,25 1380,75 1440,50 L1440,100 L0,100 Z',
                    'M0,50 C360,100 720,0 1080,50 C1260,75 1380,25 1440,50 L1440,100 L0,100 Z',
                  ],
                }
          }
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </svg>
    </div>
  )
}
