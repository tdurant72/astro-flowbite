/* empty css                              */
import { c as createComponent, r as renderTemplate, d as renderComponent, a as createAstro, m as maybeRenderHead } from './astro/server_ncfLoZ91.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './Layout_VdJ3FdZJ.mjs';
import { $ as $$HeaderSmall } from './HeaderSmall_Ayb_sZl8.mjs';
import { $ as $$Table } from './Table_Btb8y42U.mjs';

const $$Astro = createAstro();
const $$Two = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Two;
  const title = "Project 2";
  const subtitle = "Project 2 info";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Project 2" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div> ${renderComponent($$result2, "HeaderSmall", $$HeaderSmall, { "title": title, "subtitle": subtitle })} </div> <main> <div class="mb-12"> ${renderComponent($$result2, "Table", $$Table, {})} </div> </main> ` })} `;
}, "/Users/tyusdurant/Documents/local_git/astro-flowbite/src/pages/projects/two.astro", void 0);

const $$file = "/Users/tyusdurant/Documents/local_git/astro-flowbite/src/pages/projects/two.astro";
const $$url = "/projects/two";

export { $$Two as default, $$file as file, $$url as url };
