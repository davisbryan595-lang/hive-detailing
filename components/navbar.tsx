"use client"

import Image from "next/image"

const links = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
]

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md hive-glow">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
        <a href="#home" className="flex items-center gap-3">
          <Image
            src="https://cdn.builder.io/api/v1/image/assets%2Fe956acbb04e54fb896c83542bdb88b2d%2Fa266d742321b4ac3a057707133d6628c?format=webp&width=800"
            alt="Hive Detailing logo"
            width={200}
            height={50}
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

        <a href="#contact" className="btn-liquid" aria-label="Book Now">
          Book Now
        </a>
      </nav>
    </header>
  )
}
