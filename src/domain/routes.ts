export type Locale = 'en' | 'ar';
export type PageKey = 'home' | 'notFound';
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

  homeAnchor(locale: Locale, section: string): string {
    return `${this.path('home', locale)}#${section}`;
  }
}

// Register only implemented pages. Planned pages must never create sitemap entries or dead links.
export const routes = new RouteCatalog([
  { key: 'home', paths: { en: '/', ar: '/ar/' }, indexable: true },
]);

export const navigation = [
  { section: 'home', labelIndex: 0 },
  { section: 'services', labelIndex: 1 },
  { section: 'about', labelIndex: 2 },
  { section: 'contact', labelIndex: 3 },
] as const;
