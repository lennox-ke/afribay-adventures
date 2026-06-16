"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Mail, Calendar, Users, MapPin, Car, RotateCcw } from "lucide-react"
import { destinations, accommodations, vehicles, countryCodes } from "@/lib/data"
import { formatPrice, formatDate } from "@/lib/utils"
import type { BookingFormData } from "@/lib/booking-schema"

interface BookingConfirmationProps {
  bookingReference: string
  formData: BookingFormData
  onReset: () => void
}

export function BookingConfirmation({ bookingReference, formData, onReset }: BookingConfirmationProps) {
  const selectedDestinations = formData.preferences.destinations
    .map((id) => destinations.find((d) => d.id === id))
    .filter(Boolean)

  const selectedAccommodations = formData.preferences.accommodations
    .map((id) => accommodations.find((a) => a.id === id))
    .filter(Boolean)

  const selectedVehicles = formData.vehicles
    .map((v) => ({
      ...v,
      info: vehicles.find((vehicle) => vehicle.id === v.vehicleId),
    }))
    .filter((v) => v.info)

  const countryInfo = countryCodes.find((c) => c.dialCode === formData.personalDetails.countryCode)

  const totalTravelers = formData.travelers.adults + formData.travelers.children
  const totalVehicleCost = selectedVehicles.reduce(
    (total, vehicle) => total + vehicle.info!.pricePerDay * vehicle.quantity,
    0,
  )

  return (
    <div className="space-y-6">
      {/* Success Header */}
      <Card className="text-center bg-gradient-to-r from-green-50 to-green-100 border-green-200">
        <CardContent className="p-8">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h2 className="font-serif text-3xl font-bold text-green-800 mb-2">Booking Confirmed!</h2>
          <p className="text-green-700 mb-4">
            Your safari booking has been successfully submitted. We'll contact you within 24 hours to confirm details.
          </p>
          <div className="bg-white rounded-lg p-4 inline-block">
            <p className="text-sm text-gray-600 mb-1">Booking Reference</p>
            <p className="text-2xl font-bold text-[#E8A17D]">{bookingReference}</p>
          </div>
        </CardContent>
      </Card>

      {/* Booking Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Personal Details */}
        <Card>
          <CardHeader>
            <CardTitle className="font-serif text-xl text-[#2F3B2F] flex items-center">
              <Mail className="h-5 w-5 mr-2" />
              Contact Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <p className="text-sm text-gray-600">Name</p>
              <p className="font-semibold">
                {formData.personalDetails.firstName} {formData.personalDetails.lastName}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Email</p>
              <p className="font-semibold">{formData.personalDetails.email}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Phone</p>
              <p className="font-semibold">
                {countryInfo?.flag} {formData.personalDetails.countryCode} {formData.personalDetails.phone}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Trip Details */}
        <Card>
          <CardHeader>
            <CardTitle className="font-serif text-xl text-[#2F3B2F] flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              Trip Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <p className="text-sm text-gray-600">Arrival Date</p>
              <p className="font-semibold">{formatDate(formData.tripDetails.arrivalDate)}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Departure Date</p>
              <p className="font-semibold">{formatDate(formData.tripDetails.departureDate)}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Duration</p>
              <p className="font-semibold">
                {Math.ceil(
                  (new Date(formData.tripDetails.departureDate).getTime() -
                    new Date(formData.tripDetails.arrivalDate).getTime()) /
                    (1000 * 60 * 60 * 24),
                )}{" "}
                days
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Travelers */}
        <Card>
          <CardHeader>
            <CardTitle className="font-serif text-xl text-[#2F3B2F] flex items-center">
              <Users className="h-5 w-5 mr-2" />
              Travelers
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="text-sm text-gray-600">Adults</p>
                <p className="font-semibold text-[#E8A17D]">{formData.travelers.adults}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Children</p>
                <p className="font-semibold text-[#E8A17D]">{formData.travelers.children}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Rooms</p>
                <p className="font-semibold text-[#E8A17D]">{formData.travelers.rooms}</p>
              </div>
            </div>
            {formData.travelers.children > 0 && formData.travelers.childAges && (
              <div>
                <p className="text-sm text-gray-600 mb-2">Children's Ages</p>
                <div className="flex flex-wrap gap-2">
                  {formData.travelers.childAges.map((age, index) => (
                    <Badge key={index} variant="outline">
                      {age} years
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Destinations */}
        <Card>
          <CardHeader>
            <CardTitle className="font-serif text-xl text-[#2F3B2F] flex items-center">
              <MapPin className="h-5 w-5 mr-2" />
              Destinations
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <p className="text-sm text-gray-600 mb-2">Selected Destinations</p>
              <div className="space-y-2">
                {selectedDestinations.map((destination) => (
                  <Badge key={destination!.id} className="bg-[#E8A17D] text-white mr-2">
                    {destination!.name}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-2">Accommodations</p>
              <div className="space-y-1">
                {selectedAccommodations.map((accommodation) => (
                  <div key={accommodation!.id} className="text-sm">
                    <span className="font-medium">{accommodation!.name}</span>
                    <span className="text-gray-600 ml-2">({accommodation!.location})</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Vehicles */}
      <Card>
        <CardHeader>
          <CardTitle className="font-serif text-xl text-[#2F3B2F] flex items-center">
            <Car className="h-5 w-5 mr-2" />
            Vehicle Selection
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {selectedVehicles.map((vehicle) => (
              <div key={vehicle.vehicleId} className="flex items-center justify-between p-4 bg-[#F2EFED] rounded-lg">
                <div className="flex items-center space-x-4">
                  <img
                    src={vehicle.info!.image || "/placeholder.svg"}
                    alt={vehicle.info!.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div>
                    <h4 className="font-semibold text-[#2F3B2F]">{vehicle.info!.name}</h4>
                    <p className="text-sm text-gray-600">
                      {vehicle.quantity} vehicle{vehicle.quantity > 1 ? "s" : ""} × {vehicle.info!.capacity} seats each
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-[#E8A17D]">
                    {formatPrice(vehicle.info!.pricePerDay * vehicle.quantity)}/day
                  </p>
                  <p className="text-sm text-gray-600">
                    Total capacity: {vehicle.quantity * vehicle.info!.capacity} seats
                  </p>
                </div>
              </div>
            ))}
            <div className="border-t pt-4 flex justify-between items-center">
              <span className="font-semibold text-[#2F3B2F]">Total Vehicle Cost per Day:</span>
              <span className="text-xl font-bold text-[#E8A17D]">{formatPrice(totalVehicleCost)}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Special Requests */}
      {formData.specialRequests && (
        <Card>
          <CardHeader>
            <CardTitle className="font-serif text-xl text-[#2F3B2F]">Special Requests</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700">{formData.specialRequests}</p>
          </CardContent>
        </Card>
      )}

      {/* Next Steps */}
      <Card className="bg-[#2F3B2F] text-white">
        <CardHeader>
          <CardTitle className="font-serif text-xl">What Happens Next?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-[#E8A17D] rounded-full flex items-center justify-center text-sm font-bold">
              1
            </div>
            <p>
              We'll review your booking and contact you within 24 hours to confirm availability and finalize details.
            </p>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-[#E8A17D] rounded-full flex items-center justify-center text-sm font-bold">
              2
            </div>
            <p>Our safari expert will discuss your itinerary, answer questions, and provide a detailed quote.</p>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-[#E8A17D] rounded-full flex items-center justify-center text-sm font-bold">
              3
            </div>
            <p>Once confirmed, we'll send you a comprehensive pre-departure guide and packing list.</p>
          </div>
        </CardContent>
      </Card>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          onClick={onReset}
          variant="outline"
          className="border-[#2F3B2F] text-[#2F3B2F] hover:bg-[#2F3B2F] hover:text-white bg-transparent"
        >
          <RotateCcw className="h-4 w-4 mr-2" />
          Book Another Safari
        </Button>
        <Button className="bg-[#E8A17D] hover:bg-[#7FB5B5] text-white">
          <Mail className="h-4 w-4 mr-2" />
          Contact Us
        </Button>
      </div>
    </div>
  )
}
