# Concept verification — 2 November 2026

- Astro/TypeScript check: 12 files, zero errors, warnings or hints.
- Static build: both `/` and `/ar/` generated successfully.
- Browser inspection: English and Arabic at 320, 390, 768 and 1440 px. No horizontal document overflow at those widths.
- Mobile menu: opens, closes after navigation, dismisses with Escape and restores focus to the menu control.
- Service preview: opens a named native dialog; its quotation link selects the corresponding service and moves to the form.
- Form: required fields and phone format use native validation. A completed test request produces a labelled, local review summary. Details are neither submitted nor persisted.
- Video: the local MP4 plays; the pause control stops it. A poster remains available. Reduced-motion/save-data handling was reviewed in source; OS-level preference emulation was not tested.
- Media: no broken image resources in the inspected page. WebP files and a compressed silent video are served locally. Fonts currently load from Google Fonts with fallbacks.
- Browser console: no observed page errors during the primary interaction checks.
- User-supplied mark: website copy normalized by removing unsupported SVG page wrappers. Original logo-pack files remain intact.

Screenshots are in `docs/previews/`: full English/Arabic desktop pages and phone hero previews. This is Chromium-based browser QA; Safari, physical devices, screen readers and measured Core Web Vitals remain for the full implementation stage.

The concept remains noindex. Production SEO, company-specific structured data, sitemap, real contact delivery and privacy handling are not represented as complete.
