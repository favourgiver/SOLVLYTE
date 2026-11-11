import { Fuel, Lightbulb, Plug, Sofa, TrendingUp, Unplug } from "lucide-react";

import { photos } from "@/assets/images";
import { Picture } from "@/components/site/Picture";
import { SectionHeading } from "@/components/site/SectionHeading";
import { benefits } from "@/content/homepage";

/** One icon per benefit, in the same order as the content file. */
const icons = [Lightbulb, Fuel, Unplug, Sofa, Plug, TrendingUp] as const;

/**
 * Section 5: six customer benefits as sage tiles in a modular grid beside one tall photograph
 * (three tiles across on wide desktops, two across below that, one on phones).
 */
export function JustForYou() {
  return (
    <section
      id="just-for-you"
      aria-labelledby="just-for-you-heading"
      className="py-[var(--section-y)]"
    >
      <div className="shell">
        <SectionHeading
          id="just-for-you-heading"
          eyebrow={benefits.eyebrow}
          heading={benefits.heading}
          intro={benefits.intro}
          layout="stack"
        />

        <div className="mt-12 grid gap-4 lg:mt-16 lg:grid-cols-3 lg:gap-5 xl:grid-cols-4">
          <div className="aspect-[4/5] overflow-hidden rounded-[1.25rem] bg-sky sm:aspect-[16/9] lg:aspect-auto lg:rounded-[1.5rem]">
            <Picture
              photo={photos.eveningHome}
              alt="A mother and her young daughter reading together on a sofa in a warmly lit living room at dusk."
              sizes="(min-width: 1024px) 310px, (min-width: 640px) 90vw, 100vw"
              className="object-[50%_72%] lg:object-[62%_70%]"
            />
          </div>

          <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-2 lg:gap-5 xl:col-span-3 xl:grid-cols-3">
            {benefits.items.map((item, index) => {
              const Icon = icons[index] ?? Lightbulb;
              return (
                <li
                  key={item.id}
                  className="rounded-[1.25rem] bg-sage p-6 sm:p-7 lg:rounded-[1.5rem]"
                >
                  <Icon aria-hidden="true" className="size-6 text-forest" strokeWidth={1.5} />
                  <h3 className="title-3 mt-8 text-forest lg:mt-12">{item.title}</h3>
                  <p className="prose-card mt-2.5 text-charcoal">{item.body}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
