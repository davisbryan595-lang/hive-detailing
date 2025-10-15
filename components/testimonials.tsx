"use client"

import { useEffect, useState } from "react"

const DATA = [
  {
    name: "Megan L.",
    text: "Nick brought my SUV back to life. Interior looks brand new and the ceramic really pops!",
    rating: 5,
    avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=200",
  },
  {
    name: "Jacob H.",
    text: "Best detail I’ve had. On-time, professional, and the finish is incredibly slick.",
    rating: 5,
    avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=200",
  },
  {
    name: "Alissa K.",
    text: "Engine bay looks amazing and the cabin smells fresh. Highly recommend Hive Detailing!",
    rating: 5,
    avatar: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=200",
  },
]

export default function Testimonials() {
  const [idx, setIdx] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % DATA.length), 5000)
    return () => clearInterval(id)
  }, [])

  const t = DATA[idx]

  return (
    <section id="testimonials" className="section min-h-dvh flex items-center">
      <div className="mx-auto max-w-4xl px-4 text-center will-reveal">
        <h2 className="text-3xl font-semibold md:text-4xl">What Clients Say</h2>
        <div className="mt-6 rounded-2xl border border-border bg-card p-6 shadow-xl transition-transform">
          <img
            src={t.avatar || "/placeholder.svg"}
            alt={`${t.name} avatar`}
            className="mx-auto h-16 w-16 rounded-full ring-2 ring-primary/50"
          />
          <p className="mx-auto mt-4 max-w-2xl text-lg">“{t.text}”</p>
          <div className="mt-3 text-primary">{"★".repeat(t.rating)}</div>
          <div className="mt-2 text-muted-foreground">— {t.name}</div>
          <div className="mt-4 flex justify-center gap-2">
            {DATA.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className={`h-2 w-6 rounded-full transition-all ${i === idx ? "bg-primary" : "bg-muted"}`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
