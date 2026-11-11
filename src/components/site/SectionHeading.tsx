import type { ReactNode } from "react";

import type { TwoToneHeading } from "@/content/homepage";
import { cn } from "@/lib/utils";

type Surface = "light" | "dark";

/** Small uppercase label above a heading, led by the gold "sun" dot. */
export function Eyebrow({
  children,
  surface = "light",
  className,
}: {
  children: ReactNode;
  surface?: Surface;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "eyebrow flex items-start gap-3",
        surface === "dark" ? "text-gold" : "text-forest",
        className,
      )}
    >
      {/* The dot is centred on the first line, so it stays put when the label wraps. */}
      <span aria-hidden="true" className="mt-[0.3125rem] size-2 shrink-0 rounded-full bg-gold" />
      <span>{children}</span>
    </p>
  );
}

/**
 * Renders an approved heading in two tones. The words and their order come straight from the
 * content file; only the colour of each half changes.
 */
export function TwoTone({
  heading,
  surface = "light",
}: {
  heading: TwoToneHeading;
  surface?: Surface;
}) {
  // Each half is its own block, so the change of tone always falls on a line break.
  const strong = (
    <span className={cn("block", surface === "dark" ? "text-paper" : "text-forest")}>
      {heading.strong}
    </span>
  );
  const soft = (
    <span className={cn("block", surface === "dark" ? "text-fern" : "text-moss")}>
      {heading.soft}
    </span>
  );

  return heading.order === "soft-first" ? (
    <>
      {soft} {strong}
    </>
  ) : (
    <>
      {strong} {soft}
    </>
  );
}

type SectionHeadingProps = {
  /** id for the <h2>, referenced by the section's aria-labelledby. */
  id: string;
  eyebrow: string;
  heading: TwoToneHeading;
  /** Optional introduction paragraph. */
  intro?: string;
  surface?: Surface;
  /**
   * "split" places the introduction beside the heading on wide screens;
   * "stack" keeps everything in one left-aligned column.
   */
  layout?: "split" | "stack";
  className?: string;
};

/** Eyebrow, two-tone <h2> and optional introduction: the opening of every section. */
export function SectionHeading({
  id,
  eyebrow,
  heading,
  intro,
  surface = "light",
  layout = "split",
  className,
}: SectionHeadingProps) {
  const introClasses = cn("lead", surface === "dark" ? "text-mist" : "text-charcoal");

  if (layout === "stack") {
    return (
      <div className={cn("max-w-3xl", className)}>
        <Eyebrow surface={surface}>{eyebrow}</Eyebrow>
        <h2 id={id} className="display-2 mt-5">
          <TwoTone heading={heading} surface={surface} />
        </h2>
        {intro ? <p className={cn(introClasses, "mt-6 max-w-2xl")}>{intro}</p> : null}
      </div>
    );
  }

  return (
    <div className={cn("grid gap-6 lg:grid-cols-12 lg:items-end lg:gap-x-8", className)}>
      <div className="lg:col-span-7">
        <Eyebrow surface={surface}>{eyebrow}</Eyebrow>
        <h2 id={id} className="display-2 mt-5">
          <TwoTone heading={heading} surface={surface} />
        </h2>
      </div>
      {intro ? (
        <p className={cn(introClasses, "max-w-2xl lg:col-span-5 lg:col-start-8 lg:pl-6")}>
          {intro}
        </p>
      ) : null}
    </div>
  );
}
