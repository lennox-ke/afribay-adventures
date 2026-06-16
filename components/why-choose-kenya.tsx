import { Sun, Camera, Coffee, Utensils } from "lucide-react"

const reasons = [
  {
    icon: Sun,
    title: "Perfect Climate",
    description: "Year-round sunshine and ideal weather for safari adventures",
  },
  {
    icon: Camera,
    title: "Incredible Wildlife",
    description: "Home to the Big Five and the spectacular Great Migration",
  },
  {
    icon: Coffee,
    title: "Rich Culture",
    description: "Experience authentic African traditions and warm hospitality",
  },
  {
    icon: Utensils,
    title: "Amazing Cuisine",
    description: "Savor delicious local flavors and international cuisine",
  },
]

export function WhyChooseKenya() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2F3B2F] mb-4">Why Choose Kenya?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover what makes Kenya the ultimate safari destination
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-[#E8A17D] rounded-full flex items-center justify-center group-hover:bg-[#7FB5B5] transition-colors duration-300">
                <reason.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#2F3B2F] mb-2">{reason.title}</h3>
              <p className="text-gray-600 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
