const certifications = [
  {
    name: "TripAdvisor",
    logo: "https://afribay.vercel.app/tripadvisor-logo.png",
    description: "Certificate of Excellence",
  },
  /*{
    name: "Eco Tourism",
    logo: "https://afribay.vercel.app/eco-tourism-kenya-logo.png",
    description: "Certified Eco-Tourism Operator",
  },*/
  {
    name: "Wildlife Conservation",
    logo: "https://afribay.vercel.app/kenya-wildlife-service-logo.png",
    description: "Wildlife Conservation Partner",
  },
  {
    name: "Afribay Adventures",
    logo: "https://afribay.vercel.app/tra.jpg",
    description: "Licensed Tour Operator",
  },
  {
    name: "Afribay Adventures",
    logo: "https://afribay.vercel.app/thumbnail_image001.png",
    description: "Travel Insuarance Partner",
  },
]

export function Certifications() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-[#2F3B2F] mb-4">Trusted & Certified</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="text-center group grid grid-rows-[auto_1fr] items-end">
              <img
                src={cert.logo || "/placeholder.svg"}
                alt={cert.name}
                className={`mx-auto opacity-70 group-hover:opacity-100 transition-opacity duration-300 ${
                  cert.description === "Travel Insuarance Partner" ? "h-10" : "h-16"
                }`}
              />
              <p className="text-sm text-gray-600 mt-2">
                {cert.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}