import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import './chunks/astro/server_ncfLoZ91.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const path = toPath(params);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"","routes":[{"file":"file:///Users/tyusdurant/Documents/local_git/astro-flowbite/dist/components/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/components","isIndex":false,"type":"page","pattern":"^\\/components\\/?$","segments":[[{"content":"components","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/components.astro","pathname":"/components","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/tyusdurant/Documents/local_git/astro-flowbite/dist/contact/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/tyusdurant/Documents/local_git/astro-flowbite/dist/projects/four/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/projects/four","isIndex":false,"type":"page","pattern":"^\\/projects\\/four\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}],[{"content":"four","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects/four.astro","pathname":"/projects/four","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/tyusdurant/Documents/local_git/astro-flowbite/dist/projects/one/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/projects/one","isIndex":false,"type":"page","pattern":"^\\/projects\\/one\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}],[{"content":"one","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects/one.astro","pathname":"/projects/one","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/tyusdurant/Documents/local_git/astro-flowbite/dist/projects/three/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/projects/three","isIndex":false,"type":"page","pattern":"^\\/projects\\/three\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}],[{"content":"three","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects/three.astro","pathname":"/projects/three","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/tyusdurant/Documents/local_git/astro-flowbite/dist/projects/two/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/projects/two","isIndex":false,"type":"page","pattern":"^\\/projects\\/two\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}],[{"content":"two","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects/two.astro","pathname":"/projects/two","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/tyusdurant/Documents/local_git/astro-flowbite/dist/projects/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/projects","isIndex":false,"type":"page","pattern":"^\\/projects\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects.astro","pathname":"/projects","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/tyusdurant/Documents/local_git/astro-flowbite/dist/services/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/services","isIndex":false,"type":"page","pattern":"^\\/services\\/?$","segments":[[{"content":"services","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services.astro","pathname":"/services","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/tyusdurant/Documents/local_git/astro-flowbite/dist/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/tyusdurant/Documents/local_git/astro-flowbite/src/pages/projects/tag/[...tag].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/projects/tag/[...tag]@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/tyusdurant/Documents/local_git/astro-flowbite/src/pages/projects/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/projects/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/tyusdurant/Documents/local_git/astro-flowbite/src/components/custom/CustomFeaturedProject.astro",{"propagation":"in-tree","containsHead":false}],["/Users/tyusdurant/Documents/local_git/astro-flowbite/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/Users/tyusdurant/Documents/local_git/astro-flowbite/src/components/custom/ProjectGallery.astro",{"propagation":"in-tree","containsHead":false}],["/Users/tyusdurant/Documents/local_git/astro-flowbite/src/pages/components.astro",{"propagation":"in-tree","containsHead":true}],["/Users/tyusdurant/Documents/local_git/astro-flowbite/src/pages/contact.astro",{"propagation":"in-tree","containsHead":true}],["/Users/tyusdurant/Documents/local_git/astro-flowbite/src/pages/projects.astro",{"propagation":"in-tree","containsHead":true}],["/Users/tyusdurant/Documents/local_git/astro-flowbite/src/pages/projects/four.astro",{"propagation":"in-tree","containsHead":true}],["/Users/tyusdurant/Documents/local_git/astro-flowbite/src/pages/projects/one.astro",{"propagation":"in-tree","containsHead":true}],["/Users/tyusdurant/Documents/local_git/astro-flowbite/src/pages/projects/three.astro",{"propagation":"in-tree","containsHead":true}],["/Users/tyusdurant/Documents/local_git/astro-flowbite/src/pages/projects/two.astro",{"propagation":"in-tree","containsHead":true}],["/Users/tyusdurant/Documents/local_git/astro-flowbite/src/pages/services.astro",{"propagation":"in-tree","containsHead":true}],["/Users/tyusdurant/Documents/local_git/astro-flowbite/src/components/DarkModeToggle.astro",{"propagation":"in-tree","containsHead":false}],["/Users/tyusdurant/Documents/local_git/astro-flowbite/src/components/Nav.astro",{"propagation":"in-tree","containsHead":false}],["/Users/tyusdurant/Documents/local_git/astro-flowbite/src/layouts/Layout.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/components@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/contact@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/projects@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/projects/four@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/projects/one@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/projects/three@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/projects/two@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/services@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/tyusdurant/Documents/local_git/astro-flowbite/src/layouts/ProjectLayout.astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/components@_@astro":"pages/components.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/projects/four@_@astro":"pages/projects/four.astro.mjs","\u0000@astro-page:src/pages/projects/one@_@astro":"pages/projects/one.astro.mjs","\u0000@astro-page:src/pages/projects/tag/[...tag]@_@astro":"pages/projects/tag/_---tag_.astro.mjs","\u0000@astro-page:src/pages/projects/three@_@astro":"pages/projects/three.astro.mjs","\u0000@astro-page:src/pages/projects/two@_@astro":"pages/projects/two.astro.mjs","\u0000@astro-page:src/pages/projects@_@astro":"pages/projects.astro.mjs","\u0000@astro-page:src/pages/projects/[...slug]@_@astro":"pages/projects/_---slug_.astro.mjs","\u0000@astro-page:src/pages/services@_@astro":"pages/services.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_DMpH0vVj.mjs","/src/pages/components.astro":"chunks/components_iWT0cEZF.mjs","/src/pages/contact.astro":"chunks/contact_C24S6uZY.mjs","/src/pages/projects/four.astro":"chunks/four_CTNW1ynr.mjs","/src/pages/projects/one.astro":"chunks/one_DiRfrDPf.mjs","/src/pages/projects/tag/[...tag].astro":"chunks/_...tag__C20LrwQR.mjs","/src/pages/projects/three.astro":"chunks/three_BD6AxEML.mjs","/src/pages/projects/two.astro":"chunks/two_CU6GFp91.mjs","/src/pages/projects.astro":"chunks/projects_BaRygO66.mjs","/src/pages/projects/[...slug].astro":"chunks/_...slug__DBpID0RE.mjs","/src/pages/services.astro":"chunks/services_BJP68Ser.mjs","/src/pages/index.astro":"chunks/index_D273zazx.mjs","/Users/tyusdurant/Documents/local_git/astro-flowbite/src/content/projects/bidding-project.md?astroContentCollectionEntry=true":"chunks/bidding-project_qEGwAskQ.mjs","/Users/tyusdurant/Documents/local_git/astro-flowbite/src/content/projects/business40-project.md?astroContentCollectionEntry=true":"chunks/business40-project_DP2Rvbn1.mjs","/Users/tyusdurant/Documents/local_git/astro-flowbite/src/content/projects/eagles-project.md?astroContentCollectionEntry=true":"chunks/eagles-project_DbppaYOf.mjs","/Users/tyusdurant/Documents/local_git/astro-flowbite/src/content/projects/ferry-tracker-project.md?astroContentCollectionEntry=true":"chunks/ferry-tracker-project_CwrSbkFv.mjs","/Users/tyusdurant/Documents/local_git/astro-flowbite/src/content/projects/gtp-project.md?astroContentCollectionEntry=true":"chunks/gtp-project_Cw2DPT0H.mjs","/Users/tyusdurant/Documents/local_git/astro-flowbite/src/content/projects/reservations-project.md?astroContentCollectionEntry=true":"chunks/reservations-project_BAW1PMk_.mjs","/Users/tyusdurant/Documents/local_git/astro-flowbite/src/content/projects/bidding-project.md?astroPropagatedAssets":"chunks/bidding-project_BO9zyoAq.mjs","/Users/tyusdurant/Documents/local_git/astro-flowbite/src/content/projects/business40-project.md?astroPropagatedAssets":"chunks/business40-project_Czj2GT56.mjs","/Users/tyusdurant/Documents/local_git/astro-flowbite/src/content/projects/eagles-project.md?astroPropagatedAssets":"chunks/eagles-project_bwLtcCZA.mjs","/Users/tyusdurant/Documents/local_git/astro-flowbite/src/content/projects/ferry-tracker-project.md?astroPropagatedAssets":"chunks/ferry-tracker-project_0IJwyGXW.mjs","/Users/tyusdurant/Documents/local_git/astro-flowbite/src/content/projects/gtp-project.md?astroPropagatedAssets":"chunks/gtp-project_CIoGQQk2.mjs","/Users/tyusdurant/Documents/local_git/astro-flowbite/src/content/projects/reservations-project.md?astroPropagatedAssets":"chunks/reservations-project_B-_CiBw4.mjs","/Users/tyusdurant/Documents/local_git/astro-flowbite/src/content/projects/bidding-project.md":"chunks/bidding-project_BW5IB_LO.mjs","/Users/tyusdurant/Documents/local_git/astro-flowbite/src/content/projects/business40-project.md":"chunks/business40-project_CoQM2KLI.mjs","/Users/tyusdurant/Documents/local_git/astro-flowbite/src/content/projects/eagles-project.md":"chunks/eagles-project_BA9NDpxS.mjs","/Users/tyusdurant/Documents/local_git/astro-flowbite/src/content/projects/ferry-tracker-project.md":"chunks/ferry-tracker-project_BN2rrZIi.mjs","/Users/tyusdurant/Documents/local_git/astro-flowbite/src/content/projects/gtp-project.md":"chunks/gtp-project_Cf5gnt74.mjs","/Users/tyusdurant/Documents/local_git/astro-flowbite/src/content/projects/reservations-project.md":"chunks/reservations-project_njk51AAz.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.CIynLFC4.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/file:///Users/tyusdurant/Documents/local_git/astro-flowbite/dist/components/index.html","/file:///Users/tyusdurant/Documents/local_git/astro-flowbite/dist/contact/index.html","/file:///Users/tyusdurant/Documents/local_git/astro-flowbite/dist/projects/four/index.html","/file:///Users/tyusdurant/Documents/local_git/astro-flowbite/dist/projects/one/index.html","/file:///Users/tyusdurant/Documents/local_git/astro-flowbite/dist/projects/three/index.html","/file:///Users/tyusdurant/Documents/local_git/astro-flowbite/dist/projects/two/index.html","/file:///Users/tyusdurant/Documents/local_git/astro-flowbite/dist/projects/index.html","/file:///Users/tyusdurant/Documents/local_git/astro-flowbite/dist/services/index.html","/file:///Users/tyusdurant/Documents/local_git/astro-flowbite/dist/index.html"],"buildFormat":"directory","checkOrigin":false});

export { manifest };
