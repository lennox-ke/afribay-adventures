import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#2F3B2F] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-serif text-2xl font-bold mb-4">Afribay Adventures</h3>
            <p className="text-[#F2EFED] mb-6 leading-relaxed">
              Your trusted partner for authentic Kenyan safari experiences. We create unforgettable journeys that
              connect you with Africa's incredible wildlife and rich culture.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-[#E8A17D] hover:text-[#7FB5B5] cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 text-[#E8A17D] hover:text-[#7FB5B5] cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-[#F2EFED] hover:text-[#E8A17D] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#F2EFED] hover:text-[#E8A17D] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/packages/premium" className="text-[#F2EFED] hover:text-[#E8A17D] transition-colors">
                  Safari Packages
                </Link>
              </li>
              <li>
                <Link href="/destinations" className="text-[#F2EFED] hover:text-[#E8A17D] transition-colors">
                  Destinations
                </Link>
              </li>
              <li>
                <Link href="/accommodations" className="text-[#F2EFED] hover:text-[#E8A17D] transition-colors">
                  Accommodations
                </Link>
              </li>
              <li>
                <Link href="/booking" className="text-[#F2EFED] hover:text-[#E8A17D] transition-colors">
                  Book Now
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#F2EFED] hover:text-[#E8A17D] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#E8A17D]" />
                <span className="text-[#F2EFED]">adventure@afribayke.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#E8A17D]" />
                <span className="text-[#F2EFED]">+254 708 777 037</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-[#E8A17D]" />
                <span className="text-[#F2EFED]">Nairobi, Kenya</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-[#F2EFED]">© 2026 Afribay Adventures. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
