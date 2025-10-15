import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Hive Detailing — Premium Auto Detailing",
  description: "Mobile and in‑shop auto detailing: paint correction, ceramic coating, and interior restoration.",
  generator: "v0.app",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Hive Detailing",
    description: "Premium auto detailing, inside and out.",
    images: ["/images/hive-logo.jpg"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Hive Detailing",
    url: "https://example.com",
    image: "https://example.com/images/hive-logo.jpg",
    telephone: "+1-000-000-0000",
    areaServed: "Local",
  }
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <script
          type="application/ld+json"
          // @ts-ignore JSON string
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Analytics />
      </body>
    </html>
  )
}
