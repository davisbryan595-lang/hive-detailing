import { ContactForm } from "@/components/contact-form"

export default function ContactPage() {
  return (
    <main className="min-h-dvh bg-background text-foreground">
      <div className="container mx-auto max-w-3xl px-6 py-12 md:py-20">
        <h1 className="text-4xl font-semibold tracking-tight">Contact & Booking</h1>
        <p className="mt-3 text-muted-foreground">
          Share a few details and we’ll reply with availability and an exact quote.
        </p>
        <div className="mt-8 rounded-lg border border-border bg-card p-6">
          <ContactForm />
          <p className="mt-6 text-xs text-muted-foreground">
            By submitting, you agree to be contacted about your request. No spam—ever.
          </p>
        </div>
      </div>
    </main>
  )
}
