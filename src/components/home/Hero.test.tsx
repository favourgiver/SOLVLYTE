import { act, cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { Hero, HERO_SLIDE_MS } from "./Hero";

const activeSlide = (container: HTMLElement) =>
  Array.from(container.querySelectorAll(".hero-slide")).findIndex(
    (slide) => slide.getAttribute("data-active") === "true",
  ) + 1;

const advance = (ms: number) => act(() => vi.advanceTimersByTime(ms));

/** Makes the page report (or not) that the visitor asked for reduced motion. */
function preferReducedMotion(reduce: boolean) {
  vi.spyOn(window, "matchMedia").mockImplementation(
    (query: string) =>
      ({
        matches: reduce && query.includes("prefers-reduced-motion"),
        media: query,
        addEventListener: () => {},
        removeEventListener: () => {},
      }) as unknown as MediaQueryList,
  );
}

beforeEach(() => {
  vi.useFakeTimers();
});

afterEach(() => {
  cleanup();
  vi.useRealTimers();
  vi.restoreAllMocks();
});

describe("Hero slides", () => {
  it("alternates between the two slides in a loop", () => {
    preferReducedMotion(false);
    const { container } = render(<Hero />);

    expect(activeSlide(container)).toBe(1);
    advance(HERO_SLIDE_MS);
    expect(activeSlide(container)).toBe(2);
    advance(HERO_SLIDE_MS);
    expect(activeSlide(container)).toBe(1);
  });

  it("keeps both slides in the page, with the page's only h1 on the first", () => {
    preferReducedMotion(false);
    const { container } = render(<Hero />);

    expect(container.querySelectorAll(".hero-slide")).toHaveLength(2);
    expect(container.querySelectorAll("h1")).toHaveLength(1);
    expect(container.querySelector(".hero-slide h1")).not.toBeNull();
    expect(container.querySelectorAll(".hero-slide button")).toHaveLength(0);
  });

  it("can be paused and resumed", () => {
    preferReducedMotion(false);
    const { container } = render(<Hero />);

    fireEvent.click(screen.getByRole("button", { name: "Pause slide rotation" }));
    advance(HERO_SLIDE_MS * 3);
    expect(activeSlide(container)).toBe(1);

    fireEvent.click(screen.getByRole("button", { name: "Play slide rotation" }));
    advance(HERO_SLIDE_MS);
    expect(activeSlide(container)).toBe(2);
  });

  it("stays on a slide that was chosen by hand", () => {
    preferReducedMotion(false);
    const { container } = render(<Hero />);

    fireEvent.click(screen.getByRole("button", { name: "Show slide 2 of 2" }));
    expect(activeSlide(container)).toBe(2);
    advance(HERO_SLIDE_MS * 3);
    expect(activeSlide(container)).toBe(2);
    expect(screen.getByRole("button", { name: "Play slide rotation" })).toBeInTheDocument();
  });

  it("does not rotate for visitors who prefer reduced motion", () => {
    preferReducedMotion(true);
    const { container } = render(<Hero />);

    advance(HERO_SLIDE_MS * 3);
    expect(activeSlide(container)).toBe(1);
    expect(screen.queryByRole("button", { name: /slide rotation/ })).toBeNull();

    // The slides can still be changed by hand.
    fireEvent.click(screen.getByRole("button", { name: "Show slide 2 of 2" }));
    expect(activeSlide(container)).toBe(2);
  });
});
