import type { Metadata } from "next"
import PremiumPackagesClient from "./PremiumPackagesClient"

export const metadata: Metadata = {
  title: "Premium Kenya Safari Packages | Luxury Lodges & Tours — Afribay Adventures",
  description:
    "Explore premium Kenya safari packages with luxury lodges, certified guides, and exclusive wildlife encounters in Maasai Mara, Amboseli, and Tsavo. Prices in USD, GBP, EUR, KES & more. Get a custom quote today.",
  keywords:
    "premium Kenya safari packages, luxury safari Kenya, Maasai Mara luxury lodge safari, Amboseli premium tour, Kenya safari prices, exclusive safari packages Kenya",
  metadataBase: new URL("https://afribayke.com"),
  alternates: {
    canonical: "/packages/premium",
  },
  openGraph: {
    title: "Premium Kenya Safari Packages — Afribay Adventures",
    description:
      "Luxury Kenya safari packages with exclusive lodges, expert guides, and unforgettable wildlife encounters. View prices in your local currency.",
    url: "https://afribayke.com/packages/premium",
    siteName: "Afribay Adventures",
    images: [
      {
        url: "https://afribay.vercel.app/afribay-premium-safari.jpg",
        width: 1200,
        height: 630,
        alt: "Premium Kenya safari lodge and wildlife experience",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Kenya Safari Packages — Afribay Adventures",
    description:
      "Luxury Kenya safari packages with exclusive lodges, expert guides, and unforgettable wildlife encounters.",
    images: ["https://afribay.vercel.app/afribay-premium-safari.jpg"],
  },
}

export default function Page() {
  return <PremiumPackagesClient />
}