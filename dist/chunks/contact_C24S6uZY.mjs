/* empty css                              */
import { c as createComponent, r as renderTemplate, d as renderComponent, a as createAstro, m as maybeRenderHead } from './astro/server_ncfLoZ91.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './Layout_VdJ3FdZJ.mjs';
import { $ as $$HeaderSmall } from './HeaderSmall_Ayb_sZl8.mjs';
import { $ as $$Form } from './Form_a5F9dWu_.mjs';

const $$Astro = createAstro();
const $$Contact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Contact;
  const title = "Contact";
  const subtitle = "Contact me using the form below. Or find me online!";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contact" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div> ${renderComponent($$result2, "HeaderSmall", $$HeaderSmall, { "title": title, "subtitle": subtitle })} </div> <main> <div class="max-w-md m-auto my-8"> ${renderComponent($$result2, "Form", $$Form, {})} </div> </main> ` })} `;
}, "/Users/tyusdurant/Documents/local_git/astro-flowbite/src/pages/contact.astro", void 0);

const $$file = "/Users/tyusdurant/Documents/local_git/astro-flowbite/src/pages/contact.astro";
const $$url = "/contact";

export { $$Contact as default, $$file as file, $$url as url };
