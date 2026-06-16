"use client"

import Head from "next/head"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Clock, Users, MapPin, Star, Tag, ArrowRight, Flame } from "lucide-react"
import { getPackagesByCategory } from "@/lib/data"
import { formatPrice } from "@/lib/utils"
import Link from "next/link"
import PageTransition from "@/components/PageTransition"

export default function OffersPage() {
  const offerPackages = getPackagesByCategory("offer")

  return (
    <>
      <Head>
        <title>Special Safari Offers & Deals | Kenya Safari Packages</title>
        <meta
          name="description"
          content="Discover limited-time Kenya safari deals and seasonal packages. Premium wildlife experiences at unbeatable prices — from Masai Mara to Amboseli. Book your dream safari today."
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Special Safari Offers & Deals | Kenya Safari Packages" />
        <meta
          property="og:description"
          content="Limited-time Kenya safari packages and seasonal deals. Premium wildlife adventures at unbeatable value."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://yourdomain.com/offers" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              name: "Special Safari Offers",
              description: "Limited-time Kenya safari packages and seasonal deals",
              numberOfItems: offerPackages.length,
              itemListElement: offerPackages.map((pkg, index) => ({
                "@type": "ListItem",
                position: index + 1,
                item: {
                  "@type": "TouristTrip",
                  name: pkg.title,
                  description: pkg.description,
                  offers: {
                    "@type": "Offer",
                    price: pkg.price,
                    priceCurrency: "USD",
                  },
                },
              })),
            }),
          }}
        />
      </Head>

      <main className="min-h-screen bg-[#F2EFED]">
        <PageTransition type="elegant" duration={600}>
          <Navigation />

          {/* Hero Section */}
          <section aria-labelledby="offers-hero-heading" className="relative pt-24 pb-20 overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#2F3B2F] via-[#3d4f3d] to-[#7FB5B5]" />
            {/* Subtle texture overlay */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `radial-gradient(circle at 20% 50%, #E8A17D 0%, transparent 50%), radial-gradient(circle at 80% 20%, #7FB5B5 0%, transparent 40%)`,
              }}
            />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl">
                <div className="flex items-center gap-2 mb-6">
                  <span className="inline-flex items-center gap-1.5 bg-[#E8A17D]/20 border border-[#E8A17D]/40 text-[#E8A17D] text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full">
                    <Flame className="h-3 w-3" />
                    Limited Time
                  </span>
                </div>
                <h1
                  id="offers-hero-heading"
                  className="font-serif text-5xl md:text-7xl font-bold text-white leading-[1.05] mb-6"
                >
                  Safari Deals
                  <span className="block text-[#E8A17D]">Worth Every Shilling</span>
                </h1>
                <p className="text-lg text-white/80 max-w-xl leading-relaxed">
                  Seasonal packages curated for explorers who won't compromise on experience—just price. Each offer
                  includes our full guiding team, hand-picked lodges, and zero hidden costs.
                </p>

                <div className="mt-10 flex items-center gap-6">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-white">{offerPackages.length}</p>
                    <p className="text-xs text-white/60 uppercase tracking-wider mt-1">Active Deals</p>
                  </div>
                  <div className="h-10 w-px bg-white/20" />
                  <div className="text-center">
                    <p className="text-3xl font-bold text-white">4.8★</p>
                    <p className="text-xs text-white/60 uppercase tracking-wider mt-1">Avg. Rating</p>
                  </div>
                  <div className="h-10 w-px bg-white/20" />
                  <div className="text-center">
                    <p className="text-3xl font-bold text-white">100%</p>
                    <p className="text-xs text-white/60 uppercase tracking-wider mt-1">Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Packages Grid */}
          <section aria-labelledby="offers-list-heading" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-end justify-between mb-12">
                <div>
                  <p className="text-xs uppercase tracking-widest text-[#7FB5B5] font-semibold mb-2">Current Offers</p>
                  <h2
                    id="offers-list-heading"
                    className="font-serif text-3xl md:text-4xl font-bold text-[#2F3B2F]"
                  >
                    Hand-Picked Packages
                  </h2>
                </div>
                <p className="text-sm text-stone-500 hidden md:block">
                  Prices from{" "}
                  <span className="font-semibold text-[#2F3B2F]">
                    {formatPrice(Math.min(...offerPackages.map((p) => p.price)))}
                  </span>
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {offerPackages.map((pkg, index) => (
                  <article
                    key={pkg.id}
                    className="group"
                    itemScope
                    itemType="https://schema.org/TouristTrip"
                  >
                    <Card className="bg-white border-0 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 h-full flex flex-col">
                      {/* Image */}
                      <div className="relative overflow-hidden">
                        <img
                          src={pkg.image || "/placeholder.svg"}
                          alt={`${pkg.title} — Kenya safari package`}
                          className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-700"
                          itemProp="image"
                          loading={index < 3 ? "eager" : "lazy"}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

                        {/* Badges */}
                        <div className="absolute top-4 left-4 flex gap-2">
                          <Badge className="bg-[#E8A17D] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm">
                            <Tag className="h-2.5 w-2.5 mr-1" />
                            Special Offer
                          </Badge>
                        </div>

                        {/* Location pill */}
                        <div className="absolute bottom-4 left-4">
                          <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full">
                            <MapPin className="h-3 w-3 text-[#7FB5B5]" />
                            <span>
                              {pkg.destinations.length} Destination
                              {pkg.destinations.length > 1 ? "s" : ""}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 flex flex-col flex-1">
                        <div className="flex-1">
                          <h3
                            className="font-serif text-xl font-bold text-[#2F3B2F] leading-snug mb-2"
                            itemProp="name"
                          >
                            {pkg.title}
                          </h3>
                          <p className="text-sm text-stone-500 line-clamp-2 leading-relaxed" itemProp="description">
                            {pkg.description}
                          </p>

                          {/* Meta row */}
                          <div className="mt-4 flex items-center gap-4 text-xs text-stone-400">
                            <span className="flex items-center gap-1">
                              <Clock className="h-3.5 w-3.5 text-[#7FB5B5]" />
                              {pkg.duration}
                            </span>
                            <span className="flex items-center gap-1">
                              <Users className="h-3.5 w-3.5 text-[#7FB5B5]" />
                              {pkg.groupSize.min}–{pkg.groupSize.max} pax
                            </span>
                            <span className="flex items-center gap-1">
                              <Star className="h-3.5 w-3.5 text-[#E8A17D] fill-current" />
                              4.7
                            </span>
                          </div>
                        </div>

                        {/* Divider */}
                        <div className="my-5 border-t border-stone-100" />

                        {/* Price + CTA */}
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-xs text-stone-400 uppercase tracking-wider mb-0.5">From</p>
                            <p
                              className="text-2xl font-bold text-[#2F3B2F]"
                              itemProp="offers"
                              itemScope
                              itemType="https://schema.org/Offer"
                            >
                              <span itemProp="price" content={String(pkg.price)}>
                                {formatPrice(pkg.price)}
                              </span>
                              <meta itemProp="priceCurrency" content="USD" />
                            </p>
                          </div>
                          <Button
                            asChild
                            className="bg-[#2F3B2F] hover:bg-[#7FB5B5] text-white text-sm rounded-xl px-5 py-2.5 font-medium transition-all duration-300 group/btn"
                          >
                            <Link href={`/packages/${pkg.id}`} aria-label={`View details for ${pkg.title}`}>
                              View Details
                              <ArrowRight className="h-3.5 w-3.5 ml-1.5 group-hover/btn:translate-x-0.5 transition-transform" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </article>
                ))}
              </div>

              {/* Empty state */}
              {offerPackages.length === 0 && (
                <div className="text-center py-24">
                  <p className="text-stone-400 text-lg">No offers available right now. Check back soon!</p>
                </div>
              )}
            </div>
          </section>

          {/* Trust strip */}
          <section aria-label="Trust indicators" className="py-14 bg-[#2F3B2F]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {[
                  { value: "500+", label: "Safaris Completed" },
                  { value: "98%", label: "Would Recommend" },
                  { value: "15+", label: "Years in Kenya" },
                  { value: "No", label: "Hidden Costs" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="text-3xl font-bold text-[#E8A17D] mb-1">{stat.value}</p>
                    <p className="text-xs text-white/60 uppercase tracking-wider">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

        </PageTransition>
      </main>
    </>
  )
}