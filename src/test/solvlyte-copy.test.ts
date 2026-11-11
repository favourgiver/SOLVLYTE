import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

const homepage = readFileSync(resolve(process.cwd(), "src/routes/index.tsx"), "utf8");
const normalizedHomepage = homepage.replace(/\s+/g, " ");

describe("SOLVLYTE approved homepage copy", () => {
  it("keeps both approved hero headlines and their descriptions", () => {
    expect(homepage).toContain("Your World Doesn't Have to Stop When the Grid Does.");
    expect(homepage).toContain("Because Your Business Can't Afford to Stop.");
    expect(normalizedHomepage).toContain(
      "Tired of unpredictable electricity, rising fuel costs and the constant dependence on generators?",
    );
    expect(normalizedHomepage).toContain(
      "Power interruptions shouldn't stand between your business and its next milestone.",
    );
  });

  it("keeps the approved brand line and excludes the outdated tagline", () => {
    expect(homepage).toContain("Spend Less on Fuel. Enjoy More Reliable Power.");
    expect(homepage).not.toContain("A Brighter Way to Power Life.");
  });

  it("includes all nine approved FAQ questions verbatim", () => {
    const questions = [
      "What products and services does SOLVLYTE offer?",
      "Can SOLVLYTE provide a solar system that powers my home or business throughout the day and night?",
      "How much does a solar installation cost?",
      "How do I know which solar system is suitable for my home or business?",
      "Does SOLVLYTE provide installation services?",
      "Do you provide maintenance and repairs after installation?",
      "Is the consultation free?",
      "Are your solar products covered by warranties?",
      "Where does SOLVLYTE operate?",
    ];

    for (const question of questions) {
      expect(normalizedHomepage).toContain(`question: "${question}"`);
    }
  });

  it("keeps the approved section headings in the documented order", () => {
    const headings = [
      "A Better Way to Experience Electricity.",
      "Everything You Need for a Smarter Power Solution.",
      "Premium Quality Shouldn't Come at an Unaffordable Price.",
      "A Better Power Experience, Designed Around Your Needs.",
      "Getting Started with SOLVLYTE Is Simple.",
      "Our Commitment Doesn't End at Installation.",
      "Everything You Need to Know Before Getting Started.",
      "Stop Adjusting to Poor Electricity. Start Enjoying a Better Solution.",
    ];

    let cursor = 0;
    for (const heading of headings) {
      const index = normalizedHomepage.indexOf(heading, cursor);
      expect(index, `missing or out of order: ${heading}`).toBeGreaterThan(-1);
      cursor = index + heading.length;
    }
  });

  it("offers the approved calls to action verbatim", () => {
    expect(normalizedHomepage).toContain("Book a Free Consultation");
    expect(normalizedHomepage).toContain("Explore Our Plans");
    expect(normalizedHomepage).toContain("Book Your Free Consultation");
    expect(normalizedHomepage).toContain("Contact Us");
  });

  it("stays a static, frontend-only homepage", () => {
    expect(homepage).not.toMatch(/<form/i);
    expect(homepage).not.toMatch(/fetch\(|axios|useMutation|supabase|stripe/i);
  });
});

describe("SOLVLYTE restrained interface", () => {
  it("carries no decorative section labels or numbering", () => {
    const removed = [
      "WHO WE ARE",
      "OUR PRODUCTS",
      "THE SOLVLYTE ADVANTAGE",
      "MORE THAN JUST SOLAR EQUIPMENT",
      "YOUR JOURNEY TO BETTER POWER",
      "OUR COMMITMENT TO YOU",
      "HAVE QUESTIONS?",
      "YOUR BETTER POWER EXPERIENCE STARTS HERE",
      "RELIABLE SOLAR SOLUTIONS FOR YOUR HOME",
      "SMART ENERGY SOLUTIONS FOR YOUR BUSINESS",
      "FOR THE HOME",
      "FOR YOUR BUSINESS",
      "PORT HARCOURT · RIVERS STATE",
      "/ 02",
    ];

    for (const label of removed) {
      expect(homepage, `decorative label returned: ${label}`).not.toContain(label);
    }

    expect(homepage).not.toMatch(/String\(index \+ 1\)\.padStart/);
  });

  it("keeps the hero to one headline, one description and two actions", () => {
    const hero = homepage.slice(
      homepage.indexOf('className="hero"'),
      homepage.indexOf('id="about"'),
    );
    expect(hero.match(/<h1>/g)).toHaveLength(1);
    expect(hero.match(/className="button-primary"/g)).toHaveLength(1);
    expect(hero.match(/className="button-link"/g)).toHaveLength(1);
  });

  it("renders one image per hero slide and nothing else in the hero media", () => {
    const hero = homepage.slice(
      homepage.indexOf('className="hero"'),
      homepage.indexOf('id="about"'),
    );
    expect(hero.match(/<img/g)).toHaveLength(1);
    expect(hero).toContain("slides.map");
  });
});
