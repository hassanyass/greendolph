# Asset sources and provenance

Checked 2 November 2026. Free tiers and licences vary by asset; retain the actual licence and any required attribution when selecting production material.

## Source library

| Use                      | Source                                                                                            | Selection notes                                                                                             |
| ------------------------ | ------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| Photos and video         | [Pexels](https://www.pexels.com/) · [licence](https://www.pexels.com/license/)                    | Free photo/video collection. Avoid implied endorsement and review identifiable people, property and brands. |
| Photos                   | [Unsplash](https://unsplash.com/) · [licence](https://unsplash.com/license)                       | Select ordinary free assets; Unsplash+ has separate terms.                                                  |
| Photos and footage       | [Pixabay](https://pixabay.com/) · [licence summary](https://pixabay.com/service/license-summary/) | Additional sourcing option; review each asset and third-party rights.                                       |
| Minimal UI icons         | [Tabler Icons](https://tabler.io/icons) · [MIT licence](https://tabler.io/license)                | Use individual SVGs with consistent stroke weights and retain the licence. Do not load a whole icon font.   |
| Minimal UI icons         | [Lucide](https://lucide.dev/) · [licence](https://lucide.dev/license)                             | Alternative coherent set; do not mix styles unnecessarily.                                                  |
| Motion code              | [Motion](https://motion.dev/) · [source/licence](https://github.com/motiondivision/motion)        | Optional free/open-source animation library; paid examples and tools are separate.                          |
| Native motion references | [MDN CSS animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animations)             | Current concept uses custom CSS transitions and browser APIs without animation dependencies.                |
| Fonts                    | [Google Fonts](https://fonts.google.com/)                                                         | DM Sans for English and Readex Pro for Arabic; self-host licensed subsets before launch.                    |

## Assets used in this concept

| Local asset                     | Source / creator                                                                                                                                        | Usage                                                                                                                                      |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `public/brand/*`                | User-supplied prototype logo pack                                                                                                                       | Original source pack preserved. Website mark SVG has obsolete page/pageSet wrappers removed for browser support; the artwork is unchanged. |
| `public/images/ac.webp`         | [Man Repairing an Aircon](https://www.pexels.com/photo/man-repairing-an-aircon-5463580/) by José Andrés Pacheco Cortes · Pexels licence                 | Illustrative air-conditioning maintenance; not company staff.                                                                              |
| `public/images/interior.webp`   | [Modern Living Room Interior](https://www.pexels.com/photo/modern-living-room-interior-15824912/) by Curtis Adams � Pexels licence                      | Illustrative living space; not a completed company project.                                                                                |
| `public/images/electrical.webp` | [A man is working on an electrical panel](https://www.pexels.com/photo/a-man-is-working-on-an-electrical-panel-27928762/) by ranjeet . � Pexels licence | Illustrative electrical work; not company staff.                                                                                           |

## Homepage service and process photographs

These illustrative [Pexels photographs](https://www.pexels.com/license/) are kept as responsive WebP crops under `public/images/home/`. They illustrate the trades and the enquiry process.

| Crop                        | Original photo and creator                                                                                                                                |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Electromechanical equipment | [Electrical panel](https://www.pexels.com/photo/a-man-is-working-on-an-electrical-panel-27928762/) by ranjeet .                                           |
| Ceilings and partitions     | [Drywall installation](https://www.pexels.com/photo/man-doing-construction-work-inside-house-11427524/) by Jimmy Nilsson Masth                            |
| Air conditioning            | [Outdoor air-conditioning equipment](https://www.pexels.com/photo/air-conditioner-near-ladder-14522790/) by Zechen Li                                     |
| Carpentry                   | [Hands using a hammer and chisel](https://www.pexels.com/photo/hands-of-anonymous-woodworker-using-hammer-and-chisel-in-carpentry-5974417/) by Ono Kosuki |
| Building cleaning           | [Cleaning a window](https://www.pexels.com/photo/a-person-cleaning-a-glass-window-4440540/) by Polina Tankilevitch                                        |
| Plumbing                    | [Pipe repair](https://www.pexels.com/photo/plumber-repairing-pipe-with-wrench-indoors-32588548/) by Bulat843                                              |
| Engraving and ornamentation | [Wood carving](https://www.pexels.com/photo/close-up-of-man-carving-in-wood-16237417/) by eduwood                                                         |
| Painting                    | [Paint roller](https://www.pexels.com/photo/close-up-shot-of-a-person-holding-a-paint-roller-with-brown-paint-5798972/) by Ivan S                         |
| Plaster                     | [Plastering a wall](https://www.pexels.com/photo/a-construction-worker-working-on-the-wall-of-a-house-5493658/) by Antoni Shkraba                         |
| Tiling                      | [Aligning tiles with levelers](https://www.pexels.com/photo/a-close-up-shot-of-a-person-putting-tile-levelers-11806490/) by Vladimir Srajber              |
| How it works                | [Measuring a wall](https://www.pexels.com/photo/a-construction-worker-holding-a-pencil-and-measuring-tape-5493676/) by Antoni Shkraba                     |

The custom Astro and CSS layouts adapt the cropped picture treatment from [ScrewFast’s CardInsight](https://github.com/mearashadowfax/ScrewFast/blob/main/src/components/ui/cards/CardInsight.astro) and the image and content hierarchy from [ScrewFast’s FeaturesGeneral](https://github.com/mearashadowfax/ScrewFast/blob/main/src/components/sections/features/FeaturesGeneral.astro). The upstream project is [MIT-licensed](https://github.com/mearashadowfax/ScrewFast/blob/main/LICENSE).

## Current hero footage

`public/images/site-installation.mp4` and `site-installation.webp` use [Construction Worker Installing Electrical Wiring](https://www.pexels.com/video/construction-worker-installing-electrical-wiring-34572318/) by Sergei Starostin under the [Pexels licence](https://www.pexels.com/license/). The illustrative site preparation clip is a silent 4.5-second 1280 × 720 H.264 sequence at 24 fps. The poster is a still near the end of the clip.

## Our Works photographs

The owner supplied project descriptions and photographs in `aldolphin-website/ourwork`. Nad Al Sheba, Al Awir and Al Ajban use selected photos from their respective folders. Their website copies under `public/images/projects/` use 480, 960 and up to 1440 pixel WebP widths, preserving orientation and excluding source metadata. Thumbnail crops keep cards aligned. The gallery viewer opens the uncropped images. Sharjah uses labelled illustrative photographs from the [Pexels licence](https://www.pexels.com/license/) alongside the supplied project scope. These photographs show general air conditioning work and equipment.

- [Wall-mounted air conditioner in modern interior](https://www.pexels.com/photo/wall-mounted-air-conditioner-in-modern-interior-38788452/) by NEOSiAM 18+. Used on the Sharjah card and project cover.
- [Man Repairing an Aircon](https://www.pexels.com/photo/man-repairing-an-aircon-5463580/) by José Andrés Pacheco Cortes. Used in the Sharjah gallery.
