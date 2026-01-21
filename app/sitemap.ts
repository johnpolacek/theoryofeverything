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

  const mainPages = sections.map((section) => ({
    url: `${baseUrl}${section}`,
    lastModified: new Date('2024-06-19'),
    changeFrequency: 'monthly' as const,
    priority: section === '' ? 1.0 : 0.8,
  }))

  // Append appendix page
  return [
    ...mainPages,
    {
      url: `${baseUrl}/appendix`,
      lastModified: new Date('2024-06-19'),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ]
}
