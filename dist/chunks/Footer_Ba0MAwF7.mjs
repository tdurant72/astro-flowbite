import { c as createComponent, r as renderTemplate, b as addAttribute, a as createAstro, m as maybeRenderHead, k as createTransitionScope, d as renderComponent } from './astro/server_ncfLoZ91.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                              */

const $$Astro$5 = createAstro();
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/Users/tyusdurant/Documents/local_git/astro-flowbite/node_modules/astro/components/ViewTransitions.astro", void 0);

const owner = "Sublime UX";
const siteName = "Sublime UX";
const siteDescription = "John Smith's Portfolio for potential employers";
const about = "Sublime UX is dedicated to build fast, modern websites that deliver great user experience";
const contact = {
	email: "todurant@sublimeux.com",
	phone: "555-555-5555",
	address: "Greensboro, NC 27405"
};
const pages = [
	{
		title: "Home",
		href: "/"
	},
	{
		title: "Projects",
		href: "/projects"
	},
	{
		title: "Services",
		href: "/services"
	},
	{
		title: "Blog",
		href: "/blog"
	},
	{
		title: "Contact",
		href: "/contact"
	}
];
const social = [
	{
		title: "GitHub",
		href: "https://github.com/leabs"
	},
	{
		title: "YouTube",
		href: "https://www.youtube.com/@shadowstack"
	},
	{
		title: "LinkedIn",
		href: "https://www.linkedin.com/in/stevenleabo/"
	},
	{
		title: "CodePen",
		href: "https://codepen.io/shadowstack/pens/popular"
	}
];
const projects = [
	{
		projectTitle: "Project 1",
		href: "project/one",
		about: "Database of books and reviews from users complete with auth and comments and so much more!!!",
		type: "Python, Django, HTML, CSS",
		repo: "https://github.com",
		image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg"
	},
	{
		projectTitle: "Project 2",
		href: "project/two",
		about: "Video dashboard using JavaScript that allows user to build and share a layout of videos from YouTube.",
		repo: "https://github.com",
		type: "JavaScript, HTML, CSS",
		image: "../assets/screen2.png",
		featured: true
	},
	{
		projectTitle: "Project 3",
		href: "project/three",
		about: "Some info about this project here, please add something here for this project ok here.",
		type: "PHP, MySQL, HTML, CSS",
		repo: "https://github.com",
		image: "../assets/screen2.png"
	},
	{
		projectTitle: "Project 4",
		href: "project/four",
		about: "Some info about project 4 I'm not sure haha ok see ya",
		type: "WordPress",
		repo: "https://github.com"
	}
];
const data = {
	owner: owner,
	siteName: siteName,
	siteDescription: siteDescription,
	about: about,
	contact: contact,
	pages: pages,
	social: social,
	projects: projects
};

const $$Astro$4 = createAstro();
const $$DarkModeToggle = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$DarkModeToggle;
  return renderTemplate`${maybeRenderHead()}<button id="btn" aria-label="Dark mode toggle" class="rounded-md dark:bg-slate-800 bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 dark:hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"${addAttribute(createTransitionScope($$result, "7tklcpry"), "data-astro-transition-persist")}><svg viewBox="0 0 15 15" width="1.2em" height="1.2em" class="w-5 h-5 text-foreground"><path fill="currentColor" fill-rule="evenodd" d="M7.5 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 .5-.5ZM2.197 2.197a.5.5 0 0 1 .707 0L4.318 3.61a.5.5 0 0 1-.707.707L2.197 2.904a.5.5 0 0 1 0-.707ZM.5 7a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Zm1.697 5.803a.5.5 0 0 1 0-.707l1.414-1.414a.5.5 0 1 1 .707.707l-1.414 1.414a.5.5 0 0 1-.707 0ZM12.5 7a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2Zm-1.818-2.682a.5.5 0 0 1 0-.707l1.414-1.414a.5.5 0 1 1 .707.707L11.39 4.318a.5.5 0 0 1-.707 0ZM8 12.5a.5.5 0 0 0-1 0v2a.5.5 0 0 0 1 0v-2Zm2.682-1.818a.5.5 0 0 1 .707 0l1.414 1.414a.5.5 0 1 1-.707.707l-1.414-1.414a.5.5 0 0 1 0-.707ZM5.5 7.5a2 2 0 1 1 4 0a2 2 0 0 1-4 0Zm2-3a3 3 0 1 0 0 6a3 3 0 0 0 0-6Z" clip-rule="evenodd"></path></svg></button> `;
}, "/Users/tyusdurant/Documents/local_git/astro-flowbite/src/components/DarkModeToggle.astro", "self");

const $$Astro$3 = createAstro();
const $$Nav = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Nav;
  return renderTemplate`${maybeRenderHead()}<nav class="bg-stone-100 border-gray-200 dark:bg-slate-800" data-astro-cid-dmqpwcec${addAttribute(createTransitionScope($$result, "zscz5gm2"), "data-astro-transition-persist")}> <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4" data-astro-cid-dmqpwcec> <a href="/" data-astro-cid-dmqpwcec> <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white" data-astro-cid-dmqpwcec>${data.siteName}</span> </a> <button data-collapse-toggle="navbar-default" id="triggerEl" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-700 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false" data-astro-cid-dmqpwcec> <span class="sr-only" data-astro-cid-dmqpwcec>Open main menu</span> <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14" data-astro-cid-dmqpwcec> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" data-astro-cid-dmqpwcec></path> </svg> </button> <div class="hidden w-full md:block md:w-auto" id="targetEl" data-astro-cid-dmqpwcec> <ul class="font-medium items-center flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-stone-100 dark:bg-slate-800 md:dark:bg-slate-800 dark:border-gray-700" data-astro-cid-dmqpwcec> ${data.pages.map((page) => {
    return renderTemplate`<li data-astro-cid-dmqpwcec> <a${addAttribute(page.href, "href")} class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" aria-current="page" data-astro-cid-dmqpwcec> ${page.title} </a> </li>`;
  })} <li data-astro-cid-dmqpwcec> ${renderComponent($$result, "DarkModeToggle", $$DarkModeToggle, { "data-astro-cid-dmqpwcec": true })} </li> </ul> </div> </div> </nav>  `;
}, "/Users/tyusdurant/Documents/local_git/astro-flowbite/src/components/Nav.astro", "self");

const $$Astro$2 = createAstro();
const $$Heading = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Heading;
  const { heading } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="my-4 lg:mb-8"> <h2 class="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white"> ${heading} </h2> </div>`;
}, "/Users/tyusdurant/Documents/local_git/astro-flowbite/src/components/Heading.astro", void 0);

const $$Astro$1 = createAstro();
const $$Social = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Social;
  const heading = "Find me online!";
  return renderTemplate`${maybeRenderHead()}<div class="w-full text-center py-12 bg-white dark:bg-slate-700 rounded-t-lg"> ${renderComponent($$result, "Heading", $$Heading, { "heading": heading })} <ul class="flex flex-wrap items-center justify-center text-gray-900 dark:text-white"> ${data.social.map((item) => {
    return renderTemplate`<li> <a${addAttribute(item.href, "href")} target="_blank" rel="noopener noreferrer" class="mr-4 hover:underline md:mr-6 "> ${item.title} </a> </li>`;
  })} </ul> </div>`;
}, "/Users/tyusdurant/Documents/local_git/astro-flowbite/src/components/Social.astro", void 0);

const $$Astro = createAstro();
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<div class="left-0 z-20 w-full shadow-lg"> ${renderComponent($$result, "Social", $$Social, {})} <footer class="bg-white rounded-b-lg my-4 mt-0 dark:bg-gray-900 w-full mx-auto max-w-screen-xl"> <div class="p-4 md:flex md:items-center md:justify-between text-center sm:text-left"> <span class="text-sm text-gray-700 sm:text-center dark:text-gray-400"><span class="mr-2">&copy; ${(/* @__PURE__ */ new Date()).getFullYear()}</span> <a href="/" class="hover:underline">${data.siteName}</a>.
</span> <div class="text-center sm:text-left"> <ul class="justify-center flex flex-wrap mt-3 text-sm font-medium text-gray-700 dark:text-gray-400 sm:mt-0"> ${data.pages.map((page) => {
    return renderTemplate`<li> <a${addAttribute(page.href, "href")} class="mr-0 sm:mr-4 p-4 sm:p-0 hover:underline"> ${page.title} </a> </li>`;
  })} </ul> </div> </div> </footer> </div>`;
}, "/Users/tyusdurant/Documents/local_git/astro-flowbite/src/components/Footer.astro", void 0);

export { $$Heading as $, $$Footer as a, $$Nav as b, $$ViewTransitions as c, data as d };
