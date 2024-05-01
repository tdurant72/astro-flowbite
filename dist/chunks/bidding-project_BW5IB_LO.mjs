import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML, s as spreadAttributes } from './astro/server_ncfLoZ91.mjs';
import { g as getImage } from './_astro_assets_DVqRauaD.mjs';
import 'clsx';

const Astro__1OLABQ = new Proxy({"src":"/_astro/bidding-page.txrREcP1.webp","width":800,"height":376,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tyusdurant/Documents/local_git/astro-flowbite/src/content/projects/images/bidding-page.webp";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/tyusdurant/Documents/local_git/astro-flowbite/src/content/projects/images/bidding-page.webp");
							return target[name];
						}
					});

const Astro__Z1vpVlC = new Proxy({"src":"/_astro/bidding-register.BJq0GFWS.webp","width":800,"height":429,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tyusdurant/Documents/local_git/astro-flowbite/src/content/projects/images/bidding-register.webp";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/tyusdurant/Documents/local_git/astro-flowbite/src/content/projects/images/bidding-register.webp");
							return target[name];
						}
					});

const images = async function(html) {
					const imageSources = {};
					{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\./images/bidding-page\\.webp" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "./images/bidding-page.webp" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__1OLABQ, ...props});
													occurrenceCounter++;
											}
									}
{
											const regex = new RegExp('__ASTRO_IMAGE_="([^"]*' + "\\./images/bidding-register\\.webp" + '[^"]*)"', 'g');
											let match;
											let occurrenceCounter = 0;
											while ((match = regex.exec(html)) !== null) {
													const matchKey = "./images/bidding-register.webp" + '_' + occurrenceCounter;
													const imageProps = JSON.parse(match[1].replace(/&#x22;/g, '"'));
													const { src, ...props } = imageProps;
													
													imageSources[matchKey] = await getImage({src: Astro__Z1vpVlC, ...props});
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
			const html = await updateImageReferences("<h2 id=\"bidding--letting\">Bidding &#x26; Letting</h2>\n<p>A site for business to track and register for state contracts.</p>\n<h3 id=\"need\">Need</h3>\n<p>Business 40 is a long-term construction project</p>\n<h3 id=\"solution\">Solution</h3>\n<p>For government contractors, keeping track of updates to certain contracts they might be interested in was a manual process. One would have to call and provide different sets of information, and a paper pack related to said contract would be sent to them. Since it was a paper process, there was also no way to be automatically notified if the contract changed in any way.</p>\n<p>A site needed to be developed that tracks contracts and allows users to easily find contracts based on various parameters.</p>\n<p>The user also needed a way to register as interested so that they could receive automatic updates related to the contract or subcontract they were interested in.</p>\n<p>Rest assured, the front end of this system is built with Vue and managed by SharePoint lists, ensuring a seamless user experience. Moreover, it is securely connected to various APIs, prioritizing the protection of user information.</p>\n<p>Contract table\n<img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;./images/bidding-page.webp&#x22;,&#x22;alt&#x22;:&#x22;Bidding, table&#x22;,&#x22;index&#x22;:0}\"></p>\n<p>Registration form\n<img __ASTRO_IMAGE_=\"{&#x22;src&#x22;:&#x22;./images/bidding-register.webp&#x22;,&#x22;alt&#x22;:&#x22;Bidding, form&#x22;,&#x22;index&#x22;:0}\"></p>");
	

				const frontmatter = {"title":"Bidding  & Letting","deleloper":"Tyus Durant","image":"bidding-page.webp","type":"normal","slug":"bidding-project","tags":["development","website"],"description":"A site for business to track and register for state contracts."};
				const file = "/Users/tyusdurant/Documents/local_git/astro-flowbite/src/content/projects/bidding-project.md";
				const url = undefined;
				function rawContent() {
					return "\n## Bidding & Letting\n\nA site for business to track and register for state contracts.\n\n### Need\n\nBusiness 40 is a long-term construction project\n\n### Solution\n\nFor government contractors, keeping track of updates to certain contracts they might be interested in was a manual process. One would have to call and provide different sets of information, and a paper pack related to said contract would be sent to them. Since it was a paper process, there was also no way to be automatically notified if the contract changed in any way.\n\nA site needed to be developed that tracks contracts and allows users to easily find contracts based on various parameters.\n\nThe user also needed a way to register as interested so that they could receive automatic updates related to the contract or subcontract they were interested in.\n\nRest assured, the front end of this system is built with Vue and managed by SharePoint lists, ensuring a seamless user experience. Moreover, it is securely connected to various APIs, prioritizing the protection of user information.\n\nContract table\n![Bidding, table](./images/bidding-page.webp)\n\nRegistration form\n![Bidding, form](./images/bidding-register.webp)\n";
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
