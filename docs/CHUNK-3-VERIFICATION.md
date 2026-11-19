# Chunk 3 — Bilingual service content

Completed 19 November 2026. Ready for review; Chunk 4 has not started.

## Delivered

All ten licensed activities now have distinct editorial content on their English and Arabic detail pages. Each page includes an overview, two scope explanations, three typical enquiry examples, quotation factors and four service-specific questions with complete answers. The existing quotation checklist, full licence title, service-preselected contact links, WhatsApp action and relevant project links are preserved.

The reading order is introduction → scope and common requests → quotation guidance → documented project links where available → questions and a quotation action. The shared template uses the existing brand colours, heading scale, gutters and spacing tokens. Arabic follows a natural RTL layout; phones stack the columns. There are no new images, animation libraries or client-side scripts in this chunk.

## Content and maintenance

- `src/domain/service.ts` defines the typed `ServiceEditorial` shape alongside the existing service model.
- `src/config/service-content/en.ts` and `ar.ts` contain the ten complete language-specific content profiles.
- `src/config/service-content/index.ts` supplies the localized lookup and shared section labels. A missing service entry fails rendering rather than silently publishing an incomplete page.
- `src/components/ServicePage.astro` renders the content in one template for all twenty pages. Its new styles are scoped to this component.

The original service IDs, licence titles, short labels, route aliases, metadata and service/project relationships are unchanged. Existing project evidence is reused without inventing case studies for equipment, cleaning, engraving, plaster or tiling. Scope remains within the research brief: no unverified certifications, specialist systems, fixed prices, response promises, warranties or Saudi coverage. Decorative engraving stays architectural; plaster is distinguished from plasterboard ceilings; AC content includes ventilation and filtration.

FAQs are visible static HTML using native `details`/`summary`, with the first answer initially open. They work with keyboard, touch and JavaScript disabled. No FAQ rich-result claim or FAQPage structured data was added. Search metadata/breadcrumb work remains in Chunk 5.

## Verification

- `npm run validate`: 11 tests passed, Astro reported zero errors/warnings/hints, all 39 static pages built, and preview artifact verification passed.
- Isolated shell build using `https://example.com`, production mode and explicit indexing: build and SEO verification passed. Environment overrides were removed and a preview build was restored and verified. The final artifact remains noindex; no hosting or search account settings were changed.
- Chromium 147 on the built static preview: all twenty service pages checked at 320, 390, 768 and 1440 px, for **80 page/viewport combinations**. No horizontal overflow or browser script errors. Document direction, locale switch destinations, quotation URLs and editorial sections checked.
- All four answers on every page were opened and inspected for visibility using keyboard activation at each tested width. No overflow appeared with the answers expanded.
- Phone and laptop screenshots captured for every service in both languages; individual pages and overview contact sheets reviewed for heading wraps, column order, spacing and image placement.
- All twenty service-specific quotation actions were followed to Contact; the correct service was selected. WhatsApp drafts included the correct localized service name. No messages or form submissions were sent.
- JavaScript-disabled emulated touch checks in English/Arabic confirmed FAQ opening/closing and the contact destination. As before, automatic query-string preselection requires JavaScript; the static form remains usable with manual service selection when JavaScript is disabled.
- Existing `/services/#ac`, `#electrical` and `#maintenance` destinations checked in both locales: AC/electrical reach their matching detail pages; maintenance stays in the directory.
- Formatting and `git diff --check` passed.

Browser scripts, screenshots and JSON results are ignored under `docs/previews/chunk-3/`. Checks use Chromium viewport/touch emulation, not physical phones or WebKit. Live hosting, inbox delivery and production indexing remain separate launch checks.
