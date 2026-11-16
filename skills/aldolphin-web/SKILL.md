---
name: aldolphin-web
description: Build or revise the Aldolphin Alakhthar UAE technical-services website with replaceable branding, bilingual English/Arabic content, mobile UX and local SEO. Use only for this company website.
---

# Aldolphin website

Use the `greendolph` repository (remote `https://github.com/hassanyass/greendolph.git`) as the source of truth. The earlier `aldolphin-website` folder is the preserved concept, not the active project. Read `docs/PROJECT-STANDARDS.md` before editing; read `docs/ASSET-SOURCES.md` when selecting media and `docs/DEPLOYMENT.md` before changing deployment or indexing behavior. Resolve these paths relative to the repository.

Use the approved rollout in `docs/PROJECT-STANDARDS.md`. Finish each phase for review and wait for approval before starting the next.

1. Build the ten licensed activities in English and Arabic, generic language alternates on the future .com, portable static output, and central brand settings.
2. Add inbox delivery with a configurable Formspree form ID, direct WhatsApp, phone and email actions, and optional Instagram, Facebook and TikTok links.
3. Add approved project data, company profile PDF download, and native motion with a reduced-motion fallback.
4. Apply final visual identity, verify the selected host and contact delivery, and enable production indexing after sign-off.

Use `src/config/services.ts` for the ten licence activities in the supplied order. Treat supplied Arabic OCR as provisional until checked against the original licence and approved. Preserve the exact approved full titles, use concise localized navigation labels, and keep licence administrative fields out of the catalog. Describe only confirmed UAE operations. Keep Saudi visibility measurement separate from claims of Saudi coverage.

Original logo assets and colours are provisional. Configure branding in `src/config/brand.ts`, verified company facts in `src/config/company.ts`, copy in `src/config/content.ts`, service models in `src/domain/service.ts`, and routes in `src/domain/routes.ts`. Reuse the shared Astro layout and components. Keep classes for useful domain and interaction behavior; avoid ceremonial inheritance.

Build phone-friendly English and Arabic experiences with real locale routes, natural Arabic, logical CSS, accessible interactions and reduced-motion support. Preserve the photographic architectural direction. Avoid template filler, invented badges, decorative icon grids, emoji, fake reviews or unverified business claims.

Use `PageMetadata` and `SitemapGenerator` for canonical URLs, locale alternates and sitemaps. Register only implemented pages. Keep previews noindex; deployment/indexing settings come from `SiteConfiguration`. Do not invent a production domain, address, service area or contact information. Never describe the local quotation preview as a delivered enquiry.

Run `npm test`, `npm run check`, `npm run build` and `npm run verify:build`. For SEO changes, also exercise production settings with an example domain, then restore preview settings. Review affected mobile and RTL layouts in a browser when available. State verification limits without promising search rankings or production readiness from a build alone.
