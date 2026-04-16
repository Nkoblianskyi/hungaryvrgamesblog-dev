import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden scanline-overlay">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-vr.jpg"
          alt="Futurisztikus virtuális valóság környezet izzó neon ráccsal"
          fill
          className="object-cover object-center opacity-35"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/40" />
      </div>

      {/* Vertical HUD lines */}
      <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent z-10" />
      <div className="absolute right-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent z-10" />

      {/* Horizontal scan line */}
      <div className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent z-10" />

      <div className="relative z-20 max-w-6xl mx-auto px-6 py-24 w-full">
        {/* System label */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-2 h-2 bg-primary animate-pulse rounded-full" />
          <span className="font-mono text-xs tracking-[0.3em] text-primary uppercase">
            RENDSZER.INIT / VR_TUDÁSBÁZIS / v2.0
          </span>
        </div>

        {/* Main heading */}
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-none tracking-tight mb-6 text-balance">
          <span className="block text-foreground">VIRTUAL</span>
          <span className="block neon-text">REALITY</span>
          <span className="block text-foreground/60 text-3xl md:text-4xl mt-2 font-sans font-light tracking-widest">
            JÁTÉKOK &amp; TOVÁBB
          </span>
        </h1>

        {/* Description */}
        <p className="max-w-xl font-sans text-base text-muted-foreground leading-relaxed mb-10">
          Független tudásbázis a magával ragadó virtuális élményekről,
          a mögöttük álló hardverekről és a játék jövőjét formáló technológiáról.
          Márkaajánlások nélkül. Tiszta információ.
        </p>

        {/* CTA row */}
        <div className="flex flex-wrap gap-4 items-center">
          <Link
            href="/gadgets"
            className="relative group font-mono text-xs tracking-widest uppercase px-8 py-3.5 bg-primary text-primary-foreground overflow-hidden transition-all duration-300 hover:shadow-[0_0_24px_hsl(185_90%_52%/0.5)]"
          >
            <span className="relative z-10">Eszközök felfedezése</span>
            <div className="absolute inset-0 bg-primary/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
          </Link>
          <Link
            href="#what-is-vr"
            className="font-mono text-xs tracking-widest uppercase px-8 py-3.5 border border-primary/40 text-muted-foreground hover:border-primary hover:text-foreground transition-all duration-300"
          >
            Mi a VR?
          </Link>
        </div>

        {/* Bottom stat strip */}
        <div className="absolute bottom-10 left-6 right-6 flex flex-wrap gap-8 md:gap-16 font-mono text-xs text-muted-foreground/50 tracking-widest">
          <span>TARTALOM: HARDVER + JÁTÉKOK</span>
          <span>NYELV: HU</span>
          <span>RÉGIÓ: MAGYARORSZÁG</span>
          <span className="text-primary/60">FRISSÍTVE: 2026</span>
        </div>
      </div>
    </section>
  )
}
