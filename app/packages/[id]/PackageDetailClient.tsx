"use client"

import type React from "react"
import { useState } from "react"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
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
  ChevronRight,
  Globe,
} from "lucide-react"
import {
  getPackageById,
  getDestinationById,
  getTestimonialsByPackage,
} from "@/lib/data"
import { formatPrice } from "@/lib/utils"
import Link from "next/link"
import emailjs from "@emailjs/browser"

interface PackageDetailClientProps {
  params: { id: string }
}

/* ---------- EmailJS config ---------- */
const BOOKING_SERVICE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_BOOKING_SERVICE_ID || "service_gj5asq8"
const BOOKING_TMPL_ID =
  process.env.NEXT_PUBLIC_EMAILJS_BOOKING_TEMPLATE_ID || "template_6ek2dwa"
const BOOKING_PUBLIC_KEY =
  process.env.NEXT_PUBLIC_EMAILJS_BOOKING_PUBLIC_KEY || "Bw_IewUh2M7cu58JH"

const CONFIRM_SERVICE_ID =
  process.env.NEXT_PUBLIC_EMAILJS_CONFIRM_SERVICE_ID || "service_rmfnian"
const CONFIRM_TMPL_ID =
  process.env.NEXT_PUBLIC_EMAILJS_CONFIRM_TEMPLATE_ID || "template_oxxshx7"
const CONFIRM_PUBLIC_KEY =
  process.env.NEXT_PUBLIC_EMAILJS_CONFIRM_PUBLIC_KEY || "lX9MBwxLcZMWc2MsH"

export const sendBookingEmail = async (data: Record<string, any>) => {
  await emailjs.send(BOOKING_SERVICE_ID, BOOKING_TMPL_ID, data, BOOKING_PUBLIC_KEY)
  await emailjs.send(CONFIRM_SERVICE_ID, CONFIRM_TMPL_ID, data, CONFIRM_PUBLIC_KEY)
}

/* ---------- helpers ---------- */
const totalPrice = (base: number, transport: number = 0) => base + transport

/* ---------- currency support ----------
   International visitors want to see "what this costs me" in their own
   currency. Rates are approximate USD conversions, clearly labeled.
   pkg.price and related fields are assumed to be USD. */
const CURRENCIES = [
  { code: "USD", symbol: "$", label: "USD", rate: 1 },
  { code: "EUR", symbol: "€", label: "EUR", rate: 0.93 },
  { code: "GBP", symbol: "£", label: "GBP", rate: 0.78 },
  { code: "KES", symbol: "KSh", label: "KES", rate: 129 },
] as const

type CurrencyCode = (typeof CURRENCIES)[number]["code"]

function convertAmount(amount: number, currency: CurrencyCode) {
  const c = CURRENCIES.find((c) => c.code === currency)!
  const value = amount * c.rate
  const formatted =
    currency === "KES"
      ? Math.round(value).toLocaleString("en-US")
      : value.toLocaleString("en-US", { maximumFractionDigits: 0 })
  return `${c.symbol}${formatted}`
}

export default function PackageDetailClient({ params }: PackageDetailClientProps) {
  const pkg = getPackageById(params.id)
  if (!pkg) notFound()

  const packageTestimonials = getTestimonialsByPackage(pkg.id)
  const destinations = pkg.destinations
    .map((id) => getDestinationById(id))
    .filter(Boolean)

  const isPremium = pkg.category === "premium"
  const isLuxuryOrMid = ["luxury", "mid-range"].includes(pkg.category)
  const isOffer = pkg.category === "offer"

  const difficultyColors: Record<string, string> = {
    easy: "bg-green-100 text-green-800",
    moderate: "bg-amber-100 text-amber-800",
    challenging: "bg-red-100 text-red-800",
  }

  /* ---------- seasonal price card (luxury / mid-range) ---------- */
  const seasonalPriceCard = () => {
    if (!isLuxuryOrMid || !pkg.seasonalPricing?.seasons) return null
    return (
      <div className="mb-8 rounded-2xl border border-stone-200 bg-white overflow-hidden shadow-sm">
        <div className="px-6 py-4 border-b border-stone-100">
          <h3 className="font-serif text-base font-semibold text-[#2F3B2F]">
            Seasonal Pricing — per person
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-stone-100">
          {pkg.seasonalPricing.seasons.map((s: any) => (
            <div key={s.name} className="px-6 py-5 text-center">
              <p className="text-xs font-semibold uppercase tracking-widest mb-1"
                style={{ color: s.color || "#7FB5B5" }}>
                {s.name}
              </p>
              <p className="text-xs text-stone-500 mb-3">{s.dates}</p>
              <p className="text-2xl font-bold text-[#2F3B2F]">
                {convertAmount(totalPrice(s.basePrice, s.transportCost), currency)}
              </p>
              {currency !== "USD" && (
                <p className="text-xs text-stone-400 mt-0.5">
                  ≈ {formatPrice(totalPrice(s.basePrice, s.transportCost))} USD
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    )
  }

  /* ---------- handlers ---------- */
  const [activeTab, setActiveTab] = useState("overview")
  const [currency, setCurrency] = useState<CurrencyCode>("USD")

  const jumpToTab = (tab: string, anchorId: string) => {
    setActiveTab(tab)
    requestAnimationFrame(() => {
      document.getElementById(anchorId)?.scrollIntoView({ behavior: "smooth", block: "start" })
    })
  }

  const handlePdfDownload = () => {
    if (!pkg.pdfItinerary) return
    const link = document.createElement("a")
    link.href = pkg.pdfItinerary
    link.download = `${pkg.title.replace(/\s+/g, "-")}-Itinerary.pdf`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleBookingSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    let pricingSummary = ""
    if (isPremium && pkg.seasonsAndRates?.seasons) {
      pricingSummary = pkg.seasonsAndRates.seasons
        .map((s: any) => `${s.name}: ${formatPrice(totalPrice(s.basePrice, s.transportCost))}`)
        .join(" | ")
    } else if (isLuxuryOrMid) {
      pricingSummary = `${formatPrice(
        totalPrice(
          pkg.price,
          pkg.seasonalPricing?.seasons?.[0]?.transportCost ?? pkg.transportCost ?? 0,
        ),
      )} (incl. transport)`
    } else if (isOffer) {
      pricingSummary = formatPrice(pkg.price)
    } else {
      pricingSummary = formatPrice(pkg.price)
    }

    const bookingData = {
      package_name: pkg.title,
      package_price: pricingSummary,
      package_duration: pkg.duration,
      package_category: pkg.category,
      client_name: formData.get("name"),
      client_email: formData.get("email"),
      client_phone: formData.get("phone"),
      client_country: formData.get("country"),
      travel_date: formData.get("travelDate"),
      adults: formData.get("adults"),
      children: formData.get("children"),
      special_requests: formData.get("specialRequests"),
      message: `Booking request for ${pkg.title}\n\nPricing: ${pricingSummary}\nDuration: ${pkg.duration}\nCategory: ${pkg.category}\n\nSpecial Requests: ${
        formData.get("specialRequests") || "None"
      }`,
    }

    try {
      await sendBookingEmail(bookingData)
      alert("Booking request sent successfully! We will contact you soon.")
      ;(e.target as HTMLFormElement).reset()
    } catch {
      alert("Failed to send booking request. Please try again or contact us directly.")
    }
  }

  /* ---------- premium pricing table ---------- */
  const renderPricingTable = () => {
    if (!isPremium || !pkg.seasonsAndRates) return null
    const { rateTable, seasons } = pkg.seasonsAndRates

    const TableCard = ({ title, rows }: { title: string; rows: any[] }) => (
      <div className="mb-6 rounded-2xl border border-stone-200 bg-white overflow-hidden shadow-sm">
        <div className="px-6 py-4 border-b border-stone-100">
          <h3 className="font-serif text-base font-semibold text-[#2F3B2F]">{title}</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-stone-50 border-b border-stone-100">
                <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-stone-500">Item</th>
                <th className="px-6 py-3 text-center text-xs font-semibold uppercase tracking-wider text-stone-500">High Season</th>
                <th className="px-6 py-3 text-center text-xs font-semibold uppercase tracking-wider text-stone-500">Mid Season</th>
                <th className="px-6 py-3 text-center text-xs font-semibold uppercase tracking-wider text-stone-500">Green Season</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-100">
              {rows.map((row, idx) => (
                <tr key={idx} className="hover:bg-stone-50/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-[#2F3B2F]">{row.label}</td>
                  <td className="px-6 py-4 text-center text-stone-700">{row.high}</td>
                  <td className="px-6 py-4 text-center text-stone-700">{row.mid}</td>
                  <td className="px-6 py-4 text-center text-stone-700">{row.green}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )

    const sharedRows = rateTable.rows.map((r: any) => ({
      label: `${r.groupSize} people`,
      high: formatPrice(r.highPublished),
      mid: formatPrice(r.midPublished),
      green: formatPrice(r.greenPublished),
    }))

    return (
      <>
        {currency !== "USD" && (
          <div className="mb-4 rounded-xl bg-[#7FB5B5]/10 border border-[#7FB5B5]/30 px-4 py-2.5 text-xs text-stone-600 flex items-center gap-2">
            <Globe className="w-3.5 h-3.5 text-[#7FB5B5] flex-shrink-0" />
            All figures in the tables below are in USD. Use the currency selector above for an
            approximate {currency} conversion.
          </div>
        )}
        <div className="flex flex-wrap gap-4 mb-6">
          {seasons.map((s: any) => (
            <div key={s.name} className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full" style={{ backgroundColor: s.color }} />
              <span className="text-sm font-semibold text-[#2F3B2F]">{s.name}</span>
              <span className="text-xs text-stone-500">({s.dates})</span>
            </div>
          ))}
        </div>
        <TableCard title="Full Buy-Out (Private)" rows={sharedRows} />
        {pkg.detailedSeasonalRates && (
          <TableCard
            title="Shared Experience"
            rows={pkg.detailedSeasonalRates.rates.map((r: any) => ({
              label: r.description,
              high: formatPrice(r.high),
              mid: formatPrice(r.mid),
              green: formatPrice(r.green),
            }))}
          />
        )}
      </>
    )
  }

  /* ---------- premium additional charges ---------- */
  const renderAdditionalCharges = () => {
    if (!isPremium || !pkg.pricing) return null
    const { park_fees, enhancements, special_offer, tourism_development_levy } = pkg.pricing

    const items = [
      {
        title: "Park / Conservancy Fees",
        content: Object.entries(park_fees.adult)
          .map(([p, v]) => `${p}: ${formatPrice(v as number)}`)
          .join(" · "),
      },
      {
        title: "Child Park Fee (5–14.99 yrs)",
        content: formatPrice(park_fees.child["5 - 14.99 years"]),
      },
      {
        title: "Enhancements (optional)",
        content: `Balloon Safari: ${formatPrice(Number(enhancements.balloon_safari.split("_")[0]))} per person`,
      },
      {
        title: "Child Policy",
        content: "0–11.99 yrs: free · 12–17.99 yrs: 75% of adult rate",
      },
    ]

    return (
      <section className="space-y-6">
        <h2 className="font-serif text-2xl font-bold text-[#2F3B2F]">Additional Charges</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {items.map((item) => (
            <div key={item.title} className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#E8A17D] mb-2">{item.title}</p>
              <p className="text-sm text-stone-700">{item.content}</p>
            </div>
          ))}
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {special_offer && (
            <div className="rounded-2xl border border-[#E8A17D]/30 bg-[#E8A17D]/5 p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#E8A17D] mb-2">Special Offer</p>
              <p className="text-sm text-stone-700">{special_offer}</p>
            </div>
          )}
          <div className="rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#E8A17D] mb-2">Tourism Development Levy</p>
            <p className="text-sm text-stone-700">{tourism_development_levy.replace(/_/g, " ")}</p>
          </div>
        </div>
      </section>
    )
  }

  /* ---------- tab config ---------- */
  const tabList = isPremium
    ? ["overview", "itinerary", "pricing", "charges", "reviews", "booking"]
    : ["overview", "itinerary", "destinations", "reviews", "booking"]

  const tabLabels: Record<string, string> = {
    overview: "Overview",
    itinerary: "Itinerary",
    pricing: "Pricing",
    charges: "Charges",
    destinations: "Places",
    reviews: "Reviews",
    booking: "Book Now",
  }

  /* ================================================================
     MAIN RENDER
  ================================================================ */
  return (
    <main className="min-h-screen bg-[#F2EFED]">
      {/* Structured data */}
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
              price: isPremium
                ? "Contact us for pricing"
                : isLuxuryOrMid
                ? totalPrice(
                    pkg.price,
                    pkg.seasonalPricing?.seasons?.[0]?.transportCost ?? pkg.transportCost ?? 0,
                  )
                : pkg.price,
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
              validFrom: new Date().toISOString(),
              seller: { "@type": "TravelAgency", name: "Afribay Adventures" },
            },
            provider: { "@type": "TravelAgency", name: "Afribay Adventures" },
            duration: pkg.duration,
            touristType: pkg.category,
            itinerary: pkg.itinerary.map((d: any) => ({
              "@type": "Day",
              name: d.title,
              description: d.description,
            })),
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              reviewCount: packageTestimonials.length,
            },
          }),
        }}
      />

      {/* ── CINEMATIC HERO ─────────────────────────────────────────────────── */}
      <section className="relative h-[90vh] min-h-[560px] overflow-hidden">
        <img
          src={pkg.image || "/placeholder.svg"}
          alt={pkg.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Multi-stop gradient: transparent top → dark bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

        {/* Breadcrumb */}
        <div className="absolute top-24 left-6 sm:left-10 lg:left-16 flex items-center gap-2 text-white/60 text-xs">
          <Link href="/packages" className="hover:text-white transition-colors">Packages</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-white/90 capitalize">{pkg.category}</span>
        </div>

        {/* Hero content — anchored to bottom */}
        <div className="absolute bottom-0 left-0 right-0 px-6 sm:px-10 lg:px-16 pb-12">
          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-5">
            <span className="inline-flex items-center rounded-full bg-[#E8A17D] px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white">
              {pkg.category}
            </span>
            <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${difficultyColors[pkg.difficulty]}`}>
              {pkg.difficulty}
            </span>
            <div className="flex items-center gap-1 rounded-full bg-white/15 backdrop-blur-sm px-3 py-1">
              <Star className="h-3 w-3 text-yellow-400 fill-current" />
              <span className="text-xs text-white font-semibold">4.8</span>
              <span className="text-xs text-white/70">({packageTestimonials.length})</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-4xl mb-6">
            {pkg.title}
          </h1>

          {/* CTA row */}
          <div className="flex flex-wrap gap-3">
            <Button
              size="lg"
              onClick={() => jumpToTab("booking", "booking-form")}
              className="bg-[#E8A17D] hover:bg-[#d4906c] text-white font-bold rounded-full px-10 shadow-xl shadow-black/30 ring-2 ring-white/20 transition-colors duration-300 text-base"
            >
              <Send className="h-4 w-4 mr-2" />
              Book This Safari
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => jumpToTab("itinerary", "itinerary-section")}
              className="border-white/50 text-white hover:bg-white hover:text-[#2F3B2F] bg-white/10 backdrop-blur-sm rounded-full px-8 transition-all duration-300"
            >
              <Calendar className="h-4 w-4 mr-2" />
              View Itinerary
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/50 text-white hover:bg-white hover:text-[#2F3B2F] bg-white/10 backdrop-blur-sm rounded-full px-8 transition-all duration-300"
            >
              <Link href="/contact">Ask Questions</Link>
            </Button>
            {pkg.pdfItinerary && (
              <Button
                onClick={handlePdfDownload}
                variant="outline"
                size="lg"
                className="border-[#7FB5B5]/60 text-white hover:bg-[#7FB5B5] bg-[#7FB5B5]/20 backdrop-blur-sm rounded-full px-8 transition-all duration-300"
              >
                <Download className="h-4 w-4 mr-2" />
                Download PDF
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* ── STAT BAR (signature element) ──────────────────────────────────── */}
      <div className="bg-[#2F3B2F] text-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-white/10">
            {[
              { icon: Clock, label: "Duration", value: pkg.duration },
              { icon: Users, label: "Group size", value: `${pkg.groupSize.min}–${pkg.groupSize.max} people` },
              { icon: MapPin, label: "Destinations", value: `${pkg.destinations.length} location${pkg.destinations.length !== 1 ? "s" : ""}` },
              { icon: Calendar, label: "Best time", value: pkg.bestTime },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-3 px-6 py-5">
                <Icon className="h-5 w-5 text-[#E8A17D] flex-shrink-0" />
                <div className="min-w-0">
                  <p className="text-xs text-white/50 uppercase tracking-wider">{label}</p>
                  <p className="text-sm font-semibold truncate">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CURRENCY SELECTOR — for travelers pricing in their home currency ── */}
      <div className="bg-[#2F3B2F]/95 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-3 flex items-center justify-end gap-2">
          <Globe className="w-4 h-4 text-white/40" />
          <span className="text-xs text-white/50 mr-1">Show prices in</span>
          <div className="flex rounded-full border border-white/15 bg-white/5 p-1">
            {CURRENCIES.map((c) => (
              <button
                key={c.code}
                onClick={() => setCurrency(c.code)}
                className={`px-3 py-1 text-xs font-semibold rounded-full transition-colors duration-200 ${
                  currency === c.code
                    ? "bg-[#E8A17D] text-[#2F3B2F]"
                    : "text-white/60 hover:text-white"
                }`}
                aria-pressed={currency === c.code}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── BODY ──────────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* ── LEFT / MAIN ─────────────────────────────────────────────── */}
          <div className="lg:col-span-2 space-y-8">

            {/* Description */}
            <p className="text-lg text-stone-600 leading-relaxed">{pkg.description}</p>

            {/* Seasonal price card (luxury / mid-range) — above tabs */}
            {isLuxuryOrMid && seasonalPriceCard()}

            {/* ── TABS ──────────────────────────────────────────────────── */}
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              {/* Pill-style tab bar */}
              <div className="overflow-x-auto pb-1">
                <TabsList className="inline-flex gap-1 bg-white border border-stone-200 rounded-full p-1 shadow-sm h-auto">
                  {tabList.map((tab) => (
                    <TabsTrigger
                      key={tab}
                      value={tab}
                      className="rounded-full px-4 py-1.5 text-sm font-medium text-stone-500
                        data-[state=active]:bg-[#2F3B2F] data-[state=active]:text-white
                        data-[state=active]:shadow-none transition-all duration-200 whitespace-nowrap"
                    >
                      {tabLabels[tab]}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {/* OVERVIEW */}
              <TabsContent value="overview" className="mt-6 space-y-4">
                <div className="rounded-2xl bg-white border border-stone-200 p-6 shadow-sm">
                  <h2 className="font-serif text-xl font-bold text-[#2F3B2F] mb-5">
                    Safari Highlights
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {pkg.highlights.map((highlight: string, index: number) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-[#E8A17D] flex-shrink-0 mt-0.5" />
                        <span className="text-stone-700 text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-white border border-stone-200 p-6 shadow-sm">
                    <h3 className="font-semibold text-[#2F3B2F] mb-4 flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      What's included
                    </h3>
                    <ul className="space-y-2.5">
                      {pkg.includes.map((item: string, index: number) => (
                        <li key={index} className="flex items-start gap-2.5 text-stone-600 text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#E8A17D] mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-2xl bg-white border border-stone-200 p-6 shadow-sm">
                    <h3 className="font-semibold text-[#2F3B2F] mb-4 flex items-center gap-2">
                      <XCircle className="h-4 w-4 text-red-400" />
                      Not included
                    </h3>
                    <ul className="space-y-2.5">
                      {pkg.excludes.map((item: string, index: number) => (
                        <li key={index} className="flex items-start gap-2.5 text-stone-600 text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-stone-300 mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TabsContent>

              {/* ITINERARY */}
              <TabsContent value="itinerary" className="mt-6">
                <div id="itinerary-section" className="rounded-2xl bg-white border border-stone-200 p-6 shadow-sm scroll-mt-28">
                  <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
                    <h2 className="font-serif text-xl font-bold text-[#2F3B2F] flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-[#E8A17D]" />
                      Day-by-Day Itinerary
                    </h2>
                    {pkg.pdfItinerary && (
                      <Button
                        onClick={handlePdfDownload}
                        size="sm"
                        variant="outline"
                        className="border-[#7FB5B5] text-[#7FB5B5] hover:bg-[#7FB5B5] hover:text-white bg-transparent rounded-full transition-all duration-300"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download Full PDF
                      </Button>
                    )}
                  </div>
                  <div className="relative space-y-0">
                    <div className="absolute left-4 top-4 bottom-4 w-px bg-stone-200" />
                    {pkg.itinerary.map((day: any, index: number) => (
                      <div key={index} className="relative pl-12 pb-8 last:pb-0">
                        <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-[#E8A17D] text-white flex items-center justify-center text-xs font-bold z-10">
                          {day.day}
                        </div>
                        <h4 className="font-semibold text-[#2F3B2F] text-base mb-1.5 leading-snug">
                          {day.title}
                        </h4>
                        <p className="text-stone-600 text-sm mb-3 leading-relaxed">
                          {day.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {day.activities.map((activity: string, actIndex: number) => (
                            <span
                              key={actIndex}
                              className="inline-flex items-center rounded-full border border-stone-200 bg-stone-50 px-2.5 py-0.5 text-xs text-stone-600"
                            >
                              {activity}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              {/* DESTINATIONS */}
              <TabsContent value="destinations" className="mt-6 space-y-4">
                {destinations.map((destination) => (
                  <div
                    key={destination?.id}
                    className="rounded-2xl bg-white border border-stone-200 overflow-hidden shadow-sm"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-3">
                      <img
                        src={destination?.image || "/placeholder.svg"}
                        alt={destination?.name}
                        className="w-full h-48 sm:h-full object-cover"
                      />
                      <div className="sm:col-span-2 p-6">
                        <h3 className="font-serif text-xl font-bold text-[#2F3B2F] mb-2">
                          {destination?.name}
                        </h3>
                        <p className="text-stone-600 text-sm leading-relaxed mb-4">
                          {destination?.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {destination?.highlights.map((highlight: string, index: number) => (
                            <span
                              key={index}
                              className="inline-flex items-center rounded-full border border-stone-200 bg-stone-50 px-2.5 py-0.5 text-xs text-stone-600"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </TabsContent>

              {/* PREMIUM PRICING */}
              {isPremium && (
                <TabsContent value="pricing" className="mt-6">
                  {renderPricingTable()}
                </TabsContent>
              )}

              {/* PREMIUM CHARGES */}
              {isPremium && (
                <TabsContent value="charges" className="mt-6">
                  {renderAdditionalCharges()}
                </TabsContent>
              )}

              {/* REVIEWS */}
              <TabsContent value="reviews" className="mt-6 space-y-4">
                {packageTestimonials.length > 0 ? (
                  packageTestimonials.map((testimonial) => (
                    <div
                      key={testimonial.id}
                      className="rounded-2xl bg-white border border-stone-200 p-6 shadow-sm"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#E8A17D] to-[#7FB5B5] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2 mb-2">
                            <div>
                              <p className="font-semibold text-[#2F3B2F] text-sm">{testimonial.name}</p>
                              <p className="text-xs text-stone-500">{testimonial.country}</p>
                            </div>
                            <div className="flex gap-0.5 flex-shrink-0">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <Star key={i} className="h-3.5 w-3.5 text-yellow-400 fill-current" />
                              ))}
                            </div>
                          </div>
                          <blockquote className="text-stone-600 italic text-sm leading-relaxed">
                            "{testimonial.comment}"
                          </blockquote>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="rounded-2xl bg-white border border-stone-200 p-10 text-center shadow-sm">
                    <p className="text-stone-500">No reviews yet for this package.</p>
                  </div>
                )}
              </TabsContent>

              {/* BOOKING */}
              <TabsContent value="booking" className="mt-6">
                <div
                  id="booking-form"
                  className="rounded-2xl bg-white border border-stone-200 overflow-hidden shadow-sm scroll-mt-28 ring-2 ring-[#E8A17D]/40"
                >
                  <div className="bg-[#2F3B2F] px-8 py-6">
                    <h2 className="font-serif text-2xl font-bold text-white">Book {pkg.title}</h2>
                    <p className="text-white/70 text-sm mt-1">
                      {isPremium
                        ? "Prices are illustrated in the pricing table. Fill out the form and we'll be in touch."
                        : "Fill out the form below and we'll get back to you within 24 hours."}
                    </p>
                  </div>

                  <form onSubmit={handleBookingSubmit} className="p-8 space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-stone-500">Full Name *</Label>
                        <Input id="name" name="name" required className="rounded-xl border-stone-200" />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-stone-500">Email Address *</Label>
                        <Input id="email" name="email" type="email" required className="rounded-xl border-stone-200" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wider text-stone-500">Phone Number *</Label>
                        <Input id="phone" name="phone" required className="rounded-xl border-stone-200" />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="country" className="text-xs font-semibold uppercase tracking-wider text-stone-500">Country *</Label>
                        <Select name="country" required>
                          <SelectTrigger className="rounded-xl border-stone-200">
                            <SelectValue placeholder="Select your country" />
                          </SelectTrigger>
                          <SelectContent className="max-h-72">
                            <SelectItem value="United States">United States</SelectItem>
                            <SelectItem value="United Kingdom">United Kingdom</SelectItem>
                            <SelectItem value="Canada">Canada</SelectItem>
                            <SelectItem value="Australia">Australia</SelectItem>
                            <SelectItem value="New Zealand">New Zealand</SelectItem>
                            <SelectItem value="Ireland">Ireland</SelectItem>
                            <SelectItem value="Germany">Germany</SelectItem>
                            <SelectItem value="France">France</SelectItem>
                            <SelectItem value="Netherlands">Netherlands</SelectItem>
                            <SelectItem value="Belgium">Belgium</SelectItem>
                            <SelectItem value="Switzerland">Switzerland</SelectItem>
                            <SelectItem value="Austria">Austria</SelectItem>
                            <SelectItem value="Spain">Spain</SelectItem>
                            <SelectItem value="Portugal">Portugal</SelectItem>
                            <SelectItem value="Italy">Italy</SelectItem>
                            <SelectItem value="Sweden">Sweden</SelectItem>
                            <SelectItem value="Norway">Norway</SelectItem>
                            <SelectItem value="Denmark">Denmark</SelectItem>
                            <SelectItem value="Finland">Finland</SelectItem>
                            <SelectItem value="Poland">Poland</SelectItem>
                            <SelectItem value="Czech Republic">Czech Republic</SelectItem>
                            <SelectItem value="Greece">Greece</SelectItem>
                            <SelectItem value="United Arab Emirates">United Arab Emirates</SelectItem>
                            <SelectItem value="Saudi Arabia">Saudi Arabia</SelectItem>
                            <SelectItem value="Qatar">Qatar</SelectItem>
                            <SelectItem value="Israel">Israel</SelectItem>
                            <SelectItem value="India">India</SelectItem>
                            <SelectItem value="China">China</SelectItem>
                            <SelectItem value="Japan">Japan</SelectItem>
                            <SelectItem value="South Korea">South Korea</SelectItem>
                            <SelectItem value="Singapore">Singapore</SelectItem>
                            <SelectItem value="Malaysia">Malaysia</SelectItem>
                            <SelectItem value="Philippines">Philippines</SelectItem>
                            <SelectItem value="South Africa">South Africa</SelectItem>
                            <SelectItem value="Nigeria">Nigeria</SelectItem>
                            <SelectItem value="Kenya">Kenya</SelectItem>
                            <SelectItem value="Tanzania">Tanzania</SelectItem>
                            <SelectItem value="Uganda">Uganda</SelectItem>
                            <SelectItem value="Rwanda">Rwanda</SelectItem>
                            <SelectItem value="Ethiopia">Ethiopia</SelectItem>
                            <SelectItem value="Ghana">Ghana</SelectItem>
                            <SelectItem value="Egypt">Egypt</SelectItem>
                            <SelectItem value="Morocco">Morocco</SelectItem>
                            <SelectItem value="Brazil">Brazil</SelectItem>
                            <SelectItem value="Mexico">Mexico</SelectItem>
                            <SelectItem value="Argentina">Argentina</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="space-y-1.5">
                        <Label htmlFor="travelDate" className="text-xs font-semibold uppercase tracking-wider text-stone-500">Travel Date *</Label>
                        <Input id="travelDate" name="travelDate" type="date" required className="rounded-xl border-stone-200" />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="adults" className="text-xs font-semibold uppercase tracking-wider text-stone-500">Adults *</Label>
                        <Select name="adults" required>
                          <SelectTrigger className="rounded-xl border-stone-200">
                            <SelectValue placeholder="Adults" />
                          </SelectTrigger>
                          <SelectContent>
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                              <SelectItem key={n} value={n.toString()}>{n}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="children" className="text-xs font-semibold uppercase tracking-wider text-stone-500">Children</Label>
                        <Select name="children">
                          <SelectTrigger className="rounded-xl border-stone-200">
                            <SelectValue placeholder="Children" />
                          </SelectTrigger>
                          <SelectContent>
                            {[0, 1, 2, 3, 4, 5, 6].map((n) => (
                              <SelectItem key={n} value={n.toString()}>{n}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <Label htmlFor="specialRequests" className="text-xs font-semibold uppercase tracking-wider text-stone-500">Special Requests</Label>
                      <Textarea
                        id="specialRequests"
                        name="specialRequests"
                        placeholder="Dietary requirements, accessibility needs, special occasions…"
                        className="rounded-xl border-stone-200 resize-none"
                        rows={4}
                      />
                    </div>

                    <div className="rounded-xl bg-[#F2EFED] border border-stone-200 px-5 py-4">
                      <p className="text-xs font-semibold uppercase tracking-wider text-stone-500 mb-3">Package Summary</p>
                      <div className="grid grid-cols-3 gap-3 text-sm">
                        <div>
                          <p className="text-stone-400 text-xs mb-0.5">Package</p>
                          <p className="font-medium text-[#2F3B2F] truncate">{pkg.title}</p>
                        </div>
                        <div>
                          <p className="text-stone-400 text-xs mb-0.5">Duration</p>
                          <p className="font-medium text-[#2F3B2F]">{pkg.duration}</p>
                        </div>
                        <div>
                          <p className="text-stone-400 text-xs mb-0.5">Category</p>
                          <p className="font-medium text-[#2F3B2F] capitalize">{pkg.category}</p>
                        </div>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-[#E8A17D] hover:bg-[#d4906c] text-white rounded-xl font-semibold transition-colors duration-300"
                    >
                      <Send className="h-4 w-4 mr-2" />
                      Send Booking Request
                    </Button>
                  </form>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* ── RIGHT SIDEBAR ─────────────────────────────────────────────── */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-4">

              {/* Price card */}
              <div className="rounded-2xl bg-white border border-stone-200 overflow-hidden shadow-md">
                <div className="bg-[#2F3B2F] px-6 py-5 text-center">
                  {isPremium ? (
                    <>
                      <p className="text-white/50 text-xs uppercase tracking-widest mb-1">Starting from</p>
                      <p className="text-2xl font-bold text-white">
                        {convertAmount(
                          Math.min(
                            ...(pkg.seasonsAndRates?.rateTable?.rows?.map((r: any) =>
                              totalPrice(r.greenPublished, 0),
                            ) || [0]),
                          ),
                          currency,
                        )}
                      </p>
                      {currency !== "USD" && (
                        <p className="text-white/40 text-xs mt-0.5">
                          ≈{" "}
                          {formatPrice(
                            Math.min(
                              ...(pkg.seasonsAndRates?.rateTable?.rows?.map((r: any) =>
                                totalPrice(r.greenPublished, 0),
                              ) || [0]),
                            ),
                          )}{" "}
                          USD
                        </p>
                      )}
                      <p className="text-white/50 text-xs mt-1">per person</p>
                    </>
                  ) : isOffer ? (
                    <>
                      <p className="text-white/50 text-xs uppercase tracking-widest mb-1">Price</p>
                      <p className="text-3xl font-bold text-white">{convertAmount(pkg.price, currency)}</p>
                      {currency !== "USD" && (
                        <p className="text-white/40 text-xs mt-0.5">≈ {formatPrice(pkg.price)} USD</p>
                      )}
                      <p className="text-white/50 text-xs mt-1">per person</p>
                    </>
                  ) : (
                    <>
                      <p className="text-white/50 text-xs uppercase tracking-widest mb-1">From</p>
                      <p className="text-3xl font-bold text-white">
                        {convertAmount(
                          totalPrice(
                            pkg.price,
                            pkg.seasonalPricing?.seasons?.[0]?.transportCost ??
                              pkg.transportCost ?? 0,
                          ),
                          currency,
                        )}
                      </p>
                      {currency !== "USD" && (
                        <p className="text-white/40 text-xs mt-0.5">
                          ≈{" "}
                          {formatPrice(
                            totalPrice(
                              pkg.price,
                              pkg.seasonalPricing?.seasons?.[0]?.transportCost ??
                                pkg.transportCost ?? 0,
                            ),
                          )}{" "}
                          USD
                        </p>
                      )}
                      <p className="text-white/50 text-xs mt-1">per person · incl. transport</p>
                    </>
                  )}
                </div>

                <div className="px-6 py-5 space-y-4">
                  <div className="space-y-0 text-sm divide-y divide-stone-100">
                    <div className="flex items-center justify-between py-3 first:pt-0">
                      <span className="text-stone-500">Duration</span>
                      <span className="font-semibold text-[#2F3B2F]">{pkg.duration}</span>
                    </div>
                    <div className="flex items-center justify-between py-3">
                      <span className="text-stone-500">Group size</span>
                      <span className="font-semibold text-[#2F3B2F]">{pkg.groupSize.min}–{pkg.groupSize.max} people</span>
                    </div>
                    <div className="flex items-center justify-between py-3 last:pb-0">
                      <span className="text-stone-500">Difficulty</span>
                      <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold ${difficultyColors[pkg.difficulty]}`}>
                        {pkg.difficulty}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2 pt-1">
                    <Button
                      onClick={() => jumpToTab("booking", "booking-form")}
                      size="lg"
                      className="w-full bg-[#E8A17D] hover:bg-[#d4906c] text-white rounded-xl font-bold text-base shadow-lg transition-colors duration-300 animate-pulse hover:animate-none"
                    >
                      <Send className="h-4 w-4 mr-2" />
                      Book Now
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-[#2F3B2F] text-[#2F3B2F] hover:bg-[#2F3B2F] hover:text-white bg-transparent rounded-xl transition-all duration-300"
                    >
                      <Link href="/booking">Customize Your Safari</Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-[#2F3B2F] text-[#2F3B2F] hover:bg-[#2F3B2F] hover:text-white bg-transparent rounded-xl transition-all duration-300"
                    >
                      <Link href="/contact">Contact Us</Link>
                    </Button>
                    {pkg.pdfItinerary && (
                      <Button
                        onClick={handlePdfDownload}
                        variant="outline"
                        className="w-full border-[#7FB5B5] text-[#7FB5B5] hover:bg-[#7FB5B5] hover:text-white bg-transparent rounded-xl transition-all duration-300"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download Itinerary PDF
                      </Button>
                    )}
                  </div>
                </div>
              </div>

              {/* Trust signals */}
              <div className="rounded-2xl bg-white border border-stone-200 px-6 py-5 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wider text-stone-400 mb-4">
                  Why Afribay
                </p>
                <div className="space-y-3.5">
                  {[
                    { icon: Camera, label: "Professional Photography" },
                    { icon: Compass, label: "Expert Local Guides" },
                    { icon: Shield, label: "Safety Guaranteed" },
                    { icon: Award, label: "Award-Winning Service" },
                  ].map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#E8A17D]/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="h-4 w-4 text-[#E8A17D]" />
                      </div>
                      <span className="text-sm text-stone-700">{label}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* ── MOBILE STICKY BOOKING BAR ───────────────────────────────────── */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-stone-200 shadow-[0_-4px_16px_rgba(0,0,0,0.08)] px-4 py-3 flex items-center gap-3">
        <div className="min-w-0">
          <p className="text-[10px] text-stone-400 uppercase tracking-wider leading-none mb-0.5">
            {isPremium ? "Starting from" : isOffer ? "Price" : "From"}
          </p>
          <p className="text-lg font-bold text-[#2F3B2F] leading-tight truncate">
            {isPremium
              ? convertAmount(
                  Math.min(
                    ...(pkg.seasonsAndRates?.rateTable?.rows?.map((r: any) =>
                      totalPrice(r.greenPublished, 0),
                    ) || [0]),
                  ),
                  currency,
                )
              : isOffer
              ? convertAmount(pkg.price, currency)
              : convertAmount(
                  totalPrice(
                    pkg.price,
                    pkg.seasonalPricing?.seasons?.[0]?.transportCost ?? pkg.transportCost ?? 0,
                  ),
                  currency,
                )}
            <span className="text-xs font-normal text-stone-400"> / person</span>
          </p>
          {currency !== "USD" && (
            <p className="text-[10px] text-stone-400 truncate">
              ≈{" "}
              {isPremium
                ? formatPrice(
                    Math.min(
                      ...(pkg.seasonsAndRates?.rateTable?.rows?.map((r: any) =>
                        totalPrice(r.greenPublished, 0),
                      ) || [0]),
                    ),
                  )
                : isOffer
                ? formatPrice(pkg.price)
                : formatPrice(
                    totalPrice(
                      pkg.price,
                      pkg.seasonalPricing?.seasons?.[0]?.transportCost ?? pkg.transportCost ?? 0,
                    ),
                  )}{" "}
              USD
            </p>
          )}
        </div>
        <Button
          onClick={() => jumpToTab("booking", "booking-form")}
          size="lg"
          className="flex-1 bg-[#E8A17D] hover:bg-[#d4906c] text-white rounded-xl font-bold transition-colors duration-300"
        >
          <Send className="h-4 w-4 mr-2" />
          Book Now
        </Button>
      </div>
      <div className="lg:hidden h-20" />
    </main>
  )
}