import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as createAstro } from './astro/server_ncfLoZ91.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$Table = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Table;
  const heading = ["Product Name", "Color", "Category", "Price"];
  const data = [
    {
      name: 'Apple MacBook Pro 17"',
      color: "Silver",
      category: "Laptop",
      price: "$2999"
    },
    {
      name: "Microsoft Surface Pro",
      color: "White",
      category: "Laptop PC",
      price: "$1999"
    },
    {
      name: "Magic Mouse 2",
      color: "Black",
      category: "Accessories",
      price: "$99"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="relative overflow-x-auto"> <table class="w-full text-sm text-left text-gray-700 dark:text-gray-400"> <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"> ${heading.map((item) => renderTemplate`<th scope="col" class="px-6 py-3"> ${item} </th>`)} </thead> <tbody> ${data.map((item) => renderTemplate`<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"> <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"> ${item.name} </th> <td class="px-6 py-4">${item.color}</td> <td class="px-6 py-4">${item.category}</td> <td class="px-6 py-4">${item.price}</td> </tr>`)} </tbody> </table> </div>`;
}, "/Users/tyusdurant/Documents/local_git/astro-flowbite/src/components/Table.astro", void 0);

export { $$Table as $ };
