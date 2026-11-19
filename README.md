# Greendolph · Aldolphin Alakhthar

Bilingual UAE technical-services website built with Astro, TypeScript and semantic CSS. The approved identity and blueprint journey are established. The current rollout adds project evidence, stronger service content, a public company profile, search improvements and measured performance work.

## Local development

Use Node **22.23.4 or newer** and npm 10+. `.nvmrc` and `.node-version` pin the runtime. A pinned development-only Node package also supplies the compatible runtime to npm scripts on this workspace, whose system Node is older.

```sh
npm ci
cp .env.example .env
npm run dev
```

On PowerShell, `Copy-Item .env.example .env` also works. English is at `/`; Arabic is at `/ar/`.

```sh
npm test               # Domain and SEO invariants
npm run check          # Astro + TypeScript
npm run build          # Static output and deployment headers
npm run verify:build   # Verify generated HTML/assets/SEO
npm run validate       # All of the above
npm run preview        # Serve the built website
npm run format         # Format source and documentation
```

## Structure

| Location                                | Responsibility                                  |
| --------------------------------------- | ----------------------------------------------- |
| `src/config/brand.ts`                   | Replaceable logo paths and semantic colours     |
| `src/config/company.ts`                 | Verified contacts, address and service areas    |
| `src/config/content.ts`                 | English/Arabic copy and service data            |
| `src/config/site-configuration.mjs`     | Validated origin and indexing settings          |
| `src/domain/`                           | Service, route, metadata and sitemap models     |
| `src/layouts/BaseLayout.astro`          | Shared document shell, header, footer and SEO   |
| `src/components/`                       | Reusable page sections                          |
| `src/scripts/interactions.ts`           | Class-based browser interactions                |
| `src/pages/`                            | Locale pages, 404, robots and sitemap endpoints |
| `tests/` and `scripts/verify-build.mjs` | Unit tests and built-artifact verification      |

Classes own domain logic and interaction behavior. Astro components own rendering. Typed objects own editable content; CSS consumes semantic theme variables. No frontend framework or animation library is required for the current behavior.

## Deployment and amendments

The provider-independent static output is **`dist/`**, with no server runtime required. Cloudflare Pages Free is the chosen launch target; existing Netlify and Vercel presets remain available. Production domain, live hosting configuration and indexing still require launch verification and sign-off.

See [deployment and SEO settings](docs/DEPLOYMENT.md), [architecture](docs/ARCHITECTURE.md), [project standards](docs/PROJECT-STANDARDS.md), [asset provenance](docs/ASSET-SOURCES.md) and [foundation verification](docs/FOUNDATION-VERIFICATION.md). The project skill is tracked in `skills/aldolphin-web/`.

Follow the review gates in the [implementation rollout](docs/IMPLEMENTATION-ROLLOUT.md). Chunk 1 provides the [UAE search research](docs/SEO-RESEARCH.md) and [measured performance baseline](docs/PERFORMANCE-BASELINE.md), including reproduction instructions. Raw audit artifacts stay in ignored `docs/previews/`.

Search titles/descriptions and service headings are maintained in `src/config/search-content.ts`. The [search-account handover](docs/SEARCH-ACCOUNT-SETUP.md) covers company-owned Google/Bing properties, Business Profile facts, sitemap submission and launch checks. Building the site does not create or verify an account.

GitHub Actions validates preview and simulated production builds on pushes and pull requests. It uploads the noindex preview artifact and does not publish a live website.

## Current boundaries

Home, Services, About, Our Works and Contact are implemented in both languages. Ten service detail pages per language contain editorial guidance and FAQs. Three photographic project stories are eligible for the production sitemap; the illustrative Sharjah entry remains noindex. Our Works provides the public bilingual profile PDF. Production indexing is still disabled pending launch sign-off.

The quotation form uses Formspree when a public form ID is configured, otherwise it stays in local review mode. Inbox delivery and final public contact facts still need launch verification. No analytics or cookie tracking is installed.

## Navigation, hero and services

The native SVG blueprint hero shows one continuous house-restoration journey. The logo, navigation and language control contract together on scroll; `src/config/experience.ts` owns navigation thresholds. The Services label is a page link, with a separate hover/touch/keyboard dropdown. The dropdown and swipeable carousel derive from `src/config/services.ts`. Brand colours, typography and logos remain configurable in `src/config/brand.ts`.

Service enquiries lead to Contact in the matching language with the service preselected. Maintain approved projects in `src/config/projects.ts` and profile-download settings in `src/config/company-profile.ts`. Service/project breadcrumbs share their source with structured data; unknown business facts are omitted.

## Vercel review deployment

Import this repository with root `.`, framework Astro, build `npm run build`, output `dist`. The checked-in `vercel.json` provides these defaults and a review-only noindex header for every file. Keep `SITE_ENV=preview` and `SITE_INDEXABLE=false` while reviewing. See [deployment settings](docs/DEPLOYMENT.md) before any approved public launch.
