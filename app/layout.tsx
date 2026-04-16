import type { Metadata } from "next"
import { Orbitron, Space_Grotesk, Space_Mono } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { SiteFooter } from "@/components/site-footer"
import { CookieBanner } from "@/components/cookie-banner"

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Hungary VR Games Blog",
    template: "%s | Hungary VR Games Blog",
  },
  description:
    "Futurisztikus információs blog a virtuális valóság játékokról, eszközökről és a magával ragadó élmények világáról. Márkanevek nélkül, tiszta tudás.",
  keywords: ["virtuális valóság", "VR játékok", "VR eszközök", "magával ragadó játékok", "VR blog"],
  authors: [{ name: "HungaryVRGamesBlog" }],
  openGraph: {
    title: "Hungary VR Games Blog",
    description:
      "Fedezd fel a virtuális valóság játékokat, eszközöket és az élmények jövőjét.",
    type: "website",
    locale: "hu_HU",
    siteName: "HungaryVRGamesBlog",
  },
}

export const viewport = {
  themeColor: "#031014",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="hu"
      className={`${orbitron.variable} ${spaceGrotesk.variable} ${spaceMono.variable} bg-background`}
    >
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <CookieBanner />
      </body>
    </html>
  )
}
