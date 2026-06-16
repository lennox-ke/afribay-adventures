import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Calendar, MapPin, Users, Clock, CheckCircle, PlayCircle, Check,
  Star, ArrowLeft, ArrowRight, Phone, Compass, Globe, Palmtree, Plane,
  Zap, Tag, Users2, Award, CloudRain, TreePine, Mountain, Waves,
  Map, Route, Binoculars, Tractor, PawPrint, Hammer, Clock3,
  Utensils, Fish, Leaf, Coffee, Flower, Beef, Satellite, Camera,
  Mail, MessageCircle, ExternalLink, ChevronRight, Sparkles
} from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { events, getEventStatus } from "../data"
import { accommodations } from "@/lib/data"

type Props = { params: Promise<{ slug: string }> }

const iconMap: Record<string, React.ReactNode> = {
  globe: <Globe className="h-6 w-6 text-[#c9a96e]" />,
  palmtree: <Palmtree className="h-6 w-6 text-[#c9a96e]" />,
  plane: <Plane className="h-6 w-6 text-[#c9a96e]" />,
  compass: <Compass className="h-6 w-6 text-[#c9a96e]" />,
  satellite: <Satellite className="h-6 w-6 text-[#c9a96e]" />,
  waves: <Waves className="h-6 w-6 text-[#c9a96e]" />,
  mountain: <Mountain className="h-6 w-6 text-[#c9a96e]" />,
  cow: <Beef className="h-6 w-6 text-[#c9a96e]" />,
  flower: <Flower className="h-6 w-6 text-[#c9a96e]" />,
  coffee: <Coffee className="h-6 w-6 text-[#c9a96e]" />,
  utensils: <Utensils className="h-6 w-6 text-[#c9a96e]" />,
  fish: <Fish className="h-6 w-6 text-[#c9a96e]" />,
  leaf: <Leaf className="h-6 w-6 text-[#c9a96e]" />,
  map: <Map className="h-6 w-6 text-[#c9a96e]" />,
  route: <Route className="h-6 w-6 text-[#c9a96e]" />,
  binoculars: <Binoculars className="h-6 w-6 text-[#c9a96e]" />,
  tractor: <Tractor className="h-6 w-6 text-[#c9a96e]" />,
  paw: <PawPrint className="h-6 w-6 text-[#c9a96e]" />,
  hammer: <Hammer className="h-6 w-6 text-[#c9a96e]" />,
  clock: <Clock3 className="h-6 w-6 text-[#c9a96e]" />,
  zap: <Zap className="h-6 w-6 text-[#c9a96e]" />,
  tag: <Tag className="h-6 w-6 text-[#c9a96e]" />,
  users: <Users2 className="h-6 w-6 text-[#c9a96e]" />,
  award: <Award className="h-6 w-6 text-[#c9a96e]" />,
  "cloud-rain": <CloudRain className="h-6 w-6 text-[#c9a96e]" />,
  "tree-pine": <TreePine className="h-6 w-6 text-[#c9a96e]" />,
  camera: <Camera className="h-6 w-6 text-[#c9a96e]" />,
}

function CountdownPill({ event }: { event: typeof events[0] }) {
  const { status } = getEventStatus(event)
  
  if (status === "past") {
    return (
      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-500 text-white text-sm font-medium">
        <CheckCircle className="h-4 w-4" /> Event Ended
      </span>
    )
  }
  
  if (status === "ongoing") {
    return (
      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500 text-white text-sm font-medium animate-pulse">
        <PlayCircle className="h-4 w-4" /> Happening Now
      </span>
    )
  }
  
  const daysUntil = Math.ceil((new Date(event.dateStart).getTime() - new Date().setHours(0,0,0,0)) / (1000*60*60*24))
  const color = daysUntil <= 7 ? "bg-red-500" : daysUntil <= 30 ? "bg-orange-500" : "bg-[#c9a96e]"
  
  return (
    <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${color} text-white text-sm font-medium`}>
      <Clock className="h-4 w-4" /> {getEventStatus(event).countdownText}
    </span>
  )
}

function ExperienceCard({ title, description, icon }: { title: string; description: string; icon: string }) {
  return (
    <Card className="group p-8 rounded-2xl border-0 shadow-lg bg-white hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
      <div className="w-14 h-14 rounded-2xl bg-[#1a3a2f]/5 flex items-center justify-center mb-6 group-hover:bg-[#c9a96e]/10 transition-colors">
        {iconMap[icon] || <Compass className="h-6 w-6 text-[#c9a96e]" />}
      </div>
      <h3 className="font-serif text-xl font-bold text-[#1a3a2f] mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </Card>
  )
}

function HotelCard({ hotel }: { hotel: { name: string; location: string; feature: string; image: string } }) {
  return (
    <Card className="overflow-hidden rounded-2xl border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-300 group">
      <div className="relative h-48 overflow-hidden">
        <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
      </div>
      <div className="p-6">
        <h4 className="font-serif text-lg font-bold text-[#1a3a2f] mb-1">{hotel.name}</h4>
        <p className="text-sm text-[#8b9d83] mb-3 flex items-center gap-1">
          <MapPin className="h-3.5 w-3.5" /> {hotel.location}
        </p>
        <p className="text-sm text-gray-600 mb-4">{hotel.feature}</p>
        <Button asChild variant="outline" className="w-full border-[#c9a96e] text-[#c9a96e] hover:bg-[#c9a96e] hover:text-white rounded-xl transition-all">
          <Link href="/accommodations">View Details</Link>
        </Button>
      </div>
    </Card>
  )
}

export default async function EventDetailPage({ params }: Props) {
  const { slug } = await params
  const event = events.find((e) => e.slug === slug)
  if (!event) notFound()

  const { status } = getEventStatus(event)
  const isPast = status === "past"
  const isOngoing = status === "ongoing"

  const eventHotels = event.hotelLocations.flatMap(loc =>
    accommodations.filter(hotel =>
      hotel.location.toLowerCase().replace(/\s+/g, "-") === loc.toLowerCase()
    )
  )

  return (
    <main className="min-h-screen bg-[#f7f5f0]">
      <Navigation />

      {/* ─── HERO ─── */}
      <section className="relative min-h-[90vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={event.image}
            alt={event.name}
            className={`w-full h-full object-cover ${isPast ? "grayscale" : ""}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a2f] via-[#1a3a2f]/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a3a2f]/60 to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-16 pt-32">
          <Link 
            href="/events" 
            className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-8 transition-colors text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4" /> All Events
          </Link>

          <div className="grid lg:grid-cols-3 gap-12 items-end">
            <div className="lg:col-span-2">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <CountdownPill event={event} />
                <Badge className="bg-white/20 backdrop-blur-md text-white border-0 px-3 py-1">
                  {event.category}
                </Badge>
                <Badge className="bg-[#c9a96e] text-white border-0 px-3 py-1">
                  {event.location}
                </Badge>
              </div>

              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[0.95]">
                {event.name}
              </h1>

              <p className="text-xl text-white/80 max-w-2xl leading-relaxed mb-8">
                {event.description}
              </p>

              <div className="flex flex-wrap gap-4">
                {!isPast && (
                  <Button asChild size="lg" className="bg-[#c9a96e] hover:bg-[#b8985d] text-white px-8 py-6 rounded-2xl text-lg font-semibold shadow-xl hover:shadow-2xl transition-all">
                    <Link href="/booking">
                      {isOngoing ? "Plan Next Year" : "Book Consultation"}
                    </Link>
                  </Button>
                )}
                <Button asChild size="lg" className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white hover:text-[#1a3a2f] px-8 py-6 rounded-2xl text-lg transition-all">
                  <Link href={`/blog/${event.blogSlug}`}>Read Guide</Link>
                </Button>
              </div>

              <div className="flex flex-wrap gap-6 mt-8 text-white/60 text-sm">
                <a href="tel:+254123456789" className="flex items-center gap-2 hover:text-[#c9a96e] transition-colors">
                  <Phone className="h-4 w-4" /> +254 123 456 789
                </a>
                <a href="mailto:events@afribayke.com" className="flex items-center gap-2 hover:text-[#c9a96e] transition-colors">
                  <Mail className="h-4 w-4" /> events@afribayke.com
                </a>
                <a href="https://wa.me/254123456789" target="_blank" className="flex items-center gap-2 hover:text-[#c9a96e] transition-colors">
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
              </div>
            </div>

            <div className="hidden lg:block">
              <Card className="p-8 rounded-3xl border-0 shadow-2xl bg-white/95 backdrop-blur-xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#1a3a2f] flex items-center justify-center">
                    <Sparkles className="h-5 w-5 text-[#c9a96e]" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#1a3a2f]">Event Details</h3>
                </div>

                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#c9a96e]/10 flex items-center justify-center shrink-0">
                      <Calendar className="h-5 w-5 text-[#c9a96e]" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-1">Dates</p>
                      <p className="text-[#1a3a2f] font-medium">
                        {new Date(event.dateStart).toLocaleDateString("en-US", { month: "long", day: "numeric" })} — {new Date(event.dateEnd).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#c9a96e]/10 flex items-center justify-center shrink-0">
                      <MapPin className="h-5 w-5 text-[#c9a96e]" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-1">Venue</p>
                      <p className="text-[#1a3a2f] font-medium">{event.venue}</p>
                      <p className="text-gray-400 text-sm">{event.location}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#c9a96e]/10 flex items-center justify-center shrink-0">
                      <Users className="h-5 w-5 text-[#c9a96e]" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-1">Attendance</p>
                      <p className="text-[#1a3a2f] font-medium">{event.attendees}</p>
                    </div>
                  </div>
                </div>

                {!isPast && (
                  <div className="mt-6 pt-6 border-t border-gray-100 space-y-3">
                    <Button asChild className="w-full bg-[#1a3a2f] hover:bg-[#c9a96e] text-white py-4 rounded-xl text-base font-semibold transition-all">
                      <Link href="/booking">Book Consultation</Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full border-[#c9a96e] text-[#c9a96e] hover:bg-[#c9a96e] hover:text-white py-4 rounded-xl transition-all">
                      <Link href="/contact">Request Custom Itinerary</Link>
                    </Button>
                  </div>
                )}
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BODY ─── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Mobile Info Cards */}
          <div className="grid grid-cols-2 lg:hidden gap-4 mb-16">
            <Card className="p-5 rounded-2xl border-0 shadow-lg bg-white">
              <Calendar className="h-6 w-6 text-[#c9a96e] mb-2" />
              <p className="text-xs text-gray-400 uppercase font-semibold">Dates</p>
              <p className="text-sm font-bold text-[#1a3a2f]">
                {new Date(event.dateStart).toLocaleDateString("en-US", { month: "short", day: "numeric" })} — {new Date(event.dateEnd).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
              </p>
            </Card>
            <Card className="p-5 rounded-2xl border-0 shadow-lg bg-white">
              <MapPin className="h-6 w-6 text-[#c9a96e] mb-2" />
              <p className="text-xs text-gray-400 uppercase font-semibold">Venue</p>
              <p className="text-sm font-bold text-[#1a3a2f]">{event.venue}</p>
            </Card>
            <Card className="p-5 rounded-2xl border-0 shadow-lg bg-white">
              <Users className="h-6 w-6 text-[#c9a96e] mb-2" />
              <p className="text-xs text-gray-400 uppercase font-semibold">Attendance</p>
              <p className="text-sm font-bold text-[#1a3a2f]">{event.attendees}</p>
            </Card>
            <Card className="p-5 rounded-2xl border-0 shadow-lg bg-white">
              <Star className="h-6 w-6 text-[#c9a96e] mb-2" />
              <p className="text-xs text-gray-400 uppercase font-semibold">Type</p>
              <p className="text-sm font-bold text-[#1a3a2f]">{event.category}</p>
            </Card>
          </div>

          {/* Official Event Link */}
          {!isPast && (
            <div className="mb-20">
              <Card className="p-8 rounded-3xl border-0 shadow-lg bg-gradient-to-r from-[#1a3a2f] to-[#2d5a4a] text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#c9a96e]/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
                  <div>
                    <h3 className="font-serif text-2xl font-bold mb-2">Official Event Information</h3>
                    <p className="text-white/70">Find registration details, speaker lineup, and full agenda on the official event website.</p>
                  </div>
                  <Button asChild className="bg-white text-[#1a3a2f] hover:bg-[#f7f5f0] px-6 py-3 rounded-xl font-semibold shadow-lg shrink-0">
                    <Link href={`https://www.google.com/search?q=${encodeURIComponent(event.name + " 2026 official website")}`} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Find Official Site
                    </Link>
                  </Button>
                </div>
              </Card>
            </div>
          )}

          {/* Why Attend */}
          {!isPast && event.whyAttend?.length > 0 && (
            <div className="mb-20">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <p className="text-[#c9a96e] text-sm font-semibold uppercase tracking-widest mb-3">Why Attend</p>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1a3a2f] mb-4">
                  {event.shortName}
                </h2>
                <p className="text-gray-600 text-lg">
                  Beyond the conference sessions, here's what makes this event unmissable for safari-minded professionals.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                {event.whyAttend.map((reason, index) => (
                  <div key={index} className="flex items-start gap-5 p-7 rounded-2xl bg-white shadow-md hover:shadow-lg transition-all">
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-[#c9a96e]/10 flex items-center justify-center">
                      <Check className="h-6 w-6 text-[#c9a96e]" />
                    </div>
                    <p className="text-gray-700 leading-relaxed text-lg">{reason}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Experience Highlights */}
          {!isPast && event.experienceHighlights?.length > 0 && (
            <div className="mb-20">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <p className="text-[#c9a96e] text-sm font-semibold uppercase tracking-widest mb-3">The Experience</p>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1a3a2f] mb-4">
                  The AfriBay Difference
                </h2>
                <p className="text-gray-600 text-lg">
                  We don't just book your conference hotel — we transform your business trip into an unforgettable adventure.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {event.experienceHighlights.map((exp, index) => (
                  <ExperienceCard key={index} {...exp} />
                ))}
              </div>

              <div className="mt-12 rounded-3xl overflow-hidden bg-gradient-to-r from-[#1a3a2f] to-[#2d5a4a] p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative">
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#c9a96e]/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="relative">
                  <h3 className="font-serif text-3xl font-bold text-white mb-2">Ready to Plan Your Trip?</h3>
                  <p className="text-white/70 text-lg">From airport pickup to your bush dinner under the stars.</p>
                </div>
                <div className="relative flex flex-col sm:flex-row gap-4">
                  <Button asChild className="bg-[#c9a96e] hover:bg-[#b8985d] text-white px-8 py-4 rounded-xl text-base font-semibold shadow-lg">
                    <Link href="/booking">Book Consultation</Link>
                  </Button>
                  <Button asChild className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white hover:text-[#1a3a2f] px-8 py-4 rounded-xl text-base transition-all">
                    <Link href="/contact">Request Itinerary</Link>
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Hotels */}
          {eventHotels.length > 0 && (
            <div className="mb-20">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <p className="text-[#c9a96e] text-sm font-semibold uppercase tracking-widest mb-3">Stay</p>
                <h2 className="font-serif text-4xl font-bold text-[#1a3a2f] mb-4">
                  Recommended in {event.location}
                </h2>
                <p className="text-gray-600">
                  Hand-picked properties for {event.shortName} delegates. All bookings include AfriBay's 24/7 concierge.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {eventHotels.map((hotel, index) => (
                  <HotelCard key={index} hotel={hotel} />
                ))}
              </div>

              <div className="mt-10 text-center">
                <Button asChild className="bg-transparent border-2 border-[#1a3a2f] text-[#1a3a2f] hover:bg-[#1a3a2f] hover:text-white px-8 py-3 rounded-xl transition-all">
                  <Link href="/accommodations">
                    View All {event.location} Accommodations <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          )}

          {/* Logistics */}
          {!isPast && (
            <div className="mb-20">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <p className="text-[#c9a96e] text-sm font-semibold uppercase tracking-widest mb-3">Logistics</p>
                <h2 className="font-serif text-4xl font-bold text-[#1a3a2f] mb-4">
                  Seamless Transfers
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="p-10 rounded-3xl border-0 shadow-lg bg-white">
                  <h3 className="font-serif text-2xl font-bold text-[#1a3a2f] mb-8">What's Included</h3>
                  <ul className="space-y-6">
                    {[
                      { icon: Plane, text: "Airport fast-track & VIP lounge access" },
                      { icon: MapPin, text: "Daily chauffeured venue transfers" },
                      { icon: Plane, text: "Safari airstrip connections" },
                      { icon: Star, text: "Luggage storage while you safari" },
                    ].map(({ icon: Icon, text }, i) => (
                      <li key={i} className="flex items-center gap-5">
                        <div className="w-12 h-12 rounded-xl bg-[#c9a96e]/10 flex items-center justify-center shrink-0">
                          <Icon className="h-5 w-5 text-[#c9a96e]" />
                        </div>
                        <span className="text-gray-700 text-lg">{text}</span>
                      </li>
                    ))}
                  </ul>
                </Card>

                <Card className="p-10 rounded-3xl border-0 shadow-lg bg-gradient-to-br from-[#1a3a2f] to-[#2d5a4a] text-white flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#c9a96e]/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div className="relative">
                    <h3 className="font-serif text-2xl font-bold mb-3">Travelling as a Group?</h3>
                    <p className="text-white/70 leading-relaxed mb-8">
                      Corporate delegations of 5+ receive dedicated coordination. We handle schedules, rooming lists, and custom itineraries — so you focus on the event.
                    </p>
                  </div>
                  <div className="relative flex flex-col gap-3">
                    <Button asChild className="bg-white text-[#1a3a2f] hover:bg-[#f7f5f0] w-fit px-8 py-3 rounded-xl font-semibold">
                      <Link href="/contact">Get Group Quote</Link>
                    </Button>
                    <Button asChild variant="ghost" className="text-white/80 hover:text-white hover:bg-white/10 w-fit">
                      <Link href="/booking">Book Group Consultation</Link>
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          )}

          {/* Past Event Message */}
          {isPast && (
            <Card className="p-16 text-center rounded-3xl border-0 shadow-xl bg-white">
              <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-10 w-10 text-gray-400" />
              </div>
              <h2 className="font-serif text-4xl font-bold text-gray-600 mb-4">This Event Has Ended</h2>
              <p className="text-gray-500 max-w-xl mx-auto mb-8 text-lg">
                Thank you to all delegates who joined us. Explore our upcoming events or plan your next Kenya safari.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-[#1a3a2f] hover:bg-[#c9a96e] text-white px-8 py-6 rounded-xl">
                  <Link href="/events">View Upcoming Events</Link>
                </Button>
                <Button asChild size="lg" className="bg-transparent border-2 border-[#1a3a2f] text-[#1a3a2f] hover:bg-[#1a3a2f] hover:text-white px-8 py-6 rounded-xl transition-all">
                  <Link href="/booking">Plan Your Safari</Link>
                </Button>
              </div>
            </Card>
          )}
        </div>
      </section>

      {/* ─── NEXT EVENTS ─── */}
      {!isPast && (
        <section className="py-20 bg-[#1a3a2f]/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between mb-10">
              <div>
                <p className="text-[#c9a96e] text-sm font-semibold uppercase tracking-widest mb-2">Continue Exploring</p>
                <h2 className="font-serif text-4xl font-bold text-[#1a3a2f]">More Events</h2>
              </div>
              <Button asChild variant="ghost" className="text-[#c9a96e] hover:text-[#1a3a2f] hover:bg-[#c9a96e]/10">
                <Link href="/events">View All <ChevronRight className="ml-1 h-4 w-4" /></Link>
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {events
                .filter(e => e.slug !== event.slug && getEventStatus(e).status !== "past")
                .slice(0, 3)
                .map(evt => (
                  <Link key={evt.slug} href={`/events/${evt.slug}`} className="group">
                    <Card className="overflow-hidden rounded-2xl border-0 shadow-md bg-white hover:shadow-xl transition-all">
                      <div className="relative h-40 overflow-hidden">
                        <img src={evt.image} alt={evt.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-4 left-4 text-white">
                          <p className="text-xs font-medium opacity-80">{evt.location}</p>
                          <p className="font-semibold">{evt.shortName}</p>
                        </div>
                      </div>
                      <div className="p-5 flex items-center justify-between">
                        <p className="text-sm text-[#c9a96e] font-medium group-hover:text-[#1a3a2f] transition-colors">Explore Options</p>
                        <ArrowRight className="h-5 w-5 text-[#c9a96e] group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Card>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── FINAL CTA ─── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://worth.com/wp-content/uploads/2024/01/Sunset-Pool-Lengishu-%C2%A9-Backdrop-Agency-1-scaled.jpg"
            alt="Luxury safari"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a3a2f]/95 to-[#1a3a2f]/80" />
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center px-6">
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {isPast ? "Ready for Your Next Adventure?" : "Combine Business with Wonder"}
          </h2>
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            {isPast
              ? "Contact AfriBay Adventures to plan your 2027 Kenya safari experience."
              : "Contact AfriBay Adventures today. We'll handle every detail from airport pickup to bush dinner."}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-[#c9a96e] hover:bg-[#b8985d] text-white px-12 py-6 text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all font-semibold">
              <Link href="/contact">Request Custom Itinerary</Link>
            </Button>
            <Button asChild size="lg" className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white hover:text-[#1a3a2f] px-12 py-6 text-lg rounded-2xl transition-all">
              <Link href="/booking">Book Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}