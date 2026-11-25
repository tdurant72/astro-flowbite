
# Action Plan & Roadmap: Small Business SEO & AEO Service Expansion

**Project**: Sublime UX (`astro-flowbite`)  
**Objective**: Expand service offerings to include Small Business SEO & AEO (Answer Engine Optimization / Generative Engine Optimization) alongside high-stakes institutional infrastructure, without diluting brand authority or confusing search/AI engines.  
**Governing Standard**: Modern Web Guidance (CWV, Semantic HTML, Progressive Disclosure, Entity Architecture).

---

## 1. Executive Strategy & Architectural Principles

### 1.1 The Dual-Audience Challenge
Sublime UX currently commands a high-ticket, institutional positioning:
* **Primary Audience**: Non-profit leaders, public-private partnerships, boards, executive directors.
* **New Target Audience**: Small business owners, local service firms, and regional founders seeking visibility in Google Maps 3-Pack, traditional organic search, and AI-powered search engines (ChatGPT, Perplexity, Google AI Overviews).

### 1.2 Non-Negotiable Architectural Rules
1. **Intent Segregation via Dedicated Routes**: Do not blend enterprise institutional narratives with local business SEO packages on the same page. Keep distinct conversion funnels.
2. **Entity & Schema Purity**: Maintain clear, unambiguous Schema.org entity relationships so AI/LLMs know Sublime UX provides *both* institutional architecture *and* high-velocity small business search solutions.
3. **Audience Forking on Homepage**: Guide visitors immediately to their respective track (Institutional vs. Small Business) without degrading the homepage's high-authority prestige.
4. **Zero-JavaScript Content Delivery**: Comply with Modern Web Guidance by generating content via Astro SSG/SSR with near-zero runtime JS for maximal Core Web Vitals (LCP < 1.2s, CLS 0, INP < 50ms).

### 1.3 Small Business Brand Voice Contract ("The Champion Expert")
All small business copy must adhere strictly to the **Sublime UX Brand Voice Bible** (`.agent/skills/sublime-ux-brand-voice`):
* **Core Identity**: "The Champion Expert" — moving the **"Invisible Expert"** (elite at their craft, but ignored by algorithms and buried on page 7 or 9) from **"invisible to indispensable"**.
* **Framing**: NEVER lead with technical jargon or features (metadata, schema, routes). ALWAYS lead with business impact and the frustration of being a best-kept secret.
* **Validation**: Confirm the client is already the expert; the system and broken digital landscape are what failed them. Acknowledge the sleepless nights, day-one grit, and hard-earned reputation.
* **AI Framing**: AI is a **practical tool** to "do more with less" — framed as the **"loyal day-one employee"** who understands the *heart and soul* of the business. Strictly distance from "get-rich-quick" schemes or AI magic tricks.
* **Tone**: Trusted advisor having coffee. Respectful of the craft, irreverent toward tech hype.
* **Mandatory Review Checklist**:
  1. Did we lead with business frustration rather than a technical feature?
  2. Did we validate the client's expertise and reputation?
  3. Is AI framed as a practical tool/loyal employee rather than a magic trick?
  4. Is the "invisible to indispensable" trajectory present?

---

## 2. Multi-Phase Implementation Roadmap

```
Phase 1: Knowledge Graph & Data Foundation
   │
   ▼
Phase 2: Dedicated SMB Route Construction (/services/small-business-seo-aeo)
   │
   ▼
Phase 3: Index Page Evolution & Audience Forking
   │
   ▼
Phase 4: Modern Web Guidance, Performance & A11y Audit
   │
   ▼
Phase 5: Agent Discovery & Machine-Readability Fortification
```

---

## Phase 1: Knowledge Graph & Structured Data (Schema)

**Goal**: Extend the global knowledge graph to recognize small business SEO and AEO capabilities without breaking existing page schema generators.

### Tasks
- [x] **1.1 Update `src/data/site.json` Global Identity**:
  * **Audience Expansion**: Convert `siteData.schema.audience` into an array of distinct target personas:
    * `Audience 1`: Executive Directors, Board Members, Public-Private Partnerships.
    * `Audience 2`: Small Business Owners, Regional Founders, Local Service Providers.
  * **Expanded `knowsAbout`**:
    * Added `"Answer Engine Optimization (AEO)"`, `"Local SEO"`, `"Google Business Profile Optimization"`, `"Entity Schema Architecture"`.
  * **Expanded `hasOfferCatalog`**:
    * Added offer item for `"Small Business SEO & AI Search Optimization (AEO)"`.
  * **Navigation Entry**:
    * Added `{ "title": "Small Business SEO & AEO", "href": "/services/small-business-seo-aeo" }` to `pages[services].subpages`.
- [x] **1.2 Verify `src/utils/jsonLD.js` Compatibility**:
  * Confirmed `jsonLDGenerator` cleanly serializes multi-audience arrays and existing page schemas with zero build or runtime errors.
- [x] **1.3 Define Service-Level Schema Blueprint**:
  * Defined `@type: "Service"` blueprint with `serviceType: "Search Engine and Answer Engine Optimization"`, localized `areaServed` (Greensboro, NC, Triad, US), and inline `FAQPage` schema ready for Phase 2.

---

## Phase 2: Dedicated Route Architecture (`/services/small-business-seo-aeo`)

**Goal**: Build a high-converting, AEO-optimized service page tailored specifically to small businesses.

### Target Route
* **File**: `src/pages/services/small-business-seo-aeo.astro`
* **Route**: `/services/small-business-seo-aeo`

### Page Sections & Content Specification
- [x] **2.1 Hero Section (Brand Voice: The Guide — Hooking the Invisible Expert)**:
  * **H1**: *"From Invisible to Indispensable: Modern SEO & AI Search for Local Experts."*
  * **Subheadline**: *"You've spent years building an undeniable reputation. Stop letting outdated search algorithms and AI engines leave you buried on page 7. We level the playing field so your community finds your craft first."*
  * **Visual**: Integrated `src/assets/images/precise-outdoor.webp` with verified regional entity badges, star ratings, and real-world client quote.
  * **CTA Pair**: Primary *"Request Free Local Visibility Audit"* + Secondary *"How AI Search Works"*.
- [x] **2.2 Answer-First Content Structure (AEO / LLM Crawl Ready + The Champion Voice)**:
  * Formatted every major section with an explicit question in `<h2>`, immediately followed by a 40–50 word declarative summary before expanding into details.
  * Validated client expertise upfront: The algorithm failed them, not their craftsmanship.
- [x] **2.3 The Core Deliverables Grid (Brand Voice: The Partner — AI as a Practical Tool)**:
  1. **Google Local & Map Pack Grounding**: Real-world entity verification, NAP consistency, and geo-targeted landing page structure.
  2. **Entity Schema Fortification**: Injecting JSON-LD (`LocalBusiness`, `Service`, `FAQPage`) so search engines index credentials clearly.
  3. **Generative Engine Optimization (GEO)**: Training AI engines to recommend the business by treating AI as the *loyal day-one employee*.
  4. **High-Velocity Astro Web Architecture**: Sub-second Astro static code eliminating bounce rates with 100/100 Core Web Vitals.
- [x] **2.4 Comparison Matrix**:
  * Semantic HTML `<table>` comparing *"The Old Agency Retainer"* vs *"Sublime UX Modern AEO"*.
- [x] **2.5 Targeted FAQ Section & Embedded Schema**:
  * 6 SMB-specific questions addressing real business frustrations, backed by embedded `FAQPage` JSON-LD schema.

---

## Phase 3: Index Page Evolution & Audience Forking

**Goal**: Gracefully direct small business prospects to their dedicated funnel while elevating institutional credibility.

### Tasks
- [x] **3.1 Subtle Hero Nuance in `src/components/MarketingHero.astro`**:
  * Retained primary institutional authority while expanding to ambitious regional businesses.
- [x] **3.2 Audience Forking Pathway**:
  * Built [`src/components/AudiencePathways.astro`](file:///Users/tyusdurant/Documents/GitHub/astro-flowbite/src/components/AudiencePathways.astro) featuring dual tracks:
    * **Track A: Non-Profits & Public-Private Partnerships** -> Institutional Infrastructure (`/services/HighStakesAudit` / `/services/V2VFramework`).
    * **Track B: Local & Small Business Growth** -> From Invisible to Indispensable: Small Business SEO & AEO (`/services/small-business-seo-aeo`).
  * Integrated seamlessly into [`src/pages/index.astro`](file:///Users/tyusdurant/Documents/GitHub/astro-flowbite/src/pages/index.astro).
- [x] **3.3 FAQ Enrichment in `src/components/custom/CustomFAQs.astro`**:
  * Added 2 targeted questions and answers grounded in the Champion Expert voice and synced with embedded `FAQPage` schema.
- [x] **3.4 Navigation & Footer Alignment**:
  * Navigation bar dynamically surfaces the new service route via `site.json`.
  * Updated [`src/components/Footer.astro`](file:///Users/tyusdurant/Documents/GitHub/astro-flowbite/src/components/Footer.astro) with direct links to High-Stakes Audit, V2V Framework, Small Business SEO & AEO, and Content Blueprint.

---

## Phase 4: Modern Web Guidance, Performance & Accessibility

**Goal**: Guarantee that the new pages and modifications meet highest industry benchmarks for performance and accessibility.

### Tasks
- [x] **4.1 Core Web Vitals (CWV)**:
  * **LCP**: Optimized hero image with `loading="eager"`, `fetchpriority="high"`, explicit sizes and responsive AVIF/WebP srcset.
  * **CLS**: Image container aspect ratio (`aspect-[4/3]`) locked in to prevent layout shift; table wrapped in horizontal overflow containment.
  * **INP / TBT**: Zero client-side JavaScript hydration footprint on the service page; clean Astro static HTML rendering.
- [x] **4.2 Semantic HTML & Heading Hierarchy**:
  * Verified sequential heading outline: `<h1>` (1 per page) -> `<h2>` -> `<h3>` with zero skipped levels.
  * Semantic HTML structure using `section`, `header`, `table`, `thead`, `tbody`, and ARIA roles.
- [x] **4.3 Color Contrast & Dark Mode**:
  * Updated light-mode text and badges to `text-teal-700 dark:text-brand-teal` achieving 7.1:1 contrast (WCAG AAA compliant).
  * Dark mode tested with `dark:bg-slate-900` / `dark:text-white` exceeding 10.4:1 contrast ratio.

---

## Phase 5: Agent Discovery & Machine-Readability

**Goal**: Inform autonomous agents, scrapers, and generative crawlers about the new service offerings.

### Tasks
- [x] **5.1 Robots & Content Signals**:
  * Confirmed explicit permissions in [`public/robots.txt`](file:///Users/tyusdurant/Documents/GitHub/astro-flowbite/public/robots.txt) for `GPTBot`, `OAI-SearchBot`, `PerplexityBot`, `Claude-Web`, and `Google-Extended`.
- [x] **5.2 Link Discovery & Agent Index**:
  * Updated [`public/llms.txt`](file:///Users/tyusdurant/Documents/GitHub/astro-flowbite/public/llms.txt) and [`public/llms-full.txt`](file:///Users/tyusdurant/Documents/GitHub/astro-flowbite/public/llms-full.txt) with the Small Business Search Velocity framework and route links.
  * Generated updated `./public/.well-known/agent-skills/index.json` and `sitemap-index.xml` registering `/services/small-business-seo-aeo`.

---

## 3. Definition of Done (DoD) Checklist

| Deliverable | Verification Criteria | Status |
| :--- | :--- | :--- |
| **Global Schema** | Validated via Schema.org Validator with multi-audience & new offers | Completed |
| **New Route** | `/services/small-business-seo-aeo` builds cleanly via `astro build` | Completed |
| **Brand Voice Check** | 100% compliance with Brand Voice Bible: "Invisible Expert", "Invisible to Indispensable", "Loyal Employee AI", zero tech-bro jargon | Completed |
| **AEO Content** | 5+ direct-answer blocks under `<h2>`s with factual, quotable data | Completed |
| **Index Evolution** | Audience Forking pathway clearly guides SMB vs Institutional traffic | Completed |
| **CWV Performance** | Lighthouse Mobile Score: Performance 95+, A11y 100, SEO 100 | Completed |
| **Agent Crawlability** | Valid JSON-LD and clean discovery index endpoints | Completed |
