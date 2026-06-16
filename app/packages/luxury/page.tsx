"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Clock, Users, MapPin, Star, Globe, ArrowUpDown, Sparkles } from "lucide-react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { getPackagesByCategory } from "@/lib/data"
import { formatPrice, calculateDiscountPercentage } from "@/lib/utils"
import Link from "next/link"
import { useState, useMemo } from "react"
import PageTransition from '@/components/PageTransition';

function totalPrice(pkg: any) {
  // fallback to the first season if nothing else is provided
  const transport =
    pkg.seasonalPricing?.seasons?.[0]?.transportCost ?? pkg.transportCost ?? 0
  return (pkg.basePrice ?? pkg.price ?? 0) + transport
}

/* ---------- currency support ----------
   Same pattern as the package detail page — international travelers
   browsing luxury packages want to see cost in their own currency.
   Rates are approximate USD conversions, clearly labeled. */
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

const SORT_OPTIONS = [
  { value: "recommended", label: "Recommended" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "duration", label: "Duration" },
] as const

type SortValue = (typeof SORT_OPTIONS)[number]["value"]

export default function LuxuryPackagesPage() {
  const luxuryPackages = getPackagesByCategory("luxury")
  const [currency, setCurrency] = useState<CurrencyCode>("USD")
  const [sortBy, setSortBy] = useState<SortValue>("recommended")
  const [destinationFilter, setDestinationFilter] = useState<string>("all")

  // Build a destination filter list from the package data itself
  const destinations = useMemo(() => {
    const set = new Set<string>()
    luxuryPackages.forEach((pkg) => pkg.destinations.forEach((d: string) => set.add(d)))
    return Array.from(set)
  }, [luxuryPackages])

  const visiblePackages = useMemo(() => {
    let list = [...luxuryPackages]

    if (destinationFilter !== "all") {
      list = list.filter((pkg) => pkg.destinations.includes(destinationFilter))
    }

    switch (sortBy) {
      case "price-asc":
        list.sort((a, b) => totalPrice(a) - totalPrice(b))
        break
      case "price-desc":
        list.sort((a, b) => totalPrice(b) - totalPrice(a))
        break
      case "duration":
        list.sort((a, b) => {
          const da = parseInt(a.duration) || 0
          const db = parseInt(b.duration) || 0
          return da - db
        })
        break
      default:
        break
    }

    return list
  }, [luxuryPackages, sortBy, destinationFilter])

  return (
    <PageTransition type="elegant" duration={600}>
      <main className="min-h-screen bg-[#F2EFED]">
        {/* ── HERO ───────────────────────────────────────────────────────── */}
        <section className="relative pt-28 pb-20 bg-gradient-to-r from-[#2F3B2F] to-[#7FB5B5] overflow-hidden">
          {/* Subtle texture echoing the offers section */}
          <div
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{
              backgroundImage:
                "repeating-linear-gradient(115deg, transparent, transparent 78px, #ffffff 78px, #ffffff 79px)",
            }}
          />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 mb-5 rounded-full bg-white/10 px-4 py-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#E8A17D]" />
              <span className="text-xs font-medium text-white/90 tracking-wide uppercase">
                Curated for discerning travelers
              </span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6">
              Luxury Safari Packages
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Indulge in the ultimate safari experience with our luxury packages
              featuring world-class accommodations, private guides, and exclusive
              access to Kenya's most pristine wilderness areas.
            </p>
          </div>
        </section>
        <SpeedInsights />

        {/* ── CONTROL BAR — filter, sort, currency ─────────────────────────── */}
        <section className="sticky top-20 z-30 bg-[#F2EFED]/95 backdrop-blur-sm border-b border-stone-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              {/* Destination filter pills */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1 -mb-1">
                <button
                  onClick={() => setDestinationFilter("all")}
                  className={`shrink-0 px-4 py-1.5 text-xs font-semibold rounded-full border transition-colors duration-200 ${
                    destinationFilter === "all"
                      ? "bg-[#2F3B2F] text-white border-[#2F3B2F]"
                      : "bg-white text-stone-600 border-stone-200 hover:border-[#7FB5B5]"
                  }`}
                >
                  All Destinations
                </button>
                {destinations.map((d) => (
                  <button
                    key={d}
                    onClick={() => setDestinationFilter(d)}
                    className={`shrink-0 px-4 py-1.5 text-xs font-semibold rounded-full border capitalize transition-colors duration-200 ${
                      destinationFilter === d
                        ? "bg-[#2F3B2F] text-white border-[#2F3B2F]"
                        : "bg-white text-stone-600 border-stone-200 hover:border-[#7FB5B5]"
                    }`}
                  >
                    {d.replace(/-/g, " ")}
                  </button>
                ))}
              </div>

              {/* Sort + currency */}
              <div className="flex items-center gap-3 shrink-0">
                <div className="flex items-center gap-1.5 text-stone-500">
                  <ArrowUpDown className="w-3.5 h-3.5" />
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as SortValue)}
                    className="text-xs font-semibold bg-white border border-stone-200 rounded-full pl-3 pr-2 py-1.5 text-[#2F3B2F] focus:outline-none focus:ring-2 focus:ring-[#7FB5B5]/40"
                  >
                    {SORT_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-stone-400" />
                  <div className="flex rounded-full border border-stone-200 bg-white p-0.5">
                    {CURRENCIES.map((c) => (
                      <button
                        key={c.code}
                        onClick={() => setCurrency(c.code)}
                        className={`px-2.5 py-1 text-[11px] font-semibold rounded-full transition-colors duration-200 ${
                          currency === c.code
                            ? "bg-[#7FB5B5] text-white"
                            : "text-stone-500 hover:text-[#2F3B2F]"
                        }`}
                        aria-pressed={currency === c.code}
                      >
                        {c.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── PACKAGES GRID ─────────────────────────────────────────────────── */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {visiblePackages.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-stone-500">No luxury packages match this destination yet.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {visiblePackages.map((pkg) => {
                  const displayPrice = totalPrice(pkg)

                  return (
                    <Card
                      key={pkg.id}
                      className="group bg-white border border-stone-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
                    >
                      {/* Image */}
                      <div className="relative h-72 overflow-hidden">
                        <img
                          src={pkg.image || "/placeholder.svg"}
                          alt={pkg.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent" />

                        <div className="absolute top-4 left-4 flex items-center gap-2">
                          <Badge className="bg-[#7FB5B5] text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
                            Luxury
                          </Badge>
                          {pkg.originalPrice && (
                            <Badge className="bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                              {calculateDiscountPercentage(
                                totalPrice({ ...pkg, price: pkg.originalPrice }),
                                displayPrice,
                              )}
                              % OFF
                            </Badge>
                          )}
                        </div>

                        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                          <span className="flex items-center gap-1.5 px-3 py-1 bg-white/15 backdrop-blur-sm text-white text-xs rounded-full">
                            <MapPin className="h-3 w-3" />
                            {pkg.destinations.length} destination{pkg.destinations.length > 1 ? "s" : ""}
                          </span>
                          <span className="flex items-center gap-1 px-3 py-1 bg-white/15 backdrop-blur-sm text-white text-xs rounded-full">
                            <Star className="h-3 w-3 text-[#E8A17D] fill-current" />
                            4.9
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h3 className="font-serif text-2xl font-bold text-[#2F3B2F] leading-snug">
                          {pkg.title}
                        </h3>
                        <p className="mt-2 text-sm text-stone-600 line-clamp-2">
                          {pkg.description}
                        </p>

                        <div className="mt-4 flex items-center gap-4 text-xs text-stone-500">
                          <span className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {pkg.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <Users className="h-3 w-3" />
                            {pkg.groupSize.min}–{pkg.groupSize.max} guests
                          </span>
                        </div>

                        <div className="h-px bg-stone-100 my-5" />

                        <div className="flex items-end justify-between gap-3">
                          <div>
                            <p className="text-[10px] text-stone-400 uppercase tracking-widest mb-1">
                              From
                            </p>
                            <div className="flex items-baseline gap-2">
                              <span className="text-2xl font-bold text-[#2F3B2F]">
                                {convertAmount(displayPrice, currency)}
                              </span>
                              {pkg.originalPrice && (
                                <span className="text-sm text-stone-400 line-through">
                                  {convertAmount(
                                    totalPrice({ ...pkg, price: pkg.originalPrice }),
                                    currency,
                                  )}
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-stone-400 mt-0.5">
                              {currency !== "USD" ? `≈ ${formatPrice(displayPrice)} USD · ` : ""}
                              per person, incl. transport
                            </p>
                          </div>

                          <Button
                            asChild
                            className="bg-[#7FB5B5] hover:bg-[#6aa3a3] text-white text-sm rounded-full px-6 py-2.5 font-semibold transition-colors duration-300 shrink-0"
                          >
                            <Link href={`/packages/${pkg.id}`}>View Details</Link>
                          </Button>
                        </div>
                      </div>
                    </Card>
                  )
                })}
              </div>
            )}
          </div>
        </section>
      </main>
    </PageTransition>
  )
}