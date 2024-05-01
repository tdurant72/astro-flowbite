/* empty css                              */
import { c as createComponent, r as renderTemplate, d as renderComponent, a as createAstro, m as maybeRenderHead } from './astro/server_ncfLoZ91.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './Layout_VdJ3FdZJ.mjs';
import { $ as $$HeaderSmall } from './HeaderSmall_Ayb_sZl8.mjs';
import { $ as $$Table } from './Table_Btb8y42U.mjs';

const $$Astro = createAstro();
const $$Four = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Four;
  const title = "Project 4";
  const subtitle = "Project 4 info";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Project 4" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div> ${renderComponent($$result2, "HeaderSmall", $$HeaderSmall, { "title": title, "subtitle": subtitle })} </div> <main> <div class="mb-12"> ${renderComponent($$result2, "Table", $$Table, {})} </div> </main> ` })} `;
}, "/Users/tyusdurant/Documents/local_git/astro-flowbite/src/pages/projects/four.astro", void 0);

const $$file = "/Users/tyusdurant/Documents/local_git/astro-flowbite/src/pages/projects/four.astro";
const $$url = "/projects/four";

export { $$Four as default, $$file as file, $$url as url };
