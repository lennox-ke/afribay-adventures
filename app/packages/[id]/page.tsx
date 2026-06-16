import type { Metadata } from 'next'
import { getPackages } from '@/lib/data'
import { formatPrice } from '@/lib/utils'
import PackageDetailClient from './PackageDetailClient'

interface PackageDetailPageProps {
  params: Promise<{ id: string }>
}

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export async function generateMetadata({
  params,
}: PackageDetailPageProps): Promise<Metadata> {
  const { id } = await params
  const pkg = getPackages().find((p) => p.id === id)

  if (!pkg) {
    return {
      title: 'Package Not Found | Afribay Adventures',
      description: 'The requested safari package could not be found.',
    }
  }

  const baseUrl = 'https://afribayke.com'
  const pageUrl = `${baseUrl}/packages/${id}`

  const title = `${pkg.title} – ${pkg.category} Safari Package | Afribay Adventures`

  const description = [
    pkg.description,
    `Duration: ${pkg.duration}.`,
    pkg.category === 'premium'
      ? 'Contact us for pricing.'
      : `Price from ${formatPrice(pkg.price)}.`,
    `Book your ${pkg.category} Kenya safari adventure today!`,
  ].join(' ')

  const keywords = [
    pkg.title,
    `${pkg.category} safari`,
    'Kenya wildlife tour',
    ...pkg.destinations,
    'safari booking',
    'African adventure',
  ].join(', ')

  const heroImage = {
    url: pkg.image || '/default-safari-package.jpg',
    width: 1200,
    height: 630,
    alt: `${pkg.title} Safari Package in Kenya`,
  }

  return {
    title,
    description,
    keywords,
    metadataBase: new URL(baseUrl),
    alternates: { canonical: pageUrl },
    openGraph: {
      title,
      description,
      url: pageUrl,
      siteName: 'Afribay Adventures',
      images: [heroImage],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [heroImage.url],
    },
  }
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default async function PackageDetailPage({ params }: PackageDetailPageProps) {
  const { id } = await params
  return <PackageDetailClient params={{ id }} />
}

// ---------------------------------------------------------------------------
// Static params
// ---------------------------------------------------------------------------

export async function generateStaticParams() {
  return getPackages().map((pkg) => ({ id: pkg.id }))
}