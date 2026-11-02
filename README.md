# Greendolph · Aldolphin Alakhthar

Bilingual UAE technical-services website built with Astro, TypeScript and semantic CSS. The approved visual concept is preserved while the real website foundation is established. Detailed home-page revisions are the next stage.

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

The provider-independent static output is **`dist/`**, with no server runtime required. Netlify configuration is included; Cloudflare Pages and other static hosts can use the same output. No hosting account or domain is selected and nothing is deployed by this setup.

See [deployment and SEO settings](docs/DEPLOYMENT.md), [architecture](docs/ARCHITECTURE.md), [project standards](docs/PROJECT-STANDARDS.md), [asset provenance](docs/ASSET-SOURCES.md) and [foundation verification](docs/FOUNDATION-VERIFICATION.md). The project skill is tracked in `skills/aldolphin-web/`.

GitHub Actions validates preview and simulated production builds on pushes and pull requests. It uploads the noindex preview artifact and does not publish a live website.

## Current boundaries

Only the approved home-page concept is implemented in both languages. Services, About, Contact and individual service pages will be added when their content is agreed; missing pages are not linked or advertised in the sitemap.

The quotation interaction remains an explicit local review, without submission or persistence. Contact delivery, privacy content, verified business SEO facts and final page content are still required before public launch. No analytics or cookie tracking is installed.
