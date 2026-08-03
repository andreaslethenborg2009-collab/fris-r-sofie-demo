// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://frisoersofie-demo.pages.dev',

  image: {
    domains: ['picsum.photos', 'fastly.picsum.photos']
  },

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});