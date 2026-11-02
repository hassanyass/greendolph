# Aldolphin website standards

## Product and scope

Aldolphin Alakhthar is a UAE technical services company. AC repair and installation and electrical works are confirmed service categories. Broader maintenance categories, exact legal/trading names, coverage, address, phone, hours and delivery promises need company confirmation before publication. Stock imagery depicts illustrative spaces or work, not this company's staff or portfolio.

The design concept is approved. The current stage establishes the real repository and deployment/SEO foundation; home-page revisions await the user’s detailed comments. The intended complete website will have Home, Services, service-detail pages, About and Contact, in English and Arabic. Preserve this review stage.

## Replaceable brand and content

- Prototype logo and colours may change. Configure all brand assets and palette in `src/config/brand.ts`. Let CSS consume semantic variables; use `color-mix` for derived overlays and borders. Layout values belong in CSS, not business data.
- Put bilingual copy, services, emirates and media references in typed content/config objects. Reuse components rather than duplicating the page for Arabic. Use classes where they clarify domain models or interaction ownership; do not force inheritance into presentational markup.
- Avoid decorative code abstractions, meaningless wrappers, unused packages, emoji icons, floating badges, invented labels and template filler. Use meaningful semantic HTML and ordinary, descriptive names.

## Mobile, language and accessibility

- Design for phones first, then check 320, 390, 768 and 1440 px widths in both languages. No horizontal page overflow or clipped Arabic text.
- Arabic has a real `/ar/` page, document `lang=ar`, `dir=rtl`, natural Arabic copy and CSS logical properties. Numbers and phone inputs retain the appropriate direction. Mirror directional controls rather than logos or photographs.
- Keep navigation keyboard-operable. Menu announces its state, closes on selection/Escape, and exposes a readable focus state. Dialogs have names, keyboard dismissal and focus restoration.
- Provide labels, visible focus, suitable contrast and approximately 44 px interaction targets. Honour reduced motion and save-data preferences. Video has a poster, muted playback and a pause control; it never blocks content.

## UAE search foundation

- Generate readable HTML for each locale, with distinct titles, descriptions, one h1 and a meaningful heading hierarchy. Keep business copy specific and human; do not keyword-stuff emirate names or mass-produce city pages.
- Before launch, use a confirmed HTTPS domain to emit canonical URLs, en-AE/ar-AE/x-default alternates, a sitemap, absolute social-image URLs and truthful LocalBusiness/Service structured data.
- Keep previews `noindex` through page metadata and deployment headers. Permit crawling so search engines can read noindex. Enable indexing deliberately through SITE_ENV=production, SITE_URL and SITE_INDEXABLE=true only for a finished launch. Avoid invented addresses, ratings, response times, 24/7 claims or service-area claims.
- Confirm trading name, NAP (name/address/phone), geographic coverage and Google Business Profile details. Use actual company project photographs where available. Search ranking is an outcome to measure, not a promise.
- Optimize images, font delivery and video before launch. Target good Core Web Vitals; lazy-load below-fold media and reserve image dimensions.

## Media and motion

- Read `ASSET-SOURCES.md` when selecting or replacing media. Keep a source, creator, licence link and usage note for each third-party asset. Do not imply stock people are company employees or stock properties are completed projects.
- Prefer real technical work and UAE environments. Use a coherent photographic treatment rather than mixing illustrations and unrelated stock. Use icons only when a visitor needs them; the provided trade pictograms may be reused after review.
- Default to custom CSS and small native browser interactions. Motion, GSAP or Lottie are options for a justified animation; do not add a library or copy third-party snippets just to animate a button.

## Forms and verification

- Until delivery is configured, explicitly identify the form as a local preview. Never claim that an unsent enquiry was submitted. Do not store contact details in browser storage or logs.
- Production needs server validation, delivery/error states, appropriate spam protection, consent/privacy copy, retention and rate limits. Those are later implementation tasks.
- Run `npm run check` and `npm run build`. Review desktop/mobile and both locales when browser automation is available. Verify navigation, service dialogs, video controls, form validation and the honest preview summary. Record any QA limits.
