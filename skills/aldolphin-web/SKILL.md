---
name: aldolphin-web
description: Build or revise the Aldolphin Alakhthar UAE technical-services website with replaceable branding, bilingual English/Arabic content, mobile UX and local SEO. Use only for this company website.
---

# Aldolphin website

Use the `greendolph` repository (remote `https://github.com/hassanyass/greendolph.git`) as the source of truth. The earlier `aldolphin-website` folder is the preserved concept, not the active project. Read `docs/PROJECT-STANDARDS.md` before editing; read `docs/ASSET-SOURCES.md` when selecting media and `docs/DEPLOYMENT.md` before changing deployment or indexing behavior. Resolve these paths relative to the repository.

The visual concept is approved. Repository and SEO/deployment foundations are established; await the user's detailed home-page comments before redesigning the approved sections. Follow later user instructions when the stage changes.

Original logo assets and colours are provisional. Configure branding in `src/config/brand.ts`, verified company facts in `src/config/company.ts`, copy in `src/config/content.ts`, service models in `src/domain/service.ts`, and routes in `src/domain/routes.ts`. Reuse the shared Astro layout and components. Keep classes for useful domain and interaction behavior; avoid ceremonial inheritance.

Build phone-friendly English and Arabic experiences with real locale routes, natural Arabic, logical CSS, accessible interactions and reduced-motion support. Preserve the photographic architectural direction. Avoid template filler, invented badges, decorative icon grids, emoji, fake reviews or unverified business claims.

Use `PageMetadata` and `SitemapGenerator` for canonical URLs, locale alternates and sitemaps. Register only implemented pages. Keep previews noindex; deployment/indexing settings come from `SiteConfiguration`. Do not invent a production domain, address, service area or contact information. Never describe the local quotation preview as a delivered enquiry.

Run `npm test`, `npm run check`, `npm run build` and `npm run verify:build`. For SEO changes, also exercise production settings with an example domain, then restore preview settings. Review affected mobile and RTL layouts in a browser when available. State verification limits without promising search rankings or production readiness from a build alone.
