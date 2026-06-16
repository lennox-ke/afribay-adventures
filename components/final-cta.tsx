import { Button } from "@/components/ui/button"
import Link from "next/link"

export function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#E8A17D] to-[#7FB5B5] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url('/placeholder.svg?height=600&width=1200')`,
        }}
      ></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">Ready for Your African Adventure?</h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Join thousands of travelers who have discovered the magic of Kenya with Afribay Adventures. Your unforgettable
          safari experience awaits.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-white text-[#2F3B2F] hover:bg-[#F2EFED] font-semibold px-8 py-3 transition-all duration-300 transform hover:scale-105"
          >
            <Link href="/booking">Start Planning Now</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-[#2F3B2F] font-semibold px-8 py-3 transition-all duration-300 bg-transparent"
          >
            <Link href="/contact">Get In Touch</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
