import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import PartytownOptions  from '@astrojs/partytown';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [
    mdx(), 
    sitemap(), 
    tailwind(),
    PartytownOptions({
      config:{
        forward: ["dataLayer.push"],
      },
    }),
  ],
});