import type { ServiceEditorial } from '../../domain/service';

export const serviceContentEn: Record<string, ServiceEditorial> = {
  electromechanical: {
    heading: 'Start with the equipment.',
    overview:
      'A useful equipment enquiry starts with what the system does and how it is used. Whether you are planning an installation or need maintenance on an existing unit, identifying the equipment helps define the work before discussing a quotation.',
    scope: [
      {
        title: 'New installations',
        text: 'Share the equipment type, intended use and proposed position. Available space, connection points and access help establish what the installation needs.',
      },
      {
        title: 'Existing equipment',
        text: 'Describe the issue and any recent changes in operation. Model information and maintenance records, where available, help us discuss the appropriate assessment.',
      },
    ],
    requests: [
      'Equipment installation in a new or fitted-out space',
      'Maintenance enquiries for an identified unit',
      'Equipment work alongside a wider property project',
    ],
    quotationFactors:
      'Equipment type, installation condition, required connections and access all influence the scope. Send the available details first so we can establish whether a site assessment or further equipment information is needed.',
    faqs: [
      {
        question: 'What equipment information should I send?',
        answer:
          'Include the equipment name, make and model if known, its purpose and whether it is installed already. An existing specification or a safely accessible label photograph is useful; do not remove covers to obtain it.',
      },
      {
        question: 'Can I enquire about equipment already in use?',
        answer:
          'Yes. Describe the symptom, when you noticed it and any recent work on the installation. We first need to identify the equipment and requirements before confirming the proposed maintenance scope.',
      },
      {
        question: 'What affects an equipment quotation?',
        answer:
          'The equipment, its condition, connection requirements and access are key inputs. A new installation and maintenance on an existing system may require different work, so a model number alone does not establish the price.',
      },
      {
        question: 'Which site details are helpful?',
        answer:
          'State the property location, where the unit sits, available working space and any building access restrictions. For equipment-specific or specialist requests, share the specification so suitability can be confirmed before arrangements are made.',
      },
    ],
  },
  'ceilings-and-partitions': {
    heading: 'Shape the space around its use.',
    overview:
      'A suspended ceiling or a light partition changes how a room feels and functions. Start with the layout you need, then consider ceiling height, door positions and the lighting or ventilation that shares the space.',
    scope: [
      {
        title: 'Suspended ceilings',
        text: 'Describe the area, preferred ceiling layout and any gypsum details. Lighting openings, AC outlets and access to existing installations should be considered together.',
      },
      {
        title: 'Light partitions',
        text: 'Show the proposed room division and any openings. The intended use of each space and existing surfaces help define the partition and finishing requirements.',
      },
    ],
    requests: [
      'A suspended ceiling for a room or fit-out',
      'A lightweight division within an existing space',
      'Gypsum details coordinated with lighting and AC',
    ],
    quotationFactors:
      'Area, height, layout complexity, openings and the agreed finishing scope affect the quotation. Identify existing ceilings or partitions that may need alteration, and mention any work that must be coordinated with other trades.',
    faqs: [
      {
        question: 'Which measurements help with a ceiling or partition quote?',
        answer:
          'For a ceiling, share the room length, width and approximate height. For a partition, include its proposed length, height and openings. A simple sketch can help; final measurements may need to be checked on site.',
      },
      {
        question: 'How should I show lighting and AC openings?',
        answer:
          'Mark their existing or proposed positions on a sketch and share room photographs. Include any access panels you need so the ceiling layout can be discussed with the building services in mind.',
      },
      {
        question: 'Can I include ceilings and partitions in one request?',
        answer:
          'Yes. Describe both in the same enquiry and show which rooms they affect. This helps distinguish ceiling work, room divisions and the finishing required where the two meet.',
      },
      {
        question: 'What should I say about materials and finishes?',
        answer:
          'Share reference images and explain the appearance and room use you have in mind. If a specification requires a particular board, fire rating or acoustic performance, include it for confirmation before the scope is agreed.',
      },
    ],
  },
  'air-conditioning': {
    heading: 'Cooling starts with the whole space.',
    overview:
      'An AC request can involve a new installation, an existing unit that is not cooling as expected, or ventilation and filtration within a fit-out. Describing the space and the concern helps us separate the work you need from assumptions about the cause.',
    scope: [
      {
        title: 'Installation',
        text: 'Share the room layout, intended use and proposed indoor and outdoor unit positions. Existing electrical connections, drainage routes and access are useful details for an installation enquiry.',
      },
      {
        title: 'Maintenance, ventilation and filtration',
        text: 'For an existing system, describe weak cooling, airflow concerns or other changes you have noticed. For ventilation or air filtration work, identify the system and the area it serves.',
      },
    ],
    requests: [
      'AC installation for a new room or fit-out',
      'An existing unit with weak cooling or airflow',
      'Ventilation or air filtration installation and maintenance',
    ],
    quotationFactors:
      'The system type, space, installation routes, condition and access influence the work. A symptom alone does not confirm the fault or parts required; share the details so the next assessment step can be established.',
    faqs: [
      {
        question: 'What should I send if the AC is not cooling well?',
        answer:
          'Tell us the unit type, room size, what has changed and when the issue occurs. Include model information if available. Describe what you observe without opening the unit or attempting electrical or refrigerant work.',
      },
      {
        question: 'What information helps plan a new AC installation?',
        answer:
          'Share the room dimensions and use, whether a unit has been selected, and proposed indoor and outdoor positions. Photographs of the space and existing connection points help clarify the installation requirements.',
      },
      {
        question: 'Does this service cover ventilation and air filtration?',
        answer:
          'Yes. The licensed activity includes installation and maintenance of AC, ventilation and air filtration systems. Identify the system and its intended use so the specific requirements can be reviewed.',
      },
      {
        question: 'What affects an installation or maintenance quotation?',
        answer:
          'System specifications, routes for connections and drainage, access and the work identified during assessment all matter. For an existing unit, the cause and required work need to be established before a repair scope can be confirmed.',
      },
    ],
  },
  'carpentry-and-wood-flooring': {
    heading: 'A finish that fits the room.',
    overview:
      'Carpentry and wood flooring begin with the space, its dimensions and the finish you want to achieve. Keeping the material choice and installation requirements clear helps turn a reference image into a practical enquiry.',
    scope: [
      {
        title: 'Carpentry works',
        text: 'Describe the timber element or fitting, where it will go and how it will be used. Dimensions, reference photographs and the existing surroundings help define the requested work.',
      },
      {
        title: 'Wood flooring',
        text: 'Show the current floor, room layout and preferred wood or parquet appearance. Thresholds, edges and existing floor levels are useful details when discussing installation.',
      },
    ],
    requests: [
      'Wood flooring for a room or fit-out',
      'Carpentry based on dimensions and a reference',
      'Flooring coordinated with other interior finishes',
    ],
    quotationFactors:
      'Area, the selected material, laying pattern, existing floor condition and edge details affect the scope. Tell us whether flooring has already been sourced, and identify any existing finish that would need to be removed.',
    faqs: [
      {
        question: 'Which room dimensions should I provide?',
        answer:
          'Send the approximate length and width of each space, plus a sketch for irregular rooms. Include doorways and adjoining areas if the flooring is intended to continue between rooms.',
      },
      {
        question: 'What should I show of the existing floor?',
        answer:
          'Share photographs of the surface, room edges and thresholds, and mention uneven areas or visible damage. These details help identify what needs checking before installation is scoped.',
      },
      {
        question: 'Can I discuss flooring and carpentry together?',
        answer:
          'Yes. Explain each element and how they meet in the room. Choosing carpentry and wood flooring as the main service in the form lets you describe both in a single enquiry.',
      },
      {
        question: 'Do I need to choose the wood or parquet first?',
        answer:
          'A reference is enough to start a conversation. If you have selected a product, include its specification, quantity and intended pattern so material suitability and installation requirements can be discussed before agreement.',
      },
    ],
  },
  'building-cleaning': {
    heading: 'Define the spaces that need attention.',
    overview:
      'Building and residential cleaning requests are easier to plan when the areas and their current condition are clear. Tell us which rooms, shared spaces or parts of the property need attention, and whether people will be using the space during the work.',
    scope: [
      {
        title: 'Buildings and shared spaces',
        text: 'Identify the building areas, approximate size and access arrangements. Mention shared entrances, occupied spaces and any restrictions that affect how the work can be arranged.',
      },
      {
        title: 'Residential spaces',
        text: 'List the rooms and surfaces that need cleaning, including areas that require particular attention. Photographs help explain the condition more clearly than the property size alone.',
      },
    ],
    requests: [
      'Cleaning for identified rooms in a home',
      'Cleaning of specified building or shared areas',
      'A property cleaning enquiry with preferred timing',
    ],
    quotationFactors:
      'The area, surfaces, current condition, occupancy and access influence the proposed work. Tell us whether you need a one-off clean or would like to discuss repeat visits, so the arrangement and availability can be confirmed for your property.',
    faqs: [
      {
        question: 'Which spaces should I include in a cleaning enquiry?',
        answer:
          'List each room or shared area you want included and identify the surfaces needing attention. Mention any areas to exclude so the request describes the actual job rather than the whole property by default.',
      },
      {
        question: 'Which property and access details are useful?',
        answer:
          'Provide the location, property type, approximate area, whether it is occupied and any entry restrictions. Let us know about limited working hours or areas that are difficult to reach.',
      },
      {
        question: 'Can I ask about one-off or repeat cleaning?',
        answer:
          'State whether you need a single visit or want to discuss repeat work, along with your preferred timing. The proposed arrangement and availability need to be confirmed for your property.',
      },
      {
        question: 'What determines the cleaning scope and quotation?',
        answer:
          'The spaces, surface condition, access and tasks requested are considered together. Identify unusual contamination or specialist requirements at enquiry stage so suitability can be checked before any arrangement is agreed.',
      },
    ],
  },
  'plumbing-and-sanitary': {
    heading: 'Connect the room’s essential fixtures.',
    overview:
      'A bathroom, kitchen or fitted-out room needs fixtures and connections planned together. Describe what you are installing and where water and drainage points already exist, so the enquiry covers the installation around the fixture as well as the fixture itself.',
    scope: [
      {
        title: 'Sanitary fixtures',
        text: 'Identify the basin, WC, shower or other fixture, its proposed position and whether it has been selected. Existing connection photographs help explain the current arrangement.',
      },
      {
        title: 'Water and drainage connections',
        text: 'Show the points to be connected and whether the room is new or already fitted out. Layout, access and the relationship to existing installations help define the work.',
      },
    ],
    requests: [
      'Sanitary fixture installation in a bathroom',
      'Water and drainage connections for a fit-out',
      'Installation planning around existing connection points',
    ],
    quotationFactors:
      'Fixture specifications, connection positions, routing, existing conditions and access affect the quotation. Mention whether walls or floors are already finished and identify any other trades involved in the same area.',
    faqs: [
      {
        question: 'Which fixture details help with a quotation?',
        answer:
          'Name the fixture, share its specification if selected, and show where it will be installed. Include the number of items and whether the request concerns a new position or an existing connection.',
      },
      {
        question: 'Can I enquire about new water and drainage connections?',
        answer:
          'Yes. Send the room layout, the fixtures to be served and any known existing connection points. The route and relationship to the current installation may need checking on site before the scope is agreed.',
      },
      {
        question: 'Which photographs of the existing installation are useful?',
        answer:
          'Show the room, the fixture location and any visible water or drainage points from a safe position. Do not dismantle fixtures or open concealed installations just to take photographs.',
      },
      {
        question: 'What could require a closer site assessment?',
        answer:
          'Concealed connections, a changed fixture position, restricted access or uncertain drainage routes may need checking. Tell us whether surrounding finishes are complete so any access and associated finishing work can be discussed.',
      },
    ],
  },
  'engraving-and-ornamentation': {
    heading: 'Bring the decorative detail into focus.',
    overview:
      'Architectural engraving and ornamentation starts with a clear design reference and the surface it is intended for. Share the pattern, material and location so the decorative work can be discussed in the context of the space.',
    scope: [
      {
        title: 'The design reference',
        text: 'Provide a photograph, drawing or pattern showing the effect you have in mind. Identify the part of the design you want reproduced and its approximate scale.',
      },
      {
        title: 'The surface and setting',
        text: 'Describe the material, dimensions and whether the feature is indoors or outdoors. Its current condition, height and access help establish the proposed scope.',
      },
    ],
    requests: [
      'Decorative treatment for a wall or architectural feature',
      'Ornamentation based on a supplied design reference',
      'An enquiry about a specified surface and pattern',
    ],
    quotationFactors:
      'Design detail, size, material, surface condition and access influence the proposed approach. The reference and intended finish need to be reviewed before a method or execution scope is confirmed.',
    faqs: [
      {
        question: 'What kind of design reference should I send?',
        answer:
          'A clear photograph or drawing is a useful starting point. Explain which pattern or detail you want and whether it is intended as a repeated motif, a border or a single feature.',
      },
      {
        question: 'Which surface information is needed?',
        answer:
          'Identify the material if known, approximate dimensions, location and current finish. A close-up and a wider view help show both the surface detail and its setting.',
      },
      {
        question: 'How do size and access affect the enquiry?',
        answer:
          'A small detail and a large repeated pattern can require different preparation and execution. Include the feature height, available working space and access restrictions so these can be considered with the design.',
      },
      {
        question: 'How is the decorative scope agreed?',
        answer:
          'The reference, surface, dimensions and intended finish are discussed first. The enquiry should establish the suitable approach and extent of work before execution is arranged; a reference image alone does not confirm a particular machine or method.',
      },
    ],
  },
  painting: {
    heading: 'A fresh finish begins with the surface.',
    overview:
      'Repainting a lived-in room and finishing a new space start from different conditions. Describe the walls or other surfaces, what is there now and the appearance you want, so preparation and painting can be considered together.',
    scope: [
      {
        title: 'Interior painting',
        text: 'Identify the rooms, surfaces and preferred finish. Mention furniture, occupancy and areas that must remain usable so the work can be discussed around the property.',
      },
      {
        title: 'Exterior painting',
        text: 'Show the elevations or exterior areas, their current condition and access. Height and surrounding spaces help define the work beyond the paint colour alone.',
      },
    ],
    requests: [
      'Repainting rooms in an existing property',
      'Painting within a new fit-out',
      'Interior and exterior surfaces in one project',
    ],
    quotationFactors:
      'Area, surface condition, access, colour changes and the agreed preparation affect the scope. Highlight peeling paint, cracks or damp marks so any underlying issue can be considered separately from the finish.',
    faqs: [
      {
        question: 'What wall or room information should I send?',
        answer:
          'List the rooms and surfaces, share approximate dimensions and show the existing paint in photographs. Mention occupied rooms and furniture that may affect access to the work.',
      },
      {
        question: 'Can I include interior and exterior painting together?',
        answer:
          'Yes. Identify the indoor rooms and exterior areas separately in the same enquiry. Their surface conditions, access and preparation needs may differ, so each area should be clear.',
      },
      {
        question: 'What if I have not chosen the colour or finish?',
        answer:
          'You can start with reference photographs or a description of the appearance you want. If a colour code or product specification has already been selected, include it so the requested finish can be discussed accurately.',
      },
      {
        question:
          'How do cracks, peeling paint or damp marks affect the quote?',
        answer:
          'Show these areas when you enquire. They may change preparation requirements or indicate a separate issue needing assessment. Painting over a mark is not a confirmation that its underlying cause has been resolved.',
      },
    ],
  },
  plaster: {
    heading: 'Prepare the base for the finish.',
    overview:
      'Plaster work helps prepare a wall for its next finish. Whether the surface is new or has uneven or damaged areas, explain the current condition and what is planned afterwards so the preparation can be scoped appropriately.',
    scope: [
      {
        title: 'New surfaces',
        text: 'Identify the wall material, area and intended final finish. These details help frame the preparation and plaster work needed before the next trade starts.',
      },
      {
        title: 'Existing surfaces',
        text: 'Show the extent of uneven or damaged areas as well as the surrounding wall. Cracks, loose material or damp marks should be identified before treating the request as a surface finish alone.',
      },
    ],
    requests: [
      'Plaster preparation for a new wall',
      'An enquiry about uneven or damaged wall areas',
      'Surface preparation before painting or another finish',
    ],
    quotationFactors:
      'Area, substrate condition, the extent of preparation, access and the planned next finish affect the quotation. A small visible defect does not always describe the full preparation required; include a wider view of the surface.',
    faqs: [
      {
        question: 'Is plaster work the same as a gypsum-board ceiling?',
        answer:
          'They are different requests. This page covers plaster and wall-surface preparation; suspended ceilings and lightweight gypsum-board partitions have their own service page. State the surface and result you need if you are unsure which to select.',
      },
      {
        question: 'What surface details should I provide?',
        answer:
          'Send the approximate area, wall material if known, and photographs showing the condition. Explain whether it is a new surface or an existing wall with localised or widespread damage.',
      },
      {
        question: 'Should I mention the finish planned after plastering?',
        answer:
          'Yes. Tell us whether painting, tiling or another finish is planned and whether another contractor is involved. The next finish and agreed sequence help clarify the preparation requirements.',
      },
      {
        question:
          'Can cracks or damp marks be treated as simple plaster repairs?',
        answer:
          'They need to be described and assessed first. Their cause can affect the proposed work; a surface repair should not be assumed to resolve an underlying moisture or structural issue.',
      },
    ],
  },
  'floor-and-wall-tiling': {
    heading: 'Plan the layout before the first tile.',
    overview:
      'Tile installation brings together the surface, tile dimensions and the layout you want to see. Explain whether the work is for a floor, a wall or both, and show the existing condition so the installation can be discussed as a complete area.',
    scope: [
      {
        title: 'Floor tiling',
        text: 'Share the room shape, area and tile size. Doorways, edges and adjoining floor levels help explain the intended layout and finishing details.',
      },
      {
        title: 'Wall tiling',
        text: 'Identify the wall area, intended tile height and openings or fixtures. For bathrooms and kitchens, include the positions of fittings and visible connection points.',
      },
    ],
    requests: [
      'Floor tiling in a room or interior fit-out',
      'Wall tiling for a kitchen or bathroom',
      'Floor and wall tiles planned as one layout',
    ],
    quotationFactors:
      'Tile size, pattern, cuts, substrate condition, access and any existing finish to be removed affect the scope. Tell us whether tiles are already supplied, and identify any preparation or other work to be discussed separately.',
    faqs: [
      {
        question: 'Which measurements help with a tiling quotation?',
        answer:
          'For floors, share the room length and width. For walls, include the tiled height and width, plus doors, windows and fittings. Approximate measurements help start the discussion; final quantities may need a site check.',
      },
      {
        question: 'Should I send the tile size and preferred pattern?',
        answer:
          'Yes. Include the tile dimensions, a product reference if selected, and a sketch or photograph of the layout you want. These details help explain cuts, edges and alignment.',
      },
      {
        question:
          'What should I show if there are already tiles or another finish?',
        answer:
          'Show the existing surface and any visible unevenness, damage or loose areas. Mention whether removal is part of your request so preparation is considered rather than assuming a ready-to-tile surface.',
      },
      {
        question: 'Can bathroom floor and wall tiles be discussed together?',
        answer:
          'Yes. Share one room layout showing both areas, fixture positions and tile choices. Identify any separate plumbing or waterproofing requirements for review; tile installation alone does not confirm those additional works.',
      },
    ],
  },
};
