"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Clock, Users, MapPin, Star } from "lucide-react"
import { getPackagesByCategory } from "@/lib/data"
import { formatPrice, calculateDiscountPercentage } from "@/lib/utils"
import Link from "next/link"

export default function PremiumPackagesClientPage() {
  const premiumPackages = getPackagesByCategory("premium")

  return (
    <main className="min-h-screen bg-[#F2EFED]">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Premium Safari Packages Kenya",
            description: "Luxury Kenya safari packages with premium accommodations and exclusive wildlife experiences",
            url: "https://afribayke.com/packages/premium",
            mainEntity: {
              "@type": "ItemList",
              itemListElement: premiumPackages.map((pkg, index) => ({
                "@type": "TouristTrip",
                position: index + 1,
                name: pkg.title,
                description: pkg.description,
                image: pkg.image,
                offers: {
                  "@type": "Offer",
                  price: pkg.price,
                  priceCurrency: "USD",
                },
              })),
            },
          }),
        }}
      />

      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-r from-[#2F3B2F] to-[#E8A17D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6">Premium Safari Packages</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Experience Kenya's finest safari adventures with our premium packages featuring exclusive accommodations,
            expert guides, and unforgettable wildlife encounters.
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {premiumPackages.map((pkg) => (
              <Card key={pkg.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                <div className="relative">
                  <img
                    src={pkg.image || "/placeholder.svg"}
                    alt={pkg.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {pkg.originalPrice && (
                    <Badge className="absolute top-4 right-4 bg-red-500 text-white">
                      {calculateDiscountPercentage(pkg.originalPrice, pkg.price)}% OFF
                    </Badge>
                  )}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-[#E8A17D] text-white">Premium</Badge>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 text-[#2F3B2F]">
                      <MapPin className="h-3 w-3 mr-1" />
                      {pkg.destinations.length} Destination{pkg.destinations.length > 1 ? "s" : ""}
                    </Badge>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <h3 className="font-serif text-xl font-bold text-[#2F3B2F] mb-2">{pkg.title}</h3>
                  <p className="text-gray-600 text-sm line-clamp-2">{pkg.description}</p>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {pkg.duration}
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {pkg.groupSize.min}-{pkg.groupSize.max}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-[#2F3B2F]">{formatPrice(pkg.price)}</span>
                      {pkg.originalPrice && (
                        <span className="text-sm text-gray-500 line-through ml-2">
                          {formatPrice(pkg.originalPrice)}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">4.8</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {pkg.highlights.slice(0, 3).map((highlight, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <Button
                      asChild
                      className="flex-1 bg-[#E8A17D] hover:bg-[#7FB5B5] text-white transition-colors duration-300"
                    >
                      <Link href={`/packages/${pkg.id}`}>View Details</Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="border-[#2F3B2F] text-[#2F3B2F] hover:bg-[#2F3B2F] hover:text-white bg-transparent"
                    >
                      <Link href={`/packages/${pkg.id}#booking-form`}>Book Now</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
