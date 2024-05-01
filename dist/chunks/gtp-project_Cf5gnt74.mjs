import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML, s as spreadAttributes } from './astro/server_ncfLoZ91.mjs';
import { g as getImage } from './_astro_assets_DVqRauaD.mjs';
import 'clsx';

const Astro__1rsMJA = new Proxy({"src":"/_astro/gtp-main.DhKYgtvM.webp","width":1200,"height":636,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tyusdurant/Documents/local_git/astro-flowbite/src/content/projects/images/gtp-main.webp";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/tyusdurant/Documents/local_git/astro-flowbite/src/content/projects/images/gtp-main.webp");
							return target[name];
						}
					});

const Astro__Z2gEJqu = new Proxy({"src":"/_astro/gtp-10-reasons.DKdNqSKk.webp","width":1000,"height":534,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tyusdurant/Documents/local_git/astro-flowbite/src/content/projects/images/gtp-10-reasons.webp";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/tyusdurant/Documents/local_git/astro-flowbite/src/content/projects/images/gtp-10-reasons.webp");
							return target[name];
						}
					});

const Astro__ZLfC7v = new Proxy({"src":"/_astro/parcels.B7qbEf83.webp","width":800,"height":519,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tyusdurant/Documents/local_git/astro-flowbite/src/content/projects/images/parcels.webp";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/tyusdurant/Documents/local_git/astro-flowbite/src/content/projects/images/parcels.webp");
							return target[name];
						}
					});

const Astro__Z2h73NT = new Proxy({"src":"/_astro/gtp-directors.DbMHLNdb.webp","width":1000,"height":527,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tyusdurant/Documents/local_git/astro-flowbite/src/content/projects/images/gtp-directors.webp";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/tyusdurant/Documents/local_git/astro-flowbite/src/content/projects/images/gtp-directors.webp");
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\./images/gtp-main\\.webp" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "./images/gtp-main.webp" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__1rsMJA, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\./images/gtp-10-reasons\\.webp" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "./images/gtp-10-reasons.webp" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__Z2gEJqu, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\./images/parcels\\.webp" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "./images/parcels.webp" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__ZLfC7v, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\./images/gtp-directors\\.webp" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "./images/gtp-directors.webp" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__Z2h73NT, ...props});
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
			const html = await updateImageReferences("<h2 id=\"global-transpark\">Global TransPark</h2>\n<p>The North Carolina Global TransPark is a 2,500-acre, multi-modal industrial/airport site in Eastern North Carolina.</p>\n<h3 id=\"need\">Need</h3>\n<p>Global TransPark needed a way to attract potential new clients. While providing transparency to taxpayers.</p>\n<h3 id=\"solution\">Solution</h3>\n<p>A new site was designed and build that emphasized the benefits of doing business the Global TransPark was easy to update for the client using a familiar CMS.</p>\n<p>The customer wanted a hero that had dual videos continuously playing that showed the business and the personal benefits of moving one’s business to Eastern North Carolina. A controller was added to reveal more of the video as necessary</p>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;./images/gtp-main.webp&#x22;,&#x22;alt&#x22;:&#x22;GTP, hero section&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>Some of the pages were dedicated to living in North Carolina both for the business friendly nature of the state and the benefits to the employees moving there.</p>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;./images/gtp-10-reasons.webp&#x22;,&#x22;alt&#x22;:&#x22;NC, reasons&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>Since the park was primarily used as a large commercial real estate site, it was necessary to give potential companies as much information as possible about the lots and the amenities provided for each.</p>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;./images/parcels.webp&#x22;,&#x22;alt&#x22;:&#x22;parcels&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>And because this was a public-private partnership project, the taxpayers needed full transparency on the dealings of the Global TransPark.</p>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;./images/gtp-directors.webp&#x22;,&#x22;alt&#x22;:&#x22;directors&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>This project used SharePoint as the CMS, making it very easy for the customer to update and maintain a lot of it independently. Custom SharePoint templates allow individuals to generate press releases in Markup that would then be translated into web pages. The main page and some internal interactions were made with the Javascript framework Vue.</p>");
	

				const frontmatter = {"title":"Global TransPark","deleloper":"Tyus Durant","image":"ncgtpMockup-web.webp","type":"featured","slug":"ncGTP-project","tags":["development","website"],"description":"The North Carolina Global TransPark is a joint government and private investment website for the NCGTP industrial park."};
				const file = "/Users/tyusdurant/Documents/local_git/astro-flowbite/src/content/projects/gtp-project.md";
				const url = undefined;
				function rawContent() {
					return "\n## Global TransPark\n\nThe North Carolina Global TransPark is a 2,500-acre, multi-modal industrial/airport site in Eastern North Carolina.\n\n### Need\n\nGlobal TransPark needed a way to attract potential new clients. While providing transparency to taxpayers.\n\n### Solution\n\nA new site was designed and build that emphasized the benefits of doing business the Global TransPark was easy to update for the client using a familiar CMS.\n\nThe customer wanted a hero that had dual videos continuously playing that showed the business and the personal benefits of moving one's business to Eastern North Carolina. A controller was added to reveal more of the video as necessary\n\n![GTP, hero section](./images/gtp-main.webp)\n\nSome of the pages were dedicated to living in North Carolina both for the business friendly nature of the state and the benefits to the employees moving there.\n\n![NC, reasons](./images/gtp-10-reasons.webp)\n\nSince the park was primarily used as a large commercial real estate site, it was necessary to give potential companies as much information as possible about the lots and the amenities provided for each.\n\n![parcels](./images/parcels.webp)\n\nAnd because this was a public-private partnership project, the taxpayers needed full transparency on the dealings of the Global TransPark.\n\n![directors](./images/gtp-directors.webp)\n\nThis project used SharePoint as the CMS, making it very easy for the customer to update and maintain a lot of it independently. Custom SharePoint templates allow individuals to generate press releases in Markup that would then be translated into web pages. The main page and some internal interactions were made with the Javascript framework Vue.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"global-transpark","text":"Global TransPark"},{"depth":3,"slug":"need","text":"Need"},{"depth":3,"slug":"solution","text":"Solution"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
