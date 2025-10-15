export default function Services() {
  const cards = [
    {
      title: "Interior Detailing",
      desc: "Deep clean, steam, and protect upholstery, carpets, plastics, and leather.",
      img: "https://images.pexels.com/photos/6870395/pexels-photo-6870395.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1200",
    },
    {
      title: "Exterior Detailing",
      desc: "Decontamination wash, clay, polish, and sealant for a brilliant finish.",
      img: "https://images.pexels.com/photos/4870707/pexels-photo-4870707.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1200",
    },
    {
      title: "Ceramic Coating",
      desc: "Durable hydrophobic protection with intense gloss and easier maintenance.",
      img: "https://images.pexels.com/photos/97075/pexels-photo-97075.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1200",
    },
    {
      title: "Engine Bay Cleaning",
      desc: "Safe degreasing and dressing to renew your engine bay’s appearance.",
      img: "https://images.pexels.com/photos/4489736/pexels-photo-4489736.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1200",
    },
  ]

  return (
    <section id="services" className="section">
      <div className="mx-auto max-w-6xl px-4">
        <header className="mb-8 text-center">
          <h2 className="text-3xl font-semibold md:text-4xl">Premium Detailing Services</h2>
          <p className="mx-auto mt-2 max-w-2xl text-muted-foreground">
            Select from our most popular packages or contact us for a custom quote.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <article key={c.title} className="card will-reveal group">
              <div className="relative h-44 overflow-hidden rounded-t-xl">
                <img
                  src={c.img || "/placeholder.svg"}
                  alt={c.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="space-y-2 p-4">
                <h3 className="text-lg font-semibold">{c.title}</h3>
                <p className="text-sm text-muted-foreground">{c.desc}</p>
                <a href="#contact" className="btn-link">
                  Get Quote →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
