import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://www.centroid.com.ar', lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: 'https://www.centroid.com.ar/servicios', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://www.centroid.com.ar/nosotros', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://www.centroid.com.ar/contacto', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://www.centroid.com.ar/blog', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.6 },
  ]
}
