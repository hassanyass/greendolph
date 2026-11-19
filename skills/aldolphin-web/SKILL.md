---
name: aldolphin-web
description: Build or revise the Aldolphin Alakhthar UAE technical-services website with replaceable branding, bilingual English/Arabic content, mobile UX and local SEO. Use only for this company website.
---

# Aldolphin website

Use the `greendolph` repository (remote `https://github.com/hassanyass/greendolph.git`) as the source of truth. The earlier `aldolphin-website` folder is the preserved concept, not the active project. Read `docs/PROJECT-STANDARDS.md` before editing; read `docs/ASSET-SOURCES.md` when selecting media and `docs/DEPLOYMENT.md` before changing deployment or indexing behavior. Resolve these paths relative to the repository.

Use the approved rollout in `docs/IMPLEMENTATION-ROLLOUT.md`, linked from `docs/PROJECT-STANDARDS.md`. Finish each chunk for review and wait for approval before starting the next. The original four-phase foundation is established; the current sequence is:

1. Complete UAE-wide bilingual service research and a measured performance baseline.
2. Add real project evidence to the homepage after Services.
3. Strengthen all twenty service pages using distinct factual content and questions.
4. Prepare and connect a public profile PDF edition without placeholder contacts; preserve the internal profile.
5. Implement research-backed technical/local SEO and the owner search-account handover.
6. Optimise measured bottlenecks and add native transitions/selective prefetching for Cloudflare Pages Free.
7. Verify the actual host and all user journeys; enable indexing only after launch sign-off.

Read `docs/SEO-RESEARCH.md` before service/search work and `docs/PERFORMANCE-BASELINE.md` before speed/navigation work. Do not invent search volumes, rank positions, scopes, city coverage or testimonials. Research synonyms within the ten activity pages rather than adding service-by-city doorway pages. Questions are for visitors, not a promise of retired Google FAQ rich results; meta keywords have no Google ranking benefit.

Use `src/config/services.ts` for the ten licence activities in the supplied order. Treat supplied Arabic OCR as provisional until checked against the original licence and approved. Preserve the exact approved full titles, use concise localized navigation labels, and keep licence administrative fields out of the catalog. Describe only confirmed UAE operations. Keep Saudi visibility measurement separate from claims of Saudi coverage.

The supplied visual identity and blueprint journey are approved. Configure branding in `src/config/brand.ts`, verified company facts in `src/config/company.ts`, copy in `src/config/content.ts`, service models in `src/domain/service.ts`, and routes in `src/domain/routes.ts`. Reuse the shared Astro layout and components. Keep classes for useful domain and interaction behavior; avoid ceremonial inheritance.

Keep static `dist/` output portable, with Cloudflare Pages Free as the chosen hosting target. Retain multi-page navigation and use a short native cross-document fade with reduced-motion/unsupported-browser fallback. Opt in selected internal links to Astro prefetching; retain its slow-connection/tap behaviour and exclude downloads/external/hash-only/form destinations. ClientRouter, SSR/Functions and experimental prerendering are outside this release. Measure comparable browser/device/motion cohorts before claiming speed gains or real Core Web Vitals.

Build phone-friendly English and Arabic experiences with real locale routes, natural Arabic, logical CSS, accessible interactions and reduced-motion support. Preserve the photographic architectural direction. Avoid template filler, invented badges, decorative icon grids, emoji, fake reviews or unverified business claims.

Use `PageMetadata` and `SitemapGenerator` for canonical URLs, locale alternates and sitemaps. Register only implemented pages. Keep previews noindex; deployment/indexing settings come from `SiteConfiguration`. Do not invent a production domain, address, service area or contact information. Never describe the local quotation preview as a delivered enquiry.

Run `npm test`, `npm run check`, `npm run build` and `npm run verify:build`. For SEO changes, also exercise production settings with an example domain, then restore preview settings. Review affected mobile and RTL layouts in a browser when available. State verification limits without promising search rankings or production readiness from a build alone.
