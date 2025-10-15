import Navbar from "@/components/navbar"
import BeforeAfter from "@/components/ui/before-after-slider"
import Services from "@/components/services"
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
      <section id="home" className="relative isolate overflow-hidden pt-24 md:pt-28">
        {/* subtle animated glows */}
        <div className="pointer-events-none absolute -top-32 right-1/4 h-72 w-72 rounded-full bg-primary/15 blur-3xl animate-float-slow" />
        <div className="pointer-events-none absolute -bottom-32 left-1/4 h-72 w-72 rounded-full bg-primary/10 blur-3xl animate-float" />

        <div className="container mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div className="will-reveal">
              <h1 className="text-pretty text-4xl font-semibold tracking-tight md:text-5xl">
                Revive Your Ride — Precision Detailing. Ceramic Brilliance.
              </h1>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                Premium interior, exterior, and ceramic coating services throughout Davis County & Salt Lake City, Utah.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#contact" className="btn-liquid">
                  Get a Free Quote
                </a>
                <a href="#services" className="btn-outline">
                  Explore Services
                </a>
              </div>
            </div>

            <div className="will-reveal">
              <BeforeAfter
                before="https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1600"
                after="https://images.pexels.com/photos/4870707/pexels-photo-4870707.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=1600"
                alt="Before and after detailing"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="section">
        <Services />
      </section>

      {/* Gallery */}
      <section id="gallery" className="section">
        <Gallery />
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="section">
        <Testimonials />
      </section>

      {/* Contact */}
      <Contact />

      <Footer />
      <ScrollTop />
    </main>
  )
}
