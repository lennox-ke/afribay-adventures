"use client"

import type React from "react"
import { notFound } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Clock,
  Users,
  MapPin,
  Star,
  Calendar,
  CheckCircle,
  XCircle,
  Camera,
  Compass,
  Shield,
  Award,
  Send,
} from "lucide-react"
import { getPackageById, getDestinationById, getTestimonialsByPackage } from "@/lib/data"
import { formatPrice, calculateDiscountPercentage } from "@/lib/utils"
import Link from "next/link"

interface PackageDetailPageProps {
  params: {
    id: string
  }
}

export default function PackageDetailPageClient({ params }: PackageDetailPageProps) {
  const pkg = getPackageById(params.id)

  if (!pkg) {
    notFound()
  }

  const packageTestimonials = getTestimonialsByPackage(pkg.id)
  const destinations = pkg.destinations.map((id) => getDestinationById(id)).filter(Boolean)

  const difficultyColors = {
    easy: "bg-green-100 text-green-800",
    moderate: "bg-yellow-100 text-yellow-800",
    challenging: "bg-red-100 text-red-800",
  }

  const handleBookingSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    const bookingData = {
      // Package Details
      package_name: pkg.title,
      package_price: formatPrice(pkg.price),
      package_duration: pkg.duration,
      package_category: pkg.category,

      // Client Details
      client_name: formData.get("name"),
      client_email: formData.get("email"),
      client_phone: formData.get("phone"),
      client_country: formData.get("country"),
      travel_date: formData.get("travelDate"),
      adults: formData.get("adults"),
      children: formData.get("children"),
      special_requests: formData.get("specialRequests"),

      // Additional Info
      message: `Booking request for ${pkg.title}\n\nPackage Details:\n- Price: ${formatPrice(pkg.price)}\n- Duration: ${pkg.duration}\n- Category: ${pkg.category}\n\nSpecial Requests: ${formData.get("specialRequests") || "None"}`,
    }

    try {
      // EmailJS integration - replace with your actual service details
      const emailjs = (window as any).emailjs
      await emailjs.send(
        "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
        "YOUR_BOOKING_TEMPLATE_ID", // Replace with your booking template ID
        bookingData,
        "YOUR_PUBLIC_KEY", // Replace with your EmailJS public key
      )

      alert("Booking request sent successfully! We will contact you soon.")
      ;(e.target as HTMLFormElement).reset()
    } catch (error) {
      console.error("Error sending booking request:", error)
      alert("Failed to send booking request. Please try again or contact us directly.")
    }
  }

  return (
    <main className="min-h-screen bg-[#F2EFED]">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TouristTrip",
            name: pkg.title,
            description: pkg.description,
            image: pkg.image,
            offers: {
              "@type": "Offer",
              price: pkg.price,
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
              validFrom: new Date().toISOString(),
              seller: {
                "@type": "TravelAgency",
                name: "Afribay Adventures",
              },
            },
            provider: {
              "@type": "TravelAgency",
              name: "Afribay Adventures",
              url: "https://afribayke.com",
            },
            duration: pkg.duration,
            touristType: pkg.category,
            itinerary: pkg.itinerary.map((day) => ({
              "@type": "Day",
              name: day.title,
              description: day.description,
            })),
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              reviewCount: packageTestimonials.length,
            },
          }),
        }}
      />

      <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
      <script>
        {`
          (function(){
            emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS public key
          })();
        `}
      </script>

      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <Badge className="bg-[#E8A17D] text-white capitalize">{pkg.category}</Badge>
                <Badge className={`${difficultyColors[pkg.difficulty]} border-0`}>{pkg.difficulty}</Badge>
                {pkg.originalPrice && (
                  <Badge className="bg-red-500 text-white">
                    {calculateDiscountPercentage(pkg.originalPrice, pkg.price)}% OFF
                  </Badge>
                )}
              </div>

              <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#2F3B2F] mb-4">{pkg.title}</h1>

              <p className="text-lg text-gray-600 mb-6 leading-relaxed">{pkg.description}</p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="text-center">
                  <Clock className="h-6 w-6 text-[#E8A17D] mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Duration</p>
                  <p className="font-semibold text-[#2F3B2F]">{pkg.duration}</p>
                </div>
                <div className="text-center">
                  <Users className="h-6 w-6 text-[#E8A17D] mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Group Size</p>
                  <p className="font-semibold text-[#2F3B2F]">
                    {pkg.groupSize.min}-{pkg.groupSize.max}
                  </p>
                </div>
                <div className="text-center">
                  <MapPin className="h-6 w-6 text-[#E8A17D] mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Destinations</p>
                  <p className="font-semibold text-[#2F3B2F]">{pkg.destinations.length}</p>
                </div>
                <div className="text-center">
                  <Calendar className="h-6 w-6 text-[#E8A17D] mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Best Time</p>
                  <p className="font-semibold text-[#2F3B2F] text-xs">{pkg.bestTime}</p>
                </div>
              </div>

              <div className="flex items-center justify-between mb-8">
                <div>
                  <span className="text-3xl md:text-4xl font-bold text-[#2F3B2F]">{formatPrice(pkg.price)}</span>
                  {pkg.originalPrice && (
                    <span className="text-lg text-gray-500 line-through ml-3">{formatPrice(pkg.originalPrice)}</span>
                  )}
                  <p className="text-sm text-gray-600 mt-1">per person</p>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="text-lg font-semibold text-[#2F3B2F] ml-1">4.8</span>
                  <span className="text-sm text-gray-600 ml-1">({packageTestimonials.length} reviews)</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#E8A17D] hover:bg-[#7FB5B5] text-white transition-colors duration-300"
                >
                  <Link href="#booking-form">Book This Safari</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-[#2F3B2F] text-[#2F3B2F] hover:bg-[#2F3B2F] hover:text-white bg-transparent"
                >
                  <Link href="/contact">Ask Questions</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <img
                src={pkg.image || "/placeholder.svg"}
                alt={pkg.title}
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      {pkg.gallery && pkg.gallery.length > 0 && (
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {pkg.gallery.map((image, index) => (
                <img
                  key={index}
                  src={image || "/placeholder.svg"}
                  alt={`${pkg.title} gallery ${index + 1}`}
                  className="w-full h-32 object-cover rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Main Content */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-5">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
                  <TabsTrigger value="destinations">Places</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                  <TabsTrigger value="booking">Book Now</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="font-serif text-2xl text-[#2F3B2F]">Safari Highlights</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        {pkg.highlights.map((highlight, index) => (
                          <div key={index} className="flex items-center space-x-3">
                            <CheckCircle className="h-5 w-5 text-[#E8A17D] flex-shrink-0" />
                            <span className="text-gray-700">{highlight}</span>
                          </div>
                        ))}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="font-semibold text-[#2F3B2F] mb-3 flex items-center">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                            What's Included
                          </h4>
                          <ul className="space-y-2">
                            {pkg.includes.map((item, index) => (
                              <li key={index} className="text-gray-600 text-sm flex items-start">
                                <span className="w-2 h-2 bg-[#E8A17D] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-[#2F3B2F] mb-3 flex items-center">
                            <XCircle className="h-5 w-5 text-red-500 mr-2" />
                            Not Included
                          </h4>
                          <ul className="space-y-2">
                            {pkg.excludes.map((item, index) => (
                              <li key={index} className="text-gray-600 text-sm flex items-start">
                                <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="itinerary" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="font-serif text-2xl text-[#2F3B2F]">Day by Day Itinerary</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {pkg.itinerary.map((day, index) => (
                          <div key={index} className="border-l-4 border-[#E8A17D] pl-6 pb-6">
                            <div className="flex items-center mb-2">
                              <div className="w-8 h-8 bg-[#E8A17D] text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                                {day.day}
                              </div>
                              <h4 className="font-semibold text-[#2F3B2F] text-lg">{day.title}</h4>
                            </div>
                            <p className="text-gray-600 mb-3">{day.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {day.activities.map((activity, actIndex) => (
                                <Badge key={actIndex} variant="outline" className="text-xs">
                                  {activity}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="destinations" className="mt-6">
                  <div className="space-y-6">
                    {destinations.map((destination) => (
                      <Card key={destination?.id}>
                        <CardContent className="p-6">
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <img
                              src={destination?.image || "/placeholder.svg"}
                              alt={destination?.name}
                              className="w-full h-48 object-cover rounded-lg"
                            />
                            <div className="md:col-span-2">
                              <h3 className="font-serif text-xl font-bold text-[#2F3B2F] mb-3">{destination?.name}</h3>
                              <p className="text-gray-600 mb-4">{destination?.description}</p>
                              <div className="flex flex-wrap gap-2">
                                {destination?.highlights.map((highlight, index) => (
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
                </TabsContent>

                <TabsContent value="reviews" className="mt-6">
                  <div className="space-y-6">
                    {packageTestimonials.length > 0 ? (
                      packageTestimonials.map((testimonial) => (
                        <Card key={testimonial.id}>
                          <CardContent className="p-6">
                            <div className="flex items-start space-x-4">
                              <div className="w-12 h-12 bg-gradient-to-br from-[#E8A17D] to-[#7FB5B5] rounded-full flex items-center justify-center text-white font-bold">
                                {testimonial.name.charAt(0)}
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center justify-between mb-2">
                                  <div>
                                    <h4 className="font-semibold text-[#2F3B2F]">{testimonial.name}</h4>
                                    <p className="text-sm text-gray-600">{testimonial.country}</p>
                                  </div>
                                  <div className="flex items-center">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                                    ))}
                                  </div>
                                </div>
                                <blockquote className="text-gray-700 italic">"{testimonial.comment}"</blockquote>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))
                    ) : (
                      <Card>
                        <CardContent className="p-6 text-center">
                          <p className="text-gray-600">No reviews yet for this package.</p>
                        </CardContent>
                      </Card>
                    )}
                  </div>
                </TabsContent>

                <TabsContent value="booking" className="mt-6">
                  <Card id="booking-form">
                    <CardHeader>
                      <CardTitle className="font-serif text-2xl text-[#2F3B2F]">Book {pkg.title}</CardTitle>
                      <p className="text-gray-600">
                        Fill out the form below and we'll get back to you within 24 hours.
                      </p>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleBookingSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="name">Full Name *</Label>
                            <Input id="name" name="name" required className="mt-1" />
                          </div>
                          <div>
                            <Label htmlFor="email">Email Address *</Label>
                            <Input id="email" name="email" type="email" required className="mt-1" />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="phone">Phone Number *</Label>
                            <Input id="phone" name="phone" required className="mt-1" />
                          </div>
                          <div>
                            <Label htmlFor="country">Country *</Label>
                            <Select name="country" required>
                              <SelectTrigger>
                                <SelectValue placeholder="Select your country" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="us">United States</SelectItem>
                                <SelectItem value="uk">United Kingdom</SelectItem>
                                <SelectItem value="ca">Canada</SelectItem>
                                <SelectItem value="au">Australia</SelectItem>
                                <SelectItem value="de">Germany</SelectItem>
                                <SelectItem value="fr">France</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <Label htmlFor="travelDate">Preferred Travel Date *</Label>
                            <Input id="travelDate" name="travelDate" type="date" required className="mt-1" />
                          </div>
                          <div>
                            <Label htmlFor="adults">Adults *</Label>
                            <Select name="adults" required>
                              <SelectTrigger>
                                <SelectValue placeholder="Adults" />
                              </SelectTrigger>
                              <SelectContent>
                                {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                                  <SelectItem key={num} value={num.toString()}>
                                    {num}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <Label htmlFor="children">Children</Label>
                            <Select name="children">
                              <SelectTrigger>
                                <SelectValue placeholder="Children" />
                              </SelectTrigger>
                              <SelectContent>
                                {[0, 1, 2, 3, 4, 5, 6].map((num) => (
                                  <SelectItem key={num} value={num.toString()}>
                                    {num}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="specialRequests">Special Requests or Questions</Label>
                          <Textarea
                            id="specialRequests"
                            name="specialRequests"
                            placeholder="Any dietary requirements, accessibility needs, or special occasions..."
                            className="mt-1"
                            rows={4}
                          />
                        </div>

                        <div className="bg-[#F2EFED] p-4 rounded-lg">
                          <h4 className="font-semibold text-[#2F3B2F] mb-2">Package Summary</h4>
                          <div className="space-y-1 text-sm">
                            <p>
                              <span className="font-medium">Package:</span> {pkg.title}
                            </p>
                            <p>
                              <span className="font-medium">Duration:</span> {pkg.duration}
                            </p>
                            <p>
                              <span className="font-medium">Price:</span> {formatPrice(pkg.price)} per person
                            </p>
                            <p>
                              <span className="font-medium">Category:</span> {pkg.category}
                            </p>
                          </div>
                        </div>

                        <Button type="submit" className="w-full bg-[#E8A17D] hover:bg-[#7FB5B5] text-white" size="lg">
                          <Send className="h-4 w-4 mr-2" />
                          Send Booking Request
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Booking Card */}
                <Card>
                  <CardHeader>
                    <CardTitle className="font-serif text-xl text-[#2F3B2F]">Book This Safari</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center mb-6">
                      <span className="text-3xl font-bold text-[#2F3B2F]">{formatPrice(pkg.price)}</span>
                      {pkg.originalPrice && (
                        <span className="text-lg text-gray-500 line-through ml-2">
                          {formatPrice(pkg.originalPrice)}
                        </span>
                      )}
                      <p className="text-sm text-gray-600">per person</p>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Duration:</span>
                        <span className="font-semibold">{pkg.duration}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Group Size:</span>
                        <span className="font-semibold">
                          {pkg.groupSize.min}-{pkg.groupSize.max} people
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Difficulty:</span>
                        <Badge className={`${difficultyColors[pkg.difficulty]} border-0 text-xs`}>
                          {pkg.difficulty}
                        </Badge>
                      </div>
                    </div>

                    <Button asChild className="w-full bg-[#E8A17D] hover:bg-[#7FB5B5] text-white mb-3">
                      <Link href="#booking-form">Book Now</Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-[#2F3B2F] text-[#2F3B2F] hover:bg-[#2F3B2F] hover:text-white bg-transparent"
                    >
                      <Link href="/contact">Contact Us</Link>
                    </Button>
                  </CardContent>
                </Card>

                {/* Features */}
                <Card>
                  <CardHeader>
                    <CardTitle className="font-serif text-lg text-[#2F3B2F]">Why Choose This Safari?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Camera className="h-5 w-5 text-[#E8A17D]" />
                        <span className="text-sm text-gray-700">Professional Photography</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Compass className="h-5 w-5 text-[#E8A17D]" />
                        <span className="text-sm text-gray-700">Expert Local Guides</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Shield className="h-5 w-5 text-[#E8A17D]" />
                        <span className="text-sm text-gray-700">Safety Guaranteed</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Award className="h-5 w-5 text-[#E8A17D]" />
                        <span className="text-sm text-gray-700">Award-Winning Service</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
