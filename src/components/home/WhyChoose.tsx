import { Gem, Headset, PencilRuler, SlidersHorizontal } from "lucide-react";

import { SectionHeading } from "@/components/site/SectionHeading";
import { advantage } from "@/content/homepage";

/** One icon per differentiator, in the same order as the content file. */
const icons = [Gem, SlidersHorizontal, PencilRuler, Headset] as const;

/**
 * Section 4: the SOLVLYTE advantage. The page's deep-green feature panel: light type,
 * hairline rules and gold details, with a quiet sun-arc drawn into the corner on wide screens
 * (where the heading leaves that corner free).
 */
export function WhyChoose() {
  return (
    <section
      id="why-choose-solvlyte"
      aria-labelledby="why-choose-heading"
      className="px-[var(--bleed)] pt-[var(--section-y)]"
    >
      <div className="panel on-dark relative overflow-hidden bg-forest text-paper">
        <svg
          aria-hidden="true"
          viewBox="0 0 400 400"
          className="pointer-events-none absolute right-0 top-0 hidden size-[21rem] text-gold/30 lg:block"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        >
          <circle cx="400" cy="0" r="150" vectorEffect="non-scaling-stroke" />
          <circle cx="400" cy="0" r="270" vectorEffect="non-scaling-stroke" />
          <circle cx="400" cy="0" r="390" vectorEffect="non-scaling-stroke" />
        </svg>

        <div className="panel-shell relative py-14 sm:py-16 lg:py-24">
          <SectionHeading
            id="why-choose-heading"
            eyebrow={advantage.eyebrow}
            heading={advantage.heading}
            intro={advantage.intro}
            surface="dark"
            layout="stack"
          />

          <ul className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
            {advantage.items.map((item, index) => {
              const Icon = icons[index] ?? Gem;
              return (
                <li key={item.id} className="border-t border-line-inverse pt-7">
                  <Icon aria-hidden="true" className="size-7 text-gold" strokeWidth={1.5} />
                  <h3 className="title-3 mt-6 text-paper lg:min-h-[2.56em]">{item.title}</h3>
                  <p className="prose-card mt-3 text-mist">{item.body}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
