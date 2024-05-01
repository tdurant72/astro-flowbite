/* empty css                              */
import { c as createComponent, r as renderTemplate, d as renderComponent, a as createAstro, m as maybeRenderHead, e as renderTransition } from './astro/server_ncfLoZ91.mjs';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_DVqRauaD.mjs';
import { $ as $$ProjectLayout, a as $$Prose } from './Prose_yFOyLERF.mjs';
import { g as getCollection, a as getEntry, $ as $$CustomTags } from './CustomTags_CKTkwwo_.mjs';
/* empty css                          */
/* empty css                              */

const $$Astro = createAstro();
async function getStaticPaths() {
  const projects = await getCollection("projects");
  const paths = projects.map((project) => {
    return {
      params: {
        slug: project.slug
      },
      props: {
        project
      }
    };
  });
  return paths;
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { slug } = Astro2.params;
  if (slug === void 0) {
    throw new Error("slug is required");
  }
  const entry = await getEntry("projects", slug);
  if (entry === void 0) {
    return Astro2.redirect("/404");
  }
  const { project } = Astro2.props;
  const { Content } = await project.render();
  return renderTemplate`${renderComponent($$result, "ProjectLayout", $$ProjectLayout, { "title": entry.data.title, "data-astro-cid-5uq7evlv": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<a href="/#gallery" class="inline-block bg-gray-100 p-2 mb-6 hover:bg-indigo-500 hover:text-white" data-astro-cid-5uq7evlv>Back To Home</a> <article data-astro-cid-5uq7evlv> <div class="projectGrid" data-astro-cid-5uq7evlv> <h1 class="text-4xl font-bold mb-2" data-astro-cid-5uq7evlv>${entry.data.title}</h1> ${renderComponent($$result2, "CustomTags", $$CustomTags, { "tags": entry.data.tags, "data-astro-cid-5uq7evlv": true })} <div class="h-60 my-10 overflow-hidden" data-astro-cid-5uq7evlv> ${renderComponent($$result2, "Image", $$Image, { "src": "/images/" + entry.data.image, "alt": entry.data.title, "height": 300, "width": Math.round(100 * 16 / 9), "class": "w-1/2 h-auto object-cover mx-auto", "data-astro-cid-5uq7evlv": true, "data-astro-transition-scope": renderTransition($$result2, "nmz4schp", "", "/images/" + entry.data.image) })} </div> ${renderComponent($$result2, "Prose", $$Prose, { "data-astro-cid-5uq7evlv": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Content", Content, { "data-astro-cid-5uq7evlv": true })} ` })} </div> </article> ` })} `;
}, "/Users/tyusdurant/Documents/local_git/astro-flowbite/src/pages/projects/[...slug].astro", "self");

const $$file = "/Users/tyusdurant/Documents/local_git/astro-flowbite/src/pages/projects/[...slug].astro";
const $$url = "/projects/[...slug]";

export { $$ as default, $$file as file, getStaticPaths, $$url as url };
