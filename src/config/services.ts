import { Service } from '../domain/service.ts';

// Full Arabic titles follow the supplied transcription pending comparison with the original licence.
export const services: readonly Service[] = [
  new Service(
    'electromechanical',
    {
      en: 'Electromechanical Equipment Installation and Maintenance',
      ar: 'اعمال تركيب المعدات الكهروميكانيكية وصيانتها',
    },
    { en: 'Electromechanical equipment', ar: 'المعدات الكهروميكانيكية' },
    {
      en: 'Installation and maintenance of electromechanical equipment in buildings.',
      ar: 'تركيب المعدات الكهروميكانيكية في المباني وصيانتها.',
    },
    {
      en: 'Share the equipment type, model, site conditions and any fault symptoms so we can assess the scope.',
      ar: 'أرسل نوع المعدة وطرازها وظروف الموقع وأعراض العطل إن وجدت لتحديد نطاق العمل.',
    },
  ),
  new Service(
    'ceilings-and-partitions',
    {
      en: 'False Ceiling & Light Partitions Installation',
      ar: 'تركيب السقف المعلقة و القواطع الخفيفة',
    },
    { en: 'Ceilings and partitions', ar: 'الأسقف والقواطع' },
    {
      en: 'Installation of suspended ceilings and lightweight interior partitions.',
      ar: 'تركيب الأسقف المعلقة والقواطع الداخلية الخفيفة.',
    },
    {
      en: 'Share the floor plan or room dimensions and tell us where access is needed for lights, ventilation or other fittings.',
      ar: 'شارك مخطط المساحة أو أبعادها وحدّد مواضع الإضاءة والتهوية والتجهيزات التي يلزم الوصول إليها.',
    },
  ),
  new Service(
    'air-conditioning',
    {
      en: 'Air-Conditioning, Ventilations & Air Filtration Systems Installation & Maintenance',
      ar: 'تركيب  انظمة التكييف والتهوية وتنقية الهواء وصيانتها',
    },
    { en: 'Air conditioning and ventilation', ar: 'التكييف والتهوية' },
    {
      en: 'Installation and maintenance of air conditioning, ventilation and air filtration systems.',
      ar: 'تركيب وصيانة أنظمة التكييف والتهوية وتنقية الهواء.',
    },
    {
      en: 'For an existing system, share the type of unit and describe the problem. For an installation, include the room size and intended use.',
      ar: 'للأنظمة القائمة، اذكر نوع الوحدة ووصف المشكلة. وللتركيب الجديد، أرسل مساحة الغرفة وطريقة استخدامها.',
    },
    {
      src: '/images/ac.webp',
      alt: {
        en: 'Technician servicing an air conditioner',
        ar: 'فني يصون وحدة تكييف',
      },
    },
  ),
  new Service(
    'carpentry-and-wood-flooring',
    {
      en: 'Carpentry & wood Flooring Works',
      ar: 'أعمال النجارة و تركيب الرضيات  الخشبية',
    },
    { en: 'Carpentry and wood flooring', ar: 'النجارة والأرضيات الخشبية' },
    {
      en: 'Carpentry and installation of wood flooring for interior spaces.',
      ar: 'أعمال النجارة وتركيب الأرضيات الخشبية للمساحات الداخلية.',
    },
    {
      en: 'Share the dimensions, preferred wood finish and condition of the existing floor or fittings.',
      ar: 'أرسل الأبعاد والتشطيب الخشبي المفضّل وحالة الأرضية أو التجهيزات الحالية.',
    },
  ),
  new Service(
    'building-cleaning',
    { en: 'Building Cleaning Services', ar: 'خدمات تنظيف المبان والمساكن' },
    { en: 'Building cleaning', ar: 'تنظيف المباني' },
    {
      en: 'Cleaning services for buildings and residences.',
      ar: 'خدمات تنظيف المباني والمساكن.',
    },
    {
      en: 'Tell us the type and size of the property, the areas to clean and whether you need a single visit or recurring cleaning.',
      ar: 'أخبرنا بنوع العقار ومساحته والأماكن المطلوب تنظيفها وما إذا كنت تحتاج إلى زيارة واحدة أو تنظيف دوري.',
    },
  ),
  new Service(
    'plumbing-and-sanitary',
    {
      en: 'Plumbing & Sanitary Installation',
      ar: 'تركيب الدوات والتمديدات الصحية',
    },
    {
      en: 'Plumbing and sanitary installation',
      ar: 'السباكة والتركيبات الصحية',
    },
    {
      en: 'Installation of plumbing lines and sanitary fixtures.',
      ar: 'تركيب تمديدات السباكة والأدوات الصحية.',
    },
    {
      en: 'List the fixtures or connections you need installed and share photos or plans of the existing plumbing when available.',
      ar: 'اذكر الأدوات أو التوصيلات المطلوبة وأرسل صوراً أو مخططات للتمديدات القائمة عند توفرها.',
    },
  ),
  new Service(
    'engraving-and-ornamentation',
    { en: 'Engraving & Ornamentation  Works', ar: 'اعمال النقش  والزخرفة' },
    { en: 'Engraving and ornamentation', ar: 'النقش والزخرفة' },
    {
      en: 'Engraving and decorative ornamentation for building finishes.',
      ar: 'أعمال النقش والزخرفة ضمن تشطيبات المباني.',
    },
    {
      en: 'Share the surface material, the area to be decorated and a sketch or reference image of the pattern.',
      ar: 'حدّد خامة السطح والمساحة المطلوب زخرفتها، وأرسل رسماً أو صورة مرجعية للنمط المطلوب.',
    },
  ),
  new Service(
    'painting',
    { en: 'Painting Contracting', ar: 'اعمال الصباغ والدهانات' },
    { en: 'Painting', ar: 'الدهانات' },
    {
      en: 'Painting work for property surfaces, including preparation as agreed in the scope.',
      ar: 'أعمال دهان أسطح العقارات مع تجهيزها وفق نطاق العمل المتفق عليه.',
    },
    {
      en: 'Describe the surfaces, their current condition and your preferred colour and finish.',
      ar: 'صف الأسطح وحالتها الحالية وحدّد اللون والتشطيب المفضّلين.',
    },
  ),
  new Service(
    'plaster',
    { en: 'Plaster Works', ar: 'اعمال البلستر' },
    { en: 'Plaster works', ar: 'أعمال اللياسة' },
    {
      en: 'Plaster work to prepare or repair surfaces before finishing.',
      ar: 'أعمال اللياسة لتجهيز الأسطح أو ترميمها قبل التشطيب.',
    },
    {
      en: 'Tell us which walls or ceilings need plaster, how large the area is and whether it is new or existing.',
      ar: 'حدّد الجدران أو الأسقف المطلوب تنفيذ اللياسة عليها ومساحتها وما إذا كانت جديدة أم قائمة.',
    },
  ),
  new Service(
    'floor-and-wall-tiling',
    { en: 'Floor & Wall Tiling Works', ar: 'أعمال تبليط الرضيات والجدران' },
    { en: 'Floor and wall tiling', ar: 'تبليط الأرضيات والجدران' },
    {
      en: 'Installation of floor and wall tiles for building interiors.',
      ar: 'تركيب بلاط الأرضيات والجدران داخل المباني.',
    },
    {
      en: 'Share the area, tile size and layout, and tell us whether old tiles need to be removed.',
      ar: 'أرسل المساحة ومقاس البلاط ونمط تركيبه، ووضّح ما إذا كان يلزم إزالة البلاط القديم.',
    },
  ),
];

export const legacyServiceIds = {
  ac: 'air-conditioning',
  electrical: 'electromechanical',
  maintenance: null,
} as const;
