import { SiteConfiguration } from '../config/site-configuration.mjs';
import type { Locale } from './routes.ts';
import type { BreadcrumbItem } from './breadcrumbs.ts';

interface ServiceIdentity {
  name: string;
  description: string;
  url: string;
  alternateName?: string;
  serviceType?: string;
}

interface PageIdentity {
  url: string;
  title: string;
  description: string;
  locale: Locale;
  breadcrumbs: readonly BreadcrumbItem[];
}

export interface BusinessIdentity {
  name: string;
  arabicName: string;
  phone: string | null;
  email: string | null;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    addressCountry: 'AE';
    postalCode?: string;
  } | null;
  serviceAreas: readonly string[];
  socialProfiles: readonly string[];
}

export class StructuredDataBuilder {
  constructor(
    readonly site: SiteConfiguration,
    readonly company: BusinessIdentity,
    readonly logoPath: string,
  ) {}

  build(service?: ServiceIdentity, page?: PageIdentity) {
    if (!this.site.origin) return null;
    const organization = {
      '@type':
        this.company.address && this.company.phone
          ? 'LocalBusiness'
          : 'Organization',
      '@id': `${this.site.origin}/#organization`,
      name: this.company.name,
      alternateName: this.company.arabicName,
      url: this.site.origin,
      logo: this.site.absolute(this.logoPath),
      ...(this.company.phone ? { telephone: this.company.phone } : {}),
      ...(this.company.email ? { email: this.company.email } : {}),
      ...(this.company.address
        ? { address: { '@type': 'PostalAddress', ...this.company.address } }
        : {}),
      ...(this.company.serviceAreas.length
        ? { areaServed: this.company.serviceAreas }
        : {}),
      ...(this.company.socialProfiles.length
        ? { sameAs: this.company.socialProfiles }
        : {}),
    };
    const breadcrumb =
      page && page.breadcrumbs.length >= 2
        ? {
            '@type': 'BreadcrumbList',
            '@id': `${page.url}#breadcrumb`,
            itemListElement: page.breadcrumbs.map((item, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              name: item.name,
              item: this.site.absolute(item.path),
            })),
          }
        : null;
    return {
      '@context': 'https://schema.org',
      '@graph': [
        organization,
        {
          '@type': 'WebSite',
          '@id': `${this.site.origin}/#website`,
          name: this.company.name,
          url: this.site.origin,
          inLanguage: ['en', 'ar'],
          publisher: { '@id': organization['@id'] },
        },
        ...(page
          ? [
              {
                '@type': 'WebPage',
                '@id': `${page.url}#webpage`,
                url: page.url,
                name: page.title,
                description: page.description,
                inLanguage: page.locale,
                isPartOf: { '@id': `${this.site.origin}/#website` },
                ...(breadcrumb
                  ? { breadcrumb: { '@id': breadcrumb['@id'] } }
                  : {}),
                ...(service
                  ? { mainEntity: { '@id': `${service.url}#service` } }
                  : {}),
              },
            ]
          : []),
        ...(breadcrumb ? [breadcrumb] : []),
        ...(service
          ? [
              {
                '@type': 'Service',
                '@id': `${service.url}#service`,
                ...service,
                provider: { '@id': organization['@id'] },
                ...(page
                  ? { mainEntityOfPage: { '@id': `${page.url}#webpage` } }
                  : {}),
                ...(this.company.serviceAreas.length
                  ? { areaServed: this.company.serviceAreas }
                  : {}),
              },
            ]
          : []),
      ],
    };
  }
}
