export interface Destination {
  id: string
  name: string
  description: string
  image: string
  highlights: string[]
}

export interface Accommodation {
  id: string
  name: string
  type: "lodge" | "camp" | "hotel" | "resort"
  location: string
  destinationId: string
  rating: number
  pricePerNight: number
  image: string
  amenities: string[]
  description: string
}

export interface Vehicle {
  id: string
  name: string
  type: "land-cruiser" | "tour-van" | "executive-car"
  capacity: number
  pricePerDay: number
  image: string
  features: string[]
  description: string
}

export interface Package {
  id: string
  title: string
  category: "premium" | "luxury" | "mid-range"
  duration: string
  price: number
  image: string
  gallery: string[]
  description: string
  highlights: string[]
  itinerary: {
    day: number
    title: string
    description: string
    activities: string[]
  }[]
  includes: string[]
  excludes: string[]
  destinations: string[]
  accommodations: string[]
  difficulty: "easy" | "moderate" | "challenging"
  bestTime: string
  groupSize: {
    min: number
    max: number
  }
  seasonalPricing?: {
    seasons: {
      name: string
      startDate: string
      endDate: string
      basePrice: number
      transportCost: number
    }[]
  }
  pdfItinerary?: string
}

export interface Testimonial {
  id: string
  name: string
  country: string
  rating: number
  comment: string
  image?: string
  packageId?: string
}

export interface BookingFormData {
  personalDetails: {
    firstName: string
    lastName: string
    email: string
    phone: string
    countryCode: string
  }
  tripDetails: {
    arrivalDate: string
    departureDate: string
  }
  travelers: {
    adults: number
    children: number
    childAges: number[]
    rooms: number
  }
  preferences: {
    destinations: string[]
    accommodations: string[]
  }
  vehicles: {
    vehicleId: string
    quantity: number
  }[]
  specialRequests?: string
}

export interface CountryCode {
  code: string
  name: string
  dialCode: string
  flag: string
}
