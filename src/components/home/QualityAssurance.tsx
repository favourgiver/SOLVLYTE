import { BadgeCheck, LifeBuoy, ShieldCheck, Wrench } from "lucide-react";

import { photos } from "@/assets/images";
import { Picture } from "@/components/site/Picture";
import { Eyebrow, TwoTone } from "@/components/site/SectionHeading";
import { commitment } from "@/content/homepage";

/** One icon per assurance point, in the same order as the content file. */
const icons = [BadgeCheck, ShieldCheck, Wrench, LifeBuoy] as const;

/**
 * Section 7: quality assurance and after-sales support. A trust-focused split: one photograph
 * that stays in view on wide screens while the commitment and its four points are read.
 */
export function QualityAssurance() {
  const [opening, ...rest] = commitment.paragraphs;

  return (
    <section
      id="quality-assurance"
      aria-labelledby="quality-assurance-heading"
      className="py-[var(--section-y)]"
    >
      <div className="shell grid gap-y-10 lg:grid-cols-12 lg:gap-x-8">
        <div className="lg:col-span-5">
          <div className="arc-tr aspect-[4/3] overflow-hidden rounded-[1.25rem] bg-sky sm:aspect-[16/10] lg:sticky lg:top-28 lg:aspect-[4/5] lg:max-h-[calc(100svh-9rem)] lg:rounded-[1.75rem]">
            <Picture
              photo={photos.supportVisit}
              alt="A solar technician showing a tablet to a homeowner outside a house with solar panels on its roof."
              sizes="(min-width: 1320px) 500px, (min-width: 1024px) 40vw, 100vw"
              className="object-[50%_30%] lg:object-center"
            />
          </div>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <Eyebrow>{commitment.eyebrow}</Eyebrow>
          <h2 id="quality-assurance-heading" className="display-2 mt-5">
            <TwoTone heading={commitment.heading} />
          </h2>

          <p className="mt-7 font-display text-[1.25rem] font-medium leading-[1.45] tracking-[-0.015em] text-forest sm:text-[1.375rem]">
            {opening}
          </p>
          <div className="prose-body mt-5 space-y-5 text-charcoal">
            {rest.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          {/* Rows put the title beside the text only when this column is wide enough. */}
          <ul className="@container mt-10 border-t border-line lg:mt-12">
            {commitment.items.map((item, index) => {
              const Icon = icons[index] ?? BadgeCheck;
              return (
                <li
                  key={item.id}
                  className="grid grid-cols-[auto_minmax(0,1fr)] gap-x-5 border-b border-line py-6 @xl:grid-cols-[auto_minmax(0,13rem)_minmax(0,1fr)] @xl:gap-x-6"
                >
                  <span
                    aria-hidden="true"
                    className="row-span-2 grid size-11 place-items-center rounded-full border border-line bg-white text-forest @xl:row-span-1"
                  >
                    <Icon className="size-5" strokeWidth={1.5} />
                  </span>
                  <h3 className="title-3 self-center text-forest @xl:self-start @xl:pt-2">
                    {item.title}
                  </h3>
                  <p className="prose-card col-start-2 mt-1.5 text-charcoal @xl:col-start-3 @xl:mt-0 @xl:pt-2">
                    {item.body}
                  </p>
                </li>
              );
            })}
          </ul>

          <p className="mt-10 flex gap-4 font-display text-[1.375rem] font-semibold leading-[1.3] tracking-[-0.02em] text-forest sm:text-[1.625rem] lg:mt-12">
            <span aria-hidden="true" className="mt-[0.5em] h-0.5 w-8 shrink-0 bg-gold sm:w-10" />
            <span>{commitment.closing}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
