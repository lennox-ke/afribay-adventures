import type { Metadata } from "next"
import { HeroSection } from "@/components/hero-section"
import { WelcomeBanner } from "@/components/welcome-banner"
import { FeatureCarousel } from "@/components/feature-carousel"
import { WhyChooseKenya } from "@/components/why-choose-kenya"
import { AboutPreview } from "@/components/about-preview"
import { Certifications } from "@/components/certifications"
import { FeaturedPackages } from "@/components/featured-packages"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"
import { OfferPackages } from "@/components/featured-offers"
import { Testimonials } from "@/components/testimonials"
import { FinalCTA } from "@/components/final-cta"
import PageTransition from '@/components/PageTransition';
import Head from "next/head";

export const metadata: Metadata = {
  title: "Kenya Safari 2026 | Masai Mara & Big Five Packages | Afribay",
  description:
    "2026 Kenya safari packages from $1 850 pp: 5-day Masai Mara, Amboseli & Big Five game drives. Luxury lodges, expert guides, all-inclusive. Reserve your seat today!",
  authors: [{ name: "Afribay Adventures" }],
  creator: "Afribay Adventures",
  publisher: "Afribay Adventures",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://afribayke.com"),
  alternates: { canonical: "https://afribayke.com" },
  openGraph: {
    title: "Kenya Safari 2026 | Masai Mara & Big Five Packages | Afribay",
    description:
      "2026 Kenya safari packages from $1 850 pp: 5-day Masai Mara, Amboseli & Big Five game drives. Luxury lodges, expert guides, all-inclusive. Reserve your seat today.",
    url: "https://afribayke.com",
    siteName: "Afribay Adventures",
    images: [
      {
        url: "/kenya-safari-wildlife-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Kenya Safari Wildlife Adventure with Afribay Adventures",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kenya Safari 2026 | Masai Mara & Big Five Packages | Afribay",
    description:
      "2026 Kenya safari packages from $1 850 pp: 5-day Masai Mara, Amboseli & Big Five game drives. Luxury lodges, expert guides, all-inclusive. Reserve your seat today.",
    images: ["/kenya-safari-wildlife-hero.jpg"],
    creator: "@AfribayAdventures",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function HomePage() {
  return (
    <PageTransition type="elegant" duration={600}>
      <>
        <Head>
          {/* ===== Google tag (gtag.js) ===== */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-RG47BTJYSL"
          />
          <SpeedInsights />
          <Analytics />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-RG47BTJYSL');
              `,
            }}
          />

          {/* ===== FAVICONS & PWA ===== */}
          <link rel="icon" href="/favicon.ico" type="image/x-icon" />
          <link rel="icon" href="/favicon.png" type="image/png" />
          <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
          <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png" />
          <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
          <meta name="theme-color" content="#ffffff" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="manifest" href="/site.webmanifest" />

          {/* ===== Google Site Verification ===== */}
          <meta name="google-site-verification" content="repnd0wkFxG-89op86fuQuIEOPzDn5epyg7HmU2-_AI" />
        </Head>

        {/* ===== SCHEMA.ORG JSON-LD ===== */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              name: "Afribay Adventures",
              description:
                "Premium Kenya safari tours and wildlife adventures with expert guides and luxury accommodations",
              url: "https://afribayke.com",
              logo: "https://afribay.vercel.app/logo.png",
              image: "https://afribay.vercel.app/kenya-safari-wildlife-hero.jpg",
              telephone: "+254-722-123456",
              email: "adventure@afribayke.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Safari Center",
                addressLocality: "Nairobi",
                addressCountry: "KE",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -1.2921,
                longitude: 36.8219,
              },
              sameAs: [
                "https://facebook.com/afribayadventures",
                "https://instagram.com/afribayadventures",
                "https://twitter.com/afribayadventures",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Safari Packages",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "TouristTrip",
                      name: "Premium Kenya Safari Tours",
                      description: "Luxury safari experiences in Kenya's top wildlife destinations",
                    },
                  },
                ],
              },
            }),
          }}
        />

        <HeroSection />
        <WelcomeBanner />
        <FeatureCarousel />
        <OfferPackages />
        <WhyChooseKenya />
        <AboutPreview />
        <Certifications />
        <FeaturedPackages />
        <Testimonials />
        <FinalCTA />
      </>
    </PageTransition>
  )
}