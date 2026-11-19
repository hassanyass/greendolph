# Chunk 2 — Homepage project showcase

Completed 19 November 2026. Ready for review; Chunk 3 has not started.

## Delivered

Selected Works appears immediately after Services on both homepages. Nad Al Sheba is the larger feature on laptop, alongside Al Awir and Al Ajban. Tablet layouts place the feature above two supporting cards; phones stack all three. Arabic reverses the grid, text and directional controls while preserving photo orientation and project order.

The section uses the existing semantic brand colours, gutters, spacing, heading scale and panel radius. Concise bilingual teasers describe documented work. Each card includes its location, project title, two related licensed-service labels and a link to its existing locale-specific detail page. A separate link opens the complete Our Works directory. No stock project photos, client names or claimed outcomes were introduced.

Edit `featuredProjectIds`, `teaser` and `homepagePhoto` in `src/config/projects.ts` to change selection, order, copy or imagery. Section wording lives in `src/config/home-works.ts`. Rendering belongs to `SelectedWorks.astro`; the existing `ProjectPhoto` model and `ProjectImage` component supply image metadata and responsive variants. The project galleries and public-PDF setup are unchanged.

## Image loading

The new 480/800 px homepage crops preserve the uncropped gallery assets. An initial native-lazy-only implementation still transferred photos before scrolling because Chromium's lazy-load threshold extends below the viewport. The final section instead installs each image from an inert template when its reserved photo area comes within 240 px of the viewport. Unsupported IntersectionObserver browsers install images immediately; JavaScript-disabled browsers receive normal images through `noscript`.

Only this new section uses the enhancement. Cards, headings, summaries and links remain regular static HTML. Image dimensions and CSS aspect ratios reserve space. There is no animation dependency, carousel or new page-navigation behaviour. Hover-capable devices get a small image zoom; reduced motion disables it.

## Verification

- `npm run validate`: all 11 tests passed; Astro reported zero errors, warnings or hints; 39 static pages built; preview metadata, sitemap, robots, local assets and 404 verification passed. Indexing remains disabled.
- Chromium 147 automated checks against the built static preview: English/Arabic at 320, 390, 768 and 1440 px; no horizontal page overflow, all three photographs decoded, and the showcase follows Services.
- Screenshots reviewed for English and Arabic laptop/phone layouts, including the supporting tablet layout. Source order, image orientation and text wrapping checked.
- Project link keyboard activation tested at all eight locale/width combinations. JavaScript-disabled English/Arabic navigation and emulated touch navigation passed. Links retain the locale.
- Delayed-image checks at 390/1440 px in both locales: every card retained exactly the same height before and after image arrival. No observed layout-shift entry identified a source inside Selected Works. Reduced-motion image transition duration was zero; default desktop hover zoom worked.

### First-viewport transfer check

Same local static preview, Chromium 147, fresh contexts, DPR 1, 900 px viewport height, reduced motion, fonts ready plus 2.5 seconds, without scrolling. Values below are **subresource transfer bytes**, excluding the document itself; they are not Lighthouse scores or production network measurements.

| View       |  Before |   Final |
| ---------- | ------: | ------: |
| 390 px EN  | 215,016 | 214,885 |
| 390 px AR  | 241,798 | 241,667 |
| 1440 px EN | 244,928 | 244,797 |
| 1440 px AR | 271,710 | 271,579 |

No homepage project-photo request occurred in these final first-viewport samples. The stylesheet grew by 779 transferred bytes; the About logo moved farther below the lazy-load threshold, offsetting that small difference. The final HTML encoded body was 9,705 bytes EN / 10,436 bytes AR in separate mobile samples; static section markup and the small inline enhancement add document overhead. This check supports the absence of a material first-viewport image-transfer regression; it does not claim the entire site became faster or replace Chunk 6's comparable Lighthouse measurements.

Raw screenshots, browser scripts and measurements remain ignored under `docs/previews/chunk-2/`. Browser checks use emulated viewports/touch, not physical iOS/Android hardware or WebKit. Actual-host/CDN verification remains a launch task.
