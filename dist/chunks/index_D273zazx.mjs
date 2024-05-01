/* empty css                              */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent, a as createAstro, b as addAttribute, e as renderTransition } from './astro/server_ncfLoZ91.mjs';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_DVqRauaD.mjs';
import { $ as $$Layout } from './Layout_VdJ3FdZJ.mjs';
import { d as data } from './Footer_Ba0MAwF7.mjs';
import { $ as $$Button } from './Button_rCKldmGd.mjs';
import { s as siteImage } from './eagles-device_CVDpIZ3P.mjs';
/* empty css                         */
import { g as getCollection, $ as $$CustomTags } from './CustomTags_CKTkwwo_.mjs';
/* empty css                              */
import { $ as $$ButtonGroup } from './ButtonGroup_Bg-WbvfZ.mjs';
import 'clsx';

const $$Astro$9 = createAstro();
const $$CustomHero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$CustomHero;
  const title = "Let's turn your website to a customer magnet";
  const body = "Our simple 8-point plan will increase your page speed, help you rank higher in search engiens, and expand customer base, all in 90 days";
  const buttonText = "Book My Free Evaluation";
  const buttonLink = "https://www.google.com";
  return renderTemplate`${maybeRenderHead()}<section class="bg-stone-100 dark:bg-slate-800 lg:h-full section-parallax" data-astro-cid-3xdz7dfg> <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12" data-astro-cid-3xdz7dfg> <div class="mr-auto place-self-center lg:col-span-7 copy-parallax" data-astro-cid-3xdz7dfg> <h1 class="text-primary drop-shadow-[2px_2px_var(--tw-shadow-color)] shadow-gray-800 max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white" data-astro-cid-3xdz7dfg> ${title} </h1> <p class="max-w-2xl mb-6 font-light text-gray-700 lg:mb-8 text-lg md:text-xl lg:text-2xl dark:text-gray-400" data-astro-cid-3xdz7dfg> ${body} </p> <p class="max-w-2xl mb-6 font-light text-gray-700 lg:mb-8 text-lg md:text-xl lg:text-2xl dark:text-gray-400" data-astro-cid-3xdz7dfg>
We offer a <span class="text-primaryMed underline" data-astro-cid-3xdz7dfg>100% free</span>
evaluation of your existing site.
</p> <div class="flex flex-col items-start space-y-2" data-astro-cid-3xdz7dfg> ${renderComponent($$result, "Button", $$Button, { "text": buttonText, "href": buttonLink, "textSize": "lg", "bgColor": "primary", "textColor": "primaryBlk", "data-astro-cid-3xdz7dfg": true })} <span class="text-xs mx-4" data-astro-cid-3xdz7dfg>We will never share your information</span> </div> <span class="mr-4" data-astro-cid-3xdz7dfg></span> </div> <div id="hero-graphic" class="hidden lg:mt-0 lg:col-span-5 lg:flex lg:justify-center" data-astro-cid-3xdz7dfg> <!-- <img
        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
        alt="mockup"
      /> --> ${renderComponent($$result, "Image", $$Image, { "src": siteImage, "width": 211, "height": 425, "alt": "Site Image", "class": "rotate-2 dark:hidden ease-in-out duration-300 hover:rotate-0 hover:scale-105", "data-astro-cid-3xdz7dfg": true })} ${renderComponent($$result, "Image", $$Image, { "src": siteImage, "width": 211, "height": 425, "alt": "Site Image", "class": "image-parallax hidden dark:block ease-in-out duration-300 hover:rotate-1 hover:scale-105", "data-astro-cid-3xdz7dfg": true })} </div> </div> </section> `;
}, "/Users/tyusdurant/Documents/local_git/astro-flowbite/src/components/custom/customHero.astro", void 0);

const $$Astro$8 = createAstro();
const $$Services = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Services;
  const title = "Web Design, Web Development, SEO & Branding";
  const subtitle = "Your business needs more than a website. That\u2019s why Sublime UX is here to:";
  const features = [
    {
      name: "Build Your Brand",
      description: "Stand out from the competition and build credibility.",
      icon: "../src/assets/icons/monitor.webp",
      cta: "Our Approach To Branding",
      ctaLink: "../../assets/icons/services#design"
    },
    {
      name: "Increase Traffic",
      description: "Attract more organic traffic to your website, by optimizing your website for search engines,",
      icon: "../src/assets/icons/rocket.webp",
      cta: "How We Optimize Sites",
      ctaLink: "/services#seo"
    },
    {
      name: "Grow Your Business",
      description: "Encourage your visitors to take action, this can lead to more sales and revenue for your business.",
      icon: "../src/assets/icons/banner.webp",
      cta: "Why User Experience Matters",
      ctaLink: "/services#growth"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="bg-gradient-to-b from-primary to-primaryWhite dark:bg-slate-800"> <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6"> <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12"> <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"> ${title} </h2> <h3 class="mb-5 font-light text-2xl text-primaryBlk sm:text-xl dark:text-gray-400"> ${subtitle} </h3> </div> <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0"> ${features.map((feature) => renderTemplate`<div class="flex flex-col items-center p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white"> <img${addAttribute(feature.icon, "src")} width="100" height="100"${addAttribute(feature.name, "alt")} loading="lazy"> <h3 class="mb-2 text-2xl font-semibold">${feature.name}</h3> <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400 my-8"> ${feature.description} </p> ${renderComponent($$result, "Button", $$Button, { "text": feature.cta, "href": feature.ctaLink, "textColor": "primaryBlk" })} </div>`)} </div> </div> </section>`;
}, "/Users/tyusdurant/Documents/local_git/astro-flowbite/src/components/custom/Services.astro", void 0);

const Waves = new Proxy({"src":"/_astro/wavesOpacity3.keRn17ca.svg","width":1200,"height":50,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tyusdurant/Documents/local_git/astro-flowbite/src/assets/images/wavesOpacity3.svg";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/tyusdurant/Documents/local_git/astro-flowbite/src/assets/images/wavesOpacity3.svg");
							return target[name];
						}
					});

const $$Astro$7 = createAstro();
const $$CustomFeaturedProject = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$CustomFeaturedProject;
  Astro2.props;
  const allProjects = await getCollection("projects");
  const featuredProject = allProjects.filter(
    (project) => project.data.type === "featured"
  );
  return renderTemplate`${maybeRenderHead()}<div> ${featuredProject.map((f) => renderTemplate`<div class="mx-auto mt-10 py-10"> <div class="bg-white rounded-lg overflow-hidden shadow-lg"> <a${addAttribute("/projects/" + f.slug, "href")}> <h2 class="text-4xl my-8 text-center font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
Featured Project
</h2> ${renderComponent($$result, "Image", $$Image, { "src": "/images/" + f.data.image, "alt": "Article Image", "height": 400, "width": Math.round(100 * 16 / 9), "class": "w-full h-full object-cover hover:opacity-75 transition duration-300 ease-in-out my-10", "data-astro-transition-scope": renderTransition($$result, "e2iphlsp", "", "/images/" + f.data.image) })} </a> <div class="p-6"> <h2 class="text-2xl font-semibold mb-2"> <a${addAttribute("/projects/" + f.slug, "href")}> ${f.data.title}</a> </h2> ${renderComponent($$result, "CustomTags", $$CustomTags, { "tags": f.data.tags })} </div> </div> </div>`)} <!-- {JSON.stringify(featuredProject)} --> <!-- <CustomFeaturedProjectCard project={featuredProject} /> --> </div>`;
}, "/Users/tyusdurant/Documents/local_git/astro-flowbite/src/components/custom/CustomFeaturedProject.astro", "self");

const CardTop = new Proxy({"src":"/_astro/card-mask2.COHSnre9.svg","width":350,"height":300,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tyusdurant/Documents/local_git/astro-flowbite/src/assets/images/card-mask2.svg";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/tyusdurant/Documents/local_git/astro-flowbite/src/assets/images/card-mask2.svg");
							return target[name];
						}
					});

const $$Astro$6 = createAstro();
const $$ProjectCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$ProjectCard;
  const { project } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute("/projects/" + project.slug, "href")}> <div class="rounded-md shadow-md h-[300px] w-[350px] overflow-hidden"> <div class="h-[300px] w-[350px] relative bg-white"> ${renderComponent($$result, "Image", $$Image, { "id": "cardTop", "src": CardTop, "height": 300, "width": 350, "alt": "top", "class": "z-10 absolute" })} ${renderComponent($$result, "Image", $$Image, { "src": "/images/" + project.data.image, "height": 300, "width": 350, "alt": project.data.title, "class": "z-0 object-cover absolute top-4" })} <h3 class="text-primaryDrk absolute bottom-4 left-4 z-20"> ${project.data.title} </h3> </div> </div> </a>`;
}, "/Users/tyusdurant/Documents/local_git/astro-flowbite/src/components/custom/ProjectCard.astro", void 0);

const $$Astro$5 = createAstro();
const $$ProjectGallery = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ProjectGallery;
  const allProjects = await getCollection("projects");
  return renderTemplate`${maybeRenderHead()}<div id="gallery" class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"> ${allProjects.map((project) => renderTemplate`${renderComponent($$result, "ProjectCard", $$ProjectCard, { "project": project })}`)} </div>`;
}, "/Users/tyusdurant/Documents/local_git/astro-flowbite/src/components/custom/ProjectGallery.astro", void 0);

const UniqueImage = new Proxy({"src":"/_astro/Unique-BG.93CSrYHH.webp","width":1400,"height":891,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tyusdurant/Documents/local_git/astro-flowbite/src/assets/images/Unique-BG.webp";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/tyusdurant/Documents/local_git/astro-flowbite/src/assets/images/Unique-BG.webp");
							return target[name];
						}
					});

const Dancing = new Proxy({"src":"/_astro/dancing.xUQQbQvU.webp","width":62,"height":110,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tyusdurant/Documents/local_git/astro-flowbite/src/assets/images/dancing.webp";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/tyusdurant/Documents/local_git/astro-flowbite/src/assets/images/dancing.webp");
							return target[name];
						}
					});

const Image1 = new Proxy({"src":"/_astro/image1.BgD1i7xt.webp","width":120,"height":67,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tyusdurant/Documents/local_git/astro-flowbite/src/assets/images/image1.webp";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/tyusdurant/Documents/local_git/astro-flowbite/src/assets/images/image1.webp");
							return target[name];
						}
					});

const Image2 = new Proxy({"src":"/_astro/image2.AwiAeCkz.webp","width":120,"height":67,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tyusdurant/Documents/local_git/astro-flowbite/src/assets/images/image2.webp";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/tyusdurant/Documents/local_git/astro-flowbite/src/assets/images/image2.webp");
							return target[name];
						}
					});

const Image3 = new Proxy({"src":"/_astro/image3.LuJBTnkq.webp","width":120,"height":67,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tyusdurant/Documents/local_git/astro-flowbite/src/assets/images/image3.webp";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/tyusdurant/Documents/local_git/astro-flowbite/src/assets/images/image3.webp");
							return target[name];
						}
					});

const Image4 = new Proxy({"src":"/_astro/image4.BthkHnQo.webp","width":120,"height":67,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tyusdurant/Documents/local_git/astro-flowbite/src/assets/images/image4.webp";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/tyusdurant/Documents/local_git/astro-flowbite/src/assets/images/image4.webp");
							return target[name];
						}
					});

const Image5 = new Proxy({"src":"/_astro/image5.DmiYj27W.webp","width":120,"height":67,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tyusdurant/Documents/local_git/astro-flowbite/src/assets/images/image5.webp";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/tyusdurant/Documents/local_git/astro-flowbite/src/assets/images/image5.webp");
							return target[name];
						}
					});

const Image6 = new Proxy({"src":"/_astro/image6.DuLA-BPp.webp","width":120,"height":67,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tyusdurant/Documents/local_git/astro-flowbite/src/assets/images/image6.webp";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/tyusdurant/Documents/local_git/astro-flowbite/src/assets/images/image6.webp");
							return target[name];
						}
					});

const Image7 = new Proxy({"src":"/_astro/image7.DGsmcB6j.webp","width":120,"height":67,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tyusdurant/Documents/local_git/astro-flowbite/src/assets/images/image7.webp";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/tyusdurant/Documents/local_git/astro-flowbite/src/assets/images/image7.webp");
							return target[name];
						}
					});

const $$Astro$4 = createAstro();
const $$Unique = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Unique;
  const {
    title = "Jumbotron Title",
    subtitle = "Jumbotron Body",
    showButtons = true,
    buttonLink1 = "https://google.com",
    buttonText1 = "Googies",
    buttonLink2 = "https://msn.com",
    buttonText2 = "MSN",
    backgroundImageSrc = "/images/desk_view.webp"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="bg-white dark:bg-gray-900 w-full my-8"> <div class="relative h-[400px] overflow-hidden py-0 px-0 mx-auto max-w-screen-xl text-center lg:py-0"> ${renderComponent($$result, "Image", $$Image, { "src": UniqueImage, "alt": "", "height": 400, "width": Math.round(100 * 16 / 9), "class": "w-full h-auto object-contain lg:absolute" })} <div class="absolute flex h-[400px] left-0 bottom-0 right-0 top-0"> <div class="w-[50%] flex justify-center items-center"> <div class="h-[300px] w-[350px] bg-primary rounded-md relative"> <div class="absolute h-[85px] w-[63px] top-[119px] bottom-[127px] left-[127px] right-[135px] overflow-hidden rounded-md"> ${renderComponent($$result, "Image", $$Image, { "src": Dancing, "alt": "dancing", "width": 62, "height": 110, "class": "object-cover" })} </div> <div class="absolute h-[74px] w-[98px] top-[32px] bottom-[244px] left-[210px] right-[42px] overflow-hidden rounded-md"> ${renderComponent($$result, "Image", $$Image, { "src": Image1, "alt": "img1", "width": 120, "height": 67, "class": "object-cover" })} </div> <div class="absolute h-[80px] w-[106px] top-[131px] bottom-[139px] left-[234px] right-[10px] overflow-hidden rounded-md"> ${renderComponent($$result, "Image", $$Image, { "src": Image2, "alt": "img2", "width": 120, "height": 67, "class": "object-cover" })} </div> <div class="absolute h-[78px] w-[59px] top-[224px] bottom-[67px] left-[234px] right-[38px] overflow-hidden rounded-md"> ${renderComponent($$result, "Image", $$Image, { "src": Image3, "alt": "img3", "width": 120, "height": 67, "class": "object-cover" })} </div> <div class="absolute h-[60px] w-[80px] top-[224px] bottom-[46px] left-[127px] right-[143px] overflow-hidden rounded-md"> ${renderComponent($$result, "Image", $$Image, { "src": Image4, "alt": "img4", "width": 120, "height": 67, "class": "object-cover" })} </div> <div class="absolute h-[71px] w-[94px] top-[195px] bottom-[84px] left-[14px] right-[242px] overflow-hidden rounded-md"> ${renderComponent($$result, "Image", $$Image, { "src": Image5, "alt": "img5", "width": 120, "height": 67, "class": "object-cover" })} </div> <div class="absolute h-[54px] w-[72px] top-[121px] bottom-[175px] left-[33px] right-[245px] overflow-hidden rounded-md"> ${renderComponent($$result, "Image", $$Image, { "src": Image6, "alt": "img6", "width": 120, "height": 67, "class": "object-cover" })} </div> <div class="absolute h-[68px] w-[91px] top-[27px] bottom-[255px] left-[62px] right-[187px] overflow-hidden rounded-md"> ${renderComponent($$result, "Image", $$Image, { "src": Image7, "alt": "img7", "width": 120, "height": 67, "class": "object-cover" })} </div> </div> </div> <div class="flex flex-col justify-center"> <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white"> ${title} </h1> <h4 class="mb-8 text-lg font-normal text-gray-700 lg:text-2xl sm:px-16 lg:px-48 dark:text-gray-400"> ${subtitle} </h4> ${showButtons ? renderTemplate`<div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4"> <!--Needs work --> ${renderComponent($$result, "ButtonGroup", $$ButtonGroup, { "text1": buttonText1, "href1": buttonLink1, "text2": buttonText2, "href2": buttonLink2 })} </div>` : null} </div> </div> </div> </section>`;
}, "/Users/tyusdurant/Documents/local_git/astro-flowbite/src/components/custom/Unique.astro", void 0);

const $$Astro$3 = createAstro();
const $$Process = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Process;
  const heading = "Our Process";
  const items = ["1", "2", "3", "4", "5", "6", "7", "8"];
  const info = [
    "Discovery",
    "Strategy",
    "Prototyping",
    "Creative",
    "Techical",
    "Launch",
    "Drive Leads",
    "Analyze & Adapt"
  ];
  const details = [
    "Once you submit your project application, our team will arrange a call with you to delve into your unique requirements.",
    "Once the proposal is agreed upon and signed, we proceed with a follow-up call to ensure that all remaining gaps from our initial discovery call are filled in.",
    "A website prototype, also known as a wireframe, is a preliminary, monochromatic version of your website that we create before beginning the actual design and development process.",
    "If you have an existing brand guide, we will ensure that your website adheres to its guidelines. However, if you do not have a brand guide, we will work with you to establish your brand identity based on your budget and objectives.",
    "This is the stage where we bring the website prototype to life by building a functional website.",
    "After receiving your approval, we will set a launch date for your website.",
    "Now that you have a website that effectively communicates your brand story and converts visitors into customers, you need a plan to drive traffic to your website.",
    "Your website and digital marketing strategy should never remain static for long periods of time."
  ];
  return renderTemplate`${maybeRenderHead()}<div class="mt-16 max-w-2xl"> <div class="p-2 mb-8"> <h2 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl"> ${heading} </h2> <h4 class="mt-6 text-xl leading-8 text-gray-600 dark:text-white">
Our process is streamlined with our customers in mind. Design and
      development do not happen in a vacuum. We are with you every step of the
      way, keeping you informed, involved, and in the know.
</h4> </div> </div> <div class="mb-12 px-8 max-w-3xl"> <ol class="relative border-l border-gray-200 dark:border-gray-700"> ${items.map((item) => {
    return renderTemplate`<li class="mb-4 ml-4"> <div class="absolute w-3 h-3 bg-primaryDrk rounded-full mt-1.5 -left-1.5 border border-white "></div> <time class="mb-1 text-sm font-normal leading-none text-primaryDrk dark:text-white"> ${item} </time> <h3 class="text-lg font-semibold text-gray-900 dark:text-white"> ${info[items.indexOf(item)]} </h3> <p class="mb-4 text-base font-normal text-gray-700 dark:text-gray-400"> ${details[items.indexOf(item)]} </p> <hr> </li>`;
  })} </ol> </div>`;
}, "/Users/tyusdurant/Documents/local_git/astro-flowbite/src/components/custom/Process.astro", void 0);

const Lockheed = new Proxy({"src":"/_astro/lockheed._3qlW_vC.webp","width":225,"height":225,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tyusdurant/Documents/local_git/astro-flowbite/src/assets/icons/lockheed.webp";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/tyusdurant/Documents/local_git/astro-flowbite/src/assets/icons/lockheed.webp");
							return target[name];
						}
					});

const Ncdot = new Proxy({"src":"/_astro/ncdot.6OXQQOk6.webp","width":300,"height":300,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tyusdurant/Documents/local_git/astro-flowbite/src/assets/icons/ncdot.webp";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/tyusdurant/Documents/local_git/astro-flowbite/src/assets/icons/ncdot.webp");
							return target[name];
						}
					});

const Usps = new Proxy({"src":"/_astro/usps_oig.Bysh0w0J.webp","width":242,"height":300,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tyusdurant/Documents/local_git/astro-flowbite/src/assets/icons/usps_oig.webp";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/tyusdurant/Documents/local_git/astro-flowbite/src/assets/icons/usps_oig.webp");
							return target[name];
						}
					});

const Homeland = new Proxy({"src":"/_astro/homeland.CYdmv0iJ.webp","width":250,"height":250,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tyusdurant/Documents/local_git/astro-flowbite/src/assets/icons/homeland.webp";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/tyusdurant/Documents/local_git/astro-flowbite/src/assets/icons/homeland.webp");
							return target[name];
						}
					});

const Nctreasurer = new Proxy({"src":"/_astro/nc-treasurer.CD2mniJr.webp","width":200,"height":200,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tyusdurant/Documents/local_git/astro-flowbite/src/assets/icons/nc-treasurer.webp";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/tyusdurant/Documents/local_git/astro-flowbite/src/assets/icons/nc-treasurer.webp");
							return target[name];
						}
					});

const $$Astro$2 = createAstro();
const $$Customers = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Customers;
  const title = "Some of our customers";
  return renderTemplate`${maybeRenderHead()}<section class="bg-primary dark:bg-primaryBlk px-4 py-4"> <h2 class="mb-8 lg:mt-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-primaryWhite dark:text-white md:text-4xl"> ${title} </h2> <div class="w-full inline-flex flex-nowrap overflow-hidden"> <ul class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll text-gray-500 dark:text-gray-400"> <li> ${renderComponent($$result, "Image", $$Image, { "src": Lockheed, "width": 100, "height": 100, "alt": "Lockheed", "class": "object-contain" })} </li> <li> ${renderComponent($$result, "Image", $$Image, { "src": Ncdot, "width": 100, "height": 100, "alt": "NC DOT", "class": "object-contain" })} </li> <li> ${renderComponent($$result, "Image", $$Image, { "src": Usps, "width": 100, "height": 100, "alt": "USPS OIG", "class": "object-contain" })} </li> <li> ${renderComponent($$result, "Image", $$Image, { "src": Nctreasurer, "width": 100, "height": 100, "alt": "NC Treasurer", "class": "object-contain" })} </li> <li> ${renderComponent($$result, "Image", $$Image, { "src": Homeland, "width": 100, "height": 100, "alt": "Homeland Security", "class": "object-contain" })} </li> </ul> <ul class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll text-gray-500 dark:text-gray-400"> <li> ${renderComponent($$result, "Image", $$Image, { "src": Lockheed, "width": 100, "height": 100, "alt": "Lockheed", "class": "object-contain" })} </li> <li> ${renderComponent($$result, "Image", $$Image, { "src": Ncdot, "width": 100, "height": 100, "alt": "NC DOT", "class": "object-contain" })} </li> <li> ${renderComponent($$result, "Image", $$Image, { "src": Usps, "width": 100, "height": 100, "alt": "USPS OIG", "class": "object-contain" })} </li> <li> ${renderComponent($$result, "Image", $$Image, { "src": Nctreasurer, "width": 100, "height": 100, "alt": "NC Treasurer", "class": "object-contain" })} </li> <li> ${renderComponent($$result, "Image", $$Image, { "src": Homeland, "width": 100, "height": 100, "alt": "Homeland Security", "class": "object-contain" })} </li> </ul> </div> </section> <!-- animate-loopScroll lg:flex lg:gap-4 sm:grid sm:grid-cols-2 sm:items-center text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-5 dark:text-gray-400 -->`;
}, "/Users/tyusdurant/Documents/local_git/astro-flowbite/src/components/custom/Customers.astro", void 0);

const $$Astro$1 = createAstro();
const $$ContactUs = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ContactUs;
  const heading = "Free site evaluation";
  return renderTemplate`${maybeRenderHead()}<section class="bg-slate-100 dark:bg-primaryBlk px-4 py-4"> <div class="mt-16 max-w-2xl"> <div class="p-2 mb-8"> <h4 class="mt-6 text-xl leading-8 text-primaryDrk dark:text-white">
Contact Us
</h4> <h2 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl"> ${heading} </h2> </div> </div> <div class="flex gap-x-16"> <div class="w-1/2">Form goes here</div> <div class="w-1/2"> <h3 class="text-primaryDrk text-2xl mb-8">Get in touch</h3> <p>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ipsum
        quaerat sunt veniam atque. Nostrum, ipsum quae delectus et officia
        fugiat dolores explicabo reiciendis! Ipsa, sint fugiat sunt voluptas
        molestias similique sequi aut minus dolorem, harum a, perspiciatis quam
        explicabo mollitia pariatur expedita. Molestiae culpa voluptatibus
        cupiditate omnis quos commodi!
</p> </div> </div> </section>`;
}, "/Users/tyusdurant/Documents/local_git/astro-flowbite/src/components/custom/ContactUs.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": data.siteName }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <!-- <Header /> --> ${renderComponent($$result2, "CustomHero", $$CustomHero, {})} ${renderComponent($$result2, "Image", $$Image, { "src": Waves, "height": 300, "width": Math.round(100 * 16 / 9), "format": "svg", "alt": "waves", "class": "w-full" })} ${renderComponent($$result2, "Services", $$Services, {})} ${renderComponent($$result2, "CustomFeaturedProject", $$CustomFeaturedProject, {})} ${renderComponent($$result2, "ProjectGallery", $$ProjectGallery, {})} ${renderComponent($$result2, "Unique", $$Unique, { "title": "Don't compromise", "subtitle": "Your site should be as unique as you are" })} ${renderComponent($$result2, "Process", $$Process, {})} ${renderComponent($$result2, "Customers", $$Customers, {})} ${renderComponent($$result2, "ContactUs", $$ContactUs, {})} </main> ` })}`;
}, "/Users/tyusdurant/Documents/local_git/astro-flowbite/src/pages/index.astro", void 0);

const $$file = "/Users/tyusdurant/Documents/local_git/astro-flowbite/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
