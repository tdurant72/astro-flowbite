/* empty css                              */
import { c as createComponent, r as renderTemplate, d as renderComponent, a as createAstro, m as maybeRenderHead } from './astro/server_ncfLoZ91.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './Layout_VdJ3FdZJ.mjs';
import { $ as $$HeaderSmall } from './HeaderSmall_Ayb_sZl8.mjs';
import { $ as $$DeviceMockups } from './DeviceMockups_BH58RgdY.mjs';

const $$Astro = createAstro();
const $$Three = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Three;
  const title = "Project 3";
  const subtitle = "Project 3 info";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Project 3" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div> ${renderComponent($$result2, "HeaderSmall", $$HeaderSmall, { "title": title, "subtitle": subtitle })} </div> <main> <div class="mb-12"> <div class=""> ${renderComponent($$result2, "DeviceMockups", $$DeviceMockups, { "lightImage": "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-light.png", "darkImage": "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-dark.png" })} </div> <p class="dark:text-white">Some info here...</p> </div> </main> ` })} `;
}, "/Users/tyusdurant/Documents/local_git/astro-flowbite/src/pages/projects/three.astro", void 0);

const $$file = "/Users/tyusdurant/Documents/local_git/astro-flowbite/src/pages/projects/three.astro";
const $$url = "/projects/three";

export { $$Three as default, $$file as file, $$url as url };
