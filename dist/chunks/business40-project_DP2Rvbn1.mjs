const id = "business40-project.md";
						const collection = "projects";
						const slug = "business40-project";
						const body = "\n## Business 40\n\nInformational site for a long term contruction project\n\n### Need\n\nBusiness 40 is a long-term construction project\n\n### Solution\n\nDesign a site to keep citizens and media informed on the project for the years the major highway was shut down.\n\nThe customer needed a mobile-friendly website for the general public nd could have all major information points readily accessible on the first page, including updates and updated traffic information in the area around the construction project.\n\n![Business40, hero section](./images/business40-main-web.webp)\n\nAll of the internal pages needed to be dynamic. SharePoint was a CMS, and custom templates were constructed to generate pages. New posts were also required to be generated dynamically using Markup for the body of the news posts.\n\n![Posts](./images/post-web.webp)\n\nThe maps were required to be bing maps, and custom vector shapes had to be created as an overlay for all affected streets in the construction project. All overlays also had to have custom information sets available to the customer upon interacting.\n\n![maps](./images/map-web.webp)\n\nEach street overlay could be click on and information about each section would be displayed.\n\n![map details](./images/map-details-web.webp)\n\nThis project used SharePoint as the CMS, making it very easy for the customer to update and maintain a lot of it independently. Custom SharePoint templates allow individuals to generate press releases in Markup that would then be translated into web pages. The main page and some internal interactions were made with the Javascript framework Vue.\n";
						const data = {title:"Business 40",deleloper:"Tyus Durant",image:"business40Mockup-web.webp",type:"normal",slug:"business40-project",tags:["development","website"],description:"Informational site for a long term contruction project"};
						const _internal = {
							type: 'content',
							filePath: "/Users/tyusdurant/Documents/local_git/astro-flowbite/src/content/projects/business40-project.md",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
