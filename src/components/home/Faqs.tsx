import { Eyebrow, TwoTone } from "@/components/site/SectionHeading";
import { faqs } from "@/content/homepage";

type FaqRowProps = { number: string; question: string; answer: string; defaultOpen?: boolean };

/** One question. A native <details> row: no script, and the answer stays in the page source. */
function FaqRow({ number, question, answer, defaultOpen = false }: FaqRowProps) {
  return (
    <details className="faq-row group border-b border-line" open={defaultOpen}>
      <summary className="flex cursor-pointer items-start gap-4 rounded-sm py-6 sm:gap-5">
        <span className="w-6 shrink-0 pt-px font-display text-[1.0625rem] font-medium leading-[1.4] tabular-nums text-moss-deep sm:text-lg">
          {number}
        </span>
        <h3 className="flex-1 text-balance font-display text-[1.0625rem] font-semibold leading-[1.4] tracking-[-0.01em] text-forest sm:text-[1.1875rem]">
          {question}
        </h3>
        <span
          aria-hidden="true"
          className="grid size-9 shrink-0 place-items-center rounded-full border border-line text-forest transition-colors duration-200 group-open:border-forest group-open:bg-forest group-open:text-paper group-hover:border-forest"
        >
          <svg
            viewBox="0 0 16 16"
            className="size-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          >
            <path d="M3 8h10" />
            <path className="faq-mark-v" d="M8 3v10" />
          </svg>
        </span>
      </summary>
      <p className="prose-body max-w-[62ch] pb-7 pl-10 pr-2 text-charcoal sm:pl-11 sm:pr-14">
        {answer}
      </p>
    </details>
  );
}

/**
 * Section 8: the nine approved questions. A quiet white panel with the heading held in a
 * narrow left column and the ruled rows on the right.
 */
export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-heading"
      className="px-[var(--bleed)] pb-[var(--section-y)]"
    >
      <div className="panel bg-white">
        <div className="panel-shell grid gap-y-8 py-14 sm:py-16 lg:grid-cols-12 lg:gap-x-8 lg:py-24">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <Eyebrow>{faqs.eyebrow}</Eyebrow>
              <h2 id="faqs-heading" className="display-2 mt-5">
                <TwoTone heading={faqs.heading} />
              </h2>
            </div>
          </div>

          <div className="border-t border-line lg:col-span-7 lg:col-start-6">
            {faqs.items.map((item, index) => (
              <FaqRow key={item.number} {...item} defaultOpen={index === 0} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
