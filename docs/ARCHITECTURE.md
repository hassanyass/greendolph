# Architecture and amendment guide

## Boundaries

- `Brand` owns theme variables and replaceable logo paths. Leave the original logo pack untouched.
- `CompanyProfile` owns verified real-world information. Do not duplicate contacts across components or fill unknown fields with invented examples.
- `SiteConfiguration` validates the deployment origin and separates preview behavior from production indexing. It is usable from Astro and standalone build tooling.
- `RouteCatalog` is the source of implemented language paths. It also generates home-section links for the shared navigation. Only the home route is registered today.
- `PageMetadata` derives canonical, alternate, social-image and robots values from the route and deployment settings. `SitemapGenerator` uses the same routes.
- `Service` is the typed bilingual service model. Editorial data stays in `content.ts`.
- `BaseLayout.astro` owns the shared document structure, `SeoHead`, header and footer. `Home.astro` composes its sections without owning metadata or duplicating the shell.
- Browser controllers remain small classes in `interactions.ts`. Do not add a global state library for local menu or dialog behavior.

## Adding a real page

1. Agree the copy and both language paths. Extend `PageKey` and add one implemented entry to `RouteCatalog`.
2. Add English and Arabic Astro routes using the same shared page component. Pass the page definition and localized title/description into `BaseLayout`.
3. If it belongs in navigation, replace the appropriate home anchor with its implemented locale route and adapt `Header`/`Footer` language switching to that page definition. The current home-only navigation deliberately stays within the approved concept.
4. Add a page-appropriate schema model when justified. Do not reuse the Organization graph as a substitute for service details or claim unverified business facts.
5. Verify both locale pages, reciprocal alternates, sitemap inclusion, keyboard behavior and phone layouts. Add meaningful invariants when new routing/SEO behavior is introduced.

Do not create empty placeholder pages simply to make a planned URL exist. A page enters the sitemap only after it is implemented and marked indexable.

## Adding real enquiry delivery

Select the host and delivery provider first. Then define a server-side transport boundary with validation, delivery/error states and abuse controls. Keep the browser controller independent of the provider. An actual submission must wait for the server response before reporting success. Remove the current local-preview wording only when delivery works end-to-end.

## Brand and visual amendments

Change palette values in one place and replace logo assets through their configured paths. Use CSS logical properties so RTL layout follows naturally. Move new English/Arabic copy into typed content, not conditionals embedded throughout the templates. Prefer composition and small domain classes over inheritance between visual sections.
