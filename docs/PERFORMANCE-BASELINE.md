# Website performance baseline

Measured 19 November 2026, starting 07:27 UAE time, against source commit `98e1de7`. This is the Chunk 1 baseline, before homepage, service-content, PDF, SEO or navigation implementation. Website behaviour is unchanged by this chunk.

## Method and limits

Thirty-six sequential Lighthouse navigations: three cold runs for each of twelve targets. English and Arabic mobile targets cover Home, AC service, Our Works, Nad Al Sheba project and Contact; desktop targets cover both homepages. Each run starts a separate browser with Lighthouse storage reset enabled. No other browser automation ran concurrently with this cohort. Ordinary host scheduling and background activity remain uncontrolled; ranges below expose observed variation rather than treating the best run as representative.

- Windows, Node 22.23.4, Astro 7.4.4, Lighthouse 13.6.0, bundled Headless Chromium 147.0.0.0.
- Static preview at `http://127.0.0.1:4328`, default motion, no production domain or Cloudflare deployment.
- Mobile simulation: 412 × 823 CSS px, DPR 1.75; simulated throttling, 150 ms RTT, 1,638.4 Kbps throughput, 4× CPU slowdown. Lighthouse's corresponding applied network parameters are retained in each raw report.
- Desktop simulation: 1350 × 940 px, DPR 1; 40 ms RTT, 10,240 Kbps throughput, 1× CPU slowdown.
- Performance, accessibility and best-practices categories only. SEO scoring is deliberately excluded because this preview is correctly `noindex`; technical SEO verification remains a separate build check.
- Each displayed metric is its own three-run median, so a row does not represent one selected “median report.” Transfer is Lighthouse's observed page transfer, not the total size of every site asset. Lazy-loading thresholds can include nearby offscreen images.

These are local laboratory results, not UAE network measurements, production cache tests or field Core Web Vitals. TBT is a lab diagnostic, **not INP**. Cloudflare response compression, edge cache behaviour, physical phones and live form delivery remain to be verified in later chunks. Automated accessibility scores do not replace keyboard, screen-reader or Arabic reading-order checks.

## Measured results

LCP is in seconds; TBT is in milliseconds. KiB = 1,024 bytes. Perf. is the Lighthouse performance score out of 100.

| Target                 | Perf. median |  LCP |   TBT |     CLS | Transfer KiB |
| ---------------------- | -----------: | ---: | ----: | ------: | -----------: |
| Home EN mobile         |          100 | 0.90 |    66 |       0 |        328.4 |
| Home AR mobile         |           78 | 0.93 | 1,049 |       0 |        355.1 |
| AC service EN mobile   |           97 | 2.56 |    25 |       0 |        254.2 |
| AC service AR mobile   |           96 | 2.56 |    79 | 0.01757 |        280.7 |
| Our Works EN mobile    |           85 | 4.36 |    32 |       0 |        720.3 |
| Our Works AR mobile    |           78 | 4.51 |   300 |       0 |        746.9 |
| Nad Al Sheba EN mobile |           87 | 4.06 |    22 |       0 |        622.3 |
| Nad Al Sheba AR mobile |           64 | 4.28 |   955 |       0 |        649.0 |
| Contact EN mobile      |          100 | 1.01 |    53 |       0 |        163.7 |
| Contact AR mobile      |          100 | 0.81 |    88 | 0.00004 |        190.1 |
| Home EN desktop        |          100 | 0.39 |     0 |       0 |        248.0 |
| Home AR desktop        |          100 | 0.31 |    15 | 0.00003 |        274.8 |

All 36 reports scored 100 in automated accessibility and best practices. This does not certify complete accessibility or deployment readiness.

### Variability to preserve in comparisons

| Target                 | Performance range | TBT range, ms |
| ---------------------- | ----------------: | ------------: |
| Home EN mobile         |           100–100 |         61–84 |
| Home AR mobile         |             68–89 |     437–3,362 |
| AC service EN mobile   |             97–98 |         23–25 |
| AC service AR mobile   |             86–97 |         0–446 |
| Our Works EN mobile    |             85–85 |          9–51 |
| Our Works AR mobile    |             55–84 |       0–2,476 |
| Nad Al Sheba EN mobile |             87–87 |          0–25 |
| Nad Al Sheba AR mobile |             63–86 |      71–1,045 |
| Contact EN mobile      |           100–100 |         36–68 |
| Contact AR mobile      |            99–100 |         16–99 |
| Home EN desktop        |            73–100 |         0–628 |
| Home AR desktop        |            92–100 |         0–223 |

The Arabic rendering variability and the English desktop outlier require controlled profiling before attributing all delays to one animation or font. Do not compare a reduced-motion run against this default-motion cohort as evidence of an equivalent experience becoming faster.

## Bottlenecks and implementation priorities

### 1. Portfolio image delivery

The measured LCP element on Our Works and Nad Al Sheba is the finished-exterior image: `images/projects/nad-al-sheba/finished-exterior-960.webp`, 357,230 bytes. Lighthouse confirms the image is discoverable in initial HTML, eagerly loaded and already has `fetchpriority="high"`. Adding another preload alone is not the primary fix.

The image appears in a roughly 366–368 × 229–230 px crop on the tested mobile viewport. Its responsive source set jumps from 480 to 960 px. At DPR 1.75 the browser needs approximately 640 physical pixels across; an intermediate, appropriately cropped source is a useful experiment. The current portrait-oriented source is cropped to a landscape card, wasting transferred pixels. Lighthouse estimates image-delivery savings, but its estimates are not achieved savings and must not replace visual quality review.

In Chunk 6, test correctly cropped 480/640/800/960 variants, accurate `sizes`, reviewed compression and AVIF only where it saves at least 20% at equivalent acceptable quality. Preserve originals for deliberate gallery viewing, reserve dimensions and avoid downloading originals on initial load. Apply the same treatment when introducing homepage Selected Works so it does not repeat this bottleneck.

### 2. Rendering and long tasks, particularly Arabic

Home AR has a median TBT of 1,049 ms despite a sub-second LCP. In its first run, Lighthouse records about 1,215 ms in style/layout and 1,138 ms in rendering, versus 77 ms in script evaluation; its “Other” main-thread category is also substantial. These observed execution categories are not all CPU-throttled simulated TBT and should not be added to the TBT value.

Profile the shared shell, Arabic text/layout and active animation using browser traces. Check large SVG filter/paint regions, layout-triggering work and whether offscreen or hidden-page motion really pauses. Run controlled motion-on/off experiments using otherwise identical settings, preserving the approved blueprint journey and reduced-motion fallback. Arabic project/Works pages also show long-task variation, so a hero-only explanation is not supported. Replacing the whole site with heavier JavaScript is not justified by this evidence.

### 3. AC service LCP

Both service medians sit just over 2.5 seconds. Review the measured LCP resource, its source selection and priority before adding prose or changing its layout. The service pages otherwise transfer fewer than 290,000 bytes in this cohort. Recheck both languages after Chunk 3 adds content.

### 4. Navigation polish after cold-load work

The site currently uses ordinary multi-page navigation. Native same-origin cross-document transitions can provide a roughly 180 ms root fade without changing document lifecycles. Selected Astro hover/focus prefetching can improve subsequent navigation; it does **not** fix a first cold-load LCP. Retain reduced-motion and unsupported-browser fallbacks, Astro's constrained-connection behaviour, and plain links. Exclude PDFs, external links, form submissions and hash-only actions. Do not introduce ClientRouter for this release.

## Static output and Cloudflare fit

The measured preview build contains 153 files totalling 7,476,122 bytes (7.13 MiB), including all generated HTML and public media. Its largest file is 357,230 bytes. Asset inventory describes disk output; it is not an initial page transfer measurement.

| Shared asset        | Disk bytes | Gzip estimate where relevant |
| ------------------- | ---------: | ---------------------------: |
| Main interaction JS |     20,199 |                        7,187 |
| Shared CSS          |     29,004 |                        6,747 |
| Home CSS            |     14,403 |                        3,363 |
| Works CSS           |      4,768 |                        1,490 |
| Inter Latin font    |     48,256 |                            — |
| Cairo Latin font    |     33,820 |                            — |
| Cairo Arabic font   |     30,896 |                            — |

Gzip numbers are local estimates, not a claim about the future host's actual encoding. Mobile Home observed 79,792 bytes of font transfer in English and 113,932 in Arabic. Check the active locale's font requirements before preloading or removing fonts; avoid blanket preloads.

[Cloudflare Pages limits](https://developers.cloudflare.com/pages/platform/limits/) currently allow Free projects 20,000 files, a 25 MiB maximum individual asset, 500 builds per month, one concurrent build and a 20-minute build timeout. This build fits the file/asset limits comfortably. The internal profile PDF is approximately 7.38 MiB; verify the actual public edition's bytes after export in Chunk 4. No Functions, Workers backend or R2 storage is required for the planned static website and Formspree delivery. Real deployment/build-duration checks remain pending.

## Acceptance budgets for later work

For the same mobile target set and three-run method: median performance ≥90, LCP ≤2.5 seconds, CLS ≤0.1 and lab TBT ≤200 ms. Initial mobile transfer budget is **750,000 bytes** (750 decimal KB, approximately 732.4 KiB), excluding deliberate PDF/gallery-original downloads.

Current misses: Home AR TBT/performance; both AC service LCP medians; both Works and project LCP/performance; Works AR and project AR TBT. Works AR transfers 764,800 bytes, above the transfer budget; Works EN at 737,582 bytes is close. CLS is below the limit in every measured report. Desktop medians alone hide the recorded outliers.

Post-launch field targets use the 75th percentile of real visits: LCP ≤2.5 seconds, INP ≤200 ms and CLS ≤0.1. No field INP is available in this preview. See [Google's Core Web Vitals guidance](https://developers.google.com/search/docs/appearance/core-web-vitals).

## Reproduce and retain evidence

Use the pinned project Node executable on Windows. Install the audit tool separately under ignored `node_modules/.cache`; it is not a website dependency and does not change `package.json` or the lockfile:

```powershell
npm install --prefix node_modules/.cache/launch-audit --no-package-lock --no-save lighthouse@13.6.0
npm run build
.\node_modules\node\bin\node.exe node_modules/astro/bin/astro.mjs preview --host 127.0.0.1 --port 4328
```

In another terminal, set a real locally installed Chrome/Chromium path:

```powershell
.\node_modules\node\bin\node.exe scripts/audit-performance.mjs --runs=3 --out=docs/previews/performance-baseline --chrome=C:/path/to/chrome.exe
```

The script runs sequentially, records browser/settings, writes each raw Lighthouse JSON, produces three-run medians in `summary.json`, and inventories `dist/` in `asset-inventory.json`. It does not change site code or submit forms. Raw reports remain ignored under `docs/previews/` because they are large machine-specific artifacts. Use a new output directory for the after-change cohort to preserve the baseline. Keep the same tool/browser, throttling, routes and motion settings; report any unavoidable version/environment differences explicitly.

Reference implementations for later chunks: [Astro native transitions](https://docs.astro.build/en/guides/view-transitions/), [selective Astro prefetch](https://docs.astro.build/en/guides/prefetch/) and [Cloudflare static Astro deployment](https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/).
