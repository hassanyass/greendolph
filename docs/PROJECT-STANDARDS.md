# Aldolphin website standards

## Product and scope

Aldolphin Alakhthar is a UAE technical services company. The ten active activities in the supplied trade licence define the services. Confirm the trading name, local coverage, address, contact details and permissions for project imagery before publication.

## Approved rollout

1. Build the ten bilingual service detail pages, portable deployment, search metadata, and replaceable identity settings.
2. Add the email quotation form through a configurable Formspree form ID, direct WhatsApp, phone and email actions, and optional verified social profiles.
3. Publish approved bilingual project content, enable the profile PDF download, and animate project cards with native web APIs and a reduced-motion fallback.
4. Apply the supplied identity, test the selected host and actual contact delivery, and enable indexing on the approved .com after sign-off.

Review each phase and push the checked changes to GitHub for peer review. Begin the next phase after approval. Use the supplied transcription as provisional content. Compare full English and Arabic activity titles against the original licence and obtain approval before public indexing. Keep full titles separate from concise navigation labels and editorial descriptions. Exclude licence status, printing details and contact fields from the service catalog.

## Replaceable brand and content

- Use the approved Khattaby Studio identity and preserve the supplied logo proportions and clear space. Keep wordmarks at least 120 px wide on the website. Configure all brand assets and palette in `src/config/brand.ts`. Let CSS consume semantic variables; use `color-mix` for derived overlays and borders. Layout values belong in CSS, not business data.
- Put bilingual copy, services, emirates and media references in typed content/config objects. Reuse components rather than duplicating the page for Arabic. Use classes where they clarify domain models or interaction ownership; do not force inheritance into presentational markup.
- Avoid decorative code abstractions, meaningless wrappers, unused packages, emoji icons, floating badges, invented labels and template filler. Use meaningful semantic HTML and ordinary, descriptive names.

## Mobile, language and accessibility

- Design for phones first, then check 320, 390, 768 and 1440 px widths in both languages. No horizontal page overflow or clipped Arabic text.
- Arabic has a real `/ar/` page, document `lang=ar`, `dir=rtl`, natural Arabic copy and CSS logical properties. Numbers and phone inputs retain the appropriate direction. Mirror directional controls rather than logos or photographs.
- Keep navigation keyboard-operable. Menu announces its state, closes on selection/Escape, and exposes a readable focus state. Dialogs have names, keyboard dismissal and focus restoration.
- Provide labels, visible focus, suitable contrast and approximately 44 px interaction targets. The decorative blueprint loops gently while visible and includes a pause control. It shows the complete still drawing with reduced motion enabled.

## UAE search foundation

- Generate readable HTML for each locale, with distinct titles, descriptions, one h1 and a meaningful heading hierarchy. Keep business copy specific and human; do not keyword-stuff emirate names or mass-produce city pages.
- Before launch, use the confirmed HTTPS .com domain to emit canonical URLs, en/ar/x-default alternates, a sitemap, absolute social-image URLs and truthful LocalBusiness/Service structured data.
- Keep previews `noindex` through page metadata and deployment headers. Permit crawling so search engines can read noindex. Enable indexing deliberately through SITE_ENV=production, SITE_URL and SITE_INDEXABLE=true only for a finished launch. Avoid invented addresses, ratings, response times, 24/7 claims or service-area claims.
- Confirm trading name, NAP (name/address/phone), geographic coverage and Google Business Profile details. Use actual company project photographs where available. Search ranking is an outcome to measure, not a promise.
- Optimize images, font delivery and video before launch. Target good Core Web Vitals; lazy-load below-fold media and reserve image dimensions.

## Media and motion

- Read `ASSET-SOURCES.md` when selecting or replacing media. Keep a source, creator, licence link and usage note for each third-party asset. Do not imply stock people are company employees or stock properties are completed projects.
- Prefer real technical work and UAE environments. Use a coherent photographic treatment rather than mixing illustrations and unrelated stock. Use icons only when a visitor needs them; the provided trade pictograms may be reused after review.
- Default to custom CSS and small native browser interactions. Motion, GSAP or Lottie are options for a justified animation; do not add a library or copy third-party snippets just to animate a button.

## Forms and verification

- Until delivery is configured, explicitly identify the form as a local preview. Never claim that an unsent enquiry was submitted. Do not store contact details in browser storage or logs.
- Formspree handles delivery and spam filtering when an ID is configured. Keep localized validation and retry states, disclose processing in the quotation form, and confirm provider settings, data retention and inbox receipt before launch.
- Run `npm run check` and `npm run build`. Review desktop/mobile and both locales when browser automation is available. Verify navigation, the service carousel, the hero illustration and its reduced-motion fallback, form validation and the honest preview summary. Record any QA limits.

## Approved navigation and motion direction

Use a compact-on-scroll header, a separately clickable Services page link and accessible service dropdown, and an Our Works destination. Pair the hero headline and actions with the technical blueprint, stacking the drawing below the copy on narrow screens. On scroll, shrink the complete navigation group into one centered floating bar, including the logo and language control. Every primary navigation item must lead to a separate locale page, and the home About button must lead to the full About page. Services are a data-driven, swipeable carousel with previous/next controls and RTL-aware motion. Avoid diagonal arrow glyphs and report-like numbered section labels.

## Homepage drawing journey

Use one continuous house renovation loop lasting 11 seconds on desktop and 9.8 seconds on phones. Open immediately on a complete isometric house with windows, a door, stained walls and visible cracks. A washing pass removes wall grime and window streaks. A proportionate roller paints narrower connected strokes. While the walls are being serviced, a loose rooftop duct joint receives a four-bolt flange with visible depth. A wrench seats on a fastener, makes two controlled tightening movements and withdraws before airflow resumes.

Derive the floor plan, facade openings and overhead view from one footprint in HeroBlueprint.astro. Lower each wall in its own coordinate system while turning the shared projection into a genuine overhead 2D plan. Keep the roof and wall edges connected during both collapse and reconstruction. The floor plan must use the same window positions and entrance as the house. Hide the final flattened surface remnants, hold the readable plan, then rebuild the same 3D house. Synchronize the return projection, wall height, roof elevation and camera zoom over the same 74–92% interval; keep the completed finish through 94% before the loop resets. Pull back the drawing slightly during the turn so it stays within the mobile viewport. Avoid isolated service icons, labels and disconnected replacement scenes.

The shared pause control freezes all motion, including the restoration mask. Start or resume the loop once at least 35% of the artwork is visible; pause it below that threshold and when the browser tab is hidden. Reduced motion and JavaScript-disabled visits show the complete static blueprint. Brand tokens supply every color. Keep the explanatory copy bilingual and the drawing orientation consistent between languages. No animation dependency is needed.

## WhatsApp contact journey

The owner temporarily selected the existing company phone for WhatsApp. CompanyProfile uses CONTACT_WHATSAPP when provided and otherwise uses that phone. Replace the environment setting and rebuild when the final number is confirmed. Keep this independent of the quotation delivery provider.

Offer the quotation form and WhatsApp together in English and Arabic. WhatsApp opens with a localized draft; service pages and service-preselected contact URLs include the selected service. Keep the call number readable in both directions. The floating shortcut appears on the homepage once Our Services enters the lower part of the viewport, and stays available while browsing subsequent content. Hide it when the quotation section or footer is visible, while the mobile menu is open, and while a form field has focus. Keep the opening hero clear. A JavaScript-disabled visit retains inline contact links. Respect reduced motion and safe-area spacing.
