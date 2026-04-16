"use client"

import { useState } from "react"

type FormState = {
  name: string
  email: string
  message: string
}

export function ContactForm() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 1200)
  }

  const closePopup = () => {
    setSubmitted(false)
    setForm({ name: "", email: "", message: "" })
  }

  const inputClass =
    "w-full bg-muted/30 border border-border text-foreground font-mono text-sm px-4 py-3 focus:outline-none focus:border-primary/70 focus:bg-muted/50 transition-all duration-200 placeholder:text-muted-foreground/40 placeholder:text-xs placeholder:tracking-widest"

  return (
    <div className="relative">
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-2xl">
        {/* Name */}
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground">
            Azonosító
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="AZ ÖN NEVE"
            value={form.name}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground">
            Visszaküldési cím
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="AZ ÖN E-MAILJE"
            value={form.email}
            onChange={handleChange}
            className={inputClass}
          />
        </div>

        {/* Message */}
        <div className="md:col-span-2 flex flex-col gap-2">
          <label htmlFor="message" className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground">
            Üzenet
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="AZ ÖN ÜZENETE"
            value={form.message}
            onChange={handleChange}
            className={`${inputClass} resize-none`}
          />
        </div>

        {/* Submit */}
        <div className="md:col-span-2 flex items-center gap-4">
          <button
            type="submit"
            disabled={loading}
            className="font-mono text-xs tracking-widest uppercase px-8 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-3"
          >
            {loading ? (
              <>
                <span className="w-3 h-3 border border-primary-foreground border-t-transparent rounded-full animate-spin" />
                <span>Küldés folyamatban</span>
              </>
            ) : (
              "Üzenet elküldése"
            )}
          </button>
          <span className="font-mono text-[10px] text-muted-foreground/50 tracking-widest">
            Titkosított / Adatát nem adjuk el
          </span>
        </div>
      </form>

      {/* Success popup overlay */}
      {submitted && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm px-4"
          role="dialog"
          aria-modal="true"
          aria-label="Üzenet elküldve visszaigazolás"
        >
          <div className="max-w-md w-full bg-card border border-primary/50 p-8 relative">
            <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-primary" />
            <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-primary" />
            <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-primary" />
            <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-primary" />

            <div className="flex flex-col gap-5 text-center">
              <div className="flex items-center justify-center gap-2 mx-auto">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="font-mono text-xs text-primary tracking-widest uppercase">Jel fogadva</span>
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="font-display text-xl font-bold uppercase text-foreground">
                  Üzenet elküldve
                </h3>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                  Üzenetét megkaptuk. Áttekintjük, és ahol szükséges, válaszolunk.
                </p>
              </div>

              <div className="border border-border p-3 font-mono text-xs text-muted-foreground/60 text-left space-y-1">
                <div className="flex justify-between">
                  <span>FELADÓ</span>
                  <span className="text-foreground truncate ml-4">{form.name}</span>
                </div>
                <div className="flex justify-between">
                  <span>ÁLLAPOT</span>
                  <span className="text-primary">KÉZBESÍTVE</span>
                </div>
                <div className="flex justify-between">
                  <span>IDŐBÉLYEG</span>
                  <span>{new Date().toISOString().slice(0, 10)}</span>
                </div>
              </div>

              <button
                onClick={closePopup}
                className="font-mono text-xs tracking-widest uppercase px-6 py-3 border border-primary/50 text-primary hover:bg-primary/10 transition-all duration-200 mx-auto"
              >
                Csatorna bezárása
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
