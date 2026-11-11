import { BatteryCharging, HardHat, SolarPanel, Wrench } from "lucide-react";
import type { ComponentType, SVGProps } from "react";

import { photos, type Photo } from "@/assets/images";
import { CtaButton } from "@/components/site/CtaButton";
import { InverterIcon } from "@/components/site/icons";
import { Picture } from "@/components/site/Picture";
import { SectionHeading } from "@/components/site/SectionHeading";
import { offer, type CopyItem } from "@/content/homepage";
import { cn } from "@/lib/utils";

type Icon = ComponentType<SVGProps<SVGSVGElement>>;

type OfferVisual = {
  icon: Icon;
  photo?: { source: Photo; alt: string; sizes: string; position?: string };
};

/** Icon and, for the three products, a photograph. Keyed by the item ids in the content file. */
const visuals: Record<string, OfferVisual> = {
  "solar-panels": {
    icon: SolarPanel,
    photo: {
      source: photos.solarPanels,
      alt: "A row of black solar panels mounted on rails along a rooftop, with palm trees behind.",
      sizes: "(min-width: 1024px) 660px, (min-width: 768px) 90vw, 100vw",
      // The tall desktop card zooms in on the panel's frame corner instead of the sky above it.
      position: "object-[30%_50%] lg:origin-bottom lg:scale-[1.3] lg:object-[25%_50%]",
    },
  },
  "solar-inverters": {
    icon: InverterIcon,
    photo: {
      source: photos.solarInverter,
      alt: "A white solar inverter mounted on a wall beside a distribution box with an isolator switch.",
      sizes: "(min-width: 1024px) 350px, (min-width: 768px) 45vw, 100vw",
      position: "object-[42%_38%]",
    },
  },
  "solar-batteries": {
    icon: BatteryCharging,
    photo: {
      source: photos.solarBattery,
      alt: "A white floor-standing solar storage battery with a green charge indicator, neatly cabled against a wall.",
      sizes: "(min-width: 1024px) 350px, (min-width: 768px) 45vw, 100vw",
      position: "object-[50%_58%]",
    },
  },
  "solar-installation": { icon: HardHat },
  "maintenance-repairs": { icon: Wrench },
};

function IconChip({ icon: IconComponent, className }: { icon: Icon; className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "grid size-12 place-items-center rounded-full border border-line bg-white text-forest",
        className,
      )}
    >
      <IconComponent className="size-[1.375rem]" strokeWidth={1.5} />
    </span>
  );
}

function OfferCard({ item, featured = false }: { item: CopyItem; featured?: boolean }) {
  const visual = visuals[item.id];
  if (!visual) return null;

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[1.25rem] bg-white lg:rounded-[1.5rem]">
      {visual.photo ? (
        <div
          className={cn(
            "relative overflow-hidden bg-sky",
            featured
              ? "aspect-[4/3] md:aspect-[2/1] lg:aspect-auto lg:min-h-[19rem] lg:flex-1"
              : "aspect-[16/10]",
          )}
        >
          <Picture
            photo={visual.photo.source}
            alt={visual.photo.alt}
            sizes={visual.photo.sizes}
            className={visual.photo.position}
          />
        </div>
      ) : null}

      <div className={cn("relative p-6 sm:p-7", featured && "lg:p-9")}>
        <IconChip
          icon={visual.icon}
          className={cn(
            visual.photo && "absolute -top-6 left-6 sm:left-7",
            visual.photo && featured && "lg:left-9",
          )}
        />
        <h3 className={cn("title-3 text-forest", visual.photo ? "mt-5" : "mt-6")}>{item.title}</h3>
        <p className="prose-card mt-2.5 text-charcoal">{item.body}</p>
      </div>
    </article>
  );
}

/**
 * Section 3: the five products and services. The three products are photographed, the two
 * services are icon-led, and Solar Panels takes the tall lead card.
 */
export function WhatWeOffer() {
  return (
    <section
      id="what-we-offer"
      aria-labelledby="what-we-offer-heading"
      className="bg-sage py-[var(--section-y)]"
    >
      <div className="shell">
        <SectionHeading
          id="what-we-offer-heading"
          eyebrow={offer.eyebrow}
          heading={offer.heading}
          intro={offer.intro}
        />

        <ul className="mt-12 grid gap-4 md:grid-cols-2 lg:mt-16 lg:grid-cols-[5fr_3.5fr_3.5fr] lg:gap-5">
          {offer.items.map((item, index) => (
            <li
              key={item.id}
              className={index === 0 ? "md:col-span-2 lg:col-span-1 lg:row-span-2" : ""}
            >
              <OfferCard item={item} featured={index === 0} />
            </li>
          ))}
        </ul>

        <div className="mt-10 flex justify-center lg:mt-12">
          <CtaButton variant="outline">{offer.cta}</CtaButton>
        </div>
      </div>
    </section>
  );
}
