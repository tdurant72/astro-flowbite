import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML, s as spreadAttributes } from './astro/server_ncfLoZ91.mjs';
import { g as getImage } from './_astro_assets_DVqRauaD.mjs';
import 'clsx';

const Astro__om1V9 = new Proxy({"src":"/_astro/reservations.BkddLJls.webp","width":2992,"height":1724,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tyusdurant/Documents/local_git/astro-flowbite/src/content/projects/images/reservations.webp";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/tyusdurant/Documents/local_git/astro-flowbite/src/content/projects/images/reservations.webp");
							return target[name];
						}
					});

const Astro__Z19RwAh = new Proxy({"src":"/_astro/reservations-build.UUi7NDWg.webp","width":2986,"height":1734,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tyusdurant/Documents/local_git/astro-flowbite/src/content/projects/images/reservations-build.webp";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/tyusdurant/Documents/local_git/astro-flowbite/src/content/projects/images/reservations-build.webp");
							return target[name];
						}
					});

const Astro__Z1bUS7r = new Proxy({"src":"/_astro/reservations-checkout.Jfq6WhXe.webp","width":800,"height":466,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tyusdurant/Documents/local_git/astro-flowbite/src/content/projects/images/reservations-checkout.webp";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/tyusdurant/Documents/local_git/astro-flowbite/src/content/projects/images/reservations-checkout.webp");
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\./images/reservations\\.webp" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "./images/reservations.webp" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__om1V9, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\./images/reservations-build\\.webp" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "./images/reservations-build.webp" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__Z19RwAh, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\./images/reservations-checkout\\.webp" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "./images/reservations-checkout.webp" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__Z1bUS7r, ...props});
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
			const html = await updateImageReferences("<h2 id=\"reservations\">Reservations</h2>\n<p>A redesign and deveopment of a desktop installed application for making and editing reservations.</p>\n<h3 id=\"need\">Need</h3>\n<p>This original application was over 10 years old and a C++ application that was a desktop install. The application needed to updated to be web based</p>\n<h3 id=\"solution\">Solution</h3>\n<p>This application was rebuilt entirely using Azure for the backend and Vue for the front end. It is based on a 20+ page Word Document and over 100 Figma screens. This application was highly complex due to the number of rules and regulations. Users needed a more straightforward way to create and edit reservations. The paths must be as straightforward as possible to minimize potential user errors.</p>\n<p>Initial query\n<img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;./images/reservations.webp&#x22;,&#x22;alt&#x22;:&#x22;Initial query&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>Trip builder\n<img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;./images/reservations-build.webp&#x22;,&#x22;alt&#x22;:&#x22;Trip builder&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>Checkout\n<img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;./images/reservations-checkout.webp&#x22;,&#x22;alt&#x22;:&#x22;checkout&#x22;,&#x22;index&#x22;:0}\"></p>");
	

				const frontmatter = {"title":"Reservations","deleloper":"Tyus Durant","image":"reservationMockup.webp","type":"normal","slug":"reservations-project","tags":["development","design","website"],"description":"A redesign and deveopment of a desktop installed application for making and editing reservations."};
				const file = "/Users/tyusdurant/Documents/local_git/astro-flowbite/src/content/projects/reservations-project.md";
				const url = undefined;
				function rawContent() {
					return "\n## Reservations\n\nA redesign and deveopment of a desktop installed application for making and editing reservations.\n\n### Need\n\nThis original application was over 10 years old and a C++ application that was a desktop install. The application needed to updated to be web based\n\n### Solution\n\nThis application was rebuilt entirely using Azure for the backend and Vue for the front end. It is based on a 20+ page Word Document and over 100 Figma screens. This application was highly complex due to the number of rules and regulations. Users needed a more straightforward way to create and edit reservations. The paths must be as straightforward as possible to minimize potential user errors.\n\nInitial query\n![Initial query](./images/reservations.webp)\n\nTrip builder\n![Trip builder](./images/reservations-build.webp)\n\nCheckout\n![checkout](./images/reservations-checkout.webp)\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"reservations","text":"Reservations"},{"depth":3,"slug":"need","text":"Need"},{"depth":3,"slug":"solution","text":"Solution"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
