---
name: Astro Flowbite
description: A bold, helpful design system for non-profits navigating the AI era.
colors:
  primary: "#3DE4C1"
  brand-teal: "#2db3a1"
  brand-amber: "#f59e0b"
  neutral-bg: "#ffffff"
  neutral-fg: "#0f172a"
typography:
  display:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 7vw, 4.5rem)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  md: "0.625rem"
spacing:
  base: "1rem"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral-fg}"
    rounded: "{rounded.md}"
    padding: "0.75rem 1.5rem"
---

# Design System: Astro Flowbite

## 1. Overview

**Creative North Star: "The Beacon of Clarity"**

The Astro Flowbite design system is built to convey helpfulness, knowledge, and boldness. It rejects the generic "AI Slop" of the modern web—overused purples, neon glows, and meaningless gradients—in favor of high-contrast, structural clarity that serves both human readers and machine crawlers.

The aesthetic is **Layered and Transparent**, utilizing subtle backdrop blurs and intentional spacing to create a sense of depth without sacrificing performance or accessibility.

**Key Characteristics:**
- High-contrast typography for immediate legibility.
- Strategic use of Teal to signify impact and growth.
- Purposeful layering to organize complex information.
- Semantic structure optimized for AI search indexing.

## 2. Colors

The palette is anchored by a vibrant impact teal, supported by stable brand tones that build trust with non-profit organizations.

### Primary
- **Impact Teal** (#3DE4C1): Used for primary calls to action and key brand moments. It represents growth and the positive impact of clarity.

### Neutral
- **Deep Slate** (#0f172a): The primary foreground color for maximum readability.
- **Pure White** (#ffffff): The base background color, providing a clean canvas for information.

### Named Rules
**The No-Slop Rule.** Avoid generic AI "purple-to-blue" gradients. If a gradient is used, it must be functional (e.g., indicating depth) and avoid neon "glow" effects.
**The Teal Commitment Rule.** Teal is our primary signal for impact. Use it for "Helpful" and "Actionable" elements only.

## 3. Typography

**Display Font:** Inter (with system-ui)
**Body Font:** Inter (with system-ui)

**Character:** Technical precision meets editorial boldness. The use of extra-bold weights and tight tracking for headlines creates an authoritative, knowledgeable voice.

### Hierarchy
- **Display** (800, clamp(2.5rem, 7vw, 4.5rem), 1.1): Used for main hero sections and critical statements.
- **Headline** (700, 2.25rem, 1.2): Used for section headers.
- **Body** (400, 1rem, 1.6): Used for all long-form content. Max line length capped at 75ch for readability.

## 4. Elevation

The system utilizes a **Layered and Transparent** philosophy. Depth is created through surface transparency and backdrop blurs rather than heavy, muddy shadows.

### Shadow Vocabulary
- **Layered Glow** (backdrop-blur-xl): Used on floating elements like navigation bars or cards to create separation from the background.

### Named Rules
**The Clarity Layer Rule.** Transparency must never compromise legibility. If a backdrop blur is used, the contrast ratio between foreground text and the blurred background must exceed 4.5:1.

## 5. Components

### Buttons
- **Shape:** Softened edges (0.625rem radius)
- **Primary:** Impact Teal background with Deep Slate text. High-contrast and bold.
- **Hover:** Subtle shift in saturation or scale to indicate interactivity.

### Cards
- **Corner Style:** 0.625rem radius
- **Style:** Minimal borders with optional layered transparency (glass effect) for secondary context.

## 6. Do's and Don'ts

### Do:
- **Do** use high-contrast typography (Deep Slate on Pure White).
- **Do** prioritize semantic HTML tags (h1-h6, section, article) for AI indexing.
- **Do** use Teal (#3DE4C1) strategically to highlight "Helpful" insights.

### Don't:
- **Don't** use generic AI purples or "digital matrix" gradients.
- **Don't** use glassmorphism as a default; mark as **Use with extreme caution**.
- **Don't** use "AI Slop" patterns like floating brains or neon glows.
