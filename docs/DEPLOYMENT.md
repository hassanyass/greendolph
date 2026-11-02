# Deployment and SEO configuration

The repository builds a static site into `dist/`. No deployment has been performed. Domain and hosting remain the user's choice.

## Environment settings

| Variable         | Default   | Meaning                                                             |
| ---------------- | --------- | ------------------------------------------------------------------- |
| `SITE_URL`       | Empty     | Confirmed HTTPS origin; no path, credentials or query.              |
| `SITE_ENV`       | `preview` | `preview` or `production`.                                          |
| `SITE_INDEXABLE` | `false`   | Explicitly allow indexing only for the finished production website. |

Copy `.env.example` to `.env` for local work. Configure the same variables in the eventual host's build environment. All values are build-time settings; changing them requires a rebuild. Do not place delivery credentials or other secrets in public configuration.

## Preview and production behavior

By default, pages carry `noindex, follow`, the sitemap contains no public page entries, and generated `_headers` applies `X-Robots-Tag: noindex, follow` on hosts that support it. Robots permits crawling so search engines can see noindex. A robots rule is not access control; host authentication is separate if a private review is needed.

Without a configured origin, canonical and social-image URLs are omitted rather than emitted with a fake hostname. With an origin, canonicals and alternates can be inspected even while indexing stays disabled.

For the finished website, configure the actual `SITE_URL`, set `SITE_ENV=production`, and deliberately set `SITE_INDEXABLE=true`. An invalid origin or an attempt to index a preview build fails with a clear error. Canonicals, en-AE/ar-AE/x-default alternates, Open Graph URLs and sitemap entries derive from that origin and the shared route catalog.

The current sitemap advertises the implemented English and Arabic Home, Services, About and Contact routes; Our Works stays excluded until actual projects are supplied. The 404 is always noindex and never canonicalizes to the home page. Structured data currently describes the Organization and WebSite when an origin exists; LocalBusiness is emitted only after a real address and phone are supplied in `CompanyProfile`. No fabricated ratings, opening hours or geographic coverage are inserted.

Before enabling indexing, complete the agreed pages and real enquiry path, confirm the company's trading name/address/phone and actual service coverage, and provide appropriate privacy text. Search Console verification and Google Business Profile management need the selected domain and company account access. No ranking guarantee is implied.

## Vercel peer review

Import `hassanyass/greendolph`, choose branch `main`, and leave Root Directory at the repository root (`.`). `vercel.json` sets the Astro framework, `npm run build`, output `dist`, trailing-slash routes and response headers. Use Node 22.x (22.23.4+) or a supported newer version. No Vercel adapter is needed for this static site.

For this review, use `SITE_ENV=preview` and `SITE_INDEXABLE=false` for both Production and Preview environments; leave `SITE_URL` unset until a stable review URL or production domain is chosen. The default build already uses these noindex settings, including on the main-branch deployment. Vercel does not consume the generated `_headers`; page robots metadata protects the review build and `vercel.json` supplies its response headers. Keep future public indexing controlled through the environment settings above.

After import, check `/`, `/ar/`, all navigation destinations and a missing URL. The quotation form remains a local request review until delivery is implemented. Deployment has not been performed from this workspace.

## Host settings

| Host                  | Build           | Output | Notes                                                                                                                                                                              |
| --------------------- | --------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Netlify               | `npm run build` | `dist` | `netlify.toml` pins Node; branch/PR preview contexts force noindex. Configure production variables in the dashboard. `_headers` and `404.html` are native static-host conventions. |
| Cloudflare Pages      | `npm run build` | `dist` | Set Node 22.23.4+ and the variables above. Set preview variables independently from production. The generated `_headers` is supported.                                             |
| Other static/CDN host | `npm run build` | `dist` | Configure HTTPS, trailing-slash directory routes, a real HTTP 404 using `404.html`, and equivalent response/cache headers. `_headers` is not universal.                            |

Deploy at the domain root. GitHub project-subpath hosting such as `/greendolph/` is not configured. Do not add an SPA catch-all rewrite: pages are generated HTML and missing paths should return 404.

The build produces cache and basic response headers. Hashed Astro assets are immutable; HTML revalidates; images use a shorter cache. Fonts currently use Google Fonts with local fallbacks. Self-hosted font subsets, measured Core Web Vitals and cross-browser checks can be finalized with the home-page implementation.

## Verify production SEO without choosing a domain

Use a reserved example hostname for this local test, never as a deployed business origin:

```powershell
$env:SITE_URL = 'https://example.com'
$env:SITE_ENV = 'production'
$env:SITE_INDEXABLE = 'true'
npm run build
npm run verify:build
Remove-Item Env:SITE_URL, Env:SITE_ENV, Env:SITE_INDEXABLE
npm run build
npm run verify:build
```

The final two commands restore the noindex preview artifact. GitHub Actions runs the same preview/production modes in separate jobs. Only the preview artifact is uploaded; no deployment credentials or release action are configured.

## References

- [Astro deployment](https://docs.astro.build/en/guides/deploy/)
- [Google: localized page versions](https://developers.google.com/search/docs/specialty/international/localized-versions)
- [Google: LocalBusiness structured data](https://developers.google.com/search/docs/appearance/structured-data/local-business)
- [Google: noindex](https://developers.google.com/search/docs/crawling-indexing/block-indexing)
- [Netlify file configuration](https://docs.netlify.com/build/configure-builds/file-based-configuration/)
- [Cloudflare Pages headers](https://developers.cloudflare.com/pages/configuration/headers/)

- [Vercel project configuration](https://vercel.com/docs/project-configuration/vercel-json)
