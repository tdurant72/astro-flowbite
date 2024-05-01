/* empty css                              */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as renderComponent, a as createAstro } from './astro/server_ncfLoZ91.mjs';
import 'kleur/colors';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './_astro_assets_DVqRauaD.mjs';
import { $ as $$Layout } from './Layout_VdJ3FdZJ.mjs';
import { $ as $$ButtonGroup } from './ButtonGroup_Bg-WbvfZ.mjs';
import 'clsx';

const $$Astro$2 = createAstro();
const $$CustomFullImageHero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$CustomFullImageHero;
  const {
    title = "Jumbotron Title",
    subtitle = "Jumbotron Body",
    showButtons = true,
    buttonLink1 = "https://google.com",
    buttonText1 = "Googies",
    buttonLink2 = "https://msn.com",
    buttonText2 = "MSN",
    imageSrc = "/images/desk_view.webp"
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="bg-white dark:bg-gray-900 w-full"> <div class="relative h-[400px] overflow-hidden py-0 px-0 mx-auto max-w-screen-xl text-center lg:py-0"> ${renderComponent($$result, "Image", $$Image, { "src": imageSrc, "alt": "hero", "height": 400, "width": Math.round(100 * 16 / 9), "class": "w-full h-auto object-cover lg:absolute" })} <div class="absolute right-0 inset-0 flex flex-col justify-center bg-white bg-opacity-50"> <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white"> ${title} </h1> <h4 class="mb-8 text-lg font-normal text-gray-700 lg:text-2xl sm:px-16 lg:px-48 dark:text-gray-400"> ${subtitle} </h4> ${showButtons ? renderTemplate`<div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4"> <!--Needs work --> ${renderComponent($$result, "ButtonGroup", $$ButtonGroup, { "text1": buttonText1, "href1": buttonLink1, "text2": buttonText2, "href2": buttonLink2 })} </div>` : null} </div> </div> </section>`;
}, "/Users/tyusdurant/Documents/local_git/astro-flowbite/src/components/custom/CustomFullImageHero.astro", void 0);

const $$Astro$1 = createAstro();
const $$CustomSectionHeader = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CustomSectionHeader;
  const { title, subtitle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div> <div class="text-center md:text-left justify-self-center items-center p-2"> <h2 class="text-xl font-light tracking-tight text-gray-600 dark:text-white sm:text-lg"> ${title} </h2> <h3 class="text-2xl mt-2 lg:text-3lg leading-8 text-gray-900 dark:text-white font-medium"> ${subtitle} </h3> </div> </div>`;
}, "/Users/tyusdurant/Documents/local_git/astro-flowbite/src/components/custom/CustomSectionHeader.astro", void 0);

const Graphics = new Proxy({"src":"/_astro/grahics.hMX-HlFw.webp","width":800,"height":449,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tyusdurant/Documents/local_git/astro-flowbite/src/assets/images/grahics.webp";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/tyusdurant/Documents/local_git/astro-flowbite/src/assets/images/grahics.webp");
							return target[name];
						}
					});

const Code = new Proxy({"src":"/_astro/code.CV7-a3rI.webp","width":1536,"height":2048,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tyusdurant/Documents/local_git/astro-flowbite/src/assets/images/code.webp";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/tyusdurant/Documents/local_git/astro-flowbite/src/assets/images/code.webp");
							return target[name];
						}
					});

const Tracking = new Proxy({"src":"/_astro/tracking.Bk6Lr19r.webp","width":1024,"height":698,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tyusdurant/Documents/local_git/astro-flowbite/src/assets/images/tracking.webp";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/tyusdurant/Documents/local_git/astro-flowbite/src/assets/images/tracking.webp");
							return target[name];
						}
					});

const $$Astro = createAstro();
const $$Services = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Services;
  const title = "Services";
  const subtitle = "We take care of all your website needs so you can focus on growing your business.";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contact" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div> <!--  --> ${renderComponent($$result2, "CustomFullImageHero", $$CustomFullImageHero, { "title": title, "subtitle": subtitle, "imageSrc": "/images/desk_view.webp", "showButtons": false })} </div> <main class="mx-16"> <div class="my-8 flex sm:flex-col md:flex-row content-start space-x-6" id="design"> <div class="w-1/2"> ${renderComponent($$result2, "CustomSectionHeader", $$CustomSectionHeader, { "title": "Design", "subtitle": "The importance of design for your business" })} <div class="h-40 overflow-hidden rounded-md shadow-sm"> ${renderComponent($$result2, "Image", $$Image, { "src": Graphics, "width": 800, "height": 499, "alt": "design", "class": "object-contain" })} </div> <p class="mt-8">
The importance of website design cannot be overstated. A well-designed
          website can help you achieve your business goals and take your brand
          to the next level. Here are some reasons why website design is
          essential
</p> </div> <div class="lg:max-w-2xl mt-8"> <h4 class="text-xl font-medium my-4">User Experience</h4> <p class="text-md">
A well-designed website can provide an excellent user experience. It
          is easy to navigate, visually appealing, and engaging. A user-friendly
          website can help you attract and retain customers, which is critical
          for any business.
</p> <h4 class="text-xl font-medium my-4">Branding</h4> <p>
Website design can help you establish a strong brand identity. The
          layout, graphics, and color schemes can be used to create a consistent
          look and feel that represents your brand. A strong brand identity can
          help you stand out from the competition and attract more customers.
</p> <p>
Website design plays a significant role in search engine optimization
          (SEO). A well-designed website can help you rank higher in search
          engine results pages (SERPs). This can help you attract organic
          traffic to your website, increasing sales and revenue.
</p> <p>
With most internet users browsing the web on mobile devices, website
          design must be optimized. A website that is not mobile-friendly can
          lead to a poor user experience and a high bounce rate. This can
          negatively impact your search engine rankings and ultimately hurt your
          business.
</p> <h4 class="text-xl font-medium my-4">
How Website Design can help you Achieve your Business Goals
</h4> <p>
A well-designed website can help you increase your visibility online.
          By optimizing your website for search engines, you can rank higher in
          search engine results pages (SERPs). This can help you attract organic
          traffic to your website, increasing sales and revenue.
</p> <p>
A well-designed website can help you establish a strong brand
          identity. The layout, graphics, and color schemes can be used to
          create a consistent look and feel that represents your brand. This can
          help you stand out from the competition and attract more customers. A
          strong brand identity can also help you build trust and credibility
          with your audience, which is essential for business success.
</p> </div> </div> <hr> <div class="my-8 flex sm:flex-col md:flex-row content-start space-x-6" id="seo"> <div class="w-1/2"> ${renderComponent($$result2, "CustomSectionHeader", $$CustomSectionHeader, { "title": "SEO", "subtitle": "What is Search Engine Optimization (SEO)" })} <div class="h-40 overflow-hidden rounded-md shadow-sm"> ${renderComponent($$result2, "Image", $$Image, { "src": Code, "width": 800, "height": 499, "alt": "design", "class": "object-contain" })} </div> <p class="mt-8">
Do you want to know why SEO is important? SEO is all about optimizing
          the backend of your website to improve user experience and search
          engine rankings. Even though it may not seem like it, SEO impacts your
          website's load speeds, page layout, and more.
</p> </div> <div class="lg:max-w-2xl mt-8"> <h4 class="text-xl font-medium my-4">
How a more efficient website helps you move up in your Google rankings
</h4> <p class="text-md">
If your website has fast load speeds and provides a better user
          experience, it will likely rank higher in search engine results. Users
          place a high value on convenience and speed, so optimizing your
          website's content and technical features is crucial.
</p> <p class="text-md">
Effective technical optimization improves user experience and reduces
          broken links and error pages, resulting in lower bounce rates. A lower
          bounce rate means users are likelier to stick around on your website,
          leading to more conversions and revenue.
</p> <h4 class="text-xl font-medium my-4">How we can help you</h4> <p>
At Sublime, we can provide you with a full SEO report to help improve
          your website's search rankings, load speeds, and user experience. In
          addition, our team of experts can devise and execute a strategy to
          maintain your website's optimal functionality.
</p> <p>
We analyze Google's core web vitals, which include the speed of
          first-page render, first input delay, and cumulative layout shift. We
          also consider factors like Javascript, CSS, redirections, image, and
          video file sizes, hosting provider, and mobile-friendliness to
          maintain fast load speeds.
</p> <h4 class="text-xl font-medium my-4">Mobile friendly</h4> <p>
Did you know that over 50% of web traffic comes from mobile devices?
          That's why we also ensure your website is optimized for mobile
          devices, which can significantly improve conversion rates. In
          addition, we use two-speed measurement tools to assess your website's
          performance on both mobile and desktop devices.
</p> <p>
If anything goes wrong, our team of SEO experts is always ready to
          repair your website and get it back on track. Trust us to optimize
          your website's technical features and enhance your user experience for
          better search engine rankings, more leads, and more revenue.
</p> </div> </div> <hr> <div class="my-8 flex sm:flex-col md:flex-row content-start space-x-6" id="growth"> <div class="w-1/2"> ${renderComponent($$result2, "CustomSectionHeader", $$CustomSectionHeader, { "title": "Growth", "subtitle": "Boost Your Business by Optimizing Conversions" })} <div class="h-40 overflow-hidden rounded-md shadow-sm"> ${renderComponent($$result2, "Image", $$Image, { "src": Tracking, "width": 800, "height": 499, "alt": "design", "class": "object-contain" })} </div> <p class="mt-8">
Are you struggling to turn website visitors into customers? You're not
          alone. Many businesses fail to convert visitors into leads, sales, or
          subscribers, and that's where Conversion Rate Optimization (CRO) comes
          in. By optimizing your website and marketing campaigns, you can
          increase your conversion rate and drive more revenue. In this article,
          we'll explore some key strategies for boosting conversions, including
          lead magnets, email marketing, and digital dashboards.
</p> </div> <div class="lg:max-w-2xl mt-8"> <h4 class="text-xl font-medium my-4">
What is Conversion Rate Optimization (CRO)?
</h4> <p class="text-md">
Conversion Rate Optimization (CRO) is the process of optimizing your
          website, marketing campaigns, and other digital channels to increase
          the number of visitors who convert into leads, sales, or subscribers.
          The goal is to make your website more effective in engaging and
          converting your audience. By using CRO strategies, you can maximize
          the value of your existing traffic and turn more visitors into
          customers.
</p> <p class="text-md">
CRO is the practice of using data, analytics, and user feedback to
          improve your website's and marketing campaigns' performance. It
          involves identifying areas of your website that are not converting as
          well as they could be and making changes to improve them. This can
          include changes to your website's design, content, navigation, and
          calls to action.
</p> <h4 class="text-xl font-medium my-4">Why is CRO important?</h4> <p>
CRO is important because it can help you get more value from your
          existing traffic. By optimizing your website and marketing campaigns,
          you can increase the number of leads, sales, or subscribers you
          generate without having to spend more money on advertising or SEO.
          This can lead to higher revenue and a better return on investment
          (ROI) for your marketing efforts.
</p> <h4 class="text-xl font-medium my-4">
How to Measure Conversion Rates
</h4> <p>
To optimize your website's conversion rate, you first need to measure
          it. This involves setting up tracking and analytics tools to monitor
          your website's performance. Some common metrics to track include:
</p> <ul class="list-disc pl-3 my-4"> <li class="">
Conversion rate: the percentage of visitors who take a desired
            action on your website (such as filling out a form or purchasing)
</li> <li>
Bounce rate: the percentage of visitors who leave your website after
            viewing only one page.
</li> <li>
Time on site: the average time visitors spend on your website.
</li> <li>
Click-through rate (CTR): the percentage of visitors who click on a
            link or button on your website.
</li> </ul> <p>
By tracking these metrics, you can identify which pages and campaigns
          are performing well and which ones need improvement.
</p> <h4 class="text-xl font-medium my-4">
Identifying Conversion Barriers
</h4> <p>
Once you have measured your website's performance, the next step is to
          identify any barriers preventing visitors from converting. Some common
          conversion barriers include:
</p> <ul class="list-disc pl-3 my-4"> <li>
Poor website design or navigation: if your website is challenging to
            navigate or doesn't look professional, visitors may leave before
            converting
</li> <li>
Lack of trust: Visitors may be hesitant to enter their personal
            information or make a purchase if your website doesn't look secure
            or trustworthy.
</li> <li>
Time on site: the average time visitors spend on your website.
</li> <li>
Confusing calls-to-action (CTAs): visitors may not know what action
            to take if your CTAs are not transparent or compelling.
</li> <li>
Slow loading times: if your website takes too long to load, visitors
            may become impatient and leave before
</li> </ul> <p>
We can employ many strategies to improve your web presence and
          increase traffic to your site. And while this may seem overwhelming,
          you don't have to do it alone. At Sublime, we have professionals whose
          only job is to increase traffic to your site. We've covered you, from
          writing blogs, articles, and case studies to designing infographics
          and producing live-action or animated videos.
</p> </div> </div> </main> ` })} `;
}, "/Users/tyusdurant/Documents/local_git/astro-flowbite/src/pages/services.astro", void 0);

const $$file = "/Users/tyusdurant/Documents/local_git/astro-flowbite/src/pages/services.astro";
const $$url = "/services";

export { $$Services as default, $$file as file, $$url as url };
