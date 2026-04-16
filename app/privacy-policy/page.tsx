import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Adatvédelmi irányelvek | Hungary VR Games Blog",
  description: "A Hungary VR Games Blog adatvédelmi irányelvei. Utoljára frissítve: 2026.",
}

const sections = [
  {
    code: "AD.01",
    title: "Kik vagyunk?",
    body: "Ez az Adatvédelmi Irányelv a hungaryvrgamesblog.com weboldalra vonatkozik, amely egy független tájékoztatási blog a virtuális valóság játékokról. Az oldalt kereskedelmi kapcsolat nélkül üzemeltetjük bármely hardvergyártóhoz, szoftverfejlesztőhöz vagy forgalmazóhoz.",
  },
  {
    code: "AD.02",
    title: "Milyen adatokat gyűjtünk?",
    body: "Csak a weboldal működéséhez szükséges minimális adatokat gyűjtjük. Amikor elküldi a kapcsolatfelvételi űrlapot, az Ön által megadott nevet és e-mail-címet rögzítjük. A böngészés során a szabványos szervermaplók rögzíthetik az Ön IP-címét, böngészőtípusát és az Ön által meglátogatott oldalakat. Ezeket az adatokat kizárólag biztonsági ellenőrzésre és műszaki karbantartásra használjuk.",
  },
  {
    code: "AD.03",
    title: "Az adatkezelés jogalapja",
    body: "A kapcsolatfelvételi adatokat az Ön hozzájárulása alapján kezeljük, amelyet az űrlap önkéntes beküldésekor ad meg. A szervernaplóadatokat a weboldal biztonságának és stabilitásának fenntartásával kapcsolatos jogos érdekünk alapján kezeljük. A kapcsolatfelvételi adatok kezeléséhez adott hozzájárulását bármikor visszavonhatja.",
  },
  {
    code: "AD.04",
    title: "Hogyan használjuk az adatait?",
    body: "A kapcsolatfelvételi adatokat kizárólag a megkeresésre való válaszadáshoz használjuk. Nem alkalmazzuk marketingre, profilalkotásra vagy a közvetlen levelezésen túli egyéb célokra. A szervernaplóadatokat kizárólag technikai problémák diagnosztizálásához és jogosulatlan hozzáférési kísérletek észleléséhez használjuk.",
  },
  {
    code: "AD.05",
    title: "Adatmegosztás",
    body: "Nem adjuk el, nem adjuk bérbe és nem osztjuk meg személyes adatait harmadik felekkel kereskedelmi célokra. Az adatok átadhatók tárhelyszolgáltatónknak a szolgáltatás működtetése részeként, valamint hatóságoknak, ha azt az alkalmazandó jog megköveteli. Hirdetési vagy elemzési platformok nem kapják meg személyes adatait.",
  },
  {
    code: "AD.06",
    title: "Adatmegőrzés",
    body: "A kapcsolatfelvételi beküldéseket csak addig őrizzük meg, amíg a megkeresésre válaszolni szükséges, és utána egy ésszerű ideig referenciaként. A szervernaplókat legfeljebb 30 napig tároljuk. Ezek az időszakok után az adatokat véglegesen töröljük.",
  },
  {
    code: "AD.07",
    title: "Az Ön jogai",
    body: "Joga van hozzáférni, kijavítani vagy kérni az Önről általunk tárolt személyes adatok törlését. Joga van tiltakozni az adatkezelés ellen, és adathordozhatósághoz is jogosult, ahol ez alkalmazható. E jogok bármelyikének gyakorlásához használja a Rólunk oldalon lévő kapcsolatfelvételi űrlapot.",
  },
  {
    code: "AD.08",
    title: "Biztonság",
    body: "Megfelelő technikai és szervezeti intézkedéseket alkalmazunk az adatai jogosulatlan hozzáféréssel, elvesztéssel vagy közzétételsel szemben való védelme érdekében. Minden adatátvitel HTTPS titkosítást alkalmaz. A kapcsolatfelvételi adatokat csak a megőrzési szabályzatunkban meghatározott időszakra tároljuk.",
  },
  {
    code: "AD.09",
    title: "Harmadik fél hivatkozások",
    body: "Ez a weboldal tartalmazhat hivatkozásokat külső oldalakra. Nem vállalunk felelősséget az ilyen oldalak adatvédelmi gyakorlatáért vagy tartalmáért. Javasoljuk, hogy tekintse át az Ön által meglátogatott külső oldalak adatvédelmi szabályzatát.",
  },
  {
    code: "AD.10",
    title: "A szabályzat módosításai",
    body: "Frissíthetjük ezt az Adatvédelmi Irányelvet a jogszabályi követelmények vagy adatkezelési gyakorlatunk változásainak tükrözésére. A frissített verzió ezen az oldalon kerül közzétételre. Az oldal folyamatos használata a módosított irányelv elfogadását jelenti.",
  },
]

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="mb-16 flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="h-px w-8 bg-primary" />
          <span className="font-mono text-xs text-primary tracking-[0.3em] uppercase">Jogi dokumentum</span>
        </div>
        <h1 className="font-display text-4xl md:text-5xl font-black uppercase text-foreground leading-tight">
          Adatvédelmi irányelvek
        </h1>
        <div className="flex items-center gap-6 font-mono text-xs text-muted-foreground/60 tracking-widest flex-wrap">
          <span>UTOLJÁRA FRISSÍTVE: 2026</span>
          <span>OLDAL: HUNGARYVRGAMESBLOG.COM</span>
        </div>
      </div>

      {/* Intro */}
      <div className="mb-12 border-l-2 border-primary pl-5">
        <p className="font-sans text-muted-foreground leading-relaxed">
          Ez az Adatvédelmi Irányelv leírja, hogyan kezeli a hungaryvrgamesblog.com a személyes adatokat. Elkötelezettek vagyunk az Ön adatainak védelme és az átlátható működés iránt. Kérjük, olvassa el a{" "}
          <Link href="/cookie-policy" className="text-primary hover:underline">
            Cookie Szabályzatunkat
          </Link>{" "}
          is.
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
          Adatvédelmi kérdéseivel forduljon hozzánk a{" "}
          <Link href="/about" className="text-primary hover:underline">
            Rólunk oldalon
          </Link>{" "}
          lévő kapcsolatfelvételi űrlapon keresztül. Törekszünk 30 napon belül válaszolni.
        </p>
      </div>
    </div>
  )
}
