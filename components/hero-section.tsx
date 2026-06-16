"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover">
          <source src="https://afribay.vercel.app/video.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay for text contrast */}
        <div className="absolute inset-0 bg-[#2F3B2F]/60"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="font-serif text-5xl md:text-8xl font-bold mb-6 animate-fade-in-up">Welcome to Kenya</h1>
        <p className="text-2xl md:text-5xl text-bold mb-7 text-[#E8A17D] animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          The Heart of African Safari
        </p>
        <p
          className="text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          Experience the magic of Kenya with luxury safari adventures, breathtaking wildlife encounters, and
          unforgettable cultural experiences in the heart of Africa.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-[#E8A17D] to-[#7FB5B5] hover:from-[#7FB5B5] hover:to-[#E8A17D] text-white font-semibold px-8 py-3 transition-all duration-500 transform hover:scale-105"
          >
            <Link href="/packages">Explore Packages</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-[#2F3B2F] font-semibold px-8 py-3 transition-all duration-300 bg-transparent"
          >
            <Link href="/booking">Plan Your Safari</Link>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
