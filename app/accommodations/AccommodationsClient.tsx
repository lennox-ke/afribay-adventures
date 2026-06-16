"use client"

import { useState } from "react"
import { accommodations } from "@/lib/data"
import { Star, MapPin, Wifi, Car, Utensils, Waves, Dumbbell, SpadeIcon as Spa, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { AccommodationDestinationNav } from "@/components/accommodation-destination-nav"
import PageTransition from "@/components/PageTransition"

const accommodationTypes = ["all", "lodge", "resort", "hotel", "camp"] as const

const getAmenityIcon = (amenity: string) => {
  const amenityLower = amenity.toLowerCase()
  if (amenityLower.includes("wifi")) return <Wifi className="h-3.5 w-3.5 text-[#7FB5B5]" />
  if (amenityLower.includes("pool")) return <Waves className="h-3.5 w-3.5 text-[#7FB5B5]" />
  if (amenityLower.includes("spa")) return <Spa className="h-3.5 w-3.5 text-[#7FB5B5]" />
  if (amenityLower.includes("restaurant")) return <Utensils className="h-3.5 w-3.5 text-[#7FB5B5]" />
  if (amenityLower.includes("gym") || amenityLower.includes("fitness"))
    return <Dumbbell className="h-3.5 w-3.5 text-[#7FB5B5]" />
  if (amenityLower.includes("transport") || amenityLower.includes("transfer"))
    return <Car className="h-3.5 w-3.5 text-[#7FB5B5]" />
  return <Star className="h-3.5 w-3.5 text-[#7FB5B5]" />
}

export default function AccommodationsPage() {
  const [selectedType, setSelectedType] = useState<(typeof accommodationTypes)[number]>("all")

  const filteredAccommodations =
    selectedType === "all" ? accommodations : accommodations.filter((acc) => acc.type === selectedType)

  return (
    <PageTransition type="elegant" duration={600}>
      <main className="min-h-screen bg-[#F2EFED]">
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              name: "Safari Accommodations Kenya | Afribay Adventures",
              description:
                "Browse Kenya safari accommodations including luxury lodges, tented camps, resorts, and hotels in Maasai Mara, Amboseli, Tsavo, and more.",
              url: "https://afribayke.com/accommodations",
              breadcrumb: {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: "https://afribayke.com" },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Accommodations",
                    item: "https://afribayke.com/accommodations",
                  },
                ],
              },
              mainEntity: {
                "@type": "ItemList",
                itemListElement: accommodations.map((acc, index) => ({
                  "@type": "LodgingBusiness",
                  position: index + 1,
                  name: acc.name,
                  description: acc.description,
                  image: acc.image,
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: acc.location,
                    addressCountry: "KE",
                  },
                })),
              },
            }),
          }}
        />

        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://afribay.vercel.app/tsavo.jpg"
              alt="Luxury safari lodge accommodation overlooking the Kenyan savannah"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#2F3B2F]/85 via-[#2F3B2F]/50 to-[#7FB5B5]/30" />
          </div>

          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
            <p className="text-xs uppercase tracking-widest font-semibold text-[#E8A17D] mb-4">
              Lodges, Camps & Resorts
            </p>
            <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 leading-[1.05]">
              Safari Accommodations
              <span className="block text-[#E8A17D]">in Kenya</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
              From luxury lodges to authentic tented camps, find your perfect home base for an unforgettable Kenya
              safari.
            </p>
          </div>
        </section>

        {/* Accommodation Destination Navigation */}
        <AccommodationDestinationNav />

        {/* Filter Section */}
        <section className="py-8 bg-white border-b border-stone-100 sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-wrap gap-3 justify-center">
              {accommodationTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  aria-pressed={selectedType === type}
                  className={`capitalize font-medium transition-all duration-200 px-6 py-2 rounded-full text-sm ${
                    selectedType === type
                      ? "bg-[#2F3B2F] text-white shadow-md"
                      : "text-stone-500 hover:text-[#2F3B2F] hover:bg-[#F2EFED]"
                  }`}
                >
                  {type === "all" ? "All" : type}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Accommodations Grid */}
        <section aria-labelledby="accommodations-heading" className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-widest text-[#7FB5B5] font-semibold mb-3">
                {filteredAccommodations.length} Properties
              </p>
              <h2 id="accommodations-heading" className="font-serif text-3xl md:text-4xl font-bold text-[#2F3B2F]">
                {selectedType === "all" ? "All Accommodations" : `${selectedType}s`.replace(/^./, (c) => c.toUpperCase())}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredAccommodations.map((accommodation) => (
                <Card
                  key={accommodation.id}
                  className="group overflow-hidden border-0 shadow-sm hover:shadow-xl transition-all duration-500 bg-white rounded-2xl"
                >
                  <CardHeader className="p-0">
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={accommodation.image || "/placeholder.svg"}
                        alt={`${accommodation.name}, a ${accommodation.type} in ${accommodation.location}, Kenya`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                      <div className="absolute top-3 right-3">
                        <Badge className="bg-[#E8A17D] text-white font-medium text-xs px-2.5 py-1 shadow-sm border-0 capitalize">
                          {accommodation.type}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="p-6 pb-4">
                    <div className="flex items-center gap-1.5 mb-3">
                      <MapPin className="h-3.5 w-3.5 text-[#7FB5B5]" />
                      <span className="text-xs text-stone-500 uppercase tracking-wide">{accommodation.location}</span>
                    </div>

                    <h3 className="font-serif text-lg font-bold mb-3 text-[#2F3B2F] leading-tight">
                      {accommodation.name}
                    </h3>

                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3 w-3 ${
                            i < Math.floor(accommodation.rating) ? "fill-[#E8A17D] text-[#E8A17D]" : "text-stone-200"
                          }`}
                        />
                      ))}
                      <span className="text-xs text-stone-500 ml-2 font-medium">{accommodation.rating}</span>
                    </div>

                    <p className="text-stone-500 text-sm leading-relaxed mb-5 line-clamp-2">
                      {accommodation.description}
                    </p>

                    <div className="flex items-center gap-4">
                      {accommodation.amenities.slice(0, 3).map((amenity, index) => (
                        <div key={index} className="flex items-center gap-1.5" title={amenity}>
                          {getAmenityIcon(amenity)}
                        </div>
                      ))}
                      {accommodation.amenities.length > 3 && (
                        <span className="text-xs text-stone-400 font-medium">
                          +{accommodation.amenities.length - 3}
                        </span>
                      )}
                    </div>
                  </CardContent>

                  <CardFooter className="p-6 pt-0 flex gap-2">
                    <Link href={`/accommodations/${accommodation.id}`} className="w-full">
                      <Button
                        variant="outline"
                        className="w-full justify-center text-[#2F3B2F] hover:text-white hover:bg-[#2F3B2F] font-medium py-2.5 border border-stone-200 hover:border-[#2F3B2F] transition-all duration-200 rounded-xl"
                      >
                        View Details
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>

            {filteredAccommodations.length === 0 && (
              <div className="text-center py-24">
                <p className="text-stone-400 text-lg">No accommodations found for this category.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#2F3B2F] to-[#7FB5B5]" />
          <div className="relative max-w-4xl mx-auto text-center px-4">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Book Your Safari Stay?
            </h2>
            <p className="text-lg text-white/85 mb-8 max-w-2xl mx-auto leading-relaxed">
              Tell us your dates, group size, and preferred destinations — our experts will help you choose the
              perfect accommodation and put together a full itinerary around it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-[#E8A17D] hover:bg-[#E8A17D]/90 text-white font-semibold px-8 rounded-xl transition-all duration-300"
                >
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Contact Our Experts
                </Button>
              </Link>
              <Link href="/booking">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#2F3B2F] bg-transparent font-semibold px-8 rounded-xl transition-all duration-300"
                >
                  Start Planning
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  )
}