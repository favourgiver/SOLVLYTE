import { photos } from "@/assets/images";
import { CtaButton } from "@/components/site/CtaButton";
import { Picture } from "@/components/site/Picture";
import { Eyebrow, TwoTone } from "@/components/site/SectionHeading";
import { introduction } from "@/content/homepage";

/** Section 2: who SOLVLYTE is. Editorial two-column text over a layered pair of photographs. */
export function Introduction() {
  const [opening, ...rest] = introduction.paragraphs;

  return (
    <section id="about" aria-labelledby="about-heading" className="py-[var(--section-y)]">
      <div className="shell">
        <div className="grid gap-y-8 lg:grid-cols-12 lg:gap-x-8">
          <div className="lg:col-span-6">
            <Eyebrow>{introduction.eyebrow}</Eyebrow>
            <h2 id="about-heading" className="display-2 mt-5">
              <TwoTone heading={introduction.heading} />
            </h2>
          </div>

          <div className="lg:col-span-6 lg:col-start-7 lg:pt-10">
            <p className="font-display text-[1.375rem] font-medium leading-[1.4] tracking-[-0.015em] text-forest sm:text-2xl sm:leading-[1.4]">
              {opening}
            </p>
            <div className="prose-body mt-6 space-y-5 text-charcoal">
              {rest.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <CtaButton variant="outline" className="mt-9">
              {introduction.cta}
            </CtaButton>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-12 items-start lg:mt-20">
          <div className="arc-tr col-[1/-1] row-start-1 aspect-[4/3] overflow-hidden rounded-[1.25rem] bg-sky sm:aspect-[16/9] md:col-[1/10] lg:rounded-[1.75rem]">
            <Picture
              photo={photos.installTeam}
              alt="Two solar installers in hard hats and safety harnesses fitting a solar panel onto rooftop mounting rails."
              sizes="(min-width: 1320px) 930px, (min-width: 768px) 72vw, 100vw"
            />
          </div>
          <div className="relative col-[6/-1] row-start-2 -mt-12 aspect-[4/5] overflow-hidden rounded-[1.25rem] bg-sky ring-[6px] ring-paper sm:col-[8/-1] sm:-mt-24 md:col-[9/-1] md:row-start-1 md:mt-24 lg:mt-32 lg:rounded-[1.75rem] lg:ring-8">
            <Picture
              photo={photos.installer}
              alt="A solar installer in a hard hat and safety harness checking the alignment of a rooftop solar panel."
              sizes="(min-width: 1320px) 410px, (min-width: 768px) 32vw, 58vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
