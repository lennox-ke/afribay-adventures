import type { Destination, Accommodation, Vehicle, Package, Testimonial, CountryCode } from "./types"

export const destinations: Destination[] = [
  {
    id: "masai-mara",
    name: "Masai Mara National Reserve",
    description: "World-famous for the Great Migration and abundant wildlife",
    image: "https://afribay.vercel.app/masai-mara.jpg",
    highlights: ["Great Migration", "Big Five", "Masai Culture", "Hot Air Balloon Safaris"],
    galleryImages: ["https://afribay.vercel.app/masai-mara-1.jpg", "https://afribay.vercel.app/masai-mara-2.jpg", "https://afribay.vercel.app/masai-mara-3.jpg", "https://afribay.vercel.app/masai-mara-4.jpg", "https://afribay.vercel.app/masai-mara-5.jpg", "https://afribay.vercel.app/masai-mara-6.jpg"],
  },
  {
    id: "amboseli",
    name: "Amboseli National Park",
    description: "Spectacular views of Mount Kilimanjaro and large elephant herds",
    image: "https://afribay.vercel.app/amboseli.jpg",
    highlights: ["Mount Kilimanjaro Views", "Elephant Herds", "Swamp Wildlife", "Maasai Villages"],
    galleryImages: ["https://afribay.vercel.app/amboseli-1.jpg", "https://afribay.vercel.app/amboseli-2.jpg", "https://afribay.vercel.app/amboseli-3.jpg", "https://afribay.vercel.app/amboseli-4.jpg", "https://afribay.vercel.app/amboseli-5.jpg", "https://afribay.vercel.app/amboseli-6.jpg"],
  },
  {
    id: "tsavo",
    name: "Tsavo National Parks",
    description: "Kenya's largest national park with diverse landscapes and wildlife",
    image: "https://afribay.vercel.app/tsavo-5.jpg",
    highlights: ["Red Elephants", "Mzima Springs", "Lugard Falls", "Diverse Landscapes"],
    galleryImages: ["https://afribay.vercel.app/tsavo-1.jpg", "https://afribay.vercel.app/tsavo-2.jpg", "https://afribay.vercel.app/tsavo-3.jpg", "https://afribay.vercel.app/tsavo-4.jpg", "https://afribay.vercel.app/tsavo-5.jpg", "https://afribay.vercel.app/tsavo-6.jpg"],
  },
  {
    id: "samburu",
    name: "Samburu National Reserve",
    description: "Unique wildlife and stunning semi-arid landscapes",
    image: "https://afribay.vercel.app/samburu-1.jpg",
    highlights: ["Special Five", "Ewaso Nyiro River", "Samburu Culture", "Unique Wildlife"],
    galleryImages: ["https://afribay.vercel.app/samburu-7.jpg", "https://afribay.vercel.app/samburu-2.jpg", "https://afribay.vercel.app/samburu-3.jpg", "https://afribay.vercel.app/samburu-4.jpg", "https://afribay.vercel.app/samburu-5.jpg", "https://afribay.vercel.app/samburu-6.jpg"],
  },
  {
    id: "lake-nakuru",
    name: "Lake Nakuru National Park",
    description: "Famous for flamingos and rhino sanctuary",
    image: "https://afribay.vercel.app/nakur.jpg",
    highlights: ["Flamingo Flocks", "Rhino Sanctuary", "Baboon Cliff", "Bird Watching"],
    galleryImages: ["https://afribay.vercel.app/nakuru-1.jpg", "https://afribay.vercel.app/nakuru-2.jpg", "https://afribay.vercel.app/nakuru-3.jpg", "https://afribay.vercel.app/nakuru-4.jpg", "https://afribay.vercel.app/nakuru-5.jpg", "https://afribay.vercel.app/nakuru-6.jpg"],
  },
  {
    id: "diani-beach",
    name: "Diani Beach",
    description: "Pristine white sand beaches and crystal clear waters",
    image: "https://afribay.vercel.app/diani.jpg",
    highlights: ["White Sand Beaches", "Water Sports", "Coral Reefs", "Beach Resorts"],
    galleryImages: ["https://afribay.vercel.app/diani-1.jpg", "https://afribay.vercel.app/diani-2.jpg", "https://afribay.vercel.app/diani-3.jpg", "https://afribay.vercel.app/diani-4.jpg", "https://afribay.vercel.app/diani-5.jpg", "https://afribay.vercel.app/diani-6.jpg"],
  },
  {
    id: "mombasa",
    name: "Mombasa",
    description: "Historic coastal city with rich Swahili culture, ancient architecture, and beautiful beaches",
    image: "https://afribay.vercel.app/mombasa.jpg",
    highlights: ["Fort Jesus", "Old Town", "Swahili Culture", "Spice Markets", "Indian Ocean Beaches"],
  galleryImages: ["https://afribay.vercel.app/mombasa-1.jpg", "https://afribay.vercel.app/mombasa-2.jpg", "https://afribay.vercel.app/mombasa-3.jpg", "https://afribay.vercel.app/mombasa-4.jpg", "https://afribay.vercel.app/mombasa-5.jpg", "https://afribay.vercel.app/mombasa-6.jpg"],
  },
  {
    id: "zanzibar",
    name: "Zanzibar",
    description: "Exotic spice island with pristine beaches, Stone Town heritage, and vibrant culture",
    image: "https://afribay.vercel.app/zanzibar.jpg",
    highlights: ["Stone Town UNESCO Site", "Spice Tours", "Pristine Beaches", "Dhow Sailing", "Jozani Forest"],
    galleryImages: ["https://afribay.vercel.app/zanzibar-1.jpg", "https://afribay.vercel.app/zanzibar-2.jpg", "https://afribay.vercel.app/zanzibar-3.jpg", "https://afribay.vercel.app/zanzibar-4.jpg", "https://afribay.vercel.app/zanzibar-5.jpg", "https://afribay.vercel.app/zanzibar-6.jpg"],
  },
  {
    id: "lamu",
    name: "Lamu Island",
    description: "UNESCO World Heritage site with preserved Swahili architecture and traditional dhow culture",
    image: "https://afribay.vercel.app/lamu.jpg",
    highlights: [
      "UNESCO Heritage Site",
      "Dhow Sailing",
      "Swahili Architecture",
      "Donkey Transport",
      "Cultural Festivals",
    ],
    galleryImages: ["https://afribay.vercel.app/lamu-1.jpg", "https://afribay.vercel.app/lamu-2.jpg", "https://afribay.vercel.app/lamu-3.jpg", "https://afribay.vercel.app/lamu-4.jpg", "https://afribay.vercel.app/lamu-5.jpg", "https://afribay.vercel.app/lamu-6.jpg"],
  },
  {
    id: "malindi",
    name: "Malindi",
    description: "Historic coastal town with beautiful beaches, marine parks, and rich Portuguese heritage",
    image: "https://afribay.vercel.app/malindi.jpg",
    highlights: ["Marine National Park", "Vasco da Gama Pillar", "Golden Beaches", "Deep Sea Fishing", "Gedi Ruins"],
    galleryImages: ["https://afribay.vercel.app/malindi-1.jpg", "https://afribay.vercel.app/malindi-2.jpg", "https://afribay.vercel.app/malindi-3.jpg", "https://afribay.vercel.app/malindi-4.jpg", "https://afribay.vercel.app/malindi-5.jpg", "https://afribay.vercel.app/malindi-6.jpg"],
  },
  {
    id: "watamu",
    name: "Watamu",
    description: "Pristine marine paradise with coral reefs, sea turtles, and world-class diving",
    image: "https://afribay.vercel.app/watamu.jpg",
    highlights: ["Marine National Park", "Turtle Nesting", "Coral Reefs", "Snorkeling", "Bio-Ken Snake Farm"],
    galleryImages: ["https://afribay.vercel.app/watamu-1.jpg", "https://afribay.vercel.app/watamu-2.jpg", "https://afribay.vercel.app/watamu-3.jpg", "https://afribay.vercel.app/watamu-4.jpg", "https://afribay.vercel.app/watamu-5.jpg", "https://afribay.vercel.app/watamu-6.jpg"],
  },
  {
    id: "mt-kenya",
    name: "Mount Kenya",
    description: "Africa's second highest peak with diverse ecosystems, glacial lakes, and challenging climbs",
    image: "https://afribay.vercel.app/mount-kenya.jpg",
    highlights: ["Point Lenana Summit", "Alpine Lakes", "Unique Flora", "Rock Climbing", "Diverse Wildlife"],
    galleryImages: ["https://afribay.vercel.app/mount-kenya-1.jpg", "https://afribay.vercel.app/mount-kenya-2.jpg", "https://afribay.vercel.app/mount-kenya-3.jpg", "https://afribay.vercel.app/mount-kenya-4.jpg", "https://afribay.vercel.app/mount-kenya-5.jpg", "https://afribay.vercel.app/mount-kenya-6.jpg"],
  },
  {
    id: "naivasha",
    name: "Lake Naivasha",
    description: "Freshwater lake surrounded by acacia forests, hippos, and diverse birdlife",
    image: "https://afribay.vercel.app/naivasha.jpg",
    highlights: [
      "Hippo Watching",
      "Boat Safaris",
      "Crescent Island",
      "Hell's Gate National Park",
      "Geothermal Springs",
    ],
    galleryImages: ["https://afribay.vercel.app/naivasha-1.jpg", "https://afribay.vercel.app/naivasha-2.jpg", "https://afribay.vercel.app/naivasha-3.jpg", "https://afribay.vercel.app/naivasha-4.jpg", "https://afribay.vercel.app/naivasha-5.jpg", "https://afribay.vercel.app/naivasha-6.jpg"],
  },
]

export const accommodations: Accommodation[] = [
  // Masai Mara accommodations
  {
    id: "ilkeliani-camp",
    name: "Ilkeliani Camp",
    type: "camp",
    location: "Masai Mara",
    destinationId: "masai-mara",
    rating: 4.6,
    pricePerNight: 420,
    image: "https://afribay.vercel.app/ilkeli.jpg",
    amenities: ["Luxury Tents", "Game Drives", "Cultural Visits", "Bush Dining", "Spa Services"],
    description: "Luxury tented camp offering authentic safari experience in the heart of Masai Mara",
    galleryImages: ["https://afribay.vercel.app/ilkeliani-1.jpg", "https://afribay.vercel.app/ilkeliani-2.jpg", "https://afribay.vercel.app/ilkeliani-3.jpg", "https://afribay.vercel.app/ilkeliani-4.jpg", "https://afribay.vercel.app/ilkeliani-5.jpg", "https://afribay.vercel.app/ilkeliani-6.jpg", "https://afribay.vercel.app/ilkeliani-7.jpg", "https://afribay.vercel.app/ilkeliani-8.jpg", "https://afribay.vercel.app/ilkeliani-9.jpg"],
  },
  {
    id: "governors-camp",
    name: "Governors' Camp",
    type: "camp",
    location: "Masai Mara",
    destinationId: "masai-mara",
    rating: 4.7,
    pricePerNight: 480,
    image: "https://afribay.vercel.app/governor.jpg",
    amenities: ["Riverside Location", "Luxury Tents", "Hot Air Balloon", "Game Drives", "Fine Dining"],
    description: "Historic luxury camp on the banks of the Mara River with exceptional wildlife viewing",
    galleryImages: ["https://afribay.vercel.app/governors-1.jpg", "https://afribay.vercel.app/governors-2.jpg", "https://afribay.vercel.app/governors-3.jpg", "https://afribay.vercel.app/governors-4.jpg", "https://afribay.vercel.app/governors-5.jpg", "https://afribay.vercel.app/governors-6.jpg", "https://afribay.vercel.app/governors-7.jpg", "https://afribay.vercel.app/governors-8.jpg", "https://afribay.vercel.app/governors-9.jpg"],
  },
  {
    id: "jw-marriott-masai-mara",
    name: "JW Marriott Masai Mara Lodge",
    type: "lodge",
    location: "Masai Mara",
    destinationId: "masai-mara",
    rating: 4.8,
    pricePerNight: 650,
    image: "https://afribay.vercel.app/marriott.jpg",
    amenities: ["Luxury Suites", "Spa", "Multiple Restaurants", "Pool", "Cultural Center"],
    description: "Ultra-luxury lodge offering world-class amenities and unparalleled safari experiences",
    galleryImages: ["https://afribay.vercel.app/marriott-1.jpg", "https://afribay.vercel.app/marriott-2.jpg", "https://afribay.vercel.app/marriott-3.jpg", "https://afribay.vercel.app/marriott-4.jpg", "https://afribay.vercel.app/marriott-5.jpg", "https://afribay.vercel.app/marriott-6.jpg", "https://afribay.vercel.app/marriott-7.jpg", "https://afribay.vercel.app/marriott-8.jpg", "https://afribay.vercel.app/marriott-9.jpg"],
  },
  {
    id: "tipilikwani-mara-camp",
    name: "Tipilikwani Mara Camp",
    type: "camp",
    location: "Masai Mara",
    destinationId: "masai-mara",
    rating: 4.4,
    pricePerNight: 380,
    image: "https://afribay.vercel.app/tipilikwani.jpg",
    amenities: ["Tented Accommodation", "River Views", "Game Drives", "Cultural Activities", "Bush Meals"],
    description: "Authentic tented camp with stunning river views and excellent wildlife access",
    galleryImages: ["https://afribay.vercel.app/tipilikwani-1.jpg", "https://afribay.vercel.app/tipilikwani-2.jpg", "https://afribay.vercel.app/tipilikwani-3.jpg", "https://afribay.vercel.app/tipilikwani-4.jpg", "https://afribay.vercel.app/tipilikwani-5.jpg", "https://afribay.vercel.app/tipilikwani-6.jpg", "https://afribay.vercel.app/tipilikwani-7.jpg", "https://afribay.vercel.app/tipilikwani-8.jpg", "https://afribay.vercel.app/tipilikwani-9.jpg"],
  },
  {
    id: "mara-ngenche-camp",
    name: "Mara Ngenche Camp",
    type: "camp",
    location: "Masai Mara",
    destinationId: "masai-mara",
    rating: 4.3,
    pricePerNight: 350,
    image: "https://afribay.vercel.app/ngenche.jpg",
    amenities: ["Safari Tents", "Game Drives", "Cultural Visits", "Bush Dining", "Campfire Evenings"],
    description: "Traditional safari camp offering authentic Masai Mara wilderness experience",
    galleryImages: ["https://afribay.vercel.app/ngenche-1.jpg", "https://afribay.vercel.app/ngenche-2.jpg", "https://afribay.vercel.app/ngenche-3.jpg", "https://afribay.vercel.app/ngenche-4.jpg", "https://afribay.vercel.app/ngenche-5.jpg", "https://afribay.vercel.app/ngenche-6.jpg", "https://afribay.vercel.app/ngenche-7.jpg", "https://afribay.vercel.app/ngenche-8.jpg", "https://afribay.vercel.app/ngenche-9.jpg"],
  },

  // Samburu accommodations
  {
    id: "elephant-bedroom-camp",
    name: "Elephant Bedroom Camp",
    type: "camp",
    location: "Samburu",
    destinationId: "samburu",
    rating: 4.5,
    pricePerNight: 420,
    image: "https://afribay.vercel.app/elephant.jpg",
    amenities: ["Luxury Tents", "River Views", "Spa", "Cultural Activities", "Game Drives"],
    description: "Luxury tented camp on the banks of Ewaso Nyiro River with exceptional elephant viewing",
    galleryImages: ["https://afribay.vercel.app/elephant-1.jpg", "https://afribay.vercel.app/elephant-2.jpg", "https://afribay.vercel.app/elephant-3.jpg", "https://afribay.vercel.app/elephant-4.jpg", "https://afribay.vercel.app/elephant-5.jpg", "https://afribay.vercel.app/elephant-6.jpg", "https://afribay.vercel.app/elephant-7.jpg", "https://afribay.vercel.app/elephant-8.jpg", "https://afribay.vercel.app/elephant-9.jpg"],
  },
  {
    id: "ashnil-samburu-camp",
    name: "Ashnil Samburu Camp",
    type: "camp",
    location: "Samburu",
    destinationId: "samburu",
    rating: 4.3,
    pricePerNight: 320,
    image: "https://afribay.vercel.app/ashnil.jpg",
    amenities: ["Tented Accommodation", "Pool", "Restaurant", "Game Drives", "Cultural Shows"],
    description: "Comfortable tented camp offering great value and authentic Samburu experience",
    galleryImages: ["https://afribay.vercel.app/ashnil-1.jpg", "https://afribay.vercel.app/ashnil-2.jpg", "https://afribay.vercel.app/ashnil-3.jpg", "https://afribay.vercel.app/ashnil-4.jpg", "https://afribay.vercel.app/ashnil-5.jpg", "https://afribay.vercel.app/ashnil-6.jpg", "https://afribay.vercel.app/ashnil-7.jpg", "https://afribay.vercel.app/ashnil-8.jpg", "https://afribay.vercel.app/ashnil-9.jpg"],
  },
  {
    id: "samburu-intrepids-camp",
    name: "Samburu Intrepids Tented Camp",
    type: "camp",
    location: "Samburu",
    destinationId: "samburu",
    rating: 4.4,
    pricePerNight: 380,
    image: "https://afribay.vercel.app/intrepids.jpg",
    amenities: ["Luxury Tents", "River Location", "Pool", "Spa", "Cultural Center"],
    description: "Luxury tented camp with stunning river views and excellent wildlife encounters",
    galleryImages: ["https://afribay.vercel.app/intrepids-1.jpg", "https://afribay.vercel.app/intrepids-2.jpg", "https://afribay.vercel.app/intrepids-3.jpg", "https://afribay.vercel.app/intrepids-4.jpg", "https://afribay.vercel.app/intrepids-5.jpg", "https://afribay.vercel.app/intrepids-6.jpg", "https://afribay.vercel.app/intrepids-7.jpg", "https://afribay.vercel.app/intrepids-8.jpg", "https://afribay.vercel.app/intrepids-9.jpg"],
  },
  {
    id: "saruni-samburu",
    name: "Saruni Samburu",
    type: "lodge",
    location: "Samburu",
    destinationId: "samburu",
    rating: 4.6,
    pricePerNight: 520,
    image: "https://afribay.vercel.app/saruni.jpg",
    amenities: ["Eco-Lodge", "Panoramic Views", "Cultural Immersion", "Walking Safaris", "Spa"],
    description: "Eco-luxury lodge offering intimate safari experience with stunning landscape views",
    galleryImages: ["https://afribay.vercel.app/saruni-1.jpg", "https://afribay.vercel.app/saruni-2.jpg", "https://afribay.vercel.app/saruni-3.jpg", "https://afribay.vercel.app/saruni-4.jpg", "https://afribay.vercel.app/saruni-5.jpg", "https://afribay.vercel.app/saruni-6.jpg", "https://afribay.vercel.app/saruni-7.jpg", "https://afribay.vercel.app/saruni-8.jpg", "https://afribay.vercel.app/saruni-9.jpg"],
  },
  {
    id: "sarara-camp",
    name: "Sarara Camp",
    type: "camp",
    location: "Samburu",
    destinationId: "samburu",
    rating: 4.7,
    pricePerNight: 580,
    image: "https://afribay.vercel.app/sarara.jpg",
    amenities: ["Luxury Tents", "Private Conservancy", "Cultural Activities", "Camel Safaris", "Spa"],
    description: "Exclusive luxury camp in private conservancy with unique cultural experiences",
    galleryImages: ["https://afribay.vercel.app/sarara-1.jpg", "https://afribay.vercel.app/sarara-2.jpg", "https://afribay.vercel.app/sarara-3.jpg", "https://afribay.vercel.app/sarara-4.jpg", "https://afribay.vercel.app/sarara-5.jpg", "https://afribay.vercel.app/sarara-6.jpg", "https://afribay.vercel.app/sarara-7.jpg", "https://afribay.vercel.app/sarara-8.jpg", "https://afribay.vercel.app/sarara-9.jpg"],
  },

  // Amboseli accommodations
  {
    id: "elephant-gorge-camp",
    name: "Elephant Gorge Camp",
    type: "camp",
    location: "Amboseli",
    destinationId: "amboseli",
    rating: 4.4,
    pricePerNight: 380,
    image: "https://afribay.vercel.app/gorge.jpg",
    amenities: ["Tented Camp", "Kilimanjaro Views", "Game Drives", "Cultural Visits", "Bush Dining"],
    description: "Authentic tented camp with spectacular Mount Kilimanjaro views and elephant encounters",
    galleryImages: ["https://afribay.vercel.app/gorge-1.jpg", "https://afribay.vercel.app/gorge-2.jpg", "https://afribay.vercel.app/gorge-3.jpg", "https://afribay.vercel.app/gorge-4.jpg", "https://afribay.vercel.app/gorge-5.jpg", "https://afribay.vercel.app/gorge-6.jpg", "https://afribay.vercel.app/gorge-7.jpg", "https://afribay.vercel.app/gorge-8.jpg", "https://afribay.vercel.app/gorge-9.jpg"],
  },
  {
    id: "angama-amboseli",
    name: "Angama Amboseli",
    type: "lodge",
    location: "Amboseli",
    destinationId: "amboseli",
    rating: 4.8,
    pricePerNight: 750,
    image: "https://afribay.vercel.app/angama.jpg",
    amenities: ["Ultra-Luxury", "Kilimanjaro Views", "Spa", "Photography Studio", "Private Airstrip"],
    description: "Ultra-luxury lodge with unparalleled Mount Kilimanjaro views and world-class service",
    galleryImages: ["https://afribay.vercel.app/angama-1.jpg", "https://afribay.vercel.app/angama-2.jpg", "https://afribay.vercel.app/angama-3.jpg", "https://afribay.vercel.app/angama-4.jpg", "https://afribay.vercel.app/angama-5.jpg", "https://afribay.vercel.app/angama-6.jpg", "https://afribay.vercel.app/angama-7.jpg", "https://afribay.vercel.app/angama-8.jpg", "https://afribay.vercel.app/angama-9.jpg"],
  },
  {
    id: "tulia-amboseli-camp",
    name: "Tulia Amboseli Safari Camp",
    type: "camp",
    location: "Amboseli",
    destinationId: "amboseli",
    rating: 4.3,
    pricePerNight: 320,
    image: "https://afribay.vercel.app/tulia.jpg",
    amenities: ["Safari Tents", "Mountain Views", "Game Drives", "Cultural Activities", "Campfire Dinners"],
    description: "Comfortable safari camp offering authentic Amboseli experience with mountain backdrop",
    galleryImages: ["https://afribay.vercel.app/tulia-1.jpg", "https://afribay.vercel.app/tulia-2.jpg", "https://afribay.vercel.app/tulia-3.jpg", "https://afribay.vercel.app/tulia-4.jpg", "https://afribay.vercel.app/tulia-5.jpg", "https://afribay.vercel.app/tulia-6.jpg", "https://afribay.vercel.app/tulia-7.jpg", "https://afribay.vercel.app/tulia-8.jpg", "https://afribay.vercel.app/tulia-9.jpg"],
  },
  {
    id: "ol-tukai-lodge",
    name: "Ol Tukai Lodge Amboseli",
    type: "lodge",
    location: "Amboseli",
    destinationId: "amboseli",
    rating: 4.2,
    pricePerNight: 280,
    image: "https://afribay.vercel.app/tukai.jpg",
    amenities: ["Lodge Rooms", "Pool", "Restaurant", "Game Drives", "Kilimanjaro Views"],
    description: "Established lodge in the heart of Amboseli with excellent elephant viewing opportunities",
    galleryImages: ["https://afribay.vercel.app/tukai-1.jpg", "https://afribay.vercel.app/tukai-2.jpg", "https://afribay.vercel.app/tukai-3.jpg", "https://afribay.vercel.app/tukai-4.jpg", "https://afribay.vercel.app/tukai-5.jpg", "https://afribay.vercel.app/tukai-6.jpg", "https://afribay.vercel.app/tukai-7.jpg", "https://afribay.vercel.app/tukai-8.jpg", "https://afribay.vercel.app/tukai-9.jpg"],
  },
  {
    id: "ol-donyo-lodge",
    name: "Ol Donyo Lodge",
    type: "lodge",
    location: "Amboseli",
    destinationId: "amboseli",
    rating: 4.7,
    pricePerNight: 680,
    image: "https://afribay.vercel.app/donyo.jpg",
    amenities: ["Luxury Suites", "Private Conservancy", "Spa", "Horse Riding", "Cultural Activities"],
    description: "Luxury eco-lodge in private conservancy with innovative conservation programs",
    galleryImages: ["https://afribay.vercel.app/donyo-1.jpg", "https://afribay.vercel.app/donyo-2.jpg", "https://afribay.vercel.app/donyo-3.jpg", "https://afribay.vercel.app/donyo-4.jpg", "https://afribay.vercel.app/donyo-5.jpg", "https://afribay.vercel.app/donyo-6.jpg", "https://afribay.vercel.app/donyo-7.jpg", "https://afribay.vercel.app/donyo-8.jpg", "https://afribay.vercel.app/donyo-9.jpg"],
  },
  {
    id: "tawi-lodge-amboseli",
    name: "Tawi Lodge Amboseli",
    type: "lodge",
    location: "Amboseli",
    destinationId: "amboseli",
    rating: 4.1,
    pricePerNight: 250,
    image: "https://afribay.vercel.app/tawi.jpg",
    amenities: ["Lodge Accommodation", "Restaurant", "Bar", "Game Drives", "Cultural Shows"],
    description: "Comfortable lodge offering good value accommodation with easy park access",
    galleryImages: ["https://afribay.vercel.app/tawi-1.jpg", "https://afribay.vercel.app/tawi-2.jpg", "https://afribay.vercel.app/tawi-3.jpg", "https://afribay.vercel.app/tawi-4.jpg", "https://afribay.vercel.app/tawi-5.jpg", "https://afribay.vercel.app/tawi-6.jpg", "https://afribay.vercel.app/tawi-7.jpg", "https://afribay.vercel.app/tawi-8.jpg", "https://afribay.vercel.app/tawi-9.jpg"],
  },

  // Zanzibar accommodations
  {
    id: "sandies-baobab-beach",
    name: "Sandies Baobab Beach",
    type: "resort",
    location: "Zanzibar",
    destinationId: "zanzibar",
    rating: 4.3,
    pricePerNight: 280,
    image: "https://afribay.vercel.app/sandies.jpg",
    amenities: ["Beachfront", "Pool", "Spa", "Water Sports", "All-Inclusive Options"],
    description: "Beachfront resort with tropical gardens and excellent water sports facilities",
    galleryImages: ["https://afribay.vercel.app/sandies-1.jpg", "https://afribay.vercel.app/sandies-2.jpg", "https://afribay.vercel.app/sandies-3.jpg", "https://afribay.vercel.app/sandies-4.jpg", "https://afribay.vercel.app/sandies-5.jpg", "https://afribay.vercel.app/sandies-6.jpg", "https://afribay.vercel.app/sandies-7.jpg", "https://afribay.vercel.app/sandies-8.jpg", "https://afribay.vercel.app/sandies-9.jpg"],
  },
  {
    id: "baraza-resort-zanzibar",
    name: "Baraza Resort and Spa Zanzibar",
    type: "resort",
    location: "Zanzibar",
    destinationId: "zanzibar",
    rating: 4.8,
    pricePerNight: 650,
    image: "https://afribay.vercel.app/baraza.jpg",
    amenities: ["Ultra-Luxury", "Private Beach", "Spa", "Multiple Pools", "Fine Dining"],
    description: "Ultra-luxury beachfront resort with Swahili-inspired architecture and world-class amenities",
    galleryImages: ["https://afribay.vercel.app/baraza-1.jpg", "https://afribay.vercel.app/baraza-2.jpg", "https://afribay.vercel.app/baraza-3.jpg", "https://afribay.vercel.app/baraza-4.jpg", "https://afribay.vercel.app/baraza-5.jpg", "https://afribay.vercel.app/baraza-6.jpg", "https://afribay.vercel.app/baraza-7.jpg", "https://afribay.vercel.app/baraza-8.jpg", "https://afribay.vercel.app/baraza-9.jpg"],
  },
  {
    id: "breezes-beach-club-zanzibar",
    name: "Breezes Beach Club & Spa Zanzibar",
    type: "resort",
    location: "Zanzibar",
    destinationId: "zanzibar",
    rating: 4.5,
    pricePerNight: 420,
    image: "https://afribay.vercel.app/breezes.jpg",
    amenities: ["Beachfront", "Spa", "Multiple Restaurants", "Water Sports", "Cultural Tours"],
    description: "Elegant beachfront resort combining modern luxury with traditional Zanzibari charm",
    galleryImages: ["https://afribay.vercel.app/breezes-1.jpg", "https://afribay.vercel.app/breezes-2.jpg", "https://afribay.vercel.app/breezes-3.jpg", "https://afribay.vercel.app/breezes-4.jpg", "https://afribay.vercel.app/breezes-5.jpg", "https://afribay.vercel.app/breezes-6.jpg", "https://afribay.vercel.app/breezes-7.jpg", "https://afribay.vercel.app/breezes-8.jpg", "https://afribay.vercel.app/breezes-9.jpg"],
  },
  {
    id: "the-palms-zanzibar",
    name: "The Palms Zanzibar",
    type: "resort",
    location: "Zanzibar",
    destinationId: "zanzibar",
    rating: 4.7,
    pricePerNight: 580,
    image: "https://afribay.vercel.app/palms.jpg",
    amenities: ["Luxury Villas", "Private Beach", "Spa", "Fine Dining", "Butler Service"],
    description: "Exclusive luxury resort with private villas and personalized service on pristine beach",
    galleryImages: ["https://afribay.vercel.app/palms-1.jpg", "https://afribay.vercel.app/palms-2.jpg", "https://afribay.vercel.app/palms-3.jpg", "https://afribay.vercel.app/palms-4.jpg", "https://afribay.vercel.app/palms-5.jpg", "https://afribay.vercel.app/palms-6.jpg", "https://afribay.vercel.app/palms-7.jpg", "https://afribay.vercel.app/palms-8.jpg", "https://afribay.vercel.app/palms-9.jpg"],
  },
  {
    id: "zawadi-hotel-zanzibar",
    name: "Zawadi Hotel Zanzibar",
    type: "hotel",
    location: "Zanzibar",
    destinationId: "zanzibar",
    rating: 4.6,
    pricePerNight: 480,
    image: "https://afribay.vercel.app/zawadi.jpg",
    amenities: ["Boutique Hotel", "Ocean Views", "Spa", "Restaurant", "Cultural Activities"],
    description: "Boutique hotel with stunning ocean views and authentic Zanzibari hospitality",
    galleryImages: ["https://afribay.vercel.app/zawadi-1.jpg", "https://afribay.vercel.app/zawadi-2.jpg", "https://afribay.vercel.app/zawadi-3.jpg", "https://afribay.vercel.app/zawadi-4.jpg", "https://afribay.vercel.app/zawadi-5.jpg", "https://afribay.vercel.app/zawadi-6.jpg", "https://afribay.vercel.app/zawadi-7.jpg", "https://afribay.vercel.app/zawadi-8.jpg", "https://afribay.vercel.app/zawadi-9.jpg"],
  },

  // Diani accommodations
  {
    id: "almanara-diani",
    name: "Almanara",
    type: "resort",
    location: "Diani Beach",
    destinationId: "diani-beach",
    rating: 4.6,
    pricePerNight: 520,
    image: "https://afribay.vercel.app/almanara.jpg",
    amenities: ["Luxury Resort", "Private Beach", "Spa", "Multiple Pools", "Water Sports"],
    description: "Luxury beachfront resort with Moorish architecture and exceptional service",
    galleryImages: ["https://afribay.vercel.app/almanara-1.jpg", "https://afribay.vercel.app/almanara-2.jpg", "https://afribay.vercel.app/almanara-3.jpg", "https://afribay.vercel.app/almanara-4.jpg", "https://afribay.vercel.app/almanara-5.jpg", "https://afribay.vercel.app/almanara-6.jpg", "https://afribay.vercel.app/almanara-7.jpg", "https://afribay.vercel.app/almanara-8.jpg", "https://afribay.vercel.app/almanara-9.jpg"],
  },
  {
    id: "baobab-beach-resort-diani",
    name: "Baobab Beach Resort",
    type: "resort",
    location: "Diani Beach",
    destinationId: "diani-beach",
    rating: 4.4,
    pricePerNight: 380,
    image: "https://afribay.vercel.app/baobab.jpg",
    amenities: ["Beachfront", "Multiple Pools", "Spa", "Water Sports", "Kids Club"],
    description: "Family-friendly beachfront resort with extensive facilities and activities",
    galleryImages: ["https://afribay.vercel.app/baobab-1.jpg", "https://afribay.vercel.app/baobab-2.jpg", "https://afribay.vercel.app/baobab-3.jpg", "https://afribay.vercel.app/baobab-4.jpg", "https://afribay.vercel.app/baobab-5.jpg", "https://afribay.vercel.app/baobab-6.jpg", "https://afribay.vercel.app/baobab-7.jpg", "https://afribay.vercel.app/baobab-8.jpg", "https://afribay.vercel.app/baobab-9.jpg"],
  },
  {
    id: "maji-beach-boutique-hotel",
    name: "The Maji Beach Boutique Hotel",
    type: "hotel",
    location: "Diani Beach",
    destinationId: "diani-beach",
    rating: 4.5,
    pricePerNight: 420,
    image: "https://afribay.vercel.app/maji.jpg",
    amenities: ["Boutique Hotel", "Beachfront", "Spa", "Restaurant", "Intimate Setting"],
    description: "Intimate boutique hotel with personalized service and stunning beach location",
    galleryImages: ["https://afribay.vercel.app/maji-1.jpg", "https://afribay.vercel.app/maji-2.jpg", "https://afribay.vercel.app/maji-3.jpg", "https://afribay.vercel.app/maji-4.jpg", "https://afribay.vercel.app/maji-5.jpg", "https://afribay.vercel.app/maji-6.jpg", "https://afribay.vercel.app/maji-7.jpg", "https://afribay.vercel.app/maji-8.jpg", "https://afribay.vercel.app/maji-9.jpg"],
  },
  {
    id: "diani-reef-beach-resort",
    name: "Diani Reef Beach Resort",
    type: "resort",
    location: "Diani Beach",
    destinationId: "diani-beach",
    rating: 4.3,
    pricePerNight: 320,
    image: "https://afribay.vercel.app/reef.jpg",
    amenities: ["Beachfront", "Pool", "Restaurant", "Water Sports", "Conference Facilities"],
    description: "Comfortable beachfront resort offering good value and convenient amenities",
    galleryImages: ["https://afribay.vercel.app/reef-1.jpg", "https://afribay.vercel.app/reef-2.jpg", "https://afribay.vercel.app/reef-3.jpg", "https://afribay.vercel.app/reef-4.jpg", "https://afribay.vercel.app/reef-5.jpg", "https://afribay.vercel.app/reef-6.jpg", "https://afribay.vercel.app/reef-7.jpg", "https://afribay.vercel.app/reef-8.jpg", "https://afribay.vercel.app/reef-9.jpg"],
  },
  {
    id: "swahili-beach-resort",
    name: "Swahili Beach Resort",
    type: "resort",
    location: "Diani Beach",
    destinationId: "diani-beach",
    rating: 4.2,
    pricePerNight: 280,
    image: "https://afribay.vercel.app/swahili.jpg",
    amenities: ["Beachfront", "Pool", "Restaurant", "Bar", "Cultural Shows"],
    description: "Traditional beach resort with Swahili-inspired design and cultural entertainment",
    galleryImages: ["https://afribay.vercel.app/swahili-1.jpg", "https://afribay.vercel.app/swahili-2.jpg", "https://afribay.vercel.app/swahili-3.jpg", "https://afribay.vercel.app/swahili-4.jpg", "https://afribay.vercel.app/swahili-5.jpg", "https://afribay.vercel.app/swahili-6.jpg", "https://afribay.vercel.app/swahili-7.jpg", "https://afribay.vercel.app/swahili-8.jpg", "https://afribay.vercel.app/swahili-9.jpg"],
  },
  {
    id: "leopard-beach-resort",
    name: "Leopard Beach Resort & Spa",
    type: "resort",
    location: "Diani Beach",
    destinationId: "diani-beach",
    rating: 4.4,
    pricePerNight: 350,
    image: "https://afribay.vercel.app/leopard.jpg",
    amenities: ["Beachfront", "Spa", "Multiple Restaurants", "Pool", "Water Sports"],
    description: "Established beachfront resort with comprehensive facilities and spa services",
    galleryImages: ["https://afribay.vercel.app/leopard-1.jpg", "https://afribay.vercel.app/leopard-2.jpg", "https://afribay.vercel.app/leopard-3.jpg", "https://afribay.vercel.app/leopard-4.jpg", "https://afribay.vercel.app/leopard-5.jpg", "https://afribay.vercel.app/leopard-6.jpg", "https://afribay.vercel.app/leopard-7.jpg", "https://afribay.vercel.app/leopard-8.jpg", "https://afribay.vercel.app/leopard-9.jpg"],
  },

  // Nakuru accommodations
  {
    id: "mbweha-camp-nakuru",
    name: "Mbweha Camp",
    type: "camp",
    location: "Lake Nakuru",
    destinationId: "lake-nakuru",
    rating: 4.2,
    pricePerNight: 280,
    image: "https://afribay.vercel.app/mbweha-camp.jpg",
    amenities: ["Tented Camp", "Lake Views", "Game Drives", "Bird Watching", "Restaurant"],
    description: "Comfortable tented camp with excellent lake views and bird watching opportunities",
    galleryImages: ["https://afribay.vercel.app/mbweha-camp-1.jpg", "https://afribay.vercel.app/mbweha-camp-2.jpg", "https://afribay.vercel.app/mbweha-camp-3.jpg", "https://afribay.vercel.app/mbweha-camp-4.jpg", "https://afribay.vercel.app/mbweha-camp-5.jpg", "https://afribay.vercel.app/mbweha-camp-6.jpg", "https://afribay.vercel.app/mbweha-camp-7.jpg", "https://afribay.vercel.app/mbweha-camp-8.jpg", "https://afribay.vercel.app/mbweha-camp-9.jpg"],
  },
  {
    id: "the-cliff-nakuru",
    name: "The Cliff",
    type: "lodge",
    location: "Lake Nakuru",
    destinationId: "lake-nakuru",
    rating: 4.5,
    pricePerNight: 380,
    image: "https://afribay.vercel.app/cliff.jpg",
    amenities: ["Cliff-top Location", "Panoramic Views", "Spa", "Restaurant", "Conference Facilities"],
    description: "Luxury lodge perched on cliff with breathtaking panoramic views of Lake Nakuru",
    galleryImages: ["https://afribay.vercel.app/cliff-1.jpg", "https://afribay.vercel.app/cliff-2.jpg", "https://afribay.vercel.app/cliff-3.jpg", "https://afribay.vercel.app/cliff-4.jpg", "https://afribay.vercel.app/cliff-5.jpg", "https://afribay.vercel.app/cliff-6.jpg", "https://afribay.vercel.app/cliff-7.jpg", "https://afribay.vercel.app/cliff-8.jpg", "https://afribay.vercel.app/cliff-9.jpg"],
  },
  {
    id: "serena-hotel-nakuru",
    name: "Serena Hotel Nakuru",
    type: "hotel",
    location: "Lake Nakuru",
    destinationId: "lake-nakuru",
    rating: 4.3,
    pricePerNight: 220,
    image: "https://afribay.vercel.app/serena2.jpg",
    amenities: ["City Hotel", "Restaurant", "Bar", "Conference Facilities", "Business Center"],
    description: "Comfortable city hotel providing convenient access to Lake Nakuru National Park",
    galleryImages: ["https://afribay.vercel.app/serena2-1.jpg", "https://afribay.vercel.app/serena2-2.jpg", "https://afribay.vercel.app/serena2-3.jpg", "https://afribay.vercel.app/serena2-4.jpg", "https://afribay.vercel.app/serena2-5.jpg", "https://afribay.vercel.app/serena2-6.jpg", "https://afribay.vercel.app/serena2-7.jpg", "https://afribay.vercel.app/serena2-8.jpg", "https://afribay.vercel.app/serena2-9.jpg"],
  },
  {
    id: "lake-nakuru-sopa-lodge",
    name: "Lake Nakuru Sopa Lodge",
    type: "lodge",
    location: "Lake Nakuru",
    destinationId: "lake-nakuru",
    rating: 4.4,
    pricePerNight: 320,
    image: "https://afribay.vercel.app/sopa.jpg",
    amenities: ["Lodge Rooms", "Lake Views", "Restaurant", "Bar", "Game Drives"],
    description: "Well-appointed lodge with stunning lake views and easy park access",
    galleryImages: ["https://afribay.vercel.app/sopa-1.jpg", "https://afribay.vercel.app/sopa-2.jpg", "https://afribay.vercel.app/sopa-3.jpg", "https://afribay.vercel.app/sopa-4.jpg", "https://afribay.vercel.app/sopa-5.jpg", "https://afribay.vercel.app/sopa-6.jpg", "https://afribay.vercel.app/sopa-7.jpg", "https://afribay.vercel.app/sopa-8.jpg", "https://afribay.vercel.app/sopa-9.jpg"],
  },
  {
    id: "lake-elementaita-lodge",
    name: "Lake Elementaita Mountain Lodge",
    type: "lodge",
    location: "Lake Nakuru",
    destinationId: "lake-nakuru",
    rating: 4.1,
    pricePerNight: 250,
    image: "https://afribay.vercel.app/elementaita.jpg",
    amenities: ["Mountain Lodge", "Lake Views", "Restaurant", "Nature Walks", "Bird Watching"],
    description: "Rustic mountain lodge offering peaceful retreat with beautiful lake and mountain views",
    galleryImages: ["https://afribay.vercel.app/elementaita-1.jpg", "https://afribay.vercel.app/elementaita-2.jpg", "https://afribay.vercel.app/elementaita-3.jpg", "https://afribay.vercel.app/elementaita-4.jpg", "https://afribay.vercel.app/elementaita-5.jpg", "https://afribay.vercel.app/elementaita-6.jpg", "https://afribay.vercel.app/elementaita-7.jpg", "https://afribay.vercel.app/elementaita-8.jpg", "https://afribay.vercel.app/elementaita-9.jpg"],
  },

  // Naivasha accommodations
  {
    id: "chui-lodge-naivasha",
    name: "Chui Lodge",
    type: "lodge",
    location: "Lake Naivasha",
    destinationId: "naivasha",
    rating: 4.3,
    pricePerNight: 320,
    image: "https://afribay.vercel.app/chui.jpg",
    amenities: ["Lake Views", "Restaurant", "Boat Safaris", "Nature Walks", "Conference Facilities"],
    description: "Comfortable lodge with beautiful lake views and easy access to water activities",
    galleryImages: ["https://afribay.vercel.app/chui-1.jpg", "https://afribay.vercel.app/chui-2.jpg", "https://afribay.vercel.app/chui-3.jpg", "https://afribay.vercel.app/chui-4.jpg", "https://afribay.vercel.app/chui-5.jpg", "https://afribay.vercel.app/chui-6.jpg", "https://afribay.vercel.app/chui-7.jpg", "https://afribay.vercel.app/chui-8.jpg", "https://afribay.vercel.app/chui-9.jpg"],
  },
  {
    id: "enashipai-resort-spa",
    name: "Enashipai Resort & Spa",
    type: "resort",
    location: "Lake Naivasha",
    destinationId: "naivasha",
    rating: 4.6,
    pricePerNight: 450,
    image: "https://afribay.vercel.app/enashipai.jpg",
    amenities: ["Luxury Resort", "Spa", "Multiple Restaurants", "Pool", "Conference Facilities"],
    description: "Luxury lakeside resort with world-class spa and comprehensive facilities",
    galleryImages: ["https://afribay.vercel.app/enashipai-1.jpg", "https://afribay.vercel.app/enashipai-2.jpg", "https://afribay.vercel.app/enashipai-3.jpg", "https://afribay.vercel.app/enashipai-4.jpg", "https://afribay.vercel.app/enashipai-5.jpg", "https://afribay.vercel.app/enashipai-6.jpg", "https://afribay.vercel.app/enashipai-7.jpg", "https://afribay.vercel.app/enashipai-8.jpg", "https://afribay.vercel.app/enashipai-9.jpg"],
  },
  {
    id: "loldia-house-naivasha",
    name: "Loldia House",
    type: "lodge",
    location: "Lake Naivasha",
    destinationId: "naivasha",
    rating: 4.7,
    pricePerNight: 580,
    image: "https://afribay.vercel.app/loldia.jpg",
    amenities: ["Historic House", "Private Conservancy", "Horse Riding", "Nature Walks", "Fine Dining"],
    description: "Historic colonial house in private conservancy offering exclusive and intimate experience",
    galleryImages: ["https://afribay.vercel.app/loldia-1.jpg", "https://afribay.vercel.app/loldia-2.jpg", "https://afribay.vercel.app/loldia-3.jpg", "https://afribay.vercel.app/loldia-4.jpg", "https://afribay.vercel.app/loldia-5.jpg", "https://afribay.vercel.app/loldia-6.jpg", "https://afribay.vercel.app/loldia-7.jpg", "https://afribay.vercel.app/loldia-8.jpg", "https://afribay.vercel.app/loldia-9.jpg"],
  },
  {
    id: "lake-naivasha-resort",
    name: "Lake Naivasha Resort",
    type: "resort",
    location: "Lake Naivasha",
    destinationId: "naivasha",
    rating: 4.2,
    pricePerNight: 280,
    image: "https://afribay.vercel.app/lake-naivasha.jpg",
    amenities: ["Lakeside Resort", "Pool", "Restaurant", "Boat Trips", "Conference Facilities"],
    description: "Comfortable lakeside resort with good facilities and easy access to lake activities",
    galleryImages: ["https://afribay.vercel.app/lake-naivasha-1.jpg", "https://afribay.vercel.app/lake-naivasha-2.jpg", "https://afribay.vercel.app/lake-naivasha-3.jpg", "https://afribay.vercel.app/lake-naivasha-4.jpg", "https://afribay.vercel.app/lake-naivasha-5.jpg", "https://afribay.vercel.app/lake-naivasha-6.jpg", "https://afribay.vercel.app/lake-naivasha-7.jpg", "https://afribay.vercel.app/lake-naivasha-8.jpg", "https://afribay.vercel.app/lake-naivasha-9.jpg"],
  },

  // Nairobi accommodations
  {
    id: "jw-marriott-nairobi",
    name: "JW Marriott Hotel Nairobi",
    type: "hotel",
    location: "Nairobi",
    destinationId: "nairobi",
    rating: 4.8,
    pricePerNight: 380,
    image: "https://afribay.vercel.app/marriott2.jpg",
    amenities: ["Luxury Hotel", "Spa", "Multiple Restaurants", "Pool", "Business Center"],
    description: "Ultra-luxury hotel in the heart of Nairobi with world-class amenities and service",
    galleryImages: ["https://afribay.vercel.app/marriott2-1.jpg", "https://afribay.vercel.app/marriott2-2.jpg", "https://afribay.vercel.app/marriott2-3.jpg", "https://afribay.vercel.app/marriott2-4.jpg", "https://afribay.vercel.app/marriott2-5.jpg", "https://afribay.vercel.app/marriott2-6.jpg", "https://afribay.vercel.app/marriott2-7.jpg", "https://afribay.vercel.app/marriott2-8.jpg", "https://afribay.vercel.app/marriott2-9.jpg"],
  },
  {
    id: "radisson-blu-nairobi",
    name: "Radisson Blu Hotel",
    type: "hotel",
    location: "Nairobi",
    destinationId: "nairobi",
    rating: 4.5,
    pricePerNight: 280,
    image: "https://afribay.vercel.app/blu.jpg",
    amenities: ["Business Hotel", "Restaurant", "Bar", "Fitness Center", "Conference Facilities"],
    description: "Modern business hotel with excellent facilities and convenient city location",
    galleryImages: ["https://afribay.vercel.app/blu-1.jpg", "https://afribay.vercel.app/blu-2.jpg", "https://afribay.vercel.app/blu-3.jpg", "https://afribay.vercel.app/blu-4.jpg", "https://afribay.vercel.app/blu-5.jpg", "https://afribay.vercel.app/blu-6.jpg", "https://afribay.vercel.app/blu-7.jpg", "https://afribay.vercel.app/blu-8.jpg", "https://afribay.vercel.app/blu-9.jpg"],
  },
  {
    id: "hemingways-nairobi",
    name: "Hemingways Nairobi, an SLH Hotel",
    type: "hotel",
    location: "Nairobi",
    destinationId: "nairobi",
    rating: 4.7,
    pricePerNight: 420,
    image: "https://afribay.vercel.app/hemingway.jpg",
    amenities: ["Boutique Hotel", "Spa", "Fine Dining", "Pool", "Personalized Service"],
    description: "Elegant boutique hotel offering personalized luxury and sophisticated amenities",
    galleryImages: ["https://afribay.vercel.app/hemingway-1.jpg", "https://afribay.vercel.app/hemingway-2.jpg", "https://afribay.vercel.app/hemingway-3.jpg", "https://afribay.vercel.app/hemingway-4.jpg", "https://afribay.vercel.app/hemingway-5.jpg", "https://afribay.vercel.app/hemingway-6.jpg", "https://afribay.vercel.app/hemingway-7.jpg", "https://afribay.vercel.app/hemingway-8.jpg", "https://afribay.vercel.app/hemingway-9.jpg"],
  },
  {
    id: "dusit-princess-nairobi",
    name: "Dusit Princess Hotel Residences",
    type: "hotel",
    location: "Nairobi",
    destinationId: "nairobi",
    rating: 4.4,
    pricePerNight: 320,
    image: "https://afribay.vercel.app/dusit.jpg",
    amenities: ["Hotel Residences", "Restaurant", "Bar", "Fitness Center", "Business Center"],
    description: "Comfortable hotel residences with extended stay facilities and modern amenities",
    galleryImages: ["https://afribay.vercel.app/dusit-1.jpg", "https://afribay.vercel.app/dusit-2.jpg", "https://afribay.vercel.app/dusit-3.jpg", "https://afribay.vercel.app/dusit-4.jpg", "https://afribay.vercel.app/dusit-5.jpg", "https://afribay.vercel.app/dusit-6.jpg", "https://afribay.vercel.app/dusit-7.jpg", "https://afribay.vercel.app/dusit-8.jpg", "https://afribay.vercel.app/dusit-9.jpg"],
  },
  {
    id: "movenpick-nairobi",
    name: "Mövenpick Hotel & Residences",
    type: "hotel",
    location: "Nairobi",
    destinationId: "nairobi",
    rating: 4.6,
    pricePerNight: 350,
    image: "https://afribay.vercel.app/movenpick.jpg",
    amenities: ["Luxury Hotel", "Spa", "Multiple Restaurants", "Pool", "Conference Facilities"],
    description: "Luxury hotel with Swiss hospitality standards and comprehensive business facilities",
    galleryImages: ["https://afribay.vercel.app/movenpick-1.jpg", "https://afribay.vercel.app/movenpick-2.jpg", "https://afribay.vercel.app/movenpick-3.jpg", "https://afribay.vercel.app/movenpick-4.jpg", "https://afribay.vercel.app/movenpick-5.jpg", "https://afribay.vercel.app/movenpick-6.jpg", "https://afribay.vercel.app/movenpick-7.jpg", "https://afribay.vercel.app/movenpick-8.jpg", "https://afribay.vercel.app/movenpick-9.jpg"],
  },
  {
    id: "sankara-nairobi",
    name: "Sankara Nairobi, Autograph Collection",
    type: "hotel",
    location: "Nairobi",
    destinationId: "nairobi",
    rating: 4.5,
    pricePerNight: 380,
    image: "https://afribay.vercel.app/sankara.jpg",
    amenities: ["Luxury Hotel", "Spa", "Rooftop Restaurant", "Pool", "Business Center"],
    description: "Contemporary luxury hotel with distinctive design and exceptional service standards",
    galleryImages: ["https://afribay.vercel.app/sankara-1.jpg", "https://afribay.vercel.app/sankara-2.jpg", "https://afribay.vercel.app/sankara-3.jpg", "https://afribay.vercel.app/sankara-4.jpg", "https://afribay.vercel.app/sankara-5.jpg", "https://afribay.vercel.app/sankara-6.jpg", "https://afribay.vercel.app/sankara-7.jpg", "https://afribay.vercel.app/sankara-8.jpg", "https://afribay.vercel.app/sankara-9.jpg"],
  },
  {
    id: "sarova-stanley-nairobi",
    name: "Sarova Stanley, Nairobi",
    type: "hotel",
    location: "Nairobi",
    destinationId: "nairobi",
    rating: 4.3,
    pricePerNight: 250,
    image: "https://afribay.vercel.app/sarova.jpg",
    amenities: ["Historic Hotel", "Multiple Restaurants", "Bar", "Conference Facilities", "Central Location"],
    description: "Historic hotel in the heart of Nairobi with colonial charm and modern amenities",
    galleryImages: ["https://afribay.vercel.app/sarova-1.jpg", "https://afribay.vercel.app/sarova-2.jpg", "https://afribay.vercel.app/sarova-3.jpg", "https://afribay.vercel.app/sarova-4.jpg", "https://afribay.vercel.app/sarova-5.jpg", "https://afribay.vercel.app/sarova-6.jpg", "https://afribay.vercel.app/sarova-7.jpg", "https://afribay.vercel.app/sarova-8.jpg", "https://afribay.vercel.app/sarova-9.jpg"],
  },
  {
    id: "doubletree-nairobi",
    name: "DoubleTree by Hilton Nairobi Hurlingham",
    type: "hotel",
    location: "Nairobi",
    destinationId: "nairobi",
    rating: 4.4,
    pricePerNight: 300,
    image: "https://afribay.vercel.app/doubletree.jpg",
    amenities: ["Business Hotel", "Restaurant", "Bar", "Fitness Center", "Pool"],
    description: "Modern business hotel with reliable service and convenient suburban location",
    galleryImages: ["https://afribay.vercel.app/doubletree-1.jpg", "https://afribay.vercel.app/doubletree-2.jpg", "https://afribay.vercel.app/doubletree-3.jpg", "https://afribay.vercel.app/doubletree-4.jpg", "https://afribay.vercel.app/doubletree-5.jpg", "https://afribay.vercel.app/doubletree-6.jpg", "https://afribay.vercel.app/doubletree-7.jpg", "https://afribay.vercel.app/doubletree-8.jpg", "https://afribay.vercel.app/doubletree-9.jpg"],
  },
  {
    id: "eka-hotel-nairobi",
    name: "Eka Hotel, Nairobi",
    type: "hotel",
    location: "Nairobi",
    destinationId: "nairobi",
    rating: 4.2,
    pricePerNight: 220,
    image: "https://afribay.vercel.app/eka.jpg",
    amenities: ["Business Hotel", "Restaurant", "Bar", "Conference Facilities", "Business Center"],
    description: "Comfortable business hotel offering good value and convenient city access",
    galleryImages: ["https://afribay.vercel.app/eka-1.jpg", "https://afribay.vercel.app/eka-2.jpg", "https://afribay.vercel.app/eka-3.jpg", "https://afribay.vercel.app/eka-4.jpg", "https://afribay.vercel.app/eka-5.jpg", "https://afribay.vercel.app/eka-6.jpg", "https://afribay.vercel.app/eka-7.jpg", "https://afribay.vercel.app/eka-8.jpg", "https://afribay.vercel.app/eka-9.jpg"],
  },

  // Lamu accommodations
  {
    id: "kijani-hotel-lamu",
    name: "Kijani Hotel, Lamu",
    type: "hotel",
    location: "Lamu Town",
    destinationId: "lamu",
    rating: 4.4,
    pricePerNight: 320,
    image: "https://afribay.vercel.app/kijani.jpg",
    amenities: ["Boutique Hotel", "Rooftop Terrace", "Traditional Architecture", "Cultural Tours", "Local Cuisine"],
    description: "Charming boutique hotel with authentic Swahili architecture and cultural immersion",
    galleryImages: ["https://afribay.vercel.app/kijani-1.jpg", "https://afribay.vercel.app/kijani-2.jpg", "https://afribay.vercel.app/kijani-3.jpg", "https://afribay.vercel.app/kijani-4.jpg", "https://afribay.vercel.app/kijani-5.jpg", "https://afribay.vercel.app/kijani-6.jpg", "https://afribay.vercel.app/kijani-7.jpg", "https://afribay.vercel.app/kijani-8.jpg", "https://afribay.vercel.app/kijani-9.jpg"],
  },
  {
    id: "peponi-hotel-lamu",
    name: "Peponi Hotel Lamu",
    type: "hotel",
    location: "Lamu Island",
    destinationId: "lamu",
    rating: 4.6,
    pricePerNight: 450,
    image: "https://afribay.vercel.app/peponi.jpg",
    amenities: ["Beachfront", "Traditional Design", "Water Sports", "Dhow Trips", "Fine Dining"],
    description: "Iconic beachfront hotel with traditional Swahili design and legendary hospitality",
    galleryImages: ["https://afribay.vercel.app/peponi-1.jpg", "https://afribay.vercel.app/peponi-2.jpg", "https://afribay.vercel.app/peponi-3.jpg", "https://afribay.vercel.app/peponi-4.jpg", "https://afribay.vercel.app/peponi-5.jpg", "https://afribay.vercel.app/peponi-6.jpg", "https://afribay.vercel.app/peponi-7.jpg", "https://afribay.vercel.app/peponi-8.jpg", "https://afribay.vercel.app/peponi-9.jpg"],
  },
  {
    id: "manda-bay-lodge",
    name: "Manda Bay Lodge",
    type: "lodge",
    location: "Manda Island",
    destinationId: "lamu",
    rating: 4.5,
    pricePerNight: 520,
    image: "https://afribay.vercel.app/manda.jpg",
    amenities: ["Private Island", "Beachfront", "Water Sports", "Spa", "Exclusive Setting"],
    description: "Exclusive lodge on private island offering ultimate privacy and luxury",
    galleryImages: ["https://afribay.vercel.app/manda-1.jpg", "https://afribay.vercel.app/manda-2.jpg", "https://afribay.vercel.app/manda-3.jpg", "https://afribay.vercel.app/manda-4.jpg", "https://afribay.vercel.app/manda-5.jpg", "https://afribay.vercel.app/manda-6.jpg", "https://afribay.vercel.app/manda-7.jpg", "https://afribay.vercel.app/manda-8.jpg", "https://afribay.vercel.app/manda-9.jpg"],
  },
  {
    id: "cabanas-hotel-lamu",
    name: "Cabanas Hotel Lamu",
    type: "hotel",
    location: "Lamu Town",
    destinationId: "lamu",
    rating: 4.2,
    pricePerNight: 280,
    image: "https://afribay.vercel.app/cabanas.jpg",
    amenities: ["Traditional Hotel", "Courtyard", "Restaurant", "Cultural Activities", "Local Guides"],
    description: "Traditional Swahili hotel offering authentic island experience and cultural activities",
    galleryImages: ["https://afribay.vercel.app/cabanas-1.jpg", "https://afribay.vercel.app/cabanas-2.jpg", "https://afribay.vercel.app/cabanas-3.jpg", "https://afribay.vercel.app/cabanas-4.jpg", "https://afribay.vercel.app/cabanas-5.jpg", "https://afribay.vercel.app/cabanas-6.jpg", "https://afribay.vercel.app/cabanas-7.jpg", "https://afribay.vercel.app/cabanas-8.jpg", "https://afribay.vercel.app/cabanas-9.jpg"],
  },

  // Tsavo accommodations
  {
    id: "boma-simba-safari-lodge",
    name: "Boma Simba Safari Lodge",
    type: "lodge",
    location: "Tsavo East",
    destinationId: "tsavo",
    rating: 4.3,
    pricePerNight: 320,
    image: "https://afribay.vercel.app/boma.jpg",
    amenities: ["Safari Lodge", "Game Drives", "Restaurant", "Bar", "Cultural Shows"],
    description: "Comfortable safari lodge offering authentic Tsavo experience with cultural entertainment",
    galleryImages: ["https://afribay.vercel.app/boma-1.jpg", "https://afribay.vercel.app/boma-2.jpg", "https://afribay.vercel.app/boma-3.jpg", "https://afribay.vercel.app/boma-4.jpg", "https://afribay.vercel.app/boma-5.jpg", "https://afribay.vercel.app/boma-6.jpg", "https://afribay.vercel.app/boma-7.jpg", "https://afribay.vercel.app/boma-8.jpg", "https://afribay.vercel.app/boma-9.jpg"],
  },
  {
    id: "salt-lick-safari-lodge",
    name: "Salt Lick Safari Lodge",
    type: "lodge",
    location: "Tsavo West",
    destinationId: "tsavo",
    rating: 4.5,
    pricePerNight: 380,
    image: "https://afribay.vercel.app/salt.jpg",
    amenities: ["Elevated Lodge", "Waterhole Views", "Game Viewing", "Restaurant", "Unique Architecture"],
    description: "Iconic elevated lodge with unique architecture and excellent wildlife viewing",
    galleryImages: ["https://afribay.vercel.app/salt-1.jpg", "https://afribay.vercel.app/salt-2.jpg", "https://afribay.vercel.app/salt-3.jpg", "https://afribay.vercel.app/salt-4.jpg", "https://afribay.vercel.app/salt-5.jpg", "https://afribay.vercel.app/salt-6.jpg", "https://afribay.vercel.app/salt-7.jpg", "https://afribay.vercel.app/salt-8.jpg", "https://afribay.vercel.app/salt-9.jpg"]
  },
  {
    id: "voyager-ziwani-camp",
    name: "Voyager Ziwani Tented Camp",
    type: "camp",
    location: "Tsavo West",
    destinationId: "tsavo",
    rating: 4.2,
    pricePerNight: 280,
    image: "https://afribay.vercel.app/ziwani.jpg",
    amenities: ["Tented Camp", "Springs Location", "Game Drives", "Nature Walks", "Bird Watching"],
    description: "Comfortable tented camp near natural springs with excellent bird watching opportunities",
    galleryImages: ["https://afribay.vercel.app/ziwani-1.jpg", "https://afribay.vercel.app/ziwani-2.jpg", "https://afribay.vercel.app/ziwani-3.jpg", "https://afribay.vercel.app/ziwani-4.jpg", "https://afribay.vercel.app/ziwani-5.jpg", "https://afribay.vercel.app/ziwani-6.jpg", "https://afribay.vercel.app/ziwani-7.jpg", "https://afribay.vercel.app/ziwani-8.jpg", "https://afribay.vercel.app/ziwani-9.jpg"]
  },
  {
    id: "soroi-lions-bluff-lodge",
    name: "Soroi Lions Bluff Lodge",
    type: "lodge",
    location: "Tsavo West",
    destinationId: "tsavo",
    rating: 4.4,
    pricePerNight: 350,
    image: "https://afribay.vercel.app/soroi.jpg",
    amenities: ["Cliff-top Lodge", "Panoramic Views", "Pool", "Restaurant", "Game Drives"],
    description: "Spectacular cliff-top lodge with panoramic views of Tsavo wilderness",
    galleryImages: ["https://afribay.vercel.app/soroi-1.jpg", "https://afribay.vercel.app/soroi-2.jpg", "https://afribay.vercel.app/soroi-3.jpg", "https://afribay.vercel.app/soroi-4.jpg", "https://afribay.vercel.app/soroi-5.jpg", "https://afribay.vercel.app/soroi-6.jpg", "https://afribay.vercel.app/soroi-7.jpg", "https://afribay.vercel.app/soroi-8.jpg", "https://afribay.vercel.app/soroi-9.jpg"]
  },
  {
    id: "taita-hills-safari-resort",
    name: "Taita Hills Safari Resort & Spa",
    type: "resort",
    location: "Tsavo West",
    destinationId: "tsavo",
    rating: 4.3,
    pricePerNight: 320,
    image: "https://afribay.vercel.app/taita.jpg",
    amenities: ["Safari Resort", "Spa", "Pool", "Multiple Restaurants", "Conference Facilities"],
    description: "Comprehensive safari resort with spa facilities and extensive amenities",
    galleryImages: ["https://afribay.vercel.app/taita-1.jpg", "https://afribay.vercel.app/taita-2.jpg", "https://afribay.vercel.app/taita-3.jpg", "https://afribay.vercel.app/taita-4.jpg", "https://afribay.vercel.app/taita-5.jpg", "https://afribay.vercel.app/taita-6.jpg", "https://afribay.vercel.app/taita-7.jpg", "https://afribay.vercel.app/taita-8.jpg", "https://afribay.vercel.app/taita-9.jpg"]
  },
  {
    id: "kipalo-hills-camp",
    name: "Kipalo Hills Camp",
    type: "camp",
    location: "Tsavo West",
    destinationId: "tsavo",
    rating: 4.1,
    pricePerNight: 250,
    image: "https://afribay.vercel.app/kipalo.jpg",
    amenities: ["Tented Camp", "Hill Location", "Game Drives", "Nature Walks", "Campfire Evenings"],
    description: "Rustic tented camp in scenic hill location offering authentic bush experience",
    galleryImages: ["https://afribay.vercel.app/kipalo-1.jpg", "https://afribay.vercel.app/kipalo-2.jpg", "https://afribay.vercel.app/kipalo-3.jpg", "https://afribay.vercel.app/kipalo-4.jpg", "https://afribay.vercel.app/kipalo-5.jpg", "https://afribay.vercel.app/kipalo-6.jpg", "https://afribay.vercel.app/kipalo-7.jpg", "https://afribay.vercel.app/kipalo-8.jpg", "https://afribay.vercel.app/kipalo-9.jpg"]
  },

  // Mombasa accommodations
  {
    id: "sarova-whitesands-mombasa",
    name: "Sarova Whitesands Beach Resort & Spa",
    type: "resort",
    location: "Mombasa",
    destinationId: "mombasa",
    rating: 4.4,
    pricePerNight: 350,
    image: "https://afribay.vercel.app/white.jpg",
    amenities: ["Beachfront", "Spa", "Multiple Pools", "Water Sports", "Kids Club"],
    description: "Popular beachfront resort with comprehensive facilities and family-friendly amenities",
    galleryImages: ["https://afribay.vercel.app/white-1.jpg", "https://afribay.vercel.app/white-2.jpg", "https://afribay.vercel.app/white-3.jpg", "https://afribay.vercel.app/white-4.jpg", "https://afribay.vercel.app/white-5.jpg", "https://afribay.vercel.app/white-6.jpg", "https://afribay.vercel.app/white-7.jpg", "https://afribay.vercel.app/white-8.jpg", "https://afribay.vercel.app/white-9.jpg"]
  },
  {
    id: "serena-beach-mombasa",
    name: "Serena Beach Resort & Spa",
    type: "resort",
    location: "Mombasa",
    destinationId: "mombasa",
    rating: 4.5,
    pricePerNight: 380,
    image: "https://afribay.vercel.app/serena.jpg",
    amenities: ["Beachfront", "Spa", "Multiple Pools", "Water Sports", "Cultural Shows"],
    description: "Luxury beachfront resort with traditional Swahili architecture and modern amenities",
    galleryImages: ["https://afribay.vercel.app/serena-1.jpg", "https://afribay.vercel.app/serena-2.jpg", "https://afribay.vercel.app/serena-3.jpg", "https://afribay.vercel.app/serena-4.jpg", "https://afribay.vercel.app/serena-5.jpg", "https://afribay.vercel.app/serena-6.jpg", "https://afribay.vercel.app/serena-7.jpg", "https://afribay.vercel.app/serena-8.jpg", "https://afribay.vercel.app/serena-9.jpg"]
  },
  {
    id: "mombasa-continental-resort",
    name: "Mombasa Continental Resort",
    type: "resort",
    location: "Mombasa",
    destinationId: "mombasa",
    rating: 4.2,
    pricePerNight: 280,
    image: "https://afribay.vercel.app/continental.jpg",
    amenities: ["Beachfront", "Pool", "Restaurant", "Bar", "Conference Facilities"],
    description: "Comfortable beachfront resort offering good value and convenient amenities",
    galleryImages: ["https://afribay.vercel.app/continental-1.jpg", "https://afribay.vercel.app/continental-2.jpg", "https://afribay.vercel.app/continental-3.jpg", "https://afribay.vercel.app/continental-4.jpg", "https://afribay.vercel.app/continental-5.jpg", "https://afribay.vercel.app/continental-6.jpg", "https://afribay.vercel.app/continental-7.jpg", "https://afribay.vercel.app/continental-8.jpg", "https://afribay.vercel.app/continental-9.jpg"]
  },

  // Malindi accommodations
  {
    id: "billionaire-resort-malindi",
    name: "Billionaire Resort and Retreat",
    type: "resort",
    location: "Malindi",
    destinationId: "malindi",
    rating: 4.6,
    pricePerNight: 480,
    image: "https://afribay.vercel.app/billionaire.jpg",
    amenities: ["Luxury Resort", "Private Beach", "Spa", "Multiple Restaurants", "Water Sports"],
    description: "Exclusive luxury resort with private beach and world-class amenities",
    galleryImages: ["https://afribay.vercel.app/billionaire-1.jpg", "https://afribay.vercel.app/billionaire-2.jpg", "https://afribay.vercel.app/billionaire-3.jpg", "https://afribay.vercel.app/billionaire-4.jpg", "https://afribay.vercel.app/billionaire-5.jpg", "https://afribay.vercel.app/billionaire-6.jpg", "https://afribay.vercel.app/billionaire-7.jpg", "https://afribay.vercel.app/billionaire-8.jpg", "https://afribay.vercel.app/billionaire-9.jpg"]
  },
  {
    id: "diamonds-malindi",
    name: "Diamonds Malindi",
    type: "resort",
    location: "Malindi",
    destinationId: "malindi",
    rating: 4.4,
    pricePerNight: 380,
    image: "https://afribay.vercel.app/diamond.jpg",
    amenities: ["All-Inclusive", "Beachfront", "Spa", "Water Sports", "Entertainment"],
    description: "All-inclusive beachfront resort with comprehensive facilities and entertainment",
    galleryImages: ["https://afribay.vercel.app/diamond-1.jpg", "https://afribay.vercel.app/diamond-2.jpg", "https://afribay.vercel.app/diamond-3.jpg", "https://afribay.vercel.app/diamond-4.jpg", "https://afribay.vercel.app/diamond-5.jpg", "https://afribay.vercel.app/diamond-6.jpg", "https://afribay.vercel.app/diamond-7.jpg", "https://afribay.vercel.app/diamond-8.jpg", "https://afribay.vercel.app/diamond-9.jpg"] 
  },
  {
    id: "kilili-baharini-resort",
    name: "Kilili Baharini Resort",
    type: "resort",
    location: "Malindi",
    destinationId: "malindi",
    rating: 4.3,
    pricePerNight: 320,
    image: "https://afribay.vercel.app/kilili.jpg",
    amenities: ["Beachfront", "Pool", "Restaurant", "Water Sports", "Cultural Shows"],
    description: "Comfortable beachfront resort with good facilities and cultural entertainment",
    galleryImages: ["https://afribay.vercel.app/kilili-1.jpg", "https://afribay.vercel.app/kilili-2.jpg", "https://afribay.vercel.app/kilili-3.jpg", "https://afribay.vercel.app/kilili-4.jpg", "https://afribay.vercel.app/kilili-5.jpg", "https://afribay.vercel.app/kilili-6.jpg", "https://afribay.vercel.app/kilili-7.jpg", "https://afribay.vercel.app/kilili-8.jpg", "https://afribay.vercel.app/kilili-9.jpg"]
  },
  {
    id: "the-kasa-malindi",
    name: "The Kasa - Malindi",
    type: "hotel",
    location: "Malindi",
    destinationId: "malindi",
    rating: 4.2,
    pricePerNight: 250,
    image: "https://afribay.vercel.app/kasa.jpg",
    amenities: ["Boutique Hotel", "Restaurant", "Bar", "Pool", "Cultural Tours"],
    description: "Boutique hotel with personalized service and easy access to Malindi attractions",
    galleryImages: ["https://afribay.vercel.app/kasa-1.jpg", "https://afribay.vercel.app/kasa-2.jpg", "https://afribay.vercel.app/kasa-3.jpg", "https://afribay.vercel.app/kasa-4.jpg", "https://afribay.vercel.app/kasa-5.jpg", "https://afribay.vercel.app/kasa-6.jpg", "https://afribay.vercel.app/kasa-7.jpg", "https://afribay.vercel.app/kasa-8.jpg", "https://afribay.vercel.app/kasa-9.jpg"]
  },

  // Watamu accommodations
  {
    id: "temple-point-resort",
    name: "Temple Point Resort",
    type: "resort",
    location: "Watamu",
    destinationId: "watamu",
    rating: 4.5,
    pricePerNight: 420,
    image: "https://afribay.vercel.app/temple.jpg",
    amenities: ["Cliff-top Location", "Ocean Views", "Spa", "Water Sports", "Fine Dining"],
    description: "Spectacular cliff-top resort with breathtaking ocean views and luxury amenities",
    galleryImages: ["https://afribay.vercel.app/temple-1.jpg", "https://afribay.vercel.app/temple-2.jpg", "https://afribay.vercel.app/temple-3.jpg", "https://afribay.vercel.app/temple-4.jpg", "https://afribay.vercel.app/temple-5.jpg", "https://afribay.vercel.app/temple-6.jpg", "https://afribay.vercel.app/temple-7.jpg", "https://afribay.vercel.app/temple-8.jpg", "https://afribay.vercel.app/temple-9.jpg"]
  },
  {
    id: "turtle-bay-beach-resort",
    name: "Turtle Bay Beach Resort",
    type: "resort",
    location: "Watamu",
    destinationId: "watamu",
    rating: 4.3,
    pricePerNight: 350,
    image: "https://afribay.vercel.app/turtle.jpg",
    amenities: ["Beachfront", "Pool", "Spa", "Water Sports", "Turtle Conservation"],
    description: "Beachfront resort with turtle conservation program and marine park access",
    galleryImages: ["https://afribay.vercel.app/turtle-1.jpg", "https://afribay.vercel.app/turtle-2.jpg", "https://afribay.vercel.app/turtle-3.jpg", "https://afribay.vercel.app/turtle-4.jpg", "https://afribay.vercel.app/turtle-5.jpg", "https://afribay.vercel.app/turtle-6.jpg", "https://afribay.vercel.app/turtle-7.jpg", "https://afribay.vercel.app/turtle-8.jpg", "https://afribay.vercel.app/turtle-9.jpg"]
  },
  {
    id: "medina-palms-watamu",
    name: "Medina Palms",
    type: "resort",
    location: "Watamu",
    destinationId: "watamu",
    rating: 4.6,
    pricePerNight: 520,
    image: "https://afribay.vercel.app/medina.jpg",
    amenities: ["Luxury Resort", "Private Beach", "Spa", "Fine Dining", "Water Sports"],
    description: "Luxury beachfront resort with Moorish-inspired architecture and exceptional service",
    galleryImages: ["https://afribay.vercel.app/medina-1.jpg", "https://afribay.vercel.app/medina-2.jpg", "https://afribay.vercel.app/medina-3.jpg", "https://afribay.vercel.app/medina-4.jpg", "https://afribay.vercel.app/medina-5.jpg", "https://afribay.vercel.app/medina-6.jpg", "https://afribay.vercel.app/medina-7.jpg", "https://afribay.vercel.app/medina-8.jpg", "https://afribay.vercel.app/medina-9.jpg"]
  },
  {
    id: "barracuda-inn-resort",
    name: "Barracuda Inn Resort",
    type: "resort",
    location: "Watamu",
    destinationId: "watamu",
    rating: 4.2,
    pricePerNight: 280,
    image: "https://afribay.vercel.app/barracuda.jpg",
    amenities: ["Beachfront", "Pool", "Restaurant", "Water Sports", "Diving Center"],
    description: "Comfortable beachfront resort with diving center and water sports facilities",
    galleryImages: ["https://afribay.vercel.app/barracuda-1.jpg", "https://afribay.vercel.app/barracuda-2.jpg", "https://afribay.vercel.app/barracuda-3.jpg", "https://afribay.vercel.app/barracuda-4.jpg", "https://afribay.vercel.app/barracuda-5.jpg", "https://afribay.vercel.app/barracuda-6.jpg", "https://afribay.vercel.app/barracuda-7.jpg", "https://afribay.vercel.app/barracuda-8.jpg", "https://afribay.vercel.app/barracuda-9.jpg"]
  },

  // Nanyuki accommodations
  {
    id: "lewa-safari-camp",
    name: "Lewa Safari Camp",
    type: "camp",
    location: "Nanyuki",
    destinationId: "mt-kenya",
    rating: 4.7,
    pricePerNight: 650,
    image: "https://afribay.vercel.app/lewa.jpg",
    amenities: ["Luxury Tents", "Private Conservancy", "Rhino Sanctuary", "Cultural Activities", "Horse Riding"],
    description: "Exclusive luxury camp in world-renowned Lewa Wildlife Conservancy",
    galleryImages: ["https://afribay.vercel.app/lewa-1.jpg", "https://afribay.vercel.app/lewa-2.jpg", "https://afribay.vercel.app/lewa-3.jpg", "https://afribay.vercel.app/lewa-4.jpg", "https://afribay.vercel.app/lewa-5.jpg", "https://afribay.vercel.app/lewa-6.jpg", "https://afribay.vercel.app/lewa-7.jpg", "https://afribay.vercel.app/lewa-8.jpg", "https://afribay.vercel.app/lewa-9.jpg"]
  },
  {
    id: "fairmont-mount-kenya",
    name: "Fairmont Mount Kenya Safari Club",
    type: "lodge",
    location: "Nanyuki",
    destinationId: "mt-kenya",
    rating: 4.6,
    pricePerNight: 420,
    image: "https://afribay.vercel.app/fairmont.jpg",
    amenities: ["Mountain Views", "Golf Course", "Spa", "Wildlife Sanctuary", "Equator Location"],
    description: "Historic luxury lodge with stunning Mount Kenya views and rich colonial heritage",
    galleryImages: ["https://afribay.vercel.app/fairmont-1.jpg", "https://afribay.vercel.app/fairmont-2.jpg", "https://afribay.vercel.app/fairmont-3.jpg", "https://afribay.vercel.app/fairmont-4.jpg", "https://afribay.vercel.app/fairmont-5.jpg", "https://afribay.vercel.app/fairmont-6.jpg", "https://afribay.vercel.app/fairmont-7.jpg", "https://afribay.vercel.app/fairmont-8.jpg", "https://afribay.vercel.app/fairmont-9.jpg"]
  },
  {
    id: "the-river-camp-nanyuki",
    name: "The River Camp",
    type: "camp",
    location: "Nanyuki",
    destinationId: "mt-kenya",
    rating: 4.4,
    pricePerNight: 380,
    image: "https://afribay.vercel.app/river.jpg",
    amenities: ["Riverside Location", "Tented Camp", "Nature Walks", "Bird Watching", "Cultural Activities"],
    description: "Comfortable riverside camp offering authentic bush experience with mountain views",
    galleryImages: ["https://afribay.vercel.app/river-1.jpg", "https://afribay.vercel.app/river-2.jpg", "https://afribay.vercel.app/river-3.jpg", "https://afribay.vercel.app/river-4.jpg", "https://afribay.vercel.app/river-5.jpg", "https://afribay.vercel.app/river-6.jpg", "https://afribay.vercel.app/river-7.jpg", "https://afribay.vercel.app/river-8.jpg", "https://afribay.vercel.app/river-9.jpg"]
  },
  {
    id: "sweetwaters-serena-camp",
    name: "Sweetwaters Serena Camp",
    type: "camp",
    location: "Nanyuki",
    destinationId: "mt-kenya",
    rating: 4.5,
    pricePerNight: 450,
    image: "https://afribay.vercel.app/sweetwaters.jpg",
    amenities: ["Luxury Tents", "Rhino Sanctuary", "Chimpanzee Sanctuary", "Game Drives", "Cultural Center"],
    description: "Luxury tented camp in private conservancy with rhino and chimpanzee sanctuaries",
    galleryImages: ["https://afribay.vercel.app/sweetwaters-1.jpg", "https://afribay.vercel.app/sweetwaters-2.jpg", "https://afribay.vercel.app/sweetwaters-3.jpg", "https://afribay.vercel.app/sweetwaters-4.jpg", "https://afribay.vercel.app/sweetwaters-5.jpg", "https://afribay.vercel.app/sweetwaters-6.jpg", "https://afribay.vercel.app/sweetwaters-7.jpg", "https://afribay.vercel.app/sweetwaters-8.jpg", "https://afribay.vercel.app/sweetwaters-9.jpg"]
  },
  {
    id: "maisha-sweetwaters-camp",
    name: "Maisha Sweetwaters Camp",
    type: "camp",
    location: "Nanyuki",
    destinationId: "mt-kenya",
    rating: 4.3,
    pricePerNight: 320,
    image: "https://afribay.vercel.app/maisha.jpg",
    amenities: ["Tented Camp", "Conservancy Location", "Game Drives", "Cultural Activities", "Nature Walks"],
    description: "Comfortable tented camp in conservancy setting with excellent wildlife viewing",
    galleryImages: ["https://afribay.vercel.app/maisha-1.jpg", "https://afribay.vercel.app/maisha-2.jpg", "https://afribay.vercel.app/maisha-3.jpg", "https://afribay.vercel.app/maisha-4.jpg", "https://afribay.vercel.app/maisha-5.jpg", "https://afribay.vercel.app/maisha-6.jpg", "https://afribay.vercel.app/maisha-7.jpg", "https://afribay.vercel.app/maisha-8.jpg", "https://afribay.vercel.app/maisha-9.jpg"]
  },

  // Keep existing accommodations
  {
    id: "mara-serena-lodge",
    name: "Mara Serena Safari Lodge",
    type: "lodge",
    location: "Masai Mara",
    destinationId: "masai-mara",
    rating: 4.5,
    pricePerNight: 350,
    image: "https://afribay.vercel.app/serena3.jpg",
    amenities: ["Pool", "Spa", "Restaurant", "Game Drives", "Cultural Center"],
    description: "Luxury lodge overlooking the Mara River with stunning wildlife views",
  },
  {
    id: "amboseli-serena-lodge",
    name: "Amboseli Serena Safari Lodge",
    type: "lodge",
    location: "Amboseli",
    destinationId: "amboseli",
    rating: 4.3,
    pricePerNight: 320,
    image: "https://afribay.vercel.app/amboseli-serena.jpg",
    amenities: ["Pool", "Restaurant", "Bar", "Spa", "Mount Kilimanjaro Views"],
    description: "Elegant lodge with breathtaking views of Mount Kilimanjaro",
  },
  {
    id: "lake-nakuru-lodge",
    name: "Lake Nakuru Lodge",
    type: "lodge",
    location: "Lake Nakuru",
    destinationId: "lake-nakuru",
    rating: 4.0,
    pricePerNight: 250,
    image: "https://afribay.vercel.app/nakuru-lodge.jpg",
    amenities: ["Lake Views", "Restaurant", "Bar", "Game Drives", "Bird Watching"],
    description: "Comfortable lodge with panoramic views of Lake Nakuru",
  },

  {
    id: "zanzibar-serena-hotel",
    name: "Zanzibar Serena Hotel",
    type: "hotel",
    location: "Stone Town, Zanzibar",
    destinationId: "zanzibar",
    rating: 4.7,
    pricePerNight: 450,
    image: "https://afribay.vercel.app/zanzibar-serena.jpg",
    amenities: ["Historic Building", "Rooftop Restaurant", "Spa", "Cultural Tours", "Ocean Views"],
    description: "Boutique hotel in the heart of Stone Town with authentic Zanzibari charm",
  },
  {
    id: "lamu-house-hotel",
    name: "Lamu House Hotel",
    type: "hotel",
    location: "Lamu Town",
    destinationId: "lamu",
    rating: 4.3,
    pricePerNight: 280,
    image: "https://afribay.vercel.app/lamu-house.jpg",
    amenities: ["Traditional Architecture", "Rooftop Terrace", "Cultural Immersion", "Local Cuisine", "Dhow Trips"],
    description: "Authentic Swahili house hotel offering traditional island hospitality",
  },
  
{
    id: "watamu-treehouse",
    name: "Watamu Treehouse",
    type: "lodge",
    location: "Watamu",
    destinationId: "watamu",
    rating: 4.4,
    pricePerNight: 320,
    image: "https://afribay.vercel.app/tree.jpg",
    amenities: ["Unique Treehouse Rooms", "Marine Park Access", "Diving Center", "Eco-Friendly", "Turtle Conservation"],
    description: "Unique eco-lodge with treehouse accommodations overlooking the marine park",
    galleryImages: [
      "https://afribay.vercel.app/tree-1.jpg",
      "https://afribay.vercel.app/tree-2.jpg",
      "https://afribay.vercel.app/tree-3.jpg",
      "https://afribay.vercel.app/tree-4.jpg",
      "https://afribay.vercel.app/tree-5.jpg",
      "https://afribay.vercel.app/tree-6.jpg",
      "https://afribay.vercel.app/tree-7.jpg",
      "https://afribay.vercel.app/tree-8.jpg"
    ]
  },
  {
    id: "mt-kenya-safari-club",
    name: "Mount Kenya Safari Club",
    type: "lodge",
    location: "Nanyuki",
    destinationId: "mt-kenya",
    rating: 4.6,
    pricePerNight: 420,
    image: "https://afribay.vercel.app/mt-kenya-safari-club.jpg",
    amenities: ["Mountain Views", "Golf Course", "Spa", "Wildlife Sanctuary", "Equator Location"],
    description: "Historic luxury lodge with stunning Mount Kenya views and rich colonial heritage",
  },
  {
    id: "lake-naivasha-sopa-lodge",
    name: "Lake Naivasha Sopa Resort",
    type: "resort",
    location: "Lake Naivasha",
    destinationId: "naivasha",
    rating: 4.3,
    pricePerNight: 290,
    image: "https://afribay.vercel.app/sopa.jpg",
    amenities: ["Lake Views", "Pool", "Boat Safaris", "Spa", "Conference Facilities"],
    description: "Lakeside resort offering spectacular views and easy access to lake activities",
  },
]

export const vehicles: Vehicle[] = [
  {
    id: "land-cruiser",
    name: "Toyota Land Cruiser",
    type: "land-cruiser",
    capacity: 6,
    pricePerDay: 300,
    image: "https://afribay.vercel.app/land-cruiser.jpg",
    features: ["4WD", "Pop-up Roof", "Charging Ports", "Cooler Box", "First Aid Kit"],
    description: "Rugged and reliable 4WD vehicle perfect for game drives and rough terrain",
  },
  {
    id: "tour-van",
    name: "Safari Tour Van",
    type: "tour-van",
    capacity: 8,
    pricePerDay: 200,
    image: "https://afribay.vercel.app/tourvan.jpg",
    features: ["Extended Roof", "Large Windows", "Air Conditioning", "Storage Space", "Comfortable Seating"],
    description: "Spacious van with excellent visibility for wildlife viewing and group travel",
  },
  {
    id: "executive-car",
    name: "Executive Car",
    type: "executive-car",
    capacity: 4,
    pricePerDay: 150,
    image: "https://afribay.vercel.app/executive-car.jpg",
    features: ["Luxury Interior", "Air Conditioning", "WiFi", "Premium Sound", "Leather Seats"],
    description: "Luxury vehicle for comfortable transfers and premium safari experiences",
  },
]

export const packages: Package[] = [
  
  {
  "id": "13-day-premium-east-africa-safari",
  "title": "East Africa Unveiled: A 13-Day Premium Adventure",
  "category": "premium",
  "duration": "13 Days / 12 Nights",
  "price": 18100,
  "image": "https://afribay.vercel.app/east-africa-safari.jpg",
  "gallery": [
    "https://afribay.vercel.app/nairobi.jpg",
    "https://afribay.vercel.app/amboseli.jpg",
    "https://afribay.vercel.app/loisaba.jpg",
    "https://afribay.vercel.app/masai-mara.jpg",
    "https://afribay.vercel.app/serengeti.jpg",
    "https://afribay.vercel.app/ngorongoro.jpg",
    "https://afribay.vercel.app/arusha.jpg"
  ],
  "description": "Experience an incredible 13-day safari adventure through East Africa's most stunning destinations including Nairobi, Amboseli, Loisaba, Masai Mara, Serengeti, Ngorongoro, and Arusha.",
  "fullDescription": "Embark on a 13-day East African safari journey that takes you through Nairobi, Amboseli, Loisaba, Masai Mara, Serengeti, Ngorongoro, and Arusha. Enjoy private game drives, cultural experiences, and luxury accommodations throughout your adventure.",
  "highlights": [
    "Private game drives in Amboseli, Masai Mara, Serengeti, and Ngorongoro",
    "Exclusive flights between destinations",
    "Luxury accommodations in the Elewana Collection",
    "Cultural experiences and guided bush walks",
    "Iconic wildlife viewing across multiple parks"
  ],
  "includes": [
    "12 nights accommodation in luxury lodges",
    "All meals (breakfast, lunch, dinner)",
    "Private game drives and safari activities",
    "Domestic private flights between parks",
    "Professional English-speaking guide",
    "Entrance fees to national parks and conservancies",
    "VIP airport transfers and fast-track services",
    "Laundry services and temporary medical evacuation insurance"
  ],
  "excludes": [
    "International flights",
    "Travel insurance",
    "Tanzania visa fees",
    "Optional activities not specified in the itinerary",
    "Items of a personal nature"
  ],
  "itinerary": [
    {
      "day": 1,
      "title": "Arrival in Nairobi",
      "description": "Welcome to Kenya with luxury accommodation",
      "activities": [
        "Arrival at Jomo Kenyatta International Airport",
        "VIP fast-track through arrival procedures",
        "Private transfer to Hemingways Hotel or similar",
        "Dinner at the hotel"
      ]
    },
    {
      "day": 2,
      "title": "Nairobi to Amboseli",
      "description": "Transfer from Nairobi to Amboseli National Park with a scenic flight and afternoon game drive.",
      "activities": [
        "Breakfast and briefing at the hotel",
        "Transfer to Wilson Airport",
        "Flight to Amboseli National Park",
        "Lunch at Elewana Tortilis Camp",
        "Afternoon game drive",
        "Dinner at camp"
      ]
    },
    {
      "day": 3,
      "title": "Amboseli National Park",
      "description": "Full day exploring Amboseli with game drives and walking safari.",
      "activities": [
        "Early morning game drive",
        "Bush breakfast",
        "Walking safari",
        "Lunch at camp",
        "Sundowners",
        "Private dinner"
      ]
    },
    {
      "day": 4,
      "title": "Amboseli to Loisaba",
      "description": "Travel from Amboseli National Park to Loisaba Conservancy, with game drives and scenic experiences.",
      "activities": [
        "Breakfast at camp",
        "Game drive en-route to airstrip",
        "Flight to Loisaba Conservancy",
        "VIP welcome and briefing",
        "Game drive to camp",
        "Sundowners",
        "Dinner"
      ]
    },
    {
      "day": 5,
      "title": "Loisaba Conservancy",
      "description": "Choice of exclusive activities in Loisaba Conservancy.",
      "activities": [
        "Choice of game drive / cultural visit / bush walk / camel safari / anti-poaching demo",
        "Bush breakfast",
        "Lunch at camp",
        "Afternoon activities",
        "Dinner under the stars"
      ]
    },
    {
      "day": 6,
      "title": "Loisaba Conservancy",
      "description": "Second day of tailored experiences in Loisaba Conservancy.",
      "activities": [
        "Game drive, horse / camel-back exploration, bush running / trekking",
        "Bush breakfast",
        "Spa treatment",
        "Lunch at camp",
        "Afternoon game drive or Samburu village visit",
        "Dinner"
      ]
    },
    {
      "day": 7,
      "title": "Loisaba to Masai Mara",
      "description": "Travel from Loisaba Conservancy to the world-famous Masai Mara, with game drives and scenic experiences.",
      "activities": [
        "Breakfast at camp",
        "Game drive en-route to airstrip",
        "Flight to Masai Mara",
        "Game drive to camp",
        "Lunch at camp",
        "Afternoon game drive",
        "Sundowners",
        "Dinner"
      ]
    },
    {
      "day": 8,
      "title": "Masai Mara National Reserve",
      "description": "Full day in the Mara with game drives and optional balloon safari.",
      "activities": [
        "Early breakfast",
        "Full-day game drive with bush lunch",
        "Optional balloon safari (Kenya add-on)",
        "Dinner under the stars"
      ]
    },
    {
      "day": 9,
      "title": "Masai Mara",
      "description": "Second full day in the Mara",
      "activities": [
        "Early morning game drive",
        "Bush breakfast",
        "Lunch at camp",
        "Afternoon game drive",
        "Farewell sundowners",
        "Dinner"
      ]
    },
    {
      "day": 10,
      "title": "Masai Mara to Serengeti",
      "description": "Travel from Masai Mara to Serengeti via air, with game drives and scenic experiences.",
      "activities": [
        "Breakfast at camp",
        "Game drive en-route to Keekorok airstrip",
        "Flight to Kisumu (Kenya) → Musoma (Tanzania)",
        "Fly Musoma to Lobo/Seronera (seasonal)",
        "Afternoon game drive",
        "Sundowners at Serengeti Pioneer/Migration Camp",
        "Dinner"
      ]
    },
    {
      "day": 11,
      "title": "Serengeti National Park",
      "description": "Explore the Serengeti and transfer to Ngorongoro.",
      "activities": [
        "Morning guided bush walk or game drive en-route to airstrip",
        "Afternoon flight to Manyara airstrip",
        "Drive to The Manor at Ngorongoro for lunch",
        "Afternoon activities (coffee tour, pool, spa, etc.)",
        "Dinner at The Manor"
      ]
    },
    {
      "day": 12,
      "title": "Ngorongoro Crater",
      "description": "Full-day exploration of the Ngorongoro Crater.",
      "activities": [
        "Early breakfast at The Manor",
        "Full-day crater tour with picnic lunch",
        "Dinner at The Manor"
      ]
    },
    {
      "day": 13,
      "title": "Departure",
      "description": "Final day in Tanzania and departure.",
      "activities": [
        "Breakfast at camp",
        "Flight to Arusha Airport",
        "Day-room at Arusha Coffee Lodge (subject to availability)",
        "Transfer to Kilimanjaro International Airport"
      ]
    }
  ],
  "destinations": ["nairobi", "amboseli", "loisaba", "masai-mara", "serengeti", "ngorongoro", "arusha"],
  "accommodations": [
    "hemingways-hotel",
    "elewana-tortilis-camp",
    "elewana-loisaba-tented-camp",
    "elewana-sand-river-masai-mara",
    "elewana-serengeti-camps",
    "elewana-the-manor-at-ngorongoro",
    "elewana-arusha-coffee-lodge"
  ],
  "difficulty": "easy",
  "bestTime": "Year-round",
  "groupSize": { "min": 2, "max": 8 },
  "pdfItinerary": "https://afribay.vercel.app/13-day-east-africa-safari-itinerary.pdf",

  /* ——————————— PREMIUM PRICING OBJECT ——————————— */
  "pricing": {
    "validity": "01 Jan 2025 to 31 Dec 2025",
    "seasons": {
      "high": ["01 Jan - 04 Jan", "01 Jul - 31 Oct", "20 Dec - 31 Dec"],
      "mid":  ["05 Jan - 31 Mar", "01 Jun - 30 Jun", "01 Nov - 19 Dec"],
      "green":["01 Apr - 31 May"]
    },
    "park_fees": {
      "adult": {
        "1 Jan to 14 Mar / 16 May to 31 Dec": 1499,
        "15 Mar to 15 May": 1399
      },
      "child": { "5 - 14.99 years": 379 }
    },
    "tourism_development_levy": "included_in_rates",
    "child_policy": {
      "0-11.99_years":  "free_of_charge",
      "12-17.99_years": "75_percent_of_adult_rate"
    },
    "enhancements": {
      "balloon_safari": "kenya: 475_per_person; tanzania: 525_per_person"
    },
    "special_offer": "single room supplement not charged for first single room per booking"
  },

  "detailedSeasonalRates": {
    "validity": "Valid from 01 Jan 2025 to 31 Dec 2025",
    "seasons": [
      { "name": "HIGH", "dates": "01 Jan - 04 Jan, 01 Jul - 31 Oct, 20 Dec - 31 Dec" },
      { "name": "MID",  "dates": "05 Jan - 31 Mar, 01 Jun - 30 Jun, 01 Nov - 19 Dec" },
      { "name": "GREEN","dates": "01 Apr - 31 May" }
    ],
    "rates": [
      { "description": "Per person sharing", "high": 18100, "mid": 16450, "green": 14900 },
      { "description": "Per person in a single room", "high": 22500, "mid": 20450, "green": 18650 },
      { "description": "Child under 12 sharing with 1 or 2 adults (max 2)", "high": 9050, "mid": 8225, "green": 7450 }
    ],
    "parkConservancyFees": {
      "adult": {
        "1 Jan – 14 Mar / 16 May – 31 Dec": 1499,
        "15 Mar – 15 May": 1399
      },
      "child": { "5 – 14.99 years": 379 }
    },
    "tourismDevelopmentLevy": "included_in_rates",
    "childPolicy": [
      "Children in own room (min 2 / max 3): 75 % of adult per-person rate.",
      "Children under 12 sharing with 1 adult: child pays child-rate; adult pays single-room rate.",
      "Children under 14 yrs not recommended in own room unless accompanied by an adult."
    ],
    "enhancements": {
      "balloonSafariKenya": 475,
      "balloonSafariTanzania": 525
    },
    "specialOffer": "Single-room supplement waived for the **first single room** per booking."
  },

  "seasonsAndRates": {
    "validity": "Valid from 01 Jan 2025 to 31 Dec 2025",
    "seasons": [
      { "name": "HIGH", "color": "#FF5733", "dates": "01 Jan - 04 Jan, 01 Jul - 31 Oct, 20 Dec - 31 Dec" },
      { "name": "MID",  "color": "#FFB733", "dates": "05 Jan - 31 Mar, 01 Jun - 30 Jun, 01 Nov - 19 Dec" },
      { "name": "GREEN","color": "#33CC75", "dates": "01 Apr - 31 May" }
    ],
    "rateTable": {
      "headers": ["Group Size", "High Season (Published)", "Mid Season (Published)", "Green Season (Published)"],
      "rows": [
        {"groupSize": 2, "highPublished": 62100, "midPublished": 55600, "greenPublished": 53500},
        {"groupSize": 3, "highPublished": 41740, "midPublished": 37400, "greenPublished": 36200},
        {"groupSize": 4, "highPublished": 31555, "midPublished": 28300, "greenPublished": 27400},
        {"groupSize": 5, "highPublished": 25344, "midPublished": 22762, "greenPublished": 20720},
        {"groupSize": 6, "highPublished": 21396, "midPublished": 21254, "greenPublished": 19213},
        {"groupSize": 7, "highPublished": 21170, "midPublished": 21008, "greenPublished": 18968},
        {"groupSize": 8, "highPublished": 20356, "midPublished": 20128, "greenPublished": 18100}
      ]
    }
  },

  "specialNotes": [
    "Visa requirements vary by country - please check with your nearest embassy",
    "Yellow fever vaccination certificate required",
    "Light aircraft baggage limit: 15 kg soft bags",
    "Detailed pre-departure documents provided 30 days prior"
  ]
},
  {
  "id": "10-day-premium-tanzania-safari",
  "title": "10-Day Tanzania Luxury Safari: Arusha to Ngorongoro's Wonders",
  "category": "premium",
  "duration": "10 Days / 9 Nights",
  "price": 12706,
  "image": "https://afribay.vercel.app/tanzania-safari.jpg",
  "gallery": [
    "https://afribay.vercel.app/arusha.jpg",
    "https://afribay.vercel.app/tarangire-national-park.jpg",
    "https://afribay.vercel.app/serengeti-national-park.jpg",
    "https://afribay.vercel.app/ngorongoro-crater.jpg"
  ],
  "description": "Experience an incredible 10-day safari adventure through Tanzania's most stunning destinations including Arusha, Tarangire National Park, Serengeti National Park, and Ngorongoro Crater.",
  "fullDescription": "Embark on a 10-day Tanzanian safari journey that takes you through Arusha, Tarangire National Park, Serengeti National Park, and Ngorongoro Crater. Enjoy private game drives, cultural experiences, and luxury accommodations throughout your adventure.",
  "highlights": [
    "Private game drives in Tarangire National Park, Serengeti National Park, and Ngorongoro Crater",
    "Exclusive flights between destinations",
    "Luxury accommodations in the Elewana Collection",
    "Cultural experiences and guided bush walks",
    "Iconic wildlife viewing across multiple parks"
  ],
  "includes": [
    "9 nights accommodation in luxury lodges",
    "All meals (breakfast, lunch, dinner)",
    "Private game drives and safari activities",
    "Domestic private flights between parks",
    "Professional English-speaking guide",
    "Entrance fees to national parks and conservancies",
    "VIP airport transfers and fast-track services",
    "Laundry services and temporary medical evacuation insurance"
  ],
  "excludes": [
    "International flights",
    "Travel insurance",
    "Tanzania visa fees",
    "Optional activities not specified in the itinerary",
    "Items of a personal nature"
  ],
  "itinerary": [
    {
      "day": 1,
      "title": "Arrival in Arusha",
      "description": "Welcome to Tanzania with luxury accommodation",
      "activities": [
        "Arrival at Kilimanjaro International Airport",
        "VIP fast-track through arrival procedures",
        "Private transfer to Elewana Arusha Coffee Lodge",
        "Optional Shanga cultural experience depending on arrival time"
      ]
    },
    {
      "day": 2,
      "title": "Arusha & Tarangire",
      "description": "Fly into Tarangire National Park",
      "activities": [
        "Breakfast at Elewana Arusha Coffee Lodge",
        "Morning flight to Kuro Airstrip in Tarangire National Park",
        "Full-day game drive with private picnic lunch",
        "Sundowners at Elewana Tarangire Treetops",
        "Traditional Maasai boma dinner"
      ]
    },
    {
      "day": 3,
      "title": "Tarangire",
      "description": "Full day exploring Tarangire",
      "activities": ["Morning bush walk", "Bush breakfast", "Lunch at camp", "Afternoon game drive", "Night game drive", "Dinner at camp"]
    },
    {
      "day": 4,
      "title": "Tarangire",
      "description": "Second day in Tarangire",
      "activities": ["Game drive", "Maasai village visit", "Sundowners", "Dinner at camp"]
    },
    {
      "day": 5,
      "title": "Tarangire & Serengeti",
      "description": "Fly to the Serengeti plains",
      "activities": [
        "Early breakfast and game drive en-route to airstrip",
        "Flight to Serengeti National Park",
        "Game drive to camp",
        "Lunch and afternoon game drive",
        "Dinner at camp"
      ]
    },
    {
      "day": 6,
      "title": "Serengeti National Park",
      "description": "Full day in the Serengeti",
      "activities": ["Game drive or bush walk", "Bush lunch", "Sundowners", "Dining under the stars"]
    },
    {
      "day": 7,
      "title": "Serengeti",
      "description": "Second full day in the Serengeti",
      "activities": ["Early breakfast", "Full-day game drive with bush lunch", "Sundowners", "Dinner at camp"]
    },
    {
      "day": 8,
      "title": "Serengeti & Ngorongoro",
      "description": "Journey to the crater rim",
      "activities": [
        "Breakfast and game drive en-route to airstrip",
        "Flight to Manyara airstrip",
        "Transfer to Elewana The Manor at Ngorongoro",
        "Afternoon activities (coffee tour, pool, spa, etc.)",
        "Dinner at The Manor"
      ]
    },
    {
      "day": 9,
      "title": "Ngorongoro Crater",
      "description": "Full day crater safari",
      "activities": ["Early breakfast", "Full-day crater tour with picnic lunch", "Dinner at The Manor"]
    },
    {
      "day": 10,
      "title": "Departure",
      "description": "Farewell Tanzania",
      "activities": [
        "Breakfast at camp",
        "Transfer to Manyara Airstrip",
        "Flight to Arusha Airport",
        "Day-room at Arusha Coffee Lodge (subject to availability)",
        "Transfer to Kilimanjaro International Airport"
      ]
    }
  ],
  "destinations": ["arusha", "tarangire", "serengeti", "ngorongoro"],
  "accommodations": [
    "elewana-arusha-coffee-lodge",
    "elewana-tarangire-treetops",
    "elewana-serengeti-camps",
    "elewana-the-manor-at-ngorongoro"
  ],
  "difficulty": "easy",
  "bestTime": "Year-round",
  "groupSize": { "min": 2, "max": 8 },
  "pdfItinerary": "https://afribay.vercel.app/10-day-tanzania-safari-itinerary.pdf",

  /* ————————————————————————————————————————————
     PREMIUM PRICING OBJECT (EXACT SAME SHAPE)
  ———————————————————————————————————————————— */
  "pricing": {
    "validity": "01 Jan 2025 to 31 Dec 2025",
    "seasons": {
      "high": ["01 Jan - 04 Jan", "01 Jul - 31 Oct", "20 Dec - 31 Dec"],
      "mid":  ["05 Jan - 31 Mar", "01 Jun - 30 Jun", "01 Nov - 19 Dec"],
      "green":["01 Apr - 31 May"]
    },
    "park_fees": {
      "adult": {
        "1 Jan to 14 Mar / 16 May to 31 Dec": 927,
        "15 Mar to 15 May": 841
      },
      "child": { "5 - 14.99 years": 219 }
    },
    "tourism_development_levy": "included_in_rates",
    "child_policy": {
      "0-11.99_years":  "free_of_charge",
      "12-17.99_years": "75_percent_of_adult_rate"
    },
    "enhancements": {
      "balloon_safari": "540_per_person"
    },
    "special_offer": "single room supplement not charged for first single room per booking"
  },

  "detailedSeasonalRates": {
    "validity": "Valid from 01 Jan 2025 to 31 Dec 2025",
    "seasons": [
      { "name": "HIGH", "dates": "01 Jan - 04 Jan, 01 Jul - 31 Oct, 20 Dec - 31 Dec" },
      { "name": "MID",  "dates": "05 Jan - 31 Mar, 01 Jun - 30 Jun, 01 Nov - 19 Dec" },
      { "name": "GREEN","dates": "01 Apr - 31 May" }
    ],
    "rates": [
      { "description": "Per person sharing", "high": 12706, "mid": 11610, "green": 10200 },
      { "description": "Per person in a single room", "high": 15956, "mid": 14360, "green": 13300 },
      { "description": "Child under 12 sharing with 1 or 2 adults (max 2)", "high": 6353, "mid": 5805, "green": 5100 }
    ],
    "parkConservancyFees": {
      "adult": {
        "1 Jan – 14 Mar / 16 May – 31 Dec": 927,
        "15 Mar – 15 May": 841
      },
      "child": { "5 – 14.99 years": 219 }
    },
    "tourismDevelopmentLevy": "included_in_rates",
    "childPolicy": [
      "Children in own room (min 2 / max 3): 75 % of adult per-person rate.",
      "Children under 12 sharing with 1 adult: child pays child-rate; adult pays single-room rate.",
      "Children under 14 yrs not recommended in own room unless accompanied by an adult."
    ],
    "enhancements": { "balloonSafari": 540 },
    "specialOffer": "Single-room supplement waived for the **first single room** per booking."
  },

  "seasonsAndRates": {
    "validity": "Valid from 01 Jan 2025 to 31 Dec 2025",
    "seasons": [
      { "name": "HIGH", "color": "#FF5733", "dates": "01 Jan - 04 Jan, 01 Jul - 31 Oct, 20 Dec - 31 Dec" },
      { "name": "MID",  "color": "#FFB733", "dates": "05 Jan - 31 Mar, 01 Jun - 30 Jun, 01 Nov - 19 Dec" },
      { "name": "GREEN","color": "#33CC75", "dates": "01 Apr - 31 May" }
    ],
    "rateTable": {
      "headers": ["Group Size", "High Season (Published)", "Mid Season (Published)", "Green Season (Published)"],
      "rows": [
        {"groupSize": 2, "highPublished": 40440, "midPublished": 37020, "greenPublished": 32670},
        {"groupSize": 3, "highPublished": 26960, "midPublished": 24680, "greenPublished": 21780},
        {"groupSize": 4, "highPublished": 20220, "midPublished": 18510, "greenPublished": 16335},
        {"groupSize": 5, "highPublished": 16376, "midPublished": 15008, "greenPublished": 13312},
        {"groupSize": 6, "highPublished": 15046, "midPublished": 14429, "greenPublished": 13060},
        {"groupSize": 7, "highPublished": 14685, "midPublished": 14212, "greenPublished": 12530},
        {"groupSize": 8, "highPublished": 14438, "midPublished": 14000, "greenPublished": 12706}
      ]
    }
  },

  "specialNotes": [
    "Tanzania visa can be obtained upon arrival ($50 USD)",
    "Yellow fever vaccination certificate required",
    "Light aircraft baggage limit: 15 kg soft bags",
    "Detailed pre-departure documents provided 30 days prior"
  ]
},
  {
  "id": "8-day-premium-tanzania-safari",
  "title": "8-Day Premium Tanzania Safari: Journey to the Ngorongoro Crater",
  "category": "premium",
  "duration": "8 Days / 7 Nights",
  "price": 10026,
  "image": "https://afribay.vercel.app/tanzania-safari-1.jpg",
  "gallery": [
    "https://afribay.vercel.app/arusha.jpg",
    "https://afribay.vercel.app/tarangire-national-park.jpg",
    "https://afribay.vercel.app/serengeti-national-park.jpg",
    "https://afribay.vercel.app/ngorongoro-crater.jpg"
  ],
  "description": "Experience an incredible 8-day safari adventure through Tanzania's most stunning destinations including Arusha, Tarangire National Park, Serengeti National Park, and Ngorongoro Crater.",
  "highlights": [
    "Private game drives in Tarangire National Park and Serengeti National Park",
    "Exclusive flights between destinations",
    "Luxury accommodations in the Elewana Collection",
    "Cultural experiences and guided bush walks",
    "Iconic Ngorongoro Crater tour"
  ],
  "itinerary": [
    {
      "day": 1,
      "title": "Arrival in Arusha",
      "description": "Welcome to Tanzania with luxury accommodation",
      "activities": [
        "Arrival at Kilimanjaro International Airport",
        "VIP fast-track through arrival procedures",
        "Private transfer to Elewana Arusha Coffee Lodge",
        "Optional Shanga cultural experience depending on arrival time"
      ]
    },
    {
      "day": 2,
      "title": "Arusha to Tarangire",
      "description": "Scenic flight into the wild",
      "activities": [
        "Breakfast at Elewana Arusha Coffee Lodge",
        "Morning flight to Kuro Airstrip in Tarangire National Park",
        "Full-day game drive through Tarangire National Park with private picnic lunch in the bush",
        "Late afternoon arrival to Elewana Tarangire Treetops in time for sundowners",
        "A traditional Maasai boma dinner at the camp"
      ]
    },
    {
      "day": 3,
      "title": "Tarangire National Park",
      "description": "Full day exploring Tarangire",
      "activities": [
        "Bush walk",
        "Breakfast in the bush",
        "Maasai village visit",
        "Lunch in camp",
        "Game drive",
        "Sundowners in the bush",
        "Night game drive",
        "Dinner at camp"
      ]
    },
    {
      "day": 4,
      "title": "Tarangire to Serengeti",
      "description": "Fly into the Serengeti plains",
      "activities": [
        "Early morning breakfast at camp",
        "Game drive enroute to Kuro airstrip",
        "Flight to Serengeti National Park",
        "Game drive enroute to camp",
        "Lunch at camp",
        "Afternoon game drive",
        "Dinner at camp"
      ]
    },
    {
      "day": 5,
      "title": "Serengeti National Park",
      "description": "Full day exploring the Serengeti",
      "activities": [
        "Breakfast at camp",
        "Game drive in Serengeti National Park",
        "Lunch in the bush",
        "Dining under the stars"
      ]
    },
    {
      "day": 6,
      "title": "Serengeti to Ngorongoro",
      "description": "Journey to the crater rim",
      "activities": [
        "Breakfast at camp",
        "Morning game drive enroute to airstrip",
        "Flight to Manyara airstrip",
        "Transfer to Elewana The Manor at Ngorongoro for lunch",
        "Afternoon activities such as plantation coffee tour, horse-riding, high tea, and massage treatment",
        "Dinner at The Manor"
      ]
    },
    {
      "day": 7,
      "title": "Ngorongoro Crater",
      "description": "Full day crater safari",
      "activities": [
        "Early breakfast at The Manor",
        "Full day Ngorongoro crater tour",
        "Picnic lunch in the crater",
        "Dinner at The Manor"
      ]
    },
    {
      "day": 8,
      "title": "Departure",
      "description": "Farewell Tanzania",
      "activities": [
        "Breakfast at camp",
        "Transfer to Manyara Airstrip",
        "Flight to Arusha Airport",
        "Private ground transfer to Arusha Coffee Lodge",
        "Optional Shanga cultural experience depending on departure time",
        "Road transfer to Kilimanjaro International Airport for departure"
      ]
    }
  ],
  "includes": [
    "7 nights luxury accommodation",
    "All meals (breakfast, lunch, dinner)",
    "Daily activities as per itinerary",
    "All park entrance fees",
    "Professional English-speaking guide",
    "Airport transfers",
    "Complimentary sundowner drinks"
  ],
  "excludes": [
    "International flights",
    "Visa fees",
    "Personal expenses",
    "Tips",
    "Travel insurance"
  ],
  "destinations": [
    "arusha",
    "tarangire",
    "serengeti",
    "ngorongoro"
  ],
  "accommodations": [
    "elewana-arusha-coffee-lodge",
    "elewana-tarangire-treetops",
    "elewana-serengeti-camps",
    "elewana-the-manor-at-ngorongoro"
  ],
  "difficulty": "easy",
  "bestTime": "Year-round",
  "groupSize": { "min": 2, "max": 8 },
  "pdfItinerary": "https://afribay.vercel.app/8-day-tanzania-safari-itinerary.pdf",

  /* ————————————————————————————————
     EXACT PRICING SECTIONS (UNCHANGED)
     ———————————————————————————————— */
  "pricing": {
    "validity": "01 Jan 2025 to 31 Dec 2025",
    "seasons": {
      "high": [
        "01 Jan - 04 Jan",
        "01 Jul - 31 Oct",
        "20 Dec - 31 Dec"
      ],
      "mid": [
        "05 Jan - 31 Mar",
        "01 Jun - 30 Jun",
        "01 Nov - 19 Dec"
      ],
      "green": [
        "01 Apr - 31 May"
      ]
    },
    "park_fees": {
      "adult": {
        "1 Jan to 14 Mar / 16 May to 31 Dec": 669,
        "15 Mar to 15 May": 611
      },
      "child": {
        "5 - 14.99 years": 144
      }
    },
    "tourism_development_levy": "included_in_rates",
    "child_policy": {
      "0-11.99_years": "free_of_charge",
      "12-17.99_years": "75_percent_of_adult_rate"
    },
    "enhancements": {
      "balloon_safari": "540_per_person"
    },
    "special_offer": "single room supplement not charged for first single room per booking"
  },

  "detailedSeasonalRates": {
    "validity": "Valid from 01 Jan 2025 to 31 Dec 2025",
    "seasons": [
      { "name": "HIGH", "dates": "01 Jan - 04 Jan, 01 Jul - 31 Oct, 20 Dec - 31 Dec" },
      { "name": "MID",  "dates": "05 Jan - 31 Mar, 01 Jun - 30 Jun, 01 Nov - 19 Dec" },
      { "name": "GREEN","dates": "01 Apr - 31 May" }
    ],
    "rates": [
      {
        "description": "Per person sharing",
        "high": 10050,
        "mid": 9735,
        "green": 9000
      },
      {
        "description": "Per person in a single room",
        "high": 12706,
        "mid": 11716,
        "green": 11250
      },
      {
        "description": "Child under 12 sharing with 1 or 2 adults (max 2)",
        "high": 5220,
        "mid": 5220,
        "green": 5220
      }
    ],
    "parkConservancyFees": {
      "adult": {
        "1 Jan – 14 Mar / 16 May – 31 Dec": 669,
        "15 Mar – 15 May": 611
      },
      "child": {
        "5 – 14.99 years": 144
      }
    },
    "tourismDevelopmentLevy": "included_in_rates",
    "childPolicy": [
      "Children in own room (min 2 / max 3): 75 % of adult per-person rate.",
      "Children under 12 sharing with 1 adult: child pays child-rate; adult pays single-room rate.",
      "Children under 14 yrs not recommended in own room unless accompanied by an adult."
    ],
    "enhancements": {
      "exclusiveVehicle": 3240,
      "balloonSafari": 540
    },
    "specialOffer": "Single-room supplement waived for the **first single room** per booking."
  },

  "seasonsAndRates": {
    "validity": "Valid from 01 Jan 2025 to 31 Dec 2025",
    "seasons": [
      { "name": "HIGH", "color": "#FF5733", "dates": "01 Jan - 04 Jan, 01 Jul - 31 Oct, 20 Dec - 31 Dec" },
      { "name": "MID",  "color": "#FFB733", "dates": "05 Jan - 31 Mar, 01 Jun - 30 Jun, 01 Nov - 19 Dec" },
      { "name": "GREEN","color": "#33CC75", "dates": "01 Apr - 31 May" }
    ],
    "rateTable": {
      "headers": ["Group Size", "High Season (Published)", "Mid Season (Published)", "Green Season (Published)"],
      "rows": [
        { "groupSize": 2, "highPublished": 31500, "midPublished": 30150, "greenPublished": 27000 },
        { "groupSize": 3, "highPublished": 21000, "midPublished": 20100, "greenPublished": 18000 },
        { "groupSize": 4, "highPublished": 16250, "midPublished": 15575, "greenPublished": 14000 },
        { "groupSize": 5, "highPublished": 13000, "midPublished": 12600, "greenPublished": 11352 },
        { "groupSize": 6, "highPublished": 12257, "midPublished": 12000, "greenPublished": 10614 },
        { "groupSize": 7, "highPublished": 12100, "midPublished": 11697, "greenPublished": 10445 },
        { "groupSize": 8, "highPublished": 11713, "midPublished": 11515, "greenPublished": 10026 }
      ]
    }
  }
},
{
  "id": "10-day-premium-kenya-safari",
  "title": "Kenya's Wild Heart: A 10-Day Premium Safari Adventure",
  "category": "premium",
  "duration": "10 Days / 9 Nights",
  "price": 12506,
  "image": "https://afribay.vercel.app/kenya-safari-1.jpg",
  "gallery": [
    "https://afribay.vercel.app/nairobi.jpg",
    "https://afribay.vercel.app/amboseli-national-park.jpg",
    "https://afribay.vercel.app/loisaba-conservancy.jpg",
    "https://afribay.vercel.app/masai-mara.jpg"
  ],
  "description": "Experience an incredible 10-day safari adventure through Kenya's most stunning destinations including Nairobi, Amboseli National Park, Loisaba Conservancy, and the famous Masai Mara.",
  "fullDescription": "Embark on a 10-day Kenyan safari journey that takes you through Nairobi, Amboseli National Park, Loisaba Conservancy, and the iconic Masai Mara. Enjoy private game drives, cultural experiences, and luxury accommodations throughout your adventure.",
  "highlights": [
    "Private game drives in Amboseli National Park and Masai Mara",
    "Exclusive flights between destinations",
    "Luxury accommodations in the Elewana Collection",
    "Cultural experiences and guided bush walks",
    "Iconic Masai Mara game viewing"
  ],
  "includes": [
    "9 nights accommodation in luxury lodges",
    "All meals (breakfast, lunch, dinner)",
    "Private game drives and safari activities",
    "Domestic private flights between parks",
    "Professional English-speaking guide",
    "Entrance fees to national parks and conservancies",
    "VIP airport transfers and fast-track services",
    "Laundry services and temporary medical evacuation insurance"
  ],
  "excludes": [
    "International flights",
    "Travel insurance",
    "Kenya visa fees",
    "Optional activities not specified in the itinerary",
    "Items of a personal nature"
  ],
  "itinerary": [
    {
      "day": 1,
      "title": "Arrival in Nairobi",
      "description": "Welcome to Kenya with luxury accommodation",
      "activities": [
        "Arrival at Jomo Kenyatta International Airport",
        "VIP fast-track through arrival procedures",
        "Private transfer to Hemingways Hotel or similar",
        "Dinner at the hotel"
      ]
    },
    {
      "day": 2,
      "title": "Nairobi to Amboseli National Park",
      "description": "Fly into the shadow of Kilimanjaro",
      "activities": [
        "Breakfast and briefing at the hotel",
        "Private transfer to Wilson Airport",
        "Flight to Amboseli National Park",
        "Lunch at Elewana Tortilis Camp",
        "Afternoon game drive",
        "Dinner at camp"
      ]
    },
    {
      "day": 3,
      "title": "Amboseli National Park",
      "description": "Full day exploring Amboseli",
      "activities": [
        "Early morning game drive",
        "Bush breakfast",
        "Walking safari",
        "Lunch at camp",
        "Scenic sundowners",
        "Private dinner at camp"
      ]
    },
    {
      "day": 4,
      "title": "Amboseli to Loisaba Conservancy",
      "description": "Scenic flight to Loisaba Conservancy",
      "activities": [
        "Breakfast at camp",
        "Morning game drive en-route to airstrip",
        "Flight to Loisaba Conservancy",
        "VIP welcome and conservancy briefing",
        "Game drive to Elewana Loisaba Tented Camp",
        "Sundowners and dinner"
      ]
    },
    {
      "day": 5,
      "title": "Loisaba Conservancy",
      "description": "Choice of exclusive activities",
      "activities": [
        "Walking Safari with traditional Samburu guides",
        "Bush breakfast",
        "Lunch at camp",
        "Visit the anti-poaching sniffer-dog team",
        "Sundowners",
        "Private dinner under the stars"
      ]
    },
    {
      "day": 6,
      "title": "Loisaba Conservancy",
      "description": "Second day of tailored experiences",
      "activities": [
        "Game drive, horse / camel-back exploration, bush running / trekking",
        "Breakfast in the bush",
        "Spa treatment",
        "Lunch at camp",
        "Afternoon game drive or Samburu village visit",
        "Dinner at camp"
      ]
    },
    {
      "day": 7,
      "title": "Loisaba to Masai Mara",
      "description": "Fly to the world-famous Masai Mara",
      "activities": [
        "Breakfast at camp",
        "Game drive en-route to airstrip",
        "Flight to Masai Mara",
        "Game drive to Elewana Sand River Camp",
        "Lunch at camp",
        "Afternoon game drive",
        "Sundowners",
        "Dinner at camp"
      ]
    },
    {
      "day": 8,
      "title": "Masai Mara National Reserve",
      "description": "Full day in the Mara",
      "activities": [
        "Early breakfast",
        "Full-day game drive with bush lunch",
        "Optional balloon safari (add-on)",
        "Dinner under the stars"
      ]
    },
    {
      "day": 9,
      "title": "Masai Mara",
      "description": "Second full day in the Mara",
      "activities": [
        "Early morning game drive",
        "Bush breakfast",
        "Lunch at camp",
        "Afternoon game drive",
        "Farewell sundowners",
        "Dinner at camp"
      ]
    },
    {
      "day": 10,
      "title": "Departure",
      "description": "Farewell Kenya",
      "activities": [
        "Breakfast at camp",
        "Transfer to Keekorok Airstrip",
        "Flight to Wilson Airport, Nairobi",
        "Day-room at Hemingways (time permitting)",
        "Transfer to Jomo Kenyatta International Airport"
      ]
    }
  ],
  "destinations": ["nairobi", "amboseli-national-park", "loisaba-conservancy", "masai-mara"],
  "accommodations": [
    "hemingways-hotel",
    "elewana-tortilis-camp",
    "elewana-loisaba-tented-camp",
    "elewana-sand-river-masai-mara"
  ],
  "difficulty": "easy",
  "bestTime": "Year-round",
  "groupSize": { "min": 2, "max": 8 },
  "pdfItinerary": "https://afribay.vercel.app/10-day-kenya-safari-itinerary.pdf",

  /* ————————————————————————————————————————————
     PREMIUM PRICING OBJECT (EXACT SAME SHAPE)
  ———————————————————————————————————————————— */
  "pricing": {
    "validity": "01 Jan 2025 to 31 Dec 2025",
    "seasons": {
      "high": ["01 Jan - 04 Jan", "01 Jul - 31 Oct", "20 Dec - 31 Dec"],
      "mid":  ["05 Jan - 31 Mar", "01 Jun - 30 Jun", "01 Nov - 19 Dec"],
      "green":["01 Apr - 31 May"]
    },
    "park_fees": {
      "adult": {
        "1 Jan to 14 Mar / 16 May to 31 Dec": 1140,
        "15 Mar to 15 May": 1080
      },
      "child": { "5 - 14.99 years": 320 }
    },
    "tourism_development_levy": "included_in_rates",
    "child_policy": {
      "0-11.99_years":  "free_of_charge",
      "12-17.99_years": "75_percent_of_adult_rate"
    },
    "enhancements": {
      "balloon_safari": "475_per_person"
    },
    "special_offer": "single room supplement not charged for first single room per booking"
  },

  "detailedSeasonalRates": {
    "validity": "Valid from 01 Jan 2025 to 31 Dec 2025",
    "seasons": [
      { "name": "HIGH", "dates": "01 Jan - 04 Jan, 01 Jul - 31 Oct, 20 Dec - 31 Dec" },
      { "name": "MID",  "dates": "05 Jan - 31 Mar, 01 Jun - 30 Jun, 01 Nov - 19 Dec" },
      { "name": "GREEN","dates": "01 Apr - 31 May" }
    ],
    "rates": [
      { "description": "Per person sharing", "high": 12506, "mid": 11460, "green": 10200 },
      { "description": "Per person in a single room", "high": 15756, "mid": 14210, "green": 13200 },
      { "description": "Child under 12 sharing with 1 or 2 adults (max 2)", "high": 6253, "mid": 5730, "green": 5100 }
    ],
    "parkConservancyFees": {
      "adult": {
        "1 Jan – 14 Mar / 16 May – 31 Dec": 1140,
        "15 Mar – 15 May": 1080
      },
      "child": { "5 – 14.99 years": 320 }
    },
    "tourismDevelopmentLevy": "included_in_rates",
    "childPolicy": [
      "Children in own room (min 2 / max 3): 75 % of adult per-person rate.",
      "Children under 12 sharing with 1 adult: child pays child-rate; adult pays single-room rate.",
      "Children under 14 yrs not recommended in own room unless accompanied by an adult."
    ],
    "enhancements": { "balloonSafari": 475 },
    "specialOffer": "Single-room supplement waived for the **first single room** per booking."
  },

  "seasonsAndRates": {
    "validity": "Valid from 01 Jan 2025 to 31 Dec 2025",
    "seasons": [
      { "name": "HIGH", "color": "#FF5733", "dates": "01 Jan - 04 Jan, 01 Jul - 31 Oct, 20 Dec - 31 Dec" },
      { "name": "MID",  "color": "#FFB733", "dates": "05 Jan - 31 Mar, 01 Jun - 30 Jun, 01 Nov - 19 Dec" },
      { "name": "GREEN","color": "#33CC75", "dates": "01 Apr - 31 May" }
    ],
    "rateTable": {
      "headers": ["Group Size", "High Season (Published)", "Mid Season (Published)", "Green Season (Published)"],
      "rows": [
        {"groupSize": 2, "highPublished": 40440, "midPublished": 37020, "greenPublished": 32670},
        {"groupSize": 3, "highPublished": 26960, "midPublished": 24680, "greenPublished": 21780},
        {"groupSize": 4, "highPublished": 20220, "midPublished": 18510, "greenPublished": 16335},
        {"groupSize": 5, "highPublished": 16376, "midPublished": 15008, "greenPublished": 13312},
        {"groupSize": 6, "highPublished": 15046, "midPublished": 14429, "greenPublished": 13060},
        {"groupSize": 7, "highPublished": 14685, "midPublished": 14212, "greenPublished": 12530},
        {"groupSize": 8, "highPublished": 14438, "midPublished": 14000, "greenPublished": 12506}
      ]
    }
  },

 

  "specialNotes": [
    "Kenya visa can be obtained upon arrival ($50 USD)",
    "Yellow fever vaccination certificate required",
    "Light aircraft baggage limit: 15 kg soft bags",
    "Detailed pre-departure documents provided 30 days prior"
  ]
},
{
  "id": "8-day-premium-kenya-safari",
  "title": "Kenya's Untamed Beauty: An 8-Day Premium Safari Adventure",
  "category": "premium",
  "duration": "8 Days / 7 Nights",
  "price": 10226,
  "image": "https://afribay.vercel.app/kenya-safari.jpg",
  "gallery": [
    "https://afribay.vercel.app/nairobi.jpg",
    "https://afribay.vercel.app/meru-national-park.jpg",
    "https://afribay.vercel.app/loisaba-conservancy.jpg",
    "https://afribay.vercel.app/masai-mara.jpg"
  ],
  "description": "Experience an incredible 8-day safari adventure through Kenya's most stunning destinations including Nairobi, Meru National Park, Loisaba Conservancy, and the famous Masai Mara.",
  "fullDescription": "Embark on an 8-day Kenyan safari journey that takes you through Nairobi, Meru National Park, Loisaba Conservancy, and the iconic Masai Mara. Enjoy private game drives, cultural experiences, and luxury accommodations throughout your adventure.",
  "highlights": [
    "Private game drives in Meru National Park and Masai Mara",
    "Exclusive flights between destinations",
    "Luxury accommodations in the Elewana Collection",
    "Cultural experiences and guided bush walks",
    "Iconic Masai Mara game viewing"
  ],
  "includes": [
    "7 nights accommodation in luxury lodges",
    "All meals (breakfast, lunch, dinner)",
    "Private game drives and safari activities",
    "Domestic private flights between parks",
    "Professional English-speaking guide",
    "Entrance fees to national parks and conservancies",
    "VIP airport transfers and fast-track services",
    "Laundry services and temporary medical evacuation insurance"
  ],
  "excludes": [
    "International flights",
    "Travel insurance",
    "Kenya visa fees",
    "Optional activities not specified in the itinerary",
    "Items of a personal nature"
  ],
  "itinerary": [
    {
      "day": 1,
      "title": "Arrival in Nairobi",
      "description": "Welcome to Kenya with luxury accommodation",
      "activities": [
        "Arrival at Jomo Kenyatta International Airport",
        "VIP fast-track through arrival procedures",
        "Private transfer to Hemingways Hotel or similar",
        "Dinner at the hotel"
      ]
    },
    {
      "day": 2,
      "title": "Nairobi to Meru National Park",
      "description": "Fly into the wild heart of Meru",
      "activities": [
        "Breakfast and briefing at the hotel",
        "Private transfer to Wilson Airport",
        "Flight to Meru National Park",
        "Lunch at Elewana Elsa’s Kopje",
        "Afternoon game drive",
        "Dinner at camp"
      ]
    },
    {
      "day": 3,
      "title": "Meru National Park",
      "description": "Full day exploring Meru",
      "activities": [
        "Early morning game drive",
        "Bush breakfast",
        "Visit the Rhino Sanctuary",
        "Scenic sundowners",
        "Private dinner at camp"
      ]
    },
    {
      "day": 4,
      "title": "Meru to Loisaba Conservancy",
      "description": "Scenic flight to Loisaba Conservancy",
      "activities": [
        "Breakfast at camp",
        "Morning hike up Mughwango hill",
        "Flight to Loisaba Conservancy",
        "VIP welcome and conservancy briefing",
        "Game drive to Elewana Loisaba Tented Camp",
        "Sundowners and dinner"
      ]
    },
    {
      "day": 5,
      "title": "Loisaba Conservancy",
      "description": "Choice of exclusive activities",
      "activities": [
        "Game drive / cultural visit / bush walk / camel safari / anti-poaching demo",
        "Spa treatment",
        "Sundowners",
        "Dinner under the stars"
      ]
    },
    {
      "day": 6,
      "title": "Loisaba to Masai Mara",
      "description": "Fly to the world-famous Masai Mara",
      "activities": [
        "Breakfast at camp",
        "Flight to Masai Mara",
        "Game drive to Elewana Sand River Camp",
        "Afternoon game drive",
        "Sundowners",
        "Dinner at camp"
      ]
    },
    {
      "day": 7,
      "title": "Masai Mara",
      "description": "Full day in the Mara",
      "activities": [
        "Early breakfast",
        "Full day game drive with bush lunch",
        "Optional balloon safari (add-on)",
        "Dinner under the stars"
      ]
    },
    {
      "day": 8,
      "title": "Departure",
      "description": "Farewell Kenya",
      "activities": [
        "Breakfast at camp",
        "Flight to Nairobi Wilson",
        "Day-room at Hemingways (time permitting)",
        "Transfer to Jomo Kenyatta International Airport"
      ]
    }
  ],
  "destinations": ["nairobi", "meru-national-park", "loisaba-conservancy", "masai-mara"],
  "accommodations": [
    "hemingways-hotel",
    "elewana-elsas-kopje",
    "elewana-loisaba-tented-camp",
    "elewana-sand-river-masai-mara"
  ],
  "difficulty": "easy",
  "bestTime": "Year-round",
  "groupSize": { "min": 2, "max": 8 },
  "pdfItinerary": "https://afribay.vercel.app/8-day-kenya-safari-itinerary.pdf",

  /* ————————————————————————————————————————————
     PREMIUM PRICING OBJECT (EXACT SAME SHAPE)
  ———————————————————————————————————————————— */
  "pricing": {
    "validity": "01 Jan 2025 to 31 Dec 2025",
    "seasons": {
      "high": ["01 Jan - 04 Jan", "01 Jul - 31 Oct", "20 Dec - 31 Dec"],
      "mid":  ["05 Jan - 31 Mar", "01 Jun - 30 Jun", "01 Nov - 19 Dec"],
      "green":["01 Apr - 31 May"]
    },
    "park_fees": {
      "adult": {
        "1 Jan to 14 Mar / 16 May to 31 Dec": 780,
        "15 Mar to 15 May": 611
      },
      "child": { "5 - 14.99 years": 144 }
    },
    "tourism_development_levy": "included_in_rates",
    "child_policy": {
      "0-11.99_years":  "free_of_charge",
      "12-17.99_years": "75_percent_of_adult_rate"
    },
    "enhancements": {
      "balloon_safari": "475_per_person"
    },
    "special_offer": "single room supplement not charged for first single room per booking"
  },

  "detailedSeasonalRates": {
    "validity": "Valid from 01 Jan 2025 to 31 Dec 2025",
    "seasons": [
      { "name": "HIGH", "dates": "01 Jan - 04 Jan, 01 Jul - 31 Oct, 20 Dec - 31 Dec" },
      { "name": "MID",  "dates": "05 Jan - 31 Mar, 01 Jun - 30 Jun, 01 Nov - 19 Dec" },
      { "name": "GREEN","dates": "01 Apr - 31 May" }
    ],
    "rates": [
      { "description": "Per person sharing", "high": 10050, "mid": 9735, "green": 9000 },
      { "description": "Per person in a single room", "high": 12706, "mid": 11716, "green": 11250 },
      { "description": "Child under 12 sharing with 1 or 2 adults (max 2)", "high": 5220, "mid": 5220, "green": 5220 }
    ],
    "parkConservancyFees": {
      "adult": {
        "1 Jan – 14 Mar / 16 May – 31 Dec": 780,
        "15 Mar – 15 May": 611
      },
      "child": { "5 – 14.99 years": 144 }
    },
    "tourismDevelopmentLevy": "included_in_rates",
    "childPolicy": [
      "Children in own room (min 2 / max 3): 75 % of adult per-person rate.",
      "Children under 12 sharing with 1 adult: child pays child-rate; adult pays single-room rate.",
      "Children under 14 yrs not recommended in own room unless accompanied by an adult."
    ],
    "enhancements": { "balloonSafari": 475 },
    "specialOffer": "Single-room supplement waived for the **first single room** per booking."
  },

  "seasonsAndRates": {
    "validity": "Valid from 01 Jan 2025 to 31 Dec 2025",
    "seasons": [
      { "name": "HIGH", "color": "#FF5733", "dates": "01 Jan - 04 Jan, 01 Jul - 31 Oct, 20 Dec - 31 Dec" },
      { "name": "MID",  "color": "#FFB733", "dates": "05 Jan - 31 Mar, 01 Jun - 30 Jun, 01 Nov - 19 Dec" },
      { "name": "GREEN","color": "#33CC75", "dates": "01 Apr - 31 May" }
    ],
    "rateTable": {
      "headers": ["Group Size", "High Season (Published)", "Mid Season (Published)", "Green Season (Published)"],
      "rows": [
        { "groupSize": 2, "highPublished": 32000, "midPublished": 31150, "greenPublished": 29900 },
        { "groupSize": 3, "highPublished": 21500, "midPublished": 20600, "greenPublished": 18500 },
        { "groupSize": 4, "highPublished": 16250, "midPublished": 15675, "greenPublished": 14100 },
        { "groupSize": 5, "highPublished": 13000, "midPublished": 12600, "greenPublished": 11452 },
        { "groupSize": 6, "highPublished": 12257, "midPublished": 12100, "greenPublished": 10814 },
        { "groupSize": 7, "highPublished": 12100, "midPublished": 11797, "greenPublished": 10545 },
        { "groupSize": 8, "highPublished": 11763, "midPublished": 11665, "greenPublished": 10226 }
      ]
    }
  },



  "specialNotes": [
    "Kenya visa can be obtained upon arrival ($50 USD)",
    "Yellow fever vaccination certificate required",
    "Light aircraft baggage limit: 15 kg soft bags",
    "Detailed pre-departure documents provided 30 days prior"
  ]
},
  {
  "id": "20-day-signature-safari",
  "title": "20-Day Signature Safari",
  "category": "luxury",
  "duration": "20 Days / 19 Nights",
  "price": 10350,
  "image": "https://afribay.vercel.app/masai-mara.jpg",
  "gallery": [
    "https://afribay.vercel.app/masai-mara-1.jpg",
    "https://afribay.vercel.app/saruni.jpg",
    "https://afribay.vercel.app/naivasha-2.jpg",
    "https://afribay.vercel.app/nakuru-3.jpg",
    "https://afribay.vercel.app/mount-kenya-4.jpg",
    "https://afribay.vercel.app/samburu-3.jpg",
    "https://afribay.vercel.app/amboseli.jpg",
    "https://afribay.vercel.app/tsavo-5.jpg",
    "https://afribay.vercel.app/tsavo-7.jpg",
    "https://afribay.vercel.app/diani-5.jpg"
  ],
  "description": "Experience the ultimate Kenyan adventure with this comprehensive safari circuit.",
  "highlights": [
    "20 days of premium safari experience",
    "Visit 8 iconic Kenyan national parks and reserves",
    "Luxury lodge accommodations",
    "Big Five guaranteed sightings",
    "Professional safari guides",
    "All meals and park fees included",
    "Beach relaxation extension"
  ],
  "itinerary": [
    {
      "day": 1,
      "title": "Arrival in Nairobi",
      "description": "Welcome to Kenya with luxury accommodation",
      "activities": [
        "Arrive at Jomo Kenyatta International Airport (NBO)",
        "Meet and greet by our team",
        "Transfer to Karen Blixen Cottages",
        "Welcome briefing and rest",
        "Dinner and overnight"
      ]
    },
    {
      "day": 2,
      "title": "Full day in Nairobi",
      "description": "Explore Nairobi’s wildlife and cultural highlights",
      "activities": [
        "Early morning game drive in Nairobi National Park",
        "Visit Sheldrick Wildlife Centre",
        "Visit Giraffe Centre",
        "Lunch at The Carnivore",
        "Optional Karen Blixen Museum",
        "Dinner and overnight at Karen Blixen Cottages"
      ]
    },
    {
      "day": 3,
      "title": "Nairobi to Lake Nakuru",
      "description": "Scenic drive into the Great Rift Valley",
      "activities": [
        "Drive to Lake Nakuru National Park",
        "Stopover: Great Rift Valley escarpment views",
        "Afternoon game drive",
        "Check-in at The Cliff",
        "Sundowner overlooking the lake"
      ]
    },
    {
      "day": 4,
      "title": "Lake Nakuru to Maasai Mara",
      "description": "Journey to Kenya’s most famous reserve",
      "activities": [
        "Morning game drive in Lake Nakuru",
        "Drive to Maasai Mara National Reserve",
        "Afternoon game drive",
        "Check-in at Ilkeliani Mara",
        "Evening at leisure"
      ]
    },
    {
      "day": 5,
      "title": "Maasai Mara National Reserve",
      "description": "Full day exploring the Mara",
      "activities": [
        "Full-day game drives",
        "Optional Maasai village cultural visit",
        "Optional hot-air balloon safari",
        "Sundowner in the savanna",
        "Overnight at Ilkeliani Camp"
      ]
    },
    {
      "day": 6,
      "title": "Maasai Mara to Lake Naivasha",
      "description": "From rolling plains to freshwater lake",
      "activities": [
        "Morning game drive",
        "Drive to Lake Naivasha",
        "Boat trip hippo spotting",
        "Optional Crescent Island walk",
        "Overnight at Sopa Lodge"
      ]
    },
    {
      "day": 7,
      "title": "Lake Naivasha to Mt Kenya Region",
      "description": "Journey to the foothills of Mt Kenya",
      "activities": [
        "Visit Hell’s Gate National Park",
        "Late-lunch arrival",
        "Afternoon at leisure with Mt Kenya views",
        "Sundowner cocktails",
        "Overnight at Fairmont Mt Kenya Safari Club"
      ]
    },
    {
      "day": 8,
      "title": "Mt Kenya",
      "description": "Scenic and wildlife day at Mt Kenya",
      "activities": [
        "Early breakfast with mountain views",
        "Morning game drive",
        "Packed lunch under Acacia trees",
        "Bush sundowner",
        "Overnight at Fairmont Mt Kenya Safari Club"
      ]
    },
    {
      "day": 9,
      "title": "Mt Kenya to Samburu National Reserve",
      "description": "Enter the rugged north",
      "activities": [
        "Early drive to Samburu",
        "Afternoon game drive spotting Samburu Special Five",
        "Check-in at Soroi Larsens Camp",
        "Evening relaxation"
      ]
    },
    {
      "day": 10,
      "title": "Samburu to Amboseli National Park",
      "description": "Long scenic drive south",
      "activities": [
        "Early departure",
        "Lunch en-route",
        "Afternoon game drive in Amboseli",
        "Check-in at Tawi Lodge",
        "Sundowner with Kilimanjaro views"
      ]
    },
    {
      "day": 11,
      "title": "Amboseli National Park",
      "description": "Elephant haven beneath Kilimanjaro",
      "activities": [
        "Early morning game drive",
        "Bush breakfast",
        "Midday at leisure",
        "Afternoon game drive",
        "Evening bonfire"
      ]
    },
    {
      "day": 12,
      "title": "Amboseli to Tsavo West",
      "description": "Into the land of lava and red elephants",
      "activities": [
        "Drive to Tsavo West National Park",
        "Afternoon game drive",
        "Visit Mzima Springs hippo pools",
        "Check-in at Soroi Lions Bluff",
        "Sundowners on the bluff"
      ]
    },
    {
      "day": 13,
      "title": "Tsavo West National Park",
      "description": "Full day in diverse landscapes",
      "activities": [
        "Visit Shetani Lava Flows",
        "Poacher’s Lookout hike",
        "Chaimu Crater walk",
        "Ngulia Hills vistas",
        "Lugard Falls & Aruba Dam"
      ]
    },
    {
      "day": 14,
      "title": "Tsavo West to Tsavo East",
      "description": "Cross the vast Tsavo ecosystem",
      "activities": [
        "Early drive to Tsavo East",
        "Afternoon game drive along Galana River",
        "Check-in at Kipalo Hills Lodge",
        "Evening relaxation"
      ]
    },
    {
      "day": 15,
      "title": "Tsavo East to Diani Beach",
      "description": "Transition from bush to beach",
      "activities": [
        "Morning game drive en-route",
        "Drive to Diani Beach",
        "Check-in at Swahili Beach Resort",
        "Beach relaxation and sunset cocktails"
      ]
    },
    {
      "day": 16,
      "title": "Diani Beach",
      "description": "Free day at the Indian Ocean",
      "activities": [
        "Beach leisure",
        "Optional snorkeling",
        "Optional kite-surfing",
        "Spa treatments",
        "Beach dinner"
      ]
    },
    {
      "day": 17,
      "title": "Diani Beach",
      "description": "Second day to unwind or explore",
      "activities": [
        "Optional dolphin dhow trip",
        "Deep-sea fishing (optional)",
        "Relaxation at resort",
        "Sundowner on the sand"
      ]
    },
    {
      "day": 18,
      "title": "Diani Beach",
      "description": "Third blissful beach day",
      "activities": [
        "Optional sky-dive or quad-bike tour",
        "Pool & spa time",
        "Cultural village visit (optional)",
        "Farewell beach dinner"
      ]
    },
    {
      "day": 19,
      "title": "Diani Beach",
      "description": "Final full beach day",
      "activities": [
        "Last-minute souvenir shopping",
        "Lazy beach morning",
        "Optional water-sports",
        "Evening at leisure"
      ]
    },
    {
      "day": 20,
      "title": "Diani to Nairobi Departure",
      "description": "Farewell Kenya",
      "activities": [
        "Final breakfast",
        "Check-out",
        "Transfer to Ukunda Airstrip or Mombasa Airport",
        "Fly to Jomo Kenyatta International Airport",
        "Connect to international departure"
      ]
    }
  ],
  "includes": [
    "19 nights luxury accommodation",
    "All meals (breakfast, lunch, dinner)",
    "Daily game drives in private 4x4 vehicles",
    "All national park entrance fees",
    "Professional English-speaking guide",
    "Boat trip on Lake Naivasha",
    "Airport transfers",
    "Complimentary sundowner drinks"
  ],
  "excludes": [
    "International flights",
    "Travel insurance",
    "Kenya visa fees",
    "Personal expenses and gratuities"
  ],
  "destinations": [
    "nairobi",
    "lake-nakuru",
    "maasai-mara",
    "lake-naivasha",
    "mt-kenya",
    "samburu",
    "amboseli",
    "tsavo-west",
    "tsavo-east",
    "diani-beach"
  ],
  "accommodations": [
    "karen-blixen-cottages",
    "the-cliff",
    "ilkeliani-mara",
    "ilkeliani-camp",
    "sopa-lodge",
    "fairmont-mt-kenya-safari-club",
    "soroi-larsens-camp",
    "tawi-lodge",
    "soroi-lions-bluff",
    "kipalo-hills-lodge",
    "swahili-beach-resort"
  ],
  "difficulty": "easy",
  "bestTime": "Year-round",
  "groupSize": { "min": 2, "max": 8 },
  "seasonalPricing": {
    "seasons": [
      {
        "name": "High Season",
        "startDate": "Jan 01",
        "endDate": "Mar 15",
        "basePrice": 10350,
        "transportCost": 4500
      },
      {
        "name": "Mid Season",
        "startDate": "Mar 16",
        "endDate": "May 31",
        "basePrice": 8450,
        "transportCost": 4500
      },
      {
        "name": "Green Season",
        "startDate": "Dec 16",
        "endDate": "Dec 31",
        "basePrice": 7600,
        "transportCost": 4500
      }
    ]
  },
  "pdfItinerary": "https://afribay.vercel.app/20-day-signature-safari-itinerary.pdf"
},
  {
    id: "bush-wild-beach-safari",
    title: "10-Day Bush, Wild, and Beach Safari",
    category: "luxury",
    duration: "10 Days / 9 Nights",
    price: 6255,
    image: "https://afribay.vercel.app/amboseli-1.jpg",
    gallery: [
      "https://afribay.vercel.app/serena-1.jpg",
      "https://afribay.vercel.app/tawi-1.jpg",
      "https://afribay.vercel.app/tukai-1.jpg",
      "https://afribay.vercel.app/soroi-1.jpg",
      "https://afribay.vercel.app/palms-1.jpg",
    ],
    description: "Experience the ultimate Kenya safari combining wildlife, culture, and beach relaxation",
    highlights: [
      "Luxury Safari Experience",
      "Wildlife Encounters",
      "Cultural Experiences",
      "Beach Relaxation",
      "Unique Wildlife Lodge Experience",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Nairobi",
        description: "Welcome to Kenya with luxury accommodation",
        activities: [
          "Airport pickup",
          "Transfer to Karen Blixen Cottages",
          "Welcome briefing",
          "Rest and acclimatization",
          "Welcome dinner",
        ],
      },
      {
        day: 2,
        title: "Full day in Nairobi",
        description: "Explore Nairobi's wildlife and cultural attractions",
        activities: [
          "Visit Nairobi National Park",
          "David Sheldrick Elephant Orphanage",
          "Giraffe Centre",
          "Lunch at The Carnivore",
          "Optional Karen Blixen Museum",
        ],
      },
      {
        day: 3,
        title: "Nairobi to Amboseli",
        description: "Journey to the land of giants",
        activities: [
          "Early breakfast",
          "Drive to Amboseli",
          "Afternoon game drive",
          "Check-in at Tawi Lodge",
          "Sundowner with Kilimanjaro views",
        ],
      },
      {
        day: 4,
        title: "Amboseli National Park",
        description: "Full day exploring Amboseli's elephant herds",
        activities: [
          "Early morning game drive",
          "Bush breakfast",
          "Visit observation hill",
          "Afternoon game drive",
          "Evening bonfire",
        ],
      },
      {
        day: 5,
        title: "Amboseli to Serval Wildlife Tanzania",
        description: "Unique wildlife dining experience",
        activities: [
          "Drive to Moshi, Tanzania",
          "Check-in at Serval Wildlife Lodge",
          "Wine and dine with tamed wildlife",
          "Cultural entertainment",
        ],
      },
      {
        day: 6,
        title: "Serval Wildlife to Tsavo West",
        description: "Journey to the land of red elephants",
        activities: [
          "Breakfast with wildlife",
          "Drive to Tsavo West",
          "Afternoon game drive",
          "Visit Mzima Springs",
          "Sundowners at Soroi Lions Bluff",
        ],
      },
      {
        day: 7,
        title: "Full day at Tsavo West",
        description: "Explore Tsavo's diverse landscapes",
        activities: [
          "Visit Shetani Lava Flows",
          "Poacher's Lookout",
          "Chaimu Crater",
          "Ngulia Hills",
          "Lugard Falls",
          "Aruba Dam",
        ],
      },
      {
        day: 8,
        title: "Tsavo West to Diani",
        description: "Transition from bush to beach",
        activities: [
          "Final bush breakfast",
          "Drive to Diani Beach",
          "Check-in at Southern Palms",
          "Beach relaxation",
          "Sunset cocktails",
        ],
      },
      {
        day: 9,
        title: "Full day at Diani",
        description: "Beach relaxation and water activities",
        activities: [
          "Beach relaxation",
          "Optional water sports",
          "Snorkeling",
          "Camel rides",
          "Spa treatments",
          "Beach dinner",
        ],
      },
      {
        day: 10,
        title: "Diani to Nairobi",
        description: "Final day and departure",
        activities: ["Final breakfast", "Check-out", "Transfer to Nairobi", "Airport transfer", "Departure"],
      },
    ],
    includes: [
      "9 nights luxury accommodation",
      "All meals (breakfast, lunch, dinner)",
      "Daily activities as per itinerary",
      "All park entrance fees",
      "Professional English-speaking guide",
      "Airport transfers",
      "Complimentary sundowner drinks",
    ],
    excludes: ["International flights", "Visa fees", "Personal expenses", "Tips", "Travel insurance"],
    destinations: ["nairobi", "amboseli", "tsavo", "diani-beach"],
    accommodations: [
      "karen-blixen-cottages",
      "tawi-lodge",
      "serval-wildlife-lodge",
      "soroi-lions-bluff",
      "southern-palms-resort",
    ],
    difficulty: "easy",
    bestTime: "Year-round",
    groupSize: { min: 2, max: 8 },
    seasonalPricing: {
      seasons: [
        {
          name: "High Season",
          startDate: "Jan 01",
          endDate: "Mar 15",
          basePrice: 6255,
          transportCost: 2450,
        },
        {
          name: "Mid Season",
          startDate: "Mar 16",
          endDate: "Nov 15",
          basePrice: 5225,
          transportCost: 2100,
        },
        {
          name: "Green Season",
          startDate: "Nov 16",
          endDate: "Dec 31",
          basePrice: 4865,
          transportCost: 2100,
        },
      ],
    },
    pdfItinerary: "https://afribay.vercel.app/10-day-bush-wild-beach-safari-itinerary.pdf",
  },
  {
    id: "nairobi-mountains-plains-beach",
    title: "9-Day Kenya Safari: Nairobi to Mountains, Plains & Beach",
    category: "luxury",
    duration: "9 Days / 8 Nights",
    price: 6580,
    image: "https://afribay.vercel.app/nairobi-1.jpg",
    gallery: [
      "https://afribay.vercel.app/nairobi-city.jpg",
      "https://afribay.vercel.app/kiambethu-tea-farm.jpg",
      "https://afribay.vercel.app/fairview-coffee-estate.jpg",
      "https://afribay.vercel.app/mt-kenya.jpg",
      "https://afribay.vercel.app/borana-conservancy.jpg",
      "https://afribay.vercel.app/diani-beach.jpg",
    ],
    description: "Indulge in the ultimate Kenyan adventure with this luxury City and Bush safari",
    highlights: [
      "Luxury Safaris",
      "Wildlife Encounters",
      "Cultural Experiences",
      "City Exploration",
      "Beach Relaxation",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Nairobi",
        description: "Welcome to Kenya's vibrant capital",
        activities: [
          "Airport pickup",
          "Transfer to Karen Blixen Cottages",
          "Welcome briefing",
          "Rest and acclimatization",
          "Welcome dinner",
        ],
      },
      {
        day: 2,
        title: "Full day in Nairobi",
        description: "Cultural and culinary experiences in Nairobi",
        activities: [
          "Visit Giraffe Centre",
          "Kiambethu Tea Farm experience",
          "Three-course buffet lunch",
          "Fairview Coffee Estate",
          "Coffee tasting",
        ],
      },
      {
        day: 3,
        title: "Nairobi to Nanyuki (Mt Kenya)",
        description: "Journey to the foothills of Africa's second-highest peak",
        activities: [
          "Drive to Nanyuki",
          "Late lunch at Fairmont Mt. Kenya Safari Club",
          "Afternoon game drive",
          "Sundowners at Ol Pejeta",
          "Evening at leisure",
        ],
      },
      {
        day: 4,
        title: "Mt. Kenya Experience",
        description: "Full day exploring the Mt. Kenya region",
        activities: [
          "Early breakfast with Mt. Kenya views",
          "Game drive",
          "Packed lunch under Acacia tree",
          "Bush sundowner",
          "Evening relaxation",
        ],
      },
      {
        day: 5,
        title: "Mt Kenya to Borana",
        description: "Journey to exclusive Borana Conservancy",
        activities: [
          "Drive to Borana Conservancy",
          "Afternoon game drive",
          "Evening sundowners",
          "Bonfire dinner",
          "Night at Laragai House",
        ],
      },
      {
        day: 6,
        title: "Full Day at Borana",
        description: "Exclusive conservancy experience",
        activities: [
          "Horse riding in the wild",
          "Rhino tracking",
          "Visit Ngare Ndare Falls",
          "Afternoon game drive",
          "Bush dinner",
        ],
      },
      {
        day: 7,
        title: "Borana to Diani",
        description: "Transition from highlands to coast",
        activities: [
          "Final bush breakfast",
          "Drive to Nairobi",
          "Flight to Diani",
          "Beach resort check-in",
          "Sunset cocktails",
        ],
      },
      {
        day: 8,
        title: "Full day at Diani",
        description: "Beach relaxation and water activities",
        activities: [
          "Beach relaxation",
          "Optional water sports",
          "Snorkeling",
          "Camel rides",
          "Spa treatments",
          "Beach dinner",
        ],
      },
      {
        day: 9,
        title: "Diani to Nairobi",
        description: "Final day and departure",
        activities: ["Final breakfast", "Check-out", "Transfer to Nairobi", "Airport transfer", "Departure"],
      },
    ],
    includes: [
      "8 nights accommodation",
      "All meals (breakfast, lunch, dinner)",
      "Daily activities as per itinerary",
      "All park entrance fees",
      "Professional English-speaking guide",
      "Airport transfers",
      "Complimentary sundowner drinks",
    ],
    excludes: ["International flights", "Visa fees", "Personal expenses", "Tips", "Travel insurance"],
    destinations: ["nairobi", "mt-kenya", "borana", "diani-beach"],
    accommodations: [
      "karen-blixen-cottages",
      "fairmont-mt-kenya-safari-club",
      "laragai-house",
      "southern-palms-resort",
    ],
    difficulty: "easy",
    bestTime: "Year-round",
    groupSize: { min: 2, max: 8 },
    seasonalPricing: {
      seasons: [
        {
          name: "High Season",
          startDate: "Jan 01",
          endDate: "Mar 15",
          basePrice: 6580,
          transportCost: 2100,
        },
        {
          name: "Mid Season",
          startDate: "Mar 16",
          endDate: "Dec 15",
          basePrice: 4430,
          transportCost: 1800,
        },
        {
          name: "Green Season",
          startDate: "Dec 16",
          endDate: "Dec 31",
          basePrice: 4260,
          transportCost: 1800,
        },
      ],
    },
    pdfItinerary: "https://afribay.vercel.app/9-day-nairobi-mt-kenya-diani-safari-itinerary.pdf",
  },
  {
    id: "kenya-hidden-treasures",
    title: "Kenya's Hidden Treasures: 10-Day Wildlife & Cultural Journey",
    category: "luxury",
    duration: "10 Days / 9 Nights",
    price: 7710,
    image: "https://afribay.vercel.app/mount-kenya-2.jpg",
    gallery: [
      "https://afribay.vercel.app/nairobi-city.jpg",
      "https://afribay.vercel.app/mt-kenya.jpg",
      "https://afribay.vercel.app/samburu-national-reserve.jpg",
      "https://afribay.vercel.app/borana-conservancy.jpg",
      "https://afribay.vercel.app/aberdares-country-club.jpg",
      "https://afribay.vercel.app/giraffe-centre.jpg",
      "https://afribay.vercel.app/kiambethu-tea-farm.jpg",
    ],
    description:
      "Discover Kenya's diverse landscapes and wildlife treasures on this unforgettable 10-day safari adventure",
    highlights: [
      "Explore Kenya's top wildlife reserves and hidden gems",
      "Cultural experiences and conservation projects",
      "Scenic landscapes from mountain forests to arid plains",
      "Luxury accommodations in unique lodges and camps",
      "Professional guides and personalized safari experience",
      "Special wildlife encounters including the 'Samburu Special Five'",
      "All meals, game drives, and park fees included",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Nairobi",
        description: "Welcome to Kenya with luxury city accommodation",
        activities: [
          "Airport pickup",
          "Transfer to Karen Blixen Cottages",
          "Welcome briefing",
          "Rest and acclimatization",
          "Welcome dinner",
        ],
      },
      {
        day: 2,
        title: "Full day in Nairobi",
        description: "Cultural and wildlife experiences in the capital",
        activities: [
          "Visit Giraffe Centre",
          "Kiambethu Tea Farm experience",
          "Farm lunch",
          "Fairview Coffee Estate",
          "Coffee tasting experience",
        ],
      },
      {
        day: 3,
        title: "Nairobi to Nanyuki (Mt Kenya)",
        description: "Journey to Mount Kenya region",
        activities: [
          "Dawn departure",
          "Late lunch arrival",
          "Afternoon horse ride",
          "Animal orphanage visit",
          "Sundowners at Ol Pejeta",
        ],
      },
      {
        day: 4,
        title: "Mt. Kenya Experience",
        description: "Full day exploring Mount Kenya region",
        activities: [
          "Bush breakfast by river",
          "Morning game drive",
          "Packed lunch under Acacia",
          "Bush sundowner",
          "Evening at camp",
        ],
      },
      {
        day: 5,
        title: "Mt Kenya to Samburu",
        description: "Journey to northern Kenya's wilderness",
        activities: [
          "Sunrise breakfast",
          "Drive to Samburu",
          "Check-in at Elephant Bedroom Camp",
          "Afternoon game drive",
          "Bush sundowners",
        ],
      },
      {
        day: 6,
        title: "Full Day at Samburu",
        description: "Explore Samburu's unique ecosystem",
        activities: ["Visit Buffalo Springs", "Camel trekking", "Guided nature walks", "Sundowners", "Bush dinner"],
      },
      {
        day: 7,
        title: "Samburu to Borana",
        description: "Transfer to exclusive Borana Conservancy",
        activities: [
          "Drive to Borana",
          "Afternoon game drive",
          "Evening sundowners",
          "Bonfire dinner",
          "Night at Borana Lodge",
        ],
      },
      {
        day: 8,
        title: "Full Day at Borana",
        description: "Exclusive conservancy activities",
        activities: [
          "Horse riding in wild",
          "Rhino tracking",
          "Ngare Ndare Falls visit",
          "Afternoon game drive",
          "Bush dinner",
        ],
      },
      {
        day: 9,
        title: "Borana to Aberdares",
        description: "Journey to mountain highlands",
        activities: [
          "Riverside breakfast",
          "Drive to Aberdares",
          "Mountain scenery",
          "Evening bonfire",
          "Night at Country Club",
        ],
      },
      {
        day: 10,
        title: "Aberdares to Nairobi",
        description: "Final day and departure",
        activities: [
          "Final bush breakfast",
          "Drive to Nairobi",
          "Lunch at The Carnivore",
          "Airport transfer",
          "Departure",
        ],
      },
    ],
    includes: [
      "9 nights luxury accommodation",
      "All meals (breakfast, lunch, dinner)",
      "Daily game drives in private 4x4 vehicles",
      "All national park entrance fees",
      "Professional English-speaking guide",
      "Cultural experiences and conservation visits",
      "Airport transfers",
      "Complimentary sundowner drinks",
      "Special activities including horse riding and camel trekking",
    ],
    excludes: ["International flights", "Travel insurance", "Kenya visa fees", "Personal expenses and gratuities"],
    destinations: ["nairobi", "mt-kenya", "samburu", "borana", "aberdares"],
    accommodations: [
      "karen-blixen-cottages",
      "river-camp",
      "elephant-bedroom-camp",
      "borana-lodge",
      "aberdares-country-club",
    ],
    difficulty: "moderate",
    bestTime: "June - October",
    groupSize: { min: 2, max: 8 },
    seasonalPricing: {
      seasons: [
        {
          name: "High Season",
          startDate: "Jan 01",
          endDate: "Mar 15",
          basePrice: 7710,
          transportCost: 2200,
        },
        {
          name: "Mid Season",
          startDate: "Mar 16",
          endDate: "Dec 15",
          basePrice: 5160,
          transportCost: 2100,
        },
        {
          name: "Green Season",
          startDate: "Dec 16",
          endDate: "Dec 31",
          basePrice: 4880,
          transportCost: 2000,
        },
      ],
    },
    pdfItinerary: "https://afribay.vercel.app/10-day-kenya-hidden-treasures-itinerary.pdf",
  },
  {
  "id": "5-day-nairobi-maasai-mara-safari",
  "title": "5-Day Nairobi - Maasai Mara Safari",
  "category": "luxury",
  "duration": "5 Days / 4 Nights",
  "price": 2510,
  "image": "https://afribay.vercel.app/ilkeliani-10.jpg",
  "gallery": [
    "https://afribay.vercel.app/masai-mara-2.jpg",
    "https://afribay.vercel.app/masai-mara-3.jpg",
    "https://afribay.vercel.app/masai-mara-5.jpg",
    "https://afribay.vercel.app/masai-mara-9.jpg",
    "https://afribay.vercel.app/masai-mara-8.jpg",
  ],
  "description": "Indulge in the ultimate Kenyan adventure with this luxury City and Bush safari",
  "highlights": [
    "Luxury Safaris",
    "Wildlife Encounters",
    "Cultural Experiences",
    "Nairobi City Exploration",
    "Scenic Landscapes"
  ],
  "itinerary": [
    {
      "day": 1,
      "title": "Arrival in Nairobi",
      "description": "Welcome to Kenya with luxury accommodation",
      "activities": [
        "Arrive at Jomo Kenyatta International Airport (NBO)",
        "Meet and greet by our team",
        "Transfer to Karen Blixen Cottages or Hemingway's",
        "Relax and acclimatize",
        "Dinner and overnight at Karen Blixen Cottages or Hemingway's"
      ]
    },
    {
      "day": 2,
      "title": "Full day in Nairobi",
      "description": "Explore Nairobi's wildlife and cultural attractions",
      "activities": [
        "Enjoy an early breakfast",
        "Visit Nairobi National Park",
        "Visit the David Sheldrick Elephant Orphanage",
        "Visit the Giraffe Centre",
        "Enjoy lunch at the Carnivore",
        "Optional: Explore the Karen Blixen Museum",
        "Dinner and overnight at Karen Blixen Cottages or Hemingway's"
      ]
    },
    {
      "day": 3,
      "title": "Nairobi to Maasai Mara",
      "description": "Journey to the world-famous Maasai Mara",
      "activities": [
        "Early breakfast",
        "Drive or fly to Maasai Mara (approx. 6 hours drive or 1 hour flight)",
        "Scenic stopover for the view of the Great Rift Valley escarpment",
        "Arrive for late lunch at Ilkeliani Camp",
        "Enjoy an afternoon game drive",
        "Overnight stay at Ilkeliani Camp"
      ]
    },
    {
      "day": 4,
      "title": "Full day Maasai Mara",
      "description": "Full day exploring the Mara",
      "activities": [
        "Dawn wake-up call for a hot air balloon safari experience (optional)",
        "Full day game drives in the Maasai Mara",
        "Optional: Visit a Maasai village",
        "Scenic views of the vast savanna plains and Mara River",
        "Overnight stay at Ilkeliani Luxury Camp"
      ]
    },
    {
      "day": 5,
      "title": "Maasai Mara to Nairobi",
      "description": "Final day and departure",
      "activities": [
        "Enjoy your last bush breakfast",
        "Check-out and drive or fly back to Nairobi",
        "Transfer to the airport for your flight home"
      ]
    }
  ],
  "includes": [
    "4 nights luxury accommodation",
    "All meals (breakfast, lunch, dinner)",
    "Daily activities as per itinerary",
    "Entrance fees to Nairobi National Park, David Sheldrick Elephant Orphanage, and Giraffe Centre",
    "Professional English-speaking guide",
    "Airport transfers",
    "Complimentary sundowner drinks",
    "All park fees"
  ],
  "excludes": [
    "International flights",
    "Travel insurance",
    "Kenya visa fees",
    "Alcoholic beverages (except included in meals)",
    "Personal expenses and gratuities"
  ],
  "destinations": ["nairobi", "maasai-mara"],
  "accommodations": [
    "karen-blixen-cottages",
    "hemingways",
    "ilkeliani-camp"
  ],
  "difficulty": "easy",
  "bestTime": "Year-round",
  "groupSize": { "min": 2, "max": 8 },
  "seasonalPricing": {
    "seasons": [
      {
        "name": "High Season",
        "startDate": "Jan 01",
        "endDate": "Mar 15",
        "basePrice": 2510,
        "transportCost": 1400
      },
      {
        "name": "Mid Season",
        "startDate": "Mar 16",
        "endDate": "May 31",
        "basePrice": 1810,
        "transportCost": 1200
      },
      {
        "name": "Green Season",
        "startDate": "Dec 16",
        "endDate": "Dec 31",
        "basePrice": 1660,
        "transportCost": 1200
      }
    ]
  },
  "pdfItinerary": "https://afribay.vercel.app/5-day-nairobi-maasai-mara-safari-itinerary.pdf",
  "specialNotes": [
    "Kenya visa can be obtained upon arrival ($50 USD)",
    "Yellow fever vaccination certificate required",
    "Best wildlife viewing: June-October",
    "Light aircraft baggage limit: 15kg soft bags",
    "Detailed pre-departure documents provided 30 days prior"
  ]
},
/*{
  "id": "20-day-signature-package",
  "title": "20-Day Signature Package",
  "category": "mid-range",
  "duration": "20 Days / 19 Nights",
  "price": 8050,
  "image": "/masai-mara-1.jpg",
  "gallery": [
    "/maasai-mara.jpg",
    "/ol-pejeta.jpg",
    "/lake-naivasha.jpg",
    "/lake-nakuru.jpg",
    "/mt-kenya.jpg",
    "/samburu.jpg",
    "/amboseli.jpg",
    "/tsavo-east.jpg",
    "/tsavo-west.jpg",
    "/diani-beach.jpg"
  ],
  "description": "Experience the ultimate Kenyan adventure with this comprehensive safari circuit",
  "highlights": [
    "20 days of premium safari experience",
    "Visit 8 iconic Kenyan national parks and reserves",
    "Luxury lodge accommodations",
    "Big Five guaranteed sightings",
    "Professional safari guides",
    "All meals and park fees included",
    "Beach relaxation extension"
  ],
  "itinerary": [
    {
      "day": 1,
      "title": "Arrival in Nairobi",
      "description": "Welcome to Kenya with luxury accommodation",
      "activities": [
        "Arrive at Jomo Kenyatta International Airport (NBO)",
        "Meet and greet by our team",
        "Transfer to Karen Blixen Cottages",
        "Relax and acclimatize",
        "Dinner and overnight at Karen Blixen Cottages"
      ]
    },
    {
      "day": 2,
      "title": "Full day in Nairobi",
      "description": "Explore Nairobi's wildlife and cultural attractions",
      "activities": [
        "Early morning game drive",
        "Visit Sheldrick Wildlife Centre",
        "Visit Giraffe Centre",
        "Lunch at The Carnivore",
        "Dinner and overnight at Karen Blixen Cottages"
      ]
    },
    {
      "day": 3,
      "title": "Nairobi to Lake Nakuru",
      "description": "Journey to the Great Rift Valley",
      "activities": [
        "Drive to Lake Nakuru National Park",
        "Scenic stopover: View the Great Rift Valley escarpment",
        "Afternoon game drive",
        "Overnight stay at The Cliff"
      ]
    },
    {
      "day": 4,
      "title": "Lake Nakuru to Maasai Mara",
      "description": "Enter the world-famous Maasai Mara",
      "activities": [
        "Morning game drive in Lake Nakuru",
        "Drive to Maasai Mara National Reserve",
        "Afternoon game drive",
        "Overnight stay at Ilkeliani Mara"
      ]
    },
    {
      "day": 5,
      "title": "Maasai Mara National Reserve",
      "description": "Full day exploring the Mara",
      "activities": [
        "Full day of game drives",
        "Optional: Maasai village visit",
        "Scenic views: Vast savanna plains, Mara River",
        "Hot Air Balloon Safari (optional)",
        "Overnight stay at Ilkeliani Camp"
      ]
    },
    {
      "day": 6,
      "title": "Maasai Mara to Lake Naivasha",
      "description": "Journey to the freshwater lake",
      "activities": [
        "Morning game drive",
        "Drive to Lake Naivasha",
        "Boat trip on Lake Naivasha",
        "Optional: Visit Crescent Island",
        "Overnight at Sopa Lodge"
      ]
    },
    {
      "day": 7,
      "title": "Lake Naivasha to Mt. Kenya Region",
      "description": "Arrive at the foot of Mount Kenya",
      "activities": [
        "Morning visit to Hell's Gate National Park",
        "Arrive for late lunch",
        "Enjoy Mt. Kenya views sundowners",
        "Overnight at Fairmont Mt. Kenya Safari Club"
      ]
    },
    {
      "day": 8,
      "title": "Mt. Kenya",
      "description": "Full day exploring Mount Kenya",
      "activities": [
        "Early breakfast with morning views of Mt. Kenya",
        "Game drive",
        "Packed lunch under an Acacia tree",
        "Bush sundowner",
        "Overnight stay at Fairmont Mt. Kenya Safari Club"
      ]
    },
    {
      "day": 9,
      "title": "Mt. Kenya to Samburu National Reserve",
      "description": "Enter the unique Samburu landscape",
      "activities": [
        "Early morning drive to Samburu",
        "Afternoon game drive",
        "Overnight stay at Soroi Larsen Camp"
      ]
    },
    {
      "day": 10,
      "title": "Samburu to Amboseli National Park",
      "description": "Journey to the land of giants",
      "activities": [
        "Long drive to Amboseli",
        "Afternoon game drive",
        "Overnight stay at Tawi Lodge"
      ]
    },
    {
      "day": 11,
      "title": "Amboseli National Park",
      "description": "Full day exploring Amboseli's elephant herds",
      "activities": [
        "Full day of game drives",
        "Overnight stay at Tawi Lodge"
      ]
    },
    {
      "day": 12,
      "title": "Amboseli to Tsavo West National Park",
      "description": "Journey to the land of red elephants",
      "activities": [
        "Drive to Tsavo West National Park",
        "Afternoon game drive",
        "Visit Mzima Springs",
        "Overnight stay at Soroi Lions Bluff or Salt Lick by Sarova"
      ]
    },
    {
      "day": 13,
      "title": "Tsavo West National Park",
      "description": "Full day exploring Tsavo's diverse landscapes",
      "activities": [
        "Visit Shetani Lava Flows",
        "Poacher's Lookout",
        "Chaimu Crater",
        "Ngulia Hills",
        "Lugard Falls",
        "Aruba Dam",
        "Sundowner on the rocks"
      ]
    },
    {
      "day": 14,
      "title": "Tsavo West to Tsavo East National Park",
      "description": "Explore the largest national park in Kenya",
      "activities": [
        "Drive to Tsavo East National Park",
        "Afternoon game drive",
        "Overnight stay at Kipalo Hills Lodge"
      ]
    },
    {
      "day": 15,
      "title": "Tsavo East to Diani Beach",
      "description": "Transition from bush to beach",
      "activities": [
        "Travel to Diani Beach",
        "Overnight stay at Swahili Beach Resort"
      ]
    },
    {
      "day": 16,
      "title": "Diani Beach",
      "description": "Beach relaxation and water activities",
      "activities": [
        "Relax and enjoy Diani Beach",
        "Optional: Water sports, snorkeling",
        "Overnight stay at Swahili Beach Resort"
      ]
    },
    {
      "day": 17,
      "title": "Diani Beach",
      "description": "Beach relaxation and water activities",
      "activities": [
        "Relax and enjoy Diani Beach",
        "Optional: Water sports, snorkeling",
        "Overnight stay at Swahili Beach Resort"
      ]
    },
    {
      "day": 18,
      "title": "Diani Beach",
      "description": "Beach relaxation and water activities",
      "activities": [
        "Relax and enjoy Diani Beach",
        "Optional: Water sports, snorkeling",
        "Overnight stay at Swahili Beach Resort"
      ]
    },
    {
      "day": 19,
      "title": "Diani Beach",
      "description": "Beach relaxation and water activities",
      "activities": [
        "Relax and enjoy Diani Beach",
        "Optional: Water sports, snorkeling",
        "Overnight stay at Swahili Beach Resort"
      ]
    },
    {
      "day": 20,
      "title": "Diani to Nairobi Departure",
      "description": "Final day and departure",
      "activities": [
        "Final breakfast",
        "Travel from Diani to Nairobi",
        "Transfer to Jomo Kenyatta International Airport for your departure"
      ]
    }
  ],
  "includes": [
    "19 nights luxury accommodation",
    "All meals (breakfast, lunch, dinner)",
    "Daily game drives in private 4x4 vehicles",
    "All national park entrance fees",
    "Professional English-speaking guide",
    "Boat trip on Lake Naivasha",
    "Airport transfers",
    "Complimentary sundowner drinks"
  ],
  "excludes": [
    "International flights",
    "Travel insurance",
    "Kenya visa fees",
    "Personal expenses and gratuities"
  ],
  "destinations": ["nairobi", "lake-nakuru", "maasai-mara", "lake-naivasha", "mt-kenya", "samburu", "amboseli", "tsavo", "tsavo-east", "diani-beach"],
  "accommodations": [
    "karen-blixen-cottages",
    "the-cliff",
    "ilkeliani-mara",
    "sopa-lodge",
    "fairmont-mt-kenya-safari-club",
    "soroi-larsen-camp",
    "tawi-lodge",
    "soroi-lions-bluff",
    "kipalo-hills-lodge",
    "swahili-beach-resort"
  ],
  "difficulty": "easy",
  "bestTime": "Year-round",
  "groupSize": { "min": 2, "max": 8 },
  "seasonalPricing": {
    "seasons": [
      {
        "name": "High Season",
        "startDate": "Jan 01",
        "endDate": "Mar 15",
        "basePrice": 8050,
        "transportCost": 5250
      },
      {
        "name": "Mid Season",
        "startDate": "Mar 16",
        "endDate": "May 31",
        "basePrice": 6260,
        "transportCost": 4500
      },
      {
        "name": "Green Season",
        "startDate": "Dec 16",
        "endDate": "Dec 31",
        "basePrice": 5570,
        "transportCost": 4500
      }
    ]
  },
  "pdfItinerary": "https://afribay.vercel.app/20-day-signature-package-itinerary.pdf",
  "specialNotes": [
    "Kenya visa can be obtained upon arrival ($50 USD)",
    "Yellow fever vaccination certificate required",
    "Best wildlife viewing: June-October",
    "Light aircraft baggage limit: 15kg soft bags",
    "Detailed pre-departure documents provided 30 days prior"
  ]
},
{
  "id": "10-day-bush-wild-beach-safari",
  "title": "10-Day Bush, Wild, and Beach Safari",
  "category": "mid-range",
  "duration": "10 Days / 9 Nights",
  "price": 3348,
  "image": "/amboseli-1.jpg",
  "gallery": [
    "/nairobi-national-park.jpg",
    "/amboseli-national-park.jpg",
    "/serval-wildlife.jpg",
    "/tsavo-west-national-park.jpg",
    "/diani-beach.jpg"
  ],
  "description": "Indulge in the ultimate Kenyan adventure with this luxury City, Bush, and Beach safari",
  "highlights": [
    "Luxury Safaris",
    "Wildlife Encounters",
    "Cultural Experiences",
    "City Exploration",
    "Beach Relaxation"
  ],
  "itinerary": [
    {
      "day": 1,
      "title": "Arrival in Nairobi",
      "description": "Welcome to Kenya with luxury accommodation",
      "activities": [
        "Arrive at Jomo Kenyatta International Airport (NBO)",
        "Meet and greet by our team",
        "Transfer to your city accommodation",
        "Relax and acclimatize",
        "Dinner and overnight at Karen Blixen Cottages or Hemingway’s Hotel"
      ]
    },
    {
      "day": 2,
      "title": "Full day in Nairobi",
      "description": "Explore Nairobi's wildlife and cultural attractions",
      "activities": [
        "Enjoy an early breakfast",
        "Visit Nairobi National Park",
        "Visit the David Sheldrick Elephant Orphanage",
        "Visit the Giraffe Centre",
        "Enjoy lunch at the Carnivore",
        "Optional: Explore the Karen Blixen Museum",
        "Dinner and overnight at Karen Blixen Cottages or Hemingway’s"
      ]
    },
    {
      "day": 3,
      "title": "Nairobi to Amboseli",
      "description": "Journey to the land of giants",
      "activities": [
        "Early breakfast",
        "Drive to Amboseli National Park (approx. 4 hours)",
        "Afternoon game drive",
        "Overnight stay at Tawi Lodge"
      ]
    },
    {
      "day": 4,
      "title": "Amboseli National Park",
      "description": "Full day exploring Amboseli's elephant herds",
      "activities": [
        "Full day of game drives",
        "Scenic views of Mt. Kilimanjaro",
        "Enjoy a sundowner and a bonfire",
        "Overnight stay at Tawi Lodge"
      ]
    },
    {
      "day": 5,
      "title": "Amboseli to Serval Wildlife Tanzania",
      "description": "Unique wildlife dining experience",
      "activities": [
        "Early breakfast",
        "Drive to Moshi city, Tanzania",
        "Wine and dine with tamed wildlife",
        "Dinner and overnight at Serval Wildlife Lodge"
      ]
    },
    {
      "day": 6,
      "title": "Serval Wildlife to Tsavo West National Park",
      "description": "Journey to the land of red elephants",
      "activities": [
        "Breakfast with tamed wildlife",
        "Drive to Tsavo West National Park (approx. 3 hours)",
        "Check in at Soroi Lions Bluff",
        "Afternoon game drive",
        "Visit Mzima Springs",
        "Sundowners and bonfire at Soroi Lions Bluff"
      ]
    },
    {
      "day": 7,
      "title": "Full day at Tsavo West National Park",
      "description": "Explore Tsavo's diverse landscapes",
      "activities": [
        "Early breakfast",
        "Visit Shetani Lava Flows",
        "Poacher’s Lookout",
        "Chaimu Crater",
        "Ngulia Hills",
        "Yatta Plateau",
        "Lugard Falls",
        "Aruba Dam, Roaring Rocks"
      ]
    },
    {
      "day": 8,
      "title": "Tsavo West to Diani",
      "description": "Transition from bush to beach",
      "activities": [
        "Last bush breakfast",
        "Drive to Diani Beach (approx. 4 hours)",
        "Check in to Southern Palms Beach Resort",
        "Afternoon by the beach",
        "Sundowners by the beach bar",
        "Dinner and overnight at Southern Palms Beach Resort"
      ]
    },
    {
      "day": 9,
      "title": "Full day at Diani",
      "description": "Beach relaxation and water activities",
      "activities": [
        "Relax and enjoy Diani Beach",
        "Optional: Water sports, snorkeling, camel rides",
        "Overnight stay at Southern Palms Beach Resort"
      ]
    },
    {
      "day": 10,
      "title": "Diani to Nairobi",
      "description": "Final day and departure",
      "activities": [
        "Breakfast",
        "Check out and transfer to Nairobi",
        "Transfer to Jomo Kenyatta International Airport for your departure"
      ]
    }
  ],
  "includes": [
    "9 nights luxury accommodation",
    "All meals (breakfast, lunch, dinner)",
    "Daily activities as per itinerary",
    "Entrance fees to Nairobi National Park, Amboseli National Park, Serval Wildlife Lodge, and Tsavo West National Park",
    "Professional English-speaking guide",
    "Airport transfers",
    "Complimentary sundowner drinks"
  ],
  "excludes": [
    "International flights",
    "Travel insurance",
    "Kenya visa fees",
    "Alcoholic beverages (except included in meals)",
    "Personal expenses and gratuities"
  ],
  "destinations": ["nairobi", "amboseli", "tsavo-west", "diani-beach"],
  "accommodations": [
    "karen-blixen-cottages",
    "hemingways",
    "tawi-lodge",
    "serval-wildlife-lodge",
    "soroi-lions-bluff",
    "southern-palms-beach-resort"
  ],
  "difficulty": "easy",
  "bestTime": "Year-round",
  "groupSize": { "min": 2, "max": 8 },
  "seasonalPricing": {
    "seasons": [
      {
        "name": "High Season",
        "startDate": "Jan 01",
        "endDate": "Mar 15",
        "basePrice": 3350,
        "transportCost": 2450
      },
      {
        "name": "Mid Season",
        "startDate": "Mar 16",
        "endDate": "Nov 15",
        "basePrice": 2610,
        "transportCost": 2100
      },
      {
        "name": "Green Season",
        "startDate": "Nov 16",
        "endDate": "Dec 31",
        "basePrice": 2420,
        "transportCost": 2100
      }
    ]
  },
  "pdfItinerary": "https://afribay.vercel.app/10-day-bush-wild-beach-safari-itinerary.pdf",
  "specialNotes": [
    "Kenya visa can be obtained upon arrival ($50 USD)",
    "Yellow fever vaccination certificate required",
    "Best wildlife viewing: June-October",
    "Light aircraft baggage limit: 15kg soft bags",
    "Detailed pre-departure documents provided 30 days prior"
  ]
},
{
  "id": "9-day-nairobi-mt-kenya-diani-safari",
  "title": "9-Day Kenya Safari: Nairobi to Mountains, Plains & Beach",
  "category": "mid-range",
  "duration": "9 Days / 8 Nights",
  "price": 3170,
  "image": "/nairobi-1.jpg",
  "gallery": [
    "/diani-6.jpg",
    "/diani-9.jpg",
    "/diani-8.jpg",
    "/diani-4.jpg",
    "/diani-3.jpg",
    "/diani-2.jpg"
  ],
  "description": "Indulge in the ultimate Kenyan adventure with this luxury City and Bush safari",
  "highlights": [
    "Luxury Safaris",
    "Wildlife Encounters",
    "Cultural Experiences",
    "City Exploration",
    "Beach Relaxation"
  ],
  "itinerary": [
    {
      "day": 1,
      "title": "Arrival in Nairobi",
      "description": "Welcome to Kenya with luxury accommodation",
      "activities": [
        "Arrive at Jomo Kenyatta International Airport (NBO)",
        "Meet and greet by our team",
        "Transfer to Karen Blixen Cottages or Hemingway’s",
        "Relax and acclimatize",
        "Dinner and overnight at Karen Blixen Cottages or Hemingway’s"
      ]
    },
    {
      "day": 2,
      "title": "Full day in Nairobi",
      "description": "Tea & coffee tasting in the highlands",
      "activities": [
        "Enjoy an early breakfast",
        "Visit the Giraffe Centre",
        "Journey to Kiambethu Tea Farm",
        "Learn about tea farming and enjoy a cup of tea",
        "Enjoy a three-course buffet lunch",
        "Depart for Fairview Coffee Estate",
        "Coffee tasting experience",
        "Return to Nairobi",
        "Dinner and overnight at Karen Blixen Cottages or Hemingway’s"
      ]
    },
    {
      "day": 3,
      "title": "Nairobi to Nanyuki (Mt Kenya)",
      "description": "Journey to the foothills of Mount Kenya",
      "activities": [
        "Early breakfast",
        "Drive to Nanyuki",
        "Late lunch at Fairmont Mt. Kenya Safari Club",
        "Afternoon game drive with Mt Kenya views",
        "Sundowners at Ol Pejeta Conservancy",
        "Overnight at Fairmont Mt. Kenya Safari Club"
      ]
    },
    {
      "day": 4,
      "title": "Mt. Kenya",
      "description": "Full day exploring Mount Kenya",
      "activities": [
        "Early breakfast with morning views of Mt. Kenya",
        "Game drive",
        "Packed lunch under an Acacia tree",
        "Bush sundowner",
        "Overnight stay at Fairmont Mt. Kenya Safari Club"
      ]
    },
    {
      "day": 5,
      "title": "Mt Kenya to Borana",
      "description": "Enter the exclusive Borana Conservancy",
      "activities": [
        "Breakfast",
        "Drive to Borana Conservancy",
        "Afternoon game drive",
        "Scenic views: Ewaso Ng'iro River, arid landscapes",
        "Evening sundowners and bonfire",
        "Overnight stay at Laragai House"
      ]
    },
    {
      "day": 6,
      "title": "Full Day at Borana Conservancy",
      "description": "Horse riding & rhino tracking",
      "activities": [
        "Breakfast with sunrise views",
        "Horse riding in the wild",
        "Rhino tracking",
        "Visit Ngare Ndare Falls",
        "Afternoon game drive",
        "Sundowner, bonfire, and bush dinner"
      ]
    },
    {
      "day": 7,
      "title": "Borana to Diani",
      "description": "Transition from mountain to coast",
      "activities": [
        "Last bush breakfast",
        "Drive to Nairobi",
        "Flight to Diani",
        "Check in to Swahili Beach Resort",
        "Afternoon by the beach",
        "Sundowners by the beach bar",
        "Dinner and overnight at Southern Palms Beach Resort"
      ]
    },
    {
      "day": 8,
      "title": "Full day at Diani",
      "description": "Beach relaxation and water activities",
      "activities": [
        "Relax and enjoy Diani Beach",
        "Optional: Water sports, snorkeling, camel rides",
        "Overnight stay at Southern Palms Beach Resort"
      ]
    },
    {
      "day": 9,
      "title": "Diani to Nairobi",
      "description": "Final day and departure",
      "activities": [
        "Breakfast",
        "Check out and transfer to Nairobi",
        "Transfer to Jomo Kenyatta International Airport for your departure"
      ]
    }
  ],
  "includes": [
    "8 nights luxury accommodation",
    "All meals (breakfast, lunch, dinner)",
    "Daily activities as per itinerary",
    "Entrance fees to Nairobi National Park, Kiambethu Tea Farm, Fairview Coffee Estate, Ol Pejeta Conservancy, and Borana Conservancy",
    "Professional English-speaking guide",
    "Airport transfers",
    "Complimentary sundowner drinks"
  ],
  "excludes": [
    "International flights",
    "Travel insurance",
    "Kenya visa fees",
    "Alcoholic beverages (except included in meals)",
    "Personal expenses and gratuities"
  ],
  "destinations": ["nairobi", "mt-kenya", "borana-conservancy", "diani-beach"],
  "accommodations": [
    "karen-blixen-cottages",
    "hemingways",
    "fairmont-mt-kenya-safari-club",
    "laragai-house",
    "southern-palms-beach-resort"
  ],
  "difficulty": "easy",
  "bestTime": "Year-round",
  "groupSize": { "min": 2, "max": 8 },
  "seasonalPricing": {
    "seasons": [
      {
        "name": "High Season",
        "startDate": "Jan 01",
        "endDate": "Mar 15",
        "basePrice": 3170,
        "transportCost": 2100
      },
      {
        "name": "Mid Season",
        "startDate": "Mar 16",
        "endDate": "May 31",
        "basePrice": 2610,
        "transportCost": 1800
      },
      {
        "name": "Green Season",
        "startDate": "Dec 16",
        "endDate": "Dec 31",
        "basePrice": 2420,
        "transportCost": 1800
      }
    ]
  },
  "pdfItinerary": "https://afribay.vercel.app/9-day-nairobi-mt-kenya-diani-safari-itinerary.pdf",
  "specialNotes": [
    "Kenya visa can be obtained upon arrival ($50 USD)",
    "Yellow fever vaccination certificate required",
    "Best wildlife viewing: June-October",
    "Light aircraft baggage limit: 15kg soft bags",
    "Detailed pre-departure documents provided 30 days prior"
  ]
},
{
  "id": "kenya-hidden-treasures",
  "title": "Kenya's Hidden Treasures: 10-Day Wildlife & Cultural Journey",
  "category": "mid-range",
  "duration": "10 Days / 9 Nights",
  "price": 7710,
  "image": "/mount-kenya-2.jpg",
  "gallery": [
    "/mount-kenya-3.jpg",
    "/mount-kenya-1.jpg",
    "/mount-kenya-8.jpg",
    "/mount-kenya-7.jpg",
    "/mount-kenya-6.jpg",
    "/mount-kenya-5.jpg",
    "/mount-kenya-4.jpg"
  ],
  "description": "Discover Kenya's diverse landscapes and wildlife treasures on this unforgettable 10-day safari adventure",
  "highlights": [
    "Explore Kenya's top wildlife reserves and hidden gems",
    "Cultural experiences and conservation projects",
    "Scenic landscapes from mountain forests to arid plains",
    "Luxury accommodations in unique lodges and camps",
    "Professional guides and personalized safari experience",
    "Special wildlife encounters including the 'Samburu Special Five'",
    "All meals, game drives, and park fees included"
  ],
  "itinerary": [
    {
      "day": 1,
      "title": "Arrival in Nairobi",
      "description": "Welcome to Kenya with luxury accommodation",
      "activities": [
        "Arrive at Jomo Kenyatta International Airport (NBO)",
        "Meet and greet by our team",
        "Transfer to your city accommodation",
        "Relax and acclimatize",
        "Dinner and overnight at Karen Blixen Cottages"
      ]
    },
    {
      "day": 2,
      "title": "Full day in Nairobi",
      "description": "Tea & coffee tasting in the highlands",
      "activities": [
        "Early breakfast",
        "Visit the Giraffe Centre",
        "Journey to Kiambethu Tea Farm",
        "Lunch at the farm",
        "Coffee tasting experience at Fairview Coffee Estate",
        "Return to Nairobi for the evening",
        "Dinner and overnight at Karen Blixen Cottages"
      ]
    },
    {
      "day": 3,
      "title": "Nairobi to Nanyuki (Mt Kenya)",
      "description": "Journey to the foothills of Mount Kenya",
      "activities": [
        "Dawn departure",
        "Arrive for late lunch at The River Camp",
        "Afternoon horse ride",
        "Visit animal orphanage",
        "Sundowners at Ol Pejeta conservancy",
        "Bonfire and overnight at The River Camp"
      ]
    },
    {
      "day": 4,
      "title": "Mt. Kenya",
      "description": "Full day exploring Mount Kenya",
      "activities": [
        "Bush breakfast by the river",
        "Morning game drive",
        "Packed lunch under an Acacia tree",
        "Bush sundowner",
        "Overnight stay at The River Camp"
      ]
    },
    {
      "day": 5,
      "title": "Mt Kenya to Samburu",
      "description": "Enter the unique Samburu landscape",
      "activities": [
        "Breakfast by the foothill of a beautiful sunrise",
        "Two-hour drive to Samburu",
        "Check in at Elephant Bedroom Camp",
        "Afternoon game drive",
        "Bush sundowners",
        "Bonfire and overnight at Elephant Bedroom Camp"
      ]
    },
    {
      "day": 6,
      "title": "Full Day at Samburu Conservancy",
      "description": "Camel trekking & guided walks",
      "activities": [
        "Breakfast overlooking breathtaking landscapes",
        "Visit to Buffalo Springs",
        "Camel trekking",
        "Guided nature walks",
        "Sundowners, bonfire & bush dinner",
        "Overnight at Elephant Bedroom Camp"
      ]
    },
    {
      "day": 7,
      "title": "Samburu to Borana Conservancy",
      "description": "Exclusive conservation experience",
      "activities": [
        "Breakfast served",
        "One-hour drive to Borana",
        "Check in at Borana Lodge",
        "Afternoon game drive",
        "Evening sundowners & bonfire",
        "Overnight stay at Borana Lodge"
      ]
    },
    {
      "day": 8,
      "title": "Full Day at Borana Conservancy",
      "description": "Horse riding & rhino tracking",
      "activities": [
        "Breakfast overlooking landscapes",
        "Horse riding in the wild",
        "Rhino tracking",
        "Visit to Ngare Ndare Falls",
        "Afternoon game drive",
        "Sundowner, bonfire & bush dinner",
        "Overnight at Borana Lodge"
      ]
    },
    {
      "day": 9,
      "title": "Borana to Aberdares Conservancy",
      "description": "Scenic mountain retreat",
      "activities": [
        "Breakfast by the riverside",
        "Check out and drive to Aberdares",
        "Picturesque mountainous scenery",
        "Bonfire for chilly evenings",
        "Overnight at Aberdares Country Club"
      ]
    },
    {
      "day": 10,
      "title": "Aberdares to Nairobi",
      "description": "Farewell safari and departure",
      "activities": [
        "Last bush breakfast",
        "Check out",
        "Drive to Nairobi",
        "Lunch at The Carnivore",
        "Transfer to Jomo Kenyatta International Airport for departure"
      ]
    }
  ],
  "includes": [
    "9 nights luxury accommodation",
    "All meals (breakfast, lunch, dinner)",
    "Daily game drives in private 4x4 vehicles",
    "All national park entrance fees",
    "Professional English-speaking guide",
    "Cultural experiences and conservation visits",
    "Airport transfers",
    "Complimentary sundowner drinks",
    "Special activities including horse riding and camel trekking"
  ],
  "excludes": [
    "International flights",
    "Travel insurance",
    "Kenya visa fees",
    "Personal expenses and gratuities"
  ],
  "destinations": ["nairobi", "mt-kenya", "samburu", "borana-conservancy", "aberdares"],
  "accommodations": [
    "karen-blixen-cottages",
    "the-river-camp",
    "elephant-bedroom-camp",
    "borana-lodge",
    "aberdares-country-club"
  ],
  "difficulty": "easy",
  "bestTime": "Year-round",
  "groupSize": { "min": 2, "max": 8 },
  "seasonalPricing": {
    "seasons": [
      {
        "name": "High Season",
        "startDate": "Jan 01",
        "endDate": "Mar 15",
        "basePrice": 7710,
        "transportCost": 2200
      },
      {
        "name": "Mid Season",
        "startDate": "Mar 16",
        "endDate": "May 31",
        "basePrice": 5160,
        "transportCost": 2100
      },
      {
        "name": "Green Season",
        "startDate": "Dec 16",
        "endDate": "Dec 31",
        "basePrice": 4880,
        "transportCost": 2000
      }
    ]
  },
  "pdfItinerary": "https://afribay.vercel.app/10-day-kenya-hidden-treasures-itinerary.pdf",
  "specialNotes": [
    "Kenya visa can be obtained upon arrival ($50 USD)",
    "Yellow fever vaccination certificate required",
    "Best wildlife viewing: June-October",
    "Light aircraft baggage limit: 15kg soft bags",
    "Detailed pre-departure documents provided 30 days prior"
  ]
},*/
{
  id: "offer-nairobi-daytrip-1d",
  category: "offer",
  title: "Nairobi National Park One-Day Safari",
  description:
    "A whirlwind Big-Five safari inside a capital city! Within minutes of leaving your hotel you’ll be tracking lions against a skyline backdrop, then hand-feeding endangered Rothschild giraffes and finishing with a stroll through Kenya’s finest cultural exhibits. All in one action-packed day, door-to-door in a private Land-Cruiser.",
  duration: "1 Day (06:00 – 17:30)",
  groupSize: { min: 1, max: 6 },
  startPoint: "Nairobi hotel or JKIA",
  endPoint: "Nairobi hotel or JKIA",
  destinations: ["Nairobi National Park", "Giraffe Centre", "Nairobi National Museum"],
  highlights: [
    "Big-Five game drive with city-skyline backdrop",
    "Hand-feed endangered Rothschild giraffes",
    "Kenya’s story in one hour at the National Museum",
    "Private 4×4 Land-Cruiser with pop-up roof",
    "Door-to-door service – no shared shuttles",
  ],
  includes: [
    "Private 4×4 Land-Cruiser with pop-up roof & window seats guaranteed",
    "Professional English-speaking driver/guide",
    "All park & centre entrance fees",
    "Bottled water in the vehicle",
    "Hotel / JKIA pick-up & drop-off",
  ],
  excludes: [
    "Lunch (can be added for +$20 pp at Utamaduni Café)",
    "Tips / gratuities (recommended USD 10 per person)",
    "Personal purchases or drinks",
    "Anything not listed above",
  ],
  itinerary: [
    {
      day: 1,
      title: "Nairobi → Nairobi National Park → Giraffe Centre → Museum → Nairobi",
      description:
        "06:00 Pick-up from your hotel or JKIA. 06:30–11:30 Game drive in Nairobi National Park (lion, rhino, buffalo, zebra & skyscraper photos). 11:45–12:30 Visit Giraffe Centre – learn about and feed the endangered Rothschild giraffes. 13:00–14:00 Optional lunch at Utamaduni Café (own cost). 14:15–15:45 Guided tour of Nairobi National Museum (fossils, culture, art). 16:00–17:30 Drop-off back at your hotel or JKIA. End of tour.",
      activities: ["Game drive", "Nature walk", "Cultural tour"],
    },
  ],
  price: 280, // per person based on 2–3 pax; adjust dynamically in UI if you wish
  image: "https://afribay.vercel.app/offer-nairobi-day-trip.jpg",
  slug: "nairobi-national-park-day-safari",
  metaTitle: "Nairobi One-Day Safari | Big-Five in a City",
  metaDescription:
    "Pack Big-Five game drive, giraffe encounter & museum into one day. Private Land-Cruiser, all fees, door-to-door. Instant confirmation & flexible dates.",
},
{
  id: "offer-mara-amboseli-5d",
  category: "offer",
  title: "5-Day Maasai Mara & Amboseli Safari Special",
  description:
    "Big-five packed adventure that combines the world-famous Maasai Mara with the postcard backdrop of Amboseli’s elephants beneath Mt. Kilimanjaro. 4 nights’ mid-range lodge stay, daily game drives, transport and full-board meals included at a limited-time promotional price.",
  duration: "5 Days / 4 Nights",
  groupSize: { min: 2, max: 6 },
  startPoint: "Nairobi",
  endPoint: "Nairobi",
  destinations: ["Maasai Mara National Reserve", "Amboseli National Park"],
  highlights: [
    "Daily game drives in Maasai Mara with high Big-Five odds",
    "Sunrise & sunset game drives in Amboseli with Kilimanjaro views",
    "Comfortable mid-range lodges with en-suite bathrooms & swimming pools",
    "All transport in a private 4×4 safari land-cruiser with pop-up roof",
    "Professional English-speaking driver/guide",
  ],
  /*  <-- renamed to match component  */
  includes: [
    "4×4 safari land-cruiser ",
    "Services of a professional English-speaking safari guide",
    "4 nights’ accommodation: 2 nights in Mara & 2 nights in Amboseli",
    "All meals full board",
    "Bottled water for the safari",
    "Airport / hotel pick-up & drop-off in Nairobi",
    "Emergency medical evacuation ",
  ],
  excludes: [
    "International flights & visas",
    "Tips / gratuities (recommended USD 10 per person per day)",
    "Personal travel insurance",
    "Extra meals & drinks not specified",
    "Anything not mentioned under inclusions",
  ],
  itinerary: [
    {
      day: 1,
      title: "Nairobi → Maasai Mara",
      description:
        "Early Pick-up from your Nairobi hotel / JKIA. Drive down the Great Rift Valley to Maasai Mara (≈ 5 h). En-route stop at the Rift-valley viewpoint for photos. Hot lunch in Narok town. Afternoon game drive upon arrival. Dinner & overnight at your lodge.",
      activities: ["Game drive"],
    },
    {
      day: 2,
      title: "Full Day Maasai Mara",
      description:
        "Early breakfast, then depart for a full-day game drive on Mara’s rolling plains. Track the Big-Five and, seasonally, the Great Migration herds. Return to lodge for dinner & overnight.",
      activities: ["Game drive"],
    },
    {
      day: 3,
      title: "Maasai Mara → Amboseli",
      description:
        "Sunrise game drive 06:30-09:00, return for breakfast. Depart Mara and drive back to Nairobi (lunch at Carnivore / local restaurant, own cost). Continue south-east to Amboseli, arriving early evening. Check-in at your lodge for dinner & overnight.",
      activities: ["Game drive"],
    },
    {
      day: 4,
      title: "Full Day Amboseli",
      description:
        "Morning & afternoon game drives in Amboseli, famous for its large elephant herds and unbeatable Kilimanjaro panoramas. All meals and overnight at your lodge.",
      activities: ["Game drive"],
    },
    {
      day: 5,
      title: "Amboseli → Nairobi",
      description:
        "Final sunrise game drive, breakfast, then depart for Nairobi. Hot lunch en-route (own cost). Drop-off at your hotel or JKIA by 16:00. End of services.",
      activities: ["Game drive"],
    },
  ],
  price: 1820,
  image: "https://afribay.vercel.app/offer-mara-amboseli.jpg",
  slug: "5-day-mara-amboseli-offer",
  metaTitle: "5-Day Mara-Amboseli Offer | Kenya Safari Deal",
  metaDescription:
    "Limited-time 5-day Maasai Mara & Amboseli safari package from Nairobi. Big-five game drives, Kilimanjaro views, mid-range lodges, all-inclusive.",
},
{
  "id": "offer-mara-mombasa-6d",
  "category": "offer",
  "title": "6-Day Maasai Mara Safari & Mombasa Beach Escape",
  "description": "The perfect bush-to-beach blend: two thrilling nights in the world-famous Maasai Mara followed by three relaxing nights on the white sands of Mombasa’s north-coast beaches. Includes daily game drives, flights between Nairobi and Mombasa, all transfers, mid-range lodge & beach-resort accommodation, full-board meals and a host of beach activities—all at one limited-time promotional price.",
  "duration": "6 Days / 5 Nights",
  "groupSize": { "min": 2, "max": 6 },
  "startPoint": "Nairobi",
  "endPoint": "Nairobi",
  "destinations": ["Maasai Mara National Reserve", "Mombasa Beaches"],
  "highlights": [
    "Daily Big-Five game drives in Maasai Mara with pop-top 4×4",
    "Sundowner beach walks & turquoise Indian-Ocean swims",
    "Return flights Nairobi ↔ Mombasa – no long drives",
    "Comfortable mid-range safari lodge & 4-star beach resort",
    "All transfers, park fees, full-board meals & bottled water included"
  ],
  "includes": [
    "Private 4×4 safari land-cruiser with pop-up roof in Mara",
    "Professional English-speaking driver/guide",
    "2 nights’ mid-range lodge in Maasai Mara – full board",
    "3 nights’ 4-star beach resort in Mombasa – full board",
    "Return flights Nairobi–Mombasa–Nairobi (15 kg checked bag + 7 kg hand luggage)",
    "All airport / hotel / airstrip road transfers in Nairobi & Mombasa",
    "All meals as specified (full board)",
    "Bottled water on safari & in vehicle",
    "Emergency medical-evacuation cover",
    "24-hour on-safari support"
  ],
  "excludes": [
    "International flights & visas",
    "Tips / gratuities (recommended USD 10 per person per day)",
    "Personal travel insurance",
    "Beach extras (diving, kite-surf, snorkelling, spa etc.)",
    "Drinks at beach resort",
    "Anything not mentioned under inclusions"
  ],
  "itinerary": [
    {
      "day": 1,
      "title": "Nairobi → Maasai Mara",
      "description": "07:00 pick-up from Nairobi hotel/JKIA. Drive down the Great Rift Valley to Maasai Mara (≈ 5 h). Photo stop at Rift-valley viewpoint. Hot lunch in Narok. Afternoon game drive on arrival. Dinner & overnight at lodge.",
      "activities": ["Game drive"]
    },
    {
      "day": 2,
      "title": "Full Day Maasai Mara",
      "description": "Early breakfast, then full-day game drive on the Mara plains tracking Big-Five & (seasonally) the Great Migration. Picnic lunch under an acacia. Return to lodge for dinner & overnight.",
      "activities": ["Game drive"]
    },
    {
      "day": 3,
      "title": "Mara → Nairobi → Fly to Mombasa",
      "description": "Sunrise game drive 06:30-09:00, breakfast, check-out. Drive back to Nairobi (lunch on own cost at Carnivore/local restaurant). Transfer to Wilson Airport for 16:00 flight to Mombasa. 1-hour flight. Meet & transfer to beach resort for dinner & overnight.",
      "activities": ["Game drive", "Flight"]
    },
    {
      "day": 4,
      "title": "Mombasa Beach – At Leisure",
      "description": "Full day to unwind on Mombasa’s powder-white sand. Optional snorkelling, kite-surfing or glass-bottom boat trip (book & pay locally). All meals & overnight at resort.",
      "activities": ["Beach leisure"]
    },
    {
      "day": 5,
      "title": "Mombasa Beach – At Leisure",
      "description": "Another relaxed day. Optional excursion to Fort Jesus, Old Town or Haller Park (extra cost). Farewell beach dinner. Overnight at resort.",
      "activities": ["Beach leisure"]
    },
    {
      "day": 6,
      "title": "Mombasa → Fly to Nairobi",
      "description": "Breakfast, check-out. Transfer to Moi International Airport for mid-morning flight to Wilson Airport, Nairobi. Meet driver for drop-off at JKIA or your Nairobi hotel by 13:00. End of services.",
      "activities": ["Flight"]
    }
  ],
  "price": 2500,
  "image": "https://afribay.vercel.app/offer-mara-mombasa.jpg",
  "slug": "6-day-mara-mombasa-offer",
  "metaTitle": "6-Day Mara Safari + Mombasa Beach Offer | Kenya Bush-to-Beach Deal",
  "metaDescription": "Limited-time 6-day Maasai Mara & Mombasa Beach package: Big-five safari, flights to coast, 4-star beach resort, all-inclusive from Nairobi."
},

{
  "id": "offer-nakuru-mara-5d",
  "category": "offer",
  "title": "5-Day Lake Nakuru & Maasai Mara Safari",
  "description": "Compact wildlife safari: two nights on the flamingo-lined shores of Lake Nakuru followed by two action-packed nights in the world-famous Maasai Mara. Includes daily game drives, all road transfers, comfortable mid-range lodge accommodation, full-board meals and 24-hour support—all at one promotional price.",
  "duration": "5 Days / 4 Nights",
  "groupSize": { "min": 2, "max": 6 },
  "startPoint": "Nairobi",
  "endPoint": "Nairobi",
  "destinations": ["lake-nakuru", "maasai mara "],
  "highlights": [
    "Daily game drives in Lake Nakuru & Maasai Mara",
    "Pop-top 4×4 land-cruiser throughout",
    "Comfortable mid-range lodges – full board",
    "Transfers & bottled water included",
    "24-hour on-safari support"
  ],
  "includes": [
    "Private 4×4 safari land-cruiser with pop-up roof",
    "Professional English-speaking driver/guide",
    "2 nights’ mid-range lodge at Lake Nakuru – full board",
    "2 nights’ mid-range lodge in Maasai Mara – full board",
    "All road transfers Nairobi–Nakuru–Mara–Nairobi",
    "All meals as specified (full board)",
    "Bottled water in vehicle",
    "Emergency medical-evacuation cover",
    "24-hour on-safari support"
  ],
  "excludes": [
    "International flights & visas",
    "Tips / gratuities (recommended USD 10 per person per day)",
    "Personal travel insurance",
    "Anything not mentioned under inclusions"
  ],
  "itinerary": [
    {
      "day": 1,
      "title": "Nairobi → Lake Nakuru",
      "description": "07:00 pick-up from Nairobi hotel/JKIA. Drive to Lake Nakuru (≈ 3 h). Check-in and lunch at lodge. Afternoon game drive. Dinner & overnight.",
      "activities": ["Game drive"]
    },
    {
      "day": 2,
      "title": "Lake Nakuru",
      "description": "Morning & afternoon game drives; rhino & flamingo sightings. All meals & overnight at lodge.",
      "activities": ["Game drive"]
    },
    {
      "day": 3,
      "title": "Nakuru → Maasai Mara",
      "description": "Breakfast, check-out. Drive to Maasai Mara (≈ 5 h). Hot lunch en-route. Afternoon game drive on arrival. Dinner & overnight at lodge.",
      "activities": ["Game drive"]
    },
    {
      "day": 4,
      "title": "Maasai Mara",
      "description": "Full-day game drives tracking Big-Five; picnic lunch in the plains. Dinner & overnight at lodge.",
      "activities": ["Game drive"]
    },
    {
      "day": 5,
      "title": "Mara → Nairobi",
      "description": "Sunrise game drive 06:30-09:00, breakfast, check-out. Drive back to Nairobi. Drop-off at JKIA or Nairobi hotel by 15:00. End of services.",
      "activities": ["Game drive"]
    }
  ],
  "price": 1980,
  "image": "https://afribay.vercel.app/offer-nakuru-mara.jpg",
  "slug": "5-day-nakuru-mara-safari",
  "metaTitle": "5-Day Lake Nakuru & Maasai Mara Safari | Kenya Lodge Deal",
  "metaDescription": "5-day compact Kenya safari: Lake Nakuru flamingos & Maasai Mara Big-Five, 4×4 game drives, full-board lodges, all-inclusive from Nairobi."
},

// ============================================================
// PACKAGE 4: 5-Day Amboseli + Kilimanjaro Hot Air Balloon Safari
// TARGET GUEST: Bucket-list non-resident traveller
// ACCOMMODATION: Mountainview Superb Safari Tent – Game Package (3 nights)
// ADD-ON: Kilimanjaro Balloon Safaris (KBS) – 1 morning balloon flight
// SEASON USED: Low Season as base; all seasons shown
//
// ── COST BREAKDOWN (per person, 2 pax sharing, Low Season) ──
//
//   Tulia NETT Game Package × 4 nights: $280 × 4 = $1,120 pp
//   KBS Balloon (NETT, Resident/Citizen): $280 pp  ← using resident rate
//   NOTE: If guest is non-resident, use NETT $360 pp (Low Season)
//   Park fees (NETT, non-resident):       $70  × 4 =  $280 pp
//   Transport ($300 ÷ 2 pax):                         $150 pp
//   ─────────────────────────────────────────────────────────
//   TOTAL COST TO YOU (non-resident balloon, Low, 2 pax): $1,810 pp
//
//   RACK sell price (below):                              $2,390 pp
//   ESTIMATED PROFIT (Low Season, 2 pax):                ~$580 pp
//
// ── HIGH SEASON (non-resident balloon, 2 pax) ──
//   NETT: $325×4 + $380 + $70×4 + $150 = $1,980 pp
//   SELL:  $2,590 pp  →  PROFIT: ~$610 pp
//
// ── PEAK SEASON (non-resident balloon, 2 pax) ──
//   NETT: $420×4 + $395 + $70×4 + $150 = $2,425 pp
//   SELL:  $3,090 pp  →  PROFIT: ~$665 pp
//
// ── WITH 4 PAX (Low Season) ──
//   NETT: $1,120 + $360 + $280 + $75 = $1,835 pp
//   (transport cheaper per head as $300÷4=$75)
//   SELL:  $2,390 pp  →  PROFIT: ~$555 pp
//
// KBS BALLOON RACK RATES (for reference, included in sell price):
//   International Adult: $450 Low / $475 High / $495 Peak
//   International Child:  $350 / $375 / $395
//   Resident Adult:       $350 / $375 / $395
//   Resident Child:       $275 / $295 / $325
// ============================================================

{
  id: "amboseli-balloon-5d",
  category: "mid-range",
  title: "5-Day Amboseli Game Safari + Hot Air Balloon over Kilimanjaro",
  description:
    "The definitive Amboseli bucket-list adventure. Four nights at Tulia Amboseli Safari Camp on the full Game Package – shared open-sided trucks, walking safaris and all drinks on safari – culminating in a sunrise hot-air balloon flight with Kilimanjaro Balloon Safaris (KBS). Float above Africa's largest elephant herds as the first light catches Mt. Kilimanjaro's snow-capped summit, then land to a champagne celebration and chef-prepared breakfast. This is the Amboseli experience you'll never forget.",
  duration: "5 Days / 4 Nights",
  groupSize: { min: 2, max: 6 },
  startPoint: "Nairobi",
  endPoint: "Nairobi",
  destinations: ["amboseli"],
  highlights: [
    "4 nights at Tulia Amboseli Safari Camp – Mountainview Superb Tent (Game Package)",
    "Sunrise hot-air balloon flight with Kilimanjaro Balloon Safaris (KBS)",
    "Post-balloon champagne celebration & chef-prepared hot breakfast",
    "Commemorative Flight Ascension Certificate signed by your Captain",
    "Shared 4×4 open-sided safari trucks + walking safari included",
    "Soft drinks & water on every game drive",
    "Spectacular elephant herds with Mt. Kilimanjaro as backdrop",
    "Full-board meals throughout (breakfast, lunch, dinner & in-room water)",
  ],
  includes: [
    "Return road transfer Nairobi ↔ Amboseli in a private 4×4",
    "Professional English-speaking driver/guide",
    "4 nights' accommodation: Mountainview Superb Safari Tent, Tulia Amboseli Safari Camp",
    "All meals – full board (breakfast, lunch, dinner & in-room water)",
    "Shared 4×4 open-sided safari trucks for all game drives",
    "Guided walking safari",
    "Airstrip transfers & Amboseli Park Kimana gate transfers",
    "Soft drinks and water while on safari",
    "1× sunrise hot-air balloon flight with Kilimanjaro Balloon Safaris",
    "Post-balloon champagne celebration & chef's 'made-to-order' hot breakfast",
    "Commemorative Flight Ascension Certificate",
    "Amboseli National Park entrance fees (4 days)",
    "Bottled water in transfer vehicle",
    "Emergency medical-evacuation cover",
  ],
  excludes: [
    "International flights & visas",
    "Tips / gratuities (recommended USD 10 pp/day + USD 20 balloon tip)",
    "Personal travel insurance",
    "Alcoholic beverages (at camp bar)",
    "Optional extras: bush breakfast, sundowner, Maasai village visit",
    "Anything not listed under inclusions",
  ],
  itinerary: [
    {
      day: 1,
      title: "Nairobi → Amboseli",
      description:
        "Depart Nairobi at 07:00, driving south through the Rift Valley to Amboseli (≈ 4 hrs). Arrive for a hot lunch at Tulia Amboseli Safari Camp. Check-in to your Mountainview Superb Safari Tent with stunning Kilimanjaro views. Afternoon open-sided truck game drive with soft drinks on board. Dinner and overnight at camp.",
      activities: ["Game drive"],
    },
    {
      day: 2,
      title: "Amboseli – Full Day Game Drive",
      description:
        "Early morning game drive at golden hour, watching massive elephant herds against the Kilimanjaro backdrop. Full camp breakfast. Guided walking safari mid-morning with your naturalist guide. Afternoon open-sided truck drive through the swamps and open plains. Campfire dinner under African stars.",
      activities: ["Game drive", "Walking safari"],
    },
    {
      day: 3,
      title: "Balloon Morning + Afternoon Game Drive",
      description:
        "Wake at 04:00 for pick-up to the KBS Balloon Camp (≈ 30 min). Safety briefing by your Captain. Float above Amboseli at sunrise, spotting elephants, lions, giraffe and the full Kilimanjaro panorama from the air. Land for a champagne celebration and chef-prepared hot breakfast. Return to Tulia by 09:30. Rest, enjoy your tent and the camp waterhole watching wildlife. Late afternoon game drive. Dinner at camp.",
      activities: ["Hot air balloon", "Game drive"],
    },
    {
      day: 4,
      title: "Amboseli – Deep Wilderness Drive",
      description:
        "Full-day game drive exploring Amboseli's lesser-visited corners – the Enkongo Narok swamp, Observation Hill and the open plains. Picnic lunch in the bush. Optional sundowner at a scenic viewpoint (own cost). Return to camp for farewell dinner.",
      activities: ["Game drive"],
    },
    {
      day: 5,
      title: "Amboseli → Nairobi",
      description:
        "Final sunrise game drive before breakfast and check-out. Depart Amboseli by 09:00 and drive back to Nairobi, arriving at JKIA or your hotel by approximately 14:00. End of services.",
      activities: ["Game drive"],
    },
  ],

  // ── SELL PRICE (what client pays – RACK / non-resident) ───
  price: 2390, // USD per person sharing (Low Season base, non-resident balloon)

  // ── SEASONAL RATES TABLE ──────────────────────────────────
  detailedSeasonalRates: {
    validity: "Valid Jan 2025 – Jan 2026",
    seasons: [
      { name: "LOW",      dates: "Apr 1 – Jun 30" },
      { name: "HIGH",     dates: "Jan 3 – Mar 31, Oct 1 – Dec 19" },
      { name: "OFF-PEAK", dates: "Jul 1 – Jul 15, Sep 16 – Sep 30" },
      { name: "PEAK",     dates: "Jul 16 – Sep 15, Dec 20 – Jan 2" },
    ],
    rates: [
      // Non-resident (international) guests
      { description: "Adult sharing (non-resident)",  low: 2390, high: 2590, offPeak: 2790, peak: 3090 },
      { description: "Single adult (non-resident)",   low: 3200, high: 3480, offPeak: 3760, peak: 4180 },
      { description: "Child (5–11 yrs)",              low: 1090, high: 1190, offPeak: 1290, peak: 1440 },
      // Kenyan citizen / resident rates (balloon cheaper)
      { description: "Adult sharing (resident w/ID)", low: 2320, high: 2510, offPeak: 2700, peak: 2990 },
    ],
    // ── NETT COST COMMENTS (operator eyes only) ───────────────
    // Low season NETT non-resident (2 pax):
    //   Tulia $280×4 + KBS balloon $360 + park $70×4 + transport $150 = $1,810 pp
    //   SELL $2,390 pp | PROFIT ~$580 pp
    //
    // High season NETT non-resident (2 pax):
    //   Tulia $325×4 + KBS $380 + park $70×4 + transport $150 = $1,980 pp
    //   SELL $2,590 pp | PROFIT ~$610 pp
    //
    // Off-peak NETT non-resident (2 pax):
    //   Tulia $360×4 + KBS $380 + park $70×4 + transport $150 = $2,100 pp
    //   SELL $2,790 pp | PROFIT ~$690 pp
    //
    // Peak season NETT non-resident (2 pax):
    //   Tulia $420×4 + KBS $395 + park $70×4 + transport $150 = $2,425 pp
    //   SELL $3,090 pp | PROFIT ~$665 pp
    //
    // Resident Low (2 pax): replace KBS $280 → total $1,730 pp | SELL $2,320 | profit ~$590 pp
    //
    // KBS NETT rates used:
    //   Non-resident adult: Low $360 | High $380 | Peak $395
    //   Resident adult:     Low $280 | High $300 | Peak $315
    parkFees: {
      note: "Amboseli National Park fees (4 days) INCLUDED in price above",
      adultNonResident: 100,  // RACK per day (NETT $70)
      childNonResident: 35,   // RACK per day (NETT $20)
    },
  },

  image: "https://afribay.vercel.app/amboseli.jpg",
  gallery: [
    "https://afribay.vercel.app/tulia-1.jpg",
    "https://afribay.vercel.app/tulia-2.jpg",
    "https://afribay.vercel.app/amboseli-1.jpg",
    "https://afribay.vercel.app/amboseli-2.jpg",
    "https://afribay.vercel.app/amboseli-3.jpg",
    "https://afribay.vercel.app/amboseli-4.jpg",
  ],
  accommodations: ["tulia-amboseli-camp"],
  difficulty: "easy",
  bestTime: "Year-round (Low Season Apr–Jun best value; Jul–Oct highest wildlife density)",
  slug: "5-day-amboseli-balloon-safari",
  metaTitle: "5-Day Amboseli Balloon Safari | Tulia Camp + KBS | Bucket-List Kenya",
  metaDescription:
    "5-day Amboseli safari with a sunrise hot-air balloon over Kilimanjaro. Full Game Package at Tulia Amboseli Camp, walking safaris, champagne breakfast & all park fees included.",
},
// ============================================================
// PACKAGE 2: 4-Day Amboseli All-In Game Package
// TARGET GUEST: Mid-range non-resident traveller wanting more activities
// ACCOMMODATION: Mountainview Superb Safari Tent – Game Package
// SEASON USED: Low Season as base; seasonal variants shown
//
// Game Package includes: breakfast, lunch, dinner, shared 4×4
// open-sided safari trucks, walking safari, airstrip transfers,
// Amboseli Park Kimana gate transfers, soft drinks & water on safari
//
// ── COST BREAKDOWN (per person, 2 pax sharing, Low Season) ──
//
//   Tulia NETT Game Package × 3 nights: $280 × 3 = $840 pp
//   Park fees (NETT, non-resident):      $70  × 3 = $210 pp
//   Transport ($300 ÷ 2 pax):                       $150 pp
//   ─────────────────────────────────────────────────────────
//   TOTAL COST TO YOU (Low, 2 pax):               $1,200 pp
//
//   RACK sell price (below):                       $1,590 pp
//   ESTIMATED PROFIT (Low Season, 2 pax):          ~$390 pp
//
// ── HIGH SEASON (2 pax) ──
//   NETT: $325×3 + $70×3 + $150 = $1,335 pp
//   SELL:  $1,690 pp  →  PROFIT: ~$355 pp
//
// ── PEAK SEASON (2 pax) ──
//   NETT: $420×3 + $70×3 + $150 = $1,620 pp
//   SELL:  $2,050 pp  →  PROFIT: ~$430 pp
//
// ── WITH 4 PAX (Low Season) ──
//   NETT: $840 + $210 + ($300÷4) = $1,125 pp
//   SELL:  $1,590 pp  →  PROFIT: ~$465 pp
// ============================================================

{
  id: "amboseli-game-package-4d",
  category: "mid-range",
  title: "4-Day Amboseli All-In Game Safari",
  description:
    "The ultimate Amboseli experience packed into four days. Stay three nights at Tulia Amboseli Safari Camp on the comprehensive Game Package – shared open-sided safari trucks, walking safaris, airstrip transfers, and all soft drinks on safari are included. Watch elephant herds drift past Kilimanjaro's snow-capped peak while enjoying full-board meals and expert guiding. More activities, more Africa, one smart price.",
  duration: "4 Days / 3 Nights",
  groupSize: { min: 2, max: 6 },
  startPoint: "Nairobi",
  endPoint: "Nairobi",
  destinations: ["amboseli"],
  highlights: [
    "3 nights at Tulia Amboseli Safari Camp – Mountainview Superb Tent (Game Package)",
    "Shared 4×4 open-sided safari trucks included – no extras!",
    "Guided walking safari in the Amboseli conservancy",
    "Soft drinks and water on every game drive",
    "Airstrip & Kimana gate transfers included",
    "Spectacular elephant herds with Mt. Kilimanjaro backdrop",
    "Full-board meals (breakfast, lunch, dinner & in-room water)",
  ],
  includes: [
    "Return road transfer Nairobi ↔ Amboseli in a private 4×4",
    "Professional English-speaking driver/guide",
    "3 nights' accommodation: Mountainview Superb Safari Tent, Tulia Amboseli Safari Camp",
    "All meals – full board (breakfast, lunch, dinner & in-room water)",
    "Shared 4×4 open-sided safari trucks for all game drives",
    "Guided walking safari",
    "Airstrip transfers & Amboseli Park Kimana gate transfers",
    "Soft drinks and water while on safari",
    "Amboseli National Park entrance fees",
    "Bottled water in transfer vehicle",
    "Emergency medical-evacuation cover",
  ],
  excludes: [
    "International flights & visas",
    "Tips / gratuities (recommended USD 10 pp/day)",
    "Personal travel insurance",
    "Alcoholic beverages",
    "Optional extras: bush breakfast ($50 pp), sundowner ($50 pp), Maasai village visit ($30 pp), hot-air balloon (from $360 pp NETT)",
    "Anything not listed under inclusions",
  ],
  itinerary: [
    {
      day: 1,
      title: "Nairobi → Amboseli",
      description:
        "Depart Nairobi at 07:00, driving south through the Rift Valley to Amboseli (≈ 4 hrs). Arrive for a hot lunch at Tulia Amboseli Safari Camp. Check-in to your Mountainview Superb Safari Tent. Afternoon game drive in an open-sided safari truck with soft drinks on board. Return to camp for dinner.",
      activities: ["Game drive"],
    },
    {
      day: 2,
      title: "Full Day Amboseli – Morning & Afternoon Drives",
      description:
        "Early morning game drive at golden hour through Amboseli's iconic swamps and open plains – prime time for large elephant herds in front of Kilimanjaro. Full camp breakfast. Guided walking safari mid-morning with your naturalist guide (weather permitting). Afternoon open-sided truck game drive with soft drinks. Dinner and evening at camp.",
      activities: ["Game drive", "Walking safari"],
    },
    {
      day: 3,
      title: "Full Day Amboseli – Deep Conservation Exploration",
      description:
        "Flexibility day: choose a sunrise game drive, or relax at the camp waterhole watching wildlife come to drink. Afternoon game drive exploring the swamps and open savannah. Sundowner optional (own cost). Campfire dinner under the African stars.",
      activities: ["Game drive"],
    },
    {
      day: 4,
      title: "Amboseli → Nairobi",
      description:
        "Final sunrise game drive before breakfast and check-out. Depart Amboseli by 09:00 and drive back to Nairobi, arriving at JKIA or your hotel by approximately 14:00. End of services.",
      activities: ["Game drive"],
    },
  ],

  // ── SELL PRICE (what client pays – RACK) ──────────────────
  price: 1590, // USD per person sharing (Low Season base price)

  // ── SEASONAL RATES TABLE ──────────────────────────────────
  detailedSeasonalRates: {
    validity: "Valid Jan 2025 – Jan 2026",
    seasons: [
      { name: "LOW",      dates: "Apr 1 – Jun 30" },
      { name: "HIGH",     dates: "Jan 3 – Mar 31, Oct 1 – Dec 19" },
      { name: "OFF-PEAK", dates: "Jul 1 – Jul 15, Sep 16 – Sep 30" },
      { name: "PEAK",     dates: "Jul 16 – Sep 15, Dec 20 – Jan 2" },
    ],
    rates: [
      { description: "Adult sharing",     low: 1590, high: 1690, offPeak: 1890, peak: 2050 },
      { description: "Single adult",      low: 2140, high: 2280, offPeak: 2580, peak: 2830 },
      { description: "Child (5–11 yrs)",  low: 730,  high: 790,  offPeak: 890,  peak: 990  },
    ],
    // ── NETT COST COMMENTS (operator eyes only) ───────────────
    // Low season NETT (2 pax):  $280×3 + $70×3 + $150 = $1,200 pp | profit ~$390 pp
    // High season NETT (2 pax): $325×3 + $70×3 + $150 = $1,335 pp | profit ~$355 pp
    // Off-peak NETT (2 pax):    $360×3 + $70×3 + $150 = $1,380 pp | profit ~$510 pp
    // Peak season NETT (2 pax): $420×3 + $70×3 + $150 = $1,620 pp | profit ~$430 pp
    // 4 pax Low season NETT:    $840 + $210 + $75 = $1,125 pp     | profit ~$465 pp
    parkFees: {
      note: "Amboseli National Park fees INCLUDED in price above",
      adultNonResident: 100,  // RACK (NETT $70)
      childNonResident: 35,   // RACK (NETT $20)
    },
  },

  image: "https://afribay.vercel.app/amboseli-2.jpg",
  gallery: [
    "https://afribay.vercel.app/tulia-1.jpg",
    "https://afribay.vercel.app/tulia-2.jpg",
    "https://afribay.vercel.app/tulia-3.jpg",
    "https://afribay.vercel.app/amboseli-1.jpg",
    "https://afribay.vercel.app/amboseli-2.jpg",
    "https://afribay.vercel.app/amboseli-3.jpg",
  ],
  accommodations: ["tulia-amboseli-camp"],
  difficulty: "easy",
  bestTime: "Year-round (Apr–Jun for best rates; Jul–Oct for wildlife density)",
  slug: "4-day-amboseli-game-package",
  metaTitle: "4-Day Amboseli All-In Game Safari | Tulia Camp | Game Package",
  metaDescription:
    "4-day Amboseli safari at Tulia Amboseli Safari Camp on the full Game Package. Open-sided trucks, walking safari, soft drinks, full board & park fees all included.",
},
// ============================================================
// PACKAGE 3: 3-Day Amboseli Deluxe Plunge Pool Escape
// TARGET GUEST: Couple / honeymooners wanting a splash of luxury
//               at a still-accessible price point
// ACCOMMODATION: Mountainview Deluxe Safari Tent w/Private Plunge Pool
//               – Full Board
// SEASON USED: Low Season as cheapest entry; all seasons shown
//
// ── COST BREAKDOWN (per person, 2 pax sharing, Low Season) ──
//
//   Tulia NETT Deluxe Full Board × 2 nights: $200 × 2 = $400 pp
//   Park fees (NETT, non-resident):            $70  × 2 = $140 pp
//   Transport ($300 ÷ 2 pax):                             $150 pp
//   ─────────────────────────────────────────────────────────────
//   TOTAL COST TO YOU (Low, 2 pax):                       $690 pp
//
//   RACK sell price (below):                               $940 pp
//   ESTIMATED PROFIT (Low Season, 2 pax):                ~$250 pp
//
// ── HIGH SEASON (2 pax) ──
//   NETT: $230×2 + $70×2 + $150 = $760 pp
//   SELL:  $1,010 pp  →  PROFIT: ~$250 pp
//
// ── PEAK SEASON (2 pax) ──
//   NETT: $320×2 + $70×2 + $150 = $990 pp
//   SELL:  $1,290 pp  →  PROFIT: ~$300 pp
//
// ── WITH 4 PAX (Low Season) ──
//   NETT: $400 + $140 + ($300÷4) = $615 pp
//   SELL:  $940 pp  →  PROFIT: ~$325 pp
//
// HONEYMOON ADD-ON (optional, quoted separately):
//   Honeymoon tent supplement NETT: $50 pp/night (3-season)
//   You can sell at $75 pp/night (RACK) → profit $25 pp/night
// ============================================================

{
  id: "amboseli-deluxe-plunge-pool-3d",
  category: "offer",
  title: "3-Day Amboseli Deluxe Plunge Pool Retreat",
  description:
    "Elevate your Amboseli experience with a private plunge pool and panoramic Kilimanjaro views – without the luxury price tag. Two nights in a Mountainview Deluxe Safari Tent at Tulia Amboseli Safari Camp means your own pool deck, double sinks, rainfall shower, and front-row seats to elephant herds drifting past Africa's highest mountain. Full-board meals, game drives and all park fees included. Perfect for couples and honeymooners seeking a special escape.",
  duration: "3 Days / 2 Nights",
  groupSize: { min: 2, max: 4 },
  startPoint: "Nairobi",
  endPoint: "Nairobi",
  destinations: ["amboseli"],
  highlights: [
    "2 nights in a Mountainview Deluxe Tent with your own private plunge pool",
    "Relax in your pool while watching elephants with Kilimanjaro as backdrop",
    "Morning & afternoon game drives in Amboseli National Park",
    "Full-board meals – breakfast, lunch, dinner & in-room water",
    "Return road transfers from Nairobi",
    "All Amboseli National Park entrance fees included",
    "Optional honeymoon supplement available (room décor, flowers & wine)",
  ],
  includes: [
    "Return road transfer Nairobi ↔ Amboseli in a private 4×4",
    "Professional English-speaking driver/guide",
    "2 nights' accommodation: Mountainview Deluxe Safari Tent w/Private Plunge Pool, Tulia Amboseli Safari Camp",
    "All meals – full board (breakfast, lunch, dinner & in-room water)",
    "Morning & afternoon game drives each day",
    "Amboseli National Park entrance fees",
    "Bottled water in vehicle",
    "Emergency medical-evacuation cover",
  ],
  excludes: [
    "International flights & visas",
    "Tips / gratuities (recommended USD 10 pp/day)",
    "Personal travel insurance",
    "Alcoholic beverages",
    "Honeymoon supplement (optional, request at booking – $75 pp/night)",
    "Optional extras: bush breakfast, sundowner, Maasai village visit, hot-air balloon",
    "Anything not listed under inclusions",
  ],
  itinerary: [
    {
      day: 1,
      title: "Nairobi → Amboseli",
      description:
        "Depart Nairobi at 07:00, driving south to Amboseli (≈ 4 hrs). Arrive for lunch at Tulia Amboseli Safari Camp and check-in to your Deluxe Tent – step onto your private deck and dip in your plunge pool for that first unforgettable view of Kilimanjaro. Afternoon game drive through Amboseli's elephant-rich plains. Return to camp for dinner.",
      activities: ["Game drive"],
    },
    {
      day: 2,
      title: "Full Day Amboseli",
      description:
        "Early morning game drive at golden hour, the perfect light for Kilimanjaro photographs with the elephant herds. Return for a leisurely breakfast. The afternoon is yours – swim, relax on your private deck, or join an optional walking safari or Maasai village visit (own cost). Sunset game drive, then dinner under the stars.",
      activities: ["Game drive"],
    },
    {
      day: 3,
      title: "Amboseli → Nairobi",
      description:
        "Final sunrise game drive before breakfast and check-out. Depart Amboseli by 09:00 and return to Nairobi, arriving at JKIA or your hotel by approximately 14:00. End of services.",
      activities: ["Game drive"],
    },
  ],

  // ── SELL PRICE (what client pays – RACK) ──────────────────
  price: 940, // USD per person sharing (Low Season base)

  // ── SEASONAL RATES TABLE ──────────────────────────────────
  detailedSeasonalRates: {
    validity: "Valid Jan 2025 – Jan 2026",
    seasons: [
      { name: "LOW",      dates: "Apr 1 – Jun 30" },
      { name: "HIGH",     dates: "Jan 3 – Mar 31, Oct 1 – Dec 19" },
      { name: "OFF-PEAK", dates: "Jul 1 – Jul 15, Sep 16 – Sep 30" },
      { name: "PEAK",     dates: "Jul 16 – Sep 15, Dec 20 – Jan 2" },
    ],
    rates: [
      { description: "Adult sharing (Deluxe Plunge Pool)",  low: 940,  high: 1010, offPeak: 1170, peak: 1290 },
      { description: "Single adult",                        low: 1250, high: 1360, offPeak: 1590, peak: 1780 },
      { description: "Child (5–11 yrs)",                    low: 420,  high: 460,  offPeak: 540,  peak: 600  },
    ],
    // ── NETT COST COMMENTS (operator eyes only) ───────────────
    // Low season NETT (2 pax):  $200×2 + $70×2 + $150 = $690 pp  | profit ~$250 pp
    // High season NETT (2 pax): $230×2 + $70×2 + $150 = $760 pp  | profit ~$250 pp
    // Off-peak NETT (2 pax):    $265×2 + $70×2 + $150 = $880 pp  | profit ~$290 pp
    // Peak season NETT (2 pax): $320×2 + $70×2 + $150 = $990 pp  | profit ~$300 pp
    // 4 pax Low season NETT:    $400 + $140 + $75 = $615 pp       | profit ~$325 pp
    // Honeymoon add-on NETT $50/night RACK $75/night → $25 profit/night pp
    parkFees: {
      note: "Amboseli National Park fees INCLUDED in price above",
      adultNonResident: 100,  // RACK (NETT $70)
      childNonResident: 35,   // RACK (NETT $20)
    },
  },

  image: "https://afribay.vercel.app/tulia.jpg",
  gallery: [
    "https://afribay.vercel.app/tulia-4.jpg",
    "https://afribay.vercel.app/tulia-5.jpg",
    "https://afribay.vercel.app/tulia-6.jpg",
    "https://afribay.vercel.app/amboseli-1.jpg",
    "https://afribay.vercel.app/amboseli-4.jpg",
    "https://afribay.vercel.app/amboseli-5.jpg",
  ],
  accommodations: ["tulia-amboseli-camp"],
  difficulty: "easy",
  bestTime: "Year-round – Apr–Jun best value; Dec–Jan for Kilimanjaro clarity",
  slug: "3-day-amboseli-deluxe-plunge-pool",
  metaTitle: "3-Day Amboseli Deluxe Plunge Pool Retreat | Tulia Camp | Couples",
  metaDescription:
    "Luxury 3-day Amboseli safari in a private plunge-pool tent at Tulia Amboseli Safari Camp. Kilimanjaro views, game drives, full board & park fees – perfect for couples.",
},
// ============================================================
// PACKAGE 1: 3-Day Amboseli Budget Escape
// TARGET GUEST: Budget-conscious non-resident traveller
// ACCOMMODATION: Mountainview Superb Safari Tent – Full Board
// SEASON USED: Low Season (Apr 1 – Jun 30) – cheapest entry point
//
// ── COST BREAKDOWN (per person, 2 pax sharing, Low Season) ──
//
//   Tulia NETT room rate × 2 nights:    $160 × 2 = $320 pp
//   Park fees (NETT, non-resident):      $70  × 2 = $140 pp   ← $20 child
//   Transport ($300 ÷ 2 pax):                       $150 pp
//   ─────────────────────────────────────────────────────────
//   TOTAL COST TO YOU (Low Season, 2 pax):          $610 pp
//
//   RACK sell price (below):                         $790 pp
//   ─────────────────────────────────────────────────────────
//   ESTIMATED PROFIT (Low Season, 2 pax):           ~$180 pp
//
// ── COST BREAKDOWN (per person, 2 pax sharing, High Season) ──
//   Tulia NETT room rate × 2 nights:    $170 × 2 = $340 pp
//   Park fees (NETT):                    $70  × 2 = $140 pp
//   Transport ($300 ÷ 2 pax):                       $150 pp
//   ─────────────────────────────────────────────────────────
//   TOTAL COST (High Season, 2 pax):                $630 pp
//   RACK sell price:                                 $820 pp
//   ESTIMATED PROFIT (High Season, 2 pax):          ~$190 pp
//
// ── WITH 4 PAX (Low Season) ──
//   NETT cost: $160×2 + $70×2 + ($300÷4) = $540 pp
//   SELL:      $790 pp  →  PROFIT: ~$250 pp
// ============================================================

{
  id: "amboseli-budget-escape-3d",
  category: "offer",
  title: "3-Day Amboseli Budget Escape",
  description:
    "An affordable introduction to Kenya's iconic Amboseli ecosystem. Spend two nights at the award-winning Tulia Amboseli Safari Camp in a Mountainview Superb Safari Tent, with Kilimanjaro views from every angle, daily game drives, all meals included, and the magic of Africa's biggest elephant herds – at a price that won't break the bank.",
  duration: "3 Days / 2 Nights",
  groupSize: { min: 2, max: 6 },
  startPoint: "Nairobi",
  endPoint: "Nairobi",
  destinations: ["amboseli"],
  highlights: [
    "2 nights at Tulia Amboseli Safari Camp – Mountainview Superb Safari Tent",
    "Daily morning & afternoon game drives in Amboseli National Park",
    "Unobstructed views of Mt. Kilimanjaro from your tent and the camp",
    "Full-board meals (breakfast, lunch & dinner) plus in-room water",
    "Return road transfers from Nairobi (≈ 4 hrs each way)",
    "All Amboseli National Park entrance fees included",
  ],
  includes: [
    "Return road transfer Nairobi ↔ Amboseli in a private 4×4",
    "Professional English-speaking driver/guide",
    "2 nights' accommodation: Mountainview Superb Safari Tent, Tulia Amboseli Safari Camp",
    "All meals – full board (breakfast, lunch, dinner & in-room water)",
    "Morning & afternoon game drives each day",
    "Amboseli National Park entrance fees",
    "Bottled water in vehicle",
    "Emergency medical-evacuation cover",
  ],
  excludes: [
    "International flights & visas",
    "Tips / gratuities (recommended USD 10 pp/day)",
    "Personal travel insurance",
    "Optional extras: bush breakfast, sundowner, Maasai village visit, hot-air balloon",
    "Anything not listed under inclusions",
  ],
  itinerary: [
    {
      day: 1,
      title: "Nairobi → Amboseli",
      description:
        "Depart Nairobi at 07:00, driving south through the Rift Valley en route to Amboseli (≈ 4 hrs). Arrive for a hot lunch at Tulia Amboseli Safari Camp. Check-in to your Mountainview Superb Safari Tent with that legendary Kilimanjaro view. Afternoon game drive spotting elephant herds, zebra, wildebeest and more. Return to camp for dinner and your first African night sky.",
      activities: ["Game drive"],
    },
    {
      day: 2,
      title: "Full Day Amboseli",
      description:
        "Rise before dawn for an early-morning game drive in the golden light – the best time to catch large elephant herds with Kilimanjaro as a backdrop. Return for a leisurely camp breakfast. Optional afternoon walking safari or Maasai village visit (extra cost). Second game drive at sunset. Dinner and overnight at Tulia.",
      activities: ["Game drive"],
    },
    {
      day: 3,
      title: "Amboseli → Nairobi",
      description:
        "Final sunrise game drive before breakfast and check-out. Depart Amboseli by 09:00 and drive back to Nairobi, arriving at JKIA or your hotel by approximately 14:00. End of services.",
      activities: ["Game drive"],
    },
  ],

  // ── SELL PRICE (what the client pays – RACK) ──────────────
  price: 790, // USD per person sharing (Low / High season blended)

  // ── SEASONAL RATES TABLE (what client sees on website) ────
  detailedSeasonalRates: {
    validity: "Valid Jan 2025 – Jan 2026",
    seasons: [
      { name: "LOW",      dates: "Apr 1 – Jun 30" },
      { name: "HIGH",     dates: "Jan 3 – Mar 31, Oct 1 – Dec 19" },
      { name: "OFF-PEAK", dates: "Jul 1 – Jul 15, Sep 16 – Sep 30" },
      { name: "PEAK",     dates: "Jul 16 – Sep 15, Dec 20 – Jan 2" },
    ],
    rates: [
      // Per person sharing (2+ pax)
      { description: "Adult sharing",       low: 790,  high: 820,  offPeak: 890,  peak: 990  },
      { description: "Single adult",        low: 1060, high: 1100, offPeak: 1200, peak: 1360 },
      { description: "Child (5–11 yrs)",    low: 350,  high: 370,  offPeak: 410,  peak: 470  },
    ],
    // ── NETT COST COMMENTS (hidden from client – for operator use) ──
    // Low season NETT (2 pax): room $320 + park $140 + transport $150 = $610 pp | profit ~$180 pp
    // High season NETT (2 pax): room $340 + park $140 + transport $150 = $630 pp | profit ~$190 pp
    // Off-peak NETT (2 pax):   room $390 + park $140 + transport $150 = $680 pp | profit ~$210 pp
    // Peak season NETT (2 pax): room $460 + park $140 + transport $150 = $750 pp | profit ~$240 pp
    parkFees: {
      note: "Amboseli National Park fees INCLUDED in price above",
      adultNonResident: 100,  // USD RACK (NETT $70)
      childNonResident: 35,   // USD RACK (NETT $20)
    },
  },

  image: "https://afribay.vercel.app/amboseli.jpg",
  gallery: [
    "https://afribay.vercel.app/tulia-1.jpg",
    "https://afribay.vercel.app/tulia-2.jpg",
    "https://afribay.vercel.app/amboseli-1.jpg",
    "https://afribay.vercel.app/amboseli-2.jpg",
    "https://afribay.vercel.app/amboseli-3.jpg",
    "https://afribay.vercel.app/tulia-3.jpg",
  ],
  accommodations: ["tulia-amboseli-camp"],
  difficulty: "easy",
  bestTime: "Year-round (Low Season Apr–Jun offers best value)",
  slug: "3-day-amboseli-budget-escape",
  metaTitle: "3-Day Amboseli Budget Safari | Tulia Camp | Kilimanjaro Views",
  metaDescription:
    "Affordable 3-day Amboseli safari at Tulia Amboseli Safari Camp. Elephant herds, Kilimanjaro views, full-board meals & game drives – all-inclusive from Nairobi.",
},
{
  id: "offer-mara-amboseli-5day",
  category: "mid-range",
  title: "5-Day Maasai Mara & Amboseli Safari Special",
  description:
    "Big-five packed adventure that combines the world-famous Maasai Mara with the postcard backdrop of Amboseli’s elephants beneath Mt. Kilimanjaro. 4 nights’ mid-range lodge stay, daily game drives, transport and full-board meals included at a limited-time promotional price.",
  duration: "5 Days / 4 Nights",
  groupSize: { min: 2, max: 6 },
  startPoint: "Nairobi",
  endPoint: "Nairobi",
  destinations: ["masai-mara", "amboseli"],
  highlights: [
    "Daily game drives in Maasai Mara with high Big-Five odds",
    "Sunrise & sunset game drives in Amboseli with Kilimanjaro views",
    "Comfortable mid-range lodges with en-suite bathrooms & swimming pools",
    "All transport in a private 4×4 safari land-cruiser with pop-up roof",
    "Professional English-speaking driver/guide",
  ],
  /*  <-- renamed to match component  */
  includes: [
    "4×4 safari land-cruiser ",
    "Services of a professional English-speaking safari guide",
    "4 nights’ accommodation: 2 nights in Mara & 2 nights in Amboseli",
    "All meals full board",
    "Bottled water for the safari",
    "Airport / hotel pick-up & drop-off in Nairobi",
    "Emergency medical evacuation ",
  ],
  excludes: [
    "International flights & visas",
    "Tips / gratuities (recommended USD 10 per person per day)",
    "Personal travel insurance",
    "Extra meals & drinks not specified",
    "Anything not mentioned under inclusions",
  ],
  itinerary: [
    {
      day: 1,
      title: "Nairobi → Maasai Mara",
      description:
        "Early Pick-up from your Nairobi hotel / JKIA. Drive down the Great Rift Valley to Maasai Mara (≈ 5 h). En-route stop at the Rift-valley viewpoint for photos. Hot lunch in Narok town. Afternoon game drive upon arrival. Dinner & overnight at your lodge.",
      activities: ["Game drive"],
    },
    {
      day: 2,
      title: "Full Day Maasai Mara",
      description:
        "Early breakfast, then depart for a full-day game drive on Mara’s rolling plains. Track the Big-Five and, seasonally, the Great Migration herds. Return to lodge for dinner & overnight.",
      activities: ["Game drive"],
    },
    {
      day: 3,
      title: "Maasai Mara → Amboseli",
      description:
        "Sunrise game drive 06:30-09:00, return for breakfast. Depart Mara and drive back to Nairobi (lunch at Carnivore / local restaurant, own cost). Continue south-east to Amboseli, arriving early evening. Check-in at your lodge for dinner & overnight.",
      activities: ["Game drive"],
    },
    {
      day: 4,
      title: "Full Day Amboseli",
      description:
        "Morning & afternoon game drives in Amboseli, famous for its large elephant herds and unbeatable Kilimanjaro panoramas. All meals and overnight at your lodge.",
      activities: ["Game drive"],
    },
    {
      day: 5,
      title: "Amboseli → Nairobi",
      description:
        "Final sunrise game drive, breakfast, then depart for Nairobi. Hot lunch en-route (own cost). Drop-off at your hotel or JKIA by 16:00. End of services.",
      activities: ["Game drive"],
    },
  ],
  price: 2200,
  image: "https://afribay.vercel.app/offer-mara-amboseli.jpg",
  slug: "5-day-mara-amboseli-offer",
  metaTitle: "5-Day Mara-Amboseli Offer | Kenya Safari Deal",
  metaDescription:
    "Limited-time 5-day Maasai Mara & Amboseli safari package from Nairobi. Big-five game drives, Kilimanjaro views, mid-range lodges, all-inclusive.",
},
{
  "id": "offer-mara-mombasa-6day",
  "category": "mid-range",
  "title": "6-Day Maasai Mara Safari & Mombasa Beach Escape",
  "description": "The perfect bush-to-beach blend: two thrilling nights in the world-famous Maasai Mara followed by three relaxing nights on the white sands of Mombasa’s north-coast beaches. Includes daily game drives, flights between Nairobi and Mombasa, all transfers, mid-range lodge & beach-resort accommodation, full-board meals and a host of beach activities—all at one limited-time promotional price.",
  "duration": "6 Days / 5 Nights",
  "groupSize": { "min": 2, "max": 6 },
  "startPoint": "Nairobi",
  "endPoint": "Nairobi",
  "destinations": ["masai-mara", "mombasa"],
  "highlights": [
    "Daily Big-Five game drives in Maasai Mara with pop-top 4×4",
    "Sundowner beach walks & turquoise Indian-Ocean swims",
    "Return flights Nairobi ↔ Mombasa – no long drives",
    "Comfortable mid-range safari lodge & 4-star beach resort",
    "All transfers, park fees, full-board meals & bottled water included"
  ],
  "includes": [
    "Private 4×4 safari land-cruiser with pop-up roof in Mara",
    "Professional English-speaking driver/guide",
    "2 nights’ mid-range lodge in Maasai Mara – full board",
    "3 nights’ 4-star beach resort in Mombasa – full board",
    "Return flights Nairobi–Mombasa–Nairobi (15 kg checked bag + 7 kg hand luggage)",
    "All airport / hotel / airstrip road transfers in Nairobi & Mombasa",
    "All meals as specified (full board)",
    "Bottled water on safari & in vehicle",
    "Emergency medical-evacuation cover",
    "24-hour on-safari support"
  ],
  "excludes": [
    "International flights & visas",
    "Tips / gratuities (recommended USD 10 per person per day)",
    "Personal travel insurance",
    "Beach extras (diving, kite-surf, snorkelling, spa etc.)",
    "Drinks at beach resort",
    "Anything not mentioned under inclusions"
  ],
  "itinerary": [
    {
      "day": 1,
      "title": "Nairobi → Maasai Mara",
      "description": "07:00 pick-up from Nairobi hotel/JKIA. Drive down the Great Rift Valley to Maasai Mara (≈ 5 h). Photo stop at Rift-valley viewpoint. Hot lunch in Narok. Afternoon game drive on arrival. Dinner & overnight at lodge.",
      "activities": ["Game drive"]
    },
    {
      "day": 2,
      "title": "Full Day Maasai Mara",
      "description": "Early breakfast, then full-day game drive on the Mara plains tracking Big-Five & (seasonally) the Great Migration. Picnic lunch under an acacia. Return to lodge for dinner & overnight.",
      "activities": ["Game drive"]
    },
    {
      "day": 3,
      "title": "Mara → Nairobi → Fly to Mombasa",
      "description": "Sunrise game drive 06:30-09:00, breakfast, check-out. Drive back to Nairobi (lunch on own cost at Carnivore/local restaurant). Transfer to Wilson Airport for 16:00 flight to Mombasa. 1-hour flight. Meet & transfer to beach resort for dinner & overnight.",
      "activities": ["Game drive", "Flight"]
    },
    {
      "day": 4,
      "title": "Mombasa Beach – At Leisure",
      "description": "Full day to unwind on Mombasa’s powder-white sand. Optional snorkelling, kite-surfing or glass-bottom boat trip (book & pay locally). All meals & overnight at resort.",
      "activities": ["Beach leisure"]
    },
    {
      "day": 5,
      "title": "Mombasa Beach – At Leisure",
      "description": "Another relaxed day. Optional excursion to Fort Jesus, Old Town or Haller Park (extra cost). Farewell beach dinner. Overnight at resort.",
      "activities": ["Beach leisure"]
    },
    {
      "day": 6,
      "title": "Mombasa → Fly to Nairobi",
      "description": "Breakfast, check-out. Transfer to Moi International Airport for mid-morning flight to Wilson Airport, Nairobi. Meet driver for drop-off at JKIA or your Nairobi hotel by 13:00. End of services.",
      "activities": ["Flight"]
    }
  ],
  "price": 2750,
  "image": "https://afribay.vercel.app/offer-mara-mombasa.jpg",
  "slug": "6-day-mara-mombasa-offer",
  "metaTitle": "6-Day Mara Safari + Mombasa Beach Offer | Kenya Bush-to-Beach Deal",
  "metaDescription": "Limited-time 6-day Maasai Mara & Mombasa Beach package: Big-five safari, flights to coast, 4-star beach resort, all-inclusive from Nairobi."
},

{
  "id": "offer-nakuru-mara-5day",
  "category": "mid-range",
  "title": "5-Day Lake Nakuru & Maasai Mara Safari",
  "description": "Compact wildlife safari: two nights on the flamingo-lined shores of Lake Nakuru followed by two action-packed nights in the world-famous Maasai Mara. Includes daily game drives, all road transfers, comfortable mid-range lodge accommodation, full-board meals and 24-hour support—all at one promotional price.",
  "duration": "5 Days / 4 Nights",
  "groupSize": { "min": 2, "max": 6 },
  "startPoint": "Nairobi",
  "endPoint": "Nairobi",
  "destinations": ["lake-nakuru", "masai-mara"],
  "highlights": [
    "Daily game drives in Lake Nakuru & Maasai Mara",
    "Pop-top 4×4 land-cruiser throughout",
    "Comfortable mid-range lodges – full board",
    "Transfers & bottled water included",
    "24-hour on-safari support"
  ],
  "includes": [
    "Private 4×4 safari land-cruiser with pop-up roof",
    "Professional English-speaking driver/guide",
    "2 nights’ mid-range lodge at Lake Nakuru – full board",
    "2 nights’ mid-range lodge in Maasai Mara – full board",
    "All road transfers Nairobi–Nakuru–Mara–Nairobi",
    "All meals as specified (full board)",
    "Bottled water in vehicle",
    "Emergency medical-evacuation cover",
    "24-hour on-safari support"
  ],
  "excludes": [
    "International flights & visas",
    "Tips / gratuities (recommended USD 10 per person per day)",
    "Personal travel insurance",
    "Anything not mentioned under inclusions"
  ],
  "itinerary": [
    {
      "day": 1,
      "title": "Nairobi → Lake Nakuru",
      "description": "07:00 pick-up from Nairobi hotel/JKIA. Drive to Lake Nakuru (≈ 3 h). Check-in and lunch at lodge. Afternoon game drive. Dinner & overnight.",
      "activities": ["Game drive"]
    },
    {
      "day": 2,
      "title": "Lake Nakuru",
      "description": "Morning & afternoon game drives; rhino & flamingo sightings. All meals & overnight at lodge.",
      "activities": ["Game drive"]
    },
    {
      "day": 3,
      "title": "Nakuru → Maasai Mara",
      "description": "Breakfast, check-out. Drive to Maasai Mara (≈ 5 h). Hot lunch en-route. Afternoon game drive on arrival. Dinner & overnight at lodge.",
      "activities": ["Game drive"]
    },
    {
      "day": 4,
      "title": "Maasai Mara",
      "description": "Full-day game drives tracking Big-Five; picnic lunch in the plains. Dinner & overnight at lodge.",
      "activities": ["Game drive"]
    },
    {
      "day": 5,
      "title": "Mara → Nairobi",
      "description": "Sunrise game drive 06:30-09:00, breakfast, check-out. Drive back to Nairobi. Drop-off at JKIA or Nairobi hotel by 15:00. End of services.",
      "activities": ["Game drive"]
    }
  ],
  "price": 2300,
  "image": "https://afribay.vercel.app/offer-nakuru-mara.jpg",
  "slug": "5-day-nakuru-mara-safari",
  "metaTitle": "5-Day Lake Nakuru & Maasai Mara Safari | Kenya Lodge Deal",
  "metaDescription": "5-day compact Kenya safari: Lake Nakuru flamingos & Maasai Mara Big-Five, 4×4 game drives, full-board lodges, all-inclusive from Nairobi."
},
]

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    country: "United States",
    rating: 5,
    comment: "Absolutely incredible experience! The Great Migration was breathtaking and our guide was exceptional.",
    packageId: "great-migration-safari",
  },
  {
    id: "2",
    name: "Marco Rossi",
    country: "Italy",
    rating: 5,
    comment:
      "Perfect combination of adventure and comfort. The accommodations were luxurious and the wildlife viewing was amazing.",
    packageId: "kilimanjaro-amboseli-safari",
  },
  {
    id: "3",
    name: "Emma Thompson",
    country: "United Kingdom",
    rating: 5,
    comment: "The cultural experience with the Samburu people was life-changing. Highly recommend Afribay Adventures!",
    packageId: "samburu-cultural-safari",
  },
  {
    id: "4",
    name: "Hans Mueller",
    country: "Germany",
    rating: 4,
    comment: "Great organization and professional guides. The Tsavo adventure was exactly what we were looking for.",
    packageId: "tsavo-adventure-safari",
  },
  {
    id: "5",
    name: "Sophie Dubois",
    country: "France",
    rating: 5,
    comment: "The beach and safari combination was perfect for our honeymoon. Unforgettable memories!",
    packageId: "beach-safari-combo",
  },
  {
    id: "6",
    name: "James Wilson",
    country: "Australia",
    rating: 5,
    comment: "The flamingo spectacle at Lake Nakuru was incredible. Professional service throughout.",
    packageId: "flamingo-lakes-safari",
  },
]

export const countryCodes: CountryCode[] = [
  { code: "AF", name: "Afghanistan", dialCode: "+93", flag: "🇦🇫" },
  { code: "AX", name: "Åland Islands", dialCode: "+358", flag: "🇦🇽" },
  { code: "AL", name: "Albania", dialCode: "+355", flag: "🇦🇱" },
  { code: "DZ", name: "Algeria", dialCode: "+213", flag: "🇩🇿" },
  { code: "AS", name: "American Samoa", dialCode: "+1684", flag: "🇦🇸" },
  { code: "AD", name: "Andorra", dialCode: "+376", flag: "🇦🇩" },
  { code: "AO", name: "Angola", dialCode: "+244", flag: "🇦🇴" },
  { code: "AI", name: "Anguilla", dialCode: "+1264", flag: "🇦🇮" },
  { code: "AQ", name: "Antarctica", dialCode: "+672", flag: "🇦🇶" },
  { code: "AG", name: "Antigua and Barbuda", dialCode: "+1268", flag: "🇦🇬" },
  { code: "AR", name: "Argentina", dialCode: "+54", flag: "🇦🇷" },
  { code: "AM", name: "Armenia", dialCode: "+374", flag: "🇦🇲" },
  { code: "AW", name: "Aruba", dialCode: "+297", flag: "🇦🇼" },
  { code: "AU", name: "Australia", dialCode: "+61", flag: "🇦🇺" },
  { code: "AT", name: "Austria", dialCode: "+43", flag: "🇦🇹" },
  { code: "AZ", name: "Azerbaijan", dialCode: "+994", flag: "🇦🇿" },
  { code: "BS", name: "Bahamas", dialCode: "+1242", flag: "🇧🇸" },
  { code: "BH", name: "Bahrain", dialCode: "+973", flag: "🇧🇭" },
  { code: "BD", name: "Bangladesh", dialCode: "+880", flag: "🇧🇩" },
  { code: "BB", name: "Barbados", dialCode: "+1246", flag: "🇧🇧" },
  { code: "BY", name: "Belarus", dialCode: "+375", flag: "🇧🇾" },
  { code: "BE", name: "Belgium", dialCode: "+32", flag: "🇧🇪" },
  { code: "BZ", name: "Belize", dialCode: "+501", flag: "🇧🇿" },
  { code: "BJ", name: "Benin", dialCode: "+229", flag: "🇧🇯" },
  { code: "BM", name: "Bermuda", dialCode: "+1441", flag: "🇧🇲" },
  { code: "BT", name: "Bhutan", dialCode: "+975", flag: "🇧🇹" },
  { code: "BO", name: "Bolivia", dialCode: "+591", flag: "🇧🇴" },
  { code: "BA", name: "Bosnia and Herzegovina", dialCode: "+387", flag: "🇧🇦" },
  { code: "BW", name: "Botswana", dialCode: "+267", flag: "🇧🇼" },
  { code: "BR", name: "Brazil", dialCode: "+55", flag: "🇧🇷" },
  { code: "IO", name: "British Indian Ocean Territory", dialCode: "+246", flag: "🇮🇴" },
  { code: "VG", name: "British Virgin Islands", dialCode: "+1284", flag: "🇻🇬" },
  { code: "BN", name: "Brunei", dialCode: "+673", flag: "🇧🇳" },
  { code: "BG", name: "Bulgaria", dialCode: "+359", flag: "🇧🇬" },
  { code: "BF", name: "Burkina Faso", dialCode: "+226", flag: "🇧🇫" },
  { code: "BI", name: "Burundi", dialCode: "+257", flag: "🇧🇮" },
  { code: "KH", name: "Cambodia", dialCode: "+855", flag: "🇰🇭" },
  { code: "CM", name: "Cameroon", dialCode: "+237", flag: "🇨🇲" },
  { code: "CA", name: "Canada", dialCode: "+1", flag: "🇨🇦" },
  { code: "CV", name: "Cape Verde", dialCode: "+238", flag: "🇨🇻" },
  { code: "BQ", name: "Caribbean Netherlands", dialCode: "+599", flag: "🇧🇶" },
  { code: "KY", name: "Cayman Islands", dialCode: "+1345", flag: "🇰🇾" },
  { code: "CF", name: "Central African Republic", dialCode: "+236", flag: "🇨🇫" },
  { code: "TD", name: "Chad", dialCode: "+235", flag: "🇹🇩" },
  { code: "CL", name: "Chile", dialCode: "+56", flag: "🇨🇱" },
  { code: "CN", name: "China", dialCode: "+86", flag: "🇨🇳" },
  { code: "CX", name: "Christmas Island", dialCode: "+61", flag: "🇨🇽" },
  { code: "CC", name: "Cocos (Keeling) Islands", dialCode: "+61", flag: "🇨🇨" },
  { code: "CO", name: "Colombia", dialCode: "+57", flag: "🇨🇴" },
  { code: "KM", name: "Comoros", dialCode: "+269", flag: "🇰🇲" },
  { code: "CG", name: "Congo", dialCode: "+242", flag: "🇨🇬" },
  { code: "CD", name: "Congo (DRC)", dialCode: "+243", flag: "🇨🇩" },
  { code: "CK", name: "Cook Islands", dialCode: "+682", flag: "🇨🇰" },
  { code: "CR", name: "Costa Rica", dialCode: "+506", flag: "🇨🇷" },
  { code: "CI", name: "Côte d'Ivoire", dialCode: "+225", flag: "🇨🇮" },
  { code: "HR", name: "Croatia", dialCode: "+385", flag: "🇭🇷" },
  { code: "CU", name: "Cuba", dialCode: "+53", flag: "🇨🇺" },
  { code: "CW", name: "Curaçao", dialCode: "+599", flag: "🇨🇼" },
  { code: "CY", name: "Cyprus", dialCode: "+357", flag: "🇨🇾" },
  { code: "CZ", name: "Czech Republic", dialCode: "+420", flag: "🇨🇿" },
  { code: "DK", name: "Denmark", dialCode: "+45", flag: "🇩🇰" },
  { code: "DJ", name: "Djibouti", dialCode: "+253", flag: "🇩🇯" },
  { code: "DM", name: "Dominica", dialCode: "+1767", flag: "🇩🇲" },
  { code: "DO", name: "Dominican Republic", dialCode: "+1809", flag: "🇩🇴" },
  { code: "EC", name: "Ecuador", dialCode: "+593", flag: "🇪🇨" },
  { code: "EG", name: "Egypt", dialCode: "+20", flag: "🇪🇬" },
  { code: "SV", name: "El Salvador", dialCode: "+503", flag: "🇸🇻" },
  { code: "GQ", name: "Equatorial Guinea", dialCode: "+240", flag: "🇬🇶" },
  { code: "ER", name: "Eritrea", dialCode: "+291", flag: "🇪🇷" },
  { code: "EE", name: "Estonia", dialCode: "+372", flag: "🇪🇪" },
  { code: "SZ", name: "Eswatini", dialCode: "+268", flag: "🇸🇿" },
  { code: "ET", name: "Ethiopia", dialCode: "+251", flag: "🇪🇹" },
  { code: "FK", name: "Falkland Islands", dialCode: "+500", flag: "🇫🇰" },
  { code: "FO", name: "Faroe Islands", dialCode: "+298", flag: "🇫🇴" },
  { code: "FJ", name: "Fiji", dialCode: "+679", flag: "🇫🇯" },
  { code: "FI", name: "Finland", dialCode: "+358", flag: "🇫🇮" },
  { code: "FR", name: "France", dialCode: "+33", flag: "🇫🇷" },
  { code: "GF", name: "French Guiana", dialCode: "+594", flag: "🇬🇫" },
  { code: "PF", name: "French Polynesia", dialCode: "+689", flag: "🇵🇫" },
  { code: "GA", name: "Gabon", dialCode: "+241", flag: "🇬🇦" },
  { code: "GM", name: "Gambia", dialCode: "+220", flag: "🇬🇲" },
  { code: "GE", name: "Georgia", dialCode: "+995", flag: "🇬🇪" },
  { code: "DE", name: "Germany", dialCode: "+49", flag: "🇩🇪" },
  { code: "GH", name: "Ghana", dialCode: "+233", flag: "🇬🇭" },
  { code: "GI", name: "Gibraltar", dialCode: "+350", flag: "🇬🇮" },
  { code: "GR", name: "Greece", dialCode: "+30", flag: "🇬🇷" },
  { code: "GL", name: "Greenland", dialCode: "+299", flag: "🇬🇱" },
  { code: "GD", name: "Grenada", dialCode: "+1473", flag: "🇬🇩" },
  { code: "GP", name: "Guadeloupe", dialCode: "+590", flag: "🇬🇵" },
  { code: "GU", name: "Guam", dialCode: "+1671", flag: "🇬🇺" },
  { code: "GT", name: "Guatemala", dialCode: "+502", flag: "🇬🇹" },
  { code: "GG", name: "Guernsey", dialCode: "+44", flag: "🇬🇬" },
  { code: "GN", name: "Guinea", dialCode: "+224", flag: "🇬🇳" },
  { code: "GW", name: "Guinea-Bissau", dialCode: "+245", flag: "🇬🇼" },
  { code: "GY", name: "Guyana", dialCode: "+592", flag: "🇬🇾" },
  { code: "HT", name: "Haiti", dialCode: "+509", flag: "🇭🇹" },
  { code: "HN", name: "Honduras", dialCode: "+504", flag: "🇭🇳" },
  { code: "HK", name: "Hong Kong", dialCode: "+852", flag: "🇭🇰" },
  { code: "HU", name: "Hungary", dialCode: "+36", flag: "🇭🇺" },
  { code: "IS", name: "Iceland", dialCode: "+354", flag: "🇮🇸" },
  { code: "IN", name: "India", dialCode: "+91", flag: "🇮🇳" },
  { code: "ID", name: "Indonesia", dialCode: "+62", flag: "🇮🇩" },
  { code: "IR", name: "Iran", dialCode: "+98", flag: "🇮🇷" },
  { code: "IQ", name: "Iraq", dialCode: "+964", flag: "🇮🇶" },
  { code: "IE", name: "Ireland", dialCode: "+353", flag: "🇮🇪" },
  { code: "IM", name: "Isle of Man", dialCode: "+44", flag: "🇮🇲" },
  { code: "IL", name: "Israel", dialCode: "+972", flag: "🇮🇱" },
  { code: "IT", name: "Italy", dialCode: "+39", flag: "🇮🇹" },
  { code: "JM", name: "Jamaica", dialCode: "+1876", flag: "🇯🇲" },
  { code: "JP", name: "Japan", dialCode: "+81", flag: "🇯🇵" },
  { code: "JE", name: "Jersey", dialCode: "+44", flag: "🇯🇪" },
  { code: "JO", name: "Jordan", dialCode: "+962", flag: "🇯🇴" },
  { code: "KZ", name: "Kazakhstan", dialCode: "+7", flag: "🇰🇿" },
  { code: "KE", name: "Kenya", dialCode: "+254", flag: "🇰🇪" },
  { code: "KI", name: "Kiribati", dialCode: "+686", flag: "🇰🇮" },
  { code: "XK", name: "Kosovo", dialCode: "+383", flag: "🇽🇰" },
  { code: "KW", name: "Kuwait", dialCode: "+965", flag: "🇰🇼" },
  { code: "KG", name: "Kyrgyzstan", dialCode: "+996", flag: "🇰🇬" },
  { code: "LA", name: "Laos", dialCode: "+856", flag: "🇱🇦" },
  { code: "LV", name: "Latvia", dialCode: "+371", flag: "🇱🇻" },
  { code: "LB", name: "Lebanon", dialCode: "+961", flag: "🇱🇧" },
  { code: "LS", name: "Lesotho", dialCode: "+266", flag: "🇱🇸" },
  { code: "LR", name: "Liberia", dialCode: "+231", flag: "🇱🇷" },
  { code: "LY", name: "Libya", dialCode: "+218", flag: "🇱🇾" },
  { code: "LI", name: "Liechtenstein", dialCode: "+423", flag: "🇱🇮" },
  { code: "LT", name: "Lithuania", dialCode: "+370", flag: "🇱🇹" },
  { code: "LU", name: "Luxembourg", dialCode: "+352", flag: "🇱🇺" },
  { code: "MO", name: "Macau", dialCode: "+853", flag: "🇲🇴" },
  { code: "MG", name: "Madagascar", dialCode: "+261", flag: "🇲🇬" },
  { code: "MW", name: "Malawi", dialCode: "+265", flag: "🇲🇼" },
  { code: "MY", name: "Malaysia", dialCode: "+60", flag: "🇲🇾" },
  { code: "MV", name: "Maldives", dialCode: "+960", flag: "🇲🇻" },
  { code: "ML", name: "Mali", dialCode: "+223", flag: "🇲🇱" },
  { code: "MT", name: "Malta", dialCode: "+356", flag: "🇲🇹" },
  { code: "MH", name: "Marshall Islands", dialCode: "+692", flag: "🇲🇭" },
  { code: "MQ", name: "Martinique", dialCode: "+596", flag: "🇲🇶" },
  { code: "MR", name: "Mauritania", dialCode: "+222", flag: "🇲🇷" },
  { code: "MU", name: "Mauritius", dialCode: "+230", flag: "🇲🇺" },
  { code: "YT", name: "Mayotte", dialCode: "+262", flag: "🇾🇹" },
  { code: "MX", name: "Mexico", dialCode: "+52", flag: "🇲🇽" },
  { code: "FM", name: "Micronesia", dialCode: "+691", flag: "🇫🇲" },
  { code: "MD", name: "Moldova", dialCode: "+373", flag: "🇲🇩" },
  { code: "MC", name: "Monaco", dialCode: "+377", flag: "🇲🇨" },
  { code: "MN", name: "Mongolia", dialCode: "+976", flag: "🇲🇳" },
  { code: "ME", name: "Montenegro", dialCode: "+382", flag: "🇲🇪" },
  { code: "MS", name: "Montserrat", dialCode: "+1664", flag: "🇲🇸" },
  { code: "MA", name: "Morocco", dialCode: "+212", flag: "🇲🇦" },
  { code: "MZ", name: "Mozambique", dialCode: "+258", flag: "🇲🇿" },
  { code: "MM", name: "Myanmar", dialCode: "+95", flag: "🇲🇲" },
  { code: "NA", name: "Namibia", dialCode: "+264", flag: "🇳🇦" },
  { code: "NR", name: "Nauru", dialCode: "+674", flag: "🇳🇷" },
  { code: "NP", name: "Nepal", dialCode: "+977", flag: "🇳🇵" },
  { code: "NL", name: "Netherlands", dialCode: "+31", flag: "🇳🇱" },
  { code: "NC", name: "New Caledonia", dialCode: "+687", flag: "🇳🇨" },
  { code: "NZ", name: "New Zealand", dialCode: "+64", flag: "🇳🇿" },
  { code: "NI", name: "Nicaragua", dialCode: "+505", flag: "🇳🇮" },
  { code: "NE", name: "Niger", dialCode: "+227", flag: "🇳🇪" },
  { code: "NG", name: "Nigeria", dialCode: "+234", flag: "🇳🇬" },
  { code: "NU", name: "Niue", dialCode: "+683", flag: "🇳🇺" },
  { code: "NF", name: "Norfolk Island", dialCode: "+672", flag: "🇳🇫" },
  { code: "KP", name: "North Korea", dialCode: "+850", flag: "🇰🇵" },
  { code: "MK", name: "North Macedonia", dialCode: "+389", flag: "🇲🇰" },
  { code: "MP", name: "Northern Mariana Islands", dialCode: "+1670", flag: "🇲🇵" },
  { code: "NO", name: "Norway", dialCode: "+47", flag: "🇳🇴" },
  { code: "OM", name: "Oman", dialCode: "+968", flag: "🇴🇲" },
  { code: "PK", name: "Pakistan", dialCode: "+92", flag: "🇵🇰" },
  { code: "PW", name: "Palau", dialCode: "+680", flag: "🇵🇼" },
  { code: "PS", name: "Palestine", dialCode: "+970", flag: "🇵🇸" },
  { code: "PA", name: "Panama", dialCode: "+507", flag: "🇵🇦" },
  { code: "PG", name: "Papua New Guinea", dialCode: "+675", flag: "🇵🇬" },
  { code: "PY", name: "Paraguay", dialCode: "+595", flag: "🇵🇾" },
  { code: "PE", name: "Peru", dialCode: "+51", flag: "🇵🇪" },
  { code: "PH", name: "Philippines", dialCode: "+63", flag: "🇵🇭" },
  { code: "PN", name: "Pitcairn", dialCode: "+64", flag: "🇵🇳" },
  { code: "PL", name: "Poland", dialCode: "+48", flag: "🇵🇱" },
  { code: "PT", name: "Portugal", dialCode: "+351", flag: "🇵🇹" },
  { code: "PR", name: "Puerto Rico", dialCode: "+1787", flag: "🇵🇷" },
  { code: "QA", name: "Qatar", dialCode: "+974", flag: "🇶🇦" },
  { code: "RE", name: "Réunion", dialCode: "+262", flag: "🇷🇪" },
  { code: "RO", name: "Romania", dialCode: "+40", flag: "🇷🇴" },
  { code: "RU", name: "Russia", dialCode: "+7", flag: "🇷🇺" },
  { code: "RW", name: "Rwanda", dialCode: "+250", flag: "🇷🇼" },
  { code: "BL", name: "Saint Barthélemy", dialCode: "+590", flag: "🇧🇱" },
  { code: "SH", name: "Saint Helena", dialCode: "+290", flag: "🇸🇭" },
  { code: "KN", name: "Saint Kitts and Nevis", dialCode: "+1869", flag: "🇰🇳" },
  { code: "LC", name: "Saint Lucia", dialCode: "+1758", flag: "🇱🇨" },
  { code: "MF", name: "Saint Martin", dialCode: "+590", flag: "🇲🇫" },
  { code: "PM", name: "Saint Pierre and Miquelon", dialCode: "+508", flag: "🇵🇲" },
  { code: "VC", name: "Saint Vincent and the Grenadines", dialCode: "+1784", flag: "🇻🇨" },
  { code: "WS", name: "Samoa", dialCode: "+685", flag: "🇼🇸" },
  { code: "SM", name: "San Marino", dialCode: "+378", flag: "🇸🇲" },
  { code: "ST", name: "São Tomé and Príncipe", dialCode: "+239", flag: "🇸🇹" },
  { code: "SA", name: "Saudi Arabia", dialCode: "+966", flag: "🇸🇦" },
  { code: "SN", name: "Senegal", dialCode: "+221", flag: "🇸🇳" },
  { code: "RS", name: "Serbia", dialCode: "+381", flag: "🇷🇸" },
  { code: "SC", name: "Seychelles", dialCode: "+248", flag: "🇸🇨" },
  { code: "SL", name: "Sierra Leone", dialCode: "+232", flag: "🇸🇱" },
  { code: "SG", name: "Singapore", dialCode: "+65", flag: "🇸🇬" },
  { code: "SX", name: "Sint Maarten", dialCode: "+1721", flag: "🇸🇽" },
  { code: "SK", name: "Slovakia", dialCode: "+421", flag: "🇸🇰" },
  { code: "SI", name: "Slovenia", dialCode: "+386", flag: "🇸🇮" },
  { code: "SB", name: "Solomon Islands", dialCode: "+677", flag: "🇸🇧" },
  { code: "SO", name: "Somalia", dialCode: "+252", flag: "🇸🇴" },
  { code: "ZA", name: "South Africa", dialCode: "+27", flag: "🇿🇦" },
  { code: "KR", name: "South Korea", dialCode: "+82", flag: "🇰🇷" },
  { code: "SS", name: "South Sudan", dialCode: "+211", flag: "🇸🇸" },
  { code: "ES", name: "Spain", dialCode: "+34", flag: "🇪🇸" },
  { code: "LK", name: "Sri Lanka", dialCode: "+94", flag: "🇱🇰" },
  { code: "SD", name: "Sudan", dialCode: "+249", flag: "🇸🇩" },
  { code: "SR", name: "Suriname", dialCode: "+597", flag: "🇸🇷" },
  { code: "SJ", name: "Svalbard and Jan Mayen", dialCode: "+47", flag: "🇸🇯" },
  { code: "SE", name: "Sweden", dialCode: "+46", flag: "🇸🇪" },
  { code: "CH", name: "Switzerland", dialCode: "+41", flag: "🇨🇭" },
  { code: "SY", name: "Syria", dialCode: "+963", flag: "🇸🇾" },
  { code: "TW", name: "Taiwan", dialCode: "+886", flag: "🇹🇼" },
  { code: "TJ", name: "Tajikistan", dialCode: "+992", flag: "🇹🇯" },
  { code: "TZ", name: "Tanzania", dialCode: "+255", flag: "🇹🇿" },
  { code: "TH", name: "Thailand", dialCode: "+66", flag: "🇹🇭" },
  { code: "TL", name: "Timor-Leste", dialCode: "+670", flag: "🇹🇱" },
  { code: "TG", name: "Togo", dialCode: "+228", flag: "🇹🇬" },
  { code: "TK", name: "Tokelau", dialCode: "+690", flag: "🇹🇰" },
  { code: "TO", name: "Tonga", dialCode: "+676", flag: "🇹🇴" },
  { code: "TT", name: "Trinidad and Tobago", dialCode: "+1868", flag: "🇹🇹" },
  { code: "TN", name: "Tunisia", dialCode: "+216", flag: "🇹🇳" },
  { code: "TR", name: "Turkey", dialCode: "+90", flag: "🇹🇷" },
  { code: "TM", name: "Turkmenistan", dialCode: "+993", flag: "🇹🇲" },
  { code: "TC", name: "Turks and Caicos Islands", dialCode: "+1649", flag: "🇹🇨" },
  { code: "TV", name: "Tuvalu", dialCode: "+688", flag: "🇹🇻" },
  { code: "UG", name: "Uganda", dialCode: "+256", flag: "🇺🇬" },
  { code: "UA", name: "Ukraine", dialCode: "+380", flag: "🇺🇦" },
  { code: "AE", name: "United Arab Emirates", dialCode: "+971", flag: "🇦🇪" },
  { code: "GB", name: "United Kingdom", dialCode: "+44", flag: "🇬🇧" },
  { code: "US", name: "United States", dialCode: "+1", flag: "🇺🇸" },
  { code: "UY", name: "Uruguay", dialCode: "+598", flag: "🇺🇾" },
  { code: "UZ", name: "Uzbekistan", dialCode: "+998", flag: "🇺🇿" },
  { code: "VU", name: "Vanuatu", dialCode: "+678", flag: "🇻🇺" },
  { code: "VA", name: "Vatican City", dialCode: "+39", flag: "🇻🇦" },
  { code: "VE", name: "Venezuela", dialCode: "+58", flag: "🇻🇪" },
  { code: "VN", name: "Vietnam", dialCode: "+84", flag: "🇻🇳" },
  { code: "WF", name: "Wallis and Futuna", dialCode: "+681", flag: "🇼🇫" },
  { code: "EH", name: "Western Sahara", dialCode: "+212", flag: "🇪🇭" },
  { code: "YE", name: "Yemen", dialCode: "+967", flag: "🇾🇪" },
  { code: "ZM", name: "Zambia", dialCode: "+260", flag: "🇿🇲" },
  { code: "ZW", name: "Zimbabwe", dialCode: "+263", flag: "🇿🇼" }
]

// Helper functions
export const getPackagesByCategory = (category: Package["category"]) => {
  return packages.filter((pkg) => pkg.category === category)
}

export const getPackageById = (id: string) => {
  return packages.find((pkg) => pkg.id === id)
}

export const getDestinationById = (id: string) => {
  return destinations.find((dest) => dest.id === id)
}

export const getAccommodationsByDestination = (destinationId: string) => {
  return accommodations.filter((acc) => acc.destinationId === destinationId)
}

export const getTestimonialsByPackage = (packageId: string) => {
  return testimonials.filter((test) => test.packageId === packageId)
}
// ---------- NEW EXPORT ----------
export const getAllDestinations = () => {
  // If you need it to be async (for future DB calls) just mark it `async`
  return destinations;
};
// ---------- NEW EXPORT ----------
export const getPackages = () => {
  // If you need it to be async (for future DB calls) just mark it `async`
  return packages;
}