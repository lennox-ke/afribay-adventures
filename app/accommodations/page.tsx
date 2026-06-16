import type { Metadata } from "next"
import AccommodationsClient from "./AccommodationsClient"

export const metadata: Metadata = {
  title: "Safari Accommodations Kenya | Lodges, Camps & Resorts — Afribay Adventures",
  description:
    "Browse Kenya safari accommodations including luxury lodges, tented camps, resorts, and hotels across Maasai Mara, Amboseli, Tsavo, and more. Find your perfect safari stay with Afribay Adventures.",
  keywords:
    "Kenya safari accommodations, Maasai Mara lodges, Amboseli camps, Tsavo resorts, luxury safari lodges Kenya, tented camps Kenya, safari hotels Kenya",
  metadataBase: new URL("https://afribayke.com"),
  alternates: {
    canonical: "/accommodations",
  },
  openGraph: {
    title: "Safari Accommodations Kenya — Afribay Adventures",
    description:
      "From luxury lodges to authentic tented camps, find your perfect home base for an unforgettable Kenya safari.",
    url: "https://afribayke.com/accommodations",
    siteName: "Afribay Adventures",
    images: [
      {
        url: "https://afribay.vercel.app/tsavo.jpg",
        width: 1200,
        height: 630,
        alt: "Luxury safari lodge accommodation in Kenya",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Safari Accommodations Kenya — Afribay Adventures",
    description: "Find your perfect home base for an unforgettable Kenya safari.",
    images: ["https://afribay.vercel.app/tsavo.jpg"],
  },
}

export default function Page() {
  return <AccommodationsClient />
}