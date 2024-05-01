import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML, s as spreadAttributes } from './astro/server_ncfLoZ91.mjs';
import { g as getImage } from './_astro_assets_DVqRauaD.mjs';
import 'clsx';

const Astro__Z1BilrF = new Proxy({"src":"/_astro/business40-main-web.Ba4TYzIb.webp","width":1200,"height":655,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tyusdurant/Documents/local_git/astro-flowbite/src/content/projects/images/business40-main-web.webp";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/tyusdurant/Documents/local_git/astro-flowbite/src/content/projects/images/business40-main-web.webp");
							return target[name];
						}
					});

const Astro__Z9f9CM = new Proxy({"src":"/_astro/post-web.nQaq7WEy.webp","width":1200,"height":640,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tyusdurant/Documents/local_git/astro-flowbite/src/content/projects/images/post-web.webp";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/tyusdurant/Documents/local_git/astro-flowbite/src/content/projects/images/post-web.webp");
							return target[name];
						}
					});

const Astro__1BFr0X = new Proxy({"src":"/_astro/map-web.BWY6Gzip.webp","width":1817,"height":974,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tyusdurant/Documents/local_git/astro-flowbite/src/content/projects/images/map-web.webp";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/tyusdurant/Documents/local_git/astro-flowbite/src/content/projects/images/map-web.webp");
							return target[name];
						}
					});

const Astro__aIwMO = new Proxy({"src":"/_astro/map-details-web.YhChiZ5W.webp","width":700,"height":447,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tyusdurant/Documents/local_git/astro-flowbite/src/content/projects/images/map-details-web.webp";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/tyusdurant/Documents/local_git/astro-flowbite/src/content/projects/images/map-details-web.webp");
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\./images/business40-main-web\\.webp" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "./images/business40-main-web.webp" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__Z1BilrF, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\./images/post-web\\.webp" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "./images/post-web.webp" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__Z9f9CM, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\./images/map-web\\.webp" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "./images/map-web.webp" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__1BFr0X, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\./images/map-details-web\\.webp" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "./images/map-details-web.webp" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__aIwMO, ...props});
													occurrenceCounter++;
											}
									}
					return imageSources;
			};

			async function updateImageReferences(html) {
				return images(html).then((imageSources) => {
						return html.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm, (full, imagePath) => {
								const decodedImagePath = JSON.parse(imagePath.replace(/&#x22;/g, '"'));
		
								// Use the 'index' property for each image occurrence
								const srcKey = decodedImagePath.src + '_' + decodedImagePath.index;
		
								if (imageSources[srcKey].srcSet && imageSources[srcKey].srcSet.values.length > 0) {
										imageSources[srcKey].attributes.srcset = imageSources[srcKey].srcSet.attribute;
								}
		
								const { index, ...attributesWithoutIndex } = imageSources[srcKey].attributes;
		
								return spreadAttributes({
										src: imageSources[srcKey].src,
										...attributesWithoutIndex,
								});
						});
				});
		}
		

		// NOTE: This causes a top-level await to appear in the user's code, which can break very easily due to a Rollup
	  // bug and certain adapters not supporting it correctly. See: https://github.com/rollup/rollup/issues/4708
	  // Tread carefully!
			const html = await updateImageReferences("<h2 id=\"business-40\">Business 40</h2>\n<p>Informational site for a long term contruction project</p>\n<h3 id=\"need\">Need</h3>\n<p>Business 40 is a long-term construction project</p>\n<h3 id=\"solution\">Solution</h3>\n<p>Design a site to keep citizens and media informed on the project for the years the major highway was shut down.</p>\n<p>The customer needed a mobile-friendly website for the general public nd could have all major information points readily accessible on the first page, including updates and updated traffic information in the area around the construction project.</p>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;./images/business40-main-web.webp&#x22;,&#x22;alt&#x22;:&#x22;Business40, hero section&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>All of the internal pages needed to be dynamic. SharePoint was a CMS, and custom templates were constructed to generate pages. New posts were also required to be generated dynamically using Markup for the body of the news posts.</p>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;./images/post-web.webp&#x22;,&#x22;alt&#x22;:&#x22;Posts&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>The maps were required to be bing maps, and custom vector shapes had to be created as an overlay for all affected streets in the construction project. All overlays also had to have custom information sets available to the customer upon interacting.</p>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;./images/map-web.webp&#x22;,&#x22;alt&#x22;:&#x22;maps&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>Each street overlay could be click on and information about each section would be displayed.</p>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;./images/map-details-web.webp&#x22;,&#x22;alt&#x22;:&#x22;map details&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>This project used SharePoint as the CMS, making it very easy for the customer to update and maintain a lot of it independently. Custom SharePoint templates allow individuals to generate press releases in Markup that would then be translated into web pages. The main page and some internal interactions were made with the Javascript framework Vue.</p>");
	

				const frontmatter = {"title":"Business 40","deleloper":"Tyus Durant","image":"business40Mockup-web.webp","type":"normal","slug":"business40-project","tags":["development","website"],"description":"Informational site for a long term contruction project"};
				const file = "/Users/tyusdurant/Documents/local_git/astro-flowbite/src/content/projects/business40-project.md";
				const url = undefined;
				function rawContent() {
					return "\n## Business 40\n\nInformational site for a long term contruction project\n\n### Need\n\nBusiness 40 is a long-term construction project\n\n### Solution\n\nDesign a site to keep citizens and media informed on the project for the years the major highway was shut down.\n\nThe customer needed a mobile-friendly website for the general public nd could have all major information points readily accessible on the first page, including updates and updated traffic information in the area around the construction project.\n\n![Business40, hero section](./images/business40-main-web.webp)\n\nAll of the internal pages needed to be dynamic. SharePoint was a CMS, and custom templates were constructed to generate pages. New posts were also required to be generated dynamically using Markup for the body of the news posts.\n\n![Posts](./images/post-web.webp)\n\nThe maps were required to be bing maps, and custom vector shapes had to be created as an overlay for all affected streets in the construction project. All overlays also had to have custom information sets available to the customer upon interacting.\n\n![maps](./images/map-web.webp)\n\nEach street overlay could be click on and information about each section would be displayed.\n\n![map details](./images/map-details-web.webp)\n\nThis project used SharePoint as the CMS, making it very easy for the customer to update and maintain a lot of it independently. Custom SharePoint templates allow individuals to generate press releases in Markup that would then be translated into web pages. The main page and some internal interactions were made with the Javascript framework Vue.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"business-40","text":"Business 40"},{"depth":3,"slug":"need","text":"Need"},{"depth":3,"slug":"solution","text":"Solution"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
