export default function ServicesPage() {
  const services = [
    {
      title: "Maintenance Wash",
      price: "from $60",
      bullets: ["pH-balanced hand wash", "Wheels & tires dressed", "Exterior glass"],
    },
    {
      title: "Interior Refresh",
      price: "from $120",
      bullets: ["Vacuum & dusting", "Steam clean touch points", "Plastic reconditioning"],
    },
    {
      title: "Paint Correction",
      price: "quote",
      bullets: ["Single or multi‑stage machine polish", "Defect removal and gloss restoration", "Panel wipe & sealant"],
    },
    {
      title: "Ceramic Coating",
      price: "quote",
      bullets: [
        "Professional‑grade coating",
        "Hydrophobic, UV‑resistant protection",
        "Registered warranty where applicable",
      ],
    },
  ]
  return (
    <main className="min-h-dvh bg-background text-foreground">
      <div className="container mx-auto max-w-6xl px-6 py-12 md:py-20">
        <h1 className="text-4xl font-semibold tracking-tight">Services</h1>
        <p className="mt-3 text-muted-foreground">Transparent packages tailored to your vehicle and goals.</p>
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {services.map((s) => (
            <section key={s.title} className="rounded-lg border border-border bg-card p-6">
              <header className="flex items-baseline justify-between">
                <h2 className="text-xl font-semibold">{s.title}</h2>
                <span className="text-sm text-muted-foreground">{s.price}</span>
              </header>
              <ul className="mt-4 list-disc pl-5 text-sm leading-relaxed text-muted-foreground">
                {s.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </main>
  )
}
