const facts = [
  {
    index: "F.01",
    stat: "90 Hz",
    title: "Minimális frissítési sebesség",
    body: "A másodpercenként 90 képkocka alatt működő kijelzők mérhető kényelmetlenséget okoznak a legtöbb felhasználónál. A csúcskategóriás fejszetek 120 Hz fölé tolják ezt az értéket az összes észlelt remegés kiküszöbölésére.",
  },
  {
    index: "F.02",
    stat: "20 ms",
    title: "Késleltetési küszöb",
    body: "A mozgástól a fotonig tartó késleltetésnek 20 ezredmásodperc alatt kell maradnia ahhoz, hogy az agy valódinak fogadja el a virtuális képet. E határértéket túllépve hányingert okoz.",
  },
  {
    index: "F.03",
    stat: "110°",
    title: "Látómező",
    body: "Az emberi binokuláris látás körülbelül 200 fokot fed le. A jelenlegi kijelzők 110 fokot érnek el, észrevehető kerethatást eredményezve, amelynek megszüntetésén a kutatók aktívan dolgoznak.",
  },
  {
    index: "F.04",
    stat: "6DOF",
    title: "Szabadságfokok",
    body: "A hat szabadságfokú követés három tengely mentén rögzíti mind a forgást, mind az eltolódást, így a rendszer nemcsak azt tudja, hová nézel, hanem azt is, hol mozog a tested.",
  },
  {
    index: "F.05",
    stat: "4K+",
    title: "Felbontás szemenként",
    body: "Az emberi retina körülbelül 60 pixelt old fel fokonként. A valódi retinális kijelzősűrűség eléréséhez legalább 8K szükséges szemenként, amelyet a jelenlegi hardverek megközelítenek, de még nem értek el.",
  },
  {
    index: "F.06",
    stat: "500 g",
    title: "Átlagos tömeg",
    body: "A legtöbb önálló fejszet 400 és 600 gramm között van. Az ergonómiai kutatások szerint a kényelmetlenség meredeken nő ennél a tömegnél 45 perces folyamatos használat után.",
  },
]

export function FactsSection() {
  return (
    <section className="py-24 max-w-6xl mx-auto px-6">
      {/* Header */}
      <div className="flex items-start gap-6 mb-16">
        <div className="shrink-0 pt-1">
          <div className="font-mono text-xs text-primary tracking-widest mb-1">FEJEZET_C</div>
          <div className="w-12 h-px bg-primary" />
        </div>
        <div>
          <h2 className="font-display text-3xl md:text-4xl tracking-tight text-balance mb-2">
            Kulcstények a VR-ről
          </h2>
          <p className="text-muted-foreground text-sm">
            Ellenőrzött adatpontok, amelyek meghatározzák a virtuális valóság technológiájának jelenlegi állapotát.
          </p>
        </div>
      </div>

      {/* Facts grid — unique structure: stat left, content right, full-width divider */}
      <div className="divide-y divide-border border border-border">
        {facts.map((fact, i) => (
          <article
            key={fact.index}
            className={`grid grid-cols-12 gap-4 group hover:bg-card/50 transition-colors duration-200
              ${i % 2 === 0 ? "" : "bg-card/20"}`}
          >
            {/* Index column */}
            <div className="col-span-2 md:col-span-1 flex items-center justify-center border-r border-border px-3 py-6">
              <span className="font-mono text-[10px] text-muted-foreground/40 tracking-widest rotate-90 md:rotate-0 whitespace-nowrap">
                {fact.index}
              </span>
            </div>

            {/* Stat column */}
            <div className="col-span-3 md:col-span-2 flex items-center border-r border-border px-4 py-6">
              <span className="font-display text-2xl md:text-3xl neon-text leading-none group-hover:text-primary transition-colors duration-200">
                {fact.stat}
              </span>
            </div>

            {/* Content column */}
            <div className="col-span-7 md:col-span-9 flex flex-col justify-center px-5 py-6 gap-1.5">
              <h3 className="font-display text-xs tracking-widest text-foreground uppercase">
                {fact.title}
              </h3>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                {fact.body}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-4 flex justify-end">
        <span className="font-mono text-xs text-muted-foreground/40 tracking-widest">
          CSOMÓPONT: ADATMETRIKÁK / BETÖLTVE
        </span>
      </div>
    </section>
  )
}
