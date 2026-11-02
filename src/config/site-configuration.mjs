/** Deployment settings shared by Astro, metadata and the build tools. */
export class SiteConfiguration {
  /** @param {Record<string, string | boolean | undefined>} environment */
  constructor(environment = {}) {
    this.environment = environment.SITE_ENV || 'preview';
    if (!['preview', 'production'].includes(String(this.environment))) {
      throw new Error('SITE_ENV must be preview or production.');
    }
    this.origin = this.parseOrigin(String(environment.SITE_URL || ''));
    const requested = String(environment.SITE_INDEXABLE || 'false');
    if (!['true', 'false'].includes(requested)) {
      throw new Error('SITE_INDEXABLE must be true or false.');
    }
    this.indexable = requested === 'true';
    if (this.indexable && (this.environment !== 'production' || !this.origin)) {
      throw new Error(
        'Indexing requires SITE_ENV=production and an HTTPS SITE_URL.',
      );
    }
  }

  /** @param {string} value */
  parseOrigin(value) {
    if (!value) return null;
    const url = new URL(value);
    if (
      url.protocol !== 'https:' ||
      url.username ||
      url.password ||
      url.search ||
      url.hash ||
      url.pathname !== '/'
    ) {
      throw new Error(
        'SITE_URL must be an HTTPS origin, without a path, credentials, query or hash.',
      );
    }
    return url.origin;
  }

  /** @param {string} path */
  absolute(path) {
    if (!path.startsWith('/') || path.startsWith('//'))
      throw new Error('Expected a site-relative path.');
    return this.origin ? new URL(path, this.origin).href : null;
  }

  robots(indexable = true) {
    return this.indexable && indexable
      ? 'index, follow, max-image-preview:large'
      : 'noindex, follow';
  }
}
