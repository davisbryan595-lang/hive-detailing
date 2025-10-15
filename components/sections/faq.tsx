export function Faq() {
  const faqs = [
    {
      q: "How long does a detail take?",
      a: "Most appointments range from 2–6 hours depending on package and vehicle size.",
    },
    {
      q: "Do you offer mobile service?",
      a: "Yes, we can come to your location when water and power are available, or we can bring a generator upon request.",
    },
    {
      q: "What’s the benefit of ceramic coating?",
      a: "It provides durable, hydrophobic protection, easier washing, and long‑lasting gloss when maintained properly.",
    },
  ]
  return (
    <div className="space-y-3">
      {faqs.map((f) => (
        <details key={f.q} className="rounded-lg border border-border bg-card p-4">
          <summary className="cursor-pointer font-medium">{f.q}</summary>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
        </details>
      ))}
    </div>
  )
}
