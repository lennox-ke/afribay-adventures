"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { formatPrice, calculateDiscountPercentage } from "@/lib/utils"
import { packages } from "@/lib/data"
import Link from "next/link"
import { useState, useEffect, useMemo } from "react"
import { ChevronLeft, ChevronRight, Globe, Plane, ShieldCheck, Clock3 } from "lucide-react"

/* ---------------------------------------------------------------------------
   Currency support — international visitors want to see "what this costs me"
   without doing mental math. Rates are approximate USD conversions and are
   labeled as such; pkg.price / pkg.originalPrice are assumed to be USD.
--------------------------------------------------------------------------- */
const CURRENCIES = [
  { code: "USD", symbol: "$", label: "USD", rate: 1 },
  { code: "EUR", symbol: "€", label: "EUR", rate: 0.93 },
  { code: "GBP", symbol: "£", label: "GBP", rate: 0.78 },
  { code: "KES", symbol: "KSh", label: "KES", rate: 129 },
] as const

type CurrencyCode = (typeof CURRENCIES)[number]["code"]

function convert(amount: number, currency: CurrencyCode) {
  const c = CURRENCIES.find((c) => c.code === currency)!
  const value = amount * c.rate
  const formatted =
    currency === "KES"
      ? Math.round(value).toLocaleString("en-US")
      : value.toLocaleString("en-US", { maximumFractionDigits: 0 })
  return `${c.symbol}${formatted}`
}

/* ---------------------------------------------------------------------------
   Countdown — ties the "limited-time" framing to an actual deadline so the
   urgency is real, not decorative. Resets weekly (next Sunday 23:59).
--------------------------------------------------------------------------- */
function useWeeklyCountdown() {
  const [label, setLabel] = useState("")

  useEffect(() => {
    const compute = () => {
      const now = new Date()
      const end = new Date(now)
      const daysUntilSunday = (7 - now.getDay()) % 7 || 7
      end.setDate(now.getDate() + daysUntilSunday)
      end.setHours(23, 59, 0, 0)

      const diffMs = end.getTime() - now.getTime()
      const days = Math.floor(diffMs / (1000 * 60 * 60 * 24))
      const hours = Math.floor((diffMs / (1000 * 60 * 60)) % 24)

      if (days > 0) {
        setLabel(`${days}d ${hours}h left at this rate`)
      } else {
        setLabel(`${hours}h left at this rate`)
      }
    }

    compute()
    const interval = setInterval(compute, 60_000)
    return () => clearInterval(interval)
  }, [])

  return label
}

export function OfferPackages() {
  const offerPackages = packages.filter((p) => p.category === "offer")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currency, setCurrency] = useState<CurrencyCode>("USD")
  const countdown = useWeeklyCountdown()

  const featured = offerPackages[0]
  const rest = offerPackages.slice(1)

  // Auto-play the supporting strip only when there's more to show than fits
  useEffect(() => {
    if (rest.length <= 2) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % rest.length)
    }, 4500)

    return () => clearInterval(interval)
  }, [rest.length])

  const goToNext = () => setCurrentIndex((prev) => (prev + 1) % rest.length)
  const goToPrev = () => setCurrentIndex((prev) => (prev - 1 + rest.length) % rest.length)

  const displaySupporting = useMemo(() => {
    if (rest.length <= 2) return rest
    return [rest[currentIndex % rest.length], rest[(currentIndex + 1) % rest.length]]
  }, [rest, currentIndex])

  if (offerPackages.length === 0) {
    return (
      <section className="py-16 bg-[#2F3B2F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            Special Offer Packages
          </h2>
          <p className="text-lg text-[#F2EFED]">No offers available at the moment.</p>
        </div>
      </section>
    )
  }

  const destinationLabel = (pkg: (typeof packages)[number]) =>
    pkg.destinations[0]?.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())

  return (
    <section className="relative py-16 md:py-20 bg-[#2F3B2F] overflow-hidden">
      {/* Ambient texture — subtle topographic-style lines, evokes a map without being literal */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(115deg, transparent, transparent 78px, #E8A17D 78px, #E8A17D 79px)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Header row: title + currency selector ──────────────────── */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 mb-3 rounded-full bg-white/10 px-3 py-1">
              <Clock3 className="w-3.5 h-3.5 text-[#E8A17D]" />
              <span className="text-xs font-medium text-[#F2EFED] tracking-wide">
                {countdown || "This week's deals"}
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-2">
              This Week's Safari Deals
            </h2>
            <p className="text-base text-[#F2EFED]/70 max-w-xl">
              Hand-picked discounts on Kenya's classic routes — priced for travelers flying in
              from anywhere.
            </p>
          </div>

          {/* Currency toggle — signature element for international visitors */}
          <div className="flex items-center gap-2 self-start md:self-auto">
            <Globe className="w-4 h-4 text-[#F2EFED]/50" />
            <div className="flex rounded-full border border-white/15 bg-white/5 p-1">
              {CURRENCIES.map((c) => (
                <button
                  key={c.code}
                  onClick={() => setCurrency(c.code)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-colors duration-200 ${
                    currency === c.code
                      ? "bg-[#E8A17D] text-[#2F3B2F]"
                      : "text-[#F2EFED]/60 hover:text-white"
                  }`}
                  aria-pressed={currency === c.code}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── Main layout: featured deal + supporting strip ───────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Featured deal — large card */}
          {featured && (
            <div className="lg:col-span-3 group rounded-2xl overflow-hidden bg-white shadow-2xl">
              <div className="relative h-64 md:h-80">
                <img
                  src={featured.image || "/placeholder.svg"}
                  alt={featured.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 bg-[#E8A17D] text-[#2F3B2F] text-xs font-bold rounded-full shadow-lg uppercase tracking-wide">
                    Featured Deal
                  </span>
                  {featured.originalPrice && (
                    <span className="px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full shadow-lg">
                      {calculateDiscountPercentage(featured.originalPrice, featured.price)}% OFF
                    </span>
                  )}
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3 py-1 bg-white/15 backdrop-blur-sm text-white text-sm rounded-full">
                    {destinationLabel(featured)}
                  </span>
                  <span className="px-3 py-1 bg-white/15 backdrop-blur-sm text-white text-sm rounded-full">
                    {featured.duration}
                  </span>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#2F3B2F] mb-2">
                  {featured.title}
                </h3>
                <p className="text-gray-600 mb-6 line-clamp-2 max-w-lg">
                  {featured.description}
                </p>

                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl md:text-4xl font-bold text-[#2F3B2F]">
                        {convert(featured.price, currency)}
                      </span>
                      {featured.originalPrice && (
                        <span className="text-base text-gray-400 line-through">
                          {convert(featured.originalPrice, currency)}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-gray-400 mt-1">
                      per person · approx. in {currency} ·{" "}
                      <span className="text-gray-500">{formatPrice(featured.price)} USD</span>
                    </p>
                  </div>

                  <Button
                    asChild
                    size="lg"
                    className="bg-[#E8A17D] hover:bg-[#7FB5B5] text-white transition-colors duration-300 shrink-0"
                  >
                    <Link href={`/packages/${featured.id}`}>Claim This Deal</Link>
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Supporting strip — remaining offers, stacked */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {displaySupporting.map((pkg) => (
              <div
                key={pkg.id}
                className="flex bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative w-32 sm:w-40 shrink-0">
                  <img
                    src={pkg.image || "/placeholder.svg"}
                    alt={pkg.title}
                    className="w-full h-full object-cover"
                  />
                  {pkg.originalPrice && (
                    <span className="absolute top-2 left-2 px-2 py-0.5 bg-red-500 text-white text-[10px] font-bold rounded-full shadow">
                      -{calculateDiscountPercentage(pkg.originalPrice, pkg.price)}%
                    </span>
                  )}
                </div>

                <div className="flex-1 p-4 flex flex-col justify-between min-w-0">
                  <div>
                    <p className="text-xs text-[#7FB5B5] font-semibold uppercase tracking-wide mb-1">
                      {destinationLabel(pkg)} · {pkg.duration}
                    </p>
                    <h4 className="font-serif text-base font-bold text-[#2F3B2F] leading-snug mb-1 truncate">
                      {pkg.title}
                    </h4>
                  </div>

                  <div className="flex items-end justify-between gap-2 mt-2">
                    <div>
                      <span className="text-lg font-bold text-[#2F3B2F]">
                        {convert(pkg.price, currency)}
                      </span>
                      {pkg.originalPrice && (
                        <span className="text-xs text-gray-400 line-through ml-1.5">
                          {convert(pkg.originalPrice, currency)}
                        </span>
                      )}
                    </div>
                    <Link
                      href={`/packages/${pkg.id}`}
                      className="text-xs font-semibold text-[#E8A17D] hover:text-[#7FB5B5] transition-colors duration-300 whitespace-nowrap"
                    >
                      View deal →
                    </Link>
                  </div>
                </div>
              </div>
            ))}

            {/* Strip navigation — only if more offers than fit */}
            {rest.length > 2 && (
              <div className="flex items-center justify-between mt-1">
                <div className="flex gap-1.5">
                  {rest.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        index === currentIndex || index === (currentIndex + 1) % rest.length
                          ? "w-6 bg-[#E8A17D]"
                          : "w-1.5 bg-white/25 hover:bg-white/40"
                      }`}
                      aria-label={`Show deal ${index + 1}`}
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={goToPrev}
                    className="bg-white/10 hover:bg-white/20 text-white rounded-full p-1.5 transition-colors duration-300"
                    aria-label="Previous deal"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={goToNext}
                    className="bg-white/10 hover:bg-white/20 text-white rounded-full p-1.5 transition-colors duration-300"
                    aria-label="Next deal"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ── Trust strip — addresses the concerns of a first-time visitor booking from abroad ── */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-[#F2EFED]/70">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#7FB5B5]" />
            Secure online booking
          </div>
          <div className="flex items-center gap-2">
            <Plane className="w-4 h-4 text-[#7FB5B5]" />
            Airport transfers arranged for you
          </div>
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-[#7FB5B5]" />
            We reply in your timezone, within 24 hours
          </div>
        </div>

        {/* ── View all ─────────────────────────────────────────────────── */}
        <div className="text-center mt-10">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-2 border-white text-white hover:bg-white hover:text-[#2F3B2F] transition-all duration-300 bg-transparent"
          >
            <Link href="/packages/offers">Explore All Adventures</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}