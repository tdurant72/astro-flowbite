import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, a as createAstro } from './astro/server_ncfLoZ91.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$Button = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Button;
  const {
    text,
    href,
    bgColor = "primary",
    textColor = "white",
    textSize = "sm"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(`text-${textColor} bg-${bgColor} focus:outline-none cursor-pointer focus:ring-4 focus:ring-secondary font-medium rounded-full text-${textSize} px-5 py-2.5 text-center`, "class")}>${text}</a>`;
}, "/Users/tyusdurant/Documents/local_git/astro-flowbite/src/components/Button.astro", void 0);

export { $$Button as $ };
