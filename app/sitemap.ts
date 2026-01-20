import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com'

  // Main sections with anchor links
  const sections = [
    '',
    '#axioms',
    '#meaning-of-life',
    '#consciousness',
    '#our-universe',
    '#spacetime',
    '#higher-dimensions',
    '#infinity',
    '#black-holes',
    '#aliens',
    '#simulation',
    '#god',
    '#why',
    '#holos',
  ]

  return sections.map((section) => ({
    url: `${baseUrl}${section}`,
    lastModified: new Date('2024-06-19'),
    changeFrequency: 'monthly' as const,
    priority: section === '' ? 1.0 : 0.8,
  }))
}
