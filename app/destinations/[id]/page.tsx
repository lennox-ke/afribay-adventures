import { getAllDestinations, getDestinationById, getAccommodationsByDestination, packages } from "@/lib/data"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Camera, Users, Star, Clock, Award, Shield, Compass, ArrowRight, ChevronRight } from "lucide-react"
import { formatPrice } from "@/lib/utils"
import Link from "next/link"

export async function generateStaticParams() {
  const destinations = await getAllDestinations()
  return destinations.map((d) => ({ id: d.id }))
}

interface DestinationDetailPageProps {
  params: Promise<{ id: string }>
}

// Dynamic SEO metadata per destination
export async function generateMetadata({ params }: DestinationDetailPageProps): Promise<Metadata> {
  const { id } = await params
  const destination = getDestinationById(id)
  if (!destination) return {}

  return {
    title: `${destination.name} Safari Packages & Travel Guide | Kenya`,
    description: `Plan your ${destination.name} safari. Discover wildlife, top lodges, best times to visit, and expert-guided packages. ${destination.description.slice(0, 100)}...`,
    openGraph: {
      title: `${destination.name} Safari | Kenya`,
      description: destination.description,
      images: destination.image ? [{ url: destination.image }] : [],
      type: "website",
    },
    alternates: {
      canonical: `https://yourdomain.com/destinations/${id}`,
    },
    robots: { index: true, follow: true },
  }
}

export default async function DestinationDetailPage({ params }: DestinationDetailPageProps) {
  const { id } = await params
  const destination = getDestinationById(id)
  if (!destination) notFound()

  const accommodations = getAccommodationsByDestination(destination.id)
  const relatedPackages = packages.filter((pkg) => pkg.destinations.includes(destination.id))

  const galleryImages =
    destination.galleryImages?.map((src, index) => ({
      src,
      alt: `${destination.name} Kenya safari — view ${index + 1}`,
      caption: `Experience the beauty of ${destination.name}`,
    })) || []

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: destination.name,
    description: destination.description,
    image: destination.image,
    containedInPlace: { "@type": "Country", name: "Kenya" },
    touristType: ["Wildlife Safari", "Photography", "Nature"],
    hasMap: `https://yourdomain.com/destinations/${id}`,
    offers: relatedPackages.map((pkg) => ({
      "@type": "Offer",
      name: pkg.title,
      price: pkg.price,
      priceCurrency: "USD",
      url: `https://yourdomain.com/packages/${pkg.id}`,
    })),
  }

  return (
    <main
      className="min-h-screen bg-[#F2EFED]"
      itemScope
      itemType="https://schema.org/TouristDestination"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <Navigation />

      {/* ── HERO ── */}
      <section aria-labelledby="destination-name" className="relative pt-20 overflow-hidden">
        {/* Full-bleed hero image with overlay */}
        <div className="relative h-[65vh] min-h-[480px]">
          <img
            src={destination.image || "/placeholder.svg"}
            alt={`${destination.name} — Kenya safari destination`}
            className="w-full h-full object-cover"
            itemProp="image"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2F3B2F] via-black/30 to-black/20" />

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="absolute top-6 left-0 right-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <ol className="flex items-center gap-1.5 text-xs text-white/60">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><ChevronRight className="h-3 w-3" /></li>
                <li><Link href="/destinations" className="hover:text-white transition-colors">Destinations</Link></li>
                <li><ChevronRight className="h-3 w-3" /></li>
                <li className="text-white/90">{destination.name}</li>
              </ol>
            </div>
          </nav>

          {/* Hero content anchored to bottom of image */}
          <div className="absolute bottom-0 left-0 right-0 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge className="bg-[#E8A17D] text-white text-xs px-3 py-1 rounded-full">
                      <MapPin className="h-3 w-3 mr-1" />
                      Kenya
                    </Badge>
                    <Badge className="bg-[#7FB5B5] text-white text-xs px-3 py-1 rounded-full">
                      {relatedPackages.length} Safari Package{relatedPackages.length !== 1 ? "s" : ""}
                    </Badge>
                  </div>
                  <h1
                    id="destination-name"
                    className="font-serif text-4xl md:text-6xl font-bold text-white leading-tight"
                    itemProp="name"
                  >
                    {destination.name}
                  </h1>
                </div>

                {/* Quick stats pill */}
                <div className="flex items-center gap-5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-4 w-fit">
                  {[
                    { icon: Camera, label: "Photography", value: "Excellent" },
                    { icon: Clock, label: "Best Time", value: "Year Round" },
                    { icon: Star, label: "Rating", value: "4.8 / 5" },
                  ].map(({ icon: Icon, label, value }) => (
                    <div key={label} className="text-center min-w-[72px]">
                      <Icon className="h-4 w-4 text-[#E8A17D] mx-auto mb-1" />
                      <p className="text-[10px] text-white/60 uppercase tracking-wider">{label}</p>
                      <p className="text-xs font-semibold text-white mt-0.5">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTRO + CTAs ── */}
      <section aria-labelledby="destination-overview" className="py-16 bg-[#2F3B2F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-3">
              <p className="text-xs uppercase tracking-widest text-[#7FB5B5] font-semibold mb-3">About This Destination</p>
              <h2
                id="destination-overview"
                className="font-serif text-3xl font-bold text-white mb-5"
              >
                Everything You Need to Know
              </h2>
              <p className="text-white/75 leading-relaxed text-base" itemProp="description">
                {destination.description}
              </p>
            </div>
            <div className="lg:col-span-2 flex flex-col gap-3">
              <Button
                asChild
                size="lg"
                className="w-full bg-[#E8A17D] hover:bg-[#7FB5B5] text-white rounded-xl transition-colors duration-300"
              >
                <Link href="#packages">
                  View Safari Packages
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full border-white/30 text-white hover:bg-white hover:text-[#2F3B2F] bg-transparent rounded-xl transition-colors duration-300"
              >
                <Link href="/contact">Plan a Custom Visit</Link>
              </Button>
              <p className="text-xs text-white/40 text-center pt-1">No commitment required · Free consultation</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── HIGHLIGHTS ── */}
      <section aria-labelledby="destination-highlights" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-widest text-[#7FB5B5] font-semibold mb-2">What Makes It Special</p>
          <h2
            id="destination-highlights"
            className="font-serif text-3xl font-bold text-[#2F3B2F] mb-10"
          >
            Destination Highlights
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {destination.highlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-5 text-center shadow-sm hover:shadow-md transition-shadow duration-300 border border-stone-100"
              >
                <div className="w-10 h-10 bg-[#E8A17D]/15 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Star className="h-5 w-5 text-[#E8A17D]" />
                </div>
                <p className="text-sm font-semibold text-[#2F3B2F] leading-snug">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      {galleryImages.length > 0 && (
        <section aria-labelledby="destination-gallery" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs uppercase tracking-widest text-[#7FB5B5] font-semibold mb-2">Photo Gallery</p>
            <h2
              id="destination-gallery"
              className="font-serif text-3xl font-bold text-[#2F3B2F] mb-10"
            >
              {destination.name} in Pictures
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className={`relative group overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 ${
                    index === 0 ? "col-span-2 md:col-span-1 row-span-2" : ""
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className={`w-full object-cover group-hover:scale-105 transition-transform duration-500 ${
                      index === 0 ? "h-full min-h-[320px]" : "h-48"
                    }`}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="absolute bottom-3 left-3 right-3 text-white text-xs font-medium">
                      {image.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── ACCOMMODATIONS ── */}
      {accommodations.length > 0 && (
        <section aria-labelledby="destination-stays" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs uppercase tracking-widest text-[#7FB5B5] font-semibold mb-2">Where to Stay</p>
            <h2
              id="destination-stays"
              className="font-serif text-3xl font-bold text-[#2F3B2F] mb-10"
            >
              Lodges & Camps in {destination.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {accommodations.map((accommodation) => (
                <Card
                  key={accommodation.id}
                  className="border-0 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                  itemScope
                  itemType="https://schema.org/LodgingBusiness"
                >
                  <div className="relative">
                    <img
                      src={accommodation.image || "/placeholder.svg"}
                      alt={`${accommodation.name} — lodge in ${destination.name}`}
                      className="w-full h-52 object-cover"
                      itemProp="image"
                      loading="lazy"
                    />
                    <Badge className="absolute top-4 left-4 bg-[#E8A17D] text-white capitalize text-xs px-3 rounded-full">
                      {accommodation.type}
                    </Badge>
                    <div className="absolute top-4 right-4 bg-white rounded-full px-2.5 py-1 flex items-center gap-1 shadow-sm">
                      <Star className="h-3 w-3 text-[#E8A17D] fill-current" />
                      <span className="text-xs font-semibold text-[#2F3B2F]">{accommodation.rating}</span>
                    </div>
                  </div>
                  <CardContent className="p-5">
                    <h3 className="font-semibold text-[#2F3B2F] text-base mb-1.5" itemProp="name">
                      {accommodation.name}
                    </h3>
                    <p className="text-sm text-stone-500 mb-4 line-clamp-2" itemProp="description">
                      {accommodation.description}
                    </p>
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="text-xs text-stone-400 mb-0.5">Per night from</p>
                        <p className="text-xl font-bold text-[#2F3B2F]" itemProp="priceRange">
                          {formatPrice(accommodation.pricePerNight)}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {accommodation.amenities.slice(0, 3).map((amenity, index) => (
                        <span
                          key={index}
                          className="text-[10px] bg-[#F2EFED] text-stone-500 border border-stone-200 px-2.5 py-1 rounded-full"
                        >
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── PACKAGES ── */}
      <section id="packages" aria-labelledby="destination-packages" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-widest text-[#7FB5B5] font-semibold mb-2">Ready to Go?</p>
          <h2
            id="destination-packages"
            className="font-serif text-3xl font-bold text-[#2F3B2F] mb-10"
          >
            Safari Packages to {destination.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedPackages.map((pkg) => (
              <Card
                key={pkg.id}
                className="border-0 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                itemScope
                itemType="https://schema.org/TouristTrip"
              >
                <div className="relative">
                  <img
                    src={pkg.image || "/placeholder.svg"}
                    alt={`${pkg.title} — ${destination.name} safari`}
                    className="w-full h-48 object-cover"
                    itemProp="image"
                    loading="lazy"
                  />
                  <Badge className="absolute top-4 left-4 bg-[#E8A17D] text-white capitalize text-xs px-3 rounded-full">
                    {pkg.category}
                  </Badge>
                </div>
                <CardContent className="p-5">
                  <h3 className="font-semibold text-[#2F3B2F] text-base mb-2" itemProp="name">
                    {pkg.title}
                  </h3>
                  <p className="text-sm text-stone-500 mb-4 line-clamp-2" itemProp="description">
                    {pkg.description}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
                      <p className="text-xs text-stone-400 mb-0.5">From</p>
                      <p className="text-xl font-bold text-[#2F3B2F]">
                        <span itemProp="price" content={String(pkg.price)}>
                          {formatPrice(pkg.price)}
                        </span>
                        <meta itemProp="priceCurrency" content="USD" />
                      </p>
                    </div>
                    <span className="text-xs text-stone-400 bg-[#F2EFED] px-3 py-1.5 rounded-full">
                      {pkg.duration}
                    </span>
                  </div>
                  <Button
                    asChild
                    className="w-full bg-[#E8A17D] hover:bg-[#7FB5B5] text-white rounded-xl transition-colors duration-300"
                  >
                    <Link href={`/packages/${pkg.id}`} aria-label={`View ${pkg.title} package`}>
                      View Package
                      <ArrowRight className="h-3.5 w-3.5 ml-1.5" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY VISIT ── */}
      <section aria-labelledby="why-visit" className="py-20 bg-[#2F3B2F] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{ backgroundImage: `radial-gradient(circle at 30% 50%, #E8A17D 0%, transparent 60%)` }}
        />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            id="why-visit"
            className="font-serif text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Why Visit {destination.name}?
          </h2>
          <p className="text-white/60 mb-14 max-w-xl mx-auto text-sm">
            Every destination earns its reputation. Here's what sets {destination.name} apart.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Award,
                title: "Award-Winning Destination",
                desc: "Globally recognised for exceptional and authentic wildlife encounters.",
              },
              {
                icon: Shield,
                title: "Safe & Professionally Guided",
                desc: "Vetted guides, safety protocols, and 24/7 support throughout your stay.",
              },
              {
                icon: Compass,
                title: "Deep Local Expertise",
                desc: "Our guides carry decades of knowledge of wildlife behaviour and local culture.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 transition-colors duration-300"
              >
                <div className="w-14 h-14 bg-[#E8A17D]/15 rounded-full flex items-center justify-center mx-auto mb-5">
                  <Icon className="h-7 w-7 text-[#E8A17D]" />
                </div>
                <h3 className="font-semibold text-white text-base mb-3">{title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}