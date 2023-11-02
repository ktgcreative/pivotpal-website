// pages/sitemap.ts or src/pages/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://pivotpal.info/',
      lastModified: new Date('2023-11-01'),
      changeFrequency: 'daily',
      priority: 1.0,
    },
   // {
    //   url: 'https://pivotpal.info/case-studies',
    //   lastModified: new Date('2023-10-25'),
    //   changeFrequency: 'weekly',
    //   priority: 0.9,
    // },
    {
      url: 'https://pivotpal.info/case-studies/titanic',
      lastModified: new Date('2023-10-15'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://pivotpal.info/case-studies/police',
      lastModified: new Date('2023-10-18'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://pivotpal.info/case-studies/airbnb',
      lastModified: new Date('2023-10-20'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Additional URLs for other case studies or pages can be added here
  ]
}
