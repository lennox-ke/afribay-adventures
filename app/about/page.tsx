import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Award,
  Users,
  Globe,
  Heart,
  Shield,
  Leaf,
  Star,
  Target,
  Eye,
  UserCheck,
  Quote,
  CheckCircle2,
} from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"
import PageTransition from "@/components/PageTransition"

const stats = [
  { icon: Award, label: "Years of Experience", value: "15+" },
  { icon: Users, label: "Happy Clients", value: "500+" },
  { icon: Globe, label: "Destinations Covered", value: "20+" },
  { icon: Heart, label: "Conservation Projects", value: "12" },
]

const values = [
  {
    icon: Shield,
    title: "Safety First",
    description:
      "Your safety is our top priority. We maintain the highest safety standards in all our operations.",
  },
  {
    icon: Leaf,
    title: "Conservation",
    description:
      "We're committed to protecting Kenya's wildlife and supporting conservation efforts through responsible tourism.",
  },
  {
    icon: UserCheck,
    title: "Community Support",
    description:
      "We work closely with local communities, ensuring tourism benefits everyone and preserves cultural heritage.",
  },
  {
    icon: Star,
    title: "Excellence",
    description: "We strive for excellence in every aspect of our service, from planning to execution.",
  },
]

const whyChoose = [
  {
    icon: CheckCircle2,
    color: "#E8A17D",
    title: "Local Expertise & Certified Guides",
    text: "Our Kenya Professional Safari Guides Association–certified guides bring decades of combined experience across Maasai Mara, Amboseli, Tsavo, and hidden gems off the beaten path.",
  },
  {
    icon: CheckCircle2,
    color: "#E8A17D",
    title: "Tailor-Made Itineraries",
    text: "From luxury lodge safaris to adventurous camping tours, every itinerary is custom-crafted to match your travel style, budget, and bucket-list sightings.",
  },
  {
    icon: CheckCircle2,
    color: "#7FB5B5",
    title: "Conservation & Community Impact",
    text: "A share of every booking funds anti-poaching patrols, habitat restoration, and community projects that empower local Maasai and Samburu villages.",
  },
  {
    icon: CheckCircle2,
    color: "#7FB5B5",
    title: "Transparent Pricing & 24/7 Support",
    text: "No hidden fees, guaranteed. Our Nairobi-based support team is on call around the clock to assist before, during, and after your safari.",
  },
]

export const metadata: Metadata = {
  title: "About Us | Afribay Adventures — Kenya Safari Specialists",
  description:
    "Discover the story behind Afribay Adventures, a Nairobi-based safari company offering tailor-made Kenya safaris, expert local guides, and conservation-focused travel. Plan your trip with confidence.",
  keywords:
    "about Afribay Adventures, Kenya safari company, safari experts Nairobi, wildlife conservation Kenya, sustainable tourism Kenya, certified safari guides Kenya, Maasai Mara safari operator",
  metadataBase: new URL("https://afribayke.com"),
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Afribay Adventures — Kenya Safari Specialists",
    description:
      "Tailor-made Kenya safaris led by certified local guides, with a genuine commitment to wildlife conservation and community impact.",
    url: "https://afribayke.com/about",
    siteName: "Afribay Adventures",
    images: [
      {
        url: "https://afribay.vercel.app/afribay-team-safari-experts.jpg",
        width: 1200,
        height: 630,
        alt: "Afribay Adventures safari guides and team in Kenya",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Afribay Adventures — Kenya Safari Specialists",
    description:
      "Tailor-made Kenya safaris led by certified local guides, with a genuine commitment to wildlife conservation and community impact.",
    images: ["https://afribay.vercel.app/afribay-team-safari-experts.jpg"],
  },
}

export default function AboutPage() {
  return (
    <PageTransition type="elegant" duration={600}>
      <main className="min-h-screen bg-[#F2EFED]">
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AboutPage",
              mainEntity: {
                "@type": "TravelAgency",
                "@id": "https://afribayke.com/#organization",
                name: "Afribay Adventures",
                url: "https://afribayke.com",
                description:
                  "Nairobi-based safari company offering tailor-made Kenya wildlife tours, accommodation bookings, and conservation-driven travel experiences.",
                areaServed: {
                  "@type": "Country",
                  name: "Kenya",
                },
                address: {
                  "@type": "PostalAddress",
                  addressCountry: "KE",
                  addressLocality: "Nairobi",
                },
                contactPoint: {
                  "@type": "ContactPoint",
                  telephone: "+254-708-777-037",
                  contactType: "customer service",
                  email: "adventure@afribayke.com",
                  availableLanguage: ["English", "Swahili"],
                },
                sameAs: [],
              },
            }),
          }}
        />

        <Navigation />

        {/* ── HERO ── */}
        <section aria-labelledby="about-hero-heading" className="relative pt-24 pb-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#2F3B2F] via-[#3a4e3a] to-[#7FB5B5]" />
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url('https://afribay.vercel.app/image1.jpg?height=600&width=1200&text=African+Landscape')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-[#2F3B2F]/40" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              <div>
                <p className="text-xs uppercase tracking-widest font-semibold text-[#E8A17D] mb-4">Our Story</p>
                <h1
                  id="about-hero-heading"
                  className="font-serif text-5xl md:text-7xl font-bold text-white leading-[1.05] mb-6"
                >
                  Born from
                  <span className="block text-[#E8A17D]">the Wild.</span>
                </h1>
                <p className="text-lg text-white/80 mb-10 leading-relaxed max-w-lg">
                  Afribay Adventures crafts tailor-made Kenya safaris that connect travelers with the heart and soul
                  of the wild — backed by certified local guides and a genuine commitment to conservation.
                </p>

                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-5">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-5 text-center hover:bg-white/15 transition-colors duration-300"
                    >
                      <stat.icon className="h-6 w-6 text-[#E8A17D] mx-auto mb-2" />
                      <div className="text-3xl font-bold text-white mb-0.5">{stat.value}</div>
                      <div className="text-xs text-white/60 uppercase tracking-wider">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-10 flex flex-wrap gap-3">
                  <Button
                    asChild
                    size="lg"
                    className="bg-[#E8A17D] hover:bg-[#7FB5B5] text-white rounded-xl px-7 transition-colors duration-300"
                  >
                    <Link href="/contact">Plan My Safari</Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-white/40 text-white hover:bg-white hover:text-[#2F3B2F] rounded-xl px-7 bg-transparent transition-all duration-300"
                  >
                    <Link href="/packages">View Packages</Link>
                  </Button>
                </div>
              </div>

              <div className="relative">
                <img
                  src="https://afribay.vercel.app/image5.jpg?height=500&width=600&text=Safari+Team"
                  alt="Afribay Adventures safari guide team preparing for a Kenya game drive"
                  className="w-full h-[420px] object-cover rounded-2xl shadow-2xl"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2F3B2F]/30 to-transparent rounded-2xl" />
                <div className="absolute -bottom-6 -left-6 hidden md:block bg-white rounded-2xl shadow-xl p-5 max-w-xs">
                  <div className="flex items-start gap-3">
                    <Quote className="h-6 w-6 text-[#E8A17D] shrink-0" />
                    <p className="text-sm text-stone-600 leading-relaxed">
                      "Every itinerary we build is rooted in real local knowledge — not a template."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── MISSION / VISION / VALUES ── */}
        <section aria-labelledby="mvv-heading" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-xs uppercase tracking-widest text-[#7FB5B5] font-semibold text-center mb-3">
              What We Stand For
            </p>
            <h2 id="mvv-heading" className="font-serif text-4xl font-bold text-[#2F3B2F] text-center mb-12">
              Mission, Vision & Values
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Target,
                  color: "#E8A17D",
                  title: "Our Mission",
                  text: "To create transformative safari experiences that inspire conservation, support local communities, and forge lasting connections between travelers and Kenya's incredible wildlife.",
                },
                {
                  icon: Eye,
                  color: "#7FB5B5",
                  title: "Our Vision",
                  text: "To be East Africa's leading sustainable safari operator, recognized for exceptional service, conservation leadership, and positive community impact.",
                },
                {
                  icon: Heart,
                  color: "#E8A17D",
                  title: "Our Values",
                  text: "Integrity, sustainability, excellence, and respect for wildlife, culture, and the environment guide everything we do.",
                },
              ].map(({ icon: Icon, color, title, text }) => (
                <Card
                  key={title}
                  className="border-0 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="p-8 text-center">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5"
                      style={{ backgroundColor: `${color}20` }}
                    >
                      <Icon className="h-7 w-7" style={{ color }} />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-[#2F3B2F] mb-4">{title}</h3>
                    <p className="text-stone-500 leading-relaxed text-sm">{text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHAT DRIVES US ── */}
        <section aria-labelledby="drives-heading" className="py-20 bg-[#F2EFED]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-xs uppercase tracking-widest text-[#7FB5B5] font-semibold mb-3">Core Principles</p>
              <h2 id="drives-heading" className="font-serif text-4xl font-bold text-[#2F3B2F] mb-4">
                What Drives Us
              </h2>
              <p className="text-stone-500 max-w-2xl mx-auto text-base leading-relaxed">
                Our core values shape every decision we make and every experience we create
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-7 text-center shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group border border-stone-100"
                >
                  <div className="w-14 h-14 mx-auto mb-5 bg-[#E8A17D] rounded-2xl flex items-center justify-center group-hover:bg-[#7FB5B5] transition-colors duration-300">
                    <value.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-[#2F3B2F] mb-3">{value.title}</h3>
                  <p className="text-stone-500 leading-relaxed text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY CHOOSE AFRIBAY ── */}
        <section aria-labelledby="why-heading" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <p className="text-xs uppercase tracking-widest text-[#7FB5B5] font-semibold mb-3">
                The Afribay Difference
              </p>
              <h2 id="why-heading" className="font-serif text-4xl font-bold text-[#2F3B2F] mb-4">
                Why Travelers Choose Afribay Adventures
              </h2>
              <p className="text-stone-500 max-w-3xl mx-auto text-base leading-relaxed">
                A few reasons travelers consistently trust us to plan their Kenya safari.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {whyChoose.map(({ icon: Icon, color, title, text }) => (
                <div
                  key={title}
                  className="flex gap-4 p-6 rounded-2xl border border-stone-100 hover:border-[#7FB5B5]/40 hover:shadow-md transition-all duration-300"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${color}20` }}
                  >
                    <Icon className="h-5 w-5" style={{ color }} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-[#2F3B2F] mb-2">{title}</h3>
                    <p className="text-stone-500 leading-relaxed text-sm">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONSERVATION & COMMUNITY ── */}
        <section aria-labelledby="conservation-heading" className="py-20 bg-[#F2EFED]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              <div>
                <p className="text-xs uppercase tracking-widest text-[#7FB5B5] font-semibold mb-3">Our Commitment</p>
                <h2
                  id="conservation-heading"
                  className="font-serif text-4xl font-bold text-[#2F3B2F] mb-6 leading-snug"
                >
                  Conservation &
                  <span className="block text-[#E8A17D]">Community.</span>
                </h2>
                <p className="text-stone-500 mb-8 leading-relaxed">
                  We believe tourism should benefit both wildlife and local communities. That's why we partner with
                  conservation organizations and invest in community development projects.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    { icon: Leaf, text: "Proceeds support wildlife conservation initiatives" },
                    { icon: Users, text: "Supporting local community projects" },
                    { icon: Shield, text: "Contributing to anti-poaching initiatives" },
                    { icon: Globe, text: "Working toward carbon-conscious safari operations" },
                  ].map(({ icon: Icon, text }) => (
                    <div key={text} className="flex items-center gap-3">
                      <div className="w-9 h-9 bg-[#E8A17D]/15 rounded-xl flex items-center justify-center shrink-0">
                        <Icon className="h-4 w-4 text-[#E8A17D]" />
                      </div>
                      <span className="text-stone-600 text-sm">{text}</span>
                    </div>
                  ))}
                </div>
                <Button
                  asChild
                  className="bg-[#E8A17D] hover:bg-[#7FB5B5] text-white rounded-xl px-7 transition-colors duration-300"
                >
                  <Link href="/contact">Learn More</Link>
                </Button>
              </div>

              <div className="relative">
                <img
                  src="https://afribay.vercel.app/nairobi-3.jpg?height=500&width=600&text=Conservation+Efforts"
                  alt="Wildlife conservation and community initiative in Kenya supported by Afribay Adventures"
                  className="w-full h-[420px] object-cover rounded-2xl shadow-xl"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2F3B2F]/20 to-transparent rounded-2xl" />
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section aria-labelledby="about-cta-heading" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#E8A17D] to-[#7FB5B5]" />
          <div
            className="absolute inset-0 opacity-10"
            style={{ backgroundImage: `radial-gradient(circle at 30% 50%, white 0%, transparent 60%)` }}
          />
          <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 id="about-cta-heading" className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Join Our Story?
            </h2>
            <p className="text-xl text-white/85 mb-10 max-w-2xl mx-auto leading-relaxed">
              Become part of the Afribay Adventures family and create your own unforgettable chapter in Kenya's wild
              heart. Talk to our team today and let's start planning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-[#2F3B2F] hover:bg-[#F2EFED] font-semibold px-8 rounded-xl transition-all duration-300"
              >
                <Link href="/packages">Explore Safaris</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-[#2F3B2F] font-semibold px-8 rounded-xl transition-all duration-300 bg-transparent"
              >
                <Link href="/contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  )
}