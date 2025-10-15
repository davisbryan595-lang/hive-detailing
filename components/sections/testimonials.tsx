export function Testimonials() {
  const quotes = [
    {
      q: "My SUV looks brand new. The ceramic coating is incredible in the rain.",
      a: "Jordan P.",
    },
    {
      q: "On-time, honest pricing, and meticulous interior work. Highly recommend.",
      a: "Casey R.",
    },
    {
      q: "Swirls gone and the paint pops again. Worth every penny.",
      a: "Sam T.",
    },
  ]
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {quotes.map((item) => (
        <figure key={item.a} className="rounded-lg border border-border bg-card p-6">
          <blockquote className="text-pretty">“{item.q}”</blockquote>
          <figcaption className="mt-3 text-sm text-muted-foreground">— {item.a}</figcaption>
        </figure>
      ))}
    </div>
  )
}
