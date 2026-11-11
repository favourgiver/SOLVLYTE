import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type CtaButtonProps = {
  children: ReactNode;
  /** "primary" is the single gold action; "outline" is every supporting action. */
  variant?: "primary" | "outline";
  /** The surface the button sits on. */
  surface?: "light" | "dark";
  size?: "compact" | "regular";
  /**
   * Leave unset in this phase. The buttons are visual only: there is no booking flow, form or
   * other page yet. Pass an href once the destination exists and the button becomes a link.
   */
  href?: string;
  className?: string;
};

const base =
  "group/cta inline-flex shrink-0 cursor-pointer items-center justify-center whitespace-nowrap rounded-full font-sans font-semibold transition-colors duration-200";

const sizes = {
  compact: "h-11 gap-2 text-[0.8125rem] sm:text-sm",
  regular: "h-[3.25rem] gap-3 text-[0.9375rem] sm:h-14 sm:text-base",
} as const;

const padding = {
  primary: { compact: "pl-4 pr-4 sm:pl-5 sm:pr-1.5", regular: "pl-6 pr-2" },
  outline: { compact: "px-5", regular: "px-6 sm:px-7" },
} as const;

const variants = {
  primary: "bg-gold text-forest-deep hover:bg-gold-deep",
  outline: {
    light:
      "border border-forest/30 text-forest hover:border-forest hover:bg-forest hover:text-paper",
    dark: "border border-paper/35 text-paper hover:border-paper hover:bg-paper hover:text-forest",
  },
} as const;

/** The site's one button. Renders a link when it has somewhere to go, otherwise a button. */
export function CtaButton({
  children,
  variant = "primary",
  surface = "light",
  size = "regular",
  href,
  className,
}: CtaButtonProps) {
  const classes = cn(
    base,
    sizes[size],
    padding[variant][size],
    variant === "primary" ? variants.primary : variants.outline[surface],
    className,
  );

  const content =
    variant === "primary" ? (
      <>
        <span>{children}</span>
        <span
          aria-hidden="true"
          className={cn(
            "place-items-center rounded-full bg-forest text-gold",
            size === "compact" ? "hidden size-8 sm:grid" : "grid size-9 sm:size-10",
          )}
        >
          <ArrowRight
            className="size-4 transition-transform duration-200 group-hover/cta:translate-x-0.5"
            strokeWidth={2}
          />
        </span>
      </>
    ) : (
      <>
        <span>{children}</span>
        <ArrowRight
          aria-hidden="true"
          className="size-4 transition-transform duration-200 group-hover/cta:translate-x-0.5"
          strokeWidth={2}
        />
      </>
    );

  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={classes}>
      {content}
    </button>
  );
}
