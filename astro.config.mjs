import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify";
// import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://sublimeux.com",
  integrations: [tailwindcss(), mdx(), react(), sitemap({
    filter: (page) => page !== 'https://sublimeux.com/success',
    changefreq: 'monthly',
    priority: 0.7,
    lastmod: new Date(),
  })],
  adapter: netlify(),

  vite: {
    plugins: [tailwindcss()],
  },
});
