import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as createAstro } from './astro/server_ncfLoZ91.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$HeaderSmall = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$HeaderSmall;
  const { title, subtitle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="mt-16"> <div class="text-center justify-self-center items-center p-2"> <h1 class="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl"> ${title} </h1> <p class="mt-6 text-lg leading-8 text-gray-600 dark:text-white"> ${subtitle} </p> </div> </div>`;
}, "/Users/tyusdurant/Documents/local_git/astro-flowbite/src/components/HeaderSmall.astro", void 0);

export { $$HeaderSmall as $ };
