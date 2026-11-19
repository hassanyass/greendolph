# Chunk 4 — Public company profile

Completed 19 November 2026. Public edition: `public/downloads/aldolphin-company-profile.pdf`. The internal profile and its source bundle remain outside the website repository and unchanged. Chunk 5 has not started.

## Editorial changes

The approved internal profile has eighteen landscape pages. Its six `xxxx` contact values were all on page 18. The public edition preserves pages 1–17 and replaces the contact page with a bilingual branded closing composition using the supplied Arabic logo, corrected house outline and existing identity. No phone number, email, website, social handle or replacement contact claim was invented. There are no empty contact labels or inactive social icons in the public closing page.

All ten licensed activities, the original project stories and their supplied photographs remain in the profile. The first seventeen public pages were rendered at 72 dpi with PyMuPDF and matched their source renders pixel for pixel. The internal PDF's SHA-256 was checked before and after generation and remained unchanged. The public PDF was separately rendered with Poppler, all eighteen pages reviewed as contact sheets, and the closing page inspected at full size.

## Website configuration

`src/config/company-profile.ts` owns the path and language list. `CompanyProfileDocument` reads file availability and actual byte size at build time, formats size for each locale, and rejects empty files or files above the chosen host's 25 MiB asset limit. Replace the PDF and rebuild to update the size automatically.

The existing Our Works download area is active in English and Arabic. It shows format, languages and file size with appropriate bidirectional isolation. The link has a native `download` attribute, PDF MIME hint, accessible description and explicit prefetch opt-out. No script, fetch call, embedded viewer or automatic download is added. The existing disabled state remains available if the configured file is removed.

## Document verification

- 18 landscape pages; 7,783,887 bytes (7.8 decimal MB / approximately 7.42 MiB).
- Public SHA-256: `152456e911c57623ce40ab77ceaef4b18ead71df4fd5ea99749a22114f3733f2`.
- Internal SHA-256 unchanged: `5ea0e96628ded2de844693e5977ac97daa06d08b1a281d28750eff75f0ff1b1d`.
- Zero placeholder contact text in extracted public pages and no placeholder URI annotations.
- Ten bookmarks retained, with the new closing destination replacing the contact destination.
- Source pages, native drawing geometry, embedded type and photo quality preserved; no full-page rasterisation or new stock imagery.

## Rebuild the public edition

The website build only copies the checked PDF; it does not need Python or the original profile bundle. To make an editorial revision, use the owner's approved source bundle and its `requirements.txt`, plus `pypdf` and `PyMuPDF`:

```powershell
python scripts/build-public-profile.py --source ../company-profile/source --original ../company-profile/output/pdf/Aldolphin-Company-Profile-EN-AR-Final.pdf
pdftoppm -scale-to 1200 -png public/downloads/aldolphin-company-profile.pdf docs/previews/chunk-4/page
```

The tool checks source page count, unchanged original bytes, matching first-seventeen-page renders, placeholder text and the per-file limit. It writes temporary closing-page files and a verification manifest under ignored `docs/previews/chunk-4/`. A different approved source page count requires editorial review before adapting the tool. Review the new render before replacing or publishing a PDF; automated checks do not substitute for visual review.

## Website verification

- `npm run validate`: all eleven tests passed; Astro reported zero errors, warnings or hints; all thirty-nine static pages built; final preview verification passed. No indexing or hosting account settings were changed.
- The build verifier checks the installed PDF signature, per-file size limit, download metadata/prefetch opt-out and byte-for-byte equality between public and built files.
- Chromium 147, static preview: both Our Works pages checked at 320, 390, 768 and 1440 px. No horizontal overflow or browser script errors. Phone/laptop screenshots reviewed for button, descriptive metadata and Arabic alignment.
- Eight actual browser downloads completed using touch at phone widths and keyboard activation on larger viewports. Each returned 7,783,887 bytes with the expected SHA-256 and filename.
- Both locales also downloaded the same file with JavaScript disabled. A direct request returned HTTP 200 with `Content-Type: application/pdf` and matching bytes.
- No PDF request occurred on initial navigation or when focusing the download action before activation. The existing page remains usable without a PDF viewer or download script.
- Formatting and `git diff --check` passed.

Raw rendered pages, screenshots, scripts and manifests stay in ignored `docs/previews/chunk-4/`. Browser checks emulate phone/touch and laptop viewports; physical iOS/Android and actual-host headers/cache behaviour remain final launch checks. The document is a digital RGB edition; commercial-print conversion remains separate.
