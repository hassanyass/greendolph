import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  StructuredDataBuilder,
  type BusinessIdentity,
} from '../src/domain/structured-data.ts';
import { SiteConfiguration } from '../src/config/site-configuration.mjs';
import { projects } from '../src/config/projects.ts';
import { routes } from '../src/domain/routes.ts';
import { breadcrumbsFor } from '../src/domain/breadcrumbs.ts';
import {
  PageMetadata,
  SitemapGenerator,
  serializeJsonLd,
} from '../src/domain/seo.ts';

const production = () =>
  new SiteConfiguration({
    SITE_URL: 'https://example.com',
    SITE_ENV: 'production',
    SITE_INDEXABLE: 'true',
  });

const identity: BusinessIdentity = {
  name: 'Example company',
  arabicName: 'شركة تجريبية',
  phone: null,
  email: null,
  address: null,
  serviceAreas: [],
  socialProfiles: [],
};

test('unknown business facts are omitted rather than presented as LocalBusiness claims', () => {
  const schema = new StructuredDataBuilder(
    production(),
    identity,
    '/brand/logo.svg',
  ).build()!;
  assert.equal(schema['@graph'][0]['@type'], 'Organization');
  assert.doesNotMatch(
    JSON.stringify(schema),
    /PostalAddress|telephone|areaServed|aggregateRating|openingHours/,
  );
  assert.equal(
    new StructuredDataBuilder(
      new SiteConfiguration(),
      identity,
      '/brand/logo.svg',
    ).build(),
    null,
  );
});

test('confirmed local business details use the same origin and company model', () => {
  const profile: BusinessIdentity = {
    ...identity,
    phone: '+971500000000',
    address: {
      streetAddress: 'Example address',
      addressLocality: 'Dubai',
      addressRegion: 'Dubai',
      addressCountry: 'AE',
    },
    serviceAreas: ['Dubai'],
  };
  const schema = new StructuredDataBuilder(
    production(),
    profile,
    '/brand/logo.svg',
  ).build()!;
  assert.equal(schema['@graph'][0]['@type'], 'LocalBusiness');
  assert.match(
    JSON.stringify(schema),
    /https:\/\/example.com\/brand\/logo.svg/,
  );
  assert.match(JSON.stringify(schema), /PostalAddress/);
});

test('unconfigured builds stay out of search without inventing a canonical domain', () => {
  const site = new SiteConfiguration();
  const page = new PageMetadata(
    site,
    routes.page('home'),
    'en',
    'Home',
    'Description',
    '/images/site-installation.webp',
  );
  assert.equal(page.canonical, null);
  assert.equal(page.robots, 'noindex, follow');
  assert.deepEqual(page.alternates, []);
  assert.doesNotMatch(
    new SitemapGenerator(site, routes.pages).render(),
    /<url>/,
  );
});

test('indexing cannot be enabled without a production origin', () => {
  assert.throws(() => new SiteConfiguration({ SITE_INDEXABLE: 'true' }));
  assert.throws(
    () =>
      new SiteConfiguration({
        SITE_URL: 'https://example.com',
        SITE_INDEXABLE: 'true',
      }),
  );
  for (const url of [
    'http://example.com',
    'https://example.com/subpage',
    'https://user:password@example.com',
    'https://example.com/?test=1',
  ]) {
    assert.throws(() => new SiteConfiguration({ SITE_URL: url }));
  }
  assert.throws(() => new SiteConfiguration({ SITE_INDEXABLE: 'yes' }));
});

test('locale pages have distinct canonicals and reciprocal language alternates', () => {
  const english = new PageMetadata(
    production(),
    routes.page('home'),
    'en',
    'English',
    'Description',
    '/images/site-installation.webp',
  );
  const arabic = new PageMetadata(
    production(),
    routes.page('home'),
    'ar',
    'العربية',
    'الوصف',
    '/images/site-installation.webp',
  );
  assert.equal(english.canonical, 'https://example.com/');
  assert.equal(arabic.canonical, 'https://example.com/ar/');
  assert.deepEqual(english.alternates, arabic.alternates);
  assert.deepEqual(
    arabic.alternates.map((item) => item.language),
    ['en', 'ar', 'x-default'],
  );
  assert.equal(
    arabic.image,
    'https://example.com/images/site-installation.webp',
  );
});

test('sitemap contains only implemented, indexable locale routes', () => {
  const xml = new SitemapGenerator(production(), [
    ...routes.pages,
    { key: 'notFound', paths: { en: '/404/', ar: '/404/' }, indexable: false },
  ]).render();
  assert.equal((xml.match(/<url>/g) || []).length, 36);
  assert.match(xml, /<loc>https:\/\/example.com\/ar\/<\/loc>/);
  assert.match(xml, /<loc>https:\/\/example.com\/services\/<\/loc>/);
  assert.doesNotMatch(xml, /404|our-works\/sharjah/);
  for (const project of projects.filter((project) => project.indexable)) {
    for (const path of Object.values(routes.project(project.id).paths)) {
      assert.ok(xml.includes(`<loc>https://example.com${path}</loc>`));
    }
  }
});

test('unindexable pages never canonicalize to the home page', () => {
  const page = new PageMetadata(
    production(),
    { key: 'notFound', paths: { en: '/404/', ar: '/404/' }, indexable: false },
    'en',
    '404',
    'Not found',
    '/images/site-installation.webp',
  );
  assert.equal(page.canonical, null);
  assert.equal(page.robots, 'noindex, follow');
  assert.deepEqual(page.alternates, []);
});

test('structured data cannot close its script element through content', () => {
  const data = {
    name: '</script><script>alert(1)</script>',
    description: 'العربية',
  };
  const json = serializeJsonLd(data);
  assert.doesNotMatch(json, /</);
  assert.deepEqual(JSON.parse(json), data);
});

test('route helpers preserve the language and avoid root-relative cross-locale leaks', () => {
  assert.equal(routes.path('services', 'ar'), '/ar/services/');
  assert.equal(routes.alternate('home', 'ar'), '/');
  assert.throws(() => production().absolute('//another.example/'));
});

test('navigation destinations and service enquiries retain the requested language', () => {
  assert.equal(routes.path('services', 'ar'), '/ar/services/');
  assert.equal(routes.path('works', 'en'), '/our-works/');
  assert.equal(routes.alternate('services', 'en'), '/ar/services/');
  assert.equal(
    routes.enquiry('ar', 'electrical'),
    '/ar/contact/?service=electrical',
  );
});

test('all primary navigation destinations are standalone locale pages', () => {
  for (const locale of ['en', 'ar'] as const) {
    for (const key of [
      'home',
      'services',
      'works',
      'about',
      'contact',
    ] as const) {
      assert.ok(
        routes.path(key, locale).startsWith(locale === 'ar' ? '/ar/' : '/'),
      );
      assert.ok(!routes.path(key, locale).includes('#'));
    }
  }
});

test('detail breadcrumbs follow real locale routes, including an unindexed project', () => {
  for (const locale of ['en', 'ar'] as const) {
    const service = routes.service('air-conditioning');
    const trail = breadcrumbsFor(service, locale);
    assert.deepEqual(
      trail.map(({ path }) => path),
      [
        routes.path('home', locale),
        routes.path('services', locale),
        service.paths[locale],
      ],
    );
    const project = routes.project('sharjah');
    assert.deepEqual(
      breadcrumbsFor(project, locale).map(({ path }) => path),
      [
        routes.path('home', locale),
        routes.path('works', locale),
        project.paths[locale],
      ],
    );
    assert.equal(project.indexable, false);
  }
  assert.deepEqual(breadcrumbsFor(routes.page('home'), 'en'), []);
});

test('page, service and breadcrumb entities share canonical URLs and the verified provider', () => {
  const site = production();
  const page = routes.service('air-conditioning');
  const breadcrumbs = breadcrumbsFor(page, 'ar');
  const url = site.absolute(page.paths.ar)!;
  const schema = new StructuredDataBuilder(
    site,
    identity,
    '/brand/logo.svg',
  ).build(
    {
      name: 'التكييف والتهوية',
      alternateName: 'Licensed activity',
      serviceType: 'AC',
      description: 'Service scope',
      url,
    },
    {
      title: 'عنوان الصفحة',
      description: 'Service scope',
      url,
      locale: 'ar',
      breadcrumbs,
    },
  )!;
  const graph = schema['@graph'] as Record<string, unknown>[];
  const webpage = graph.find((item) => item['@type'] === 'WebPage');
  const service = graph.find((item) => item['@type'] === 'Service');
  const breadcrumb = graph.find((item) => item['@type'] === 'BreadcrumbList');
  assert.equal(webpage?.['@id'], `${url}#webpage`);
  assert.equal(webpage?.inLanguage, 'ar');
  assert.deepEqual(webpage?.isPartOf, {
    '@id': 'https://example.com/#website',
  });
  assert.deepEqual(webpage?.mainEntity, { '@id': `${url}#service` });
  assert.deepEqual(webpage?.breadcrumb, { '@id': `${url}#breadcrumb` });
  assert.deepEqual(service?.provider, {
    '@id': 'https://example.com/#organization',
  });
  assert.equal(service?.name, 'التكييف والتهوية');
  assert.equal(service?.alternateName, 'Licensed activity');
  assert.deepEqual(
    breadcrumb?.itemListElement,
    breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: site.absolute(item.path),
    })),
  );
  assert.doesNotMatch(
    JSON.stringify(schema),
    /PostalAddress|areaServed|openingHours|aggregateRating|FAQPage/,
  );
});

test('a configured preview keeps noindex while supporting canonical and breadcrumb inspection', () => {
  const site = new SiteConfiguration({
    SITE_URL: 'https://example.com',
    SITE_ENV: 'preview',
    SITE_INDEXABLE: 'false',
  });
  const page = routes.service('painting');
  const metadata = new PageMetadata(
    site,
    page,
    'en',
    'Painting',
    'Description',
    '/brand/share.jpg',
    true,
    breadcrumbsFor(page, 'en'),
  );
  assert.equal(metadata.robots, 'noindex, follow');
  assert.equal(metadata.canonical, 'https://example.com/services/painting/');
  assert.equal(metadata.breadcrumbs.length, 3);
  assert.doesNotMatch(
    new SitemapGenerator(site, routes.pages).render(),
    /<url>/,
  );
  assert.equal(
    new PageMetadata(production(), page, 'en', '', '', '').robots,
    'index, follow, max-image-preview:large',
  );
});
