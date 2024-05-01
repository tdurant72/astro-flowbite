import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, a as createAstro } from './astro/server_ncfLoZ91.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$ButtonGroup = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ButtonGroup;
  const { text1, href1, text2, href2, external } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="inline-flex rounded-md shadow-sm" role="group"> <a${addAttribute(href1, "href")} class="bg-primary inline-flex items-center px-4 py-2 text-sm font-medium text-white border border-gray-200 rounded-l-lg focus:z-10 focus:ring-2 focus:ring-secondary dark:bg-primary dark:border-gray-600 dark:text-white dark:focus:ring-secondary dark:focus:text-white"> ${text1} </a> <a${addAttribute(href2, "href")} class="bg-primary cursor: pointer inline-flex items-center px-4 py-2 text-sm font-medium text-white border border-gray-200 rounded-r-lg focus:z-10 focus:ring-2 focus:ring-secondary dark:bg-primary dark:border-gray-600 dark:text-white dark:focus:ring-secondary dark:focus:text-white"> ${text2} ${external && renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" class="ml-2" width="20" fill="white" height="20" viewBox="0 0 30 30"> <path d="M 25.980469 2.9902344 A 1.0001 1.0001 0 0 0 25.869141 3 L 20 3 A 1.0001 1.0001 0 1 0 20 5 L 23.585938 5 L 13.292969 15.292969 A 1.0001 1.0001 0 1 0 14.707031 16.707031 L 25 6.4140625 L 25 10 A 1.0001 1.0001 0 1 0 27 10 L 27 4.1269531 A 1.0001 1.0001 0 0 0 25.980469 2.9902344 z M 6 7 C 4.9069372 7 4 7.9069372 4 9 L 4 24 C 4 25.093063 4.9069372 26 6 26 L 21 26 C 22.093063 26 23 25.093063 23 24 L 23 14 L 23 11.421875 L 21 13.421875 L 21 16 L 21 24 L 6 24 L 6 9 L 14 9 L 16 9 L 16.578125 9 L 18.578125 7 L 16 7 L 14 7 L 6 7 z"></path> </svg>`} </a> </div>`;
}, "/Users/tyusdurant/Documents/local_git/astro-flowbite/src/components/ButtonGroup.astro", void 0);

export { $$ButtonGroup as $ };
