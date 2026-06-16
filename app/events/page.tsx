"use client"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Calendar, MapPin, Users, ArrowRight, Clock, CheckCircle,
  PlayCircle, Search, ChevronRight, Rss, Filter, Grid3X3,
  List, TrendingUp, Globe, Tag, Phone, Mail, ExternalLink,
  ArrowUpRight, Star, type LucideIcon
} from "lucide-react"
import Link from "next/link"
import { useEffect, useState, useRef, type ReactNode } from "react"
import { events, getEventStatus } from "./data"

// ─── TYPES ─────────────────────────────────────────────────────────────────────
interface Event {
  slug: string
  name: string
  description: string
  dateStart: string
  dateEnd: string
  location: string
  venue: string
  attendees: string
  category: string
  image: string
}

interface StatusPillProps {
  dateStart: string
  dateEnd: string
}

interface LeadStoryProps {
  event: Event
}

interface EventRowProps {
  event: Event
  index: number
}

interface EventCardProps {
  event: Event
}

interface SidebarWidgetProps {
  title: string
  icon: LucideIcon
  children: ReactNode
}

// ─── STATUS PILL ───────────────────────────────────────────────────────────────
function StatusPill({ dateStart, dateEnd }: StatusPillProps) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])
  if (!mounted) return <span className="inline-block h-5 w-16 bg-stone-200 animate-pulse rounded" />

  const event = events.find((e: Event) => e.dateStart === dateStart && e.dateEnd === dateEnd)
  if (!event) return null
  const { status, countdownText } = getEventStatus(event)

  if (status === "past")
    return <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-stone-400"><CheckCircle className="h-3 w-3" />Ended</span>
  if (status === "ongoing")
    return <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-emerald-600"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />Live Now</span>

  const daysUntil = Math.ceil((new Date(dateStart).getTime() - new Date().setHours(0,0,0,0)) / (1000*60*60*24))
  const color = daysUntil <= 7 ? "text-red-600" : daysUntil <= 30 ? "text-amber-600" : "text-[#1a3a2f]"
  return <span className={`inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest ${color}`}><Clock className="h-3 w-3" />{countdownText}</span>
}

// ─── FORMAT DATE RANGE ─────────────────────────────────────────────────────────
function formatDateRange(start: string, end: string): string {
  const s = new Date(start), e = new Date(end)
  const mo = (d: Date): string => d.toLocaleDateString("en-US", { month: "short" })
  const dy = (d: Date): number => d.getDate()
  const yr = (d: Date): number => d.getFullYear()
  if (yr(s) === yr(e) && mo(s) === mo(e))
    return `${mo(s)} ${dy(s)}–${dy(e)}, ${yr(s)}`
  if (yr(s) === yr(e))
    return `${mo(s)} ${dy(s)} – ${mo(e)} ${dy(e)}, ${yr(s)}`
  return `${mo(s)} ${dy(s)}, ${yr(s)} – ${mo(e)} ${dy(e)}, ${yr(e)}`
}

// ─── HERO / LEAD EVENT ────────────────────────────────────────────────────────
function LeadStory({ event }: LeadStoryProps) {
  const { status } = getEventStatus(event)
  const isPast = status === "past"
  return (
    <article className="group grid md:grid-cols-5 border-b-2 border-[#1a3a2f] pb-8 mb-8 gap-0">
      {/* Image */}
      <div className="md:col-span-3 relative overflow-hidden h-64 md:h-auto">
        <img
          src={event.image}
          alt={event.name}
          className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-103 ${isPast ? "grayscale opacity-70" : ""}`}
          style={{ minHeight: 280 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        <span className="absolute top-3 left-3 bg-[#c9a96e] text-white text-[10px] font-black uppercase tracking-widest px-2 py-0.5">
          Featured
        </span>
        {!isPast && (
          <span className="absolute top-3 right-3 bg-[#1a3a2f] text-white text-[10px] font-bold uppercase tracking-widest px-2 py-0.5">
            {event.category}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="md:col-span-2 flex flex-col justify-between pl-0 md:pl-8 pt-5 md:pt-0">
        <div>
          <div className="flex items-center gap-3 mb-3 border-b border-stone-200 pb-3">
            <StatusPill dateStart={event.dateStart} dateEnd={event.dateEnd} />
            <span className="text-[10px] text-stone-400 uppercase tracking-widest font-semibold">{formatDateRange(event.dateStart, event.dateEnd)}</span>
          </div>

          <h2 className="font-serif text-3xl md:text-4xl font-black text-[#1a3a2f] leading-tight mb-3 group-hover:text-[#c9a96e] transition-colors duration-200">
            {event.name}
          </h2>

          <p className="text-stone-600 text-sm leading-relaxed mb-5 line-clamp-4">
            {event.description}
          </p>

          <div className="space-y-1.5 text-xs text-stone-500 mb-5">
            <div className="flex items-center gap-2"><MapPin className="h-3 w-3 text-[#c9a96e]" /><span>{event.venue}</span></div>
            <div className="flex items-center gap-2"><Users className="h-3 w-3 text-[#c9a96e]" /><span>{event.attendees}</span></div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 pt-4 border-t border-stone-100">
          <Link
            href={`/events/${event.slug}`}
            className="inline-flex items-center gap-1.5 bg-[#1a3a2f] hover:bg-[#c9a96e] text-white text-xs font-bold uppercase tracking-wider px-4 py-2 transition-colors"
          >
            {isPast ? "View Archive" : "Full Details"} <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          {!isPast && (
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 border border-[#1a3a2f] text-[#1a3a2f] hover:bg-[#1a3a2f] hover:text-white text-xs font-bold uppercase tracking-wider px-4 py-2 transition-colors"
            >
              Plan Safari
            </Link>
          )}
        </div>
      </div>
    </article>
  )
}

// ─── COMPACT ROW (list view) ──────────────────────────────────────────────────
function EventRow({ event, index }: EventRowProps) {
  const { status } = getEventStatus(event)
  const isPast = status === "past"
  return (
    <Link href={`/events/${event.slug}`} className="group block">
      <article className={`flex gap-4 py-4 border-b border-stone-200 hover:bg-stone-50 -mx-3 px-3 transition-colors ${isPast ? "opacity-50" : ""}`}>
        {/* Number */}
        <span className="font-serif text-3xl font-black text-stone-200 group-hover:text-[#c9a96e] transition-colors w-8 shrink-0 leading-none pt-1">{String(index).padStart(2, "0")}</span>

        {/* Thumb */}
        <div className="shrink-0 w-20 h-14 overflow-hidden">
          <img src={event.image} alt={event.name} className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${isPast ? "grayscale" : ""}`} />
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#c9a96e] border border-[#c9a96e] px-1.5 py-0">{event.category}</span>
            <StatusPill dateStart={event.dateStart} dateEnd={event.dateEnd} />
          </div>
          <h3 className="font-serif text-base font-bold text-[#1a3a2f] group-hover:text-[#c9a96e] leading-snug transition-colors line-clamp-1">
            {event.name}
          </h3>
          <div className="flex items-center gap-3 mt-0.5 text-[11px] text-stone-400">
            <span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{formatDateRange(event.dateStart, event.dateEnd)}</span>
            <span className="flex items-center gap-1"><MapPin className="h-3 w-3" />{event.location}</span>
          </div>
        </div>

        <ChevronRight className="h-4 w-4 text-stone-300 group-hover:text-[#c9a96e] transition-colors shrink-0 self-center" />
      </article>
    </Link>
  )
}

// ─── REDESIGNED EVENT CARD (grid view) ─────────────────────────────────────────
function EventCard({ event }: EventCardProps) {
  const { status } = getEventStatus(event)
  const isPast = status === "past"

  // Extract month and day for the date badge
  const startDate = new Date(event.dateStart)
  const month = startDate.toLocaleDateString("en-US", { month: "short" }).toUpperCase()
  const day = startDate.getDate()

  return (
    <article className={`group relative bg-white overflow-hidden ${isPast ? "opacity-50" : ""}`}>
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#c9a96e] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 z-10" />

      {/* Image Section */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <img 
          src={event.image} 
          alt={event.name} 
          className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${isPast ? "grayscale" : ""}`} 
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Date Badge - positioned top-left */}
        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-2 text-center shadow-lg">
          <span className="block text-[9px] font-black text-[#c9a96e] uppercase tracking-[0.2em] leading-none">{month}</span>
          <span className="block text-2xl font-serif font-black text-[#1a3a2f] leading-none mt-0.5">{day}</span>
        </div>

        {/* Category Badge - positioned top-right */}
        <div className="absolute top-4 right-4">
          <span className="inline-flex items-center gap-1 bg-[#1a3a2f]/90 backdrop-blur-sm text-white text-[9px] font-bold uppercase tracking-widest px-2.5 py-1">
            <Star className="h-2.5 w-2.5 text-[#c9a96e]" />
            {event.category}
          </span>
        </div>

        {/* Status Pill - bottom of image */}
        <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
          <div className="bg-white/90 backdrop-blur-sm px-2.5 py-1">
            <StatusPill dateStart={event.dateStart} dateEnd={event.dateEnd} />
          </div>
          {!isPast && (
            <span className="text-white/80 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1">
              <MapPin className="h-3 w-3" />{event.location}
            </span>
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 relative">
        {/* Decorative corner */}
        <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden">
          <div className="absolute top-0 right-0 w-[1px] h-8 bg-stone-200 group-hover:bg-[#c9a96e] transition-colors duration-300" />
          <div className="absolute top-0 right-0 h-[1px] w-8 bg-stone-200 group-hover:bg-[#c9a96e] transition-colors duration-300" />
        </div>

        {/* Title */}
        <h3 className="font-serif text-xl font-black text-[#1a3a2f] group-hover:text-[#c9a96e] transition-colors duration-300 leading-tight mb-3 pr-4">
          {event.name}
        </h3>

        {/* Description */}
        <p className="text-[13px] text-stone-500 leading-relaxed line-clamp-2 mb-4">
          {event.description}
        </p>

        {/* Meta row */}
        <div className="flex items-center gap-4 mb-4 text-[11px] text-stone-400 font-medium uppercase tracking-wider">
          <span className="flex items-center gap-1.5">
            <Calendar className="h-3 w-3 text-[#c9a96e]" />
            {formatDateRange(event.dateStart, event.dateEnd)}
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin className="h-3 w-3 text-[#c9a96e]" />
            {event.venue}
          </span>
        </div>

        {/* Attendees */}
        <div className="flex items-center gap-1.5 text-[11px] text-stone-400 mb-5">
          <Users className="h-3 w-3 text-[#c9a96e]" />
          <span>{event.attendees}</span>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-4 border-t border-stone-100">
          <Link 
            href={`/events/${event.slug}`} 
            className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#1a3a2f] hover:bg-[#c9a96e] text-white text-[11px] font-black uppercase tracking-widest py-2.5 transition-all duration-300"
          >
            {isPast ? "View Archive" : "Explore"}
            <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          {!isPast && (
            <Link 
              href="/contact" 
              className="flex-1 inline-flex items-center justify-center gap-1.5 border-2 border-[#1a3a2f] text-[#1a3a2f] hover:bg-[#1a3a2f] hover:text-white text-[11px] font-black uppercase tracking-widest py-2.5 transition-all duration-300"
            >
              Plan Safari
            </Link>
          )}
        </div>
      </div>
    </article>
  )
}

// ─── SIDEBAR WIDGET ───────────────────────────────────────────────────────────
function SidebarWidget({ title, icon: Icon, children }: SidebarWidgetProps) {
  return (
    <aside className="border border-stone-200 bg-white">
      <header className="flex items-center gap-2 px-4 py-2.5 border-b-2 border-[#1a3a2f]">
        <Icon className="h-3.5 w-3.5 text-[#c9a96e]" />
        <span className="text-[11px] font-black uppercase tracking-widest text-[#1a3a2f]">{title}</span>
      </header>
      <div className="p-4">{children}</div>
    </aside>
  )
}

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────
export default function EventsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("All")
  const [viewMode, setViewMode] = useState<"list" | "grid">("list")
  const [showPast, setShowPast] = useState(false)

  const allCategories = ["All", ...Array.from(new Set(events.map((e) => e.category)))]

  const upcoming = events.filter((e) => getEventStatus(e).status !== "past")
  const past = events.filter((e) => getEventStatus(e).status === "past")

  const filterFn = (list: typeof events) => list.filter((e) => {
    const matchQ = !searchQuery || [e.name, e.description, e.location, e.category].join(" ").toLowerCase().includes(searchQuery.toLowerCase())
    const matchC = activeCategory === "All" || e.category === activeCategory
    return matchQ && matchC
  })

  const filteredUpcoming = filterFn(upcoming)
  const filteredPast = filterFn(past)
  const [lead, ...rest] = filteredUpcoming

  const now = new Date()
  const nextEvent = upcoming.sort((a, b) => new Date(a.dateStart).getTime() - new Date(b.dateStart).getTime())[0]

  return (
    <main className="min-h-screen" style={{ fontFamily: "'Georgia', serif", background: "#f6f4ef" }}>
      <Navigation />

      {/* ─── MASTHEAD ─────────────────────────────────────────────────────── */}
      <header className="bg-[#1a3a2f] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Top bar */}
          <div className="flex items-center justify-between py-2 border-b border-white/10 text-[10px] uppercase tracking-widest text-white/50 font-bold">
            <div className="flex items-center gap-4">
              <span>{now.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</span>
              <span className="hidden sm:block">Nairobi, Kenya</span>
            </div>
            <div className="flex items-center gap-4">
              <a href="tel:+254708777037" className="flex items-center gap-1 hover:text-[#c9a96e] transition-colors"><Phone className="h-3 w-3" />+254 708 777 037</a>
              <a href="mailto:adventure@afribayke.com" className="hidden sm:flex items-center gap-1 hover:text-[#c9a96e] transition-colors"><Mail className="h-3 w-3" />adventure@afribayke.com</a>
            </div>
          </div>

          {/* Masthead title */}
          <div className="text-center py-6 sm:py-8 border-b border-white/10">
            <div className="flex items-center justify-center gap-3 mb-1">
              <div className="h-px flex-1 bg-[#c9a96e]/40" />
              <p className="text-[#c9a96e] text-[10px] font-black uppercase tracking-[0.4em]">AfriBay Adventures</p>
              <div className="h-px flex-1 bg-[#c9a96e]/40" />
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-none text-white">
              Kenya Events <span className="text-[#c9a96e]">&</span> Safaris
            </h1>
            <p className="text-white/50 text-xs sm:text-sm mt-2 tracking-widest font-normal" style={{ fontFamily: "sans-serif" }}>
              2026 International Events Calendar · Business Travel · Bespoke Safari Extensions
            </p>
          </div>

          {/* Nav bar */}
          <nav className="flex items-center justify-between py-2 gap-4 overflow-x-auto">
            <div className="flex items-center gap-1 shrink-0">
              {allCategories.map((cat: string) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest whitespace-nowrap transition-colors ${
                    activeCategory === cat
                      ? "bg-[#c9a96e] text-white"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button onClick={() => setViewMode("list")} className={`p-1.5 rounded transition-colors ${viewMode === "list" ? "text-[#c9a96e]" : "text-white/40 hover:text-white"}`}><List className="h-4 w-4" /></button>
              <button onClick={() => setViewMode("grid")} className={`p-1.5 rounded transition-colors ${viewMode === "grid" ? "text-[#c9a96e]" : "text-white/40 hover:text-white"}`}><Grid3X3 className="h-4 w-4" /></button>
            </div>
          </nav>
        </div>
      </header>

      {/* ─── TICKER ───────────────────────────────────────────────────────── */}
      <div className="bg-[#c9a96e] text-white text-[11px] font-bold uppercase tracking-wider overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center gap-4 py-1.5">
          <span className="bg-[#1a3a2f] px-2 py-0.5 shrink-0 text-[10px]">UPCOMING</span>
          <div className="overflow-hidden flex-1">
            <div className="flex gap-8 animate-[marquee_20s_linear_infinite]">
              {upcoming.slice(0,6).map((e: Event) => (
                <span key={e.slug} className="shrink-0">{e.name} — {formatDateRange(e.dateStart, e.dateEnd)}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ─── SEARCH ───────────────────────────────────────────────────────── */}
      <div className="bg-white border-b border-stone-200 sticky top-0 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 flex items-center gap-3">
          <Search className="h-4 w-4 text-stone-400 shrink-0" />
          <input
            type="text"
            placeholder="Search events, locations, categories…"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="flex-1 text-sm text-[#1a3a2f] placeholder-stone-400 focus:outline-none bg-transparent"
            style={{ fontFamily: "sans-serif" }}
          />
          {searchQuery && (
            <button onClick={() => setSearchQuery("")} className="text-xs text-stone-400 hover:text-[#1a3a2f] font-bold uppercase tracking-widest transition-colors" style={{ fontFamily: "sans-serif" }}>
              Clear
            </button>
          )}
          <div className="hidden sm:flex items-center gap-1 text-[10px] text-stone-400 uppercase tracking-widest font-bold border-l border-stone-200 pl-3" style={{ fontFamily: "sans-serif" }}>
            <Filter className="h-3 w-3" />{filteredUpcoming.length} upcoming · {filteredPast.length} past
          </div>
        </div>
      </div>

      {/* ─── BODY ─────────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid lg:grid-cols-12 gap-8">

          {/* ─── MAIN COLUMN ──────────────────────────────────────────────── */}
          <section className="lg:col-span-8">

            {/* Results meta */}
            <div className="flex items-center justify-between mb-5 pb-3 border-b-2 border-[#1a3a2f]">
              <h2 className="font-serif text-lg font-black text-[#1a3a2f] uppercase tracking-wider">
                {activeCategory === "All" ? "All Upcoming Events" : activeCategory}
              </h2>
              <span className="text-xs text-stone-400 font-bold uppercase tracking-widest" style={{ fontFamily: "sans-serif" }}>
                {filteredUpcoming.length} Events
              </span>
            </div>

            {filteredUpcoming.length === 0 ? (
              <div className="text-center py-20 border border-dashed border-stone-300">
                <Search className="h-10 w-10 text-stone-300 mx-auto mb-3" />
                <p className="font-serif text-xl text-stone-400">No events found</p>
                <p className="text-xs text-stone-400 mt-1" style={{ fontFamily: "sans-serif" }}>Try adjusting your search or category filter</p>
                <button onClick={() => { setSearchQuery(""); setActiveCategory("All") }} className="mt-4 text-xs font-bold uppercase tracking-widest text-[#c9a96e] hover:underline" style={{ fontFamily: "sans-serif" }}>Reset filters</button>
              </div>
            ) : viewMode === "list" ? (
              <>
                {/* Lead story (full-width) */}
                {lead && !searchQuery && activeCategory === "All" && <LeadStory event={lead} />}

                {/* Event rows */}
                <div>
                  {(lead && !searchQuery && activeCategory === "All" ? rest : filteredUpcoming).map((event: Event, i: number) => (
                    <EventRow key={event.slug} event={event} index={i + (lead ? 2 : 1)} />
                  ))}
                </div>
              </>
            ) : (
              <div className="grid sm:grid-cols-2 gap-6">
                {filteredUpcoming.map((event: Event) => (
                  <EventCard key={event.slug} event={event} />
                ))}
              </div>
            )}

            {/* ─── PAST EVENTS ────────────────────────────────────────────── */}
            {filteredPast.length > 0 && (
              <div className="mt-10">
                <button
                  onClick={() => setShowPast(!showPast)}
                  className="flex items-center gap-2 w-full text-left pb-3 border-b-2 border-stone-300 hover:border-[#1a3a2f] transition-colors group"
                >
                  <h2 className="font-serif text-lg font-black text-stone-400 group-hover:text-[#1a3a2f] uppercase tracking-wider transition-colors">
                    Past Events ({filteredPast.length})
                  </h2>
                  <ChevronRight className={`h-4 w-4 text-stone-300 transition-transform ${showPast ? "rotate-90" : ""}`} />
                </button>
                {showPast && (
                  <div className="mt-4">
                    {viewMode === "grid" ? (
                      <div className="grid sm:grid-cols-2 gap-6">
                        {filteredPast.map((e: Event) => <EventCard key={e.slug} event={e} />)}
                      </div>
                    ) : (
                      filteredPast.map((e: Event, i: number) => <EventRow key={e.slug} event={e} index={i + 1} />)
                    )}
                  </div>
                )}
              </div>
            )}
          </section>

          {/* ─── SIDEBAR ──────────────────────────────────────────────────── */}
          <aside className="lg:col-span-4 space-y-5">

            {/* Next event countdown */}
            {nextEvent && (
              <SidebarWidget title="Next Event" icon={TrendingUp}>
                <div className="text-center">
                  <p className="text-[10px] text-stone-400 uppercase tracking-widest font-bold mb-1" style={{ fontFamily: "sans-serif" }}>
                    {nextEvent.category}
                  </p>
                  <h3 className="font-serif text-xl font-black text-[#1a3a2f] leading-tight mb-2">
                    {nextEvent.name}
                  </h3>
                  <div className="bg-[#1a3a2f] text-white py-3 px-4 mb-3">
                    <StatusPill dateStart={nextEvent.dateStart} dateEnd={nextEvent.dateEnd} />
                    <p className="text-[#c9a96e] font-serif text-2xl font-black mt-1">
                      {formatDateRange(nextEvent.dateStart, nextEvent.dateEnd)}
                    </p>
                  </div>
                  <div className="text-xs text-stone-500 flex items-center justify-center gap-1 mb-3" style={{ fontFamily: "sans-serif" }}>
                    <MapPin className="h-3 w-3 text-[#c9a96e]" />{nextEvent.venue}
                  </div>
                  <Link href={`/events/${nextEvent.slug}`} className="block text-center text-[11px] font-black uppercase tracking-widest bg-[#c9a96e] hover:bg-[#1a3a2f] text-white py-2 transition-colors">
                    View Details →
                  </Link>
                </div>
              </SidebarWidget>
            )}

            {/* Categories */}
            <SidebarWidget title="Browse by Category" icon={Tag}>
              <div className="space-y-1">
                {allCategories.filter((c: string) => c !== "All").map((cat: string) => {
                  const count = events.filter((e) => e.category === cat && getEventStatus(e).status !== "past").length
                  return (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`flex items-center justify-between w-full text-xs py-1.5 px-2 font-bold uppercase tracking-widest transition-colors ${
                        activeCategory === cat
                          ? "bg-[#1a3a2f] text-white"
                          : "text-stone-600 hover:bg-stone-50 hover:text-[#1a3a2f]"
                      }`}
                      style={{ fontFamily: "sans-serif" }}
                    >
                      <span>{cat}</span>
                      <span className={`text-[10px] px-1.5 py-0.5 ${activeCategory === cat ? "bg-[#c9a96e] text-white" : "bg-stone-100 text-stone-400"}`}>{count}</span>
                    </button>
                  )
                })}
              </div>
            </SidebarWidget>

            {/* Contact CTA */}
            <SidebarWidget title="Plan Your Safari" icon={Globe}>
              <div className="text-center">
                <p className="text-xs text-stone-600 leading-relaxed mb-4" style={{ fontFamily: "sans-serif" }}>
                  Attending a Kenya conference? We build bespoke safari extensions around your schedule. Airport pickup to bush dinner under the stars.
                </p>
                <div className="space-y-2">
                  <Link href="/contact" className="flex items-center justify-center gap-2 text-[11px] font-black uppercase tracking-widest bg-[#1a3a2f] hover:bg-[#c9a96e] text-white py-2.5 transition-colors">
                    <Mail className="h-3.5 w-3.5" />Request Itinerary
                  </Link>
                  <Link href="/booking" className="flex items-center justify-center gap-2 text-[11px] font-black uppercase tracking-widest border border-[#1a3a2f] text-[#1a3a2f] hover:bg-[#1a3a2f] hover:text-white py-2.5 transition-colors">
                    <Phone className="h-3.5 w-3.5" />Book Consultation
                  </Link>
                </div>
                <div className="mt-3 pt-3 border-t border-stone-100 space-y-1" style={{ fontFamily: "sans-serif" }}>
                  <a href="tel:+254708777037" className="block text-[11px] text-stone-500 hover:text-[#c9a96e] transition-colors">+254 708 777 037</a>
                  <a href="mailto:adventure@afribayke.com" className="block text-[11px] text-stone-500 hover:text-[#c9a96e] transition-colors">adventure@afribayke.com</a>
                </div>
              </div>
            </SidebarWidget>

            {/* Stats */}
            <SidebarWidget title="At a Glance" icon={Rss}>
              <div className="grid grid-cols-3 gap-3 text-center">
                {[
                  { n: events.length, label: "Total Events" },
                  { n: upcoming.length, label: "Upcoming" },
                  { n: 2, label: "Cities" },
                ].map(({ n, label }) => (
                  <div key={label} className="bg-[#1a3a2f]/5 py-3">
                    <p className="font-serif text-2xl font-black text-[#1a3a2f]">{n}</p>
                    <p className="text-[9px] font-bold uppercase tracking-widest text-stone-400 mt-0.5" style={{ fontFamily: "sans-serif" }}>{label}</p>
                  </div>
                ))}
              </div>
            </SidebarWidget>
          </aside>
        </div>
      </div>

      {/* ─── FOOTER STRIP ─────────────────────────────────────────────────── */}
      <footer className="bg-[#1a3a2f] text-white mt-16 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-white/50 font-bold uppercase tracking-widest" style={{ fontFamily: "sans-serif" }}>
          <span>© 2026 AfriBay Adventures · Nairobi, Kenya</span>
          <div className="flex gap-6">
            <Link href="/events" className="hover:text-[#c9a96e] transition-colors">Events</Link>
            <Link href="/contact" className="hover:text-[#c9a96e] transition-colors">Contact</Link>
            <Link href="/booking" className="hover:text-[#c9a96e] transition-colors">Book</Link>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </main>
  )
}