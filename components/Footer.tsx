import { FaInstagram, FaFacebookF, FaYoutube, FaWhatsapp } from "react-icons/fa";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
  { icon: FaFacebookF, href: "https://facebook.com", label: "Facebook" },
  { icon: FaYoutube, href: "https://youtube.com", label: "YouTube" },
  { icon: FaWhatsapp, href: "https://wa.me/919999999999", label: "WhatsApp" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gold/10 bg-noir">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 sm:grid-cols-3 lg:px-10">
        <div>
          <p className="font-display text-2xl font-bold">
            RS <span className="gold-text">Digitals</span>
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ivory/50">
            Premium wedding, portrait and event photography studio based in
            Hyderabad — capturing moments that last forever.
          </p>
        </div>

        <div>
          <p className="mb-4 text-xs uppercase tracking-widest text-gold">
            Quick Links
          </p>
          <ul className="space-y-3">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="gold-underline text-sm text-ivory/60 hover:text-gold"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mb-4 text-xs uppercase tracking-widest text-gold">
            Follow Us
          </p>
          <div className="flex gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/25 text-ivory/70 transition hover:border-gold hover:bg-gold/10 hover:text-gold"
              >
                <s.icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-gold/10 py-6 text-center text-xs text-ivory/40">
        © 2026 RS Digitals. All rights reserved.
      </div>
    </footer>
  );
}
