export function SiteFooter() {
  return (
    <footer id="contact" className="border-t border-border">
      <div className="container mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-1">
          <p className="font-medium">Hive Detailing</p>
          <p className="text-sm text-muted-foreground">Precision care. Honest service.</p>
        </div>
        <nav aria-label="Footer" className="text-sm flex flex-wrap gap-4">
          <a href="/services" className="hover:text-primary transition-colors">
            Services
          </a>
          <a href="/pricing" className="hover:text-primary transition-colors">
            Pricing
          </a>
          <a href="/gallery" className="hover:text-primary transition-colors">
            Gallery
          </a>
          <a href="/contact" className="hover:text-primary transition-colors">
            Contact
          </a>
        </nav>
      </div>
      <div className="border-t border-border">
        <div className="container mx-auto max-w-6xl px-6 py-6 flex items-center justify-between text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Hive Detailing. All rights reserved.</p>
          <p>Made with care.</p>
        </div>
      </div>
    </footer>
  )
}
