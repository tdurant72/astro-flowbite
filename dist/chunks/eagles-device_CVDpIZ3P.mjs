const siteImage = new Proxy({"src":"/_astro/eagles-device.DnwMU_Yl.webp","width":211,"height":425,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tyusdurant/Documents/local_git/astro-flowbite/public/images/eagles-device.webp";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/tyusdurant/Documents/local_git/astro-flowbite/public/images/eagles-device.webp");
							return target[name];
						}
					});

export { siteImage as s };
