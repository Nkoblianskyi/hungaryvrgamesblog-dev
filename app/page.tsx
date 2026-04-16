import { HeroSection } from "@/components/home/hero-section"
import { WhatIsVR } from "@/components/home/what-is-vr"
import { GadgetsPreview } from "@/components/home/gadgets-preview"
import { FactsSection } from "@/components/home/facts-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhatIsVR />
      <GadgetsPreview />
      <FactsSection />
    </>
  )
}
