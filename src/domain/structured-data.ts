import { SiteConfiguration } from '../config/site-configuration.mjs';

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

  build(service?: { name: string; description: string; url: string }) {
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
        ...(service
          ? [
              {
                '@type': 'Service',
                '@id': `${service.url}#service`,
                ...service,
                provider: { '@id': organization['@id'] },
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
