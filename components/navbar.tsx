"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

const links = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${scrolled ? "bg-nav/90 backdrop-blur-md hive-glow" : "bg-transparent"}`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
        <a href="#home" className="flex items-center gap-3">
          <Image
            src="/images/hive-logo.jpg"
            alt="Hive Detailing logo"
            width={160}
            height={40}
            className="h-8 w-auto md:h-10"
            priority
          />
        </a>

        <ul className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="nav-link relative px-1 py-1 text-sm tracking-wide transition-all">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="btn-liquid hidden md:inline-block" aria-label="Book Now">
          Book Now
        </a>

        <a href="#contact" className="btn-liquid md:hidden text-sm px-3 py-2" aria-label="Book Now">
          Book
        </a>
      </nav>
    </header>
  )
}
