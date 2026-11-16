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

For the finished website, configure the approved HTTPS .com origin as `SITE_URL`, set `SITE_ENV=production`, and deliberately set `SITE_INDEXABLE=true`. An invalid origin or an attempt to index a preview build fails with a clear error. Canonicals, en/ar/x-default alternates, Open Graph URLs and sitemap entries derive from that origin and the shared route catalog.

The current sitemap advertises the implemented English and Arabic Home, Services, the ten service detail pages, About and Contact routes; Our Works stays excluded until actual projects are supplied. The 404 is always noindex and never canonicalizes to the home page. Structured data currently describes the Organization and WebSite when an origin exists, with Service on each service detail page; LocalBusiness is emitted only after a real address and phone are supplied in `CompanyProfile`. No fabricated ratings, opening hours or geographic coverage are inserted.

Before enabling indexing, approve the English and Arabic licence transcription, complete the agreed pages and real enquiry path, confirm the company's trading name/address/phone and actual service coverage, and provide appropriate privacy text. Search Console verification and Google Business Profile management need the selected domain and company account access. No ranking guarantee is implied.

## Publish on a static host

Run `npm ci`, `npm run build` and `npm run verify:build` using the pinned Node version. Upload the contents of `dist/` to the host's document root. Serve directory URLs with their index pages, preserve trailing slashes and configure `404.html` with status 404. Configure HTTPS and redirect other public hostnames to the canonical origin. Keep the peer review deployment in preview mode until launch approval.

After launch, verify the .com in Google Search Console and Bing Webmaster Tools, submit `/sitemap.xml` to both and verify crawling. Track UAE and Saudi search impressions as separate markets. The public site describes verified UAE operations. Add country-specific pages and listings only when Saudi operations are approved.

## Vercel peer review

Import `hassanyass/greendolph`, choose branch `main`, and leave Root Directory at the repository root (`.`). `vercel.json` sets the Astro framework, `npm run build`, output `dist`, trailing-slash routes and response headers. Use Node 22.x (22.23.4+) or a supported newer version. No Vercel adapter is needed for this static site.

For this review, use `SITE_ENV=preview` and `SITE_INDEXABLE=false` for both Production and Preview environments; leave `SITE_URL` unset until a stable review URL or production domain is chosen. The default build already uses these noindex settings, including on the main-branch deployment. Vercel does not consume the generated `_headers`; page robots metadata protects the review build and `vercel.json` supplies its response headers. Keep future public indexing controlled through the environment settings above.

After import, check `/`, `/ar/`, all navigation destinations and a missing URL. The quotation form uses local review when the Formspree form ID is blank. Deployment has not been performed from this workspace.

## Enable quotation delivery and contact links

1. Create a company-owned Formspree form and verify the inbox under Target Email. Copy only its public form ID from Integration into `FORMSPREE_FORM_ID` and rebuild. A blank ID enables local review. Use a separate test form for reviewer deployments where email delivery is needed.
2. Submit a test quotation from each language and confirm receipt in the inbox. The website reports accepted submission after a successful provider response. The form includes Formspree’s `_gotcha` filter. Confirm the service’s spam controls, expected quota, and retention settings in the account before launch.
3. Set `CONTACT_WHATSAPP` to the verified WhatsApp number in international format (a plus sign and digits) to enable the Contact action and mobile shortcut. The licence phone remains a separate call link.
4. Supply `CONTACT_EMAIL`, `CONTACT_INSTAGRAM`, `CONTACT_FACEBOOK` and `CONTACT_TIKTOK` when ready. The social settings take full HTTPS profile URLs. Leave unknown values blank. See `.env.example` for all settings. Rebuild after any changes and verify each public link.
5. If the chosen host adds a Content Security Policy, allow `https://formspree.io` in both `connect-src` and `form-action`. The standard form action is the fallback for browsers without JavaScript.

- [Formspree form setup](https://help.formspree.io/articles/building-your-form/building-an-html-form/)
- [Formspree honeypot filtering](https://help.formspree.io/articles/building-your-form/honeypot-spam-filtering/)
- [WhatsApp click to chat](https://faq.whatsapp.com/5913398998672934)

## Host settings

| Host                  | Build           | Output | Notes                                                                                                                                                                              |
| --------------------- | --------------- | ------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Netlify               | `npm run build` | `dist` | `netlify.toml` pins Node; branch/PR preview contexts force noindex. Configure production variables in the dashboard. `_headers` and `404.html` are native static-host conventions. |
| Cloudflare Pages      | `npm run build` | `dist` | Set Node 22.23.4+ and the variables above. Set preview variables independently from production. The generated `_headers` is supported.                                             |
| Other static/CDN host | `npm run build` | `dist` | Configure HTTPS, trailing-slash directory routes, a real HTTP 404 using `404.html`, and equivalent response/cache headers. `_headers` is not universal.                            |

Deploy at the domain root. GitHub project-subpath hosting such as `/greendolph/` is not configured. Do not add an SPA catch-all rewrite: pages are generated HTML and missing paths should return 404.

The build produces cache and basic response headers. Hashed Astro assets are immutable; HTML revalidates; images use a shorter cache. Fonts currently use Google Fonts with local fallbacks. Measure Core Web Vitals and check supported browsers during final launch verification.

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
