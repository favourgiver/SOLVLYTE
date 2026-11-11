/**
 * Homepage photography.
 *
 * Every photo ships as AVIF with a WebP fallback at a few widths, named `<name>-<width>.<ext>`.
 * To swap a photo, replace its files (keeping the names) or add a new set and register it below
 * with its full-size pixel dimensions, which reserve the space before the image loads.
 *
 * The current set is AI-generated placeholder imagery, not photographs of SOLVLYTE's own
 * installations, staff or customers. Replace it with real project photography when available.
 */
const urls = import.meta.glob<string>("./*.{avif,webp}", {
  eager: true,
  query: "?url",
  import: "default",
});

export type Photo = {
  /** Fallback URL for the plain `src` attribute (largest WebP). */
  src: string;
  avif: string;
  webp: string;
  /** Intrinsic size of the largest file. */
  width: number;
  height: number;
};

function url(file: string): string {
  const found = urls[`./${file}`];
  if (!found) throw new Error(`Missing image file: src/assets/images/${file}`);
  return found;
}

function photo(name: string, width: number, height: number, widths: readonly number[]): Photo {
  const srcSet = (ext: "avif" | "webp") =>
    widths.map((w) => `${url(`${name}-${w}.${ext}`)} ${w}w`).join(", ");

  return {
    src: url(`${name}-${width}.webp`),
    avif: srcSet("avif"),
    webp: srcSet("webp"),
    width,
    height,
  };
}

export const photos = {
  heroHome: photo("hero-home", 1376, 768, [640, 960, 1376]),
  heroBusiness: photo("hero-business", 1376, 768, [640, 960, 1376]),
  installTeam: photo("install-team", 1376, 768, [640, 960, 1376]),
  installer: photo("installer", 768, 960, [480, 768]),
  solarPanels: photo("solar-panels", 1376, 768, [640, 960, 1376]),
  solarInverter: photo("solar-inverter", 1140, 768, [480, 760, 1140]),
  solarBattery: photo("solar-battery", 890, 768, [480, 720, 890]),
  supportVisit: photo("support-visit", 848, 1060, [480, 848]),
  eveningHome: photo("evening-home", 768, 1376, [480, 768]),
  duskHome: photo("dusk-home", 1376, 768, [640, 960, 1376]),
} satisfies Record<string, Photo>;
