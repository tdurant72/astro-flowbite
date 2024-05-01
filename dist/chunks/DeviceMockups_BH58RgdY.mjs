import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, a as createAstro } from './astro/server_ncfLoZ91.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$DeviceMockups = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$DeviceMockups;
  const { darkImage, lightImage } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="my-4 border-gray-300 dark:border-gray-900 bg-gray-300 dark:bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]"> <div class="h-[32px] w-[3px] bg-gray-300 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div> <div class="h-[46px] w-[3px] bg-gray-300 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div> <div class="h-[46px] w-[3px] bg-gray-300 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div> <div class="h-[64px] w-[3px] bg-gray-300 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div> <div class="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800"> <img${addAttribute(lightImage, "src")} class="dark:hidden w-[272px] h-[572px]" alt=""> <img${addAttribute(darkImage, "src")} class="hidden dark:block w-[272px] h-[572px]" alt=""> </div> </div>`;
}, "/Users/tyusdurant/Documents/local_git/astro-flowbite/src/components/DeviceMockups.astro", void 0);

export { $$DeviceMockups as $ };
