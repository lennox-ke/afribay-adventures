import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Compass, MapPin, ArrowRight } from "lucide-react"

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#F2EFED]">
      <Navigation />

      <section className="flex items-center justify-center min-h-[90vh] px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Decorative background blobs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-[#7FB5B5]/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-[#E8A17D]/10 blur-3xl pointer-events-none" />

        <div className="relative max-w-2xl mx-auto text-center">
          {/* Icon */}
          <div className="flex items-center justify-center mb-8">
            <div className="w-24 h-24 rounded-full bg-[#2F3B2F] flex items-center justify-center shadow-xl">
              <Compass className="h-10 w-10 text-[#E8A17D] animate-spin-slow" />
            </div>
          </div>

          {/* 404 label */}
          <p className="text-xs uppercase tracking-widest font-semibold text-[#7FB5B5] mb-4">
            Error 404
          </p>

          <h1 className="font-serif text-5xl md:text-7xl font-bold text-[#2F3B2F] mb-6 leading-tight">
            Lost in the
            <span className="block text-[#E8A17D]">Wilderness?</span>
          </h1>

          <p className="text-base text-stone-500 mb-4 leading-relaxed max-w-md mx-auto">
            Even the best trackers lose the trail sometimes. The page you're looking for has wandered off — but there
            are plenty of incredible adventures still ahead.
          </p>

          {/* Suggested links */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-stone-400 mb-10">
            {[
              { label: "Masai Mara", href: "/destinations/masai-mara" },
              { label: "Amboseli", href: "/destinations/amboseli" },
              { label: "Safari Packages", href: "/packages" },
              { label: "Special Offers", href: "/offers" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-1 bg-white border border-stone-200 hover:border-[#7FB5B5] hover:text-[#7FB5B5] px-3 py-1.5 rounded-full transition-colors duration-200"
              >
                <MapPin className="h-3 w-3" />
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-[#E8A17D] hover:bg-[#7FB5B5] text-white rounded-xl px-8 transition-colors duration-300"
            >
              <Link href="/packages">
                Browse Safaris
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-[#2F3B2F] text-[#2F3B2F] hover:bg-[#2F3B2F] hover:text-white bg-transparent rounded-xl px-8 transition-colors duration-300"
            >
              <Link href="/">Go Home</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}