// src/components/PackageDetailClient.tsx
'use client'

import type React from 'react'
import { notFound } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
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
  Download,
} from 'lucide-react'
import { getPackageById, getDestinationById, getTestimonialsByPackage } from '@/lib/data'
import { formatPrice } from '@/lib/utils'
import Link from 'next/link'
import emailjs from '@emailjs/browser'

interface PackageDetailClientProps {
  params: { id: string }
}

/* ------------------------------------------------------------------ */
/* 1️⃣  DUAL EMAILJS CONFIGURATION                                     */
/* ------------------------------------------------------------------ */
const BOOKING_SERVICE_ID   = process.env.NEXT_PUBLIC_EMAILJS_BOOKING_SERVICE_ID   || 'service_gj5asq8'
const BOOKING_TMPL_ID      = process.env.NEXT_PUBLIC_EMAILJS_BOOKING_TEMPLATE_ID || 'template_6ek2dwa'
const BOOKING_PUBLIC_KEY   = process.env.NEXT_PUBLIC_EMAILJS_BOOKING_PUBLIC_KEY   || 'Bw_IewUh2M7cu58JH'

const CONFIRM_SERVICE_ID   = process.env.NEXT_PUBLIC_EMAILJS_CONFIRM_SERVICE_ID   || 'service_rmfnian'
const CONFIRM_TMPL_ID      = process.env.NEXT_PUBLIC_EMAILJS_CONFIRM_TEMPLATE_ID || 'template_oxxshx7'
const CONFIRM_PUBLIC_KEY   = process.env.NEXT_PUBLIC_EMAILJS_CONFIRM_PUBLIC_KEY   || 'lX9MBwxLcZMWc2MsH'

/* ------------------------------------------------------------------ */
/* 2️⃣  EXPORTED HELPERS                                              */
/* ------------------------------------------------------------------ */
export const sendBookingEmail = async (data: Record<string, any>) => {
  // Send booking enquiry to Afribay (Account #1)
  await emailjs.send(BOOKING_SERVICE_ID, BOOKING_TMPL_ID, data, BOOKING_PUBLIC_KEY)

  // Send confirmation to client (Account #2)
  await emailjs.send(CONFIRM_SERVICE_ID, CONFIRM_TMPL_ID, data, CONFIRM_PUBLIC_KEY)
}

/* ------------------------------------------------------------------ */
/* 3️⃣  COMPONENT                                                     */
/* ------------------------------------------------------------------ */
export default function PackageDetailClient({ params }: PackageDetailClientProps) {
  const pkg = getPackageById(params.id)
  if (!pkg) notFound()

  const packageTestimonials = getTestimonialsByPackage(pkg.id)
  const destinations = pkg.destinations.map((id) => getDestinationById(id)).filter(Boolean)
  const isPremium = pkg.category === 'premium'

  const difficultyColors = {
    easy: 'bg-green-100 text-green-800',
    moderate: 'bg-yellow-100 text-yellow-800',
    challenging: 'bg-red-100 text-red-800',
  }

  /* ---------- handlers ---------- */
  const handlePdfDownload = () => {
    if (!pkg.pdfItinerary) return
    const link = document.createElement('a')
    link.href = pkg.pdfItinerary
    link.download = `${pkg.title.replace(/\s+/g, '-')}-Itinerary.pdf`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleBookingSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const bookingData = {
      package_name: pkg.title,
      package_price: isPremium ? 'See pricing table' : formatPrice(pkg.price),
      package_duration: pkg.duration,
      package_category: pkg.category,
      client_name: formData.get('name'),
      client_email: formData.get('email'),
      client_phone: formData.get('phone'),
      client_country: formData.get('country'),
      travel_date: formData.get('travelDate'),
      adults: formData.get('adults'),
      children: formData.get('children'),
      special_requests: formData.get('specialRequests'),
      message: `Booking request for ${pkg.title}\n\n${
        isPremium
          ? 'Pricing is illustrated in the pricing table above.'
          : `Price: ${formatPrice(pkg.price)}`
      }\nDuration: ${pkg.duration}\nCategory: ${pkg.category}\n\nSpecial Requests: ${
        formData.get('specialRequests') || 'None'
      }`,
    }

    try {
      await sendBookingEmail(bookingData)
      alert('Booking request sent successfully! We will contact you soon.')
      ;(e.target as HTMLFormElement).reset()
    } catch {
      alert('Failed to send booking request. Please try again or contact us directly.')
    }
  }

  /* ---------- Modern Pricing Table ---------- */
  const renderPricingTable = () => {
    if (!isPremium || !pkg.seasonsAndRates || !pkg.detailedSeasonalRates || !pkg.pricing)
      return null
    const { seasons, rateTable } = pkg.seasonsAndRates
    const { rates } = pkg.detailedSeasonalRates

    const TableCard = ({ title, rows }: { title: string; rows: any[] }) => (
      <Card className="mb-6 shadow-sm">
        <CardHeader>
          <CardTitle className="font-serif text-lg text-[#2F3B2F]">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-slate-50">
                <tr className="border-b">
                  <th className="px-3 py-2 text-left">Item</th>
                  <th className="px-3 py-2 text-center">High Season</th>
                  <th className="px-3 py-2 text-center">Mid Season</th>
                  <th className="px-3 py-2 text-center">Green Season</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {rows.map((row, idx) => (
                  <tr key={idx}>
                    <td className="px-3 py-2 font-medium text-slate-700">{row.label}</td>
                    <td className="px-3 py-2 text-center">{row.high}</td>
                    <td className="px-3 py-2 text-center">{row.mid}</td>
                    <td className="px-3 py-2 text-center">{row.green}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    )

    const sharedRows = [
      ...rateTable.rows.map((r: any) => ({
        label: `${r.groupSize} people`,
        high: formatPrice(r.highPublished),
        mid: formatPrice(r.midPublished),
        green: formatPrice(r.greenPublished),
      })),
    ]

    const buyOutRows = [
      ...rates.map((r: any) => ({
        label: r.description,
        high: formatPrice(r.high),
        mid: formatPrice(r.mid),
        green: formatPrice(r.green),
      })),
    ]

    return (
      <>
        <div className="flex flex-wrap gap-3 mb-4">
          {seasons.map((s: any) => (
            <div key={s.name} className="flex items-center gap-2">
              <span className="w-4 h-4 rounded-full" style={{ backgroundColor: s.color }} />
              <span className="text-sm font-semibold">{s.name}</span>
              <span className="text-xs text-gray-600">({s.dates})</span>
            </div>
          ))}
        </div>

        <TableCard title="Shared Experience" rows={sharedRows} />
        <TableCard title="Full Buy-Out (Private)" rows={buyOutRows} />
      </>
    )
  }

  /* ---------- Additional Charges ---------- */
  const renderAdditionalCharges = () => {
    if (!isPremium || !pkg.pricing) return null
    const { park_fees, child_policy, enhancements, special_offer } = pkg.pricing

    const info = [
      {
        title: 'Park / Conservancy Fees',
        content: Object.entries(park_fees.adult)
          .map(([p, v]) => `${p}: ${formatPrice(v as number)}`)
          .join(' | '),
      },
      {
        title: 'Child Park Fee (5–14.99 yrs)',
        content: formatPrice(park_fees.child['5 - 14.99 years']),
      },
      {
        title: 'Enhancements (optional)',
        content: `Balloon Safari: ${formatPrice(
          Number(enhancements.balloon_safari.split('_')[0]),
        )} per person`,
      },
      {
        title: 'Child Policy',
        content: `0–11.99 yrs: free | 12–17.99 yrs: 75 % of adult rate`,
      },
    ]

    return (
      <section className="mt-10">
        <h2 className="font-serif text-2xl font-bold text-[#2F3B2F] mb-4">
          Additional Charges
        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {info.map((item) => (
            <Card key={item.title} className="shadow-sm">
              <CardHeader>
                <CardTitle className="text-base">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-700">{item.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    )
  }

  /* ---------- Extra Pricing Breakdown ---------- */
  const renderExtraPricing = () => {
    if (!isPremium || !pkg.pricing) return null
    const {
      validity,
      seasons,
      park_fees,
      tourism_development_levy,
      child_policy,
      enhancements,
      special_offer,
    } = pkg.pricing

    return (
      <section className="mt-10">
        <h2 className="font-serif text-2xl font-bold text-[#2F3B2F] mb-4">
          Extra Pricing Details
        </h2>

        <div className="space-y-6">
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-base">Validity</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-700">{validity}</p>
            </CardContent>
          </Card>

          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-base">Seasons (2026)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h5 className="font-semibold text-red-700 mb-1">High</h5>
                <ul className="list-disc list-inside text-sm text-gray-700">
                  {seasons.high.map((s: string) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-yellow-700 mb-1">Mid</h5>
                <ul className="list-disc list-inside text-sm text-gray-700">
                  {seasons.mid.map((s: string) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="font-semibold text-green-700 mb-1">Green</h5>
                <ul className="list-disc list-inside text-sm text-gray-700">
                  {seasons.green.map((s: string) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-base">Park / Conservancy Fees</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-700 space-y-2">
              {Object.entries(park_fees.adult).map(([period, fee]) => (
                <p key={period}>
                  <span className="font-medium">{period}:</span> {formatPrice(fee as number)} (adult)
                </p>
              ))}
              <p>
                <span className="font-medium">Child (5–14.99 yrs):</span> {formatPrice(park_fees.child['5 - 14.99 years'])}
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-base">Child Policy</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-700">
              <p>0–11.99 yrs: {child_policy['0-11.99_years']}</p>
              <p>12–17.99 yrs: {child_policy['12-17.99_years']}</p>
            </CardContent>
          </Card>

          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-base">Enhancements (Optional)</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-700">
              <p>
                Balloon Safari: {formatPrice(Number(enhancements.balloon_safari.split('_')[0]))} per person
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-base">Special Offer</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-700">{special_offer}</p>
            </CardContent>
          </Card>

          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle className="text-base">Tourism Development Levy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-700">{tourism_development_levy.replace(/_/g, ' ')}</p>
            </CardContent>
          </Card>
        </div>
      </section>
    )
  }

  return (
    <main className="min-h-screen bg-[#F2EFED]">
      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'TouristTrip',
            name: pkg.title,
            description: pkg.description,
            image: pkg.image,
            offers: {
              '@type': 'Offer',
              price: isPremium ? 'Contact us for pricing' : pkg.price,
              priceCurrency: 'USD',
              availability: 'https://schema.org/InStock',
              validFrom: new Date().toISOString(),
              seller: { '@type': 'TravelAgency', name: 'Afribay Adventures' },
            },
            provider: {
              '@type': 'TravelAgency',
              name: 'Afribay Adventures',
              url: 'https://afribayke.com',
            },
            duration: pkg.duration,
            touristType: pkg.category,
            itinerary: pkg.itinerary.map((d: any) => ({
              '@type': 'Day',
              name: d.title,
              description: d.description,
            })),
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.8',
              reviewCount: packageTestimonials.length,
            },
          }),
        }}
      />

      {/* EmailJS CDN & init */}
      <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js" />
      <script
        dangerouslySetInnerHTML={{
          __html: `emailjs.init("${BOOKING_PUBLIC_KEY}");`,
        }}
      />

      {/* Hero */}
      <section className="pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <Badge className="bg-[#E8A17D] text-white capitalize">{pkg.category}</Badge>
                <Badge className={`${difficultyColors[pkg.difficulty]} border-0`}>{pkg.difficulty}</Badge>
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

              {isPremium ? (
                <div className="mb-8">
                  <p className="text-sm text-gray-600 mb-1">From</p>
                  <span className="text-3xl md:text-4xl font-bold text-[#2F3B2F]">
                    {formatPrice(
                      Math.min(
                        ...pkg.seasonsAndRates.rateTable.rows.map((r: any) => r.greenPublished),
                      ),
                    )}
                  </span>
                  <p className="text-sm text-gray-600">per person (Green Season)</p>
                </div>
              ) : (
                <div className="mb-8">
                  <span className="text-3xl md:text-4xl font-bold text-[#2F3B2F]">{formatPrice(pkg.price)}</span>
                  <p className="text-sm text-gray-600 mt-1">per person</p>
                </div>
              )}

              <div className="flex items-center mb-6">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="text-lg font-semibold text-[#2F3B2F] ml-1">4.8</span>
                <span className="text-sm text-gray-600 ml-1">({packageTestimonials.length} reviews)</span>
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
                {pkg.pdfItinerary && (
                  <Button
                    onClick={handlePdfDownload}
                    variant="outline"
                    size="lg"
                    className="border-[#7FB5B5] text-[#7FB5B5] hover:bg-[#7FB5B5] hover:text-white bg-transparent"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                  </Button>
                )}
              </div>
            </div>

            <div className="relative">
              <img
                src={pkg.image || '/placeholder.svg'}
                alt={pkg.title}
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      {pkg.gallery && pkg.gallery.length > 0 && (
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {pkg.gallery.map((image: string, index: number) => (
                <img
                  key={index}
                  src={image || '/placeholder.svg'}
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
            <div className="lg:col-span-2">
              {isPremium && renderPricingTable()}

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
                        {pkg.highlights.map((highlight: string, index: number) => (
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
                            {pkg.includes.map((item: string, index: number) => (
                              <li key={index} className="text-gray-600 text-sm flex items-start">
                                <span className="w-2 h-2 bg-[#E8A17D] rounded-full mt-2 mr-3 flex-shrink-0" />
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
                            {pkg.excludes.map((item: string, index: number) => (
                              <li key={index} className="text-gray-600 text-sm flex items-start">
                                <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0" />
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
                        {pkg.itinerary.map((day: any, index: number) => (
                          <div key={index} className="border-l-4 border-[#E8A17D] pl-6 pb-6">
                            <div className="flex items-center mb-2">
                              <div className="w-8 h-8 bg-[#E8A17D] text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                                {day.day}
                              </div>
                              <h4 className="font-semibold text-[#2F3B2F] text-lg">{day.title}</h4>
                            </div>
                            <p className="text-gray-600 mb-3">{day.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {day.activities.map((activity: string, actIndex: number) => (
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
                              src={destination?.image || '/placeholder.svg'}
                              alt={destination?.name}
                              className="w-full h-48 object-cover rounded-lg"
                            />
                            <div className="md:col-span-2">
                              <h3 className="font-serif text-xl font-bold text-[#2F3B2F] mb-3">
                                {destination?.name}
                              </h3>
                              <p className="text-gray-600 mb-4">{destination?.description}</p>
                              <div className="flex flex-wrap gap-2">
                                {destination?.highlights.map((highlight: string, index: number) => (
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
                        {isPremium
                          ? 'Prices are illustrated in the pricing table above. Fill out the form and we will contact you within 24 hours.'
                          : 'Fill out the form below and we will get back to you within 24 hours.'}
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
                              <span className="font-medium">Category:</span> {pkg.category}
                            </p>
                            {isPremium && (
                              <p className="italic text-gray-700 mt-2">
                                Prices are illustrated in the pricing table above.
                              </p>
                            )}
                          </div>
                        </div>

                        <Button
                          type="submit"
                          className="w-full bg-[#E8A17D] hover:bg-[#7FB5B5] text-white"
                          size="lg"
                        >
                          <Send className="h-4 w-4 mr-2" />
                          Send Booking Request
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>

              {isPremium && renderAdditionalCharges()}
              {isPremium && renderExtraPricing()}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="font-serif text-xl text-[#2F3B2F]">Book This Safari</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center mb-6">
                      {isPremium ? (
                        <>
                          <p className="text-sm text-gray-600 mb-1">From</p>
                          <span className="text-3xl font-bold text-[#2F3B2F]">
                            {formatPrice(
                              Math.min(
                                ...pkg.seasonsAndRates.rateTable.rows.map((r: any) => r.greenPublished),
                              ),
                            )}
                          </span>
                          <p className="text-sm text-gray-600">per person</p>
                        </>
                      ) : (
                        <>
                          <span className="text-3xl font-bold text-[#2F3B2F]">{formatPrice(pkg.price)}</span>
                          <p className="text-sm text-gray-600">per person</p>
                        </>
                      )}
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

                    <Button
                      asChild
                      className="w-full bg-[#E8A17D] hover:bg-[#7FB5B5] text-white mb-3"
                    >
                      <Link href="#booking-form">Book Now</Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-[#2F3B2F] text-[#2F3B2F] hover:bg-[#2F3B2F] hover:text-white bg-transparent"
                    >
                      <Link href="/contact">Contact Us</Link>
                    </Button>
                    {pkg.pdfItinerary && (
                      <Button
                        onClick={handlePdfDownload}
                        variant="outline"
                        className="w-full border-[#7FB5B5] text-[#7FB5B5] hover:bg-[#7FB5B5] hover:text-white bg-transparent mt-3"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download PDF
                      </Button>
                    )}
                  </CardContent>
                </Card>

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
    </main>
  )
}