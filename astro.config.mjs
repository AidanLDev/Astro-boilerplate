import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  // site: TODO: Add site URL here e.g. https://stargazers.club
  integrations: [sitemap(), react()]
});