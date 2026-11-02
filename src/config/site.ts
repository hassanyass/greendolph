import { SiteConfiguration } from './site-configuration.mjs';

// Read private build-time keys explicitly; passing the entire env object loses them.
export const site = new SiteConfiguration({
  SITE_URL: import.meta.env.SITE_URL,
  SITE_ENV: import.meta.env.SITE_ENV,
  SITE_INDEXABLE: import.meta.env.SITE_INDEXABLE,
});
