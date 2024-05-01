/* empty css                              */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent, a as createAstro } from './astro/server_ncfLoZ91.mjs';
import 'kleur/colors';
import { $ as $$Layout } from './Layout_VdJ3FdZJ.mjs';
import { $ as $$HeaderSmall } from './HeaderSmall_Ayb_sZl8.mjs';
import { $ as $$ButtonGroup } from './ButtonGroup_Bg-WbvfZ.mjs';
import { d as data } from './Footer_Ba0MAwF7.mjs';

const $$Astro$1 = createAstro();
const $$ProjectCards = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ProjectCards;
  const { href, projectTitle, body, type, repo } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bg-gray-50 dark:bg-gray-900 border border-gray-200 shadow-lg dark:border-gray-700 rounded-lg"> <img class="w-full dark:hidden border-solid border-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg" alt="dashboard image"> <img class="w-full hidden dark:block" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg" alt="dashboard image"> <div class="px-8 py-8"> ${type && renderTemplate`<span class="bg-primary text-white text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-blue-100 mb-2"> ${type} </span>`} <h2 class="text-gray-900 dark:text-white text-3xl font-extrabold mb-2"> ${projectTitle} </h2> <p class="text-lg font-normal text-gray-700 dark:text-gray-400 mb-4"> ${body} </p> ${renderComponent($$result, "ButtonGroup", $$ButtonGroup, { "text1": "More Info", "href1": href, "text2": "Code Repo", "href2": repo })} </div></div>`;
}, "/Users/tyusdurant/Documents/local_git/astro-flowbite/src/components/ProjectCards.astro", void 0);

const $$Astro = createAstro();
const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Projects;
  const title = "Projects";
  const subtitle = "Some Projects";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Projects" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "HeaderSmall", $$HeaderSmall, { "title": title, "subtitle": subtitle })} <div class=""> <section class="section"> <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16"> <div class="grid md:grid-cols-2 sm:grid-cols-1 gap-8"> ${data.projects.map(
    (value, index) => {
      return renderTemplate`${renderComponent($$result2, "ProjectCard", $$ProjectCards, { "projectTitle": value.projectTitle, "href": value.href, "body": value.about, "type": value.type, "repo": value.repo })}`;
    }
  )} </div> </div> </section> </div> </main> ` })} `;
}, "/Users/tyusdurant/Documents/local_git/astro-flowbite/src/pages/projects.astro", void 0);

const $$file = "/Users/tyusdurant/Documents/local_git/astro-flowbite/src/pages/projects.astro";
const $$url = "/projects";

export { $$Projects as default, $$file as file, $$url as url };
