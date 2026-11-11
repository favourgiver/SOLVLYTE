import { brand } from "@/content/homepage";
import { cn } from "@/lib/utils";

/**
 * SOLVLYTE as a text wordmark. No logo file has been supplied, so the name is set in the
 * display typeface; swap this component's contents for the logo when one exists.
 */
export function Wordmark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "font-display font-extrabold leading-none tracking-[0.2em] [margin-right:-0.2em]",
        className,
      )}
    >
      {brand.name}
    </span>
  );
}
