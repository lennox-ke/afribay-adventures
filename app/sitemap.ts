import { MetadataRoute } from 'next'
import { posts } from './blog/data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.afribayke.com'

  // Static pages
  const staticPages = [
    '/',
    '/about',
    '/packages',
    '/destinations',
    '/accommodations',
    '/booking',
    '/events',
    '/blog',
    '/contact',
  ]

  // Generate sitemap entries for static pages
  const staticEntries: MetadataRoute.Sitemap = staticPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date('2026-05-11'),
    changeFrequency: 'weekly' as const,
    priority: route === '/' ? 1.0 : 0.8,
  }))

  // Generate sitemap entries for blog posts
  const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Individual Event Pages
  const eventPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/events/global-data-festival-kenya-2026`,
      lastModified: new Date('2026-05-10'),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/events/big-5-construct-kenya-2026`,
      lastModified: new Date('2026-05-10'),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/events/kata-agm-convention-2026`,
      lastModified: new Date('2026-05-11'),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/events/agritec-africa-2026`,
      lastModified: new Date('2026-05-11'),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/events/africa-food-show-kenya-2026`,
      lastModified: new Date('2026-05-11'),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/events/aviadev-africa-2026`,
      lastModified: new Date('2026-05-11'),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/events/nairobi-international-trade-fair-2026`,
      lastModified: new Date('2026-05-11'),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/events/magical-kenya-travel-expo-2026`,
      lastModified: new Date('2026-05-11'),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/events/ketiba-awards-2026`,
      lastModified: new Date('2026-05-11'),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
  ]

  // Safari Packages
  const packagePages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/packages/east-africa-unveiled-13-day`,
      lastModified: new Date('2026-05-11'),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/packages/10-day-tanzania-luxury-safari`,
      lastModified: new Date('2026-05-11'),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/packages/8-day-premium-tanzania-safari`,
      lastModified: new Date('2026-05-11'),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/packages/kenyas-wild-heart-10-day`,
      lastModified: new Date('2026-05-11'),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/packages/kenyas-untamed-beauty-8-day`,
      lastModified: new Date('2026-05-11'),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/packages/mid-range`,
      lastModified: new Date('2026-05-11'),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ]

  // Destination Pages
  const destinationPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/destinations/masai-mara`,
      lastModified: new Date('2026-05-11'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/destinations/amboseli`,
      lastModified: new Date('2026-05-11'),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/destinations/tsavo`,
      lastModified: new Date('2026-05-11'),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/destinations/samburu`,
      lastModified: new Date('2026-05-11'),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/destinations/lake-nakuru`,
      lastModified: new Date('2026-05-11'),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/destinations/diani-beach`,
      lastModified: new Date('2026-05-11'),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/destinations/mombasa`,
      lastModified: new Date('2026-05-11'),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/destinations/zanzibar`,
      lastModified: new Date('2026-05-11'),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/destinations/lamu-island`,
      lastModified: new Date('2026-05-11'),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/destinations/malindi`,
      lastModified: new Date('2026-05-11'),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/destinations/watamu`,
      lastModified: new Date('2026-05-11'),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/destinations/mount-kenya`,
      lastModified: new Date('2026-05-11'),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/destinations/lake-naivasha`,
      lastModified: new Date('2026-05-11'),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
  ]

  // Accommodation Pages - Masai Mara
  const accommodationMara: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/accommodations/ilkeliani-camp`,
      lastModified: new Date('2026-05-11'),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/accommodations/governors-camp`,
      lastModified: new Date('2026-05-11'),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/accommodations/jw-marriott-masai-mara`,
      lastModified: new Date('2026-05-11'),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/accommodations/tipilikwani-mara-camp`,
      lastModified: new Date('2026-05-11'),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
  ]

  // Accommodation Pages - Amboseli
  const accommodationAmboseli: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/accommodations/elephant-gorge-camp`,
      lastModified: new Date('2026-05-11'),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/accommodations/angama-amboseli`,
      lastModified: new Date('2026-05-11'),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/accommodations/tulia-amboseli-safari-camp`,
      lastModified: new Date('2026-05-11'),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/accommodations/ol-tukai-lodge-amboseli`,
      lastModified: new Date('2026-05-11'),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
  ]

  // Accommodation Pages - Samburu
  const accommodationSamburu: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/accommodations/saruni-samburu`,
      lastModified: new Date('2026-05-11'),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/accommodations/elephant-bedroom-camp`,
      lastModified: new Date('2026-05-11'),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/accommodations/ashnil-samburu-camp`,
      lastModified: new Date('2026-05-11'),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/accommodations/samburu-intrepids-tented-camp`,
      lastModified: new Date('2026-05-11'),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
  ]

  // Accommodation Pages - Tsavo
  const accommodationTsavo: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/accommodations/boma-simba-safari-lodge`,
      lastModified: new Date('2026-05-11'),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/accommodations/salt-lick-safari-lodge`,
      lastModified: new Date('2026-05-11'),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/accommodations/voyager-ziwani-tented-camp`,
      lastModified: new Date('2026-05-11'),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/accommodations/soroi-lions-bluff-lodge`,
      lastModified: new Date('2026-05-11'),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/accommodations/taita-hills-safari-resort-spa`,
      lastModified: new Date('2026-05-11'),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/accommodations/kipalo-hills-camp`,
      lastModified: new Date('2026-05-11'),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
  ]

  // Accommodation Pages - Diani Beach
  const accommodationDiani: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/accommodations/almanara`,
      lastModified: new Date('2026-05-11'),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/accommodations/baobab-beach-resort`,
      lastModified: new Date('2026-05-11'),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/accommodations/the-maji-beach-boutique-hotel`,
      lastModified: new Date('2026-05-11'),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/accommodations/diani-reef-beach-resort`,
      lastModified: new Date('2026-05-11'),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/accommodations/swahili-beach-resort`,
      lastModified: new Date('2026-05-11'),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/accommodations/leopard-beach-resort-spa`,
      lastModified: new Date('2026-05-11'),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
  ]

  // Accommodation Pages - Zanzibar
  const accommodationZanzibar: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/accommodations/sandies-baobab-beach`,
      lastModified: new Date('2026-05-11'),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/accommodations/baraza-resort-and-spa-zanzibar`,
      lastModified: new Date('2026-05-11'),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/accommodations/breezes-beach-club-spa-zanzibar`,
      lastModified: new Date('2026-05-11'),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/accommodations/the-palms-zanzibar`,
      lastModified: new Date('2026-05-11'),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/accommodations/zawadi-hotel-zanzibar`,
      lastModified: new Date('2026-05-11'),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/accommodations/zanzibar-serena-hotel`,
      lastModified: new Date('2026-05-11'),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
  ]

  // Accommodation Pages - Mombasa
  const accommodationMombasa: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/accommodations/sarova-whitesands-beach-resort-spa`,
      lastModified: new Date('2026-05-11'),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
  ]

  // Accommodation Pages - Watamu
  const accommodationWatamu: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/accommodations/temple-point-resort`,
      lastModified: new Date('2026-05-11'),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/accommodations/turtle-bay-beach-resort`,
      lastModified: new Date('2026-05-11'),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/accommodations/medina-palms`,
      lastModified: new Date('2026-05-11'),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/accommodations/barracuda-inn-resort`,
      lastModified: new Date('2026-05-11'),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/accommodations/watamu-treehouse`,
      lastModified: new Date('2026-05-11'),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
  ]

  // Accommodation Pages - Malindi
  const accommodationMalindi: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/accommodations/billionaire-resort-and-retreat`,
      lastModified: new Date('2026-05-11'),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/accommodations/diamonds-malindi`,
      lastModified: new Date('2026-05-11'),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
  ]

  // Accommodation Pages - Nairobi / Other
  const accommodationOther: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/accommodations/eka-hotel-nairobi`,
      lastModified: new Date('2026-05-11'),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
  ]

  // Legal Pages
  const legalPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date('2026-05-11'),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: new Date('2026-05-11'),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ]

  return [
    ...staticEntries,
    ...blogEntries,
    ...eventPages,
    ...packagePages,
    ...destinationPages,
    ...accommodationMara,
    ...accommodationAmboseli,
    ...accommodationSamburu,
    ...accommodationTsavo,
    ...accommodationDiani,
    ...accommodationZanzibar,
    ...accommodationMombasa,
    ...accommodationWatamu,
    ...accommodationMalindi,
    ...accommodationOther,
    ...legalPages,
  ]
}