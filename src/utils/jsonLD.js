import siteData from "../data/site.json";
import { slugify } from "./utils";

export default function jsonLDGenerator({ type, post, url }) {
  const schemas = [];

  // 1. High-Priority: Custom Project Proof (What we just built)
  if (post && post.schema) {
    const customSchema = {
      "@context": "https://schema.org",
      // Maps 'type' to '@type' automatically
      ...Object.fromEntries(
        Object.entries(post.schema).map(([k, v]) => [k === 'type' ? '@type' : k, ([ 'faq', 'author', 'organization' ].includes(k) ? undefined : v)])
      ),
      "author": post.schema.author === "Tyus Durant" || siteData.person.name === post.schema.author ? {
        "@type": "Person",
        "name": siteData.person.name,
        "url": siteData.person.url,
        "sameAs": siteData.person.sameAs,
        "jobTitle": siteData.person.jobTitle
      } : {
        "@type": "Organization",
        "name": siteData.siteName,
        "url": "https://www.sublimeux.com"
      }
    };
    // Clean up undefined from the mapping
    Object.keys(customSchema).forEach(key => customSchema[key] === undefined && delete customSchema[key]);
    schemas.push(customSchema);

    // 1b. Support for FAQPage within the same post
    if (post.schema.faq && Array.isArray(post.schema.faq)) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": post.schema.faq.map(item => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer
          }
        }))
      });
    }
  }

  // 2. Fallback: Case Study / Article without Custom Schema
  if (type === "post" && !post.schema) {
    const authorName = post?.developer || post?.deleloper || siteData.siteName;
    const isTyus = authorName === "Tyus Durant" || authorName === "Tyus";

    schemas.push({
      "@context": "https://schema.org",
      "@type": "TechArticle",
      "headline": post?.title || siteData.siteName,
      "description": post?.description || siteData.siteDescription,
      "proficiencyLevel": "Expert",
      "author": isTyus ? {
        "@type": "Person",
        "name": siteData.person.name,
        "url": siteData.person.url,
        "sameAs": siteData.person.sameAs
      } : {
        "@type": "Organization",
        "name": authorName
      }
    });
  }

  // 3. Default: Homepage LocalBusiness / Organization (Always included as identity signal)
  schemas.push({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": siteData.siteName,
    "image": `https://www.sublimeux.com${siteData.image.src}`,
    "telephone": siteData.schema.telephone,
    "email": siteData.contact.email,
    "address": siteData.schema.address,
    "contactPoint": siteData.schema.contactPoint,
    "knowsAbout": siteData.schema.knowsAbout,
    "areaServed": siteData.schema.areaServed,
    "offers": siteData.schema.offers,
    "hasOfferCatalog": siteData.schema.hasOfferCatalog,
    "audience": siteData.schema.audience,
    "url": "https://www.sublimeux.com/",
    "sameAs": siteData.social.map(s => s.href),
    "description": siteData.siteDescription,
    "priceRange": siteData.schema.priceRange
  });

  return `<script type="application/ld+json">\n${JSON.stringify(schemas.length === 1 ? schemas[0] : schemas, null, 2)}\n</script>`;
}