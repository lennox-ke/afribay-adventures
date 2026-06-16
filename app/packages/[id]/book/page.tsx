// app/booking/[id]/page.tsx
"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { getPackageById, countryCodes } from "@/lib/data"
import type { Package } from "@/lib/types"
import { ArrowLeft, Calendar, Users, MapPin, CheckCircle, Send } from "lucide-react"

// 1️⃣  Import the helper you’ll create in PackageDetailClient.tsx
import { sendBookingEmail } from "@/components/PackageDetailClient"

export default function PackageBookingPage() {
  const params = useParams()
  const router = useRouter()
  const [packageData, setPackageData] = useState<Package | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    countryCode: "+1",
    nationality: "",
    travelDate: "",
    duration: "",
    groupSize: "2",
    specialRequests: "",
    dietaryRequirements: "",
    medicalConditions: "",
    emergencyContact: "",
    emergencyPhone: "",
  })

  // ------------------------------------------------------------------
  // 2️⃣  Hydrate package data
  // ------------------------------------------------------------------
  useEffect(() => {
    if (params.id) {
      const pkg = getPackageById(params.id as string)
      setPackageData(pkg || null)
      if (pkg) {
        setFormData((prev) => ({ ...prev, duration: pkg.duration }))
      }
    }
  }, [params.id])

  // ------------------------------------------------------------------
  // 3️⃣  Form helpers
  // ------------------------------------------------------------------
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value })
  }

  // ------------------------------------------------------------------
  // 4️⃣  Submit handler – now delegates to helper
  // ------------------------------------------------------------------
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!packageData) return

    setIsSubmitting(true)
    try {
      await sendBookingEmail({
        ...formData,
        package_name: packageData.title,
        package_duration: packageData.duration,
        package_price: packageData.price,
        booking_date: new Date().toLocaleDateString(),
      })
      setIsSubmitted(true)
    } catch (err) {
      console.error(err)
      alert("There was an error sending your booking request. Please try again or contact us directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  // ------------------------------------------------------------------
  // 5️⃣  Render
  // ------------------------------------------------------------------
  if (!packageData) {
    return (
      <main className="min-h-screen bg-[#F2EFED] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#2F3B2F] mb-4">Package Not Found</h1>
          <Button onClick={() => router.push("/packages")} className="bg-[#E8A17D] hover:bg-[#7FB5B5]">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Packages
          </Button>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#F2EFED]">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-8 bg-gradient-to-r from-[#2F3B2F] to-[#7FB5B5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button
            onClick={() => router.back()}
            variant="outline"
            className="mb-6 bg-white/10 border-white/20 text-white hover:bg-white/20"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Package
          </Button>
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-white mb-4">Book Your Safari</h1>
          <p className="text-xl text-white/90 max-w-3xl leading-relaxed">
            Complete your booking for {packageData.title}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Package Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle className="font-serif text-xl text-[#2F3B2F]">Package Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-video rounded-lg overflow-hidden">
                  <img
                    src={packageData.image || "/placeholder.svg"}
                    alt={packageData.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h3 className="font-serif text-lg font-bold text-[#2F3B2F] mb-2">{packageData.title}</h3>
                  <Badge variant="secondary" className="mb-2 capitalize">
                    {packageData.category}
                  </Badge>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    {packageData.duration}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="h-4 w-4 mr-2" />
                    {packageData.groupSize.min}-{packageData.groupSize.max} people
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    {packageData.destinations.length} destination{packageData.destinations.length > 1 ? "s" : ""}
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-[#2F3B2F]">Total Price:</span>
                    <span className="text-2xl font-bold text-[#E8A17D]">${packageData.price.toLocaleString()}</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Per person, based on double occupancy</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="font-serif text-2xl text-[#2F3B2F]">Booking Information</CardTitle>
                <p className="text-gray-600">Please fill in all required information to complete your booking.</p>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-6" />
                    <h3 className="font-serif text-2xl font-bold text-[#2F3B2F] mb-4">Booking Request Sent!</h3>
                    <p className="text-gray-600 mb-6 max-w-md mx-auto">
                      Thank you for your booking request. We'll review your information and get back to you within 24
                      hours with confirmation and payment details.
                    </p>
                    <div className="space-y-2">
                      <Button onClick={() => router.push("/packages")} className="bg-[#E8A17D] hover:bg-[#7FB5B5] mr-4">
                        Browse More Packages
                      </Button>
                      <Button onClick={() => router.push("/")} variant="outline">
                        Back to Home
                      </Button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Personal Information */}
                    <div>
                      <h3 className="font-serif text-lg font-bold text-[#2F3B2F] mb-4">Personal Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone Number *</Label>
                          <div className="flex mt-1">
                            <Select onValueChange={(value) => handleSelectChange("countryCode", value)}>
                              <SelectTrigger className="w-24">
                                <SelectValue placeholder="+1" />
                              </SelectTrigger>
                              <SelectContent>
                                {countryCodes.map((country) => (
                                  <SelectItem key={country.code} value={country.dialCode}>
                                    {country.flag} {country.dialCode}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <Input
                              id="phone"
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              required
                              className="ml-2 flex-1"
                              placeholder="123 456 7890"
                            />
                          </div>
                        </div>
                        <div className="md:col-span-2">
                          <Label htmlFor="nationality">Nationality *</Label>
                          <Input
                            id="nationality"
                            name="nationality"
                            value={formData.nationality}
                            onChange={handleInputChange}
                            required
                            className="mt-1"
                            placeholder="e.g., American, British, German"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Travel Details */}
                    <div>
                      <h3 className="font-serif text-lg font-bold text-[#2F3B2F] mb-4">Travel Details</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="travelDate">Preferred Travel Date *</Label>
                          <Input
                            id="travelDate"
                            name="travelDate"
                            type="date"
                            value={formData.travelDate}
                            onChange={handleInputChange}
                            required
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="groupSize">Number of Travelers *</Label>
                          <Select onValueChange={(value) => handleSelectChange("groupSize", value)}>
                            <SelectTrigger className="mt-1">
                              <SelectValue placeholder="Select group size" />
                            </SelectTrigger>
                            <SelectContent>
                              {Array.from(
                                { length: packageData.groupSize.max - packageData.groupSize.min + 1 },
                                (_, i) => {
                                  const size = packageData.groupSize.min + i
                                  return (
                                    <SelectItem key={size} value={size.toString()}>
                                      {size} {size === 1 ? "person" : "people"}
                                    </SelectItem>
                                  )
                                },
                              )}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="md:col-span-2">
                          <Label htmlFor="specialRequests">Special Requests</Label>
                          <Textarea
                            id="specialRequests"
                            name="specialRequests"
                            value={formData.specialRequests}
                            onChange={handleInputChange}
                            rows={3}
                            className="mt-1"
                            placeholder="Any special requests, celebrations, or preferences..."
                          />
                        </div>
                      </div>
                    </div>

                    {/* Additional Information */}
                    <div>
                      <h3 className="font-serif text-lg font-bold text-[#2F3B2F] mb-4">Additional Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="dietaryRequirements">Dietary Requirements</Label>
                          <Input
                            id="dietaryRequirements"
                            name="dietaryRequirements"
                            value={formData.dietaryRequirements}
                            onChange={handleInputChange}
                            className="mt-1"
                            placeholder="e.g., Vegetarian, Halal, Allergies"
                          />
                        </div>
                        <div>
                          <Label htmlFor="medicalConditions">Medical Conditions</Label>
                          <Input
                            id="medicalConditions"
                            name="medicalConditions"
                            value={formData.medicalConditions}
                            onChange={handleInputChange}
                            className="mt-1"
                            placeholder="Any medical conditions we should know about"
                          />
                        </div>
                        <div>
                          <Label htmlFor="emergencyContact">Emergency Contact Name *</Label>
                          <Input
                            id="emergencyContact"
                            name="emergencyContact"
                            value={formData.emergencyContact}
                            onChange={handleInputChange}
                            required
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="emergencyPhone">Emergency Contact Phone *</Label>
                          <Input
                            id="emergencyPhone"
                            name="emergencyPhone"
                            value={formData.emergencyPhone}
                            onChange={handleInputChange}
                            required
                            className="mt-1"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Terms and Submit */}
                    <div className="border-t pt-6">
                      <div className="bg-gray-50 p-4 rounded-lg mb-6">
                        <p className="text-sm text-gray-600">
                          By submitting this booking request, you agree to our terms and conditions. This is not a
                          confirmed booking - we will contact you within 24 hours to confirm availability and provide
                          payment instructions.
                        </p>
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[#E8A17D] hover:bg-[#7FB5B5] text-white text-lg py-3 transition-colors duration-300"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                            Sending Booking Request...
                          </>
                        ) : (
                          <>
                            <Send className="h-5 w-5 mr-2" />
                            Send Booking Request
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}