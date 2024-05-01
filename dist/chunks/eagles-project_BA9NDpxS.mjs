import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML, s as spreadAttributes } from './astro/server_ncfLoZ91.mjs';
import { g as getImage } from './_astro_assets_DVqRauaD.mjs';
import 'clsx';

const Astro__2bQPvp = new Proxy({"src":"/_astro/eagles-values.6m5CYA-2.webp","width":1091,"height":614,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tyusdurant/Documents/local_git/astro-flowbite/src/content/projects/images/eagles-values.webp";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/tyusdurant/Documents/local_git/astro-flowbite/src/content/projects/images/eagles-values.webp");
							return target[name];
						}
					});

const Astro__1vTyio = new Proxy({"src":"/_astro/eagles-before.knklEHZ_.webp","width":750,"height":906,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tyusdurant/Documents/local_git/astro-flowbite/src/content/projects/images/eagles-before.webp";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/tyusdurant/Documents/local_git/astro-flowbite/src/content/projects/images/eagles-before.webp");
							return target[name];
						}
					});

const Astro__ZsoNDK = new Proxy({"src":"/_astro/eagles-complete-after.DGGfZyiC.webp","width":750,"height":3153,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tyusdurant/Documents/local_git/astro-flowbite/src/content/projects/images/eagles-complete-after.webp";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/tyusdurant/Documents/local_git/astro-flowbite/src/content/projects/images/eagles-complete-after.webp");
							return target[name];
						}
					});

const Astro__1pxUET = new Proxy({"src":"/_astro/eagles-tryouts.DyZ5fP7Z.webp","width":1200,"height":3487,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tyusdurant/Documents/local_git/astro-flowbite/src/content/projects/images/eagles-tryouts.webp";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/tyusdurant/Documents/local_git/astro-flowbite/src/content/projects/images/eagles-tryouts.webp");
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\./images/eagles-values\\.webp" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "./images/eagles-values.webp" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__2bQPvp, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\./images/eagles-before\\.webp" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "./images/eagles-before.webp" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__1vTyio, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\./images/eagles-complete-after\\.webp" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "./images/eagles-complete-after.webp" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__ZsoNDK, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\./images/eagles-tryouts\\.webp" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "./images/eagles-tryouts.webp" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__1pxUET, ...props});
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
			const html = await updateImageReferences("<h2 id=\"eagles-rfc\">Eagles RFC</h2>\n<p>A youth soccer club site redesign</p>\n<h3 id=\"need\">Need</h3>\n<p>The Eagles RFC website needed a temporary redesign and search engine overhaul before a marking push for tryouts. When searching for “youth soccer club Greensboro,” they were not displaying till the 9th page,</p>\n<h3 id=\"solution\">Solution</h3>\n<p>A redesign of various pages not only gives visitors a compelling reason to choose this club over others but also makes it very easy to sign up for tryouts, and increasing search engine visibility.</p>\n<p>The first major problem was the site’s low visibility on Google. Being buried on the 9th page meant potential customers would never see their site. To address this, we first overhauled the site’s metadata. We also conducted a competitive analysis to identify the strategies their competitors were using to rank higher. <strong>Within 30 days, were were able to move them from the 9th page to the 1st page on Google.</strong></p>\n<p>Next, we helped the club develop a set of core values that resonated with visitors. They needed to display why someone might choose them over other youth football clubs. From there, we developed clear explanations for these principles to be displayed on the site. We also developed a video talking about these core principles.\n<img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;./images/eagles-values.webp&#x22;,&#x22;alt&#x22;:&#x22;Eagles, values section&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>We also added a contact form to the first page and a separate Contact Us page to make a more vital call to action.</p>\n<p>Last, we went through the site to clear up language that visitors or those not as familiar with soccer could more easily understand. Again, the goal is to lower a customer’s potential barriers.</p>\n<p>Home Page Before:\n<img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;./images/eagles-before.webp&#x22;,&#x22;alt&#x22;:&#x22;Before&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>Home Page After:</p>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;./images/eagles-complete-after.webp&#x22;,&#x22;alt&#x22;:&#x22;After&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>Tryouts Page:</p>\n<p><img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;./images/eagles-tryouts.webp&#x22;,&#x22;alt&#x22;:&#x22;tryouts page&#x22;,&#x22;index&#x22;:0}\"></p>");
	

				const frontmatter = {"title":"Eagles RFC","deleloper":"Tyus Durant","image":"eagles-device.webp","type":"normal","slug":"eagles-project","tags":["development","design","website"],"description":"A youth soccer program in Greensboro"};
				const file = "/Users/tyusdurant/Documents/local_git/astro-flowbite/src/content/projects/eagles-project.md";
				const url = undefined;
				function rawContent() {
					return "\n## Eagles RFC\n\nA youth soccer club site redesign\n\n### Need\n\nThe Eagles RFC website needed a temporary redesign and search engine overhaul before a marking push for tryouts. When searching for “youth soccer club Greensboro,” they were not displaying till the 9th page,\n\n### Solution\n\nA redesign of various pages not only gives visitors a compelling reason to choose this club over others but also makes it very easy to sign up for tryouts, and increasing search engine visibility.\n\nThe first major problem was the site's low visibility on Google. Being buried on the 9th page meant potential customers would never see their site. To address this, we first overhauled the site's metadata. We also conducted a competitive analysis to identify the strategies their competitors were using to rank higher. **Within 30 days, were were able to move them from the 9th page to the 1st page on Google.**\n\nNext, we helped the club develop a set of core values that resonated with visitors. They needed to display why someone might choose them over other youth football clubs. From there, we developed clear explanations for these principles to be displayed on the site. We also developed a video talking about these core principles.\n![Eagles, values section](./images/eagles-values.webp)\n\nWe also added a contact form to the first page and a separate Contact Us page to make a more vital call to action.\n\nLast, we went through the site to clear up language that visitors or those not as familiar with soccer could more easily understand. Again, the goal is to lower a customer's potential barriers.\n\nHome Page Before:\n![Before](./images/eagles-before.webp)\n\nHome Page After:\n\n![After](./images/eagles-complete-after.webp)\n\nTryouts Page:\n\n![tryouts page](./images/eagles-tryouts.webp)\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"eagles-rfc","text":"Eagles RFC"},{"depth":3,"slug":"need","text":"Need"},{"depth":3,"slug":"solution","text":"Solution"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
