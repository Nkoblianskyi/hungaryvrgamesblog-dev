import Image from "next/image"
import Link from "next/link"

const gadgets = [
  {
    id: "hmd",
    label: "Fejre szerelt kijelző",
    tag: "OPTIKA",
    summary:
      "Az elsődleges kimeneti eszköz. Két nagy frissítési sebességű képernyő lencséken keresztül tágítja a látómezőt, miközben a beépített processzorok olyan sebességgel renderelnek képkockákat, amely megelőzi a mozgásbetegséget.",
    image: "/images/hero-vr.jpg",
    wide: true,
  },
  {
    id: "haptic-gloves",
    label: "Haptikus kesztyű",
    tag: "ÉRINTÉS",
    summary:
      "Viselhető beviteli eszközök, amelyek aktuátortömbjei összenyomják az ujjakat és a tenyeret, hogy szimulálják a virtuális tárgyak megfogásának fizikai ellenállását.",
    image: "/images/haptic-gloves.jpg",
    wide: false,
  },
  {
    id: "motion-tracker",
    label: "Teljestest-követő",
    tag: "KÖVETÉS",
    summary:
      "A végtagokon elhelyezett tehetetlenségi érzékelők hálózata, amely rekonstruálja a teljes csontváz mozgását, lehetővé téve, hogy az avatar valós időben tükrözze a felhasználó testét.",
    image: "/images/motion-tracker.jpg",
    wide: false,
  },
]

export function GadgetsPreview() {
  return (
    <section className="py-24 bg-card/30 border-y border-border">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <div className="font-mono text-xs text-primary tracking-widest mb-2">FEJEZET_B / HARDVER</div>
            <h2 className="font-display text-3xl md:text-4xl tracking-tight text-balance">
              VR eszközök áttekintése
            </h2>
          </div>
          <Link
            href="/gadgets"
            className="font-mono text-xs tracking-widest uppercase border-b border-primary/50 pb-0.5 text-muted-foreground hover:text-primary hover:border-primary transition-colors duration-200"
          >
            Teljes eszközútmutató
          </Link>
        </div>

        {/* Unique bento layout: 1 wide + 2 stacked */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {/* Wide card */}
          <article className="md:col-span-3 card-glow relative overflow-hidden group flex flex-col min-h-[400px]">
            <div className="absolute inset-0">
              <Image
                src={gadgets[0].image}
                alt={gadgets[0].label}
                fill
                className="object-cover object-center opacity-25 group-hover:opacity-35 transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/70 to-transparent" />
            </div>
            <div className="relative z-10 flex flex-col justify-end flex-1 p-8 gap-3">
              <span className="font-mono text-xs tracking-widest text-primary border border-primary/30 px-2 py-0.5 w-fit">
                {gadgets[0].tag}
              </span>
              <h3 className="font-display text-xl tracking-wide text-foreground">
                {gadgets[0].label}
              </h3>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed max-w-sm">
                {gadgets[0].summary}
              </p>
              <Link
                href="/gadgets"
                className="font-mono text-xs tracking-widest uppercase text-primary/70 hover:text-primary transition-colors duration-200 mt-2"
              >
                Tovább olvasom
              </Link>
            </div>
          </article>

          {/* Two stacked narrow cards */}
          <div className="md:col-span-2 flex flex-col gap-4">
            {gadgets.slice(1).map((gadget) => (
              <article
                key={gadget.id}
                className="card-glow relative overflow-hidden group flex-1 min-h-[190px] flex flex-col"
              >
                <div className="absolute inset-0">
                  <Image
                    src={gadget.image}
                    alt={gadget.label}
                    fill
                    className="object-cover object-center opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/80 to-transparent" />
                </div>
                <div className="relative z-10 flex flex-col justify-end flex-1 p-5 gap-2">
                  <span className="font-mono text-[10px] tracking-widest text-primary/70">
                    {gadget.tag}
                  </span>
                  <h3 className="font-display text-sm tracking-wide text-foreground">
                    {gadget.label}
                  </h3>
                  <p className="font-sans text-xs text-muted-foreground leading-relaxed">
                    {gadget.summary}
                  </p>
                  <Link
                    href="/gadgets"
                    className="font-mono text-xs tracking-widest uppercase text-primary/60 hover:text-primary transition-colors duration-200 mt-1"
                  >
                    Tovább olvasom
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
