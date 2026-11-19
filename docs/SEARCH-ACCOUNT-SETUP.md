# UAE search setup and owner handover

Prepared 19 November 2026 for Chunk 5. This is a setup guide, not a record of completed account verification, listing creation or sitemap submission. No company search account was accessed. Production indexing remains disabled until the agreed launch sign-off.

## Information to confirm

| Item                      | Current state / next action                                                                                                                                  |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Production origin         | Choose the final HTTPS `.com` and canonical hostname; `SITE_URL` remains configurable.                                                                       |
| Account owner             | Use a company-controlled Google account and Bing account. Give collaborators their own access rather than sharing the owner's login.                         |
| Company identity          | Confirm the public trading name and licence transcription; keep the same real-world name across the website, profile and listings.                           |
| Phone                     | Website call number is supplied; WhatsApp currently uses the owner's temporary number choice. Confirm routing before launch.                                 |
| Base and customer visits  | Confirm whether customers visit a staffed business location or the business travels to them. Do not infer a public office from a licence or project address. |
| Actual coverage           | Confirm the cities/areas served. UAE-wide research and project locations do not establish all-emirates coverage.                                             |
| Hours, email and profiles | Supply verified public details when ready. Unknown fields remain omitted, not filled with examples.                                                          |
| Existing Business Profile | Check for an existing owned/unclaimed profile before creating one. Record its real URL and owner.                                                            |

## Google Search Console

1. Once the domain is chosen, open [Search Console](https://search.google.com/search-console/welcome) in the company account and add a **Domain property** using the bare domain, without `https://` or a path. It covers protocols and subdomains. Domain ownership uses DNS verification. [Google property guidance](https://support.google.com/webmasters/answer/34592?hl=en)
2. Copy the exact verification record supplied by Google into the domain's authoritative DNS provider, then complete verification. Hosting on Cloudflare Pages does not by itself mean Cloudflare manages the DNS. Keep the verification record. This needs no website token or password in the repository. [Ownership verification](https://support.google.com/webmasters/answer/9008080?hl=en)
3. Check owner/user access. An optional URL-prefix property can isolate the final HTTPS hostname, but it is not a substitute for deciding the canonical production origin. [Property types](https://support.google.com/webmasters/answer/34592?hl=en)
4. Keep review deployments noindex. Adding a property is ownership/measurement setup; it does not make a preview ready for indexing.
5. After final launch approval, check the live `/sitemap.xml` and submit it through the property's Sitemaps report. The current production route set has 36 eligible HTML URLs: five main pages, ten services and three real photographic projects, each in English and Arabic. Sharjah and the 404 are excluded; the PDF is linked from Our Works rather than added as a duplicate language pair. [Sitemap submission](https://support.google.com/webmasters/answer/7451001?hl=en)
6. Inspect representative live URLs: both homes, one service in each language and a real project. Check fetch status, rendered content, allowed indexing and the selected canonical. Check the live breadcrumbs with Google's [Rich Results Test](https://search.google.com/test/rich-results) and broader vocabulary with [Schema.org Validator](https://validator.schema.org/). A local build cannot complete those live checks.

Do not repeatedly request indexing of every page or treat submission as a ranking guarantee. Use inspection to resolve actual fetch, canonical or exclusion issues before requesting indexing of a corrected page.

## Bing Webmaster Tools

Open [Bing Webmaster Tools](https://www.bing.com/webmasters/) in the company account. Use its Google Search Console import option after Google ownership is verified, or follow the site's current manual ownership-verification workflow. Check the permissions requested before connecting the accounts. Bing's help page depends on JavaScript; use the live dashboard's offered method and exact verification values. [Bing ownership help](https://www.bing.com/webmasters/help/add-and-verify-site-12184f8b)

After the approved launch, submit the final-origin sitemap and check its processing status, URL inspection and indexing reports. Keep the same canonical hostname as the website and Google property. [Bing sitemap guidance](https://www.bing.com/webmasters/help/Sitemaps-3b5cf6ed)

## Google Business Profile for UAE customers

Confirm eligibility and claim an existing profile where appropriate. Use the genuine business name, not a name expanded with locations and services. Choose the most specific available UAE category matching the actual main business, with only relevant secondary categories; confirm choices in the live account. Keep contact and business details consistent with the site. [Business representation rules](https://support.google.com/business/answer/3038177?hl=en)

If staff travel to customers and customers are not served at the base, use the service-area setup and hide the address. A project location is not a branch. Select only real operating areas; do not add Saudi locations or fabricate an office. A location serving visitors needs to meet Google's storefront/hybrid requirements. Complete the verification method offered by Google. [Service-area guidance](https://support.google.com/business/answer/9157481?hl=en)

The website currently emits **Organization**, not an incomplete LocalBusiness rich-result claim. A private address used for verification should not be copied into public markup. A verified, owner-approved public address is required before changing that website model. This does not prevent an eligible service-area business from managing its own Business Profile. [LocalBusiness requirements](https://developers.google.com/search/docs/appearance/structured-data/local-business)

Use supplied project photographs with accurate descriptions. Ask actual customers for honest reviews using the profile's review link, without incentives or selectively requesting only positive feedback. Reply professionally without exposing customer information. No review score or review markup is invented on the website. [Google review guidance](https://support.google.com/business/answer/3474122?hl=en)

Local visibility also depends on relevance, distance and prominence. Neither verification nor structured data buys a top position. Track useful enquiries alongside search visibility rather than promising rankings. [Local ranking guidance](https://support.google.com/business/answer/7091?hl=en)

## Before public indexing

Complete Chunk 7's actual-host and enquiry checks, confirm the licence transcription and company facts, and obtain final launch sign-off. Then set the confirmed origin and production/indexing flags as documented in [DEPLOYMENT.md](DEPLOYMENT.md). Verify live HTML and response headers, including the PDF. Check that previews, Sharjah and the 404 remain noindex.

Cloudflare/Netlify consume the generated `_headers`. The Vercel preset deliberately applies a review-only `X-Robots-Tag: noindex, follow` to every file, including the PDF. If Vercel becomes the final public host, remove that explicit preset rule only as part of the approved launch and retain provider-level protection on preview/branch domains. Changing `SITE_INDEXABLE` alone does not remove a static Vercel header. On another static host, apply equivalent response headers; HTML meta tags do not protect PDF files. [Google noindex guidance](https://developers.google.com/search/docs/crawling-indexing/block-indexing) · [Vercel preview behaviour](https://vercel.com/docs/deployments/environments)

## 30 / 60 / 90 day review

| Review  | Evidence to collect                                                                                                                     | Decision                                                                                      |
| ------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| 30 days | Sitemap processing, indexed/excluded pages, canonical selection and UAE impressions/clicks by service.                                  | Fix actual crawl/indexation problems first; distinguish normal low-data periods from defects. |
| 60 days | UAE query terms, landing pages, CTR and received qualified enquiries. Compare Arabic HTML `/ar/` pages with their English counterparts. | Refine copy against real customer queries; preserve URL ownership from the research matrix.   |
| 90 days | Trends by service/language and actual enquiry relevance; useful project proof still missing.                                            | Prioritise verified case studies or content gaps rather than creating repetitive city pages.  |

Use the country filter for the UAE. Observe Saudi impressions separately; they do not establish Saudi operating coverage. Group languages by canonical HTML URL, not the visitor's nationality, and separate PDF rows in exported data. Keep query/page/device/date comparisons consistent and record data gaps. No search-volume or local-rank baseline is currently available from company accounts.

The website does not add analytics, trackers or scheduled monitoring in this chunk. Search performance and clicks are not confirmed leads; evaluate actual enquiries through the approved quotation/contact workflow.
