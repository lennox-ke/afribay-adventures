"use client"

import { useState } from "react"
import { accommodations } from "@/lib/data"
import { Star, MapPin, Wifi, Car, Utensils, Waves, Dumbbell, SpadeIcon as Spa } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { AccommodationDestinationNav } from "@/components/accommodation-destination-nav"

const accommodationTypes = ["all", "lodge", "resort", "hotel", "camp"] as const

const getAmenityIcon = (amenity: string) => {
  const amenityLower = amenity.toLowerCase()
  if (amenityLower.includes("wifi")) return <Wifi className="h-3.5 w-3.5 text-gray-500" />
  if (amenityLower.includes("pool")) return <Waves className="h-3.5 w-3.5 text-gray-500" />
  if (amenityLower.includes("spa")) return <Spa className="h-3.5 w-3.5 text-gray-500" />
  if (amenityLower.includes("restaurant")) return <Utensils className="h-3.5 w-3.5 text-gray-500" />
  if (amenityLower.includes("gym") || amenityLower.includes("fitness"))
    return <Dumbbell className="h-3.5 w-3.5 text-gray-500" />
  if (amenityLower.includes("transport") || amenityLower.includes("transfer"))
    return <Car className="h-3.5 w-3.5 text-gray-500" />
  return <Star className="h-3.5 w-3.5 text-gray-500" />
}

export default function TsavoAccommodationsPage() {
  const [selectedType, setSelectedType] = useState<(typeof accommodationTypes)[number]>("all")

  const tsavoAccommodations = accommodations.filter((acc) => acc.destinationId === "tsavo")
  const filteredAccommodations =
    selectedType === "all"
      ? tsavoAccommodations
      : tsavoAccommodations.filter((acc) => acc.type === selectedType)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://afribay.vercel.app/tsavo.jpg"
            alt="Tsavo Accommodations"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-afribay-dark-green/80 to-afribay-dark-green/40" />
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">Tsavo Accommodations</h1>
          <p className="text-xl md:text-2xl font-light leading-relaxed">
            Tsavo wild elephants and Taita culture roar together forever
          </p>
        </div>
      </section>

      <AccommodationDestinationNav />

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {accommodationTypes.map((type) => (
              <Button
                key={type}
                variant={selectedType === type ? "default" : "ghost"}
                onClick={() => setSelectedType(type)}
                className={`capitalize font-medium transition-all duration-200 px-6 py-2 rounded-full ${
                  selectedType === type
                    ? "bg-gray-900 hover:bg-gray-800 text-white"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                {type === "all" ? "All" : type}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Accommodations Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAccommodations.map((accommodation) => (
              <Card
                key={accommodation.id}
                className="group overflow-hidden border-0 shadow-sm hover:shadow-lg transition-all duration-500 bg-white"
              >
                <CardHeader className="p-0">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={accommodation.image || "/placeholder.svg"}
                      alt={accommodation.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-3 right-3">
                      <Badge
                        variant="secondary"
                        className="bg-white/95 text-gray-700 font-normal text-xs px-2 py-1 shadow-sm border-0"
                      >
                        {accommodation.type}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-6 pb-4">
                  <div className="flex items-center gap-1.5 mb-3">
                    <MapPin className="h-3.5 w-3.5 text-gray-400" />
                    <span className="text-xs text-gray-500 uppercase tracking-wide">
                      {accommodation.location}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-medium mb-3 text-gray-900 leading-tight">
                    {accommodation.name}
                  </h3>

                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3 w-3 ${
                          i < Math.floor(accommodation.rating)
                            ? "fill-gray-900 text-gray-900"
                            : "text-gray-200"
                        }`}
                      />
                    ))}
                    <span className="text-xs text-gray-500 ml-2 font-medium">
                      {accommodation.rating}
                    </span>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed mb-5 line-clamp-2">
                    {accommodation.description}
                  </p>

                  <div className="flex items-center gap-4">
                    {accommodation.amenities.slice(0, 3).map((amenity, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-1.5"
                        title={amenity}
                      >
                        {getAmenityIcon(amenity)}
                      </div>
                    ))}
                    {accommodation.amenities.length > 3 && (
                      <span className="text-xs text-gray-400 font-medium">
                        +{accommodation.amenities.length - 3}
                      </span>
                    )}
                  </div>
                </CardContent>

                <CardFooter className="p-6 pt-0">
                  <Link href={`/accommodations/${accommodation.id}`} className="w-full">
                    <Button
                      variant="ghost"
                      className="w-full justify-center text-gray-900 hover:text-gray-900 hover:bg-amber-600 font-medium py-2.5 border border-gray-200 hover:border-amber-300 transition-all duration-200"
                    >
                      View Details
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}

            {filteredAccommodations.length === 0 && (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-600 text-lg">
                  No accommodations currently available for tsavo. Please check back soon!
                </p>
                <p className="text-gray-500 text-sm mt-2">
                  Contact us for custom accommodation arrangements in this unique northern frontier.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-afribay-dark-green text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Explore Kenya's Northern Frontier</h2>
          <p className="text-xl mb-8 opacity-90">
            Discover unique wildlife species and immerse yourself in authentic Tsavo culture
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-afribay-dark-green bg-transparent font-medium transition-all duration-200"
              >
                Contact Our Experts
              </Button>
            </Link>
            <Link href="/booking">
              <Button
                size="lg"
                className="bg-afribay-coral hover:bg-afribay-coral/90 text-white font-medium transition-colors duration-200"
              >
                Book Your Adventure
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}