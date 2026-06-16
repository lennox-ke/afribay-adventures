"use client"

import { notFound } from "next/navigation"
import { use } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Clock, Users, MapPin, Star, CheckCircle, XCircle, Send } from "lucide-react"
import { getPackageById } from "@/lib/data"
import { formatPrice } from "@/lib/utils"
import Link from "next/link"
import emailjs from "@emailjs/browser"

/* ---------- EmailJS – same keys as PackageDetailClient ---------- */
const BOOKING_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_BOOKING_SERVICE_ID || "service_gj5asq8"
const BOOKING_TMPL_ID = process.env.NEXT_PUBLIC_EMAILJS_BOOKING_TEMPLATE_ID || "template_6ek2dwa"
const BOOKING_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_BOOKING_PUBLIC_KEY || "Bw_IewUh2M7cu58JH"

const CONFIRM_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_CONFIRM_SERVICE_ID || "service_rmfnian"
const CONFIRM_TMPL_ID = process.env.NEXT_PUBLIC_EMAILJS_CONFIRM_TEMPLATE_ID || "template_oxxshx7"
const CONFIRM_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_CONFIRM_PUBLIC_KEY || "lX9MBwxLcZMWc2MsH"

async function sendEmails(data: Record<string, any>) {
  await emailjs.send(BOOKING_SERVICE_ID, BOOKING_TMPL_ID, data, BOOKING_PUBLIC_KEY)
  await emailjs.send(CONFIRM_SERVICE_ID, CONFIRM_TMPL_ID, data, CONFIRM_PUBLIC_KEY)
}

/* ---------- page ---------- */
export default function OfferPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const pkg = getPackageById(id)

  if (!pkg || pkg.category !== "offer") notFound()

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const payload = {
      package_name: pkg.title,
      package_price: formatPrice(pkg.price),
      package_duration: pkg.duration,
      package_category: pkg.category,
      client_name: fd.get("name"),
      client_email: fd.get("email"),
      client_phone: fd.get("phone"),
      client_country: fd.get("country"),
      travel_date: fd.get("travelDate"),
      adults: fd.get("adults"),
      children: fd.get("children"),
      special_requests: fd.get("specialRequests") || "None",
      message: `Booking request for ${pkg.title}\nPrice: ${formatPrice(pkg.price)}\nDuration: ${pkg.duration}`,
    }
    try {
      await sendEmails(payload)
      alert("Request sent! We will contact you within 24 h.")
      ;(e.target as HTMLFormElement).reset()
    } catch {
      alert("Failed to send. Please try again or contact us directly.")
    }
  }

  return (
    <main className="min-h-screen bg-[#F2EFED]">
      {/* HERO */}
      <section className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <Badge className="bg-green-600 text-white mb-4">OFFER</Badge>
            <h1 className="font-serif text-3xl md:text-5xl font-bold text-[#2F3B2F] mb-4">{pkg.title}</h1>
            <p className="text-gray-600 mb-6">{pkg.description}</p>

            <div className="grid grid-cols-2 gap-4 mb-6 text-center">
              <div>
                <Clock className="h-6 w-6 text-[#E8A17D] mx-auto mb-1" />
                <p className="text-sm text-gray-600">Duration</p>
                <p className="font-semibold">{pkg.duration}</p>
              </div>
              <div>
                <Users className="h-6 w-6 text-[#E8A17D] mx-auto mb-1" />
                <p className="text-sm text-gray-600">Group Size</p>
                <p className="font-semibold">
                  {pkg.groupSize.min}-{pkg.groupSize.max}
                </p>
              </div>
              <div>
                <MapPin className="h-6 w-6 text-[#E8A17D] mx-auto mb-1" />
                <p className="text-sm text-gray-600">Destinations</p>
                <p className="font-semibold">{pkg.destinations.length}</p>
              </div>
              <div>
                <Star className="h-6 w-6 text-yellow-400 fill-current mx-auto mb-1" />
                <p className="text-sm text-gray-600">Rating</p>
                <p className="font-semibold">4.8</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-[#E8A17D] hover:bg-[#7FB5B5] text-white" asChild>
                <Link href="#offer-book">Book This Offer</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">Ask Questions</Link>
              </Button>
            </div>
          </div>

          <img
            src={pkg.image || "/placeholder.svg"}
            alt={pkg.title}
            className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* HIGHLIGHTS */}
            <Card>
              <CardHeader>
                <CardTitle className="font-serif text-xl text-[#2F3B2F]">Safari Highlights</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                  {pkg.highlights.map((h: string, i: number) => (
                    <div key={i} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-[#E8A17D] mt-0.5" />
                      <span className="text-gray-700 text-sm">{h}</span>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-[#2F3B2F] mb-3 flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                      What&rsquo;s Included
                    </h4>
                    <ul className="space-y-2">
                      {pkg.inclusions.map((item: string, i: number) => (
                        <li key={i} className="text-sm text-gray-600 flex items-start">
                          <span className="w-2 h-2 bg-[#E8A17D] rounded-full mt-2 mr-3" />
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
                      {pkg.exclusions.map((item: string, i: number) => (
                        <li key={i} className="text-sm text-gray-600 flex items-start">
                          <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* ITINERARY */}
            <Card>
              <CardHeader>
                <CardTitle className="font-serif text-xl text-[#2F3B2F]">Day-by-Day Itinerary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {pkg.itinerary.map((day: any, i: number) => (
                    <div key={i} className="border-l-4 border-[#E8A17D] pl-4">
                      <div className="flex items-center mb-2">
                        <span className="w-7 h-7 bg-[#E8A17D] text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                          {day.day}
                        </span>
                        <h4 className="font-semibold text-[#2F3B2F]">{day.title}</h4>
                      </div>
                      <p className="text-gray-600 text-sm">{day.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* BOOKING FORM */}
            <Card id="offer-book">
              <CardHeader>
                <CardTitle className="font-serif text-xl text-[#2F3B2F]">Book This Offer</CardTitle>
                <p className="text-sm text-gray-600">Fill the form and we’ll get back to you within 24 h.</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={onSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label>Full Name *</Label>
                      <Input name="name" required />
                    </div>
                    <div>
                      <Label>Email *</Label>
                      <Input name="email" type="email" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label>Phone *</Label>
                      <Input name="phone" required />
                    </div>
                    <div>
                      <Label>Country *</Label>
                      <Select name="country" required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select country" />
                        </SelectTrigger>
                        <SelectContent>
                          {["United States","United Kingdom","Canada","Australia","Germany","France","Other"].map(c => (
                            <SelectItem key={c} value={c}>{c}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label>Travel Date *</Label>
                      <Input name="travelDate" type="date" required />
                    </div>
                    <div>
                      <Label>Adults *</Label>
                      <Select name="adults" required>
                        <SelectTrigger><SelectValue placeholder="Adults" /></SelectTrigger>
                        <SelectContent>
                          {[1,2,3,4,5,6,7,8].map(n => <SelectItem key={n} value={String(n)}>{n}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label>Children</Label>
                      <Select name="children">
                        <SelectTrigger><SelectValue placeholder="Children" /></SelectTrigger>
                        <SelectContent>
                          {[0,1,2,3,4,5,6].map(n => <SelectItem key={n} value={String(n)}>{n}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label>Special Requests</Label>
                    <Textarea name="specialRequests" rows={4} placeholder="Dietary needs, celebrations, questions..." />
                  </div>

                  <Button type="submit" className="w-full bg-[#E8A17D] hover:bg-[#7FB5B5] text-white">
                    <Send className="h-4 w-4 mr-2" /> Send Booking Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* STICKY SIDEBAR */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif text-lg text-[#2F3B2F]">Offer Price</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-4">
                    <span className="text-3xl font-bold text-[#2F3B2F]">{formatPrice(pkg.price)}</span>
                    <p className="text-sm text-gray-600">per person</p>
                  </div>
                  <div className="space-y-2 text-sm mb-4">
                    <div className="flex justify-between"><span className="text-gray-600">Duration:</span><span className="font-semibold">{pkg.duration}</span></div>
                    <div className="flex justify-between"><span className="text-gray-600">Group:</span><span className="font-semibold">{pkg.groupSize.min}-{pkg.groupSize.max}</span></div>
                  </div>
                  <Button asChild className="w-full bg-[#E8A17D] hover:bg-[#7FB5B5] text-white mb-3">
                    <Link href="#offer-book">Book Now</Link>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/contact">Ask Questions</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-serif text-lg text-[#2F3B2F]">Why This Offer?</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center space-x-3"><CheckCircle className="h-5 w-5 text-green-500" /><span>Limited-time promotional price</span></li>
                    <li className="flex items-center space-x-3"><CheckCircle className="h-5 w-5 text-green-500" /><span>All-inclusive package</span></li>
                    <li className="flex items-center space-x-3"><CheckCircle className="h-5 w-5 text-green-500" /><span>Small-group guarantee</span></li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}