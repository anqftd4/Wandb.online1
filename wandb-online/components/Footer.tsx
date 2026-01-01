'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Phone, Mail, Clock } from 'lucide-react'
import { siteConfig } from '@/lib/siteConfig'
import { Reveal, StaggerContainer, StaggerItem } from './Reveal'

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Reveal>
              <Link href="/" className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-cyan-500 
                               flex items-center justify-center">
                  <span className="text-white font-bold text-xl font-display">W</span>
                </div>
                <span className="font-display font-bold text-2xl">
                  wandb<span className="text-brand-400">.online</span>
                </span>
              </Link>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-slate-400 mb-6 max-w-sm">
                An independent comparison and connection service helping you explore 
                internet and TV options in your area.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="space-y-3">
                <a
                  href={siteConfig.phoneLink}
                  className="flex items-center gap-3 text-white hover:text-brand-400 transition-colors"
                >
                  <Phone className="w-5 h-5 text-brand-400" />
                  <span className="font-semibold">{siteConfig.phone}</span>
                </a>
                <a
                  href={siteConfig.emailLink}
                  className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5 text-brand-400" />
                  <span>{siteConfig.email}</span>
                </a>
                <div className="flex items-center gap-3 text-slate-400">
                  <Clock className="w-5 h-5 text-brand-400" />
                  <span>{siteConfig.hours}</span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Links Columns */}
          <StaggerContainer className="space-y-4">
            <StaggerItem>
              <h4 className="font-display font-semibold text-lg mb-4">Services</h4>
            </StaggerItem>
            {siteConfig.footerLinks.services.map((link) => (
              <StaggerItem key={link.href}>
                <Link
                  href={link.href}
                  className="block text-slate-400 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <StaggerContainer className="space-y-4" delayChildren={0.1}>
            <StaggerItem>
              <h4 className="font-display font-semibold text-lg mb-4">Providers</h4>
            </StaggerItem>
            {siteConfig.footerLinks.providers.map((link) => (
              <StaggerItem key={link.href}>
                <Link
                  href={link.href}
                  className="block text-slate-400 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <StaggerContainer className="space-y-4" delayChildren={0.2}>
            <StaggerItem>
              <h4 className="font-display font-semibold text-lg mb-4">Company</h4>
            </StaggerItem>
            {siteConfig.footerLinks.company.map((link) => (
              <StaggerItem key={link.href}>
                <Link
                  href={link.href}
                  className="block text-slate-400 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              </StaggerItem>
            ))}
            <StaggerItem>
              <div className="pt-4 mt-4 border-t border-slate-800">
                <h4 className="font-display font-semibold text-sm mb-3 text-slate-500">Legal</h4>
                <div className="space-y-2">
                  {siteConfig.footerLinks.legal.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block text-sm text-slate-500 hover:text-slate-300 transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </div>

      {/* Disclaimer Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-slate-500 text-sm leading-relaxed text-center max-w-4xl mx-auto">
            {siteConfig.disclaimers.footer}
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-slate-600 text-sm text-center">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
