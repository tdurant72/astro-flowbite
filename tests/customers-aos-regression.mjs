import { readFile } from "node:fs/promises";
import assert from "node:assert/strict";

const source = await readFile(
  new URL("../src/components/custom/Customers.astro", import.meta.url),
  "utf8",
);

assert.doesNotMatch(
  source,
  /class="flex items-center justify-center transition-all duration-500 transform hover:scale-110"[\s\S]*?data-aos="fade-up"/,
  "Customers should not put AOS and transform hover styles on the same logo element.",
);

assert.match(
  source,
  /<div class="transition-all duration-500 transform hover:scale-110">/,
  "Customers should still keep the hover transform on a dedicated inner wrapper.",
);

console.log("Customers AOS regression checks passed.");
