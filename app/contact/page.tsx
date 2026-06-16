"use client"

import type React from "react"
import Head from "next/head"
import emailjs from "emailjs-com"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Facebook,
  Instagram,
  CheckCircle,
  MessageSquare,
  ArrowRight,
} from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    details: ["adventure@afribayke.com", "info@afribayke.com"],
    description: "Get in touch via email for detailed inquiries",
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+254 708 777 037", ""],
    description: "Speak directly with our safari experts",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["Nairobi", "Kenya, East Africa"],
    description: "Drop by our office for a personal consultation",
  },
  {
    icon: Clock,
    title: "Office Hours",
    details: ["Mon - Fri: 8:00 AM - 6:00 PM", "Sat: 9:00 AM - 4:00 PM"],
    description: "We're here when you need us",
  },
]

const faqs = [
  {
    question: "What's the best time to visit Kenya for safari?",
    answer:
      "The best time depends on what you want to see. For the Great Migration, visit July-October. For fewer crowds and good wildlife viewing, December-March is ideal. We can help you choose based on your preferences.",
  },
  {
    question: "Do I need any vaccinations for Kenya?",
    answer:
      "Yellow fever vaccination is required if coming from certain countries. We recommend consulting your doctor about malaria prophylaxis and other vaccinations. We'll provide a detailed health guide upon booking.",
  },
  {
    question: "What should I pack for a safari?",
    answer:
      "Pack neutral-colored clothing, comfortable walking shoes, sun protection, binoculars, and camera equipment. We'll send you a comprehensive packing list tailored to your specific safari and season.",
  },
  {
    question: "Are your safaris suitable for children?",
    answer:
      "Yes! We offer family-friendly safaris with age-appropriate activities. Most lodges welcome children, and we can arrange special experiences like junior ranger programs for young adventurers.",
  },
  {
    question: "What's included in your safari packages?",
    answer:
      "Our packages typically include accommodation, meals, game drives, park fees, and professional guides. International flights, visas, and personal expenses are usually excluded. Each package page lists specific inclusions.",
  },
  {
    question: "Can you customize a safari for our group?",
    answer:
      "We specialize in creating custom safaris tailored to your interests, budget, and schedule. Contact us to discuss your dream safari, and we'll make it happen.",
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    travelDates: "",
    groupSize: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const emailData = {
        to_email: "adventure@afribayke.com",
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
        travel_dates: formData.travelDates,
        group_size: formData.groupSize,
        contact_date: new Date().toLocaleDateString(),
      }

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_holstqx",
        process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID || "template_pz45zdc",
        emailData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "ddgR3tB6leGSXPaH_",
      )

      setIsSubmitted(true)

      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          travelDates: "",
          groupSize: "",
        })
      }, 3000)
    } catch (error) {
      console.error("Error sending contact email:", error)
      alert("There was an error sending your message. Please try again or contact us directly.")
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-[#F2EFED]">
      <Head>
        {/* ===== Primary SEO ===== */}
        <title>Contact Us | Afribay Kenya Safari — Plan Your Adventure</title>
        <meta
          name="description"
          content="Get in touch with Afribay Kenya Safari. Call +254 708 777 037, email adventure@afribayke.com, or fill in the form to plan your perfect Kenya safari."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://afribayke.com/contact" />
        <meta property="og:title" content="Contact Us | Afribay Kenya Safari" />
        <meta
          property="og:description"
          content="Reach our safari experts by phone, WhatsApp, or email. We reply within 24 hours."
        />
        <meta property="og:type" content="website" />

        {/* ===== Google tag (gtag.js) ===== */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-RG47BTJYSL" />
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

        {/* ===== JSON-LD Structured Data ===== */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              name: "Afribay Kenya Safari",
              url: "https://afribayke.com",
              telephone: "+254708777037",
              email: "adventure@afribayke.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Nairobi",
                addressCountry: "KE",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "08:00",
                  closes: "18:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "09:00",
                  closes: "16:00",
                },
              ],
            }),
          }}
        />
      </Head>

      <Navigation />

      {/* ── HERO ── */}
      <section aria-labelledby="contact-hero-heading" className="relative pt-24 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2F3B2F] via-[#3a4e3a] to-[#2a3d3d]" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, #7FB5B5 0%, transparent 50%), radial-gradient(circle at 85% 30%, #E8A17D 0%, transparent 40%)`,
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 bg-[#E8A17D]/20 border border-[#E8A17D]/30 text-[#E8A17D] text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            <MessageSquare className="h-3 w-3" />
            We'd Love to Hear From You
          </span>
          <h1
            id="contact-hero-heading"
            className="font-serif text-5xl md:text-7xl font-bold text-white leading-[1.05] mb-5"
          >
            Get In Touch
            <span className="block text-[#E8A17D]">Plan Your Safari.</span>
          </h1>
          <p className="text-lg text-white/75 max-w-2xl mx-auto leading-relaxed">
            Ready to embark on your Kenyan adventure? We're here to help you plan the perfect safari experience.
          </p>
        </div>
      </section>

      {/* ── CONTACT INFO CARDS ── */}
      <section aria-labelledby="contact-info-heading" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="contact-info-heading" className="sr-only">Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="text-center border-0 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-7">
                  <div className="w-14 h-14 bg-[#E8A17D]/15 rounded-2xl flex items-center justify-center mx-auto mb-5">
                    <info.icon className="h-6 w-6 text-[#E8A17D]" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#2F3B2F] mb-3">{info.title}</h3>
                  <div className="space-y-1 mb-3">
                    {info.details.map((detail, idx) =>
                      detail ? (
                        <p key={idx} className="text-sm text-stone-700 font-medium">
                          {detail}
                        </p>
                      ) : null
                    )}
                  </div>
                  <p className="text-xs text-stone-400 leading-relaxed">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORM + MAP ── */}
      <section aria-labelledby="contact-form-heading" className="py-16 bg-[#F2EFED]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            {/* Contact Form */}
            <Card className="border-0 rounded-2xl shadow-md">
              <CardHeader className="pb-2 px-8 pt-8">
                <CardTitle className="font-serif text-2xl text-[#2F3B2F]">Send Us a Message</CardTitle>
                <p className="text-sm text-stone-500">Fill out the form below and we'll get back to you within 24 hours.</p>
              </CardHeader>
              <CardContent className="px-8 pb-8">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="h-8 w-8 text-green-500" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-[#2F3B2F] mb-2">Message Sent!</h3>
                    <p className="text-stone-500 text-sm">Thank you for contacting us. We'll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5 mt-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-xs font-semibold text-[#2F3B2F] uppercase tracking-wider">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="mt-1.5 rounded-xl border-stone-200 bg-[#F2EFED] focus:ring-[#7FB5B5]"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-xs font-semibold text-[#2F3B2F] uppercase tracking-wider">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="mt-1.5 rounded-xl border-stone-200 bg-[#F2EFED] focus:ring-[#7FB5B5]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone" className="text-xs font-semibold text-[#2F3B2F] uppercase tracking-wider">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="mt-1.5 rounded-xl border-stone-200 bg-[#F2EFED] focus:ring-[#7FB5B5]"
                        />
                      </div>
                      <div>
                        <Label htmlFor="subject" className="text-xs font-semibold text-[#2F3B2F] uppercase tracking-wider">Subject *</Label>
                        <Select onValueChange={(value) => handleSelectChange("subject", value)}>
                          <SelectTrigger className="mt-1.5 rounded-xl border-stone-200 bg-[#F2EFED]">
                            <SelectValue placeholder="Select a subject" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">General Inquiry</SelectItem>
                            <SelectItem value="booking">Safari Booking</SelectItem>
                            <SelectItem value="custom">Custom Safari</SelectItem>
                            <SelectItem value="group">Group Booking</SelectItem>
                            <SelectItem value="support">Customer Support</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="travelDates" className="text-xs font-semibold text-[#2F3B2F] uppercase tracking-wider">Preferred Travel Dates</Label>
                        <Input
                          id="travelDates"
                          name="travelDates"
                          value={formData.travelDates}
                          onChange={handleInputChange}
                          placeholder="e.g., July 2025"
                          className="mt-1.5 rounded-xl border-stone-200 bg-[#F2EFED] focus:ring-[#7FB5B5]"
                        />
                      </div>
                      <div>
                        <Label htmlFor="groupSize" className="text-xs font-semibold text-[#2F3B2F] uppercase tracking-wider">Group Size</Label>
                        <Select onValueChange={(value) => handleSelectChange("groupSize", value)}>
                          <SelectTrigger className="mt-1.5 rounded-xl border-stone-200 bg-[#F2EFED]">
                            <SelectValue placeholder="Select group size" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1-2">1-2 people</SelectItem>
                            <SelectItem value="3-4">3-4 people</SelectItem>
                            <SelectItem value="5-8">5-8 people</SelectItem>
                            <SelectItem value="9+">9+ people</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-xs font-semibold text-[#2F3B2F] uppercase tracking-wider">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        placeholder="Tell us about your dream safari..."
                        className="mt-1.5 rounded-xl border-stone-200 bg-[#F2EFED] focus:ring-[#7FB5B5] resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#E8A17D] hover:bg-[#7FB5B5] text-white rounded-xl transition-colors duration-300 font-medium"
                      size="lg"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Map & Additional Info */}
            <div className="space-y-6">
              {/* Google Maps Embed */}
              <Card className="border-0 rounded-2xl shadow-md overflow-hidden">
                <CardContent className="p-0">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.784672156372!2d36.83164677610345!3d-1.267590936013744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f16dc9f2039cb%3A0x970dde5d44f9d97d!2sShowbe%20Plaza%20-%20Block%20C!5e0!3m2!1sen!2ske!4v1723978400000"
                    width="100%"
                    height="256"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Afribay Office Location"
                  />
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="border-0 rounded-2xl shadow-md">
                <CardHeader className="pb-2">
                  <CardTitle className="font-serif text-xl text-[#2F3B2F]">Follow Our Adventures</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-stone-500 mb-4 leading-relaxed">
                    Stay connected with us on social media for the latest safari updates, wildlife photos, and travel inspiration.
                  </p>
                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2 rounded-xl border-stone-200 hover:border-[#7FB5B5] hover:text-[#7FB5B5] bg-transparent transition-colors"
                    >
                      <Facebook className="h-4 w-4" />
                      Facebook
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-2 rounded-xl border-stone-200 hover:border-[#E8A17D] hover:text-[#E8A17D] bg-transparent transition-colors"
                    >
                      <Instagram className="h-4 w-4" />
                      Instagram
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <Card className="border-0 rounded-2xl shadow-md">
                <CardHeader className="pb-2">
                  <CardTitle className="font-serif text-xl text-[#2F3B2F]">Need Immediate Help?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-stone-500 mb-4 leading-relaxed">
                    For urgent inquiries or last-minute bookings, call us directly or send a WhatsApp message.
                  </p>
                  <div className="space-y-3">
                    <Button
                      variant="outline"
                      className="w-full justify-start rounded-xl border-[#E8A17D] text-[#E8A17D] hover:bg-[#E8A17D] hover:text-white bg-transparent transition-colors duration-300"
                    >
                      <Phone className="h-4 w-4 mr-2" />
                      Call: +254 708 777 037
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-start rounded-xl border-[#7FB5B5] text-[#7FB5B5] hover:bg-[#7FB5B5] hover:text-white bg-transparent transition-colors duration-300"
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      WhatsApp: +254 708 777 037
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section aria-labelledby="faq-heading" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-widest text-[#7FB5B5] font-semibold mb-3">Got Questions?</p>
            <h2
              id="faq-heading"
              className="font-serif text-3xl md:text-4xl font-bold text-[#2F3B2F] mb-4"
            >
              Frequently Asked Questions
            </h2>
            <p className="text-stone-500">Quick answers to common questions about Kenya safaris</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card
                key={index}
                className="border-0 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  <h3 className="font-serif text-base font-bold text-[#2F3B2F] mb-2">{faq.question}</h3>
                  <p className="text-sm text-stone-500 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-stone-400 text-sm mb-4">Still have questions?</p>
            <Button
              asChild
              className="bg-[#E8A17D] hover:bg-[#7FB5B5] text-white rounded-xl px-7 transition-colors duration-300"
            >
              <a href="#contact-form">
                Contact Us
                <ArrowRight className="h-4 w-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>

    </main>
  )
}