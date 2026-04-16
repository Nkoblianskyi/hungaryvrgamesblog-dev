import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "VR Játéktípusok | Hungary VR Games Blog",
  description:
    "Fedezze fel a virtuális valóság játékok összes típusát — a magával ragadó harci szimulációktól a meditatív felfedező világokig. Márkanevek nélkül, tiszta információ.",
}

const gameTypes = [
  {
    index: "01",
    title: "Harci szimuláció",
    tag: "NAGY INTENZITÁSÚ",
    description:
      "Virtuális környezetek, amelyek szoros harci forgatókönyveket, taktikai csapatmüveleteket vagy nagy léptékű csatajeleneteket reprodukálnak. A játékos fizikai térben navigál mozgásvezérlőkkel, hogy célozzon, töltözzön és fedezékbe húzódjon. Ezek az élmények a térbeli tudatosságot, a reakciósebességet és a koordinációt helyezik előtérbe. A fizikai aktivitás szintje magas — a játékosok guggolnak, dőlnek és oldalra lépnek a valós térben, hogy interakcióba lépjenek a virtuális világgal.",
    specs: [
      { label: "Fizikai aktivitás", value: "Magas" },
      { label: "Szükséges terület", value: "Min. 2m x 2m" },
      { label: "Interakció típusa", value: "Teljes testes mozgás" },
      { label: "Munkamenet hossza", value: "15-45 perc" },
    ],
  },
  {
    index: "02",
    title: "Nyílt világ felfedezés",
    tag: "MAGÁVAL RAGADÓ",
    description:
      "Hatalmas virtuális tájak, amelyek szabad formájú átjárásra készültek. A játékosok erdőkön, sivatagonkon, víz alatti világokon, idegen terrepeken vagy eljárásosan generált környezeteken mozognak át rögzített célok nélkül. A fókusz a felfedezésen és az érzékszervi jelenléten van. A lépték gyakran eltúlzott, hogy maximalizálja a csoda érzetét — a hegyek valóban magasnak, az óceánok valóban mélynek érződnek. A helyváltoztatást jellemzően teleportálással vagy sima analóg botmozgással kezelik a mozgásbetegség csökkentése érdekében.",
    specs: [
      { label: "Fizikai aktivitás", value: "Alacsony" },
      { label: "Szükséges terület", value: "Ülve vagy állva" },
      { label: "Interakció típusa", value: "Tekintet, vezérlő bevitel" },
      { label: "Munkamenet hossza", value: "30 perc - 2 óra" },
    ],
  },
  {
    index: "03",
    title: "Rejtvény és logika",
    tag: "KOGNITÍV",
    description:
      "Olyan élmények, ahol a játékos háromdimenziós térben manipulálja a tárgyakat mechanikai, térbeli vagy narratíva-vezérelt rejtvények megoldásához. A VR olyan mélységi réteget ad, ami lapos képernyőn nem lehetséges — a tárgyakat minden szögből megvizsgálhatjuk, a mechanizmusokat kézzel kezelhetjük, és rejtett információkat fedezhetünk fel azáltal, hogy fizikailag körülsétáljuk az elemeket. A rejtvények absztrakt geometriai problémáktól a teljesen kidolgozott szobakiszabadulós forgatókönyvekig terjednek.",
    specs: [
      { label: "Fizikai aktivitás", value: "Alacsony-közepes" },
      { label: "Szükséges terület", value: "Ülve vagy kis terület" },
      { label: "Interakció típusa", value: "Kézkövetés vagy vezérlők" },
      { label: "Munkamenet hossza", value: "20-60 perc" },
    ],
  },
  {
    index: "04",
    title: "Ritmus és mozgás",
    tag: "AKTÍV",
    description:
      "Játékok, amelyek szinkronizálják a játékos mozgását zenével vagy hanggel. A játékosok lendítenek, kitérnek, ütnek vagy lépnek az ütemekre, amelyek több térbeli irányból érkeznek. A háromdimenziós hangmező alapvető mechanizmus — a hangot fizikai térbe helyezik, és a játékosnak megfelelően kell tájékozódnia. Ezek az élmények valódi fizikai edzésként is funkcionálnak, kalóriafelhasználásuk közepes edzőtermi aktivitással egyenértékű.",
    specs: [
      { label: "Fizikai aktivitás", value: "Nagyon magas" },
      { label: "Szükséges terület", value: "Min. 2m x 2m" },
      { label: "Interakció típusa", value: "Teljes test, vezérlők" },
      { label: "Munkamenet hossza", value: "10-30 perc" },
    ],
  },
  {
    index: "05",
    title: "Horror és túlélés",
    tag: "PSZICHOLÓGIAI",
    description:
      "Félelmi reakciók kiváltására épített környezetek, amelyek jelenlét, hangdesign és váratlan események révén hatnak. A hagyományos horror médiával ellentétben a VR horror első személyű, megtestesített perspektívából éljük át — a játékos nem tud elfordulni, és a fenyegetések fizikailag közelinek érződnek. Az erőforrás-gazdálkodás, lopakodás és menekülés túlélési mechanikái feszültséget adnak. A pszichológiai hatás lényegesen erősebb, mint az egyenértékű lapos képernyős élményeké.",
    specs: [
      { label: "Fizikai aktivitás", value: "Alacsony-közepes" },
      { label: "Szükséges terület", value: "Ülve vagy állva" },
      { label: "Interakció típusa", value: "Vezérlő, fejkövetés" },
      { label: "Munkamenet hossza", value: "20-90 perc" },
    ],
  },
  {
    index: "06",
    title: "Közösségi többjátékos",
    tag: "HÁLÓZATOS",
    description:
      "Közös virtuális terek, ahol több játékos avatarként van jelen és valós időben lép egymással kapcsolatba. A hangcsevegés térbelivé válik — más játékosok hangja a virtuális távolsággal csökken, természetes társalgási dinamikát teremtve. A tevékenységek közé tartoznak a kooperatív játékok, versenysport-szimulációk, kollaboratív alkotás vagy egyszerűen közös szociális környezetek. Ezek a terek elmossák a határt a játék és a szociális platform között.",
    specs: [
      { label: "Fizikai aktivitás", value: "Változó" },
      { label: "Szükséges terület", value: "Változó" },
      { label: "Interakció típusa", value: "Avatar test, hang, vezérlők" },
      { label: "Munkamenet hossza", value: "Korlátlan" },
    ],
  },
  {
    index: "07",
    title: "Sportok szimulációja",
    tag: "FIZIKAI",
    description:
      "Valódi sportok — ütős sportok, mászás, íjászat, golf, ökölvívás és más tevékenységek — virtuális térbe adaptálva. A fizikai modellek valós labdapályák, súly és ellenállás közelítésére vannak hangolva. A játékosok mozgásvezérlőket használnak ütők, botok vagy végtagok fizikai proxyjaként. A hüvelykgombos hagyományos sportjátékokkal ellentétben a VR-sportok valódi fizikai technikát igényelnek, ami hatékony edzőeszközzé teszi őket a szórakoztatás mellett.",
    specs: [
      { label: "Fizikai aktivitás", value: "Magas" },
      { label: "Szükséges terület", value: "Ajánlott 2,5m x 2,5m" },
      { label: "Interakció típusa", value: "Teljes test, vezérlő mint eszköz" },
      { label: "Munkamenet hossza", value: "15-60 perc" },
    ],
  },
  {
    index: "08",
    title: "Narratív és filmes",
    tag: "TÖRTÉNETVEZÉRELT",
    description:
      "Olyan élmények, amelyek a történetmesélést és az érzelmi bevonást helyezik előtérbe a mechanikával szemben. A játékosok egy karakterbe bújnak vagy néma megfigyelőként vannak jelen egy kibontakozó narratívában. Elágazó párbeszédek, környezeti történetmesélés és volumetrikus rögzítésben vagy hagyományos CG-ben rögzített színészi teljesítmények közel hozzák a karaktereket. A virtuális karakterekkel való fizikai együttlét érzése olyan érzelmi reakciókat vált ki, amelyeket a lapos média nehezen tud megismételni.",
    specs: [
      { label: "Fizikai aktivitás", value: "Nagyon alacsony" },
      { label: "Szükséges terület", value: "Ülve" },
      { label: "Interakció típusa", value: "Tekintet, minimális vezérlő" },
      { label: "Munkamenet hossza", value: "30 perc - 3 óra" },
    ],
  },
  {
    index: "09",
    title: "Kreatív és építős",
    tag: "KONSTRUKTÍV",
    description:
      "Játéknak álcázott eszközök, ahol a játékosok háromdimenziós virtuális térben szobrászkodnak, festenek, építenek vagy zenét szereznek. A fizikai korlátok hiánya bármilyen méretű vagy formájú építményeket és alkotásokat tesz lehetővé. Egyes környezetek valódi anyagokat szimulálnak — agyagot, követ, fényt —, míg mások tisztán absztrakt digitális logikában működnek. A kimenet gyakran exportálható és megosztható, elmosva a határt a játék és a professzionális kreatív eszköz között.",
    specs: [
      { label: "Fizikai aktivitás", value: "Alacsony" },
      { label: "Szükséges terület", value: "Ülve vagy kis terület" },
      { label: "Interakció típusa", value: "Kézkövetés, precíziós vezérlők" },
      { label: "Munkamenet hossza", value: "Korlátlan" },
    ],
  },
  {
    index: "10",
    title: "Oktatási szimuláció",
    tag: "TÁJÉKOZTATÓ",
    description:
      "Tapasztalat útján tanításra tervezett környezetek, nem utasítás alapján. A történelem teljes léptékben kerül újraalkotásra; a kémia virtuális laboratóriumokban zajlik; az anatómiát az emberi testen belül sétálva fedezhetjük fel. A VR-alapú oktatásból való tanulás megtartási aránya mérhetően magasabb a képernyőalapú megfelelőknél, mert az agy másképpen kódolja a térbeli memóriát. Ezek gyermekélményektől szakmai képzési platformokig terjednek.",
    specs: [
      { label: "Fizikai aktivitás", value: "Alacsony-közepes" },
      { label: "Szükséges terület", value: "Ülve vagy állva" },
      { label: "Interakció típusa", value: "Témánként változó" },
      { label: "Munkamenet hossza", value: "10-45 perc" },
    ],
  },
]

export default function GamesPage() {
  return (
    <div className="min-h-screen">
      {/* Page header */}
      <section className="border-b border-border bg-card/40 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="font-mono text-xs tracking-widest text-primary mb-4 uppercase">
            Katalógus / Virtuális valóság
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground uppercase tracking-tight mb-6 text-balance">
            VR játéktípusok
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
            A virtuális valóság játékokban létező műfajok és formátumok strukturált referenciadokumentuma.
            Minden típust az interakciós modell, a fizikai követelmények és az általa teremtett
            élmény alapján határozunk meg.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <div className="h-px flex-1 bg-border" />
            <span className="font-mono text-xs text-muted-foreground tracking-widest">
              {gameTypes.length} TÍPUS DOKUMENTÁLVA
            </span>
            <div className="h-px flex-1 bg-border" />
          </div>
        </div>
      </section>

      {/* Game types list */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="flex flex-col">
          {gameTypes.map((game, i) => (
            <article
              key={game.index}
              className={`group py-14 ${i < gameTypes.length - 1 ? "border-b border-border" : ""}`}
            >
              {/* Header row */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
                <div className="flex items-start gap-6">
                  <span className="font-mono text-5xl font-bold text-border group-hover:text-primary/30 transition-colors duration-500 leading-none select-none">
                    {game.index}
                  </span>
                  <div>
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground uppercase tracking-tight group-hover:neon-text transition-all duration-300">
                      {game.title}
                    </h2>
                    <span className="inline-block mt-2 font-mono text-xs tracking-widest text-primary border border-primary/40 px-2 py-0.5">
                      {game.tag}
                    </span>
                  </div>
                </div>

                {/* Specs inline grid */}
                <div className="grid grid-cols-2 gap-x-8 gap-y-2 md:text-right shrink-0">
                  {game.specs.map((spec) => (
                    <div key={spec.label}>
                      <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
                        {spec.label}
                      </p>
                      <p className="font-mono text-xs text-foreground mt-0.5">{spec.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground text-base leading-relaxed max-w-3xl border-l-2 border-border group-hover:border-primary/40 pl-6 transition-colors duration-300">
                {game.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
