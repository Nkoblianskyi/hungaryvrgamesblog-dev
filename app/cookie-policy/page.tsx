import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Cookie szabályzat | Hungary VR Games Blog",
  description: "A Hungary VR Games Blog cookie szabályzata. Utoljára frissítve: 2026.",
}

const sections = [
  {
    code: "CK.01",
    title: "Mik azok a cookie-k?",
    body: "A cookie-k (sütik) kis szövegfájlok, amelyeket egy weboldal helyez el az eszközén, amikor meglátogatja. Széles körben használják a weboldalak helyes működéséhez, a hatékonyság javításához és a weboldal-üzemeltetők tájékoztatásához. A cookie-k lehetnek ideiglenesek (munkamenet-sütik, amelyek törlődnek a böngésző bezárásakor) vagy állandóak (meghatározott ideig tárolva).",
  },
  {
    code: "CK.02",
    title: "Hogyan használjuk a cookie-kat?",
    body: "Ez az oldal kizárólag a weboldal megfelelő technikai működésének biztosítására és a cookie-hozzájárulási beállítás megjegyzésére használ cookie-kat. Nem alkalmazunk cookie-kat hirdetési, remarketing vagy webhelyek közötti követési célokra. Harmadik fél követési szkriptjeit nem töltjük be az Ön hozzájárulása nélkül.",
  },
  {
    code: "CK.03",
    title: "Milyen cookie-kat használunk?",
    body: "Egyetlen cookie-kategóriát alkalmazunk: funkcionális cookie-kat. Ezek szigorúan szükségesek a weboldal működéséhez és a hozzájárulási döntés tárolásához. Nem gyűjtenek személyes adatokat marketing vagy elemzési célokra. Például az Ön cookie-hozzájárulási állapota a 'vr_cookie_consent' kulcs alatt kerül tárolásra.",
  },
  {
    code: "CK.04",
    title: "Az Ön lehetőségei",
    body: "Az oldal első látogatásakor egy hozzájárulási sáv jelenik meg. Elfogadhatja vagy elutasíthatja a cookie-kat abból a sávból. Ha elutasítja, csak az alapvető munkamenet-funkcionalitás marad meg, és nem írunk állandó cookie-kat az elutasítási rekordján kívül. A meglévő cookie-kat bármikor törölheti a böngésző beállításain keresztül.",
  },
  {
    code: "CK.05",
    title: "Böngésző vezérlők",
    body: "Az összes főbb webböngésző lehetővé teszi a cookie-k kezelését, blokkolását vagy törlését a beállítások menükön keresztül. A cookie-k korlátozása hatással lehet a weboldal egyes részeinek működésére. A cookie-k kezelésére vonatkozó konkrét utasításokért tekintse meg a böngésző dokumentációját.",
  },
  {
    code: "CK.06",
    title: "A szabályzat módosításai",
    body: "Időszakosan frissíthetjük ezt a Cookie Szabályzatot. A változások ezen az oldalon jelennek meg frissített felülvizsgálati dátummal. Az oldal folyamatos használata az esetleges változtatások elfogadását jelenti.",
  },
]

export default function CookiePolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="mb-16 flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="h-px w-8 bg-primary" />
          <span className="font-mono text-xs text-primary tracking-[0.3em] uppercase">Jogi dokumentum</span>
        </div>
        <h1 className="font-display text-4xl md:text-5xl font-black uppercase text-foreground leading-tight">
          Cookie szabályzat
        </h1>
        <div className="flex items-center gap-6 font-mono text-xs text-muted-foreground/60 tracking-widest flex-wrap">
          <span>UTOLJÁRA FRISSÍTVE: 2026</span>
          <span>OLDAL: HUNGARYVRGAMESBLOG.COM</span>
        </div>
      </div>

      {/* Intro */}
      <div className="mb-12 border-l-2 border-primary pl-5">
        <p className="font-sans text-muted-foreground leading-relaxed">
          Ez a Cookie Szabályzat ismerteti, mik azok a cookie-k, hogyan használja azokat ez a weboldal, és milyen lehetőségei vannak a használatukkal kapcsolatban. Kérjük, olvassa el együtt az{" "}
          <Link href="/privacy-policy" className="text-primary hover:underline">
            Adatvédelmi irányelveinkkel
          </Link>
          .
        </p>
      </div>

      {/* Sections */}
      <div className="flex flex-col">
        {sections.map((s, i) => (
          <div
            key={s.code}
            className={`border border-border p-6 -mt-px relative group hover:border-primary/30 transition-colors duration-200 ${
              i % 2 === 0 ? "bg-card" : "bg-background"
            }`}
          >
            <div className="flex items-start gap-5">
              <span className="font-mono text-[10px] text-primary border border-primary/40 px-2 py-1 tracking-widest shrink-0 mt-0.5">
                {s.code}
              </span>
              <div className="flex flex-col gap-2">
                <h2 className="font-display text-sm font-bold uppercase text-foreground tracking-wide">
                  {s.title}
                </h2>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">{s.body}</p>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary/50 group-hover:w-full transition-all duration-500" />
          </div>
        ))}
      </div>

      {/* Footer note */}
      <div className="mt-12 border border-border p-5 relative bg-muted/20">
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary" />
        <p className="font-mono text-xs text-muted-foreground/70 leading-relaxed tracking-wide">
          A szabályzattal kapcsolatos kérdéseit a{" "}
          <Link href="/about" className="text-primary hover:underline">
            Rólunk oldalon
          </Link>{" "}
          található kapcsolatfelvételi űrlapon keresztül teheti fel.
        </p>
      </div>
    </div>
  )
}
