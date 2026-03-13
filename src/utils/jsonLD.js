import siteData from "../data/site.json";
import { slugify } from "./utils";

export default function jsonLDGenerator({ type, post, url }) {
  // 1. High-Priority: Custom Project Proof (What we just built)
  if (post && post.schema) {
    const customSchema = {
      "@context": "https://schema.org",
      // Maps 'type' to '@type' automatically
      ...Object.fromEntries(
        Object.entries(post.schema).map(([k, v]) => [k === 'type' ? '@type' : k, v])
      ),
      "author": {
        "@type": "Organization",
        "name": siteData.siteName,
        "url": "https://www.sublimeux.com"
      }
    };
    return `<script type="application/ld+json">\n${JSON.stringify(customSchema, null, 2)}\n</script>`;
  }

  // 2. Fallback: Case Study / Article without Custom Schema
  if (type === "post") {
    // Note: handle the typo 'deleloper' gracefully
    const author = post?.developer || post?.deleloper || siteData.siteName;

    const baseSchema = {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      "headline": post?.title || siteData.siteName,
      "description": post?.description || siteData.siteDescription,
      "proficiencyLevel": "Expert",
      "author": {
        "@type": "Organization",
        "name": author
      }
    };
    return `<script type="application/ld+json">\n${JSON.stringify(baseSchema, null, 2)}\n</script>`;
  }

  // 3. Default: Homepage LocalBusiness / Organization
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": siteData.siteName,
    "image": `https://www.sublimeux.com${siteData.image.src}`,
    "telephone": siteData.schema.telephone,
    "email": siteData.contact.email,
    "address": siteData.schema.address,
    "knowsAbout": siteData.schema.knowsAbout,
    "areaServed": siteData.schema.areaServed,
    "offers": siteData.schema.offers,
    "hasOfferCatalog": siteData.schema.hasOfferCatalog,
    "audience": siteData.schema.audience,
    "url": "https://www.sublimeux.com/",
    "sameAs": siteData.social.map(s => s.href),
    "description": siteData.siteDescription,
    "priceRange": siteData.schema.priceRange
  };

  return `<script type="application/ld+json">\n${JSON.stringify(orgSchema, null, 2)}\n</script>`;
}