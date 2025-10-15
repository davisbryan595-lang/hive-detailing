"use client"

import type React from "react"

import { useState } from "react"

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("loading")
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form) as any)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      const json = await res.json()
      if (res.ok) {
        setStatus("success")
        setMessage(json.message || "Thanks! We’ll be in touch shortly.")
        form.reset()
      } else {
        setStatus("error")
        setMessage(json.error || "Something went wrong. Please try again.")
      }
    } catch (err) {
      setStatus("error")
      setMessage("Network error. Please try again.")
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <label className="block">
          <span className="text-sm">Name</span>
          <input
            name="name"
            required
            className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2"
            placeholder="Your name"
          />
        </label>
        <label className="block">
          <span className="text-sm">Email</span>
          <input
            type="email"
            name="email"
            required
            className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2"
            placeholder="you@email.com"
          />
        </label>
      </div>
      <label className="block">
        <span className="text-sm">Phone</span>
        <input
          type="tel"
          name="phone"
          className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2"
          placeholder="+1 (___) ___‑____"
        />
      </label>
      <label className="block">
        <span className="text-sm">Vehicle & service</span>
        <input
          name="vehicle"
          className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2"
          placeholder="e.g. 2020 Civic — Ceramic Coating"
        />
      </label>
      <label className="block">
        <span className="text-sm">Message</span>
        <textarea
          name="message"
          rows={5}
          className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2"
          placeholder="Tell us what you need…"
        />
      </label>
      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:opacity-95 disabled:opacity-60"
        disabled={status === "loading"}
        aria-busy={status === "loading"}
      >
        {status === "loading" ? "Sending..." : "Request a Quote"}
      </button>
      {status !== "idle" && (
        <p className={`text-sm ${status === "error" ? "text-destructive" : "text-muted-foreground"}`}>{message}</p>
      )}
    </form>
  )
}
