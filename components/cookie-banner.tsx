"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("vr_cookie_consent")
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 800)
      return () => clearTimeout(timer)
    }
  }, [])

  const accept = () => {
    localStorage.setItem("vr_cookie_consent", "accepted")
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem("vr_cookie_consent", "declined")
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
          aria-label="Cookie hozzájárulás"
      className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
    >
      <div className="max-w-4xl mx-auto card-glow rounded-none border border-primary/30 p-5 relative">
        {/* Corner accent lines */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-primary" />
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-primary" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-primary" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-primary" />

        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex-1">
            <p className="font-mono text-xs text-muted-foreground tracking-wide leading-relaxed">
              Ez a weboldal sütiket (cookie-kat) használ a forgalom elemzéséhez és a felhasználói élmény javításához.
              A böngészés folytatásával elfogadod a{" "}
              <Link href="/cookie-policy" className="text-primary hover:underline">
                Cookie szabályzatunkat
              </Link>{" "}
              és az{" "}
              <Link href="/privacy-policy" className="text-primary hover:underline">
                Adatvédelmi irányelveinket
              </Link>
              .
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={decline}
              className="font-mono text-xs tracking-widest uppercase px-4 py-2 border border-border text-muted-foreground hover:border-primary/50 hover:text-foreground transition-all duration-200"
            >
              Elutasítás
            </button>
            <button
              onClick={accept}
              className="font-mono text-xs tracking-widest uppercase px-5 py-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200"
            >
              Elfogadás
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
