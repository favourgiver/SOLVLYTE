import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

const homepage = readFileSync(resolve(process.cwd(), "src/routes/index.tsx"), "utf8");
const normalizedHomepage = homepage.replace(/\s+/g, " ");

describe("SOLVLYTE approved homepage copy", () => {
  it("keeps both approved hero headlines and the two audience-specific messages", () => {
    expect(homepage).toContain("RELIABLE SOLAR SOLUTIONS FOR YOUR HOME");
    expect(homepage).toContain("Your World Doesn't Have to Stop When the Grid Does.");
    expect(homepage).toContain("SMART ENERGY SOLUTIONS FOR YOUR BUSINESS");
    expect(homepage).toContain("Because Your Business Can't Afford to Stop.");
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

  it("keeps the approved section headings and supporting copy in the PDF order", () => {
    const sections = [
      "WHO WE ARE",
      "A Better Way to Experience Electricity.",
      "OUR PRODUCTS &amp; SERVICES",
      "Everything You Need for a Smarter Power Solution.",
      "THE SOLVLYTE ADVANTAGE",
      "Premium Quality Shouldn't Come at an Unaffordable Price.",
      "MORE THAN JUST SOLAR EQUIPMENT",
      "A Better Power Experience, Designed Around Your Needs.",
      "YOUR JOURNEY TO BETTER POWER",
      "Getting Started with SOLVLYTE Is Simple.",
      "OUR COMMITMENT TO YOU",
      "Our Commitment Doesn't End at Installation.",
      "HAVE QUESTIONS?",
      "Everything You Need to Know Before Getting Started.",
      "YOUR BETTER POWER EXPERIENCE STARTS HERE",
      "Stop Adjusting to Poor Electricity. Start Enjoying a Better Solution.",
    ];

    let cursor = 0;
    for (const section of sections) {
      const index = normalizedHomepage.indexOf(section, cursor);
      expect(index, `missing or out of order: ${section}`).toBeGreaterThan(-1);
      cursor = index + section.length;
    }
  });

  it("stays a static, frontend-only homepage", () => {
    expect(homepage).not.toMatch(/<form/i);
    expect(homepage).not.toMatch(/fetch\(|axios|useMutation|supabase|stripe/i);
  });

  it("offers both approved hero calls to action", () => {
    expect(normalizedHomepage).toContain("Book a Free Consultation");
    expect(normalizedHomepage).toContain("Explore Our Plans");
    expect(normalizedHomepage).toContain(
      "SOLVLYTE: Here for your power needs, beyond installation.",
    );
  });
});
