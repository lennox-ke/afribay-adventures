// app/events/data.ts
// Event data with countdown support for Kenya 2026 international events

export type Event = {
  slug: string
  name: string
  shortName: string
  dateStart: string      // ISO date: YYYY-MM-DD
  dateEnd: string        // ISO date: YYYY-MM-DD
  location: string
  venue: string
  attendees: string
  description: string
  highlight: string
  image: string
  blogSlug: string       // links to related blog post
  whyAttend: string[]    // reasons to attend this event
  experienceHighlights: { title: string; description: string; icon: string }[]
  hotelLocations: string[] // accommodation slugs to pull from accommodations page
  category: string       // event category for filtering
}

export const events: Event[] = [
  {
    slug: "tourism-east-africa-regional-expo-2026",
    name: "Tourism East Africa Regional Expo",
    shortName: "Regional Tourism Expo",
    dateStart: "2026-05-28",
    dateEnd: "2026-05-30",
    location: "Mombasa",
    venue: "Mombasa Exhibition Centre",
    attendees: "Regional tourism boards & operators",
    description: "East Africa's premier regional tourism exhibition bringing together Kenya, Tanzania, Uganda, Rwanda, and Burundi tourism stakeholders for cross-border collaboration.",
    highlight: "Cross-border East Africa safari deals",
    image: "https://www.dianibeachmombasa.com/wp-content/uploads/2023/04/Kenya-Coast-Diani-Beach-Afrochic-1.jpg",
    blogSlug: "tourism-east-africa-regional-expo-2026",
    whyAttend: [
      "Meet tourism boards from 5 East African countries in one venue",
      "Source multi-country safari itineraries directly from operators",
      "Discover new cross-border routes and aviation connections",
      "Network with lodge owners from Kenya, Tanzania, and Uganda",
    ],
    experienceHighlights: [
      { title: "Cross-Border Safari Planning", description: "Design your Kenya-Tanzania-Uganda circuit with direct input from national park authorities and border operators.", icon: "globe" },
      { title: "Coastal & Bush Combo", description: "Combine Mombasa beach time with Tsavo East red elephants — all logistics arranged by AfriBay.", icon: "palmtree" },
      { title: "Regional Aviation Deals", description: "Exclusive air pass rates for multi-country East Africa circuits, available only during the expo.", icon: "plane" },
    ],
    hotelLocations: ["mombasa", "diani-beach"],
    category: "Tourism",
  },
  {
    slug: "global-data-festival-2026",
    name: "Global Data Festival & Kenya Space Expo Conference",
    shortName: "Global Data Festival",
    dateStart: "2026-06-02",
    dateEnd: "2026-06-05",
    location: "Nairobi",
    venue: "The Edge Hotel & Convention Center, South C",
    attendees: "2,000+ professionals from 90+ countries",
    description: "Kenya's highest-profile tech event with presidential endorsement. Covers space intelligence, geospatial data, and satellite technology for wildlife monitoring.",
    highlight: "Kenya Airways 12% discount: GDKSE26kE",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/ac/A_lone_giraffe_in_Nairobi_National_Park.jpg",
    blogSlug: "global-data-festival-kenya-2026-guide",
    whyAttend: [
      "Presidential endorsement from the Government of Kenya",
      "2,000+ data scientists, policymakers, and tech innovators",
      "Kenya Airways 12% flight discount with promo code GDKSE26kE",
      "Sessions on satellite technology for wildlife monitoring",
    ],
    experienceHighlights: [
      { title: "Pre-Conference Bush Acclimatization", description: "Arrive early for a night at Nairobi National Park — the only capital city park in the world.", icon: "compass" },
      { title: "Post-Conference Mara Fly-In", description: "45-minute flight from Wilson Airport to the Maasai Mara. Witness the Great Migration in peak season.", icon: "plane" },
      { title: "Space-to-Safari Connection", description: "See how satellite data tracks wildlife corridors — then observe those same animals on game drive.", icon: "satellite" },
    ],
    hotelLocations: ["nairobi"],
    category: "Technology",
  },
  {
    slug: "kata-convention-2026",
    name: "KATA Annual General Meeting & Convention",
    shortName: "KATA Convention",
    dateStart: "2026-06-04",
    dateEnd: "2026-06-06",
    location: "Mombasa",
    venue: "PrideInn Paradise Beach Resort & Spa, Shanzu Beach",
    attendees: "Kenya's travel industry leaders",
    description: "Kenya's most influential travel industry gathering at a beachfront venue. Airlines, hotels, tour operators, and technology providers converge here.",
    highlight: "Beachfront business + coastal safari combo",
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/332737466.jpg?k=a41580dedff2fe16ffacf966e17ee766b91f9cfe0a76b5e7678d21a76e8cfceb&o=",
    blogSlug: "kata-convention-mombasa-2026",
    whyAttend: [
      "Network with Kenya's top airlines, hotels, and safari operators",
      "Beachfront venue at Shanzu Beach — business with your feet in the sand",
      "Discover new products before they hit mainstream market",
      "Spouse programs available during conference sessions",
    ],
    experienceHighlights: [
      { title: "Beachfront Networking", description: "Close deals while watching dhows sail past. The only major Kenyan business event held directly on the beach.", icon: "waves" },
      { title: "Tsavo Red Elephant Extension", description: "2.5 hours from Mombasa to Kenya's largest wilderness. See the famous red elephants of Tsavo East.", icon: "mountain" },
      { title: "Diani Beach Recovery", description: "After intense networking, unwind on Africa's finest beach with powder-white sand and turquoise water.", icon: "palmtree" },
    ],
    hotelLocations: ["mombasa", "diani-beach"],
    category: "Tourism",
  },
  {
    slug: "agritec-africa-2026",
    name: "Agritec Africa",
    shortName: "Agritec Africa",
    dateStart: "2026-06-17",
    dateEnd: "2026-06-19",
    location: "Nairobi",
    venue: "KICC, Nairobi",
    attendees: "175 companies from 25 countries",
    description: "East Africa's largest agriculture exhibition featuring farming machinery, dairy/livestock tech, and grain processing innovations.",
    highlight: "Farm-to-bush agri-tourism experiences",
    image: "https://thumbs.dreamstime.com/b/kenyan-farm-landscape-agriculture-beautiful-valley-green-highlands-north-nairobi-kenya-76092103.jpg",
    blogSlug: "agritec-africa-2026-agriculture-safari",
    whyAttend: [
      "See the latest farming machinery and agricultural technology",
      "Concurrent dairy, livestock, and poultry exhibitions",
      "Grain processing and storage solutions showcase",
      "Network with progressive farmers and agribusiness investors",
    ],
    experienceHighlights: [
      { title: "Laikipia Conservancy Ranch Visits", description: "See how cattle ranching and wildlife conservation coexist. Visit Boran cattle herds alongside elephant families.", icon: "cow" },
      { title: "Naivasha Flower Farm Tour", description: "Kenya supplies 70% of Europe's roses. Tour the farms that border Lake Naivasha's hippo-filled waters.", icon: "flower" },
      { title: "Coffee Estate to Bush", description: "From Kiambu coffee plantations to Aberdare National Park — understand Kenya's agricultural heartland.", icon: "coffee" },
    ],
    hotelLocations: ["nairobi", "naivasha"],
    category: "Agriculture",
  },
  {
    slug: "africa-food-show-kenya-2026",
    name: "Africa Food Show Kenya",
    shortName: "Africa Food Show",
    dateStart: "2026-08-19",
    dateEnd: "2026-08-21",
    location: "Nairobi",
    venue: "KICC, Nairobi",
    attendees: "Global food industry professionals",
    description: "The region's premier food industry exhibition connecting global manufacturers with East African markets. Concurrent hospitality and kitchen equipment shows.",
    highlight: "Culinary safari from KICC to bush kitchen",
    image: "https://images.squarespace-cdn.com/content/v1/614f831e90f08045038b4dae/bb02b3c0-afbd-4efa-8bba-38185d4db0c7/Ugali-and-Nyama-Choma-With-Kachumbari_MidPage-%E2%80%93-2@2x.jpg",
    blogSlug: "africa-food-show-kenya-2026",
    whyAttend: [
      "Source food and beverage suppliers for East African market",
      "Concurrent hospitality and kitchen equipment exhibitions",
      "Discover packaging and logistics solutions",
      "Meet investors seeking food sector opportunities",
    ],
    experienceHighlights: [
      { title: "Carnivore to Camp Dining", description: "Start at Nairobi's famous Carnivore Restaurant, then experience bush dinners under the stars at Angama Mara.", icon: "utensils" },
      { title: "Swahili Coastal Cuisine", description: "Fly to Mombasa for coconut-infused curries, fresh seafood, and spice-route cooking classes in Old Town.", icon: "fish" },
      { title: "Farm-to-Bush Gastronomy", description: "From Kiambu organic farms to Naivasha lake fish to Mara camp kitchens — taste Kenya's full culinary journey.", icon: "leaf" },
    ],
    hotelLocations: ["nairobi", "mombasa"],
    category: "Food & Hospitality",
  },
  {
    slug: "aviadev-africa-2026",
    name: "AviaDev Africa",
    shortName: "AviaDev Africa",
    dateStart: "2026-09-09",
    dateEnd: "2026-09-10",
    location: "Nairobi",
    venue: "Sarit Expo Centre, Nairobi",
    attendees: "Airline & aviation route developers",
    description: "Africa's leading aviation conference focused on route development and improving air connectivity across the continent.",
    highlight: "Experience fly-in safari aviation firsthand",
    image: "https://gemfinderssafaris.com/wp-content/uploads/2026/01/Safarilink-aircraft-at-Masai-Mara-airstrip-for-fly-in-safari.webp",
    blogSlug: "aviadev-africa-2026-aviation-safari",
    whyAttend: [
      "Meet airline CEOs and route planning executives",
      "Discover new aviation connections to safari destinations",
      "Understand how air access transforms tourism economics",
      "Network with airport authorities and tourism ministers",
    ],
    experienceHighlights: [
      { title: "Fly-In Safari Logistics", description: "Experience the same airstrip operations you discuss at the conference. 45-minute Wilson to Mara flight.", icon: "plane" },
      { title: "Remote Airstrip Expedition", description: "Visit Loisaba's new airstrip and see how aviation infrastructure opens up previously inaccessible wilderness.", icon: "map" },
      { title: "Multi-Airstrip Circuit", description: "Nairobi → Amboseli → Mara by air in one day. Understand the connectivity that makes modern safari possible.", icon: "route" },
    ],
    hotelLocations: ["nairobi"],
    category: "Aviation",
  },
  {
    slug: "nairobi-international-trade-fair-2026",
    name: "Nairobi International Trade Fair",
    shortName: "Nairobi Trade Fair",
    dateStart: "2026-09-28",
    dateEnd: "2026-10-04",
    location: "Nairobi",
    venue: "Jamhuri Park, Nairobi",
    attendees: "Agricultural & trade exhibitors",
    description: "Kenya's longest-running exhibition since 1901. Livestock competitions, agricultural machinery, horticulture displays, and international trade pavilions.",
    highlight: "Only trade fair next to a national park",
    image: "https://ask.co.ke/wp-content/uploads/2021/02/ask143.jpg",
    blogSlug: "nairobi-international-trade-fair-2026",
    whyAttend: [
      "Kenya's oldest exhibition — over 120 years of tradition",
      "Livestock competitions with prize Boran cattle",
      "Horticulture and flower displays from across Kenya",
      "International trade pavilions from partner countries",
    ],
    experienceHighlights: [
      { title: "Park-Adjacent Exhibition", description: "The only major trade fair in the world next to a national park. See giraffes from the exhibition grounds.", icon: "binoculars" },
      { title: "Agricultural Safari Circuit", description: "From flower farms to coffee estates to Maasai pastoralism — understand how agriculture shapes Kenya's wilderness.", icon: "tractor" },
      { title: "Post-Fair Big 5 Circuit", description: "Nairobi Park → Nakuru → Mara. See how Kenya balances farming heritage with wildlife conservation.", icon: "paw" },
    ],
    hotelLocations: ["nairobi"],
    category: "Agriculture",
  },
  {
    slug: "magical-kenya-travel-expo-2026",
    name: "Magical Kenya Travel Expo",
    shortName: "MKTE 2026",
    dateStart: "2026-10-06",
    dateEnd: "2026-10-08",
    location: "Nairobi",
    venue: "Uhuru Gardens, Nairobi",
    attendees: "350+ exhibitors, 5,000+ professionals",
    description: "Kenya Tourism Board's flagship B2B event. Part of the 'Experience Wonder' global campaign launched at ITB Berlin 2026.",
    highlight: "Kenya Tourism Board's flagship event",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/b0/ab/66/kenya-famous-for-its.jpg?w=900&h=-1&s=1",
    blogSlug: "magical-kenya-travel-expo-2026",
    whyAttend: [
      "Kenya Tourism Board's premier international showcase",
      "350+ exhibitors from Kenya and East Africa",
      "Hosted buyers from Europe, North America, and Asia",
      "Live cultural performances and product launches",
    ],
    experienceHighlights: [
      { title: "Peak Migration Timing", description: "October is the best month for river crossings. Combine business with guaranteed Great Migration action.", icon: "zap" },
      { title: "Exclusive Expo Rates", description: "Visit AfriBay at Hall B Stand 42 for special delegate packages — available only during MKTE.", icon: "tag" },
      { title: "Industry Insider Access", description: "Meet camp owners, guides, and conservationists personally. Book 2027 safaris at 2026 prices.", icon: "users" },
    ],
    hotelLocations: ["nairobi"],
    category: "Tourism",
  },
  {
    slug: "big-5-construct-kenya-2026",
    name: "The Big 5 Construct Kenya",
    shortName: "Big 5 Construct",
    dateStart: "2026-10-21",
    dateEnd: "2026-10-23",
    location: "Nairobi",
    venue: "Sarit Expo Centre, Nairobi",
    attendees: "Construction industry professionals",
    description: "Part of the global Big 5 construction network. Building materials, MEP solutions, concrete innovations, and smart building technologies.",
    highlight: "Build business, then track the real Big 5",
    image: "https://media.istockphoto.com/id/637912692/photo/nairobi-cityscape-capital-city-of-kenya.jpg?s=612x612&w=0&k=20&c=S8wPNq9om-IMcapXFC030ew28nhpYCFYBStX5yxCQbs=",
    blogSlug: "big-5-construct-kenya-2026",
    whyAttend: [
      "Global Big 5 construction brand in East Africa",
      "Building materials and MEP solutions showcase",
      "Concrete and cement innovations",
      "Smart building and sustainable construction tech",
    ],
    experienceHighlights: [
      { title: "The Real Big 5 Safari", description: "Lion, leopard, elephant, buffalo, rhino — all within reach of Nairobi. See them after your exhibition closes.", icon: "paw" },
      { title: "Conservancy Construction Tours", description: "Visit eco-lodge building sites in Laikipia. See sustainable construction in Africa's most challenging environments.", icon: "hammer" },
      { title: "Quick Weekend Escape", description: "Nairobi Park + Nakuru in 3 nights. See 4 of the Big 5 without long drives from the city.", icon: "clock" },
    ],
    hotelLocations: ["nairobi"],
    category: "Construction",
  },
  {
    slug: "ketiba-2026",
    name: "KETIBA Kenya Travel Industry Business Awards",
    shortName: "KETIBA Awards",
    dateStart: "2026-12-04",
    dateEnd: "2026-12-04",
    location: "Nairobi",
    venue: "Argyle Grand Hotel, Nairobi",
    attendees: "Kenya's travel industry elite",
    description: "The Oscars of Kenyan travel. Recognizing excellence across tour operators, safari camps, airlines, and sustainable tourism initiatives.",
    highlight: "Celebrate excellence, end with award-winning safari",
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/553059860.jpg?k=4a36f6c381244fa98507c9bc2c504838b4d6a1bc5344c30e3258b6de613adcde&o=",
    blogSlug: "ketiba-2026-kenya-travel-awards",
    whyAttend: [
      "The most prestigious awards in Kenyan tourism",
      "Network with industry leaders and government officials",
      "Discover award-winning camps and experiences",
      "Black-tie gala dinner with entertainment",
    ],
    experienceHighlights: [
      { title: "Award-Winning Camp Stays", description: "Stay at KETIBA-nominated properties: Angama Mara, Saruni, ol Donyo — experience the best of the best.", icon: "award" },
      { title: "Festive Green Season Magic", description: "December's short rains create emerald landscapes. Baby animals, dramatic skies, and fewer tourists.", icon: "cloud-rain" },
      { title: "Christmas in the Bush", description: "Bush Christmas trees, candlelit dinners, and carols by the waterhole. A safari holiday you'll never forget.", icon: "tree-pine" },
    ],
    hotelLocations: ["nairobi"],
    category: "Tourism",
  },
  // === NEW EVENTS ADDED BELOW ===
  {
    slug: "kenya-mining-investment-conference-2026",
    name: "Kenya Mining Investment Conference & Exhibition",
    shortName: "Kenya Mining Conference",
    dateStart: "2026-04-28",
    dateEnd: "2026-04-29",
    location: "Nairobi",
    venue: "Argyle Grand Hotel, Nairobi",
    attendees: "Mining investors, government officials & industry leaders",
    description: "The Ministry of Mining positions Kenya as a key player in the global mineral value chain. Showcases strategic mineral reserves and promotes sustainable investment.",
    highlight: "Explore Kenya's untapped mineral wealth",
    image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=900&auto=format&fit=crop",
    blogSlug: "kenya-mining-investment-conference-2026",
    whyAttend: [
      "Discover Kenya's strategic mineral reserves and investment opportunities",
      "Dialogue with government, investors, and mining communities",
      "Learn about sustainable mining practices and value chain development",
      "Network with development partners and industry leaders",
    ],
    experienceHighlights: [
      { title: "Tsavo Gemstone Safari", description: "Visit the famous Tsavo region where Kenya's precious gemstones are mined — then see the wild elephants that roam the same landscape.", icon: "gem" },
      { title: "Coastal Mineral Belt Tour", description: "Explore Kenya's coastal mineral resources, from titanium sands to rare earth elements, with expert geologists as guides.", icon: "mountain" },
      { title: "Post-Conference Bush Retreat", description: "Unwind at a luxury camp near Amboseli after intense negotiations. See Kilimanjaro at sunset.", icon: "sunset" },
    ],
    hotelLocations: ["nairobi"],
    category: "Mining & Resources",
  },
  {
    slug: "mombasa-international-show-2026",
    name: "Mombasa International Show",
    shortName: "Mombasa International Show",
    dateStart: "2026-09-02",
    dateEnd: "2026-09-06",
    location: "Mombasa",
    venue: "ASK Jomo Kenyatta Showground, Mombasa",
    attendees: "Agriculture, manufacturing & tourism exhibitors",
    description: "Coastal Kenya's premier trade exhibition. Agriculture, manufacturing, tourism enterprises, fishing industry, banking, import/export, and transport sectors converge at the coast.",
    highlight: "Coastal trade fair with beach access",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=900&auto=format&fit=crop",
    blogSlug: "mombasa-international-show-2026",
    whyAttend: [
      "Kenya's oldest regional showground with coastal charm",
      "Exhibitors from agriculture, manufacturing, and tourism sectors",
      "Fishing industry and maritime trade showcases",
      "Banking and import/export networking opportunities",
    ],
    experienceHighlights: [
      { title: "Coastal Business & Beach", description: "Close deals in the morning, snorkel in the afternoon. The only major trade show in Kenya with Indian Ocean access.", icon: "waves" },
      { title: "Dhow Building & Marine Heritage", description: "Tour traditional dhow yards in Lamu and understand the maritime trade that built the Swahili coast.", icon: "ship" },
      { title: "Shimba Hills Safari Extension", description: "Just 45 minutes from Mombasa — Kenya's only coastal rainforest reserve with the rare sable antelope.", icon: "leaf" },
    ],
    hotelLocations: ["mombasa", "diani-beach"],
    category: "Trade & Commerce",
  },
  {
    slug: "stri4society-week-2026",
    name: "STRI4Society Week — Science, Technology, Research & Innovation",
    shortName: "STRI4Society Week",
    dateStart: "2026-05-18",
    dateEnd: "2026-05-22",
    location: "Nairobi",
    venue: "KICC, Nairobi",
    attendees: "5,000+ scientists, innovators & policymakers",
    description: "Kenya's premier platform for showcasing scientific excellence, technological breakthroughs and innovative solutions addressing real societal challenges.",
    highlight: "Where Kenya's innovation ecosystem meets the world",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=900&auto=format&fit=crop",
    blogSlug: "stri4society-week-2026",
    whyAttend: [
      "Kenya's premier science and innovation platform with 5,000+ attendees",
      "Scientific conferences, policy dialogues, and innovation exhibitions",
      "Startup pitches and investor forums for emerging technologies",
      "Youth competitions, hackathons, and STEM career clinics",
    ],
    experienceHighlights: [
      { title: "Innovation to Conservation", description: "See how Kenyan startups use drone tech and AI to combat poaching — then visit the conservancies deploying these solutions.", icon: "cpu" },
      { title: "Silicon Savannah to Maasai Mara", description: "From Nairobi's tech hub to the world's most famous wildlife reserve. Understand how innovation drives conservation.", icon: "route" },
      { title: "Green Tech Safari", description: "Visit Ol Pejeta's solar-powered operations and see how renewable energy powers Africa's most advanced conservancy.", icon: "zap" },
    ],
    hotelLocations: ["nairobi"],
    category: "Technology",
  },
  {
    slug: "africa-ppp-2026",
    name: "Africa PPP — Infrastructure Investment Partnerships Conference",
    shortName: "Africa PPP",
    dateStart: "2026-11-11",
    dateEnd: "2026-11-13",
    location: "Nairobi",
    venue: "KICC, Nairobi",
    attendees: "Infrastructure investors, government officials & developers",
    description: "The platform for reducing Africa's infrastructure gap through public-private partnerships. Covers renewable energy, transport, bulk water, waste-to-energy, and port sectors.",
    highlight: "Build Africa's future, then explore its wild heart",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&auto=format&fit=crop",
    blogSlug: "africa-ppp-2026-infrastructure-safari",
    whyAttend: [
      "Reduce Africa's infrastructure gap through viable PPPs",
      "Focus on renewable energy, transport, water, and port sectors",
      "Network with 150+ CEOs, institutional leaders, and government officials",
      "Discover innovative financing mechanisms for large-scale projects",
    ],
    experienceHighlights: [
      { title: "Infrastructure Meets Wilderness", description: "Discuss Kenya's SGR railway expansion, then ride the existing line through Tsavo — watching elephants from your window.", icon: "train" },
      { title: "Renewable Energy Safari", description: "Visit Lake Turkana Wind Power, Africa's largest wind farm, then explore the desert landscapes that make it possible.", icon: "wind" },
      { title: "Post-Conference Mara Retreat", description: "After intense deal-making, decompress at a luxury camp in the Maasai Mara. The ultimate boardroom-to-bush transition.", icon: "camp" },
    ],
    hotelLocations: ["nairobi"],
    category: "Infrastructure & Investment",
  },
]

// Helper function to get event status
export function getEventStatus(event: Event): {
  status: "upcoming" | "ongoing" | "past"
  daysUntil: number
  countdownText: string
  isToday: boolean
} {
  const now = new Date()
  const start = new Date(event.dateStart)
  const end = new Date(event.dateEnd)

  now.setHours(0, 0, 0, 0)
  const startDay = new Date(start)
  startDay.setHours(0, 0, 0, 0)
  const endDay = new Date(end)
  endDay.setHours(0, 0, 0, 0)

  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const isToday = today.getTime() === startDay.getTime() || (today >= startDay && today <= endDay)

  if (today > endDay) {
    return {
      status: "past",
      daysUntil: 0,
      countdownText: "Event completed",
      isToday: false,
    }
  }

  if (today >= startDay && today <= endDay) {
    return {
      status: "ongoing",
      daysUntil: 0,
      countdownText: "Happening now",
      isToday: true,
    }
  }

  const diffTime = startDay.getTime() - today.getTime()
  const daysUntil = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

  let countdownText = ""
  if (daysUntil === 1) {
    countdownText = "Starts tomorrow"
  } else if (daysUntil < 7) {
    countdownText = `Starts in ${daysUntil} days`
  } else if (daysUntil < 30) {
    const weeks = Math.floor(daysUntil / 7)
    countdownText = `Starts in ${weeks} week${weeks > 1 ? "s" : ""}`
  } else if (daysUntil < 365) {
    const months = Math.floor(daysUntil / 30)
    countdownText = `Starts in ${months} month${months > 1 ? "s" : ""}`
  } else {
    const years = Math.floor(daysUntil / 365)
    countdownText = `Starts in ${years} year${years > 1 ? "s" : ""}`
  }

  return {
    status: "upcoming",
    daysUntil,
    countdownText,
    isToday: false,
  }
}