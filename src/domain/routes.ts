export type Locale = 'en' | 'ar';
export type PageKey =
  'home' | 'services' | 'works' | 'about' | 'contact' | 'notFound';
export const locales: readonly Locale[] = ['en', 'ar'];

export interface PageDefinition {
  key: PageKey;
  paths: Record<Locale, string>;
  indexable: boolean;
}

export class RouteCatalog {
  constructor(readonly pages: readonly PageDefinition[]) {}

  page(key: PageKey): PageDefinition {
    const page = this.pages.find((item) => item.key === key);
    if (!page) throw new Error(`Unknown page: ${key}`);
    return page;
  }

  path(key: PageKey, locale: Locale): string {
    return this.page(key).paths[locale];
  }

  alternate(key: PageKey, locale: Locale): string {
    return this.path(key, locale === 'en' ? 'ar' : 'en');
  }

  enquiry(locale: Locale, service?: string): string {
    return `${this.path('contact', locale)}${service ? `?service=${encodeURIComponent(service)}` : ''}`;
  }
}

// Register only implemented pages. Planned pages must never create sitemap entries or dead links.
export const routes = new RouteCatalog([
  { key: 'home', paths: { en: '/', ar: '/ar/' }, indexable: true },
  { key: 'about', paths: { en: '/about/', ar: '/ar/about/' }, indexable: true },
  {
    key: 'contact',
    paths: { en: '/contact/', ar: '/ar/contact/' },
    indexable: true,
  },
  {
    key: 'services',
    paths: { en: '/services/', ar: '/ar/services/' },
    indexable: true,
  },
  {
    key: 'works',
    paths: { en: '/our-works/', ar: '/ar/our-works/' },
    indexable: false,
  },
]);

export const navigation = [
  { section: 'home', page: 'home', labelIndex: 0 },
  { section: 'services', page: 'services', labelIndex: 1 },
  { section: 'works', page: 'works', labelIndex: 4 },
  { section: 'about', page: 'about', labelIndex: 2 },
  { section: 'contact', page: 'contact', labelIndex: 3 },
] as const;

export function navigationHref(
  item: (typeof navigation)[number],
  locale: Locale,
): string {
  return routes.path(item.page, locale);
}
