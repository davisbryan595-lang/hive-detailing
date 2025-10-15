const services = [
  {
    title: "Exterior Wash",
    desc: "Two-bucket wash, wheel faces, tire dressing, streak-free dry.",
  },
  {
    title: "Interior Detail",
    desc: "Vacuum, steam clean touch-points, plastics dressed, streak-free glass.",
  },
  {
    title: "Paint Correction",
    desc: "Single or multi-stage correction to restore gloss and clarity.",
  },
  {
    title: "Ceramic Coating",
    desc: "Durable hydrophobic protection with rich gloss and easy maintenance.",
  },
  {
    title: "Engine Bay",
    desc: "Degrease, rinse, and dress plastics for a crisp factory look.",
  },
  {
    title: "Mobile Service",
    desc: "We come to you—driveway-friendly setups available by appointment.",
  },
]

export function ServicesGrid() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((s) => (
        <article key={s.title} className="rounded-lg border border-border bg-card p-6">
          <h3 className="text-lg font-semibold">{s.title}</h3>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
        </article>
      ))}
    </div>
  )
}
