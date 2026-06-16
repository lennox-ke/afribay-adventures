"use client"

import { useState, useEffect, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Users, MapPin, Star, ArrowRight, Calendar, ChevronDown, RefreshCw, Globe2 } from "lucide-react"
import { getPackagesByCategory } from "@/lib/data"
import { formatPrice, calculateDiscountPercentage } from "@/lib/utils"
import Link from "next/link"
import PageTransition from "@/components/PageTransition"

/* ------------------------------------------------------------------ */
/* Currency Converter                                                 */
/* ------------------------------------------------------------------ */

// Fallback static rates relative to USD, used if the live API call fails.
const FALLBACK_RATES: Record<string, number> = {
  USD: 1,
  EUR: 0.93,
  GBP: 0.78,
  KES: 129,
  ZAR: 18.2,
  AUD: 1.52,
  CAD: 1.36,
}

const CURRENCIES = [
  { code: "USD", label: "US Dollar", symbol: "$" },
  { code: "EUR", label: "Euro", symbol: "€" },
  { code: "GBP", label: "British Pound", symbol: "£" },
  { code: "KES", label: "Kenyan Shilling", symbol: "KSh" },
  { code: "ZAR", label: "South African Rand", symbol: "R" },
  { code: "AUD", label: "Australian Dollar", symbol: "A$" },
  { code: "CAD", label: "Canadian Dollar", symbol: "C$" },
]

function CurrencyConverter({
  selectedCurrency,
  onCurrencyChange,
  rates,
  rateStatus,
  onRefresh,
}: {
  selectedCurrency: string
  onCurrencyChange: (code: string) => void
  rates: Record<string, number>
  rateStatus: "loading" | "live" | "fallback"
  onRefresh: () => void
}) {
  const [open, setOpen] = useState(false)
  const current = CURRENCIES.find((c) => c.code === selectedCurrency) ?? CURRENCIES[0]

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Select display currency"
        aria-expanded={open}
        className="flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/15 backdrop-blur-sm rounded-xl px-4 py-2.5 text-white text-sm font-medium transition-colors duration-200"
      >
        <Globe2 className="h-4 w-4 text-[#E8A17D]" />
        <span>
          Prices in {current.code} ({current.symbol})
        </span>
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute z-20 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-stone-100 overflow-hidden">
          <div className="p-3 border-b border-stone-100 flex items-center justify-between">
            <p className="text-xs text-stone-400 uppercase tracking-wider">Display currency</p>
            <button
              onClick={onRefresh}
              aria-label="Refresh exchange rates"
              className="text-stone-400 hover:text-[#7FB5B5] transition-colors"
            >
              <RefreshCw className="h-3.5 w-3.5" />
            </button>
          </div>
          <ul className="max-h-72 overflow-y-auto">
            {CURRENCIES.map((c) => (
              <li key={c.code}>
                <button
                  onClick={() => {
                    onCurrencyChange(c.code)
                    setOpen(false)
                  }}
                  className={`w-full text-left px-4 py-2.5 text-sm flex items-center justify-between hover:bg-[#F2EFED] transition-colors ${
                    c.code === selectedCurrency ? "bg-[#F2EFED] font-semibold text-[#2F3B2F]" : "text-stone-600"
                  }`}
                >
                  <span>
                    {c.label} ({c.code})
                  </span>
                  <span className="text-stone-400">{c.symbol}</span>
                </button>
              </li>
            ))}
          </ul>
          <div className="p-3 border-t border-stone-100 text-[11px] text-stone-400 leading-relaxed">
            {rateStatus === "loading" && "Fetching live exchange rates…"}
            {rateStatus === "live" && "Live exchange rates. Final prices are charged in USD at checkout."}
            {rateStatus === "fallback" &&
              "Showing approximate rates. Final prices are charged in USD at checkout."}
          </div>
        </div>
      )}
    </div>
  )
}

function formatConverted(usdAmount: number, currency: string, rates: Record<string, number>) {
  const rate = rates[currency] ?? 1
  const value = usdAmount * rate

  const symbol = CURRENCIES.find((c) => c.code === currency)?.symbol ?? ""

  if (currency === "USD") {
    return formatPrice(usdAmount)
  }

  const formatted =
    currency === "KES"
      ? Math.round(value).toLocaleString("en-US")
      : value.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })

  return `${symbol}${formatted}`
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function PremiumPackagesClient() {
  const premiumPackages = getPackagesByCategory("premium")

  const [currency, setCurrency] = useState("USD")
  const [rates, setRates] = useState<Record<string, number>>(FALLBACK_RATES)
  const [rateStatus, setRateStatus] = useState<"loading" | "live" | "fallback">("loading")

  const fetchRates = async () => {
    setRateStatus("loading")
    try {
      const codes = CURRENCIES.map((c) => c.code).filter((c) => c !== "USD")
      const res = await fetch(`https://api.exchangerate-api.com/v4/latest/USD`)
      if (!res.ok) throw new Error("rate fetch failed")
      const data = await res.json()
      const fetchedRates: Record<string, number> = { USD: 1 }
      codes.forEach((code) => {
        if (data?.rates?.[code]) fetchedRates[code] = data.rates[code]
      })
      setRates({ ...FALLBACK_RATES, ...fetchedRates })
      setRateStatus("live")
    } catch {
      setRates(FALLBACK_RATES)
      setRateStatus("fallback")
    }
  }

  useEffect(() => {
    fetchRates()
  }, [])

  const minPrice = useMemo(
    () => (premiumPackages.length > 0 ? Math.min(...premiumPackages.map((p) => p.price)) : 0),
    [premiumPackages]
  )

  return (
    <PageTransition type="elegant" duration={600}>
      <main className="min-h-screen bg-[#F2EFED]">
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              name: "Premium Kenya Safari Packages | Afribay Adventures",
              description:
                "Browse luxury Kenya safari packages featuring premium lodges, expert guides, and exclusive wildlife experiences in Maasai Mara, Amboseli, and beyond.",
              url: "https://afribayke.com/packages/premium",
              breadcrumb: {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: "https://afribayke.com" },
                  { "@type": "ListItem", position: 2, name: "Packages", item: "https://afribayke.com/packages" },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: "Premium Packages",
                    item: "https://afribayke.com/packages/premium",
                  },
                ],
              },
              mainEntity: {
                "@type": "ItemList",
                itemListElement: premiumPackages.map((pkg, index) => ({
                  "@type": "TouristTrip",
                  position: index + 1,
                  name: pkg.title,
                  description: pkg.description,
                  image: pkg.image,
                  offers: {
                    "@type": "Offer",
                    price: pkg.price,
                    priceCurrency: "USD",
                    availability: "https://schema.org/InStock",
                    url: `https://afribayke.com/packages/${pkg.id}`,
                  },
                })),
              },
            }),
          }}
        />

        {/* ── HERO ── */}
        <section aria-labelledby="premium-hero-heading" className="relative pt-24 pb-24">
          <div className="absolute inset-0 bg-gradient-to-br from-[#2F3B2F] via-[#1e2a1e] to-[#2a3d3d]" />
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle at 80% 30%, #E8A17D 0%, transparent 50%), radial-gradient(circle at 15% 70%, #7FB5B5 0%, transparent 40%)`,
            }}
          />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 bg-[#E8A17D]/20 border border-[#E8A17D]/30 text-[#E8A17D] text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
                ✦ Exclusive Collection
              </span>
              <h1
                id="premium-hero-heading"
                className="font-serif text-5xl md:text-7xl font-bold text-white leading-[1.05] mb-6"
              >
                Premium Kenya Safari
                <span className="block text-[#E8A17D]">Packages</span>
              </h1>
              <p className="text-lg text-white/75 max-w-xl leading-relaxed">
                Experience Kenya's finest safari adventures with exclusive lodges, expert local guides, and
                unforgettable wildlife encounters in Maasai Mara, Amboseli, and beyond.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-6">
                <div className="text-center">
                  <p className="text-3xl font-bold text-white">{premiumPackages.length}</p>
                  <p className="text-xs text-white/50 uppercase tracking-wider mt-1">Packages</p>
                </div>
                <div className="h-10 w-px bg-white/20" />
                <div className="text-center">
                  <p className="text-3xl font-bold text-white">4.8★</p>
                  <p className="text-xs text-white/50 uppercase tracking-wider mt-1">Avg Rating</p>
                </div>
                <div className="h-10 w-px bg-white/20" />
                <div className="text-center">
                  <p className="text-3xl font-bold text-white">100%</p>
                  <p className="text-xs text-white/50 uppercase tracking-wider mt-1">Satisfaction</p>
                </div>
              </div>

              {/* Currency converter */}
              <div className="mt-8">
                <CurrencyConverter
                  selectedCurrency={currency}
                  onCurrencyChange={setCurrency}
                  rates={rates}
                  rateStatus={rateStatus}
                  onRefresh={fetchRates}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── PACKAGES GRID ── */}
        <section aria-labelledby="premium-packages-heading" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
              <div>
                <p className="text-xs uppercase tracking-widest text-[#7FB5B5] font-semibold mb-2">Hand-Picked</p>
                <h2 id="premium-packages-heading" className="font-serif text-3xl md:text-4xl font-bold text-[#2F3B2F]">
                  Luxury Experiences
                </h2>
              </div>
              {premiumPackages.length > 0 && (
                <p className="text-sm text-stone-400">
                  From{" "}
                  <span className="font-semibold text-[#2F3B2F]">
                    {formatConverted(minPrice, currency, rates)}
                  </span>{" "}
                  {currency !== "USD" && <span className="text-stone-400">({formatPrice(minPrice)} USD)</span>}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {premiumPackages.map((pkg, index) => (
                <article key={pkg.id} className="group" itemScope itemType="https://schema.org/TouristTrip">
                  <Card className="bg-white border-0 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 h-full flex flex-col">
                    {/* Image */}
                    <div className="relative overflow-hidden">
                      <img
                        src={pkg.image || "/placeholder.svg"}
                        alt={`${pkg.title} — premium Kenya safari package`}
                        className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-700"
                        itemProp="image"
                        loading={index < 3 ? "eager" : "lazy"}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

                      {/* Badges */}
                      <div className="absolute top-4 left-4 flex gap-2">
                        <Badge className="bg-[#2F3B2F] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow">
                          ✦ Premium
                        </Badge>
                      </div>
                      {pkg.originalPrice && (
                        <div className="absolute top-4 right-4">
                          <Badge className="bg-[#E8A17D] text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow">
                            {calculateDiscountPercentage(pkg.originalPrice, pkg.price)}% OFF
                          </Badge>
                        </div>
                      )}

                      {/* Destination pill */}
                      <div className="absolute bottom-4 left-4">
                        <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full">
                          <MapPin className="h-3 w-3 text-[#7FB5B5]" />
                          <span>
                            {pkg.destinations.length} Destination{pkg.destinations.length > 1 ? "s" : ""}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex-1">
                        <h3 className="font-serif text-xl font-bold text-[#2F3B2F] leading-snug mb-2" itemProp="name">
                          {pkg.title}
                        </h3>
                        <p className="text-sm text-stone-500 line-clamp-2 leading-relaxed" itemProp="description">
                          {pkg.description}
                        </p>

                        {/* Meta row */}
                        <div className="mt-4 flex items-center gap-4 text-xs text-stone-400">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3.5 w-3.5 text-[#7FB5B5]" />
                            {pkg.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <Users className="h-3.5 w-3.5 text-[#7FB5B5]" />
                            {pkg.groupSize.min}–{pkg.groupSize.max} pax
                          </span>
                          <span className="flex items-center gap-1">
                            <Star className="h-3.5 w-3.5 text-[#E8A17D] fill-current" />
                            4.8
                          </span>
                        </div>
                      </div>

                      {/* Divider */}
                      <div className="my-5 border-t border-stone-100" />

                      {/* Price + CTA */}
                      <div className="flex items-end justify-between gap-3">
                        <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
                          <p className="text-xs text-stone-400 uppercase tracking-wider mb-0.5">From</p>
                          <p className="text-2xl font-bold text-[#2F3B2F]">
                            {formatConverted(pkg.price, currency, rates)}
                          </p>
                          {currency !== "USD" && (
                            <p className="text-[10px] text-stone-400 mt-0.5">{formatPrice(pkg.price)} USD</p>
                          )}
                          <meta itemProp="price" content={String(pkg.price)} />
                          <meta itemProp="priceCurrency" content="USD" />
                          {pkg.originalPrice && (
                            <p className="text-xs text-stone-400 line-through mt-0.5">
                              {formatConverted(pkg.originalPrice, currency, rates)}
                            </p>
                          )}
                          <p className="text-[10px] text-stone-400 mt-0.5">per person</p>
                        </div>

                        <Button
                          asChild
                          className="bg-[#2F3B2F] hover:bg-[#E8A17D] text-white text-sm rounded-xl px-5 py-2.5 font-medium transition-all duration-300 group/btn shrink-0"
                        >
                          <Link href={`/packages/${pkg.id}`} aria-label={`View itinerary for ${pkg.title}`}>
                            View Itinerary
                            <ArrowRight className="h-3.5 w-3.5 ml-1.5 group-hover/btn:translate-x-0.5 transition-transform" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </Card>
                </article>
              ))}
            </div>

            {premiumPackages.length === 0 && (
              <div className="text-center py-24">
                <p className="text-stone-400 text-lg">No premium packages available right now. Check back soon!</p>
              </div>
            )}
          </div>
        </section>

        {/* ── INQUIRY CTA ── */}
        <section aria-labelledby="premium-cta-heading" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#E8A17D] to-[#7FB5B5]" />
          <div
            className="absolute inset-0 opacity-10"
            style={{ backgroundImage: `radial-gradient(circle at 30% 50%, white 0%, transparent 60%)` }}
          />
          <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 id="premium-cta-heading" className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
              Not Sure Which Package Fits?
            </h2>
            <p className="text-xl text-white/85 mb-10 max-w-2xl mx-auto leading-relaxed">
              Tell us your travel dates, budget, and must-see destinations — our safari specialists will design a
              custom premium itinerary just for you, with a personal quote within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-[#2F3B2F] hover:bg-[#F2EFED] font-semibold px-8 rounded-xl transition-all duration-300"
              >
                <Link href="/contact?subject=Premium Safari Enquiry">Get a Custom Quote</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-[#2F3B2F] font-semibold px-8 rounded-xl transition-all duration-300 bg-transparent"
              >
                <Link href="/packages">View All Packages</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* ── TRUST STRIP ── */}
        <section aria-label="Trust indicators" className="py-14 bg-[#2F3B2F]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "5+", label: "Years Operating" },
                { value: "100+", label: "Happy Clients" },
                { value: "4.8★", label: "Average Rating" },
                { value: "No", label: "Hidden Costs" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-bold text-[#E8A17D] mb-1">{stat.value}</p>
                  <p className="text-xs text-white/50 uppercase tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  )
}