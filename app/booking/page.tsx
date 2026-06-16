"use client"
import { Navigation } from "@/components/navigation"
import { BookingWizard } from "@/components/booking-wizard"

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-[#F2EFED]">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-8 bg-gradient-to-r from-[#2F3B2F] to-[#7FB5B5]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">Plan Your Safari Adventure</h1>
          <p className="text-xl text-white/90 leading-relaxed">
            Customize your perfect Kenyan safari experience with our easy booking wizard
          </p>
        </div>
      </section>

      {/* Booking Wizard */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <BookingWizard />
        </div>
      </section>
    </main>
  )
}
