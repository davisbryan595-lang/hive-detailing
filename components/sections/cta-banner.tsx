import Link from "next/link"

export function CtaBanner() {
  return (
    <section aria-labelledby="cta" className="py-12 md:py-16">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="rounded-xl border border-border bg-primary/10 p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 id="cta" className="text-pretty text-2xl md:text-3xl font-semibold tracking-tight">
              Ready for showroom shine?
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">Get a fast, no‑pressure quote for your vehicle today.</p>
          </div>
          <div className="flex gap-3">
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-5 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              View Pricing
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
