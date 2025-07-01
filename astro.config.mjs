// astro.config.mjs
import { defineConfig } from 'astro/config';

import netlify from '@astrojs/netlify';

export default defineConfig({
  // Sitio estático
  // Sin adapter
  output: 'static',

  adapter: netlify()
});