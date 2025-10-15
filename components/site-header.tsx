"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

const links = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${scrolled ? "bg-nav/90 backdrop-blur-md hive-glow" : "bg-transparent"}`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#home" className="flex items-center gap-3" aria-label="Hive Detailing home">
          <Image src="/images/hive-logo.jpg" alt="Hive Detailing logo" width={150} height={40} priority />
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">
              {l.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="btn-liquid">
          Book Now
        </a>
      </div>
    </header>
  )
}
