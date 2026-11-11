import { Fragment } from "react";

import { brand, navigation } from "@/content/homepage";

/** The brand line's sentences, kept whole so a narrow screen breaks between them, not inside. */
const brandLineSentences = brand.line.match(/[^.]+\./g)?.map((sentence) => sentence.trim()) ?? [
  brand.line,
];

/**
 * Footer: the brand name at full width and the approved brand line. It carries no contact
 * details, address or legal lines because none have been supplied yet.
 */
export function SiteFooter() {
  return (
    <footer className="on-dark bg-forest pb-10 text-paper lg:pb-12">
      <div className="shell">
        <div className="border-t border-line-inverse pt-10 lg:pt-14">
          <div className="overflow-x-clip [container-type:inline-size]">
            <p className="footer-wordmark font-display font-extrabold text-paper">{brand.name}</p>
          </div>

          <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-end md:justify-between lg:mt-10">
            <p className="font-display text-[1.25rem] font-medium leading-[1.3] tracking-[-0.015em] text-gold sm:text-2xl">
              {brandLineSentences.map((sentence, index) => (
                <Fragment key={sentence}>
                  {index > 0 ? " " : null}
                  <span className="inline-block">{sentence}</span>
                </Fragment>
              ))}
            </p>

            <nav aria-label="Footer" className="md:shrink-0">
              <ul className="flex flex-wrap gap-x-7 gap-y-2 md:flex-nowrap">
                {navigation.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="flex h-11 items-center text-[0.9375rem] font-medium text-mist transition-colors duration-200 hover:text-paper"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
