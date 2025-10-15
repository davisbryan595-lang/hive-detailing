"use client"

import { useSearchParams } from "next/navigation"

export default function Contact() {
  return (
    <section id="contact" className="section min-h-dvh flex items-center">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 md:grid-cols-2">
        <div className="will-reveal space-y-4">
          <h2 className="text-3xl font-semibold md:text-4xl">Get a Free Quote</h2>
          <p className="text-muted-foreground">
            Serving <strong>Davis County & Salt Lake City, Utah</strong>. Call or send a message — we’ll get back to you
            quickly.
          </p>

          <div className="rounded-xl border border-border bg-card p-4">
            <p className="flex items-center gap-2">
              <span className="text-muted-foreground">Phone:</span>{" "}
              <a className="btn-link" href="tel:+18015550123">
                (801) 555-0123
              </a>
            </p>
            <p className="flex items-center gap-2">
              <span className="text-muted-foreground">Email:</span>{" "}
              <a className="btn-link" href="mailto:nicholaschaseharris@gmail.com">
                nicholaschaseharris@gmail.com
              </a>
            </p>
            <div className="mt-3 flex items-center gap-3">
              <a href="#" aria-label="Instagram" className="icon-link">
                IG
              </a>
              <a href="#" aria-label="Facebook" className="icon-link">
                FB
              </a>
              <a href="#" aria-label="TikTok" className="icon-link">
                TT
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-xl border border-border">
            <iframe
              title="Hive Detailing Service Area"
              className="h-64 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25663.686745967703!2d-111.927!3d40.887!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8752ef2ff!2sDavis%20County%2C%20UT!5e0!3m2!1sen!2sus!4v1690000000000"
            />
          </div>
        </div>

        <PrefilledForm />
      </div>
    </section>
  )
}

function PrefilledForm() {
  const params = useSearchParams()
  const plan = params.get("plan") || ""
  const price = params.get("price") || ""
  const service = params.get("service") || ""
  const desc = params.get("desc") || ""

  const inferredBudget = (() => {
    const p = Number(price)
    if (!isFinite(p) || p <= 0) return ""
    if (p < 250) return "Under $250"
    if (p < 500) return "$250 - $500"
    if (p < 1000) return "$500 - $1,000"
    return "$1,000+"
  })()

  const defaultMessage = plan
    ? `Interested in the ${plan} plan${price ? ` ($${price})` : ""}.${desc ? ` ${desc}` : ""}`
    : "Describe your vehicle (condition, color) & what you’d like done…"

  return (
    <form
      className="will-reveal space-y-4 rounded-2xl border border-white/10 bg-black/50 p-6 shadow-2xl backdrop-blur-xl"
      action="https://formsubmit.co/nicholaschaseharris@gmail.com"
      method="POST"
    >
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_subject" value="New Hive Detailing Inquiry" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_next" value="https://thankyou.hive.local/sent" />
      {plan && <input type="hidden" name="selected_plan" value={plan} />}
      {price && <input type="hidden" name="selected_price" value={`$${price}`} />}

      <div className="grid gap-4 md:grid-cols-2">
        <div className="field">
          <label htmlFor="name" className="label text-white/80">Name</label>
          <input id="name" name="name" required className="input frosted-input" placeholder="Your name" />
        </div>
        <div className="field">
          <label htmlFor="email" className="label text-white/80">Email</label>
          <input id="email" name="email" type="email" required className="input frosted-input" placeholder="you@email.com" />
        </div>
        <div className="field">
          <label htmlFor="phone" className="label text-white/80">Phone</label>
          <input id="phone" name="phone" className="input frosted-input" placeholder="(555) 555-5555" />
        </div>
        <div className="field">
          <label htmlFor="zip" className="label text-white/80">ZIP Code</label>
          <input id="zip" name="zip" className="input frosted-input" placeholder="84014" />
        </div>
        <div className="field">
          <label htmlFor="make" className="label text-white/80">Vehicle Make</label>
          <input id="make" name="make" className="input frosted-input" placeholder="e.g. Honda" />
        </div>
        <div className="field">
          <label htmlFor="model" className="label text-white/80">Vehicle Model</label>
          <input id="model" name="model" className="input frosted-input" placeholder="e.g. Civic" />
        </div>
        <div className="field">
          <label htmlFor="year" className="label text-white/80">Vehicle Year</label>
          <input id="year" name="year" className="input frosted-input" placeholder="e.g. 2020" />
        </div>
        <div className="field">
          <label htmlFor="service" className="label text-white/80">Service Interested In</label>
          <select id="service" name="service" className="input frosted-input" defaultValue={service || undefined}>
            <option>Interior Detailing</option>
            <option>Exterior Detailing</option>
            <option>Paint Correction</option>
            <option>Ceramic Coating</option>
            <option>Engine Bay Cleaning</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="date" className="label text-white/80">Preferred Date</label>
          <input id="date" name="date" type="date" className="input frosted-input" />
        </div>
        <div className="field">
          <label htmlFor="budget" className="label text-white/80">Budget Range</label>
          <select id="budget" name="budget" className="input frosted-input" defaultValue={inferredBudget || undefined}>
            <option>Under $250</option>
            <option>$250 - $500</option>
            <option>$500 - $1,000</option>
            <option>$1,000+</option>
          </select>
        </div>
        <div className="field md:col-span-2">
          <label htmlFor="message" className="label text-white/80">Message</label>
          <textarea
            id="message"
            name="message"
            rows={6}
            className="input frosted-input"
            defaultValue={defaultMessage}
            placeholder="Describe your vehicle (condition, color) & what you’d like done…"
          />
        </div>
        <label className="md:col-span-2 flex items-center gap-2 text-sm text-white/80">
          <input type="checkbox" name="consent" className="h-4 w-4 rounded border-white/20 bg-black/30" />
          I agree to be contacted about my inquiry.
        </label>
      </div>
      <button type="submit" className="btn-liquid w-full">Send Message</button>
    </form>
  )
}
