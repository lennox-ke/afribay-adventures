"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, MapPin, Star } from "lucide-react"
import { destinations, accommodations } from "@/lib/data"
import { formatPrice } from "@/lib/utils"
import type { BookingFormData } from "@/lib/booking-schema"

interface DestinationsStepProps {
  data: BookingFormData["preferences"]
  onUpdate: (data: BookingFormData["preferences"]) => void
  onNext: () => void
  onPrev: () => void
}

export function DestinationsStep({ data, onUpdate, onNext, onPrev }: DestinationsStepProps) {
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [availableAccommodations, setAvailableAccommodations] = useState(accommodations)

  useEffect(() => {
    // Filter accommodations based on selected destinations
    const filtered =
      data.destinations.length > 0 ? accommodations.filter((acc) => data.destinations.includes(acc.destinationId)) : []

    setAvailableAccommodations(filtered)

    // Remove accommodations that are no longer available
    const validAccommodations = data.accommodations.filter((accId) => filtered.some((acc) => acc.id === accId))

    if (validAccommodations.length !== data.accommodations.length) {
      onUpdate({ ...data, accommodations: validAccommodations })
    }
  }, [data.destinations])

  const handleDestinationChange = (destinationId: string, checked: boolean) => {
    const newDestinations = checked
      ? [...data.destinations, destinationId]
      : data.destinations.filter((id) => id !== destinationId)

    onUpdate({ ...data, destinations: newDestinations })

    if (errors.destinations) {
      setErrors((prev) => ({ ...prev, destinations: "" }))
    }
  }

  const handleAccommodationChange = (accommodationId: string, checked: boolean) => {
    const newAccommodations = checked
      ? [...data.accommodations, accommodationId]
      : data.accommodations.filter((id) => id !== accommodationId)

    onUpdate({ ...data, accommodations: newAccommodations })

    if (errors.accommodations) {
      setErrors((prev) => ({ ...prev, accommodations: "" }))
    }
  }

  const validateStep = () => {
    const newErrors: Record<string, string> = {}

    if (data.destinations.length === 0) {
      newErrors.destinations = "Please select at least 1 destination"
    }
    if (data.accommodations.length < 2) {
      newErrors.accommodations = "Please select at least 2 accommodations for availability"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateStep()) {
      onNext()
    }
  }

  return (
    <div className="space-y-6">
      {/* Destinations Selection */}
      <div>
        <h3 className="font-serif text-xl font-semibold text-[#2F3B2F] mb-4">Select Destinations *</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {destinations.map((destination) => (
            <Card
              key={destination.id}
              className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
                data.destinations.includes(destination.id) ? "ring-2 ring-[#E8A17D] bg-[#E8A17D]/5" : ""
              }`}
              onClick={() => handleDestinationChange(destination.id, !data.destinations.includes(destination.id))}
            >
              <CardContent className="p-4">
                <div className="flex items-start space-x-3">
                  <Checkbox checked={data.destinations.includes(destination.id)} onChange={() => {}} className="mt-1" />
                  <div className="flex-1">
                    <img
                      src={destination.image || "/placeholder.svg"}
                      alt={destination.name}
                      className="w-full h-32 object-cover rounded-lg mb-3"
                    />
                    <h4 className="font-semibold text-[#2F3B2F] mb-2">{destination.name}</h4>
                    <p className="text-sm text-gray-600 mb-3">{destination.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {destination.highlights.slice(0, 2).map((highlight, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        {errors.destinations && <p className="text-red-500 text-sm mt-2">{errors.destinations}</p>}
      </div>

      {/* Accommodations Selection */}
      {data.destinations.length > 0 && (
        <div>
          <h3 className="font-serif text-xl font-semibold text-[#2F3B2F] mb-4">
            Select Accommodations * (minimum 2 for availability)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {availableAccommodations.map((accommodation) => (
              <Card
                key={accommodation.id}
                className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
                  data.accommodations.includes(accommodation.id) ? "ring-2 ring-[#7FB5B5] bg-[#7FB5B5]/5" : ""
                }`}
                onClick={() =>
                  handleAccommodationChange(accommodation.id, !data.accommodations.includes(accommodation.id))
                }
              >
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      checked={data.accommodations.includes(accommodation.id)}
                      onChange={() => {}}
                      className="mt-1"
                    />
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="font-semibold text-[#2F3B2F]">{accommodation.name}</h4>
                          <div className="flex items-center space-x-2 text-sm text-gray-600">
                            <MapPin className="h-3 w-3" />
                            <span>{accommodation.location}</span>
                            <Badge className="bg-[#E8A17D] text-white text-xs capitalize">{accommodation.type}</Badge>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center">
                            <Star className="h-3 w-3 text-yellow-400 fill-current" />
                            <span className="text-sm ml-1">{accommodation.rating}</span>
                          </div>
                          <div className="text-sm font-semibold text-[#2F3B2F]">
                            {formatPrice(accommodation.pricePerNight)}/night
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{accommodation.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {accommodation.amenities.slice(0, 3).map((amenity, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {amenity}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          {errors.accommodations && <p className="text-red-500 text-sm mt-2">{errors.accommodations}</p>}
        </div>
      )}

      {/* Selection Summary */}
      {(data.destinations.length > 0 || data.accommodations.length > 0) && (
        <div className="bg-[#F2EFED] rounded-lg p-4">
          <h3 className="font-semibold text-[#2F3B2F] mb-3">Selection Summary</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600 mb-2">Destinations ({data.destinations.length}):</p>
              <div className="space-y-1">
                {data.destinations.map((destId) => {
                  const dest = destinations.find((d) => d.id === destId)
                  return (
                    <Badge key={destId} className="bg-[#E8A17D] text-white mr-2 mb-1">
                      {dest?.name}
                    </Badge>
                  )
                })}
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-2">Accommodations ({data.accommodations.length}):</p>
              <div className="space-y-1">
                {data.accommodations.map((accId) => {
                  const acc = accommodations.find((a) => a.id === accId)
                  return (
                    <Badge key={accId} className="bg-[#7FB5B5] text-white mr-2 mb-1">
                      {acc?.name}
                    </Badge>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={onPrev}
          className="border-[#2F3B2F] text-[#2F3B2F] hover:bg-[#2F3B2F] hover:text-white bg-transparent"
        >
          <ChevronLeft className="h-4 w-4 mr-2" />
          Back
        </Button>
        <Button onClick={handleNext} className="bg-[#E8A17D] hover:bg-[#7FB5B5] text-white">
          Continue to Vehicles
        </Button>
      </div>
    </div>
  )
}
