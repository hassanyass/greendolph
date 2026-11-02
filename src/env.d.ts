/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly SITE_URL?: string;
  readonly SITE_ENV?: 'preview' | 'production';
  readonly SITE_INDEXABLE?: 'true' | 'false';
}
