# SOLVLYTE homepage

The homepage for SOLVLYTE, a solar energy solutions business serving homes and businesses in
Port Harcourt and surrounding areas in Rivers State, Nigeria.

This is **phase one: a visual build of the homepage only**. It follows the SOLVLYTE homepage
brief: one page, the approved copy word for word, and no backend, forms or integrations.

## What is and isn't built

| Built                                                                                                                                               | Deliberately not built yet                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| One page with nine sections: hero, introduction, what we offer, why choose SOLVLYTE, just for you, how it works, quality assurance, FAQs, final CTA | About, Plans, Contact or any other page or route                     |
| A two-slide hero (home, then business) that cross-fades every six seconds                                                                           | Booking flow, consultation or contact form                           |
| Responsive layout for phone, tablet and desktop                                                                                                     | WhatsApp, email, phone, payment, CRM, analytics or any other service |
| Header and footer navigation that scrolls within the page                                                                                           | Real destinations for the buttons                                    |

## Before this goes live

1. **Replace the photographs.** The ten photos are AI-generated placeholders. They do not show
   SOLVLYTE's own installations, staff or customers. See [Swap a photograph](#swap-a-photograph).
2. **Connect the buttons.** "Book a Free Consultation", "Explore Our Plans", "Discover More About
   Us" and "Contact Us" are visual only and do nothing when pressed. See
   [Connect a button](#connect-a-button).
3. **Add contact details.** The footer shows the brand name and brand line only, because no
   address, phone number, email or legal line has been supplied.
4. **Add the logo, if there is one.** The header and footer set the name as text, and the favicon
   is the letter S from that text. See `src/components/site/Wordmark.tsx` and `public/favicon.svg`.
5. **Add a link-preview image** (`og:image`) to the home route in `src/routes/index.tsx`.

## Where things are

| Path                                     | What it holds                                                                  |
| ---------------------------------------- | ------------------------------------------------------------------------------ |
| `src/content/homepage.ts`                | The homepage copy: the approved wording, locked (see below).                   |
| `src/content/approved-homepage-copy.txt` | The signed-off wording from the brief, used by the test that guards the copy.  |
| `src/content/site.ts`                    | Page title and description for search engines and link previews.               |
| `src/components/home/`                   | One component per homepage section, plus `HomePage.tsx`, which sets the order. |
| `src/components/site/`                   | Shared pieces: header, footer, button, section heading, picture, wordmark.     |
| `src/assets/images/`                     | The photographs (AVIF and WebP) and `index.ts`, the list of them.              |
| `src/assets/fonts/`                      | Manrope and Inter, self-hosted, with their licences.                           |
| `src/styles.css`                         | Colours, type scale, spacing and the few hand-written styles (hero, FAQ).      |
| `src/routes/`                            | `index.tsx` is the homepage route; `__root.tsx` is the HTML shell.             |
| `src/components/ui/`                     | Unused component library that came with the project template.                  |

## Common changes

### Change the wording

The copy is locked to the approved wording, including spelling and punctuation. To change it:

1. Edit the text in `src/content/homepage.ts`.
2. Make the same change in `src/content/approved-homepage-copy.txt`.
3. Run `npm test`. The test fails if the page and the approved file disagree, which is how an
   accidental edit gets caught.

Headings are stored in two halves (`strong` and `soft`) so they can be shown in two tones. The
two halves joined by a space are the approved heading.

### Swap a photograph

Each photo is stored at two or three widths, in AVIF with a WebP fallback, named
`<name>-<width>.avif` and `<name>-<width>.webp`.

1. Export the new photo at the same widths and formats as the one it replaces (the widths are
   listed in `src/assets/images/index.ts`).
2. Put the files in `src/assets/images/` under the same names.
3. If the shape of the photo changed, update its width and height in `index.ts`.
4. Update the `alt` text where the photo is used so it describes the new picture.

Each frame crops its photo to fit. If the subject is cut off, adjust the `object-[x_y]` class
beside that photo.

| Photo            | Used in                                   |
| ---------------- | ----------------------------------------- |
| `hero-home`      | Hero, slide 1                             |
| `hero-business`  | Hero, slide 2                             |
| `install-team`   | Introduction, large photo                 |
| `installer`      | Introduction, small photo                 |
| `solar-panels`   | What We Offer, Solar Panels card          |
| `solar-inverter` | What We Offer, Solar Inverters card       |
| `solar-battery`  | What We Offer, Solar Batteries card       |
| `evening-home`   | Just for You                              |
| `support-visit`  | Quality Assurance and After-Sales Support |
| `dusk-home`      | Final call to action                      |

### Connect a button

Every button is a `CtaButton` (`src/components/site/CtaButton.tsx`). Give it an `href` and it
becomes a link:

```tsx
<CtaButton href="/contact">{hero.primaryCta}</CtaButton>
```

The navigation labels and their targets are in `navigation` in `src/content/homepage.ts`.

One test (`HomePage.test.tsx`) checks that phase one stays visual only: no forms, and no links
that leave the page. Update it when the buttons get real destinations.

### Change colours or type

The palette, fonts, type scale and spacing are variables at the top of `src/styles.css`. Colours
there must be written in `oklch()`; the hex equivalents are in the comments.

### Change the hero timing

`HERO_SLIDE_MS` in `src/components/home/Hero.tsx` sets how long each slide stays. The slides do
not rotate for visitors whose device asks for reduced motion.

## Development

Packages are installed with [Bun](https://bun.sh) (the lockfile is `bun.lock`). The scripts run
with either Bun or npm.

```sh
bun install
npm run dev      # start the dev server
npm test         # copy lock, page structure and hero behaviour
npm run lint
npm run build    # production build
```

Built with TanStack Start, React 19, Tailwind CSS 4 and Vite.

## Lovable

This project is connected to [Lovable](https://lovable.dev). You can keep working on it in the
[Lovable editor](https://lovable.dev/projects/783f3efc-add2-568d-91a8-25d1fad75bbe).

- Changes made in Lovable are committed to this repository.
- Commits pushed to `main` on GitHub sync back into Lovable.
- Do not rewrite published history (force push, rebase or amend pushed commits). See
  `AGENTS.md`.

## Credits

- Typefaces: [Manrope](https://github.com/sharanda/manrope) and
  [Inter](https://github.com/rsms/inter), both under the SIL Open Font License 1.1. The licence
  texts are in `src/assets/fonts/`.
- Icons: [Lucide](https://lucide.dev), ISC licence.
