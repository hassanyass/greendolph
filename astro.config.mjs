import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';
import { SiteConfiguration } from './src/config/site-configuration.mjs';

const site = new SiteConfiguration(
  loadEnv(process.env.NODE_ENV || 'production', process.cwd(), 'SITE_'),
);

export default defineConfig({
  output: 'static',
  site: site.origin || undefined,
  trailingSlash: 'always',
  devToolbar: { enabled: false },
});
