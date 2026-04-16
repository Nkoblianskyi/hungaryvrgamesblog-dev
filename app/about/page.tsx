import type { Metadata } from "next"
import Image from "next/image"
import { ContactForm } from "@/components/about/contact-form"

export const metadata: Metadata = {
  title: "Rólunk | Hungary VR Games Blog",
  description:
    "Tudj meg többet a Hungary VR Games Blogról — egy független tájékoztatási forrásról, amely a virtuális valóság játékoknak és a magával ragadó technológiának van szentelve.",
}

const values = [
  {
    code: "V.01",
    title: "Márkanevek nélkül",
    desc: "Minden tartalom mentes a gyártók neveitől, terméksorozatoktól és védjegyezett azonosítóktól. Az információt funkció és technológia alapján írjuk le, nem vállalati megnevezés szerint.",
  },
  {
    code: "V.02",
    title: "Pontosság mindenekelőtt",
    desc: "Minden műszaki állítást lektorált forrásokkal és mérnöki dokumentációval vetünk össze. Ha az adatok bizonytalanok, ezt kifejezetten jelezzük.",
  },
  {
    code: "V.03",
    title: "Független szerkesztőség",
    desc: "Ez az oldal nem fogad el hirdetéseket, szponzorációkat vagy affiliate megállapodásokat. A szerkesztői döntések kereskedelmi befolyástól mentesen születnek.",
  },
  {
    code: "V.04",
    title: "Érthető nyelv",
    desc: "A műszaki témákat közérthető nyelven magyarázzuk a pontosság feladása nélkül. Célunk, hogy a szakismeretet bármely érdeklődő számára elérhetővé tegyük.",
  },
]

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="mb-20 flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="h-px w-8 bg-primary" />
          <span className="font-mono text-xs text-primary tracking-[0.3em] uppercase">Azonosítási fájl</span>
        </div>
        <h1 className="font-display text-4xl md:text-5xl font-black uppercase text-foreground leading-tight">
          Az oldalról
        </h1>
      </div>

      {/* Intro section with image */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 items-center">
        <div className="flex flex-col gap-6">
          <p className="font-sans text-muted-foreground leading-relaxed">
            A Hungary VR Games Blog egy független tájékoztatási forrás, amely a virtuális valóság játékokat és a magával ragadó technológiát mutatja be. Azért jött létre, hogy világos, elfogulatlan információt nyújtson arról, hogyan működik a virtuális valóság, milyen hardver teszi lehetővé, és hogyan tervezik meg a benne lévő élményeket.
          </p>
          <p className="font-sans text-muted-foreground leading-relaxed">
            Az oldal szigorú szerkesztői semlegességi politika szerint működik. Egyetlen tartalom sem készül eszközgyártókkal, szoftverfejlesztőkkel vagy terjesztési platformokkal való partnerségben. Minden cikket azért írunk, hogy tájékoztassunk, nem hogy népszerűsítsünk.
          </p>
          <div className="border-l-2 border-primary pl-4">
            <p className="font-mono text-xs text-primary/80 leading-relaxed tracking-wide">
              Szerkesztői álláspontunk egyszerű: a technológiát azzal kell leírni, amit csinál, nem azzal, hogy ki gyártja.
            </p>
          </div>
        </div>
        <div className="relative h-72 md:h-full min-h-64 overflow-hidden border border-border">
          <Image
            src="/images/about-vr.jpg"
            alt="Absztrakt hálózati vizualizáció az adatvezérelt megközelítésünket jelképezi"
            fill
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          <div className="absolute bottom-4 left-4 font-mono text-[10px] text-primary/60 tracking-widest">
            RENDSZER: SEMLEGES_MÉDIA_CSOMÓPONT
          </div>
          <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-primary" />
          <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-primary" />
        </div>
      </div>

      {/* Values section */}
      <div className="mb-24">
        <div className="flex flex-col gap-3 mb-10">
          <span className="font-mono text-xs text-primary tracking-[0.3em] uppercase">Szerkesztői elvek</span>
          <h2 className="font-display text-2xl md:text-3xl font-black uppercase text-foreground">
            Amiért állunk
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {values.map((v) => (
            <div key={v.code} className="bg-background p-6 flex flex-col gap-3 group hover:bg-muted/30 transition-colors duration-200">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] text-primary border border-primary/40 px-2 py-0.5 tracking-widest">{v.code}</span>
              </div>
              <h3 className="font-display text-sm font-bold uppercase text-foreground tracking-wide">{v.title}</h3>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              <div className="h-px w-0 bg-primary group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>

      {/* Contact section */}
      <div className="border border-border relative">
        <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary" />
        <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-primary" />
        <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-primary" />
        <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary" />
        <div className="p-8 md:p-12">
          <div className="flex flex-col gap-3 mb-10">
            <span className="font-mono text-xs text-primary tracking-[0.3em] uppercase">Kommunikációs csatorna</span>
            <h2 className="font-display text-2xl md:text-3xl font-black uppercase text-foreground">
              Kapcsolat
            </h2>
            <p className="font-sans text-muted-foreground leading-relaxed max-w-xl">
              Az alábbi űrlappal küldhet nekünk üzenetet. Szívesen fogadjuk a tartalmi pontossággal, szerkesztői javaslatokkal vagy általános visszajelzéssel kapcsolatos megkereséseket.
            </p>
            <a
              href="mailto:info@hungaryvrgamesblog.com"
              className="font-mono text-xs tracking-wider text-primary hover:text-primary/80 transition-colors duration-200 break-all"
            >
              info@hungaryvrgamesblog.com
            </a>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
