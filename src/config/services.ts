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
      en: 'Electromechanical equipment installation and maintenance for UAE properties. Tell us what equipment is involved, what it serves and whether you need a new installation or work on an existing unit.',
      ar: 'تركيب وصيانة المعدات الكهروميكانيكية في مباني الإمارات. حدّد نوع المعدّة واستخدامها، وما إذا كنت تحتاج إلى تركيب جديد أو صيانة معدّة قائمة.',
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
      en: 'Fit out a room with a suspended ceiling or divide a larger space with lightweight partitions. Share your layout and any openings needed for lighting, ventilation or access.',
      ar: 'جهّز الغرفة بسقف معلّق أو قسّم مساحة أكبر بقواطع داخلية خفيفة. أرسل مخطط المساحة وبيّن الفتحات المطلوبة للإنارة أو التهوية أو الوصول إلى التمديدات.',
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
      en: 'Need a new AC system or help with weak cooling? We install and maintain air conditioning, ventilation and air filtration systems for homes and businesses in the UAE.',
      ar: 'هل تحتاج إلى تركيب مكيف جديد أو معالجة ضعف التبريد؟ ننفّذ أعمال تركيب وصيانة أنظمة التكييف والتهوية وتنقية الهواء للمنازل والمنشآت في الإمارات.',
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
      en: 'Plan your interior carpentry or wood flooring installation around the room layout. Tell us about the existing floor and the finish you’d like.',
      ar: 'نفّذ أعمال النجارة الداخلية أو ركّب أرضية خشبية تناسب توزيع الغرفة. أخبرنا بنوع الأرضية الحالية والتشطيب الذي تفضّله.',
    },
  ),
  new Service(
    'building-cleaning',
    { en: 'Building Cleaning Services', ar: 'خدمات تنظيف المبان والمساكن' },
    { en: 'Building cleaning', ar: 'تنظيف المباني' },
    {
      en: 'Arrange building or residential cleaning. Tell us which rooms or shared areas need attention and whether you’re planning a one-off clean or recurring work.',
      ar: 'نقدّم خدمات تنظيف المباني والمساكن. حدّد الغرف أو المساحات المشتركة المطلوب تنظيفها، واذكر ما إذا كنت تحتاج إلى زيارة واحدة أو تنظيف دوري.',
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
      en: 'Install plumbing lines and sanitary fixtures for a bathroom, kitchen or fit-out. Tell us which fixtures you’re fitting and whether water and drainage connections are already in place.',
      ar: 'نركّب تمديدات السباكة والأدوات الصحية للحمامات والمطابخ ومشاريع التشطيب. حدّد القطع المطلوبة وبيّن ما إذا كانت توصيلات المياه والصرف موجودة في الموقع.',
    },
  ),
  new Service(
    'engraving-and-ornamentation',
    { en: 'Engraving & Ornamentation  Works', ar: 'اعمال النقش  والزخرفة' },
    { en: 'Engraving and ornamentation', ar: 'النقش والزخرفة' },
    {
      en: 'Give a wall or architectural feature a decorative finish with engraving and ornamentation. Share the pattern, surface and approximate size so we can discuss the scope.',
      ar: 'أضف لمسة زخرفية إلى جدار أو عنصر معماري بأعمال النقش والزخرفة. أرسل التصميم المطلوب ونوع السطح وأبعاده التقريبية لنناقش نطاق التنفيذ.',
    },
  ),
  new Service(
    'painting',
    { en: 'Painting Contracting', ar: 'اعمال الصباغ والدهانات' },
    { en: 'Painting', ar: 'الدهانات' },
    {
      en: 'Refresh a room or plan painting for a new fit-out. Describe the surfaces, existing paint and preferred finish so the quote can account for preparation.',
      ar: 'جدّد دهان غرفة أو حدّد ألوان مشروعك الجديد. صف الأسطح وحالة الدهان الحالي والتشطيب المطلوب ليشمل عرض السعر أعمال التجهيز اللازمة.',
    },
  ),
  new Service(
    'plaster',
    { en: 'Plaster Works', ar: 'اعمال البلستر' },
    { en: 'Plaster works', ar: 'أعمال اللياسة' },
    {
      en: 'Prepare walls for painting or final finishes with plaster work. Tell us if you’re finishing a new surface or repairing uneven or damaged areas.',
      ar: 'جهّز الجدران للدهان أو التشطيب بأعمال اللياسة. أخبرنا إن كان العمل على سطح جديد أو لمعالجة مناطق متضرّرة أو غير مستوية.',
    },
  ),
  new Service(
    'floor-and-wall-tiling',
    { en: 'Floor & Wall Tiling Works', ar: 'أعمال تبليط الرضيات والجدران' },
    { en: 'Floor and wall tiling', ar: 'تبليط الأرضيات والجدران' },
    {
      en: 'Install floor or wall tiles in bathrooms, kitchens and other interiors. Share the area, tile dimensions and the layout you want so we can scope the installation.',
      ar: 'نركّب بلاط الأرضيات والجدران في الحمامات والمطابخ والمساحات الداخلية. أرسل مساحة السطح ومقاس البلاط وطريقة التوزيع التي تفضّلها لتحديد نطاق التركيب.',
    },
  ),
];

export const legacyServiceIds = {
  ac: 'air-conditioning',
  electrical: 'electromechanical',
  maintenance: null,
} as const;
