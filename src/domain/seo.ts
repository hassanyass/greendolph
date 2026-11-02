import { SiteConfiguration } from '../config/site-configuration.mjs';
import { locales, type Locale, type PageDefinition } from './routes.ts';

export class PageMetadata {
  constructor(
    readonly site: SiteConfiguration,
    readonly page: PageDefinition,
    readonly locale: Locale,
    readonly title: string,
    readonly description: string,
    readonly imagePath: string,
    readonly indexable = true,
  ) {}

  get canonical() {
    return this.page.indexable
      ? this.site.absolute(this.page.paths[this.locale])
      : null;
  }

  get robots() {
    return this.site.robots(this.page.indexable && this.indexable);
  }

  get alternates() {
    if (!this.site.origin || !this.page.indexable) return [];
    return [
      ...locales.map((locale) => ({
        language: `${locale}-AE`,
        url: this.site.absolute(this.page.paths[locale])!,
      })),
      { language: 'x-default', url: this.site.absolute(this.page.paths.en)! },
    ];
  }

  get image() {
    return this.site.absolute(this.imagePath);
  }
}

export class SitemapGenerator {
  constructor(
    readonly site: SiteConfiguration,
    readonly pages: readonly PageDefinition[],
  ) {}

  render(): string {
    const entries = this.site.indexable
      ? this.pages
          .filter((page) => page.indexable)
          .flatMap((page) =>
            locales.map((locale) => {
              const alternate = locales
                .map(
                  (language) =>
                    `<xhtml:link rel="alternate" hreflang="${language}-AE" href="${escapeXml(this.site.absolute(page.paths[language])!)}"/>`,
                )
                .join('');
              return `<url><loc>${escapeXml(this.site.absolute(page.paths[locale])!)}</loc>${alternate}<xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(this.site.absolute(page.paths.en)!)}"/></url>`;
            }),
          )
          .join('')
      : '';
    return `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${entries}</urlset>`;
  }
}

export function escapeXml(value: string): string {
  return value.replace(
    /[<>&"']/g,
    (character) =>
      ({
        '<': '&lt;',
        '>': '&gt;',
        '&': '&amp;',
        '"': '&quot;',
        "'": '&apos;',
      })[character]!,
  );
}

export function serializeJsonLd(value: unknown): string {
  return JSON.stringify(value)
    .replace(/</g, '\\u003c')
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029');
}
