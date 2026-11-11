/**
 * Exports a static, self-contained snapshot of the rendered homepage.
 *
 * Why this exists: the live app is served by TanStack Start (SSR + client hydration),
 * which GitHub Pages cannot run. This script captures the server-rendered HTML from the
 * dev server, inlines the compiled stylesheet, rewrites images, and re-implements the
 * one piece of interactivity the design depends on (the two-slide hero) in plain JS.
 *
 * Usage:
 *   npm run dev                     # in one terminal, serves http://localhost:8080
 *   node scripts/export-static-preview.mjs
 *
 * Output:
 *   docs/index.html                  fast preview, images referenced from docs/assets
 *   docs/solvlyte-homepage.html      single self-contained file (downloadable)
 *   docs/assets/*.jpg                optimised copies of the source photography
 *
 * Re-run it whenever the homepage design changes, then commit docs/.
 */
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const BASE = process.env.PREVIEW_BASE ?? "http://localhost:8080";
const OUT_DIR = join(root, "docs");
const ASSET_DIR = join(OUT_DIR, "assets");

/** Approved hero copy — the live app swaps these via React state. */
const SLIDES = [
  {
    title: "Your World Doesn't Have to Stop When the Grid Does.",
    description:
      "Tired of unpredictable electricity, rising fuel costs and the constant dependence on generators? Enjoy a better way to power your home with premium, affordable solar solutions designed around your energy needs.",
  },
  {
    title: "Because Your Business Can't Afford to Stop.",
    description:
      "Power interruptions shouldn't stand between your business and its next milestone. Keep your operations running with reliable, professionally designed solar solutions that help reduce fuel expenses and minimise power-related disruptions.",
  },
];

const HERO_SCRIPT = `
<script>
(function () {
  var slides = ${JSON.stringify(SLIDES, null, 2)};
  var section = document.querySelector('.hero');
  var copy = document.querySelector('.hero-copy');
  if (!section || !copy) return;
  var heading = copy.querySelector('h1');
  var para = copy.querySelector('p');
  var photos = document.querySelectorAll('.hero-media img');
  var dots = document.querySelectorAll('.hero-slides button');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var index = 0, timer = null, paused = false;

  function render(next, animate) {
    index = (next + slides.length) % slides.length;
    var slide = slides[index], i;
    for (i = 0; i < photos.length; i++) photos[i].classList.toggle('is-active', i === index);
    for (i = 0; i < dots.length; i++) {
      dots[i].classList.toggle('is-active', i === index);
      dots[i].setAttribute('aria-pressed', i === index ? 'true' : 'false');
    }
    heading.textContent = slide.title;
    para.textContent = slide.description;
    if (animate && !reduce) {
      copy.style.animation = 'none';
      void copy.offsetHeight;
      copy.style.animation = '';
    }
  }
  function start() {
    if (reduce || paused || timer) return;
    timer = window.setInterval(function () { render(index + 1, true); }, 5600);
  }
  function stop() { if (timer) { window.clearInterval(timer); timer = null; } }

  Array.prototype.forEach.call(dots, function (dot, n) {
    dot.addEventListener('click', function () { render(n, true); });
  });
  section.addEventListener('mouseenter', function () { paused = true; stop(); });
  section.addEventListener('mouseleave', function () { paused = false; start(); });
  section.addEventListener('focusin', function () { paused = true; stop(); });
  section.addEventListener('focusout', function () { paused = false; start(); });

  render(0, false);
  start();
})();
</script>
`;

async function get(path, as = "text") {
  const response = await fetch(BASE + path);
  if (!response.ok) throw new Error(`GET ${path} -> ${response.status}`);
  return as === "buffer" ? Buffer.from(await response.arrayBuffer()) : await response.text();
}

function dataUri(buffer, mime) {
  return `data:${mime};base64,${buffer.toString("base64")}`;
}

/** Pull the assets the SSR output references, so both output variants use the same files. */
async function collectAssets(html) {
  const sources = [
    ...new Set([...html.matchAll(/<img\b[^>]*\ssrc="(\/src\/assets\/[^"]+)"/g)].map((m) => m[1])),
  ];
  const assets = new Map();
  for (const src of sources) {
    assets.set(src, await get(src, "buffer"));
  }
  return assets;
}

function stripClientRuntime(html) {
  return html
    .replace(/<script[^>]*>.*?<\/script>/gs, "")
    .replace(/<link rel="preload"[^>]*>/g, "")
    .replace(/<link rel="modulepreload"[^>]*>/g, "")
    .replace(/<link rel="stylesheet" href="\/@tanstack-start\/styles\.css[^"]*"[^>]*>/g, "")
    .replace(/ data-tsd-source="[^"]*"/g, "");
}

async function main() {
  await mkdir(ASSET_DIR, { recursive: true });

  const [rawHtml, css, favicon] = await Promise.all([
    get("/"),
    // Vite serves the stylesheet as an HMR JS module unless ?direct is requested.
    get("/src/styles.css?direct"),
    existsSync(join(root, "public/favicon.ico"))
      ? readFile(join(root, "public/favicon.ico"))
      : null,
  ]);

  if (!css.includes("tailwindcss") || css.includes("import.meta.hot")) {
    throw new Error("Stylesheet looks wrong — expected compiled CSS, got a Vite HMR module.");
  }

  const assets = await collectAssets(rawHtml);
  if (assets.size === 0) throw new Error("No homepage images found in the SSR output.");

  // Save optimised copies next to the HTML for the linked (fast) variant.
  const names = new Map();
  for (const [src, buffer] of assets) {
    const name = src.split("/").pop();
    names.set(src, name);
    await writeFile(join(ASSET_DIR, name), buffer);
  }

  let html = stripClientRuntime(rawHtml);
  html = html.replace(
    /<link rel="stylesheet" href="\/src\/styles\.css"[^>]*>/,
    `<style id="solvlyte-design">\n${css}\n</style>`,
  );
  if (favicon)
    html = html.replace('href="/favicon.ico"', `href="${dataUri(favicon, "image/x-icon")}"`);

  const withAssets = (resolveSrc) => {
    let out = html;
    for (const [src, name] of names) out = out.replaceAll(src, resolveSrc(name));
    return out.replace("</body>", `${HERO_SCRIPT}\n</body>`);
  };

  // 1. Linked variant: small HTML, assets cached separately. Used for the Pages preview.
  await writeFile(
    join(OUT_DIR, "index.html"),
    withAssets((name) => `assets/${name}`),
  );

  // 2. Self-contained variant: one file you can download and open offline.
  await writeFile(
    join(OUT_DIR, "solvlyte-homepage.html"),
    withAssets((name) =>
      dataUri(assets.get([...names].find(([, n]) => n === name)[0]), "image/jpeg"),
    ),
  );

  // Tells GitHub Pages to serve the files verbatim instead of running Jekyll.
  await writeFile(join(OUT_DIR, ".nojekyll"), "");

  const sizes = [
    ["docs/index.html", (await readFile(join(OUT_DIR, "index.html"))).length],
    [
      "docs/solvlyte-homepage.html",
      (await readFile(join(OUT_DIR, "solvlyte-homepage.html"))).length,
    ],
  ];
  for (const [file, bytes] of sizes) console.log(`${file}  ${(bytes / 1024).toFixed(0)} KB`);
  console.log(`assets: ${[...names.values()].join(", ")}`);
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
