import Link from "next/link"

const footerLinks = {
  explore: [
    { href: "/", label: "Főoldal" },
    { href: "/games", label: "Játékok" },
    { href: "/gadgets", label: "Eszközök" },
    { href: "/about", label: "Rólunk" },
  ],
  legal: [
    { href: "/privacy-policy", label: "Adatvédelmi irányelvek" },
    { href: "/cookie-policy", label: "Cookie szabályzat" },
  ],
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border mt-24">
      {/* Top bar accent */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand block */}
          <div className="md:col-span-1 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3 group w-fit">
              <div className="w-8 h-8 border border-primary relative flex items-center justify-center">
                <div className="w-4 h-4 bg-primary/20 border border-primary/60 rotate-45 group-hover:bg-primary/40 transition-colors" />
              </div>
              <span className="font-display text-sm tracking-widest neon-text uppercase">
                HungaryVR
              </span>
            </Link>
            <p className="font-mono text-xs text-muted-foreground leading-relaxed tracking-wide max-w-xs">
              Független információs forrás a virtuális valóság játékokról és a magával ragadó technológiáról. Márkák és szponzorok nélkül.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4">
            <span className="font-display text-xs tracking-widest text-primary uppercase">
              Navigáció
            </span>
            <ul className="flex flex-col gap-3">
              {footerLinks.explore.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-mono text-xs tracking-widest text-muted-foreground hover:text-foreground uppercase transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-3 h-px bg-border group-hover:bg-primary transition-colors duration-200 shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-4">
            <span className="font-display text-xs tracking-widest text-primary uppercase">
              Jogi információk
            </span>
            <ul className="flex flex-col gap-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-mono text-xs tracking-widest text-muted-foreground hover:text-foreground uppercase transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-3 h-px bg-border group-hover:bg-primary transition-colors duration-200 shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Decorative data block */}
            <div className="mt-4 border border-border p-3 font-mono text-xs text-muted-foreground/60 space-y-1">
              <div className="flex justify-between">
                <span>ÁLLAPOT</span>
                <span className="text-primary">ONLINE</span>
              </div>
              <div className="flex justify-between">
                <span>PROTOKOLL</span>
                <span>VR_INFO_v2</span>
              </div>
              <div className="flex justify-between">
                <span>RÉGIÓ</span>
                <span>HU_KÖZÉP</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-muted-foreground/60 tracking-widest">
            HUNGARYVRGAMESBLOG.COM
          </p>
          <p className="font-mono text-xs text-muted-foreground/60 tracking-widest">
            2026 MINDEN JOG FENNTARTVA
          </p>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="font-mono text-xs text-muted-foreground/60 tracking-widest">
              FÜGGETLEN MÉDIA
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
