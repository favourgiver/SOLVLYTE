import { photos } from "@/assets/images";
import { CtaButton } from "@/components/site/CtaButton";
import { Picture } from "@/components/site/Picture";
import { Eyebrow, TwoTone } from "@/components/site/SectionHeading";
import { finalCta } from "@/content/homepage";

/**
 * Section 9: the closing call to action. Opens the deep-green band that runs on into the
 * footer; the dusk photograph closes the day that the hero photograph began.
 */
export function FinalCta() {
  return (
    <section
      id="get-started"
      aria-labelledby="get-started-heading"
      className="on-dark rounded-t-[1.5rem] bg-forest pb-14 pt-[var(--section-y)] text-paper sm:pb-16 lg:rounded-t-[2.5rem] lg:pb-24"
    >
      <div className="shell grid gap-y-12 lg:grid-cols-12 lg:items-center lg:gap-x-8">
        <div className="lg:col-span-7">
          <Eyebrow surface="dark">{finalCta.eyebrow}</Eyebrow>
          <h2 id="get-started-heading" className="display-2 mt-5">
            <TwoTone heading={finalCta.heading} surface="dark" />
          </h2>
          <div className="lead mt-7 max-w-[36rem] space-y-4 text-mist">
            {finalCta.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <CtaButton variant="primary">{finalCta.primaryCta}</CtaButton>
            <CtaButton variant="outline" surface="dark">
              {finalCta.secondaryCta}
            </CtaButton>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="arc-tl aspect-[4/3] overflow-hidden rounded-[1.25rem] bg-forest-soft sm:aspect-[16/10] lg:aspect-[5/6] lg:rounded-[1.75rem]">
            <Picture
              photo={photos.duskHome}
              alt="A two-storey home at dusk with its windows lit and solar panels on the roof."
              sizes="(min-width: 1320px) 500px, (min-width: 1024px) 40vw, 100vw"
              className="object-[78%_60%] lg:object-[86%_60%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
