"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

const features = [
  {
    id: 1,
    title: "Great Migration Safari",
    image: "https://afribay.vercel.app/angama-mara-1.jpg",
    tags: ["Wildlife", "Migration", "Big Five"],
    description: "Witness one of nature's most spectacular events",
  },
  {
    id: 2,
    title: "Mount Kilimanjaro Views",
    image: "https://afribay.vercel.app/amboseli-1.jpg",
    tags: ["Scenic", "Photography", "Elephants"],
    description: "Breathtaking views of Africa's highest peak",
  },
  {
    id: 3,
    title: "Cultural Experiences",
    image: "https://afribay.vercel.app/amboseli-9.jpg",
    tags: ["Culture", "Traditions", "Community"],
    description: "Immerse yourself in authentic African culture",
  },
  {
    id: 4,
    title: "Beach & Safari Combo",
    image: "https://afribay.vercel.app/zanzibar-3.jpg",
    tags: ["Beach", "Relaxation", "Adventure"],
    description: "Perfect blend of adventure and relaxation",
  },
]

export function FeatureCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % features.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % features.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + features.length) % features.length)
  }

  return (
    <section className="py-16 bg-[#F2EFED]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative h-[500px] rounded-2xl overflow-hidden">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
                index === currentSlide
                  ? "translate-x-0"
                  : index < currentSlide
                    ? "-translate-x-full"
                    : "translate-x-full"
              }`}
            >
              <div
                className="w-full h-full bg-cover bg-center relative"
                style={{ backgroundImage: `url(${feature.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {feature.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-[#E8A17D] rounded-full text-sm font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-serif text-3xl md:text-4xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-lg mb-6 max-w-2xl">{feature.description}</p>
                  <Button asChild className="bg-[#7FB5B5] hover:bg-[#E8A17D] text-white transition-colors duration-300">
                    <Link href="/packages">Explore More</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}

          {/* Navigation arrows */}
          <Button
            variant="ghost"
            size="sm"
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20 z-10"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20 z-10"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Dot indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentSlide ? "bg-[#E8A17D]" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
