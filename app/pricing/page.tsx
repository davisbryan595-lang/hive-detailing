import Link from "next/link"

export default function PricingPage() {
  const tiers = [
    {
      name: "Essentials",
      price: "$149",
      desc: "Exterior wash + interior refresh for compact vehicles.",
      features: ["Hand wash & dry", "Interior vacuum", "Glass & plastics", "Tire dressing"],
    },
    {
      name: "Signature",
      price: "$299",
      desc: "Deep clean in & out for most vehicles.",
      features: ["Decon wash", "Steam touch points", "Single‑step gloss boost", "Sealant protection"],
      highlighted: true,
    },
    {
      name: "Ultimate",
      price: "Custom",
      desc: "Multi‑stage correction + ceramic coating.",
      features: ["Paint correction", "Professional coating", "Warranty eligible", "Aftercare plan"],
    },
  ]
  return (
    <main className="min-h-dvh bg-background text-foreground">
      <div className="container mx-auto max-w-6xl px-6 py-12 md:py-20">
        <h1 className="text-4xl font-semibold tracking-tight">Pricing</h1>
        <p className="mt-3 text-muted-foreground">
          Vehicle size and condition may affect final pricing. Request a quote for exact totals.
        </p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {tiers.map((t) => (
            <section
              key={t.name}
              className={`rounded-lg border border-border bg-card p-6 ${t.highlighted ? "ring-1 ring-primary" : ""}`}
            >
              <h2 className="text-xl font-semibold">{t.name}</h2>
              <p className="mt-1 text-2xl">{t.price}</p>
              <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
              <ul className="mt-4 list-disc pl-5 text-sm leading-relaxed text-muted-foreground">
                {t.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-95"
              >
                Book this
              </Link>
            </section>
          ))}
        </div>
      </div>
    </main>
  )
}
