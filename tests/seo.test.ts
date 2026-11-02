import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  StructuredDataBuilder,
  type BusinessIdentity,
} from '../src/domain/structured-data.ts';
import { SiteConfiguration } from '../src/config/site-configuration.mjs';
import { routes } from '../src/domain/routes.ts';
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
    '/images/dubai.webp',
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

test('locale pages have distinct canonicals and reciprocal UAE alternates', () => {
  const english = new PageMetadata(
    production(),
    routes.page('home'),
    'en',
    'English',
    'Description',
    '/images/dubai.webp',
  );
  const arabic = new PageMetadata(
    production(),
    routes.page('home'),
    'ar',
    'العربية',
    'الوصف',
    '/images/dubai.webp',
  );
  assert.equal(english.canonical, 'https://example.com/');
  assert.equal(arabic.canonical, 'https://example.com/ar/');
  assert.deepEqual(english.alternates, arabic.alternates);
  assert.deepEqual(
    arabic.alternates.map((item) => item.language),
    ['en-AE', 'ar-AE', 'x-default'],
  );
  assert.equal(arabic.image, 'https://example.com/images/dubai.webp');
});

test('sitemap contains only implemented, indexable locale routes', () => {
  const xml = new SitemapGenerator(production(), [
    ...routes.pages,
    { key: 'notFound', paths: { en: '/404/', ar: '/404/' }, indexable: false },
  ]).render();
  assert.equal((xml.match(/<url>/g) || []).length, 2);
  assert.match(xml, /<loc>https:\/\/example.com\/ar\/<\/loc>/);
  assert.doesNotMatch(xml, /404|services/);
});

test('unindexable pages never canonicalize to the home page', () => {
  const page = new PageMetadata(
    production(),
    { key: 'notFound', paths: { en: '/404/', ar: '/404/' }, indexable: false },
    'en',
    '404',
    'Not found',
    '/images/dubai.webp',
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
  assert.equal(routes.homeAnchor('ar', 'services'), '/ar/#services');
  assert.equal(routes.alternate('home', 'ar'), '/');
  assert.throws(() => production().absolute('//another.example/'));
});
