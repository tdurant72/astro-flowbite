import { readFile } from "node:fs/promises";
import assert from "node:assert/strict";

const source = await readFile(
  new URL("../src/components/MarketingHero.astro", import.meta.url),
  "utf8",
);

assert.match(
  source,
  /document\.addEventListener\("astro:page-load",\s*initMarketingHero\)/,
  "MarketingHero should reinitialize on Astro page loads.",
);

assert.match(
  source,
  /document\.addEventListener\("astro:before-swap",\s*destroyMarketingHero\)/,
  "MarketingHero should clean up before Astro swaps pages.",
);

assert.match(
  source,
  /let heroAnimations:\s*[A-Za-z0-9_<>,\s\[\]\|:()?-]+=\s*\[\]/,
  "MarketingHero should track active animation controls so they can be cleaned up.",
);

assert.match(
  source,
  /heroAnimations\.forEach\(\(animation\)\s*=>\s*animation\.stop\(\)\)/,
  "MarketingHero should stop in-flight animations during cleanup.",
);

assert.doesNotMatch(
  source,
  /\n\s*initMarketingHero\(\);\s*\n/,
  "MarketingHero should initialize from Astro lifecycle events instead of a direct eager call.",
);

assert.doesNotMatch(
  source,
  /back_forward/,
  "MarketingHero should not skip its entrance animation on back/forward navigation.",
);

assert.doesNotMatch(
  source,
  /src="\$\{heroVideo\}"|poster="\$\{heroPoster\}"|<img src="\$\{heroPoster\}"/,
  "MarketingHero client script should not reference frontmatter-only variables directly.",
);

console.log("MarketingHero lifecycle regression checks passed.");
