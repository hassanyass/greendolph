import assert from 'node:assert/strict';
import { readFile, access, readdir } from 'node:fs/promises';
import { join } from 'node:path';

const read = (path) => readFile(join('dist', path), 'utf8');
const info = JSON.parse(await read('build-info.json'));
const sitemap = await read('sitemap.xml');
const robots = await read('robots.txt');
const headers = await read('_headers');

const listSlugs = async (prefix) =>
  (await readdir(`dist/${prefix}services`, { withFileTypes: true }))
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();
const slugs = await listSlugs('');
assert.equal(slugs.length, 10);
assert.deepEqual(await listSlugs('ar/'), slugs);
const listProjects = async (prefix) =>
  (await readdir(`dist/${prefix}our-works`, { withFileTypes: true }))
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();
const projectSlugs = await listProjects('');
assert.deepEqual(projectSlugs, [
  'al-ajban',
  'al-awir',
  'nad-al-sheba',
  'sharjah',
]);
assert.deepEqual(await listProjects('ar/'), projectSlugs);
const titles = new Set();
const descriptions = new Set();
for (const [file, locale, dir, route, eligible, slug] of [
  ['index.html', 'en', 'ltr', '/', true],
  ['ar/index.html', 'ar', 'rtl', '/ar/', true],
  ['about/index.html', 'en', 'ltr', '/about/', true],
  ['ar/about/index.html', 'ar', 'rtl', '/ar/about/', true],
  ['contact/index.html', 'en', 'ltr', '/contact/', true],
  ['ar/contact/index.html', 'ar', 'rtl', '/ar/contact/', true],
  ['services/index.html', 'en', 'ltr', '/services/', true],
  ['ar/services/index.html', 'ar', 'rtl', '/ar/services/', true],
  ...slugs.flatMap((slug) => [
    [
      `services/${slug}/index.html`,
      'en',
      'ltr',
      `/services/${slug}/`,
      true,
      slug,
    ],
    [
      `ar/services/${slug}/index.html`,
      'ar',
      'rtl',
      `/ar/services/${slug}/`,
      true,
      slug,
    ],
  ]),
  ['our-works/index.html', 'en', 'ltr', '/our-works/', true],
  ['ar/our-works/index.html', 'ar', 'rtl', '/ar/our-works/', true],
  ...projectSlugs.flatMap((project) => [
    [
      `our-works/${project}/index.html`,
      'en',
      'ltr',
      `/our-works/${project}/`,
      project !== 'sharjah',
    ],
    [
      `ar/our-works/${project}/index.html`,
      'ar',
      'rtl',
      `/ar/our-works/${project}/`,
      project !== 'sharjah',
    ],
  ]),
]) {
  const html = await read(file);
  assert.match(html, new RegExp(`<html[^>]*lang="${locale}"`));
  assert.match(html, new RegExp(`<html[^>]*dir="${dir}"`));
  assert.equal(
    (html.match(/<h1\b/g) || []).length,
    1,
    `${file}: expected one main heading`,
  );
  assert.match(html, /<meta name="description" content="[^"]+"/);
  assert.match(html, /<meta name="robots" content="(?:index|noindex), follow/);
  if (slug) {
    const prefix = locale === 'ar' ? '/ar' : '';
    const alternatePrefix = locale === 'ar' ? '' : '/ar';
    assert.ok(html.includes(`href="${prefix}/contact/?service=${slug}"`));
    assert.ok(html.includes(`href="${alternatePrefix}/services/${slug}/"`));
    const title = html.match(/<title>(.+?)<\/title>/)?.[1];
    const description = html.match(
      /<meta name="description" content="([^"]+)"/,
    )?.[1];
    assert.ok(
      title && !titles.has(title),
      `${file}: duplicate or missing title`,
    );
    assert.ok(
      description && !descriptions.has(description),
      `${file}: duplicate or missing description`,
    );
    titles.add(title);
    descriptions.add(description);
  }
  if (info.origin && eligible) {
    assert.ok(
      html.includes(`rel="canonical" href="${info.origin}${route}"`),
      `${file}: canonical mismatch`,
    );
    const englishRoute = locale === 'ar' ? route.slice(3) : route;
    for (const [language, href] of [
      ['en', englishRoute],
      ['ar', `/ar${englishRoute}`],
      ['x-default', englishRoute],
    ]) {
      assert.ok(
        html.includes(`hreflang="${language}" href="${info.origin}${href}"`),
        `${file}: alternate mismatch`,
      );
    }
    const socialImage = html.match(/property="og:image" content="([^"]+)"/);
    assert.ok(socialImage, 'Social image must use the configured domain');
    assert.equal(new URL(socialImage[1]).origin, info.origin);
    await access(join('dist', new URL(socialImage[1]).pathname));
    const jsonLd = html.match(
      /<script type="application\/ld\+json">([\s\S]*?)<\/script>/,
    );
    assert.ok(jsonLd, 'Configured domain should produce structured data');
    const schema = JSON.parse(jsonLd[1]);
    assert.ok(schema['@graph'].some((item) => item['@type'] === 'WebSite'));
    if (slug) {
      assert.ok(
        schema['@graph'].some(
          (item) =>
            item['@type'] === 'Service' && item.url === info.origin + route,
        ),
      );
      if (info.indexable)
        assert.ok(sitemap.includes(`<loc>${info.origin}${route}</loc>`));
    }
    assert.ok(
      !jsonLd[1].includes('aggregateRating'),
      'Do not publish invented reviews',
    );
    assert.ok(
      !jsonLd[1].includes('PostalAddress'),
      'No address is confirmed yet',
    );
  } else {
    assert.doesNotMatch(html, /rel="canonical"|hreflang=/);
  }
  assert.ok(
    html.includes(
      `content="${info.indexable && eligible ? 'index' : 'noindex'}, follow`,
    ),
  );
  for (const match of html.matchAll(
    /(?:src|href)="(\/(?:_astro|brand|images)\/[^"?#]+)"/g,
  )) {
    await access(join('dist', match[1]));
  }
  for (const [, candidates] of html.matchAll(/srcset="([^"]+)"/g)) {
    for (const candidate of candidates.split(',')) {
      const [image] = candidate.trim().split(/\s+/);
      if (image.startsWith('/images/')) await access(join('dist', image));
    }
  }
}
for (const prefix of ['', 'ar/']) {
  const directory = await read(`${prefix}services/index.html`);
  const contact = await read(`${prefix}contact/index.html`);
  for (const id of ['ac', 'electrical', 'maintenance'])
    assert.ok(directory.includes(`id="${id}"`));
  for (const slug of slugs) {
    assert.ok(directory.includes(`href="/${prefix}services/${slug}/"`));
    assert.ok(contact.includes(`value="${slug}"`));
  }
}
for (const prefix of ['', 'ar/']) {
  const directory = await read(`${prefix}our-works/index.html`);
  const profile = directory.match(/href="(\/downloads\/[^"]+\.pdf)" download/);
  if (profile) {
    const pdf = await readFile(join('dist', profile[1]));
    assert.equal(pdf.subarray(0, 5).toString(), '%PDF-');
  }
  for (const project of projectSlugs) {
    const route = `/${prefix}our-works/${project}/`;
    const alternate = prefix ? '' : 'ar/';
    assert.ok(directory.includes(`href="${route}"`));
    const page = await read(`${route.slice(1)}index.html`);
    assert.ok(page.includes(`href="/${alternate}our-works/${project}/"`));
    assert.ok(page.includes(`href="/${prefix}services/air-conditioning/"`));
    assert.match(page, /<a[^>]+ data-project-photo(?:[=> ]|$)/);
    assert.match(page, /srcset="[^"]+"/);
    if (project === 'sharjah') {
      assert.ok(directory.includes('work-image-note'));
      assert.ok(page.includes('work-image-note'));
      assert.ok(!sitemap.includes(route));
    } else if (info.indexable) {
      assert.ok(sitemap.includes(`<loc>${info.origin}${route}</loc>`));
    }
  }
}

const notFound = await read('404.html');
assert.match(notFound, /noindex, follow/);
assert.doesNotMatch(notFound, /rel="canonical"/);
assert.match(robots, /Allow: \//);
if (info.indexable) {
  assert.equal((sitemap.match(/<url>/g) || []).length, 36);
  assert.ok(robots.includes(`Sitemap: ${info.origin}/sitemap.xml`));
  assert.doesNotMatch(headers, /X-Robots-Tag: noindex/);
} else {
  assert.doesNotMatch(sitemap, /<url>/);
  assert.doesNotMatch(robots, /Sitemap:/);
  assert.match(headers, /X-Robots-Tag: noindex/);
}
assert.match(headers, /max-age=31536000, immutable/);
console.log(
  `Verified ${info.environment} artifact: English, Arabic, metadata, sitemap, robots, 404 and local assets.`,
);
