import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import homeImage from "@/assets/solvlyte-home.jpg";
import shopsImage from "@/assets/solvlyte-shops.jpg";

const slides = [
  {
    title: "Your World Doesn't Have to Stop When the Grid Does.",
    description:
      "Tired of unpredictable electricity, rising fuel costs and the constant dependence on generators? Enjoy a better way to power your home with premium, affordable solar solutions designed around your energy needs.",
    image: homeImage,
    alt: "Solar panels on a modern home surrounded by tropical greenery at sunset",
  },
  {
    title: "Because Your Business Can't Afford to Stop.",
    description:
      "Power interruptions shouldn't stand between your business and its next milestone. Keep your operations running with reliable, professionally designed solar solutions that help reduce fuel expenses and minimise power-related disruptions.",
    image: shopsImage,
    alt: "Customers walking in and out of a row of shops with solar panels on the roof",
  },
];

const services = [
  {
    title: "Solar Panels",
    description:
      "Harness the power of the sun with quality solar panels designed to convert sunlight into usable electricity for your home or business.",
  },
  {
    title: "Solar Inverters",
    description:
      "Get reliable power conversion with suitable inverter solutions designed to meet your electricity requirements.",
  },
  {
    title: "Solar Batteries",
    description:
      "Store solar energy for use when sunlight is unavailable, helping you maintain a more reliable power supply throughout the day and night.",
  },
  {
    title: "Solar Installation",
    description:
      "From system planning to equipment installation, we provide professional installation services to help ensure your solar system is properly configured.",
  },
  {
    title: "Maintenance & Repairs",
    description:
      "Keep your solar system performing efficiently with maintenance, troubleshooting and repair services.",
  },
];

const advantages = [
  {
    title: "Premium Quality, Competitive Pricing",
    description:
      "We believe affordability should never mean compromising on quality. We focus on providing quality solar equipment and solutions at competitive prices.",
  },
  {
    title: "Solutions Designed Around You",
    description:
      "Your energy needs are different from everyone else's. We consider your electricity consumption, budget and requirements before recommending a suitable solution.",
  },
  {
    title: "Professional Installation",
    description:
      "A good solar system needs proper planning and installation. We focus on providing professional installation services that support the safe and efficient operation of your system.",
  },
  {
    title: "Support Beyond Installation",
    description:
      "Our relationship with you doesn't end when installation is complete. We remain available to assist with maintenance, repairs and ongoing technical support.",
  },
];

const benefits = [
  {
    title: "Reliable Electricity",
    description:
      "Enjoy a more dependable source of electricity with a solar system designed around your household or business energy requirements.",
  },
  {
    title: "Reduced Fuel Expenses",
    description:
      "Reduce your dependence on petrol and diesel generators and potentially save on recurring fuel expenses.",
  },
  {
    title: "Greater Energy Independence",
    description:
      "Take greater control of your electricity instead of depending entirely on the public power supply.",
  },
  {
    title: "Comfort and Convenience",
    description:
      "Enjoy a quieter power experience without the constant noise, inconvenience and fuel runs associated with conventional generators.",
  },
  {
    title: "Power for Your Everyday Needs",
    description:
      "Keep essential household appliances and business equipment running with a properly designed solar system.",
  },
  {
    title: "Long-Term Value",
    description:
      "Invest in an energy solution designed to serve your needs over time, with appropriate maintenance and technical support.",
  },
];

const processSteps = [
  {
    title: "Book a Free Consultation",
    description:
      "Get started by booking a free consultation with us. Tell us about your home or business, your electricity challenges and what you would like to achieve.",
  },
  {
    title: "Energy Assessment",
    description:
      "We assess your energy consumption, appliances, power requirements and budget to understand the kind of solar system you need.",
  },
  {
    title: "Receive Your Customised Quotation",
    description:
      "Based on the assessment, we recommend a suitable solar solution and provide a quotation outlining the proposed equipment, installation and associated costs.",
  },
  {
    title: "Approval & Installation",
    description:
      "Once you approve the quotation, we proceed with the agreed equipment supply and professional installation.",
  },
  {
    title: "Ongoing Support",
    description:
      "Our commitment doesn't end after installation. We remain available to assist with maintenance, repairs and technical support.",
  },
];

const assurance = [
  {
    title: "Quality Equipment",
    description:
      "We focus on providing quality solar equipment suited to your energy requirements.",
  },
  {
    title: "Warranty Assurance",
    description:
      "We provide clear information about applicable product and installation warranties so you understand the coverage associated with your investment.",
  },
  {
    title: "Maintenance & Repairs",
    description:
      "Our maintenance and repair services help you address system issues and maintain efficient operation.",
  },
  {
    title: "Continued Technical Support",
    description:
      "You can continue to reach out to us for assistance even after your solar system has been installed.",
  },
];

const faqs = [
  {
    question: "What products and services does SOLVLYTE offer?",
    answer:
      "We supply solar panels, inverters, batteries and other solar accessories. We also provide solar system installation, maintenance and repair services for residential and commercial customers.",
  },
  {
    question:
      "Can SOLVLYTE provide a solar system that powers my home or business throughout the day and night?",
    answer:
      "Yes. We can assess your energy requirements and recommend a solar solution designed to provide extended power availability, potentially including 24-hour electricity. The actual backup duration depends on your energy consumption, battery storage, system capacity and available solar generation.",
  },
  {
    question: "How much does a solar installation cost?",
    answer:
      "The cost depends on the size of the system, the equipment required, your energy consumption and installation requirements. We begin with a free consultation and energy assessment before providing a customised quotation.",
  },
  {
    question: "How do I know which solar system is suitable for my home or business?",
    answer:
      "Our consultation and energy assessment are designed to determine that. We evaluate your electricity requirements and recommend a system that suits your needs and budget.",
  },
  {
    question: "Does SOLVLYTE provide installation services?",
    answer:
      "Yes. We handle solar system installation as part of our complete energy solutions offering.",
  },
  {
    question: "Do you provide maintenance and repairs after installation?",
    answer:
      "Yes. We provide maintenance, repair and technical support services to help customers maintain their solar systems after installation.",
  },
  {
    question: "Is the consultation free?",
    answer:
      "Yes! Your initial consultation with SOLVLYTE is completely free. You can discuss your electricity needs with us and learn about suitable solar solutions before making a commitment.",
  },
  {
    question: "Are your solar products covered by warranties?",
    answer:
      "Applicable product warranties depend on the equipment and manufacturer. We explain the relevant warranty coverage and terms as part of the quotation and purchasing process.",
  },
  {
    question: "Where does SOLVLYTE operate?",
    answer:
      "We primarily serve Port Harcourt and surrounding areas in Rivers State, Nigeria. Contact us to confirm service availability for your location.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SOLVLYTE | Solar Energy Solutions in Port Harcourt" },
      {
        name: "description",
        content:
          "SOLVLYTE provides premium, affordable solar solutions for homes and businesses in Port Harcourt and surrounding areas in Rivers State, Nigeria.",
      },
      { property: "og:title", content: "SOLVLYTE | Solar Energy Solutions in Port Harcourt" },
      {
        property: "og:description",
        content:
          "Premium, affordable solar solutions for homes and businesses in Port Harcourt and surrounding areas in Rivers State, Nigeria.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=Manrope:wght@500;600;700&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(false);
  const [paused, setPaused] = useState(false);
  const active = slides[activeSlide];

  useEffect(() => {
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateAutoplay = () => setAutoplay(!motionPreference.matches);
    updateAutoplay();
    motionPreference.addEventListener("change", updateAutoplay);
    return () => motionPreference.removeEventListener("change", updateAutoplay);
  }, []);

  useEffect(() => {
    if (!autoplay || paused) return;
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 5600);
    return () => window.clearInterval(interval);
  }, [autoplay, paused]);

  if (!active) return null;

  return (
    <main className="solvlyte-page">
      <a className="skip-link" href="#about">
        Skip to content
      </a>

      <header className="site-header">
        <div className="site-header-inner">
          <a className="wordmark" href="#home" aria-label="SOLVLYTE home">
            SOLVLYTE<span aria-hidden="true">.</span>
          </a>
          <nav className="site-nav" aria-label="Main navigation">
            <a href="#home">Home</a>
            <a href="#about">About Us</a>
            <a href="#services">Plans</a>
            <a href="#contact">Contact Us</a>
          </nav>
          <a className="button-primary button-compact" href="#contact">
            Book a Free Consultation
          </a>
        </div>
      </header>

      <section
        id="home"
        className="hero"
        aria-label="Solar solutions for homes and businesses"
        aria-roledescription="carousel"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        <div className="page-width hero-inner">
          <div className="hero-copy" key={active.title}>
            <h1>{active.title}</h1>
            <p>{active.description}</p>
            <div className="hero-actions">
              <a className="button-primary" href="#contact">
                Book a Free Consultation <ArrowUpRight aria-hidden="true" size={16} />
              </a>
              <a className="button-link" href="#services">
                Explore Our Plans <ArrowRight aria-hidden="true" size={16} />
              </a>
            </div>
          </div>

          <div className="hero-media">
            {slides.map((slide, index) => (
              <img
                key={slide.image}
                className={index === activeSlide ? "is-active" : ""}
                src={slide.image}
                alt={slide.alt}
                width={1536}
                height={1024}
                fetchPriority={index === 0 ? "high" : "auto"}
              />
            ))}
          </div>

          <div className="hero-slides" role="group" aria-label="Choose hero slide">
            {slides.map((slide, index) => (
              <button
                key={slide.title}
                type="button"
                className={index === activeSlide ? "is-active" : ""}
                aria-label={`Show slide ${index + 1}`}
                aria-pressed={index === activeSlide}
                onClick={() => setActiveSlide(index)}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="page-width split">
          <div>
            <h2>A Better Way to Experience Electricity.</h2>
          </div>
          <div className="prose">
            <p className="prose-lead">
              We believe reliable electricity should not be a luxury. It should be something every
              home and business can depend on.
            </p>
            <p>
              We are committed to helping individuals, households and businesses overcome the
              challenges of unreliable electricity and rising energy costs.
            </p>
            <p>
              Through the supply of quality solar equipment, professional installation and
              dependable after-sales support, we provide energy solutions designed around your
              unique needs.
            </p>
            <p>
              Whether you're looking to power your home, keep your business running or reduce your
              dependence on generators, SOLVLYTE is here to help you make the switch to smarter
              energy.
            </p>
          </div>
        </div>
        <div className="page-width figure-wide">
          <img
            src={homeImage}
            alt="Solar panels on a modern home surrounded by tropical greenery at sunset"
            width={1536}
            height={1024}
            loading="lazy"
          />
        </div>
      </section>

      <section id="services" className="section">
        <div className="page-width">
          <div className="section-head">
            <h2>Everything You Need for a Smarter Power Solution.</h2>
            <p>
              From consultation to professional installation and ongoing support, SOLVLYTE provides
              the guidance, products and services you need to make the most of solar energy.
            </p>
          </div>
          <ul className="rows">
            {services.map(({ title, description }) => (
              <li className="row" key={title}>
                <h3>{title}</h3>
                <p>{description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-dark">
        <div className="page-width split">
          <div>
            <h2>Premium Quality Shouldn't Come at an Unaffordable Price.</h2>
            <p className="prose-lead">
              Solar solutions are significant investments. That's why you should get quality
              equipment, professional service and real value for your money.
            </p>
          </div>
          <ul className="rows rows-dark">
            {advantages.map(({ title, description }) => (
              <li className="row" key={title}>
                <h3>{title}</h3>
                <p>{description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="page-width">
          <div className="section-head">
            <h2>A Better Power Experience, Designed Around Your Needs.</h2>
            <p>
              Imagine spending less time worrying about power outages and more time focusing on what
              matters. With the right solar solution from SOLVLYTE, you can enjoy:
            </p>
          </div>
          <ul className="grid-two">
            {benefits.map(({ title, description }) => (
              <li key={title}>
                <h3>{title}</h3>
                <p>{description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="page-width">
          <div className="section-head">
            <h2>Getting Started with SOLVLYTE Is Simple.</h2>
            <p>
              Finding the right solar solution shouldn't be complicated. Our process is designed to
              help you understand your energy needs and find a suitable solution without unnecessary
              complications.
            </p>
          </div>
          <ol className="rows rows-ordered">
            {processSteps.map(({ title, description }) => (
              <li className="row" key={title}>
                <h3>{title}</h3>
                <p>{description}</p>
              </li>
            ))}
          </ol>
          <a className="button-primary section-action" href="#contact">
            Book Your Free Consultation <ArrowUpRight aria-hidden="true" size={16} />
          </a>
        </div>
      </section>

      <section className="section">
        <div className="page-width split">
          <div>
            <h2>Our Commitment Doesn't End at Installation.</h2>
            <div className="prose prose-tight">
              <p>
                Installing your solar system is only the beginning of our relationship with you.
              </p>
              <p>
                At SOLVLYTE, we understand that investing in solar energy means investing in the
                long-term comfort and productivity of your home or business.
              </p>
              <p>
                That's why we place importance on equipment quality, applicable product warranties,
                proper installation and continued customer support.
              </p>
              <p>
                Whether you need routine maintenance, technical assistance or repairs, we're
                committed to helping you get lasting value from your solar investment.
              </p>
            </div>
          </div>
          <ul className="rows rows-tight">
            {assurance.map(({ title, description }) => (
              <li className="row" key={title}>
                <h3>{title}</h3>
                <p>{description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="page-width split">
          <div>
            <h2>Everything You Need to Know Before Getting Started.</h2>
          </div>
          <div className="faq">
            {faqs.map(({ question, answer }) => (
              <details key={question}>
                <summary>
                  {question}
                  <span aria-hidden="true" />
                </summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section section-dark section-closing">
        <div className="page-width closing">
          <h2>Stop Adjusting to Poor Electricity. Start Enjoying a Better Solution.</h2>
          <div className="prose">
            <p>
              You shouldn't have to constantly worry about power outages, rising fuel costs or
              interrupted daily activities.
            </p>
            <p>
              Take the first step towards a more dependable and affordable power solution with
              SOLVLYTE.
            </p>
            <p>
              Whether you're looking to power your home or keep your business running, we're ready
              to help you find a solar solution that works for you.
            </p>
          </div>
          <div className="closing-actions">
            <a className="button-primary" href="#contact">
              Book a Free Consultation <ArrowUpRight aria-hidden="true" size={16} />
            </a>
            <a className="button-quiet" href="#contact">
              Contact Us <ArrowRight aria-hidden="true" size={16} />
            </a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="page-width footer-inner">
          <a className="wordmark" href="#home" aria-label="SOLVLYTE home">
            SOLVLYTE<span aria-hidden="true">.</span>
          </a>
          <p>Spend Less on Fuel. Enjoy More Reliable Power.</p>
          <span>Port Harcourt, Nigeria</span>
        </div>
      </footer>
    </main>
  );
}
