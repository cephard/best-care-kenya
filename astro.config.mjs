// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  build: {
    assetsPrefix: './',
  },
  vite: {
    plugins: [tailwindcss()],
  },
  site: "https://bestcarekenya.co.ke",
  trailingSlash: "never",
  base: "best-care-kenya",
});
