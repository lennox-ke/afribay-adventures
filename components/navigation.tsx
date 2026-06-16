/* /components/navigation.tsx */
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobilePkgOpen, setMobilePkgOpen] = useState(false);
  const [mobileAccOpen, setMobileAccOpen] = useState(false);
  const [mobileEventsOpen, setMobileEventsOpen] = useState(false);
  const pathname = usePathname();

  const glassBg = "bg-[#F2EFED]/80 backdrop-blur-md";
  const textColor = "text-[#2F3B2F]";
  const accent = "hover:text-[#E8A17D]";

  const pkgSlugs = ["premium", "luxury", "mid-range", "offers"];
  const accSlugs = [
    "masai-mara", "amboseli", "samburu", "mombasa", "zanzibar",
    "diani-beach", "nakuru", "naivasha", "lamu", "tsavo",
    "nairobi", "malindi", "watamu",
  ];
  const eventSlugs = [
    "global-data-festival-2026", "magical-kenya-travel-expo-2026",
    "kata-convention-2026", "agritec-africa-2026",
    "africa-food-show-kenya-2026", "aviadev-africa-2026",
    "nairobi-international-trade-fair-2026", "big-5-construct-kenya-2026",
    "tourism-east-africa-regional-expo-2026", "ketiba-2026",
  ];

  const close = () => setIsOpen(false);

  // Active-state helpers — small underline indicator so people always know
  // which section of a fairly deep site they're in.
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname?.startsWith(href);

  const navLinkClass = (href: string) =>
    `relative py-1 transition-colors ${textColor} ${accent} ${
      isActive(href) ? "text-[#E8A17D]" : ""
    } after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-[#E8A17D] after:transition-all after:duration-300 ${
      isActive(href) ? "after:w-full" : "after:w-0 hover:after:w-full"
    }`;

  const dropdownTriggerClass = (active: boolean) =>
    `relative flex items-center py-1 transition-colors ${textColor} ${accent} ${
      active ? "text-[#E8A17D]" : ""
    } after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-[#E8A17D] after:transition-all after:duration-300 ${
      active ? "after:w-full" : "after:w-0"
    }`;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${glassBg} shadow-md`}>
      <div className="max-w-7xl mx-auto px-2 sm:px-3 lg:px-2">
        {/* Desktop: logo left, nav right. Mobile: hamburger left, logo centre. */}
        <div className="flex items-center justify-between h-20">

          {/* ── MOBILE HAMBURGER — left on mobile, hidden on desktop ── */}
          <div className="md:hidden pl-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen((o) => !o)}
              className={textColor}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {/* ── LOGO — centred on mobile via absolute, pushed to outer edge on desktop ── */}
          <div className="absolute left-1/2 -translate-x-1/2 md:static md:left-auto md:translate-x-0 md:ml-2 lg:ml-4">
            <Link href="/" className="flex items-center">
              <Image
                src="https://afribay.vercel.app/logo.png"
                alt="Afribay Adventures"
                width={240}
                height={120}
                priority
                className="object-contain"
              />
            </Link>
          </div>

          {/* ── DESKTOP NAV — far right ── */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className={navLinkClass("/")}>
              Home
            </Link>
            <Link href="/about" className={navLinkClass("/about")}>
              About
            </Link>

            {/* Packages dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className={dropdownTriggerClass(isActive("/packages"))}>
                Packages <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white shadow-lg border-0 rounded-xl p-2 min-w-[200px]">
                <p className="px-3 pt-1 pb-2 text-[10px] font-semibold uppercase tracking-widest text-stone-400">
                  Browse by tier
                </p>
                {pkgSlugs.map((s) => (
                  <DropdownMenuItem key={s} asChild>
                    <Link
                      href={`/packages/${s}`}
                      className="text-[#2F3B2F] hover:text-[#E8A17D] hover:bg-[#F2EFED] rounded-lg cursor-pointer capitalize"
                    >
                      {s.replace("-", " ")} Packages
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/destinations" className={navLinkClass("/destinations")}>
              Destinations
            </Link>

            {/* Accommodations dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className={dropdownTriggerClass(isActive("/accommodations"))}>
                Accommodations <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white shadow-lg border-0 rounded-xl p-2 min-w-[220px] max-h-[60vh] overflow-y-auto">
                <DropdownMenuItem asChild>
                  <Link
                    href="/accommodations"
                    className="text-[#2F3B2F] hover:text-[#E8A17D] hover:bg-[#F2EFED] rounded-lg cursor-pointer font-semibold"
                  >
                    All Accommodations
                  </Link>
                </DropdownMenuItem>
                <div className="h-px bg-stone-100 my-1.5" />
                <p className="px-3 pb-2 text-[10px] font-semibold uppercase tracking-widest text-stone-400">
                  By location
                </p>
                {accSlugs.map((s) => (
                  <DropdownMenuItem key={s} asChild>
                    <Link
                      href={`/accommodations/${s}`}
                      className="text-[#2F3B2F] hover:text-[#E8A17D] hover:bg-[#F2EFED] rounded-lg cursor-pointer capitalize"
                    >
                      {s.replace("-", " ")} Lodges
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Events dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className={dropdownTriggerClass(isActive("/events"))}>
                Events <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white shadow-lg border-0 rounded-xl p-2 min-w-[260px] max-h-[60vh] overflow-y-auto">
                <DropdownMenuItem asChild>
                  <Link
                    href="/events"
                    className="text-[#2F3B2F] hover:text-[#E8A17D] hover:bg-[#F2EFED] rounded-lg cursor-pointer font-semibold"
                  >
                    All Events 2026
                  </Link>
                </DropdownMenuItem>
                <div className="h-px bg-stone-100 my-1.5" />
                <p className="px-3 pb-2 text-[10px] font-semibold uppercase tracking-widest text-stone-400">
                  Upcoming in Kenya
                </p>
                {eventSlugs.map((s) => (
                  <DropdownMenuItem key={s} asChild>
                    <Link
                      href={`/events/${s}`}
                      className="text-[#2F3B2F] hover:text-[#E8A17D] hover:bg-[#F2EFED] rounded-lg cursor-pointer capitalize"
                    >
                      {s
                        .replace(/-2026$/, "")
                        .replace(/-/g, " ")
                        .replace("kata", "KATA")
                        .replace("ketiba", "KETIBA")
                        .replace("mkte", "MKTE")
                        .replace("ksec", "KSEC")}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/blog" className={navLinkClass("/blog")}>
              Blogs
            </Link>
            <Link href="/contact" className={navLinkClass("/contact")}>
              Contact
            </Link>

            <Button
              asChild
              className="bg-[#E8A17D] hover:bg-[#d4906c] text-white transition-colors duration-300 rounded-full px-6 md:mr-2 lg:mr-4"
            >
              <Link href="/booking">Book Now</Link>
            </Button>
          </div>

          {/* Spacer — keeps mobile layout balanced (hamburger left, logo centre, empty right) */}
          <div className="md:hidden w-10 pr-1" />

        </div>

        {/* ── MOBILE DRAWER ── */}
        {isOpen && (
          <div className={`md:hidden ${glassBg} rounded-xl shadow-md mt-2 mb-2 max-h-[75vh] overflow-y-auto border border-stone-200/50`}>
            <div className="px-2 pt-2 pb-4 space-y-1">
              <Link
                href="/"
                className={`block px-3 py-2 rounded-lg ${textColor} ${accent} ${isActive("/") ? "bg-[#E8A17D]/10 text-[#E8A17D] font-semibold" : ""}`}
                onClick={close}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`block px-3 py-2 rounded-lg ${textColor} ${accent} ${isActive("/about") ? "bg-[#E8A17D]/10 text-[#E8A17D] font-semibold" : ""}`}
                onClick={close}
              >
                About
              </Link>

              {/* Mobile Packages accordion */}
              <div className="px-3 py-2">
                <button
                  onClick={() => setMobilePkgOpen((v) => !v)}
                  className={`w-full flex items-center justify-between ${textColor} font-medium ${isActive("/packages") ? "text-[#E8A17D]" : ""}`}
                >
                  <span>Packages</span>
                  {mobilePkgOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </button>
                {mobilePkgOpen && (
                  <div className="pl-4 mt-2 space-y-1">
                    {pkgSlugs.map((s) => (
                      <Link
                        key={s}
                        href={`/packages/${s}`}
                        className={`block py-1 text-sm ${textColor} ${accent} capitalize`}
                        onClick={close}
                      >
                        {s.replace("-", " ")} Packages
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/destinations"
                className={`block px-3 py-2 rounded-lg ${textColor} ${accent} ${isActive("/destinations") ? "bg-[#E8A17D]/10 text-[#E8A17D] font-semibold" : ""}`}
                onClick={close}
              >
                Destinations
              </Link>

              {/* Mobile Accommodations accordion */}
              <div className="px-3 py-2">
                <button
                  onClick={() => setMobileAccOpen((v) => !v)}
                  className={`w-full flex items-center justify-between ${textColor} font-medium ${isActive("/accommodations") ? "text-[#E8A17D]" : ""}`}
                >
                  <span>Accommodations</span>
                  {mobileAccOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </button>
                {mobileAccOpen && (
                  <div className="pl-4 mt-2 space-y-1">
                    <Link href="/accommodations" className={`block py-1 text-sm ${textColor} ${accent} font-semibold`} onClick={close}>
                      All Accommodations
                    </Link>
                    {accSlugs.map((s) => (
                      <Link
                        key={s}
                        href={`/accommodations/${s}`}
                        className={`block py-1 text-sm ${textColor} ${accent} capitalize`}
                        onClick={close}
                      >
                        {s.replace("-", " ")} Lodges
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Events accordion */}
              <div className="px-3 py-2">
                <button
                  onClick={() => setMobileEventsOpen((v) => !v)}
                  className={`w-full flex items-center justify-between ${textColor} font-medium ${isActive("/events") ? "text-[#E8A17D]" : ""}`}
                >
                  <span>Events</span>
                  {mobileEventsOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </button>
                {mobileEventsOpen && (
                  <div className="pl-4 mt-2 space-y-1">
                    <Link href="/events" className={`block py-1 text-sm ${textColor} ${accent} font-semibold`} onClick={close}>
                      All Events 2026
                    </Link>
                    {eventSlugs.map((s) => (
                      <Link
                        key={s}
                        href={`/events/${s}`}
                        className={`block py-1 text-sm ${textColor} ${accent} capitalize`}
                        onClick={close}
                      >
                        {s
                          .replace(/-2026$/, "")
                          .replace(/-/g, " ")
                          .replace("kata", "KATA")
                          .replace("ketiba", "KETIBA")}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/blog"
                className={`block px-3 py-2 rounded-lg ${textColor} ${accent} ${isActive("/blog") ? "bg-[#E8A17D]/10 text-[#E8A17D] font-semibold" : ""}`}
                onClick={close}
              >
                Blogs
              </Link>
              <Link
                href="/contact"
                className={`block px-3 py-2 rounded-lg ${textColor} ${accent} ${isActive("/contact") ? "bg-[#E8A17D]/10 text-[#E8A17D] font-semibold" : ""}`}
                onClick={close}
              >
                Contact
              </Link>

              <div className="px-3 py-2">
                <Button asChild className="w-full bg-[#E8A17D] hover:bg-[#d4906c] text-white rounded-xl">
                  <Link href="/booking" onClick={close}>Book Now</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}