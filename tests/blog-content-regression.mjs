import { readFile } from "node:fs/promises";
import assert from "node:assert/strict";

const blogPage = await readFile(
  new URL("../src/pages/blog.astro", import.meta.url),
  "utf8",
);
const oldPostRoute = await readFile(
  new URL("../src/pages/posts/old[slug].astro", import.meta.url),
  "utf8",
).catch(() => "");
const postList = await readFile(
  new URL("../src/components/custom/PostList.astro", import.meta.url),
  "utf8",
);

assert.doesNotMatch(
  blogPage,
  /console\.error\("Error fetching YouTube feed:"/,
  "Blog page should degrade quietly when the YouTube feed is unavailable.",
);

assert.match(
  blogPage,
  /youtubeVideos\.length > 0/,
  "Blog page should only render the YouTube section when videos are available.",
);

assert.equal(
  oldPostRoute,
  "",
  "Legacy old[slug] route should be removed once posts uses the current collection model.",
);

assert.doesNotMatch(
  postList,
  /getCollection\("blog"\)/,
  "PostList should use the current posts collection, not the legacy blog collection.",
);

console.log("Blog content regression checks passed.");
