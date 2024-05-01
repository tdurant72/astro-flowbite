import { c as createComponent, r as renderTemplate, d as renderComponent, f as renderSlot, g as renderHead, b as addAttribute, a as createAstro } from './astro/server_ncfLoZ91.mjs';
import 'kleur/colors';
import { a as $$Footer, b as $$Nav, d as data, c as $$ViewTransitions } from './Footer_Ba0MAwF7.mjs';
/* empty css                              */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en" data-astro-cid-sckkx6r4> <head>', '<meta charset="UTF-8"><meta name="description"', '><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', "><title>", '</title><script>\n      //check for dark mode in local storage using the theme var\n      if (localStorage.getItem("theme") === "dark") {\n        document.documentElement.classList.add("dark");\n      } else {\n        document.documentElement.classList.remove("dark");\n      }\n    <\/script>', '</head> <body data-astro-cid-sckkx6r4> <div class="bg-stone-100 dark:bg-slate-800 min-h-screen" data-astro-cid-sckkx6r4> ', ' <div class="container" data-astro-cid-sckkx6r4> ', " ", " </div> </div>  </body> </html>"])), renderComponent($$result, "ViewTransitions", $$ViewTransitions, { "data-astro-cid-sckkx6r4": true }), addAttribute(data.siteDescription, "content"), addAttribute(Astro2.generator, "content"), title, renderHead(), renderComponent($$result, "Nav", $$Nav, { "data-astro-cid-sckkx6r4": true }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-sckkx6r4": true }));
}, "/Users/tyusdurant/Documents/local_git/astro-flowbite/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
