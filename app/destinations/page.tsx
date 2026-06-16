"use client"

import Head from "next/head"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Camera, Users, Star, ArrowRight, Binoculars } from "lucide-react"
import { destinations, packages } from "@/lib/data"
import Link from "next/link"
import PageTransition from "@/components/PageTransition"

export default function DestinationsPage() {
  const getPackageCountForDestination = (destinationId: string) =>
    packages.filter((pkg) => pkg.destinations.includes(destinationId)).length

  return (
    <>
      <Head>
        <title>Kenya Safari Destinations | Masai Mara, Amboseli & More</title>
        <meta
          name="description"
          content="Explore Kenya's top safari destinations — Masai Mara, Amboseli, Samburu, Lake Nakuru & more. Find wildlife, lodges, and expert-guided packages for every destination."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Kenya Safari Destinations | Masai Mara, Amboseli & More" />
        <meta
          property="og:description"
          content="Discover Kenya's most spectacular safari destinations. Expert guides, hand-picked lodges, and unforgettable wildlife encounters await."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://yourdomain.com/destinations" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              name: "Kenya Safari Destinations",
              description: "Top wildlife destinations in Kenya",
              numberOfItems: destinations.length,
              itemListElement: destinations.map((dest, index) => ({
                "@type": "ListItem",
                position: index + 1,
                item: {
                  "@type": "TouristDestination",
                  name: dest.name,
                  description: dest.description,
                  containedInPlace: {
                    "@type": "Country",
                    name: "Kenya",
                  },
                },
              })),
            }),
          }}
        />
      </Head>

      <PageTransition type="elegant" duration={600}>
        <main className="min-h-screen bg-[#F2EFED]">
          <Navigation />

          {/* Hero */}
          <section aria-labelledby="destinations-hero-heading" className="relative pt-24 pb-24 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#2F3B2F] via-[#3a4e3a] to-[#2a3d3d]" />
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#7FB5B5]/10 blur-3xl translate-x-1/3 -translate-y-1/4 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#E8A17D]/10 blur-3xl -translate-x-1/4 translate-y-1/4 pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <span className="inline-flex items-center gap-2 bg-[#7FB5B5]/20 border border-[#7FB5B5]/30 text-[#7FB5B5] text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
                <MapPin className="h-3 w-3" />
                {destinations.length} Destinations Across Kenya
              </span>
              <h1
                id="destinations-hero-heading"
                className="font-serif text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.05]"
              >
                Where Will the
                <br />
                <span className="text-[#E8A17D]">Wild Take You?</span>
              </h1>
              <p className="text-lg text-white/75 max-w-2xl mx-auto leading-relaxed">
                From the thundering herds of the Masai Mara to Amboseli's elephant-dusted plains beneath Kilimanjaro —
                every corner of Kenya holds a story waiting for you.
              </p>
            </div>
          </section>

          {/* Destinations Grid */}
          <section aria-labelledby="destinations-list-heading" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-12">
                <p className="text-xs uppercase tracking-widest text-[#7FB5B5] font-semibold mb-2">Explore Kenya</p>
                <h2
                  id="destinations-list-heading"
                  className="font-serif text-3xl md:text-4xl font-bold text-[#2F3B2F]"
                >
                  All Destinations
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {destinations.map((destination, index) => {
                  const pkgCount = getPackageCountForDestination(destination.id)
                  return (
                    <article
                      key={destination.id}
                      className="group"
                      itemScope
                      itemType="https://schema.org/TouristDestination"
                    >
                      <Card className="bg-white border-0 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 h-full flex flex-col">
                        {/* Image block */}
                        <div className="relative overflow-hidden">
                          <img
                            src={destination.image || "/placeholder.svg"}
                            alt={`${destination.name} safari destination in Kenya`}
                            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                            itemProp="image"
                            loading={index < 3 ? "eager" : "lazy"}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                          {/* Package count badge */}
                          <div className="absolute top-4 right-4">
                            <Badge className="bg-[#E8A17D] text-white text-xs font-medium px-3 py-1 rounded-full shadow">
                              {pkgCount} Package{pkgCount !== 1 ? "s" : ""}
                            </Badge>
                          </div>

                          {/* Destination name overlay */}
                          <div className="absolute bottom-0 left-0 right-0 p-5">
                            <h3
                              className="font-serif text-2xl font-bold text-white drop-shadow-sm"
                              itemProp="name"
                            >
                              {destination.name}
                            </h3>
                          </div>
                        </div>

                        <CardContent className="p-6 flex flex-col flex-1">
                          <p
                            className="text-sm text-stone-500 leading-relaxed mb-5 line-clamp-3"
                            itemProp="description"
                          >
                            {destination.description}
                          </p>

                          {/* Highlight tags */}
                          <div className="flex flex-wrap gap-1.5 mb-6">
                            {destination.highlights.slice(0, 3).map((highlight, i) => (
                              <span
                                key={i}
                                className="text-[10px] font-medium uppercase tracking-wide text-[#2F3B2F] bg-[#F2EFED] border border-stone-200 px-2.5 py-1 rounded-full"
                              >
                                {highlight}
                              </span>
                            ))}
                            {destination.highlights.length > 3 && (
                              <span className="text-[10px] text-stone-400 px-2.5 py-1">
                                +{destination.highlights.length - 3} more
                              </span>
                            )}
                          </div>

                          {/* Meta row */}
                          <div className="flex items-center justify-between text-xs text-stone-400 mb-5">
                            <div className="flex items-center gap-3">
                              <span className="flex items-center gap-1">
                                <Camera className="h-3.5 w-3.5 text-[#7FB5B5]" />
                                Photography
                              </span>
                              <span className="flex items-center gap-1">
                                <Users className="h-3.5 w-3.5 text-[#7FB5B5]" />
                                All Ages
                              </span>
                            </div>
                            <span className="flex items-center gap-1 font-medium text-stone-600">
                              <Star className="h-3.5 w-3.5 text-[#E8A17D] fill-current" />
                              4.8
                            </span>
                          </div>

                          {/* CTAs */}
                          <div className="flex gap-2 mt-auto">
                            <Button
                              asChild
                              className="flex-1 bg-[#E8A17D] hover:bg-[#7FB5B5] text-white text-sm rounded-xl transition-colors duration-300"
                            >
                              <Link
                                href={`/destinations/${destination.id}`}
                                aria-label={`Explore ${destination.name}`}
                              >
                                Explore
                                <ArrowRight className="h-3.5 w-3.5 ml-1.5" />
                              </Link>
                            </Button>
                            <Button
                              asChild
                              variant="outline"
                              className="border-[#2F3B2F] text-[#2F3B2F] hover:bg-[#2F3B2F] hover:text-white bg-transparent rounded-xl text-sm transition-colors duration-300"
                            >
                              <Link href="/packages">Packages</Link>
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </article>
                  )
                })}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section aria-labelledby="destinations-cta-heading" className="py-20 bg-[#2F3B2F] relative overflow-hidden">
            <div className="absolute inset-0 opacity-5" style={{
              backgroundImage: `radial-gradient(circle at 70% 50%, #E8A17D 0%, transparent 60%)`
            }} />
            <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
              <Binoculars className="h-10 w-10 text-[#E8A17D] mx-auto mb-6 opacity-80" />
              <h2
                id="destinations-cta-heading"
                className="font-serif text-4xl md:text-5xl font-bold text-white mb-5"
              >
                Can't Choose?
                <span className="block text-[#E8A17D] mt-1">We'll Choose for You.</span>
              </h2>
              <p className="text-lg text-white/70 mb-10 max-w-xl mx-auto leading-relaxed">
                Our Kenya safari experts have matched thousands of travellers to their perfect destination. Tell us your
                dates and interests — we'll do the rest.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#E8A17D] hover:bg-[#7FB5B5] text-white transition-colors duration-300 rounded-xl px-8"
                >
                  <Link href="/packages">Browse All Packages</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white/40 text-white hover:bg-white hover:text-[#2F3B2F] bg-transparent rounded-xl px-8 transition-colors duration-300"
                >
                  <Link href="/contact">Plan Custom Safari</Link>
                </Button>
              </div>
            </div>
          </section>
        </main>
      </PageTransition>
    </>
  )
}