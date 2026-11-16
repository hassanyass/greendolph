# Architecture and amendment guide

## Boundaries

- `Brand` owns theme variables, typography, logo variants and sizes, favicon, and the default social image. Leave the original logo pack untouched.
- `CompanyProfile` owns verified real-world information. Do not duplicate contacts across components or fill unknown fields with invented examples.
- `SiteConfiguration` validates the deployment origin and separates preview behavior from production indexing. It is usable from Astro and standalone build tooling.
- `RouteCatalog` is the source of implemented language paths. It supplies shared navigation, language switching and paired service routes generated from the catalog.
- `PageMetadata` derives canonical, alternate, social-image and robots values from the route and deployment settings. `SitemapGenerator` uses the same routes.
- `Service` is the typed bilingual service model. The licence transcription, labels and descriptions live in `services.ts`. Shared interface copy lives in `content.ts`.
- `BaseLayout.astro` owns the shared document structure, `SeoHead`, header and footer. `Home.astro` composes its sections without owning metadata or duplicating the shell.
- Browser controllers remain small classes in `interactions.ts`. Do not add a global state library for local menu or dialog behavior.

## Adding a real page

1. Agree the copy and both language paths. Extend `PageKey` and add one implemented entry to `RouteCatalog`.
2. Add English and Arabic Astro routes using the same shared page component. Pass the page definition and localized title/description into `BaseLayout`.
3. If it belongs in primary navigation, add the shared navigation entry. Header and footer use the page definition for language switching. Service detail pages are generated automatically from the service catalog.
4. Add a page-appropriate schema model when justified. Do not reuse the Organization graph as a substitute for service details or claim unverified business facts.
5. Verify both locale pages, reciprocal alternates, sitemap inclusion, keyboard behavior and phone layouts. Add meaningful invariants when new routing/SEO behavior is introduced.

Do not create empty placeholder pages simply to make a planned URL exist. A page enters the sitemap only after it is implemented and marked indexable.

## Adding real enquiry delivery

Phase 2 uses Formspree with a configurable form ID and a verified inbox while retaining the static build. Show delivery success after the provider accepts the request. Verify inbox receipt before launch and keep local preview behavior available when delivery is unconfigured.

## Brand and visual amendments

Change palette values in one place and replace logo assets through their configured paths. Use CSS logical properties so RTL layout follows naturally. Move new English/Arabic copy into typed content, not conditionals embedded throughout the templates. Prefer composition and small domain classes over inheritance between visual sections.
