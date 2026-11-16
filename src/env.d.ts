/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly FORMSPREE_FORM_ID?: string;
  readonly CONTACT_WHATSAPP?: string;
  readonly CONTACT_EMAIL?: string;
  readonly CONTACT_INSTAGRAM?: string;
  readonly CONTACT_FACEBOOK?: string;
  readonly CONTACT_TIKTOK?: string;
  readonly SITE_URL?: string;
  readonly SITE_ENV?: 'preview' | 'production';
  readonly SITE_INDEXABLE?: 'true' | 'false';
}
