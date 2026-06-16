"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"

const destinations = [
  { name: "All Destinations", path: "/accommodations" },
  { name: "Masai Mara", path: "/accommodations/masai-mara" },
  { name: "Amboseli", path: "/accommodations/amboseli" },
  { name: "Samburu", path: "/accommodations/samburu" },
  { name: "Mombasa", path: "/accommodations/mombasa" },
  { name: "Zanzibar", path: "/accommodations/zanzibar" },
  { name: "Diani", path: "/accommodations/diani-beach" },
  { name: "Lamu", path: "/accommodations/lamu" },
  { name: "Naivasha", path: "/accommodations/naivasha" },
  { name: "Nakuru", path: "/accommodations/nakuru" },
  { name: "Nairobi", path: "/accommodations/nairobi" },
  { name: "Tsavo", path: "/accommodations/tsavo" },
  { name: "Malindi", path: "/accommodations/malindi" },
  { name: "Watamu", path: "/accommodations/watamu" }, 
]

export function AccommodationDestinationNav() {
  const pathname = usePathname()

  return (
    <section className="py-8 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-2xl font-serif font-semibold text-afribay-dark-green mb-6">
          Browse by Destination
        </h2>
        <div className="flex flex-wrap gap-3 justify-center">
          {destinations.map((destination) => {
            const isActive = pathname === destination.path
            return (
              <Link key={destination.path} href={destination.path}>
                <Button
                  variant={isActive ? "default" : "outline"}
                  className={`font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-afribay-dark-green hover:bg-afribay-dark-green/90 text-white border-afribay-dark-green"
                      : "border-afribay-dark-green text-afribay-dark-green hover:bg-afribay-dark-green hover:text-white bg-white"
                  }`}
                >
                  {destination.name}
                </Button>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
