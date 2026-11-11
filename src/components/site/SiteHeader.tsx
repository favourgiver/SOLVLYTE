import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { hero, navigation } from "@/content/homepage";
import { cn } from "@/lib/utils";

import { CtaButton } from "./CtaButton";
import { Wordmark } from "./Wordmark";

/**
 * Compact sticky header: wordmark, the four future-facing labels and the consultation button.
 * The labels scroll within this page for now; the button is visual only (see CtaButton).
 */
export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b bg-paper transition-colors duration-200",
        scrolled || menuOpen ? "border-line" : "border-transparent",
      )}
    >
      <div className="shell flex h-16 items-center justify-between gap-3 lg:h-[4.5rem]">
        <a href="#top" className="flex h-11 items-center rounded-sm text-forest">
          <Wordmark className="text-[0.9375rem] sm:text-[1.0625rem]" />
        </a>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1 rounded-full border border-line bg-white/70 p-1">
            {navigation.map((item, index) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  aria-current={index === 0 ? "page" : undefined}
                  className={cn(
                    "flex h-10 items-center rounded-full px-5 text-sm font-medium transition-colors duration-200",
                    index === 0 ? "bg-forest text-paper" : "text-forest hover:bg-sage",
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <CtaButton size="compact" className="hidden min-[24.25rem]:inline-flex">
            {hero.primaryCta}
          </CtaButton>
          <button
            type="button"
            className="grid size-11 cursor-pointer place-items-center rounded-full border border-line text-forest transition-colors duration-200 hover:bg-sage lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? (
              <X aria-hidden="true" className="size-5" strokeWidth={1.75} />
            ) : (
              <Menu aria-hidden="true" className="size-5" strokeWidth={1.75} />
            )}
          </button>
        </div>
      </div>

      <nav
        id="mobile-menu"
        aria-label="Main"
        hidden={!menuOpen}
        className="max-h-[calc(100svh-4rem)] overflow-y-auto border-t border-line bg-paper lg:hidden"
      >
        <div className="shell pb-6 pt-2">
          <ul>
            {navigation.map((item, index) => (
              <li key={item.label} className="border-b border-line">
                <a
                  href={item.href}
                  aria-current={index === 0 ? "page" : undefined}
                  className="flex h-14 items-center justify-between font-display text-lg font-semibold text-forest"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          {/* Only where the header itself has no room for the button. */}
          <CtaButton className="mt-6 w-full min-[24.25rem]:hidden">{hero.primaryCta}</CtaButton>
        </div>
      </nav>
    </header>
  );
}
