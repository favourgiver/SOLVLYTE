import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";

import { Faqs } from "./Faqs";
import { FinalCta } from "./FinalCta";
import { Hero } from "./Hero";
import { HowItWorks } from "./HowItWorks";
import { Introduction } from "./Introduction";
import { JustForYou } from "./JustForYou";
import { QualityAssurance } from "./QualityAssurance";
import { WhatWeOffer } from "./WhatWeOffer";
import { WhyChoose } from "./WhyChoose";

/**
 * The SOLVLYTE homepage. Section order is fixed by the brief:
 * Hero, Introduction, What We Offer, Why Choose SOLVLYTE, Just for You, How It Works,
 * Quality Assurance & After-Sales Support, FAQs, Final Call to Action.
 */
export function HomePage() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-forest focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-paper"
      >
        Skip to main content
      </a>
      <SiteHeader />
      <main id="main">
        <Hero />
        <Introduction />
        <WhatWeOffer />
        <WhyChoose />
        <JustForYou />
        <HowItWorks />
        <QualityAssurance />
        <Faqs />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
