import { writeFile, readFile } from 'node:fs/promises';
import { loadEnv } from 'vite';
import { SiteConfiguration } from '../src/config/site-configuration.mjs';

const site = new SiteConfiguration(
  loadEnv('production', process.cwd(), 'SITE_'),
);
const indexingHeader = site.indexable
  ? ''
  : '\n  X-Robots-Tag: noindex, follow';
const headers = `/*
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  X-Frame-Options: DENY
  Permissions-Policy: camera=(), microphone=(), geolocation=()
  Cache-Control: public, max-age=0, must-revalidate${indexingHeader}

/_astro/*
  Cache-Control: public, max-age=31536000, immutable

/images/*
  Cache-Control: public, max-age=604800

/brand/*
  Cache-Control: public, max-age=86400
`;
await writeFile('dist/_headers', headers);
// Record only non-secret deployment facts for artifact verification.
await writeFile(
  'dist/build-info.json',
  JSON.stringify(
    {
      environment: site.environment,
      indexable: site.indexable,
      origin: site.origin,
      version: JSON.parse(await readFile('package.json', 'utf8')).version,
    },
    null,
    2,
  ),
);
console.log(
  `Static deployment prepared (${site.environment}, indexing ${site.indexable ? 'enabled' : 'disabled'}).`,
);
