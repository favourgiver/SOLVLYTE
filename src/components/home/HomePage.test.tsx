import { cleanup, render } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import approvedCopy from "@/content/approved-homepage-copy.txt?raw";

import { HomePage } from "./HomePage";

/**
 * Acceptance checks for the homepage brief that a machine can verify.
 *
 * The copy lock compares what the page renders with src/content/approved-homepage-copy.txt,
 * the wording SOLVLYTE signed off (sections 07 to 10 of the brief, one paragraph per line).
 * If this fails after an intended copy change, update that file with the newly approved
 * wording as well; if the change was not intended, restore src/content/homepage.ts.
 */

const collapse = (text: string) => text.replace(/\s+/g, " ").trim();

/** Every block of visible text inside `root`, in reading order. */
function textBlocks(root: Element): string[] {
  const blocks: string[] = [];
  let previous: Element | null = null;
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  for (let node = walker.nextNode(); node; node = walker.nextNode()) {
    const parent = node.parentElement;
    if (!parent || !collapse(node.textContent ?? "")) continue;
    const block = parent.closest("h1,h2,h3,p,button,a") ?? parent;
    if (block === previous) continue;
    previous = block;
    blocks.push(collapse(block.textContent ?? ""));
  }
  return blocks;
}

/** The approved file as the list of text blocks the page must show, grouped by brief section. */
function approvedBlocks(): Map<string, string[]> {
  const sections = new Map<string, string[]>();
  let current: string[] = [];
  for (const line of approvedCopy.split("\n").filter((entry) => entry.trim() !== "")) {
    const heading = /^(SECTION \d+|LATEST APPROVED BRAND LINE)/.exec(line);
    if (heading?.[1]) {
      current = [];
      sections.set(heading[1], current);
      continue;
    }
    if (/^SLIDE \d+ - /.test(line)) continue;

    const cta = /^(?:Primary CTA|Secondary CTA|CTA): (.+)$/.exec(line);
    const step = /^(0\d\.) (.+?) {2}(.+)$/.exec(line);
    const question = /^(\d\.) (.+\?)$/.exec(line);
    if (cta?.[1]) current.push(cta[1]);
    else if (step) current.push(...step.slice(1));
    else if (question) current.push(...question.slice(1));
    else current.push(line);
  }
  return sections;
}

afterEach(cleanup);

describe("SOLVLYTE homepage", () => {
  it("shows the approved copy word for word, in the approved order", () => {
    const { container } = render(<HomePage />);
    const main = container.querySelector("main");
    expect(main).not.toBeNull();

    const approved = approvedBlocks();
    const [heroPrimary = "", heroSecondary = ""] = (approved.get("SECTION 1") ?? []).slice(3, 5);
    // The brief lists the same two buttons under each hero slide; the page shows them once,
    // outside the slides, so they stay in place when the slide changes.
    const hero = (approved.get("SECTION 1") ?? []).filter(
      (text) => text !== heroPrimary && text !== heroSecondary,
    );
    const expected = [
      ...hero,
      heroPrimary,
      heroSecondary,
      ...Array.from({ length: 8 }, (_, index) => approved.get(`SECTION ${index + 2}`) ?? []).flat(),
    ];

    // "01" and "02" are the slide indicators, the only text in <main> that is not approved copy.
    const rendered = textBlocks(main as Element).filter((text) => !/^0[12]$/.test(text));

    expect(expected.length).toBeGreaterThan(120);
    expect(rendered).toEqual(expected);
  });

  it("closes with the brand name and the latest approved brand line", () => {
    const { container } = render(<HomePage />);
    const footer = textBlocks(container.querySelector("footer") as Element);
    const [name, line] = approvedBlocks().get("LATEST APPROVED BRAND LINE") ?? [];

    expect(footer.slice(0, 2)).toEqual([name, line]);
    // The outdated line must not come back.
    expect(textBlocks(container).join(" ")).not.toMatch(/brighter way/i);
  });

  it("spells the brand SOLVLYTE everywhere", () => {
    const { container } = render(<HomePage />);
    const spellings = new Set(
      textBlocks(container)
        .join(" ")
        .match(/solv\w*/gi),
    );

    expect([...spellings]).toEqual(["SOLVLYTE"]);
  });

  it("has one h1 and the nine sections in the approved order", () => {
    const { container } = render(<HomePage />);

    expect(container.querySelectorAll("h1")).toHaveLength(1);
    expect(
      Array.from(container.querySelectorAll("main > section"), (section) => section.id),
    ).toEqual([
      "top",
      "about",
      "what-we-offer",
      "why-choose-solvlyte",
      "just-for-you",
      "how-it-works",
      "quality-assurance",
      "faqs",
      "get-started",
    ]);
    for (const section of container.querySelectorAll("main > section:not(#top)")) {
      expect(section.querySelectorAll("h2")).toHaveLength(1);
    }
  });

  it("keeps every call to action visual only: no forms, no destinations beyond this page", () => {
    const { container } = render(<HomePage />);

    expect(container.querySelectorAll("form, input, textarea, select")).toHaveLength(0);
    for (const button of container.querySelectorAll("button")) {
      expect(button).toHaveAttribute("type", "button");
    }
    for (const link of container.querySelectorAll("a")) {
      expect(link.getAttribute("href")).toMatch(/^#[a-z-]+$/);
      expect(container.querySelector(link.getAttribute("href") ?? "")).not.toBeNull();
    }
  });

  it("describes every photograph and reserves its space", () => {
    const { container } = render(<HomePage />);
    const images = Array.from(container.querySelectorAll("img"));

    expect(images.length).toBeGreaterThan(0);
    for (const image of images) {
      expect(image.getAttribute("alt")?.trim()).toBeTruthy();
      expect(Number(image.getAttribute("width"))).toBeGreaterThan(0);
      expect(Number(image.getAttribute("height"))).toBeGreaterThan(0);
    }
  });
});
