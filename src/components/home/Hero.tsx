import { Pause, Play } from "lucide-react";
import { useEffect, useState, type CSSProperties } from "react";

import { photos } from "@/assets/images";
import { CtaButton } from "@/components/site/CtaButton";
import { Eyebrow, TwoTone } from "@/components/site/SectionHeading";
import { hero } from "@/content/homepage";

/** How long each slide stays before the calm cross-fade to the other one. */
export const HERO_SLIDE_MS = 6000;

const slideMedia = [
  {
    photo: photos.heroHome,
    alt: "A two-storey family home with solar panels on its roof, surrounded by palm trees.",
    position: "object-[64%_50%]",
  },
  {
    photo: photos.heroBusiness,
    alt: "A two-storey commercial building with rows of solar panels on its roof and shops at street level.",
    position: "object-[50%_50%]",
  },
] as const;

/**
 * Two alternating hero slides (home, then business) in one deep-green panel.
 *
 * - Both slides stay in the page for search engines and screen readers; only their visibility
 *   changes. The first slide carries the page's single <h1>.
 * - The buttons live outside the slides, so they stay exactly where they are on every slide.
 * - Rotation never starts for visitors who prefer reduced motion, holds while keyboard focus is
 *   inside the hero, and stops when a slide is chosen by hand or the small pause control beside
 *   the indicators is used.
 */
export function Hero() {
  const [active, setActive] = useState(0);
  const [motionAllowed, setMotionAllowed] = useState(false);
  const [paused, setPaused] = useState(false);
  const [focusInside, setFocusInside] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setMotionAllowed(!query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  const rotating = motionAllowed && !paused && !focusInside;

  useEffect(() => {
    if (!rotating) return;
    const timer = window.setTimeout(
      () => setActive((current) => (current + 1) % hero.slides.length),
      HERO_SLIDE_MS,
    );
    return () => window.clearTimeout(timer);
  }, [rotating, active]);

  return (
    <section
      id="top"
      aria-label="Solar solutions for homes and businesses"
      className="px-[var(--bleed)] pt-1 lg:pt-2"
      onFocus={() => setFocusInside(true)}
      onBlur={(event) => {
        const next = event.relatedTarget as Node | null;
        if (!event.currentTarget.contains(next)) setFocusInside(false);
      }}
    >
      <div className="hero-panel panel on-dark overflow-hidden bg-forest text-paper">
        <div className="hero-copy">
          <div className="hero-slides">
            {hero.slides.map((slide, index) => {
              const Heading = index === 0 ? "h1" : "h2";
              return (
                <div key={slide.id} className="hero-slide" data-active={index === active}>
                  <div>
                    <Eyebrow surface="dark">{slide.eyebrow}</Eyebrow>
                    <Heading className="display-1 mt-5 lg:mt-6">
                      <TwoTone heading={slide.heading} surface="dark" />
                    </Heading>
                  </div>
                  <p className="lead mt-5 max-w-[36rem] text-mist lg:mt-6">{slide.body}</p>
                </div>
              );
            })}
          </div>

          <div className="hero-actions flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <CtaButton variant="primary">{hero.primaryCta}</CtaButton>
            <CtaButton variant="outline" surface="dark">
              {hero.secondaryCta}
            </CtaButton>
          </div>

          <div
            role="group"
            aria-label="Hero slides"
            className="hero-controls flex items-center gap-5"
            style={{ "--hero-slide-ms": `${HERO_SLIDE_MS}ms` } as CSSProperties}
          >
            {hero.slides.map((slide, index) => {
              const isActive = index === active;
              return (
                <button
                  key={slide.id}
                  type="button"
                  aria-label={`Show slide ${index + 1} of ${hero.slides.length}`}
                  aria-current={isActive ? "true" : undefined}
                  className="group/dot flex h-11 cursor-pointer items-center gap-3 rounded-sm"
                  onClick={() => {
                    // Choosing a slide by hand keeps it in place until rotation is resumed.
                    setActive(index);
                    setPaused(true);
                  }}
                >
                  <span
                    className={
                      isActive
                        ? "font-display text-sm font-semibold tabular-nums text-paper"
                        : "font-display text-sm font-semibold tabular-nums text-fern transition-colors duration-200 group-hover/dot:text-paper"
                    }
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="hero-progress"
                    data-state={isActive ? (rotating ? "running" : "full") : "empty"}
                  >
                    <span key={isActive ? `on-${active}` : "off"} />
                  </span>
                </button>
              );
            })}

            {motionAllowed ? (
              <button
                type="button"
                aria-label={paused ? "Play slide rotation" : "Pause slide rotation"}
                className="grid size-11 cursor-pointer place-items-center rounded-full text-fern transition-colors duration-200 hover:text-paper"
                onClick={() => setPaused((value) => !value)}
              >
                <span className="grid size-8 place-items-center rounded-full border border-line-inverse">
                  {paused ? (
                    <Play aria-hidden="true" className="size-3 translate-x-px fill-current" />
                  ) : (
                    <Pause aria-hidden="true" className="size-3 fill-current" />
                  )}
                </span>
              </button>
            ) : null}
          </div>
        </div>

        <div className="hero-media">
          <div className="hero-frame">
            {slideMedia.map((media, index) => (
              <picture key={media.photo.src} className="contents">
                <source
                  type="image/avif"
                  srcSet={media.photo.avif}
                  sizes="(min-width: 1024px) 48vw, 100vw"
                />
                <source
                  type="image/webp"
                  srcSet={media.photo.webp}
                  sizes="(min-width: 1024px) 48vw, 100vw"
                />
                <img
                  src={media.photo.src}
                  alt={media.alt}
                  width={media.photo.width}
                  height={media.photo.height}
                  loading="eager"
                  decoding={index === 0 ? "sync" : "async"}
                  fetchPriority={index === 0 ? "high" : "low"}
                  className={`hero-image ${media.position}`}
                  data-active={index === active}
                />
              </picture>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
