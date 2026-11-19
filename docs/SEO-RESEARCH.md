# UAE search research and implementation brief

Research date: 19 November 2026. Scope: all ten licensed activities, English and Arabic, UAE-wide research. Status: Chunk 1 research; proposed copy below is not published website content.

## Findings that change the implementation

1. The website already has static bilingual pages, unique metadata, canonical/alternate URL generation, sitemap generation, and Organization/Service structured data. The current build is intentionally a noindex preview without a confirmed production origin. Absence from Google during development is expected; enabling indexing is a launch decision, not a substitute for content work.
2. Service pages are very brief: approximately 60–101 English and 53–88 Arabic whitespace-delimited main-content tokens, including licence labels, enquiry bullets and related-project labels. This is a source-HTML count, not a linguistic quality score or Google word-count target. The practical gap is scope, decision support, service-specific questions and evidence.
3. Customers use task/material language alongside formal activity names: AC maintenance / صيانة المكيفات, gypsum ceiling / جبس بورد, wood flooring / باركيه, plastering / لياسة, and tiling / تركيب سيراميك. Keep full licence titles separately; write human headings and explanatory copy around verified customer tasks.
4. Real project evidence is available for AC, ceilings, flooring, plumbing and painting. The homepage currently has no project showcase. Three existing photographic case studies can make service claims more concrete without adding stock project photographs.
5. Discovery terms can lead outside the approved scope. In particular, electromechanical searches include industrial/high-voltage engineering, and engraving searches include trophies and gift personalisation. Do not turn those adjacent search results into Aldolphin service claims.
6. A national research focus does not establish coverage in every city. Specific service-area claims remain gated on company confirmation. Project locations prove the documented project, not an unlimited service radius.

## Method and limitations

The research sampled English and Arabic web searches with UAE, Dubai and service/task modifiers, then inspected provider-owned service pages. The query families below are candidate content targets, not measured keyword-volume or rank data. Sources establish market terminology and observable page structure, not the truth of a provider's marketing claims. No proprietary keyword account, Search Console data, Google Maps account or UAE-localised rank-tracking session was available. Search ordering is not reported as a UAE Google ranking. No search volumes, keyword difficulty, conversion forecasts or guaranteed positions are inferred.

Source access varies: skillcreativity.ae and fix-hero.com results were visible during discovery but fresh page opens timed out. Their snippets are discovery leads only; content decisions below use successfully inspected pages. Recheck any source before relying on a new claim. Preserve source dates and distinguish observed terms from proposed synonyms.

### Discovery query log

The following are representative queries actually submitted during the planning and implementation research. Additional synonyms below are editorial candidates to validate against future Search Console data.

| Activity                  | English discovery query                                               | Arabic discovery query                      |
| ------------------------- | --------------------------------------------------------------------- | ------------------------------------------- |
| Electromechanical         | electromechanical equipment installation maintenance UAE              | تركيب معدات كهروميكانيكية وصيانتها الإمارات |
| Ceilings/partitions       | false ceiling light partitions installation Dubai                     | تركيب سقف معلق قواطع جبس دبي                |
| AC/ventilation/filtration | AC installation maintenance Dubai Sharjah UAE                         | تركيب وصيانة تكييف الإمارات                 |
| Carpentry/wood flooring   | carpentry wood flooring installation UAE                              | تركيب أرضيات خشبية نجارة الإمارات           |
| Building cleaning         | building residential cleaning services UAE                            | تنظيف مباني ومساكن الإمارات شركة            |
| Plumbing/sanitary         | plumbing sanitary installation Dubai UAE                              | تركيب أدوات صحية تمديدات مياه دبي           |
| Engraving/ornamentation   | engraving ornamentation works Dubai                                   | أعمال نقش زخرفة معمارية دبي                 |
| Painting                  | painting contracting Dubai UAE; painting services UAE villa apartment | دهانات شقق فلل الإمارات مقاول               |
| Plaster                   | plastering plaster works Dubai technical services                     | لياسة بلستر جدران دبي خدمات                 |
| Floor/wall tiling         | floor wall tiling installation UAE                                    | تركيب بلاط أرضيات وجدران دبي                |

Arabic electromechanical discovery was comparatively noisy and returned regulatory/profile documents as well as unrelated material. Use precise equipment-oriented wording and obtain equipment examples from the company; do not claim that this sample demonstrates demand size. Engraving discovery mixed architectural work and gift/laser services, requiring a similar scope filter.

## Route and query ownership

Use the existing `/services/{id}/` and `/ar/services/{id}/` pair for each row. English and Arabic share intent, not literal word-for-word keyword placement. Installation, maintenance and problem-related questions stay within the relevant service page in this release. Do not create a separate URL per synonym or per emirate. Preserve legacy AC, electrical and maintenance destinations.

Priority means strength of existing company evidence and usefulness of the content gap, not estimated demand or guaranteed commercial return. A = direct project evidence; B = licensed capability with less project evidence; C = scope clarification needed for specialist query expansion. All ten receive the planned content treatment.

| Order / ID                      | Candidate English query cluster                                                                                   | Candidate Arabic query cluster                                                        | Intent and initial priority                                             |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| 1 `electromechanical`           | electromechanical equipment installation UAE; electromechanical maintenance UAE; equipment installation quotation | تركيب معدات كهروميكانيكية؛ صيانة معدات كهروميكانيكية؛ عرض سعر تركيب معدات             | Equipment enquiry, installation/maintenance; B, specialist expansions C |
| 2 `ceilings-and-partitions`     | false ceiling installation UAE; gypsum ceiling; light partitions; ceiling quotation                               | تركيب أسقف معلقة؛ جبس بورد؛ قواطع جبسية؛ تكلفة تركيب سقف معلق                         | Installation/material/quotation; A                                      |
| 3 `air-conditioning`            | AC installation UAE; AC maintenance; ventilation installation; air filtration systems; AC not cooling             | تركيب مكيفات؛ صيانة المكيفات؛ ضعف تبريد المكيف؛ تركيب أنظمة تهوية؛ أنظمة تنقية الهواء | Installation/maintenance/problem/quotation; A                           |
| 4 `carpentry-and-wood-flooring` | carpentry works UAE; wood flooring installation; parquet flooring quotation                                       | أعمال نجارة؛ تركيب أرضيات خشبية؛ تركيب باركيه؛ تكلفة أرضيات خشب                       | Installation/material/quotation; A                                      |
| 5 `building-cleaning`           | building cleaning UAE; residential building cleaning; home cleaning quotation                                     | تنظيف مباني؛ تنظيف مساكن؛ تنظيف منازل؛ عرض سعر تنظيف مبنى                             | Scope/property type/quotation; B                                        |
| 6 `plumbing-and-sanitary`       | plumbing installation UAE; sanitary installation; bathroom fixture installation; water and drainage connections   | تركيب أدوات صحية؛ تمديدات صحية؛ تمديدات مياه وصرف؛ تركيب أطقم حمامات                  | Installation/fit-out/quotation; A                                       |
| 7 `engraving-and-ornamentation` | architectural ornamentation UAE; decorative engraving works; decorative surface enquiry                           | أعمال نقش وزخرفة؛ زخرفة معمارية؛ نقش زخرفي للجدران                                    | Decorative scope/design enquiry; B, material/method expansions C        |
| 8 `painting`                    | painting contractor UAE; interior painting; exterior painting; apartment/villa painting quotation                 | مقاول دهانات؛ صبغ داخلي؛ دهانات خارجية؛ صبغ شقق وفلل؛ عرض سعر دهان                    | Repainting/finish/quotation; A                                          |
| 9 `plaster`                     | plaster works UAE; plastering; wall surface preparation; plaster quotation                                        | أعمال بلاستر؛ لياسة؛ تنعيم جدران؛ تجهيز جدران للدهان                                  | Surface preparation/finishing/quotation; B                              |
| 10 `floor-and-wall-tiling`      | floor tiling UAE; wall tile installation; bathroom/kitchen tiling; tile installation quotation                    | تبليط أرضيات وجدران؛ تركيب سيراميك؛ تركيب بلاط حمامات؛ عرض سعر تبليط                  | Installation/material/quotation; B                                      |

For the home page, use technical services / خدمات فنية and a concise introduction to the ten activities. The directory owns the complete service menu; individual service pages own detailed task intent. Project pages own their actual project location and scope. Avoid competing generic title variants on several pages.

## Ten service briefs for Chunk 3

Each page gets a concise introduction, verified scope, common requests, assessment/quotation factors, four meaningful questions, existing related projects where applicable, and a service-preselected enquiry. The items below are writing briefs, not promises that unconfirmed extras are included. Question answers must explain assessment and scope without making up company policies.

### 1. Electromechanical equipment

- Ownership: `/services/electromechanical/` and Arabic equivalent. Lead with installation and maintenance of equipment; ask what equipment, model, use and symptoms are involved.
- Differentiate: identify what information a property owner or facilities contact should supply. Discuss existing versus new installations and access to equipment, rather than a generic list of every engineering discipline.
- Four questions: What equipment information should I send? Can I enquire about an existing installation? What affects the quotation? What site/access information helps define the scope?
- Proof: existing projects mention wiring, but the current project/service relationships do not establish specialist equipment work. Keep project attribution accurate; request equipment-specific photographs and descriptions later.
- Hold back: HV/MV commissioning, industrial automation, elevators, fire systems, energy studies, emergency electrician guarantees, certifications and authorised manufacturer servicing unless verified.
- Observed primary reference: [NMTS](https://nmts.ae/electromechanical-equipment-installation-and-maintenance/) uses exact activity terminology and equipment disciplines. Its specialist list illustrates why scope filtering is essential; it is not Aldolphin's list.

### 2. False ceilings and light partitions

- Ownership: `ceilings-and-partitions`. Explain suspended ceilings and lightweight partition work in normal language, with gypsum terminology where supported. Cover layout, height, lighting/ventilation openings and access requirements.
- Differentiate: explain interfaces with other trades and what a room sketch or site photos should show. Keep decorative gypsum, suspended ceilings and structural walls distinct.
- Four questions: What measurements help with a quote? How are lighting/AC openings considered? Can ceiling and partition work be discussed together? What affects materials and finishing scope?
- Proof: Nad Al Sheba's documented gypsum finishes. Do not imply that every partition system or a pictured sandwich-panel roof is a suspended ceiling installation.
- Hold back: structural alterations, fire ratings, acoustic performance, specific board certifications and authority approvals until supported.
- References: [Rockhill](https://rockhillmaintenance.ae/services/false-ceiling-light-partitions-installation/) and [SKN Arabic](https://www.skntechnicalservices.com/ar/false-ceiling) expose task/material wording and quotation questions. Do not reuse their discounts, rates or technical compliance claims.

### 3. AC, ventilation and air filtration

- Ownership: `air-conditioning`. Give installation and maintenance distinct short explanations; retain ventilation and air filtration so the page covers the full activity, not just a split-unit repair phrase.
- Differentiate: turn symptoms such as weak cooling into a useful enquiry checklist (unit type, room/property, symptom, access). Avoid DIY instructions for electrical/refrigerant work.
- Four questions: What should I send about weak cooling? What information helps plan a new installation? Does the activity include ventilation and air filtration? What affects the installation or maintenance quotation?
- Proof: Nad Al Sheba, Al Awir and Al Ajban; Sharjah has a supplied AC scope but illustrative photographs and remains out of the search sitemap until real publication evidence is approved.
- Hold back: chiller/VRF expertise, medical filtration, air-quality guarantees, refrigerant brands, fixed attendance times, AMC packages and seasonal discounts unless confirmed.
- Reference: [AGEC Arabic](https://agec.ae/ar) separates installation/maintenance/problem intent. Its response-time, credentials and availability statements must not be copied. Its Arabic page also points to English-only additional pages: complete Arabic service content is a useful Aldolphin opportunity.

### 4. Carpentry and wood flooring

- Ownership: `carpentry-and-wood-flooring`. Explain carpentry and wood flooring as related but separate enquiry types. Ask about layout, existing surface, room size and finish preferences.
- Differentiate: distinguish material choice from installation scope; use photographed flooring work where documented. Treat parquet as a useful customer term, not proof of every product system.
- Four questions: What room dimensions are helpful? What should I show of the existing floor? Can flooring and other carpentry be discussed together? What affects materials and installation pricing?
- Proof: wood/rubber flooring in all three photographic projects. Do not relabel rubber floors as wood, parquet or laminate.
- Hold back: bespoke kitchen manufacturing, particular laminate/vinyl/SPC systems, moisture guarantees and free measurement policies until verified.
- References: [Dagia English](https://www.dagiadeveloper.com/carpentry-wood-flooring-dubai/) and [Falcon Shine Arabic](https://falconshinetechnical.com/ar/service/carpentry/) demonstrate specific task and material language. Their service lists and guarantees extend beyond Aldolphin's established evidence.

### 5. Building cleaning

- Ownership: `building-cleaning`. Clarify building/residential cleaning, property spaces and the information needed to arrange work. Explain how area, occupancy, access and frequency influence an assessment.
- Differentiate: avoid an unverified supermarket menu of cleaning extras. The licence confirms an activity, not every competitor package.
- Four questions: What spaces should I identify? What property and access details should I send? How should I describe a one-off versus recurring request? What determines the proposed scope and quotation?
- Proof: no documented cleaning case study currently mapped. Keep stock service imagery illustrative and use no invented client reviews or project results.
- Hold back: high-rise facade/rope access, pest control, disinfection, specialist mould remediation, tank/duct cleaning, insured-team claims, supplied-material policies and recurring contracts until verified. Frame recurring interest as an enquiry, not an offered contract.
- Reference: [Building Cleaning by Lusail Arabic](https://buildingcleaning.ae/ar/) separates customer requests by property, frequency and task. Its large menu and pricing model are not evidence of Aldolphin's scope or prices.

### 6. Plumbing and sanitary installation

- Ownership: `plumbing-and-sanitary`. Focus on sanitary fixtures, water connections, drainage and fit-out enquiries. Clarify bathroom/kitchen fixture requests and existing versus new connection points.
- Differentiate: installation-led queries are clearer licence matches than a generic emergency-plumber landing page. Ask for fixture type, existing connection photos and access.
- Four questions: What fixture details help with a quote? Can I enquire about new water/drainage connections? What existing-installation photographs should I send? What affects assessment and quotation scope?
- Proof: sanitary installations in Nad Al Sheba; documented drainage networks in Al Awir and Al Ajban. Keep septic-system scope attached to those actual projects and do not infer every plumbing technique from it.
- Hold back: emergency availability, electronic leak detection, drain jetting, gas work, particular pipe brands and unlimited repair guarantees until verified.
- Reference: [Elsareh Alomrani Arabic](https://www.elsarehalomrani.com/services/plumbing/) connects fixture and network terminology with site images. Its PPR/PEX methods, pressure tests and leak-repair claims need independent Aldolphin confirmation.

### 7. Engraving and ornamentation

- Ownership: `engraving-and-ornamentation`. Lead with architectural/decorative surface work. Ask for the design reference, surface/material, dimensions and intended location before proposing an approach.
- Differentiate: ambiguity is the key issue. Explain the type of enquiry rather than implying that every search for engraving describes this company.
- Four questions: What design reference is helpful? What surface/material details are needed? How do size and access affect the enquiry? How is the decorative scope agreed before execution?
- Proof: none of the existing photographic projects independently documents this specialist work. A future approved decorative-detail project would be valuable; no invented portfolio example now.
- Hold back: CNC/laser machinery, gift personalisation, trophies, signage production, particular metals/glass methods, in-house design and machine capacity until verified.
- Reference: [Danat Al Rabee](https://danatalrabeepainting.com/service/engraving-ornamentation-works/) uses architectural ornamentation language; [Khebra](https://khebra-uae.com/services/zakhrafa/) surfaced mixed household/gift intent in discovery. The latter is a search-result observation, not a full-page technical source.

### 8. Painting

- Ownership: `painting`. Cover internal/external painting and scope-specific requests supported by the existing project description. Ask for area, current surface, occupied rooms and desired finish.
- Differentiate: useful preparation and quotation questions are more credible than unverified per-room rates or cheapest-price claims. Explain that the surface condition and agreed preparation affect the quote.
- Four questions: What wall/room information should I send? Can internal and external work be discussed? What finish/reference information helps? What surface conditions affect the quotation?
- Proof: Nad Al Sheba includes interior/exterior painting and wallpaper. Do not present wallpaper as a separate eleventh licensed service.
- Hold back: damp treatment/root-cause repairs, specific paint partnerships, workmanship warranty periods, free colour consultations, fixed room prices and completion times until verified.
- Reference: [DXB Enterprises Arabic](https://dxbenterprises.com/services/painting/) explicitly explains substrate preparation and internal/external differences. Its preparation methods and specialist finish promises are not automatically Aldolphin capabilities.

### 9. Plaster works

- Ownership: `plaster`. Use بلاستر / لياسة in explanatory wording while leaving the original licence transcription untouched. Distinguish surface preparation from plasterboard ceiling installation.
- Differentiate: ask about existing surface, area, required finish and adjacent painting/tiling scope. Avoid treating all moisture or structural cracking as a cosmetic plaster task.
- Four questions: What surface photos are useful? How is plaster work different from a suspended gypsum ceiling? What dimensions affect a quote? Can preparation be discussed alongside painting or tiling?
- Proof: licensed activity, but no independently described plaster case study in the current portfolio. Gypsum-board wall photos alone are not proof of wet plastering.
- Hold back: structural crack remediation, damp-proofing systems, guaranteed crack prevention and specialist decorative cornices until verified.
- References: [BUNER English](https://www.bunertechservices.com/services/plaster-works.html) frames the activity as surface preparation; [Falcon Shine Arabic](https://falconshinetechnical.com/ar/service/plaster/) confirms the market's use of بلاستر and لياسة. Do not copy its material/process or warranty statements.

### 10. Floor and wall tiling

- Ownership: `floor-and-wall-tiling`. Describe floor/wall installation and ask about tile type, dimensions, area, current substrate, room use and access. Use سيراميك as a customer term without silently promising every tile/stone system.
- Differentiate: separate customer-supplied material, preparation and installation questions. Explain quotation factors rather than asserting a fixed per-square-metre rate.
- Four questions: What tile and area details should I send? What should I show of the existing surface? Can floor and wall work be discussed together? How do preparation and access affect a quote?
- Proof: licence activity; the current wood/rubber/epoxy flooring case studies do not establish tile installation. Do not label those photos as tiling evidence.
- Hold back: marble/granite restoration, pool tiling, specialist large slabs, waterproofing guarantees and material supply policies until verified.
- Reference: [SKN Arabic](https://www.skntechnicalservices.com/ar/tiling) distinguishes installation terms and assessment inputs. Its extra flooring systems, prices and approval claims are not Aldolphin's offering.

## Draft search presentation

These title/H1 candidates are a starting brief for Chunk 3/5, not new URLs or final publication approval. Use the brand's configured name rather than duplicating it in many content records. Descriptions should summarise the actual page, with one service intent and a relevant next step; do not pad to a fixed character count or promise a particular Google snippet. Keep legal licence wording in its existing full-title field.

| ID                          | English title candidate (append configured brand)          | Arabic title candidate (append configured brand)     | H1 direction                                                           |
| --------------------------- | ---------------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------------------------- |
| electromechanical           | Electromechanical Equipment Installation & Maintenance UAE | تركيب وصيانة المعدات الكهروميكانيكية في الإمارات     | Installation and maintenance of the equipment the visitor identifies   |
| ceilings-and-partitions     | False Ceilings & Light Partitions in the UAE               | تركيب الأسقف المعلقة والقواطع الخفيفة في الإمارات    | Suspended ceilings and lightweight partitions                          |
| air-conditioning            | AC Installation, Maintenance & Ventilation UAE             | تركيب وصيانة التكييف والتهوية في الإمارات            | AC, ventilation and air filtration; full scope remains in page copy    |
| carpentry-and-wood-flooring | Carpentry & Wood Flooring Installation UAE                 | النجارة وتركيب الأرضيات الخشبية في الإمارات          | Carpentry and wood flooring, clearly separated within the page         |
| building-cleaning           | Building & Residential Cleaning Services UAE               | خدمات تنظيف المباني والمساكن في الإمارات             | Property-specific building and residential cleaning enquiries          |
| plumbing-and-sanitary       | Plumbing & Sanitary Installation UAE                       | تركيب الأدوات والتمديدات الصحية في الإمارات          | Fixtures and connections for the space being fitted out                |
| engraving-and-ornamentation | Engraving & Architectural Ornamentation UAE                | أعمال النقش والزخرفة المعمارية في الإمارات           | Decorative/architectural enquiry without machine/material promises     |
| painting                    | Interior & Exterior Painting Services UAE                  | أعمال الصبغ والدهانات الداخلية والخارجية في الإمارات | Internal/external painting and preparation scope                       |
| plaster                     | Plaster Works & Wall Surface Preparation UAE               | أعمال البلاستر واللياسة في الإمارات                  | Plaster and finishing preparation, distinct from plasterboard ceilings |
| floor-and-wall-tiling       | Floor & Wall Tile Installation UAE                         | تركيب بلاط الأرضيات والجدران في الإمارات             | Floor/wall tiling, area/material/installation scope                    |

For each language, write the meta description after the page copy, reflecting its actual scope and enquiry path. A draft pattern is "[specific activity] for [supported property context] in the UAE. [Useful assessment input or next step]." Localise the sentence rather than repeating the pattern mechanically. A concise existing description can be retained if it remains accurate; keyword variations do not justify twenty near-duplicate paragraphs.

## Evidence and internal-link map

| Service                 | Existing evidence                                        | Link treatment                                                                                       |
| ----------------------- | -------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| Electromechanical       | Wiring is described, specialist equipment is not         | Do not create a specialist-equipment project claim from wiring alone                                 |
| Ceilings/partitions     | Nad Al Sheba gypsum finishes                             | Link Nad Al Sheba only with the exact documented finish wording                                      |
| AC                      | Nad Al Sheba, Al Awir, Al Ajban; short Sharjah scope     | Feature the three real photographic projects; retain Sharjah's illustrative label and noindex status |
| Carpentry/wood flooring | Wood/rubber flooring in all three photographic projects  | Link each relevant existing project; caption materials accurately                                    |
| Cleaning                | No documented case study                                 | Service content and enquiry only; no fabricated "recent clean"                                       |
| Plumbing/sanitary       | Sanitary work in all three; drainage in Al Awir/Al Ajban | Link precise fixture/drainage scope rather than generic pipe-stock photos                            |
| Engraving               | No documented case study                                 | Use illustrative service image and a factual enquiry checklist                                       |
| Painting                | Nad Al Sheba                                             | Link the documented painting scope; avoid invented project outcomes                                  |
| Plaster                 | No independently documented plaster case                 | Do not repurpose gypsum-board images as wet-plaster proof                                            |
| Tiling                  | No independently documented tile case                    | Do not repurpose wood/epoxy flooring as tiled work                                                   |

The homepage feature selection is Nad Al Sheba, Al Awir and Al Ajban. Link to their actual detail pages and use the supplied photos. Preserve existing project/service relationships unless an approved description supports an addition. Download the public company profile from Our Works; the source PDF remains separate from the website's public edition.

## Technical search work and non-goals

### Existing foundations to preserve

- Static HTML and real English/Arabic routes; one H1 and ordinary crawlable links.
- Central origin/configuration, self-canonicals and reciprocal `en` / `ar` / `x-default` alternates once an origin is configured.
- Absolute social metadata, generated XML sitemap and truthful Organization/Service data.
- Omission of unconfirmed address/service-area fields; Organization remains appropriate until the requirements for a truthful LocalBusiness description are met.
- Preview noindex in HTML and host headers, with crawling allowed so noindex can be read. Sharjah and the 404 stay out of the indexable route set.

### Chunk 5 changes

Add visible breadcrumbs and corresponding BreadcrumbList data; align titles/descriptions with the approved content map; improve contextual service/project links and image descriptions; verify every eligible route against an isolated example-domain production build, then restore preview. Document Google Business Profile ownership/verification, genuine review requests and consistent confirmed company information as account-owner launch tasks.

Google's [supported meta tags](https://developers.google.com/search/docs/crawling-indexing/special-tags) explicitly exclude meta keywords from ranking. Google also [retired FAQ rich results in 2026](https://developers.google.com/search/updates); write the questions for visitors, not as a rich-result promise. Avoid unsupported schema types, fake AggregateRating data, keyword stuffing, copied city pages, unsafe repair instructions, and decorative technical tags. Metadata supports discovery; it does not guarantee ranking or rich results.

Research all seven emirates as a market. Keep proposed location modifiers in a verification backlog until service coverage is confirmed. Publish no Saudi service claims, fictitious branches, exact response times, prices, warranties, equipment certifications or business hours. Genuine project locations can remain factual project descriptions. A listing or review programme requires real company account access and owner participation; there is no paid listing or backlink purchase in this rollout.

## Acceptance and measurement

- All ten activities retain the existing IDs and exact approved licence-title fields, with distinct English/Arabic editorial briefs.
- Every proposed specialist term is either scope-supported or explicitly held back. No absent evidence is replaced with stock project proof.
- No new synonym/city route, country claim, price or warranty is authorised by this document.
- Track indexation, impressions, clicks and CTR by service, language and UAE country filter after a real launch. Use Search Console to revise candidates after 30/60/90 days; note low-data periods rather than drawing unsupported conclusions.
- Actual search volumes and local rankings remain **unavailable** in this research. Qualified-enquiry reporting requires the real delivery workflow; preview summaries are not leads.

## Primary guidance consulted

- [Google SEO starter guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [Google multilingual versions](https://developers.google.com/search/docs/specialty/international/localized-versions)
- [Google supported meta tags](https://developers.google.com/search/docs/crawling-indexing/special-tags)
- [Google local ranking factors](https://support.google.com/business/answer/7091)
- [Google LocalBusiness structured data](https://developers.google.com/search/docs/appearance/structured-data/local-business)
- [Google spam policies](https://developers.google.com/search/docs/essentials/spam-policies)
- [Google documentation changes, including FAQ retirement](https://developers.google.com/search/updates)

Provider pages linked in the ten briefs are primary examples of their own content only. The report's observations about wording and page structure do not verify their claims or explain their search ranking.
