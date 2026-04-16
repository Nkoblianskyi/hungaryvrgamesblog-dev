import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "VR Eszközök | Hungary VR Games Blog",
  description:
    "Átfogó útmutató a virtuális valóság hardverekhez. Fejre szerelt kijelzők, haptikus eszközök, mozgáskövetők és más technológiák — márkanevek nélkül, tiszta műszaki leírással.",
}

const gadgets = [
  {
    id: "hmd",
    code: "ESZ_01",
    category: "Vizuális kimenet",
    title: "Fejre szerelt kijelző",
    shortDesc: "Az elsődleges vizuális interfész, amelyet a fejre rögzítenek",
    fullDesc:
      "A fejre szerelt kijelző a virtuális valóság hardverek meghatározó eleme. Két kis felbontású képernyőt (vagy egyetlen, optikailag osztott lentikuláris kijelzőt) helyez mindkét szem elé, néhány centiméterre az arctól. Fresnel- vagy pancake-lencsék terjesztik és fókuszálják a képet, hogy kitöltsék a felhasználó látómezőjét, miközben a készülék fizikailag kompakt marad. Belülről kifelé vagy kívülről befelé irányuló követőkamerák rögzítik a forgási és pozicionális fejmozgást, folyamatos adatot táplálva a renderelési folyamatba, hogy a jelenet szinkronban frissüljön a viselő fejének minden mozdulatával.",
    specs: [
      { label: "Kijelző típusa", value: "LCD / OLED / MicroOLED" },
      { label: "Frissítési sebesség", value: "72-tól 144 Hz-ig" },
      { label: "Látómező", value: "90-tól 130 fokig" },
      { label: "Követés", value: "3DOF vagy 6DOF" },
    ],
    img: "/images/hero-vr.jpg",
  },
  {
    id: "haptic-gloves",
    code: "ESZ_02",
    category: "Haptikus bevitel",
    title: "Haptikus visszajelző kesztyű",
    shortDesc: "Viselhető érintésszimuláció a kézhez",
    fullDesc:
      "A haptikus kesztyűk vibrotaktilis aktuátorok, pneumatikus légtömlők vagy exocsontvázas kábelek tömbjét integrálják a tenyéren, az ujjakon és az ujjhegyeken. Amikor a viselő virtuális keze felülettel vagy tárggyal érintkezik, a rendszer meghatározott aktuátorokat aktivál a megfelelő nyomás, textúra és ellenállás szimulálásához. A csúcskategóriás modellek erővisszacsatoló inakat is tartalmaznak, amelyek fizikailag korlátozzák az ujjak mozgását, lehetetlenné téve, hogy a kéz áthatoljon egy szilárd virtuális felületen — ez döntő eleme a hiteles tárgyinterakciónak.",
    specs: [
      { label: "Aktuátor típusa", value: "Vibrotaktilis / Pneumatikus" },
      { label: "Ujjkövetés", value: "Ízületenkénti 3D pozíció" },
      { label: "Késleltetési cél", value: "10 ms alatt" },
      { label: "Csatlakozás", value: "Vezetékes / Vezeték nélküli BT" },
    ],
    img: "/images/haptic-gloves.jpg",
  },
  {
    id: "motion-tracker",
    code: "ESZ_03",
    category: "Testkövetés",
    title: "Teljes testes mozgáskövetőrendszer",
    shortDesc: "Érzékelőrendszer a teljes csontvázrendszer mozgásrögzítéséhez",
    fullDesc:
      "A teljes testes mozgáskövetők tehetetlenségi mérőegységeket (IMU) és optikai marker rendszereket alkalmaznak minden főbb ízület pozíciójának és tájolásának egyidejű rögzítéséhez. A derékból, térdekből, könyökökből, bokákból és mellkasból érkező adatok egy inverz kinematikai megoldóhoz kerülnek, amely teljes testpózót rekonstruál a virtuális térben. Ez kiküszöböli a vezérlőalapú rendszerekre jellemző mesterséges mozgást, és lehetővé teszi, hogy a felhasználók valódi fizikai mozgással járjanak, guggoljanak, forduljanak és gesztikuláljanak.",
    specs: [
      { label: "Érzékelő típusa", value: "IMU / Optikai" },
      { label: "Követett pontok", value: "Akár 17 ízület" },
      { label: "Frissítési sebesség", value: "120 Hz" },
      { label: "Késleltetés", value: "20 ms alatt" },
    ],
    img: "/images/motion-tracker.jpg",
  },
  {
    id: "controllers",
    code: "ESZ_04",
    category: "Mozgásos bevitel",
    title: "6DOF mozgásvezérlők",
    shortDesc: "Kézi eszközök teljes térbeli követéssel",
    fullDesc:
      "A hat szabadságfokú vezérlők olyan kézi eszközök, amelyek egyszerre rögzítik mind a térbeli pozíciójukat, mind a forgási tájolást. Kapacitív ujjérzékelőket tartalmaznak, amelyek minden ujj közelségét érzékelik a fogáshoz anélkül, hogy teljes nyomást kellene alkalmazni, lehetővé téve a természetes gesztusfelismerést. A fogantyúban lévő haptikus motorok ütés- és vibrációs visszajelzést biztosítanak. A fejszeten lévő kézkövetőkamerákkal párosítva áthidalják a szakasz a pontos bevitelvezérlés és a természetes interakció között.",
    specs: [
      { label: "Követési módszer", value: "Belülről kifelé optikai" },
      { label: "Szabadságfokok", value: "6DOF" },
      { label: "Akkumulátor élettartam", value: "8-tól 20 óráig" },
      { label: "Haptika", value: "LRA vibrációs motorok" },
    ],
    img: "/images/vr-controllers.jpg",
  },
  {
    id: "treadmill",
    code: "ESZ_05",
    category: "Helyváltoztatás",
    title: "Omnidirekcionális futópad",
    shortDesc: "Fizikai platform korlátlan virtuális sétához",
    fullDesc:
      "Az omnidirekcionális futópad egy nagy kör vagy homorú platform, amelynek felületét alacsony súrlódású anyag és beépített mozgásérzékelők borítják. A felület folyamatosan mozog a felhasználó lába alatt, hogy visszaközpontosítsa őket, lehetővé téve a valódi gyaloglási mozgást bármely irányban, miközben a személy fizikailag egy helyen marad. Egy derékpánt megakadályozza az esést. A platform érzékelői a gyaloglási sebességet és irányt a virtuális környezetbe továbbítják, közvetlen fizikai kapcsolatot biztosítva a lábmozgás és a világi helyváltoztatás között, megszüntetve a fizikai mozdulatlanság és a virtuális mozgás közötti ellentmondást, amely mozgásbetegséget okoz.",
    specs: [
      { label: "Platform átmérője", value: "1,8-tól 2,4 méterig" },
      { label: "Max. sebesség", value: "Akár 8 km/h" },
      { label: "Terhelhetőség", value: "Akár 150 kg" },
      { label: "Felület típusa", value: "Kis súrlódású polimer lapok" },
    ],
    img: "/images/vr-treadmill.jpg",
  },
  {
    id: "eye-tracking",
    code: "ESZ_06",
    category: "Biometrikus érzékelés",
    title: "Szemkövetési modul",
    shortDesc: "Infravörös érzékelők, amelyek valós időben olvassák a tekintett irányt",
    fullDesc:
      "A VR-fejszetek szemkövetési rendszerei infravörös LED-tömbök és közeli-IR kamerák segítségével folyamatosan figyelik a szaruhártya reflexiós mintáit. A kiszámított tekintetvek pontosan megmondja a renderelési motornak, hová néz a felhasználó. Ezek az adatok lehetővé teszik a foveált renderelést — teljes részletességet biztosítva a tekintett területen, és a kerületi felbontást csökkentve a számítási terhelés csökkentése érdekében látható minőségromlás nélkül. A szemkövetés dinamikus pupillatávolság-beállítást, kalibrált mélységi élesség elmosást és természetes avatárszem-kontaktust is támogat a közösségi VR-környezetekben.",
    specs: [
      { label: "Technológia", value: "Infravörös szaruhártya-reflexió" },
      { label: "Pontosság", value: "1 foknyi látószög alatt" },
      { label: "Mintavételi sebesség", value: "Akár 200 Hz" },
      { label: "Felhasználási terület", value: "Foveált renderelés / Közösségi tekintet" },
    ],
    img: "/images/eye-tracking.jpg",
  },
]

export default function GadgetsPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Page header */}
      <div className="mb-20 flex flex-col gap-4 relative">
        <div className="flex items-center gap-3">
          <div className="h-px w-8 bg-primary" />
          <span className="font-mono text-xs text-primary tracking-[0.3em] uppercase">Hardver útmutató</span>
        </div>
        <h1 className="font-display text-4xl md:text-5xl font-black uppercase text-foreground leading-tight">
          VR Eszközök
          <span className="block neon-text text-2xl md:text-3xl mt-1">Teljes eszközprofilok</span>
        </h1>
        <p className="font-sans text-muted-foreground leading-relaxed max-w-2xl">
          A virtuális valóságot lehetővé tevő hardverkategóriák független műszaki profiljai. Az eszköztípusok funkció és mérnöki elv szerint magyarázva, konkrét gyártókra vagy termékekre való hivatkozás nélkül.
        </p>
        <div className="absolute top-0 right-0 hidden md:flex flex-col items-end gap-1 font-mono text-[10px] text-muted-foreground/40">
          <span>ÖSSZESEN: {gadgets.length} ESZKÖZ</span>
          <span>BESOROLÁS: VR_HARDVER</span>
          <span>UTOLJÁRA FELÜLVIZSGÁLVA: 2026</span>
        </div>
      </div>

      {/* Device grid */}
      <div className="flex flex-col gap-1">
        {gadgets.map((gadget, i) => (
          <article
            key={gadget.id}
            id={gadget.id}
            className={`border border-border relative group overflow-hidden transition-all duration-300 hover:border-primary/40 ${
              i % 2 === 0 ? "bg-card" : "bg-muted/20"
            }`}
          >
            {i % 3 === 0 ? (
              <div className="flex flex-col md:flex-row">
                <div className="flex-1 p-7 flex flex-col gap-5">
                  <div className="flex items-center gap-4 flex-wrap">
                    <span className="font-mono text-[10px] text-primary border border-primary/40 px-2 py-0.5 tracking-widest">
                      {gadget.code}
                    </span>
                    <span className="font-mono text-[10px] text-muted-foreground/60 tracking-widest uppercase">
                      {gadget.category}
                    </span>
                  </div>
                  <div>
                    <h2 className="font-display text-xl md:text-2xl font-bold uppercase text-foreground mb-2">
                      {gadget.title}
                    </h2>
                    <p className="font-mono text-xs text-primary/70 tracking-wide">{gadget.shortDesc}</p>
                  </div>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed">{gadget.fullDesc}</p>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    {gadget.specs.map((spec) => (
                      <div key={spec.label} className="border border-border p-2 flex flex-col gap-0.5">
                        <span className="font-mono text-[9px] text-muted-foreground/50 tracking-widest uppercase">{spec.label}</span>
                        <span className="font-mono text-xs text-foreground">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative w-full md:w-72 h-52 md:h-auto shrink-0 overflow-hidden">
                  <Image
                    src={gadget.img}
                    alt={gadget.title}
                    fill
                    className="object-cover opacity-60 group-hover:scale-105 group-hover:opacity-75 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-card md:via-transparent to-transparent" />
                </div>
              </div>
            ) : i % 3 === 1 ? (
              <div className="flex flex-col md:flex-row-reverse">
                <div className="flex-1 p-7 flex flex-col gap-5">
                  <div className="flex items-center gap-4 flex-wrap">
                    <span className="font-mono text-[10px] text-primary border border-primary/40 px-2 py-0.5 tracking-widest">
                      {gadget.code}
                    </span>
                    <span className="font-mono text-[10px] text-muted-foreground/60 tracking-widest uppercase">
                      {gadget.category}
                    </span>
                  </div>
                  <div>
                    <h2 className="font-display text-xl md:text-2xl font-bold uppercase text-foreground mb-2">
                      {gadget.title}
                    </h2>
                    <p className="font-mono text-xs text-primary/70 tracking-wide">{gadget.shortDesc}</p>
                  </div>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed">{gadget.fullDesc}</p>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    {gadget.specs.map((spec) => (
                      <div key={spec.label} className="border border-border p-2 flex flex-col gap-0.5">
                        <span className="font-mono text-[9px] text-muted-foreground/50 tracking-widest uppercase">{spec.label}</span>
                        <span className="font-mono text-xs text-foreground">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative w-full md:w-64 h-48 md:h-auto shrink-0 overflow-hidden">
                  <Image
                    src={gadget.img}
                    alt={gadget.title}
                    fill
                    className="object-cover opacity-60 group-hover:scale-105 group-hover:opacity-75 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-card/80 to-transparent" />
                </div>
              </div>
            ) : (
              <div className="flex flex-col">
                <div className="relative w-full h-48 overflow-hidden">
                  <Image
                    src={gadget.img}
                    alt={gadget.title}
                    fill
                    className="object-cover opacity-60 group-hover:scale-105 group-hover:opacity-75 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-card" />
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="font-mono text-[10px] text-primary border border-primary/40 px-2 py-0.5 tracking-widest bg-background/60">
                      {gadget.code}
                    </span>
                    <span className="font-mono text-[10px] text-muted-foreground/80 tracking-widest uppercase bg-background/60 px-2 py-0.5">
                      {gadget.category}
                    </span>
                  </div>
                </div>
                <div className="p-7 flex flex-col gap-5">
                  <div>
                    <h2 className="font-display text-xl font-bold uppercase text-foreground mb-2">
                      {gadget.title}
                    </h2>
                    <p className="font-mono text-xs text-primary/70 tracking-wide">{gadget.shortDesc}</p>
                  </div>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed">{gadget.fullDesc}</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {gadget.specs.map((spec) => (
                      <div key={spec.label} className="border border-border p-2 flex flex-col gap-0.5">
                        <span className="font-mono text-[9px] text-muted-foreground/50 tracking-widest uppercase">{spec.label}</span>
                        <span className="font-mono text-xs text-foreground">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </article>
        ))}
      </div>
    </div>
  )
}
