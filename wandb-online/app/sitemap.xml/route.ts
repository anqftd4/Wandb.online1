import { siteConfig } from '@/lib/siteConfig'

const pages = [
  { path: '/', priority: 1.0, changefreq: 'weekly' },
  { path: '/compare', priority: 0.9, changefreq: 'weekly' },
  { path: '/deals', priority: 0.9, changefreq: 'weekly' },
  { path: '/tv', priority: 0.8, changefreq: 'weekly' },
  { path: '/bundles', priority: 0.8, changefreq: 'weekly' },
  { path: '/why-wandb', priority: 0.7, changefreq: 'monthly' },
  { path: '/faq', priority: 0.7, changefreq: 'monthly' },
  { path: '/contact', priority: 0.6, changefreq: 'monthly' },
  { path: '/about', priority: 0.6, changefreq: 'monthly' },
  { path: '/providers/verizon', priority: 0.7, changefreq: 'weekly' },
  { path: '/providers/spectrum', priority: 0.7, changefreq: 'weekly' },
  { path: '/providers/att', priority: 0.7, changefreq: 'weekly' },
  { path: '/providers/optimum', priority: 0.7, changefreq: 'weekly' },
  { path: '/privacy-policy', priority: 0.3, changefreq: 'yearly' },
  { path: '/terms-and-conditions', priority: 0.3, changefreq: 'yearly' },
  { path: '/disclosures', priority: 0.4, changefreq: 'yearly' },
  { path: '/accessibility', priority: 0.3, changefreq: 'yearly' },
  { path: '/sitemap', priority: 0.3, changefreq: 'monthly' },
]

export async function GET() {
  const baseUrl = siteConfig.url
  const lastmod = new Date().toISOString().split('T')[0]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>${baseUrl}${page.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
