# Greendolph website

This repository is the source of truth for the Aldolphin Alakhthar website. Read `docs/PROJECT-STANDARDS.md` before changing it. Use `skills/aldolphin-web/SKILL.md` for company-specific requirements.

The current review covers the full-screen video hero, compact floating navigation, Services carousel, and separate bilingual destinations for every navigation item. The home About button leads to the complete About page. Preserve this scope and stop after the requested changes. Do not invent project examples, business claims or operational enquiry handling.

Keep branding in `src/config/brand.ts`, company facts in `src/config/company.ts`, deployment settings in `src/config/site-configuration.mjs`, implemented locale routes in `src/domain/routes.ts`, and page metadata in `src/domain/seo.ts`. Shared shell belongs in `src/layouts/BaseLayout.astro`; sections stay separate. Classes should own useful domain or interaction behavior without forced inheritance.

Register only implemented pages in the route catalog. All production canonicals, alternates and sitemap URLs derive from `SITE_URL`; never invent a domain or business address. Preview and unfinished content must remain noindex. Do not log environment values or form data.

Run `npm test`, `npm run check`, `npm run build` and `npm run verify:build`. For SEO changes, also verify an isolated production build using the example domain in `docs/DEPLOYMENT.md`, then restore a preview build. Review relevant mobile/RTL behavior for visual or navigation changes.

Do not commit `node_modules`, `dist`, `.astro`, local `.env` files or generated preview screenshots. Keep `package-lock.json` tracked. Source logo pack is outside the repository and must not be changed.
