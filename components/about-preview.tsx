import { Button } from "@/components/ui/button"
import { Award, Users } from "lucide-react"
import Link from "next/link"

export function AboutPreview() {
  return (
    <section className="py-16 bg-[#F2EFED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left Image */}
          <div className="lg:col-span-1">
            <img
              src="https://afribay.vercel.app/masai-mara-1.jpg"
              alt="Safari Guide"
              className="w-full h-80 object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Center Content */}
          <div className="lg:col-span-1 text-center">
            <div className="w-16 h-1 bg-[#E8A17D] mx-auto mb-6"></div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2F3B2F] mb-6">About Afribay Adventures</h2>

            <div className="flex justify-center space-x-8 mb-6">
              <div className="flex items-center space-x-2">
                <Award className="h-6 w-6 text-[#E8A17D]" />
                <span className="text-[#2F3B2F] font-semibold">5+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-6 w-6 text-[#7FB5B5]" />
                <span className="text-[#2F3B2F] font-semibold">100+ Happy Clients</span>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed mb-8">
              For over 5 years, Afribay Adventures has been crafting unforgettable safari experiences in Kenya. Our
              passion for wildlife conservation and authentic cultural encounters drives us to create journeys that
              transform lives and create lasting memories.
            </p>

            <Button asChild className="bg-[#2F3B2F] hover:bg-[#E8A17D] text-white transition-colors duration-300">
              <Link href="/about">More About Us</Link>
            </Button>

            {/* Team Avatars */}
            <div className="flex justify-center space-x-2 mt-8">
              {[].map((i) => (
                <div
                  key={i}
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-[#E8A17D] to-[#7FB5B5] flex items-center justify-center text-white font-semibold"
                >
                  T{i}
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-1">
            <img
              src="https://afribay.vercel.app/amboseli-3.jpg"
              alt="Wildlife"
              className="w-full h-80 object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
