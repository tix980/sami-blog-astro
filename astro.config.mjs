import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: 'https://samixie.com',
  integrations: [tailwind(), sitemap({
    filter: page => !/https:\/\/samixie\.com\/blog\/[0-9]+/.test(page)
  })],
  output: "hybrid",
  adapter: node({
    mode: "standalone"
  }),
  vite: {
    optimizeDeps: {
      exclude: ['@resvg/resvg-js'],
    },
      },
});