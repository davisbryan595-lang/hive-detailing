export function ProcessSteps() {
  const steps = [
    { t: "Assessment", d: "We inspect your vehicle and tailor a package to your goals and budget." },
    { t: "Prep", d: "Thorough wash, decontamination, and masking to protect sensitive areas." },
    { t: "Treatment", d: "Interior refresh, paint correction, and protection applied with care." },
    { t: "Final Check", d: "Quality control, aftercare tips, and photos of the finished result." },
  ]
  return (
    <section aria-labelledby="process" className="py-16 md:py-24">
      <div className="container mx-auto max-w-6xl px-6">
        <h2 id="process" className="text-pretty text-3xl md:text-4xl font-semibold tracking-tight mb-8">
          Our 4‑Step Process
        </h2>
        <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <li key={s.t} className="rounded-lg border border-border bg-card p-6">
              <div className="text-sm text-muted-foreground">Step {i + 1}</div>
              <h3 className="mt-1 font-semibold">{s.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
