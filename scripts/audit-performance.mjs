import { spawn } from 'node:child_process';
import { readFile, mkdir, writeFile, readdir, stat } from 'node:fs/promises';
import { resolve, join, extname, relative } from 'node:path';
import { gzipSync } from 'node:zlib';

// Audit tooling only: it does not modify the website or submit any form.
const args = Object.fromEntries(
  process.argv.slice(2).map((argument) => {
    const separator = argument.indexOf('=');
    if (separator < 1) throw new Error('Use --name=value arguments.');
    return [argument.slice(2, separator), argument.slice(separator + 1)];
  }),
);
const origin = new URL(args.origin || 'http://127.0.0.1:4328');
if (!['http:', 'https:'].includes(origin.protocol) || origin.pathname !== '/') {
  throw new Error('origin must be an HTTP(S) origin without a path.');
}
const runs = Number(args.runs || 3);
if (!Number.isInteger(runs) || runs < 1 || runs > 5) {
  throw new Error('runs must be between 1 and 5.');
}
const output = resolve(args.out || 'docs/previews/performance-baseline');
const previewRoot = resolve('docs/previews');
if (
  !output.startsWith(previewRoot + '\\') &&
  !output.startsWith(previewRoot + '/')
) {
  throw new Error('out must be inside the ignored docs/previews directory.');
}
const lighthouse = resolve(
  args.lighthouse ||
    'node_modules/.cache/launch-audit/node_modules/lighthouse/cli/index.js',
);
const chrome = args.chrome || process.env.CHROME_PATH;
if (!chrome)
  throw new Error('Pass --chrome=path-to-Chrome or set CHROME_PATH.');
await mkdir(output, { recursive: true });

const pages = [
  ['home', '/'],
  ['service', '/services/air-conditioning/'],
  ['works', '/our-works/'],
  ['project', '/our-works/nad-al-sheba/'],
  ['contact', '/contact/'],
];
let targets = pages.flatMap(([name, path]) =>
  ['en', 'ar'].map((locale) => ({
    name: `${name}-${locale}-mobile`,
    path: locale === 'en' ? path : `/ar${path}`,
    desktop: false,
  })),
);
targets.push(
  { name: 'home-en-desktop', path: '/', desktop: true },
  { name: 'home-ar-desktop', path: '/ar/', desktop: true },
);
if (args.limit) targets = targets.slice(0, Number(args.limit));
const median = (values) => {
  const sorted = [...values].sort((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);
  return sorted.length % 2
    ? sorted[middle]
    : (sorted[middle - 1] + sorted[middle]) / 2;
};
const summary = {
  measuredAt: new Date().toISOString(),
  origin: origin.origin,
  node: process.version,
  note: 'Local static preview; simulated Lighthouse throttling. Not a UAE CDN or field-INP measurement. Preview noindex is intentional.',
  runs,
  targets: [],
};

for (const target of targets) {
  const samples = [];
  for (let run = 1; run <= runs; run++) {
    const file = join(output, `${target.name}-${run}.json`);
    const options = [
      lighthouse,
      new URL(target.path, origin).href,
      '--chrome-flags=--headless=new --no-sandbox --disable-dev-shm-usage',
      '--only-categories=performance,accessibility,best-practices',
      '--output=json',
      `--output-path=${file}`,
      '--quiet',
      ...(target.desktop ? ['--preset=desktop'] : []),
    ];
    await new Promise((done, fail) => {
      const child = spawn(process.execPath, options, {
        env: { ...process.env, CHROME_PATH: chrome },
        stdio: ['ignore', 'ignore', 'pipe'],
        windowsHide: true,
      });
      let errors = '';
      child.stderr.on('data', (chunk) => {
        errors += chunk;
      });
      const timeout = setTimeout(() => {
        child.kill();
        fail(new Error(`${target.name} exceeded the 180-second audit limit.`));
      }, 180_000);
      child.on('error', (error) => {
        clearTimeout(timeout);
        fail(error);
      });
      child.on('close', (code) => {
        clearTimeout(timeout);
        if (code === 0) done();
        else
          fail(
            new Error(
              `${target.name} failed (${code}): ${errors.slice(-2000)}`,
            ),
          );
      });
    });
    const report = JSON.parse(await readFile(file, 'utf8'));
    if (report.runtimeError)
      throw new Error(JSON.stringify(report.runtimeError));
    summary.lighthouse = report.lighthouseVersion;
    summary.browser = report.environment.hostUserAgent;
    const audit = report.audits;
    samples.push({
      performance: report.categories.performance.score * 100,
      accessibility: report.categories.accessibility.score * 100,
      bestPractices: report.categories['best-practices'].score * 100,
      lcpMs: audit['largest-contentful-paint'].numericValue,
      fcpMs: audit['first-contentful-paint'].numericValue,
      tbtMs: audit['total-blocking-time'].numericValue,
      cls: audit['cumulative-layout-shift'].numericValue,
      transferBytes: audit['total-byte-weight'].numericValue,
      resources: audit['resource-summary']?.details?.items,
      failedAudits: Object.values(audit)
        .filter((item) => item.score !== null && item.score < 1)
        .map(({ id, title, score, numericValue, displayValue }) => ({
          id,
          title,
          score,
          numericValue,
          displayValue,
        })),
      settings: report.configSettings,
    });
    console.log(
      `${target.name} ${run}/${runs}: ${Math.round(samples.at(-1).performance)}; LCP ${Math.round(samples.at(-1).lcpMs)} ms`,
    );
  }
  const medians = Object.fromEntries(
    [
      'performance',
      'accessibility',
      'bestPractices',
      'lcpMs',
      'fcpMs',
      'tbtMs',
      'cls',
      'transferBytes',
    ].map((key) => [key, median(samples.map((sample) => sample[key]))]),
  );
  summary.targets.push({ ...target, medians, samples });
  await writeFile(
    join(output, 'summary.json'),
    JSON.stringify(summary, null, 2),
  );
}

const files = [];
async function inventory(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) await inventory(path);
    else {
      const info = await stat(path);
      const text = ['.html', '.css', '.js', '.svg', '.json', '.xml'].includes(
        extname(path),
      );
      files.push({
        path: relative(resolve('dist'), path).replaceAll('\\', '/'),
        bytes: info.size,
        ...(text
          ? { gzipEstimate: gzipSync(await readFile(path)).length }
          : {}),
      });
    }
  }
}
await inventory(resolve('dist'));
await writeFile(
  join(output, 'asset-inventory.json'),
  JSON.stringify(files, null, 2),
);
console.log(
  `Saved ${summary.targets.length * runs} reports and ${files.length} asset measurements in ${relative(process.cwd(), output)}.`,
);
