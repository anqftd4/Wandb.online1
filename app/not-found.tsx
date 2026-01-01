import Link from 'next/link'
import { Home, Phone } from 'lucide-react'
import { siteConfig } from '@/lib/siteConfig'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="font-display font-bold text-6xl text-brand-600 mb-4">404</h1>
        <h2 className="font-display font-bold text-2xl text-slate-900 dark:text-white mb-4">
          Page Not Found
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-md">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. 
          It might have been moved or doesn&apos;t exist.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl 
                       bg-brand-600 text-white font-medium hover:bg-brand-700 transition-colors"
          >
            <Home className="w-5 h-5" />
            Go Home
          </Link>
          <a
            href={siteConfig.phoneLink}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl 
                       border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 
                       font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <Phone className="w-5 h-5" />
            Call {siteConfig.phone}
          </a>
        </div>
      </div>
    </div>
  )
}
