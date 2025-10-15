import Navbar from "@/components/navbar"
import Services from "@/components/services"
import Pricing from "@/components/pricing"
import Gallery from "@/components/gallery"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import ScrollTop from "@/components/scroll-top"

export default function HomePage() {
  return (
    <main className="min-h-dvh flex flex-col bg-background text-foreground">
      <Navbar />
      {/* Hero */}
      <section id="home" className="relative isolate overflow-hidden pt-24 md:pt-28 min-h-dvh hero-detailing-bg scroll-mt-24 md:scroll-mt-28">
        <div className="absolute inset-0 bg-black/45" />
        {/* subtle animated glows */}
        <div className="pointer-events-none absolute -top-32 right-1/4 h-72 w-72 rounded-full bg-primary/15 blur-3xl animate-float-slow" />
        <div className="pointer-events-none absolute -bottom-32 left-1/4 h-72 w-72 rounded-full bg-primary/10 blur-3xl animate-float" />

        <div className="container relative z-10 mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="will-reveal max-w-2xl rounded-2xl border border-white/10 bg-black/40 p-6 shadow-2xl backdrop-blur-md md:p-8">
              <h1 className="text-pretty text-4xl font-semibold tracking-tight md:text-5xl">Revive Your Ride — Precision Detailing. Ceramic Brilliance.</h1>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">Premium interior, exterior, and ceramic coating services throughout Davis County & Salt Lake City, Utah.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#contact" className="btn-liquid">Get a Free Quote</a>
                <a href="#services" className="btn-outline">Explore Services</a>
              </div>
              <ul className="mt-8 grid grid-cols-1 gap-3 text-sm text-muted-foreground sm:grid-cols-2">
                <li className="rounded-lg border border-white/10 bg-white/5 p-3">Mobile or in‑shop service</li>
                <li className="rounded-lg border border-white/10 bg-white/5 p-3">Paint correction & ceramic coating</li>
                <li className="rounded-lg border border-white/10 bg-white/5 p-3">Interior restoration & odor neutralization</li>
                <li className="rounded-lg border border-white/10 bg-white/5 p-3">Serving Davis County & SLC</li>
              </ul>
            </div>
            <div className="will-reveal hidden md:block" />
          </div>
        </div>
      </section>

      {/* Services */}
      <Services />

      {/* Pricing */}
      <Pricing />

      {/* Gallery */}
      <Gallery />

      {/* Testimonials */}
      <Testimonials />

      {/* Contact */}
      <Contact />

      <Footer />
      <ScrollTop />
    </main>
  )
}
