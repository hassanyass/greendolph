import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import { join } from 'node:path';

const read = (path) => readFile(join('dist', path), 'utf8');
const info = JSON.parse(await read('build-info.json'));
const sitemap = await read('sitemap.xml');
const robots = await read('robots.txt');
const headers = await read('_headers');

for (const [file, locale, dir, route] of [
  ['index.html', 'en', 'ltr', '/'],
  ['ar/index.html', 'ar', 'rtl', '/ar/'],
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
  if (info.origin) {
    assert.ok(
      html.includes(`rel="canonical" href="${info.origin}${route}"`),
      `${file}: canonical mismatch`,
    );
    for (const language of ['en-AE', 'ar-AE', 'x-default'])
      assert.ok(html.includes(`hreflang="${language}"`));
    assert.ok(
      html.includes(
        `property="og:image" content="${info.origin}/images/dubai.webp"`,
      ),
    );
    const jsonLd = html.match(
      /<script type="application\/ld\+json">([\s\S]*?)<\/script>/,
    );
    assert.ok(jsonLd, 'Configured domain should produce structured data');
    const schema = JSON.parse(jsonLd[1]);
    assert.ok(schema['@graph'].some((item) => item['@type'] === 'WebSite'));
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
    html.includes(`content="${info.indexable ? 'index' : 'noindex'}, follow`),
  );
  for (const match of html.matchAll(
    /(?:src|href)="(\/(?:_astro|brand|images)\/[^"?#]+)"/g,
  )) {
    await access(join('dist', match[1]));
  }
}
const notFound = await read('404.html');
assert.match(notFound, /noindex, follow/);
assert.doesNotMatch(notFound, /rel="canonical"/);
assert.match(robots, /Allow: \//);
if (info.indexable) {
  assert.equal((sitemap.match(/<url>/g) || []).length, 2);
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
