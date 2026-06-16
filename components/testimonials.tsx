import { Star } from "lucide-react"
import { testimonials } from "@/lib/data"

export function Testimonials() {
  const featuredTestimonials = testimonials.slice(0, 3)

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2F3B2F] mb-4">What Our Guests Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real experiences from travelers who have journeyed with us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-[#F2EFED] rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#E8A17D] to-[#7FB5B5] rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-[#2F3B2F]">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.country}</p>
                </div>
              </div>

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <blockquote className="text-gray-700 italic leading-relaxed">"{testimonial.comment}"</blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
