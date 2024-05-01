import { c as createComponent, r as renderTemplate, d as renderComponent, f as renderSlot, g as renderHead, b as addAttribute, a as createAstro, m as maybeRenderHead } from './astro/server_ncfLoZ91.mjs';
import 'kleur/colors';
import { a as $$Footer, b as $$Nav, d as data, c as $$ViewTransitions } from './Footer_Ba0MAwF7.mjs';
/* empty css                          */
import 'clsx';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$ProjectLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ProjectLayout;
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en" data-astro-cid-eo3wme6m> <head>', '<meta charset="UTF-8"><meta name="description"', '><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', "><title>", '</title><script>\n      //check for dark mode in local storage using the theme var\n      if (localStorage.getItem("theme") === "dark") {\n        document.documentElement.classList.add("dark");\n      } else {\n        document.documentElement.classList.remove("dark");\n      }\n    <\/script>', '</head> <body data-astro-cid-eo3wme6m> <div class="bg-stone-100 dark:bg-slate-800 min-h-screen" data-astro-cid-eo3wme6m> ', ' <div class="container" data-astro-cid-eo3wme6m> ', " ", " </div> </div>  </body> </html>"])), renderComponent($$result, "ViewTransitions", $$ViewTransitions, { "data-astro-cid-eo3wme6m": true }), addAttribute(data.siteDescription, "content"), addAttribute(Astro2.generator, "content"), title, renderHead(), renderComponent($$result, "Nav", $$Nav, { "data-astro-cid-eo3wme6m": true }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-eo3wme6m": true }));
}, "/Users/tyusdurant/Documents/local_git/astro-flowbite/src/layouts/ProjectLayout.astro", void 0);

const $$Astro = createAstro();
const $$Prose = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Prose;
  return renderTemplate`${maybeRenderHead()}<div class="prose dark:prose-invert prose-h1:font-bold prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-a:text-blue-500 prose-p:mb-6"> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/Users/tyusdurant/Documents/local_git/astro-flowbite/src/components/Prose.astro", void 0);

export { $$ProjectLayout as $, $$Prose as a };
