"use client"

import { useEffect, useState } from "react"

export default function ScrollTop() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  if (!show) return null
  return (
    <button
      className="fixed bottom-6 right-6 z-50 rounded-full bg-primary px-4 py-2 text-black hive-glow transition-transform hover:-translate-y-0.5"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
    >
      Top
    </button>
  )
}
