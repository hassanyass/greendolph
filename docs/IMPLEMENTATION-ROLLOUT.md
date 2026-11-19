# Approved visibility and performance rollout

Approved 19 November 2026. The earlier four-phase foundation rollout is established; this seven-chunk refinement sequence governs the next work. Keep the approved visual identity and continuous blueprint journey. Implement one chunk, verify and push its changes for peer review, then wait for that chunk's review before starting the next. Final launch/indexing remains a separate sign-off.

## Decisions

- Research all ten licensed services nationally in English and Arabic. Specific operating-area claims still require confirmation. Saudi coverage is not part of the release.
- Use Cloudflare Pages Free for static `dist/` hosting, without SSR, Pages Functions, R2 or a new application framework. Keep other static-host presets portable.
- Prepare a separate public company-profile PDF without `xxxx` contacts; preserve the supplied editable/internal profile.
- Retain multi-page navigation. Use a restrained native cross-document fade and opt-in Astro prefetching in Chunk 6. ClientRouter is not part of this release because the existing interactions initialise against a full document; no persistent client state requires it.
- Preserve current URL IDs, locale routes, legacy links, brand tokens and truthful preview behaviour.

## Chunk 1 — Research and baseline

Deliver `SEO-RESEARCH.md`, `PERFORMANCE-BASELINE.md`, reproducible audit tooling and updated skill/standards. Sample English/Arabic service/task queries, inspect provider-owned pages, distinguish observed terminology from candidate terms, map intent to existing URLs and check project evidence. Record unavailable volumes/rankings as unavailable. Measure mobile home/service/works/project/contact pages in both languages and desktop homes, using three cold Lighthouse runs per target. Keep raw reports/screenshots in ignored `docs/previews/`.

Acceptance: all ten activity briefs include query intent, scope limits, questions and evidence; baseline records tool/browser/settings, median and variability, bottlenecks and limitations; website behaviour remains unchanged. Review this evidence before editing content or layouts.

## Chunk 2 — Homepage project evidence

Insert Selected Works after Services. Use a larger Nad Al Sheba feature plus supporting Al Awir and Al Ajban projects on laptop; naturally stack on phones. Read from existing project data plus configurable featured IDs. Include factual bilingual summaries, related trade labels and real detail links. Use supplied images with dimensions, responsive sources and below-fold lazy loading. Keep an Our Works destination and avoid another decorative carousel or stock project photography.

Acceptance: English/Arabic routes and links correct, keyboard access, no horizontal overflow/CLS at 320/390/768/1440 px, and no material first-viewport transfer regression. No unverified outcomes or client identities.

## Chunk 3 — All twenty service pages

Follow the ten research briefs. Add typed bilingual editorial data for overview, scope, common requests, quotation factors and four useful question/answer pairs per service. Keep licence titles, navigation labels and editorial headings separate. Related projects derive from actual service/project relationships, not invented work. Retain quotation preselection and direct contact links.

Write concise distinct sections, not a word-count quota or duplicated service/city pages. Answer questions with scope/assessment information; exclude unconfirmed guarantees, rates, special equipment and response promises. Keep FAQs as useful visible HTML without relying on retired Google FAQ rich results.

Acceptance: every service has distinct English/Arabic content, accurate scope, correct related projects and enquiry preselection; existing URLs and aliases still resolve.

## Chunk 4 — Public company profile

Create a matching website edition with a branded closing page omitting placeholder contact values/handles. Keep the internal final profile unchanged. Install the public PDF at the existing download route; activate both Our Works download buttons and show bilingual-language indication, actual file size and PDF format. Keep path/languages/size in configurable metadata. Exclude downloads from prefetching and automatic loading.

Acceptance: no `xxxx` or invented details in public PDF, visually reviewed pages, correct file bytes/content type and mobile downloads in both languages. Check the Cloudflare per-file limit and source attribution/licences.

## Chunk 5 — Technical/local search

Use current Google guidance before implementing. Refine title/description/H1 and internal-link text using the approved matrix. Keep self-canonicals, reciprocal en/ar/x-default alternates, accurate image descriptions and social metadata. Add visible breadcrumbs plus BreadcrumbList on service/project pages. Strengthen Organization/Service data; publish LocalBusiness fields only when verified. Preserve Sharjah's illustrative disclosure and noindex state until approved real evidence is available.

Prepare the owner handover for Google Business Profile, genuine review collection, consistent business information, Search Console and Bing verification. Do not create listings, buy backlinks or change business accounts without the owner-directed launch work. No meta-keyword stuffing, fake ratings, automatically generated city pages, invented locations or Saudi claims.

Acceptance: rendered content matches metadata/schema, all eligible routes have unique search presentation, example-domain production SEO verifies, and preview protection is restored afterward.

## Chunk 6 — Speed and page navigation

Implement the measured bottlenecks from the baseline before adding navigation polish. Keep responsive image delivery; re-encode oversized sources and add AVIF where it saves at least 20% at comparable reviewed quality. Load gallery originals only on request. Prioritise the actual LCP image and active language's essential font; do not preload the whole site. Preserve the hero's approved experience, offscreen/tab pause and reduced-motion still image.

Use native same-origin cross-document view transitions with a root fade around 180 ms, reduced-motion opt-out and ordinary navigation fallback. Enable Astro's opt-in hover/focus prefetch on internal menu/service/project/enquiry links, retaining its tap fallback for constrained connections. Exclude PDF downloads, external destinations, hash-only links and form submissions; do not enable global viewport/load prefetch or experimental prerendering.

Keep Cloudflare's build as `npm run build` → `dist`, pinned Node, real 404 HTML, preview noindex and appropriate cache/security headers. Hashed assets can remain immutable; HTML and replaceable public assets need appropriate revalidation. Do not add a catch-all SPA rewrite or make the form dependent on hosting functions.

Acceptance targets: median mobile Lighthouse performance ≥90 over three cold runs; LCP ≤2.5 s, CLS ≤0.1, lab TBT ≤200 ms; initial mobile transfer ≤750 KB excluding requested downloads/gallery originals. Field INP target ≤200 ms requires post-launch real traffic and is not interchangeable with lab TBT. Repeat navigation/back/forward, language switch, form, carousel and gallery checks. All budgets must report browser/tool/throttling and not mix incompatible cohorts.

## Chunk 7 — Verify and prepare launch

Run `npm test`, `npm run check`, `npm run build`, `npm run verify:build`; exercise isolated example-domain production metadata and restore the preview artifact. Check all service/project pages, aliases, public PDF, keyboard operation, reduced motion and both locales. Use Chromium/WebKit automation and physical phone smoke checks when available; state any device coverage limits.

Verify Cloudflare preview responses, HTTPS, caching and genuine 404 behaviour on the actual host. Domain, business facts, delivery receipt, public identity details and final launch sign-off remain gates to indexing. Submit sitemaps through verified company accounts after approval and review UAE impressions/clicks/queries at 30/60/90 days; separate low-data periods and Saudi observation from current UAE service claims. Prepare the monitoring handover rather than silently scheduling background work.

## Research prompts for later chunks

SEO: “Validate the proposed change against current Google Search Central and Business Profile documentation. Distinguish supported search features from schema vocabulary and supplier marketing. Check multilingual URL ownership, indexability, source evidence and scope. Report uncertainty rather than inventing ranking/volume data.”

Performance: “Check the installed Astro version and current Cloudflare Pages guidance. Compare the same route/device/motion/browser cohorts under the same cold-run settings. Identify the actual LCP resource and main-thread work before choosing an optimisation. Recheck accessibility, motion and interaction behaviour after the change.”

Media/content: “Choose from approved company project photos and descriptions first. State exactly what each image proves; keep illustrative photography separate. Write useful original bilingual content tied to the licensed activity, with no copied provider claims or guaranteed search outcomes.”
