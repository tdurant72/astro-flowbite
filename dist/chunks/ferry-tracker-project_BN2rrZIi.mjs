import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML, s as spreadAttributes } from './astro/server_ncfLoZ91.mjs';
import { g as getImage } from './_astro_assets_DVqRauaD.mjs';
import 'clsx';

const Astro__167Jgw = new Proxy({"src":"/_astro/ferry-tracker.DXTBYbAy.webp","width":360,"height":779,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tyusdurant/Documents/local_git/astro-flowbite/src/content/projects/images/ferry-tracker.webp";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/tyusdurant/Documents/local_git/astro-flowbite/src/content/projects/images/ferry-tracker.webp");
							return target[name];
						}
					});

const Astro__21VdUY = new Proxy({"src":"/_astro/ferry-tracker-selected.CDnctGaU.webp","width":800,"height":426,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tyusdurant/Documents/local_git/astro-flowbite/src/content/projects/images/ferry-tracker-selected.webp";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/tyusdurant/Documents/local_git/astro-flowbite/src/content/projects/images/ferry-tracker-selected.webp");
							return target[name];
						}
					});

const Astro__Z1perDm = new Proxy({"src":"/_astro/ferry-tracker-terminal.BalObIXG.webp","width":800,"height":423,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tyusdurant/Documents/local_git/astro-flowbite/src/content/projects/images/ferry-tracker-terminal.webp";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/tyusdurant/Documents/local_git/astro-flowbite/src/content/projects/images/ferry-tracker-terminal.webp");
							return target[name];
						}
					});

const Astro__ZW6mKo = new Proxy({"src":"/_astro/ferry-tracker-weather.CbyCSc-z.webp","width":800,"height":427,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tyusdurant/Documents/local_git/astro-flowbite/src/content/projects/images/ferry-tracker-weather.webp";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/tyusdurant/Documents/local_git/astro-flowbite/src/content/projects/images/ferry-tracker-weather.webp");
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\./images/ferry-tracker\\.webp" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "./images/ferry-tracker.webp" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__167Jgw, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\./images/ferry-tracker-selected\\.webp" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "./images/ferry-tracker-selected.webp" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__21VdUY, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\./images/ferry-tracker-terminal\\.webp" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "./images/ferry-tracker-terminal.webp" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__Z1perDm, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\./images/ferry-tracker-weather\\.webp" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "./images/ferry-tracker-weather.webp" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__ZW6mKo, ...props});
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
			const html = await updateImageReferences("<h2 id=\"bidding--letting\">Bidding &#x26; Letting</h2>\n<p>A mobile first site for tracking ferry locations and details</p>\n<h3 id=\"need\">Need</h3>\n<p>There was no way to track ferry movements including destinations and etas.</p>\n<h3 id=\"solution\">Solution</h3>\n<p>Developed a mobile first site specifically to track ferries.</p>\n<p>This site could also be used to get ferry terminal information, local weather conditions at the terminals, and the latest news for each terminal from twitter.</p>\n<p>Unfortunately this site never made it to the public sphere because the goverment agency could not secure the funding they need to for the equiptment/hardware necessary to track the individual ferries</p>\n<p>Mobile site\n<img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;./images/ferry-tracker.webp&#x22;,&#x22;alt&#x22;:&#x22;mobile site&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>ferry selected\n<img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;./images/ferry-tracker-selected.webp&#x22;,&#x22;alt&#x22;:&#x22;ferry selected&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>terminal selected\n<img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;./images/ferry-tracker-terminal.webp&#x22;,&#x22;alt&#x22;:&#x22;terminal selected&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>terminal weather\n<img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;./images/ferry-tracker-weather.webp&#x22;,&#x22;alt&#x22;:&#x22;terminal weather&#x22;,&#x22;index&#x22;:0}\"></p>");
	

				const frontmatter = {"title":"Ferry Tracker","deleloper":"Tyus Durant","image":"ferryTrackerMockup-web.webp","type":"normal","slug":"ferry-tracker-project","tags":["development","mobile","website"],"description":"A mobile first site for tracking ferry locations and details"};
				const file = "/Users/tyusdurant/Documents/local_git/astro-flowbite/src/content/projects/ferry-tracker-project.md";
				const url = undefined;
				function rawContent() {
					return "\n## Bidding & Letting\n\nA mobile first site for tracking ferry locations and details\n\n### Need\n\nThere was no way to track ferry movements including destinations and etas.\n\n### Solution\n\nDeveloped a mobile first site specifically to track ferries.\n\nThis site could also be used to get ferry terminal information, local weather conditions at the terminals, and the latest news for each terminal from twitter.\n\nUnfortunately this site never made it to the public sphere because the goverment agency could not secure the funding they need to for the equiptment/hardware necessary to track the individual ferries\n\nMobile site\n![mobile site](./images/ferry-tracker.webp)\n\nferry selected\n![ferry selected](./images/ferry-tracker-selected.webp)\n\nterminal selected\n![terminal selected](./images/ferry-tracker-terminal.webp)\n\nterminal weather\n![terminal weather](./images/ferry-tracker-weather.webp)\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"bidding--letting","text":"Bidding & Letting"},{"depth":3,"slug":"need","text":"Need"},{"depth":3,"slug":"solution","text":"Solution"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
