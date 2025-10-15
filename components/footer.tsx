export default function Footer() {
  return (
    <footer className="border-t border-border bg-footer py-10">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-4">
        <div>
          <h3 className="text-lg font-semibold">Hive Detailing</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Premium automotive detailing and ceramic coating in Davis County & Salt Lake City.
          </p>
        </div>
        <div>
          <h4 className="font-medium">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href="#services" className="btn-link">
                Services
              </a>
            </li>
            <li>
              <a href="#gallery" className="btn-link">
                Gallery
              </a>
            </li>
            <li>
              <a href="#testimonials" className="btn-link">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#contact" className="btn-link">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a className="btn-link" href="mailto:nicholaschaseharris@gmail.com">
                nicholaschaseharris@gmail.com
              </a>
            </li>
            <li>
              <a className="btn-link" href="tel:+18015550123">
                (801) 555-0123
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium">Follow</h4>
          <div className="mt-3 flex gap-3">
            <a href="#" className="icon-link" aria-label="Instagram">
              IG
            </a>
            <a href="#" className="icon-link" aria-label="Facebook">
              FB
            </a>
            <a href="#" className="icon-link" aria-label="TikTok">
              TT
            </a>
          </div>
        </div>
      </div>
      <div className="mt-10 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Hive Detailing. All rights reserved.
      </div>
    </footer>
  )
}
