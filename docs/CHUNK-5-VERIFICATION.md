# Chunk 5 — Technical and UAE search

Completed 19 November 2026. Ready for review; Chunk 6 has not started. No live domain, search account, Business Profile or sitemap submission was changed.

## Delivered

- Central bilingual search presentation for all implemented page types in `src/config/search-content.ts`, with distinct service titles/descriptions and clearer H1s. The configured brand name is appended once, instead of being repeated across metadata fields in interface copy. Short navigation labels and exact licence titles remain separate.
- Visible Home → Services → Service and Home → Our Works → Project trails. Their localized source items also produce the BreadcrumbList graph, avoiding independent copies of labels or URLs. Parent links work without JavaScript, the current item uses `aria-current`, and arrows follow text direction.
- Linked Organization, WebSite, WebPage, Service and BreadcrumbList entities when an origin is configured. Page URLs, names, descriptions and languages agree with page metadata. Services use the visible heading, licensed title as an alternate name, short service type and the actual provider reference. The organization uses one stable official logo across languages.
- Only verified/configured phone, email, public address, service areas and social profiles are eligible for business fields. Current output remains Organization: address, service areas, hours, ratings and unknown profiles are not invented. No LocalBusiness, country expansion, FAQ rich-result or review claims were added.
- Contextual project links distinguish documented gypsum finishes, AC, flooring, sanitary installation and painting. They do not relabel projects as specialist equipment, plaster, tiling, cleaning or engraving case studies. Existing English/Arabic photo descriptions remain accurate; Twitter image alternative text now accompanies the existing Open Graph image description.
- [SEARCH-ACCOUNT-SETUP.md](SEARCH-ACCOUNT-SETUP.md) covers company-owned Search Console/Bing access, domain ownership, Google Business Profile eligibility, verified business facts, sitemap submission and 30/60/90-day UAE measurement. It explicitly separates account verification from enabling indexing and from ranking outcomes.

## Preview protection

Default preview metadata remains `noindex, follow`, with no invented canonical origin, no JSON-LD absolute identifiers and an empty sitemap. Configured-origin previews can expose canonicals/alternates/schema for inspection while remaining noindex with no sitemap entries. The 404 and illustrative Sharjah pages remain noindex even in the production simulation.

Generated Cloudflare/Netlify headers cover all preview assets, including the public PDF. The Vercel review preset now explicitly applies `X-Robots-Tag: noindex, follow` across all files. If Vercel is selected for the final public site, its static review header must be removed at the approved launch while retaining preview-domain protection. The release handover and deployment guide explain this provider-specific distinction; production environment flags do not override a static response header.

## Automated verification

Fourteen unit tests pass, including new checks for localized breadcrumb routes, page/service/provider relationships and configured-preview index protection. Astro reports zero errors/warnings/hints. All thirty-nine static pages build and final preview artifact verification passes.

The build verifier now checks unique titles and descriptions across all thirty-eight locale pages, rather than only the service subset. It checks WebPage metadata against rendered tags, one consistent organization identity, and exact agreement between visible breadcrumb names/links and schema. Robots directives are parsed individually, preserving the existing `max-image-preview:large` directive without accepting conflicting `index`/`noindex` values. PDF download/artifact checks remain intact.

| Local build mode                         | HTML pages | Eligible index directives | Canonicals | Visible trails | Breadcrumb graphs | Service graphs | Sitemap URLs |
| ---------------------------------------- | ---------: | ------------------------: | ---------: | -------------: | ----------------: | -------------: | -----------: |
| Reserved `example.com`, production flags |         39 |                        36 |         36 |             28 |                26 |             20 |           36 |
| Reserved `example.com`, preview flags    |         39 |                         0 |         36 |             28 |                26 |             20 |            0 |
| Restored default preview, no origin      |         39 |                         0 |          0 |             28 |                 0 |              0 |            0 |

The two visible Sharjah trails remain useful navigation but produce no indexable-page schema. The production simulation has thirty-six WebPage graphs; all use the same website/provider IDs and their own localized canonical URL. These checks use a reserved example origin only, not a chosen business domain or live search submission.

## Layout and navigation

Chromium 147 checks cover all twenty service pages and eight project pages at 320, 390, 768 and 1440 px: **112 combinations**. All passed page/heading/breadcrumb overflow checks, locale/parent-link checks and preview robots checks, with no browser script errors. Parent links were activated by keyboard on phone-width pages. Native touch navigation with JavaScript disabled passed in both languages.

Phone/laptop screenshots were captured for every detail page; representative full-size views and all desktop overview sheets were inspected for heading wraps, direction, spacing and image placement. Existing service quote destinations and FAQs remain present. No navigation library, motion change, new image asset or tracking script was introduced.

Physical phones, WebKit, live CDN responses and Google's live rich-results/URL inspection tools remain launch checks. Local validation establishes rendered consistency and factual scope; it does not claim external rich-result eligibility, verified account ownership or ranking improvements already observed.

Raw mode summaries, screenshots and browser scripts remain ignored under `docs/previews/chunk-5/`.

## Primary guidance checked

- [Google breadcrumbs](https://developers.google.com/search/docs/appearance/structured-data/breadcrumb), [Organization](https://developers.google.com/search/docs/appearance/structured-data/organization), [LocalBusiness](https://developers.google.com/search/docs/appearance/structured-data/local-business).
- [Google localized versions](https://developers.google.com/search/docs/specialty/international/localized-versions) and [noindex](https://developers.google.com/search/docs/crawling-indexing/block-indexing).
- [Schema.org Service](https://schema.org/Service) and [WebPage](https://schema.org/WebPage) vocabulary; a supported vocabulary property is not a promise of a Google rich-result feature.
- Search-account and local-business primary sources are linked beside the corresponding steps in the handover guide. Bing's help rendering was JavaScript-dependent; its official search result exposed the import option, and the guide directs the owner to the live account's offered verification method.
