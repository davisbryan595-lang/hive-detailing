export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-2">
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

        <form
          className="will-reveal space-y-4 rounded-2xl border border-border bg-card p-6 shadow-xl"
          action="https://formsubmit.co/nicholaschaseharris@gmail.com"
          method="POST"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="New Hive Detailing Inquiry" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_next" value="https://thankyou.hive.local/sent" />
          <div className="grid gap-4 md:grid-cols-2">
            <div className="field">
              <label htmlFor="name" className="label">
                Name
              </label>
              <input id="name" name="name" required className="input" placeholder="Your name" />
            </div>
            <div className="field">
              <label htmlFor="email" className="label">
                Email
              </label>
              <input id="email" name="email" type="email" required className="input" placeholder="you@email.com" />
            </div>
            <div className="field md:col-span-2">
              <label htmlFor="phone" className="label">
                Phone
              </label>
              <input id="phone" name="phone" className="input" placeholder="(555) 555-5555" />
            </div>
            <div className="field md:col-span-2">
              <label htmlFor="message" className="label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="input"
                placeholder="Describe your vehicle & service needs..."
              />
            </div>
          </div>
          <button type="submit" className="btn-liquid w-full">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}
