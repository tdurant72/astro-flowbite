import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent, a as createAstro } from './astro/server_ncfLoZ91.mjs';
import 'kleur/colors';
import { $ as $$Button } from './Button_rCKldmGd.mjs';

const $$Astro = createAstro();
const $$Form = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Form;
  return renderTemplate`${maybeRenderHead()}<form> <div class="mb-6"> <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label> <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required> </div> <div class="mb-6"> <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Message</label> <input type="text" id="message" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required> </div> ${renderComponent($$result, "Button", $$Button, { "text": "Send" })} </form>`;
}, "/Users/tyusdurant/Documents/local_git/astro-flowbite/src/components/Form.astro", void 0);

export { $$Form as $ };
