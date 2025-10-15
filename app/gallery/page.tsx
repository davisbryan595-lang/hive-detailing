const imgs = [
  "/glossy-black-sedan-after-detail.jpg",
  "/interior-detailing-finished.jpg",
  "/engine-bay-clean-and-dressed.jpg",
  "/paint-correction-before-and-after.jpg",
  "/ceramic-coating-water-beading.jpg",
  "/wheel-and-tire-shine.jpg",
]

export default function GalleryPage() {
  return (
    <main className="min-h-dvh bg-background text-foreground">
      <div className="container mx-auto max-w-6xl px-6 py-12 md:py-20">
        <h1 className="text-4xl font-semibold tracking-tight">Gallery</h1>
        <p className="mt-3 text-muted-foreground">A few highlights from recent details.</p>

        <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {imgs.map((src) => (
            <div key={src} className="overflow-hidden rounded-lg border border-border">
              <img
                src={src || "/placeholder.svg"}
                alt="Detailing work example"
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
