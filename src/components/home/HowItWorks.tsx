import { CtaButton } from "@/components/site/CtaButton";
import { SectionHeading } from "@/components/site/SectionHeading";
import { journey } from "@/content/homepage";
import { cn } from "@/lib/utils";

/**
 * Section 6: the five-step journey. Step 01, booking the free consultation, is the filled
 * deep-green card; the other four run on from it along a hairline. Five across on wide
 * desktops; below that the card takes its own row above the other steps.
 */
export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="bg-white py-[var(--section-y)]"
    >
      <div className="shell">
        <SectionHeading
          id="how-it-works-heading"
          eyebrow={journey.eyebrow}
          heading={journey.heading}
          intro={journey.intro}
        />

        <ol className="mt-12 grid gap-x-6 gap-y-9 md:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 xl:grid-cols-[1.24fr_repeat(4,minmax(0,1fr))] xl:items-start xl:gap-x-0">
          {journey.steps.map((step, index) => {
            const first = index === 0;
            return (
              <li
                key={step.number}
                className={cn(
                  first
                    ? "on-dark rounded-[1.25rem] bg-forest p-7 text-paper md:col-span-2 lg:col-span-4 lg:rounded-[1.5rem] lg:p-8 xl:col-span-1"
                    : "xl:pl-8 xl:pt-8",
                )}
              >
                <div className="flex items-center gap-4">
                  <span
                    className={cn(
                      "font-display text-[2.25rem] font-light leading-none tracking-[-0.04em] tabular-nums",
                      first ? "text-gold" : "text-moss",
                    )}
                  >
                    {step.number}
                  </span>
                  <span
                    aria-hidden="true"
                    className={cn("h-px flex-1", first ? "bg-line-inverse" : "bg-line")}
                  />
                </div>
                <h3 className={cn("title-3 mt-6", first ? "text-paper" : "text-forest")}>
                  {step.title}
                </h3>
                <p
                  className={cn(
                    "prose-card mt-2.5",
                    first ? "max-w-[44rem] text-mist" : "text-charcoal",
                  )}
                >
                  {step.body}
                </p>
              </li>
            );
          })}
        </ol>

        <div className="mt-10 lg:mt-14">
          <CtaButton variant="primary">{journey.cta}</CtaButton>
        </div>
      </div>
    </section>
  );
}
