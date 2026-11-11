import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BatteryCharging,
  Check,
  CircleHelp,
  Compass,
  Leaf,
  PanelsTopLeft,
  ShieldCheck,
  Sun,
  Wrench,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import homeImage from "@/assets/solvlyte-home.jpg";
import businessImage from "@/assets/solvlyte-business.jpg";

const slides = [
  {
    audience: "FOR THE HOME",
    eyebrow: "RELIABLE SOLAR SOLUTIONS FOR YOUR HOME",
    title: "Your World Doesn't Have to Stop When the Grid Does.",
    description:
      "Tired of unpredictable electricity, rising fuel costs and the constant dependence on generators? Enjoy a better way to power your home with premium, affordable solar solutions designed around your energy needs.",
    image: homeImage,
    alt: "Solar panels on a modern home surrounded by tropical greenery at sunset",
  },
  {
    audience: "FOR YOUR BUSINESS",
    eyebrow: "SMART ENERGY SOLUTIONS FOR YOUR BUSINESS",
    title: "Because Your Business Can't Afford to Stop.",
    description:
      "Power interruptions shouldn't stand between your business and its next milestone. Keep your operations running with reliable, professionally designed solar solutions that help reduce fuel expenses and minimise power-related disruptions.",
    image: businessImage,
    alt: "A Nigerian business premises with rooftop solar panels and tropical landscaping",
  },
];

const services = [
  {
    title: "Solar Panels",
    description:
      "Harness the power of the sun with quality solar panels designed to convert sunlight into usable electricity for your home or business.",
    icon: Sun,
    number: "01",
  },
  {
    title: "Solar Inverters",
    description:
      "Get reliable power conversion with suitable inverter solutions designed to meet your electricity requirements.",
    icon: Zap,
    number: "02",
  },
  {
    title: "Solar Batteries",
    description:
      "Store solar energy for use when sunlight is unavailable, helping you maintain a more reliable power supply throughout the day and night.",
    icon: BatteryCharging,
    number: "03",
  },
  {
    title: "Solar Installation",
    description:
      "From system planning to equipment installation, we provide professional installation services to help ensure your solar system is properly configured.",
    icon: PanelsTopLeft,
    number: "04",
  },
  {
    title: "Maintenance & Repairs",
    description:
      "Keep your solar system performing efficiently with maintenance, troubleshooting and repair services.",
    icon: Wrench,
    number: "05",
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
    description: "We focus on providing quality solar equipment suited to your energy requirements.",
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
        href: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(false);
  const active = slides[activeSlide];

  useEffect(() => {
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateAutoplay = () => setAutoplay(!motionPreference.matches);
    updateAutoplay();
    motionPreference.addEventListener("change", updateAutoplay);
    return () => motionPreference.removeEventListener("change", updateAutoplay);
  }, []);

  useEffect(() => {
    if (!autoplay) return;
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 5600);
    return () => window.clearInterval(interval);
  }, [autoplay]);

  if (!active) return null;

  return (
    <main className="solvlyte-page min-h-screen overflow-hidden bg-background text-foreground">
      <header className="site-header">
        <div className="site-header-inner">
          <a className="wordmark" href="#home" aria-label="SOLVLYTE Home">
            <span className="wordmark-symbol" aria-hidden="true">
              <Sun size={19} strokeWidth={1.8} />
            </span>
            SOLVLYTE<span className="wordmark-period">.</span>
          </a>
          <nav className="desktop-nav" aria-label="Main navigation">
            <a className="nav-current" href="#home">Home</a>
            <a href="#about">About Us</a>
            <a href="#services">Plans</a>
            <a href="#contact">Contact Us</a>
          </nav>
          <Button className="header-cta" type="button">
            Book a Free Consultation <ArrowUpRight aria-hidden="true" />
          </Button>
        </div>
      </header>

      <section id="home" className="hero-section" aria-label="Solar solutions for homes and businesses">
        <div className="hero-images" aria-hidden="true">
          {slides.map((slide, index) => (
            <img
              key={slide.audience}
              className={`hero-photo ${index === activeSlide ? "is-active" : ""}`}
              src={slide.image}
              alt=""
              width={1536}
              height={1024}
              fetchPriority={index === 0 ? "high" : "auto"}
            />
          ))}
        </div>
        <div className="hero-shade" aria-hidden="true" />
        <div className="hero-content page-width">
          <div className="hero-copy" key={active.audience}>
            <div className="hero-kicker"><span />{active.eyebrow}</div>
            <h1>{active.title}</h1>
            <p>{active.description}</p>
            <div className="hero-actions">
              <Button type="button" className="button-gold">
                Book a Free Consultation <ArrowUpRight aria-hidden="true" />
              </Button>
              <a className="hero-secondary" href="#services">
                Explore Our Plans <ArrowRight aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="hero-footer">
            <span>PORT HARCOURT · RIVERS STATE</span>
            <div className="slide-picker" aria-label="Hero slides">
              {slides.map((slide, index) => (
                <button
                  key={slide.audience}
                  type="button"
                  className={`slide-dot ${index === activeSlide ? "is-active" : ""}`}
                  aria-label={`Show ${index === 0 ? "residential" : "business"} slide`}
                  aria-pressed={index === activeSlide}
                  onClick={() => setActiveSlide(index)}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </button>
              ))}
              <span className="slide-total">/ 02</span>
            </div>
          </div>
          <a className="hero-scroll" href="#about" aria-label="Scroll to Who We Are">
            <ArrowDownRight aria-hidden="true" />
          </a>
        </div>
      </section>

      <section id="about" className="intro-section section-pad">
        <div className="page-width intro-grid">
          <div className="intro-heading">
            <div className="eyebrow"><span>01</span> WHO WE ARE</div>
            <h2>A Better Way to Experience Electricity.</h2>
            <a className="text-link" href="#contact">
              Discover More About Us <ArrowUpRight aria-hidden="true" />
            </a>
          </div>
          <div className="intro-copy">
            <p className="intro-lead">We believe reliable electricity should not be a luxury. It should be something every home and business can depend on.</p>
            <p>We are committed to helping individuals, households and businesses overcome the challenges of unreliable electricity and rising energy costs.</p>
            <p>Through the supply of quality solar equipment, professional installation and dependable after-sales support, we provide energy solutions designed around your unique needs.</p>
            <p>Whether you're looking to power your home, keep your business running or reduce your dependence on generators, SOLVLYTE is here to help you make the switch to smarter energy.</p>
          </div>
        </div>
        <div className="intro-marquee" aria-hidden="true">
          <span>BETTER POWER, BUILT AROUND YOU</span><Sun size={19} /><span>PORT HARCOURT · NIGERIA</span><Sun size={19} />
        </div>
      </section>

      <section id="services" className="services-section section-pad">
        <div className="page-width">
          <div className="section-heading section-heading-row">
            <div>
              <div className="eyebrow"><span>02</span> OUR PRODUCTS &amp; SERVICES</div>
              <h2>Everything You Need for a Smarter Power Solution.</h2>
            </div>
            <p>From consultation to professional installation and ongoing support, SOLVLYTE provides the guidance, products and services you need to make the most of solar energy.</p>
          </div>
          <div className="service-grid">
            {services.map(({ title, description, icon: Icon, number }) => (
              <article className="service-item" key={title}>
                <div className="service-top"><span>{number}</span><Icon aria-hidden="true" size={24} strokeWidth={1.5} /></div>
                <h3>{title}</h3>
                <p>{description}</p>
                <span className="service-rule" aria-hidden="true" />
              </article>
            ))}
          </div>
          <div className="service-footer">
            <span>BUILT AROUND YOUR ENERGY REQUIREMENTS</span>
            <a className="text-link" href="#contact">Explore Our Plans <ArrowUpRight aria-hidden="true" /></a>
          </div>
        </div>
      </section>

      <section className="advantage-section section-pad">
        <div className="page-width advantage-layout">
          <div className="advantage-intro">
            <div className="eyebrow eyebrow-light"><span>03</span> THE SOLVLYTE ADVANTAGE</div>
            <h2>Premium Quality Shouldn't Come at an Unaffordable Price.</h2>
            <p>Solar solutions are significant investments. That's why you should get quality equipment, professional service and real value for your money.</p>
            <div className="advantage-mark" aria-hidden="true"><Sun size={31} strokeWidth={1.4} /><span>SOLVLYTE</span></div>
          </div>
          <div className="advantage-list">
            {advantages.map(({ title, description }, index) => (
              <article className="advantage-item" key={title}>
                <span className="advantage-number">0{index + 1}</span>
                <div><h3>{title}</h3><p>{description}</p></div>
                <Check className="advantage-check" aria-hidden="true" size={19} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="benefits-section section-pad">
        <div className="page-width">
          <div className="section-heading benefits-heading">
            <div>
              <div className="eyebrow"><span>04</span> MORE THAN JUST SOLAR EQUIPMENT</div>
              <h2>A Better Power Experience, Designed Around Your Needs.</h2>
            </div>
            <p>Imagine spending less time worrying about power outages and more time focusing on what matters. With the right solar solution from SOLVLYTE, you can enjoy:</p>
          </div>
          <div className="benefit-grid">
            {benefits.map(({ title, description }, index) => (
              <article className="benefit-item" key={title}>
                <span className="benefit-number">0{index + 1}</span>
                <h3>{title}</h3>
                <p>{description}</p>
                <span className="benefit-spark" aria-hidden="true"><Sun size={16} strokeWidth={1.5} /></span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="process-section section-pad">
        <div className="page-width">
          <div className="process-heading">
            <div>
              <div className="eyebrow"><span>05</span> YOUR JOURNEY TO BETTER POWER</div>
              <h2>Getting Started with SOLVLYTE Is Simple.</h2>
            </div>
            <p>Finding the right solar solution shouldn't be complicated. Our process is designed to help you understand your energy needs and find a suitable solution without unnecessary complications.</p>
          </div>
          <div className="process-list">
            {processSteps.map(({ title, description }, index) => (
              <article className="process-item" key={title}>
                <span className="process-number">0{index + 1}</span>
                <div className="process-marker" aria-hidden="true"><span /></div>
                <div className="process-copy"><h3>{title}</h3><p>{description}</p></div>
              </article>
            ))}
          </div>
          <Button className="button-gold process-cta" type="button">
            Book Your Free Consultation <ArrowUpRight aria-hidden="true" />
          </Button>
        </div>
      </section>

      <section className="assurance-section section-pad">
        <div className="page-width assurance-layout">
          <div className="assurance-intro">
            <div className="eyebrow"><span>06</span> OUR COMMITMENT TO YOU</div>
            <h2>Our Commitment Doesn't End at Installation.</h2>
            <p>Installing your solar system is only the beginning of our relationship with you.</p>
            <p>At SOLVLYTE, we understand that investing in solar energy means investing in the long-term comfort and productivity of your home or business.</p>
            <p>That's why we place importance on equipment quality, applicable product warranties, proper installation and continued customer support.</p>
            <p>Whether you need routine maintenance, technical assistance or repairs, we're committed to helping you get lasting value from your solar investment.</p>
            <div className="assurance-signoff"><Leaf size={19} aria-hidden="true" /> SOLVLYTE: Here for your power needs, beyond installation.</div>
          </div>
          <div className="assurance-items">
            {assurance.map(({ title, description }) => (
              <article className="assurance-item" key={title}>
                <span className="assurance-icon"><ShieldCheck aria-hidden="true" size={21} strokeWidth={1.5} /></span>
                <div><h3>{title}</h3><p>{description}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="faq-section section-pad">
        <div className="page-width faq-layout">
          <div className="faq-intro">
            <div className="eyebrow"><span>07</span> HAVE QUESTIONS?</div>
            <h2>Everything You Need to Know Before Getting Started.</h2>
            <CircleHelp size={42} strokeWidth={1.2} aria-hidden="true" />
          </div>
          <div className="faq-list">
            {faqs.map(({ question, answer }, index) => (
              <details className="faq-item" key={question}>
                <summary><span className="faq-index">{String(index + 1).padStart(2, "0")}</span><span className="faq-question">{question}</span><span className="faq-toggle" aria-hidden="true">+</span></summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="closing-section section-pad">
        <div className="closing-sun" aria-hidden="true"><Sun size={58} strokeWidth={1} /></div>
        <div className="page-width closing-content">
          <div className="eyebrow eyebrow-light"><span>08</span> YOUR BETTER POWER EXPERIENCE STARTS HERE</div>
          <h2>Stop Adjusting to Poor Electricity. Start Enjoying a Better Solution.</h2>
          <p>You shouldn't have to constantly worry about power outages, rising fuel costs or interrupted daily activities.</p>
          <p>Take the first step towards a more dependable and affordable power solution with SOLVLYTE.</p>
          <p>Whether you're looking to power your home or keep your business running, we're ready to help you find a solar solution that works for you.</p>
          <div className="closing-actions">
            <Button className="button-gold" type="button">Book a Free Consultation <ArrowUpRight aria-hidden="true" /></Button>
            <Button className="button-quiet" type="button">Contact Us <ArrowRight aria-hidden="true" /></Button>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="page-width footer-inner">
          <a className="wordmark footer-wordmark" href="#home">
            <span className="wordmark-symbol" aria-hidden="true"><Sun size={19} strokeWidth={1.8} /></span>
            SOLVLYTE<span className="wordmark-period">.</span>
          </a>
          <p>Spend Less on Fuel. Enjoy More Reliable Power.</p>
          <span className="footer-location"><Compass size={15} aria-hidden="true" /> PORT HARCOURT, NIGERIA</span>
        </div>
      </footer>
    </main>
  );
}