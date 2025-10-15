// Draggable before–after slider without external libs
"use client"

import { useRef, useState } from "react"

export default function BeforeAfter({
  before,
  after,
  alt,
}: {
  before: string
  after: string
  alt?: string
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [ratio, setRatio] = useState(0.5)

  function updateFromClientX(clientX: number) {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const r = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width))
    setRatio(r)
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden rounded-xl border border-border bg-card shadow-xl aspect-video cursor-ew-resize"
      onMouseMove={(e) => updateFromClientX(e.clientX)}
      onMouseEnter={(e) => updateFromClientX(e.clientX)}
      onTouchMove={(e) => updateFromClientX(e.touches[0].clientX)}
      onTouchStart={(e) => updateFromClientX(e.touches[0].clientX)}
      aria-label="Before and after slider"
      role="region"
    >
      <img
        src={after || "/placeholder.svg"}
        alt={alt || "After detailing"}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${ratio * 100}%` }}>
        <img
          src={before || "/placeholder.svg"}
          alt={alt || "Before detailing"}
          className="h-full w-full object-cover"
        />
      </div>
      <div
        className="absolute inset-y-0 z-10 flex w-1 -translate-x-1/2 cursor-ew-resize items-center justify-center bg-primary/80"
        style={{ left: `${ratio * 100}%` }}
        aria-hidden="true"
      >
        <div className="h-10 w-10 rounded-full border-2 border-black/30 bg-primary hive-glow" />
      </div>
    </div>
  )
}
