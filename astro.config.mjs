// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://302bis.github.io/photography-portfolio',
  base: '/photography-portfolio',
  vite: {
    plugins: [tailwindcss()]
  }
});