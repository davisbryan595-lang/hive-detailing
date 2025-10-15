"use client"

import { useState } from "react"
import BeforeAfter from "@/components/ui/before-after-slider"

const images = [
  "https://images.pexels.com/photos/4870707/pexels-photo-4870707.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1600",
  "https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1600",
  "https://images.pexels.com/photos/6870395/pexels-photo-6870395.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1600",
  "https://images.pexels.com/photos/1028741/pexels-photo-1028741.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1600",
  "https://images.pexels.com/photos/97075/pexels-photo-97075.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1600",
  "https://images.pexels.com/photos/4489736/pexels-photo-4489736.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1600",
]

export default function Gallery() {
  const [lightbox, setLightbox] = useState<string | null>(null)

  return (
    <section id="gallery" className="section min-h-dvh flex items-center">
      <div className="mx-auto w-full max-w-7xl px-4">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-semibold md:text-4xl">Gallery</h2>
          <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
            Recent details and ceramic coating transformations.
          </p>
        </header>

        <div className="mb-10 grid items-center gap-8 md:grid-cols-2">
          <div className="will-reveal">
            <BeforeAfter
              before="https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1600"
              after="https://images.pexels.com/photos/4870707/pexels-photo-4870707.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1600"
              alt="Before and after detailing"
            />
          </div>
          <div className="will-reveal">
            <h3 className="text-2xl font-semibold">Real Results</h3>
            <p className="mt-3 text-muted-foreground">
              See the difference professional paint correction and interior care can make. Slide to compare the
              transformation, then explore the gallery below for more examples of our work across Davis County & Salt
              Lake City.
            </p>
          </div>
        </div>

        <div className="grid auto-rows-[14px] grid-cols-2 gap-3 md:grid-cols-3">
          {images.map((src, i) => (
            <button
              key={src}
              onClick={() => setLightbox(src)}
              className={`group relative overflow-hidden rounded-xl border border-border bg-card shadow-sm will-reveal ${i % 3 === 0 ? "row-span-7" : "row-span-5"}`}
              aria-label="Open image"
            >
              <img
                src={src || "/placeholder.svg"}
                alt="Detailing result"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </button>
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[100] grid place-items-center bg-black/80 p-4"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
        >
          <img
            src={lightbox || "/placeholder.svg"}
            alt="Large view"
            className="max-h-[85vh] w-auto max-w-[90vw] rounded-xl shadow-2xl"
          />
        </div>
      )}
    </section>
  )
}
