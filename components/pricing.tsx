import Link from "next/link"

const tiers = [
  {
    name: "Essentials",
    price: 149,
    desc: "Exterior wash + interior refresh for compact vehicles.",
    features: ["Hand wash & dry", "Interior vacuum", "Glass & plastics", "Tire dressing"],
    service: "Exterior Detailing",
  },
  {
    name: "Signature",
    price: 299,
    desc: "Deep clean in & out for most vehicles.",
    features: ["Decon wash", "Steam touch points", "Single‑step gloss boost", "Sealant protection"],
    highlighted: true,
    service: "Interior Detailing",
  },
  {
    name: "Correction + Coat",
    price: 899,
    desc: "Paint correction with entry ceramic coating.",
    features: ["Single/Multi‑stage correction", "Professional coating", "Warranty eligible", "Aftercare plan"],
    service: "Ceramic Coating",
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="section min-h-dvh flex items-center">
      <div className="mx-auto w-full max-w-6xl px-4">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-semibold md:text-4xl">Transparent Pricing</h2>
          <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">Vehicle size and condition may affect totals. Choose a plan to prefill the contact form.</p>
        </header>
        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((t) => {
            const query = `/?plan=${encodeURIComponent(t.name)}&price=${encodeURIComponent(String(t.price))}&service=${encodeURIComponent(t.service)}&desc=${encodeURIComponent(t.desc)}#contact`
            return (
              <article key={t.name} className={`rounded-2xl border border-border bg-card p-6 shadow-xl ${t.highlighted ? "ring-1 ring-primary" : ""}`}>
                <h3 className="text-xl font-semibold">{t.name}</h3>
                <p className="mt-1 text-3xl">${t.price}</p>
                <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-2"><span className="text-primary">•</span><span>{f}</span></li>
                  ))}
                </ul>
                <Link href={query} className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-95">
                  Choose {t.name}
                </Link>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
