"use client" // MUST be the very first line

import { notFound } from 'next/navigation'
import { accommodations, getDestinationById, packages } from '@/lib/data'
import {
  Star,
  MapPin,
  Wifi,
  Car,
  Utensils,
  Waves,
  Dumbbell,
  SpadeIcon as Spa,
  Users,
  Phone,
  Mail,
  MessageSquare,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Sparkles,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import PageTransition from '@/components/PageTransition'

/* ------------------------------------------------------------------ */
/* 1. Gallery component                                               */
/* ------------------------------------------------------------------ */
function Gallery({ images, name }: { images: string[]; name: string }) {
  const [index, setIndex] = useState(0)

  const next = () => setIndex((i) => (i + 1) % images.length)
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length)

  if (!images.length) return null

  return (
    <section aria-labelledby="gallery-heading" className="mb-12">
      <h2 id="gallery-heading" className="font-serif text-3xl font-bold text-[#2F3B2F] mb-6">
        Gallery
      </h2>

      <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl">
        <Image
          src={images[index]}
          alt={`${name} — photo ${index + 1} of ${images.length}`}
          fill
          className="object-cover transition-transform duration-500"
        />

        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              aria-label="Previous image"
              className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/30 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/50 transition"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={next}
              aria-label="Next image"
              className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/30 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/50 transition"
            >
              <ChevronRight size={24} />
            </button>
            <div className="absolute bottom-4 right-4 bg-black/40 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
              {index + 1} / {images.length}
            </div>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`View image ${i + 1}`}
              className={`relative w-24 h-16 shrink-0 rounded-lg overflow-hidden border-2 transition ${
                i === index ? 'border-[#7FB5B5]' : 'border-transparent'
              }`}
            >
              <Image src={img} alt="" fill className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* 2. Amenity icon helper                                             */
/* ------------------------------------------------------------------ */
const getAmenityIcon = (amenity: string) => {
  const amenityLower = amenity.toLowerCase()
  if (amenityLower.includes('wifi')) return <Wifi className="h-5 w-5" />
  if (amenityLower.includes('pool')) return <Waves className="h-5 w-5" />
  if (amenityLower.includes('spa')) return <Spa className="h-5 w-5" />
  if (amenityLower.includes('restaurant')) return <Utensils className="h-5 w-5" />
  if (amenityLower.includes('gym') || amenityLower.includes('fitness'))
    return <Dumbbell className="h-5 w-5" />
  if (amenityLower.includes('transport') || amenityLower.includes('transfer'))
    return <Car className="h-5 w-5" />
  return <Star className="h-5 w-5" />
}

/* ------------------------------------------------------------------ */
/* 3. Page component                                                  */
/* ------------------------------------------------------------------ */
export default function AccommodationDetailPage() {
  const params = useParams()
  const [accommodation, setAccommodation] = useState<any>(null)
  const [destination, setDestination] = useState<any>(null)
  const [relatedPackages, setRelatedPackages] = useState<any[]>([])
  const [galleryImages, setGalleryImages] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!params?.id) return

    const acc = accommodations.find((a) => a.id === params.id)
    if (!acc) {
      notFound()
      return
    }

    setAccommodation(acc)

    const dest = getDestinationById(acc.destinationId)
    setDestination(dest)

    /* ----------------------------------------------------------
     * Packages that mention this accommodation's destination
     * ---------------------------------------------------------- */
    const relatedPkgs = packages
      .filter((pkg) =>
        pkg.destinations.some((d) => d.toLowerCase() === acc.destinationId.toLowerCase())
      )
      .slice(0, 3)
    setRelatedPackages(relatedPkgs)

    const images = acc.galleryImages?.length > 0 ? acc.galleryImages : [acc.image].filter(Boolean)
    setGalleryImages(images)

    /* ----------------------------------------------------------
     * SEO: set document title + meta description dynamically
     * since this is a client component
     * ---------------------------------------------------------- */
    if (typeof document !== 'undefined') {
      document.title = `${acc.name} | ${acc.location} Safari Accommodation — Afribay Adventures`

      const metaDesc = document.querySelector('meta[name="description"]')
      const description = `${acc.name} in ${acc.location}: ${acc.description?.slice(0, 140)}... Book this ${acc.type} with Afribay Adventures, Kenya's trusted safari specialists.`
      if (metaDesc) {
        metaDesc.setAttribute('content', description)
      } else {
        const tag = document.createElement('meta')
        tag.name = 'description'
        tag.content = description
        document.head.appendChild(tag)
      }

      // JSON-LD structured data
      const existingScript = document.getElementById('accommodation-jsonld')
      if (existingScript) existingScript.remove()

      const script = document.createElement('script')
      script.id = 'accommodation-jsonld'
      script.type = 'application/ld+json'
      script.textContent = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'LodgingBusiness',
        name: acc.name,
        description: acc.description,
        image: acc.image,
        address: {
          '@type': 'PostalAddress',
          addressLocality: acc.location,
          addressCountry: 'KE',
        },
        aggregateRating: acc.rating
          ? {
              '@type': 'AggregateRating',
              ratingValue: acc.rating,
              bestRating: '5',
            }
          : undefined,
        amenityFeature: acc.amenities?.map((a: string) => ({
          '@type': 'LocationFeatureSpecification',
          name: a,
        })),
      })
      document.head.appendChild(script)
    }

    setIsLoading(false)
  }, [params?.id])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#F2EFED] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#7FB5B5] mx-auto mb-4"></div>
          <p className="text-stone-500">Loading accommodation details...</p>
        </div>
      </div>
    )
  }

  if (!accommodation) {
    notFound()
    return null
  }

  return (
    <PageTransition type="elegant" duration={600}>
      <div className="min-h-screen bg-[#F2EFED]">
        {/* Hero */}
        <section className="relative h-[70vh] flex items-end overflow-hidden">
          <Image
            src={accommodation.image || '/placeholder.svg'}
            alt={`${accommodation.name}, a ${accommodation.type} in ${accommodation.location}, Kenya`}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2F3B2F]/80 via-[#2F3B2F]/20 to-transparent" />

          <div className="relative z-10 w-full p-8 md:p-12">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <Badge className="bg-[#E8A17D] text-white border-0 shadow-md capitalize">
                  {accommodation.type}
                </Badge>
                <Badge className="bg-white/15 backdrop-blur-sm text-white border border-white/20 shadow-md">
                  <MapPin className="h-3 w-3 mr-1" />
                  {accommodation.location}
                </Badge>
              </div>

              <h1 className="font-serif text-4xl md:text-6xl font-bold text-white drop-shadow-md mb-3">
                {accommodation.name}
              </h1>

              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(accommodation.rating)
                        ? 'fill-[#E8A17D] text-[#E8A17D]'
                        : 'text-white/40'
                    }`}
                  />
                ))}
                <span className="ml-1 text-lg text-white">{accommodation.rating}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Left */}
              <div className="lg:col-span-2 space-y-12">
                <Card className="bg-white border-0 shadow-md rounded-2xl">
                  <CardHeader>
                    <CardTitle className="font-serif text-3xl text-[#2F3B2F]">About This Accommodation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-stone-600 leading-relaxed text-lg">{accommodation.description}</p>
                  </CardContent>
                </Card>

                <Gallery images={galleryImages} name={accommodation.name} />

                <Card className="bg-white border-0 shadow-md rounded-2xl">
                  <CardHeader>
                    <CardTitle className="font-serif text-3xl text-[#2F3B2F]">Amenities & Features</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {accommodation.amenities.map((amenity: string, idx: number) => (
                        <div
                          key={idx}
                          className="flex items-center gap-3 p-3 bg-[#F2EFED] rounded-xl"
                        >
                          <div className="text-[#7FB5B5]">{getAmenityIcon(amenity)}</div>
                          <span className="text-sm text-[#2F3B2F] font-medium">{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {destination && (
                  <Card className="bg-white border-0 shadow-md rounded-2xl">
                    <CardHeader>
                      <CardTitle className="font-serif text-3xl text-[#2F3B2F]">
                        Location: {destination.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-stone-600 mb-4 leading-relaxed">{destination.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {destination.highlights.map((h: string) => (
                          <Badge key={h} variant="outline" className="border-[#7FB5B5] text-[#7FB5B5]">
                            {h}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>

              {/* Sidebar */}
              <aside className="lg:col-span-1">
                <div className="sticky top-8 space-y-6">
                  <Card className="bg-[#2F3B2F] border-0 shadow-xl rounded-2xl overflow-hidden">
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#E8A17D]/20 rounded-full blur-2xl" />
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-white">
                        <Sparkles className="h-5 w-5 text-[#E8A17D]" />
                        Plan Your Stay
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-white/70 text-sm leading-relaxed">
                        Send us a quick message and our safari specialists will get back to you with availability and
                        a tailored quote — usually within a few hours.
                      </p>
                      <Link href={`/contact?subject=Enquiry about ${encodeURIComponent(accommodation.name)}`}>
                        <Button className="w-full bg-[#E8A17D] hover:bg-[#7FB5B5] text-white rounded-xl transition-colors duration-300">
                          <MessageSquare className="h-4 w-4 mr-2" />
                          Request Availability
                        </Button>
                      </Link>
                      <div className="border-t border-white/10 pt-4 space-y-3">
                        <a href="tel:+254708777037" className="flex items-center gap-3 text-white/90 hover:text-[#E8A17D] transition-colors">
                          <Phone className="h-4 w-4 text-[#7FB5B5]" />
                          <span className="text-sm">+254 708 777 037</span>
                        </a>
                        <a href="mailto:adventure@afribayke.com" className="flex items-center gap-3 text-white/90 hover:text-[#E8A17D] transition-colors">
                          <Mail className="h-4 w-4 text-[#7FB5B5]" />
                          <span className="text-sm">adventure@afribayke.com</span>
                        </a>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-white border-0 shadow-md rounded-2xl">
                    <CardContent className="p-6 space-y-3">
                      <h3 className="font-serif text-lg font-bold text-[#2F3B2F]">Why Book Through Afribay</h3>
                      {[
                        'Local rates with no hidden booking fees',
                        'Itineraries tailored to your travel dates',
                        '24/7 support before and during your trip',
                      ].map((item) => (
                        <div key={item} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-[#7FB5B5] mt-0.5 shrink-0" />
                          <span className="text-sm text-stone-600">{item}</span>
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  {relatedPackages.length > 0 && (
                    <Card className="bg-white border-0 shadow-md rounded-2xl">
                      <CardHeader>
                        <CardTitle className="text-[#2F3B2F] font-serif">Packages Including This Stay</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {relatedPackages.map((pkg) => (
                          <Link key={pkg.id} href={`/packages/${pkg.category}/${pkg.id}`}>
                            <div className="p-3 rounded-xl bg-[#F2EFED] hover:bg-[#E8A17D]/10 transition border border-transparent hover:border-[#E8A17D]/30">
                              <h4 className="font-semibold text-[#2F3B2F]">{pkg.title}</h4>
                              <p className="text-sm text-stone-500">{pkg.duration}</p>
                              <Badge
                                variant="outline"
                                className="mt-1 text-xs border-[#7FB5B5] text-[#7FB5B5] capitalize"
                              >
                                {pkg.category}
                              </Badge>
                            </div>
                          </Link>
                        ))}
                      </CardContent>
                    </Card>
                  )}
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#2F3B2F] to-[#7FB5B5]" />
          <div className="relative max-w-4xl mx-auto px-4 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Experience {accommodation.name}?
            </h2>
            <p className="text-lg text-white/85 mb-8">
              Let our safari experts craft the perfect Kenyan getaway around this stay.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[#2F3B2F] bg-transparent"
                >
                  Contact Us
                </Button>
              </Link>
              <Link href="/booking">
                <Button size="lg" className="bg-[#E8A17D] hover:bg-[#E8A17D]/90 text-white">
                  Book Your Safari
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  )
}