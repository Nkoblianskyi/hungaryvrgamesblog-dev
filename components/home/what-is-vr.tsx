const pillars = [
  {
    code: "01",
    title: "Magával ragadó kijelző",
    body:
      "A fejre szerelt kijelző mindkét szem elé önálló képernyőt helyez, sztereoszkópikus látómezőt teremtve, amely megtéveszti az agyat, és valódi mélységet, háromdimenziós teret érzékeltet.",
  },
  {
    code: "02",
    title: "Térbeli követés",
    body:
      "Érzékelők és kamerák valós időben térképezik fel a fizikai szobát. A fej minden billentése, minden lépés milliméteres pontossággal jelenik meg a virtuális világban.",
  },
  {
    code: "03",
    title: "Haptikus visszajelzés",
    body:
      "A vezérlőkbe és kesztyűkbe épített vibrációs motorok és nyomásérzékelők szimulálják a virtuális tárgyak érintésének érzetét, összekapcsolva a látást és a tapintást.",
  },
  {
    code: "04",
    title: "Térbeli hang",
    body:
      "A térbeli hangmotorok kiszámítják, hogyan verődne vissza a hang a virtuális felületekről, és hogyan érne el eltérően minden fülbe, valódi fizikai jelenlétet teremtve a digitális világban.",
  },
]

export function WhatIsVR() {
  return (
    <section id="what-is-vr" className="py-16 sm:py-24 max-w-6xl mx-auto px-4 sm:px-6">
      {/* Section header */}
      <div className="flex items-start gap-4 sm:gap-6 mb-10 sm:mb-16">
        <div className="shrink-0 pt-1">
          <div className="font-mono text-xs text-primary tracking-widest mb-1">FEJEZET_A</div>
          <div className="w-12 h-px bg-primary" />
        </div>
        <div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl tracking-tight text-balance mb-3 sm:mb-4">
            Mi a virtuális valóság?
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl">
            A virtuális valóság egy olyan technológia, amely számítógép által generált adatokkal
            helyettesíti az ember érzékszervi bemenetét, ezzel azt az élményt keltve, mintha
            fizikailag jelen lennénk egy szimulált környezetben. Nem egyetlen eszközről van szó,
            hanem hardver és szoftver összekapcsolt rendszeréről.
          </p>
        </div>
      </div>

      {/* Pillar cards — unique asymmetric layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-border">
        {pillars.map((pillar, i) => (
          <article
            key={pillar.code}
            className={`p-5 sm:p-8 flex gap-4 sm:gap-5 transition-colors duration-200 hover:bg-card/60
              ${i % 2 === 0 ? "border-r-0 md:border-r border-b border-border" : "border-b border-border"}
              ${i >= pillars.length - 2 ? "border-b-0" : ""}
            `}
          >
            {/* Code pillar */}
            <div className="shrink-0 flex flex-col items-center gap-2 pt-1">
              <span className="font-mono text-xs text-primary/50 tracking-widest">{pillar.code}</span>
              <div className="w-px flex-1 bg-border min-h-[40px]" />
            </div>
            {/* Content */}
            <div className="flex flex-col gap-3">
              <h3 className="font-display text-xs sm:text-sm tracking-widest text-foreground uppercase">
                {pillar.title}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {pillar.body}
              </p>
            </div>
          </article>
        ))}
      </div>

      {/* Bottom data tag */}
      <div className="mt-6 flex justify-end">
        <span className="font-mono text-xs text-muted-foreground/40 tracking-widest">
          CSOMÓPONT: ALAPOK / BETÖLTVE
        </span>
      </div>
    </section>
  )
}
