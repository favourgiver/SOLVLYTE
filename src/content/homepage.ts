/**
 * SOLVLYTE homepage copy.
 *
 * COPY LOCK: every string in this file is the approved homepage wording, taken word-for-word
 * from the SOLVLYTE homepage brief (including spelling, punctuation and capitalisation).
 * Layout may change how lines break; the words themselves must not be edited, shortened,
 * corrected or replaced without sign-off from SOLVLYTE.
 */

/**
 * A section heading shown in two tones. `strong` and `soft` joined by one space are the exact
 * approved heading; the split only decides which half is set in the quieter colour.
 */
export type TwoToneHeading = {
  strong: string;
  soft: string;
  /** Which half comes first in the sentence. Defaults to "strong-first". */
  order?: "strong-first" | "soft-first";
};

export type CopyItem = { id: string; title: string; body: string };

export const brand = {
  name: "SOLVLYTE",
  line: "Spend Less on Fuel. Enjoy More Reliable Power.",
} as const;

/**
 * Header and footer labels. This phase is a single page, so each label only scrolls to the
 * closest matching homepage section. Point them at real routes when those pages exist.
 */
export const navigation = [
  { label: "Home", href: "#top" },
  { label: "About Us", href: "#about" },
  { label: "Plans", href: "#what-we-offer" },
  { label: "Contact Us", href: "#get-started" },
] as const;

export const hero = {
  slides: [
    {
      id: "residential",
      eyebrow: "RELIABLE SOLAR SOLUTIONS FOR YOUR HOME",
      heading: { strong: "Your World Doesn't Have to Stop", soft: "When the Grid Does." },
      body: "Tired of unpredictable electricity, rising fuel costs and the constant dependence on generators? Enjoy a better way to power your home with premium, affordable solar solutions designed around your energy needs.",
    },
    {
      id: "business",
      eyebrow: "SMART ENERGY SOLUTIONS FOR YOUR BUSINESS",
      heading: { strong: "Because Your Business", soft: "Can't Afford to Stop." },
      body: "Power interruptions shouldn't stand between your business and its next milestone. Keep your operations running with reliable, professionally designed solar solutions that help reduce fuel expenses and minimise power-related disruptions.",
    },
  ],
  primaryCta: "Book a Free Consultation",
  secondaryCta: "Explore Our Plans",
} satisfies {
  slides: { id: string; eyebrow: string; heading: TwoToneHeading; body: string }[];
  primaryCta: string;
  secondaryCta: string;
};

export const introduction = {
  eyebrow: "WHO WE ARE",
  heading: { strong: "A Better Way to", soft: "Experience Electricity." } satisfies TwoToneHeading,
  paragraphs: [
    "We believe reliable electricity should not be a luxury. It should be something every home and business can depend on.",
    "We are committed to helping individuals, households and businesses overcome the challenges of unreliable electricity and rising energy costs.",
    "Through the supply of quality solar equipment, professional installation and dependable after-sales support, we provide energy solutions designed around your unique needs.",
    "Whether you're looking to power your home, keep your business running or reduce your dependence on generators, SOLVLYTE is here to help you make the switch to smarter energy.",
  ],
  cta: "Discover More About Us",
};

export const offer = {
  eyebrow: "OUR PRODUCTS & SERVICES",
  heading: {
    strong: "Everything You Need for",
    soft: "a Smarter Power Solution.",
  } satisfies TwoToneHeading,
  intro:
    "From consultation to professional installation and ongoing support, SOLVLYTE provides the guidance, products and services you need to make the most of solar energy.",
  items: [
    {
      id: "solar-panels",
      title: "Solar Panels",
      body: "Harness the power of the sun with quality solar panels designed to convert sunlight into usable electricity for your home or business.",
    },
    {
      id: "solar-inverters",
      title: "Solar Inverters",
      body: "Get reliable power conversion with suitable inverter solutions designed to meet your electricity requirements.",
    },
    {
      id: "solar-batteries",
      title: "Solar Batteries",
      body: "Store solar energy for use when sunlight is unavailable, helping you maintain a more reliable power supply throughout the day and night.",
    },
    {
      id: "solar-installation",
      title: "Solar Installation",
      body: "From system planning to equipment installation, we provide professional installation services to help ensure your solar system is properly configured.",
    },
    {
      id: "maintenance-repairs",
      title: "Maintenance & Repairs",
      body: "Keep your solar system performing efficiently with maintenance, troubleshooting and repair services.",
    },
  ] satisfies CopyItem[],
  cta: "Explore Our Plans",
};

export const advantage = {
  eyebrow: "THE SOLVLYTE ADVANTAGE",
  heading: {
    strong: "Premium Quality Shouldn't Come",
    soft: "at an Unaffordable Price.",
  } satisfies TwoToneHeading,
  intro:
    "Solar solutions are significant investments. That's why you should get quality equipment, professional service and real value for your money.",
  items: [
    {
      id: "quality-pricing",
      title: "Premium Quality, Competitive Pricing",
      body: "We believe affordability should never mean compromising on quality. We focus on providing quality solar equipment and solutions at competitive prices.",
    },
    {
      id: "designed-around-you",
      title: "Solutions Designed Around You",
      body: "Your energy needs are different from everyone else's. We consider your electricity consumption, budget and requirements before recommending a suitable solution.",
    },
    {
      id: "professional-installation",
      title: "Professional Installation",
      body: "A good solar system needs proper planning and installation. We focus on providing professional installation services that support the safe and efficient operation of your system.",
    },
    {
      id: "support-beyond-installation",
      title: "Support Beyond Installation",
      body: "Our relationship with you doesn't end when installation is complete. We remain available to assist with maintenance, repairs and ongoing technical support.",
    },
  ] satisfies CopyItem[],
};

export const benefits = {
  eyebrow: "MORE THAN JUST SOLAR EQUIPMENT",
  heading: {
    strong: "A Better Power Experience,",
    soft: "Designed Around Your Needs.",
  } satisfies TwoToneHeading,
  intro:
    "Imagine spending less time worrying about power outages and more time focusing on what matters. With the right solar solution from SOLVLYTE, you can enjoy:",
  items: [
    {
      id: "reliable-electricity",
      title: "Reliable Electricity",
      body: "Enjoy a more dependable source of electricity with a solar system designed around your household or business energy requirements.",
    },
    {
      id: "reduced-fuel-expenses",
      title: "Reduced Fuel Expenses",
      body: "Reduce your dependence on petrol and diesel generators and potentially save on recurring fuel expenses.",
    },
    {
      id: "energy-independence",
      title: "Greater Energy Independence",
      body: "Take greater control of your electricity instead of depending entirely on the public power supply.",
    },
    {
      id: "comfort-convenience",
      title: "Comfort and Convenience",
      body: "Enjoy a quieter power experience without the constant noise, inconvenience and fuel runs associated with conventional generators.",
    },
    {
      id: "everyday-needs",
      title: "Power for Your Everyday Needs",
      body: "Keep essential household appliances and business equipment running with a properly designed solar system.",
    },
    {
      id: "long-term-value",
      title: "Long-Term Value",
      body: "Invest in an energy solution designed to serve your needs over time, with appropriate maintenance and technical support.",
    },
  ] satisfies CopyItem[],
};

export const journey = {
  eyebrow: "YOUR JOURNEY TO BETTER POWER",
  heading: { strong: "Getting Started with SOLVLYTE", soft: "Is Simple." } satisfies TwoToneHeading,
  intro:
    "Finding the right solar solution shouldn't be complicated. Our process is designed to help you understand your energy needs and find a suitable solution without unnecessary complications.",
  steps: [
    {
      number: "01.",
      title: "Book a Free Consultation",
      body: "Get started by booking a free consultation with us. Tell us about your home or business, your electricity challenges and what you would like to achieve.",
    },
    {
      number: "02.",
      title: "Energy Assessment",
      body: "We assess your energy consumption, appliances, power requirements and budget to understand the kind of solar system you need.",
    },
    {
      number: "03.",
      title: "Receive Your Customised Quotation",
      body: "Based on the assessment, we recommend a suitable solar solution and provide a quotation outlining the proposed equipment, installation and associated costs.",
    },
    {
      number: "04.",
      title: "Approval & Installation",
      body: "Once you approve the quotation, we proceed with the agreed equipment supply and professional installation.",
    },
    {
      number: "05.",
      title: "Ongoing Support",
      body: "Our commitment doesn't end after installation. We remain available to assist with maintenance, repairs and technical support.",
    },
  ],
  cta: "Book Your Free Consultation",
};

export const commitment = {
  eyebrow: "OUR COMMITMENT TO YOU",
  heading: {
    strong: "Our Commitment",
    soft: "Doesn't End at Installation.",
  } satisfies TwoToneHeading,
  paragraphs: [
    "Installing your solar system is only the beginning of our relationship with you.",
    "At SOLVLYTE, we understand that investing in solar energy means investing in the long-term comfort and productivity of your home or business.",
    "That's why we place importance on equipment quality, applicable product warranties, proper installation and continued customer support.",
    "Whether you need routine maintenance, technical assistance or repairs, we're committed to helping you get lasting value from your solar investment.",
  ],
  items: [
    {
      id: "quality-equipment",
      title: "Quality Equipment",
      body: "We focus on providing quality solar equipment suited to your energy requirements.",
    },
    {
      id: "warranty-assurance",
      title: "Warranty Assurance",
      body: "We provide clear information about applicable product and installation warranties so you understand the coverage associated with your investment.",
    },
    {
      id: "maintenance-repairs",
      title: "Maintenance & Repairs",
      body: "Our maintenance and repair services help you address system issues and maintain efficient operation.",
    },
    {
      id: "technical-support",
      title: "Continued Technical Support",
      body: "You can continue to reach out to us for assistance even after your solar system has been installed.",
    },
  ] satisfies CopyItem[],
  closing: "SOLVLYTE: Here for your power needs, beyond installation.",
};

export const faqs = {
  eyebrow: "HAVE QUESTIONS?",
  heading: {
    strong: "Everything You Need to Know",
    soft: "Before Getting Started.",
  } satisfies TwoToneHeading,
  items: [
    {
      number: "1.",
      question: "What products and services does SOLVLYTE offer?",
      answer:
        "We supply solar panels, inverters, batteries and other solar accessories. We also provide solar system installation, maintenance and repair services for residential and commercial customers.",
    },
    {
      number: "2.",
      question:
        "Can SOLVLYTE provide a solar system that powers my home or business throughout the day and night?",
      answer:
        "Yes. We can assess your energy requirements and recommend a solar solution designed to provide extended power availability, potentially including 24-hour electricity. The actual backup duration depends on your energy consumption, battery storage, system capacity and available solar generation.",
    },
    {
      number: "3.",
      question: "How much does a solar installation cost?",
      answer:
        "The cost depends on the size of the system, the equipment required, your energy consumption and installation requirements. We begin with a free consultation and energy assessment before providing a customised quotation.",
    },
    {
      number: "4.",
      question: "How do I know which solar system is suitable for my home or business?",
      answer:
        "Our consultation and energy assessment are designed to determine that. We evaluate your electricity requirements and recommend a system that suits your needs and budget.",
    },
    {
      number: "5.",
      question: "Does SOLVLYTE provide installation services?",
      answer:
        "Yes. We handle solar system installation as part of our complete energy solutions offering.",
    },
    {
      number: "6.",
      question: "Do you provide maintenance and repairs after installation?",
      answer:
        "Yes. We provide maintenance, repair and technical support services to help customers maintain their solar systems after installation.",
    },
    {
      number: "7.",
      question: "Is the consultation free?",
      answer:
        "Yes! Your initial consultation with SOLVLYTE is completely free. You can discuss your electricity needs with us and learn about suitable solar solutions before making a commitment.",
    },
    {
      number: "8.",
      question: "Are your solar products covered by warranties?",
      answer:
        "Applicable product warranties depend on the equipment and manufacturer. We explain the relevant warranty coverage and terms as part of the quotation and purchasing process.",
    },
    {
      number: "9.",
      question: "Where does SOLVLYTE operate?",
      answer:
        "We primarily serve Port Harcourt and surrounding areas in Rivers State, Nigeria. Contact us to confirm service availability for your location.",
    },
  ],
};

export const finalCta = {
  eyebrow: "YOUR BETTER POWER EXPERIENCE STARTS HERE",
  heading: {
    strong: "Start Enjoying a Better Solution.",
    soft: "Stop Adjusting to Poor Electricity.",
    order: "soft-first",
  } satisfies TwoToneHeading,
  paragraphs: [
    "You shouldn't have to constantly worry about power outages, rising fuel costs or interrupted daily activities.",
    "Take the first step towards a more dependable and affordable power solution with SOLVLYTE.",
    "Whether you're looking to power your home or keep your business running, we're ready to help you find a solar solution that works for you.",
  ],
  primaryCta: "Book a Free Consultation",
  secondaryCta: "Contact Us",
};
