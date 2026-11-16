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
  ),
  new Service(
    'building-cleaning',
    { en: 'Building Cleaning Services', ar: 'خدمات تنظيف المبان والمساكن' },
    { en: 'Building cleaning', ar: 'تنظيف المباني' },
    {
      en: 'Cleaning services for buildings and residences.',
      ar: 'خدمات تنظيف المباني والمساكن.',
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
  ),
  new Service(
    'engraving-and-ornamentation',
    { en: 'Engraving & Ornamentation  Works', ar: 'اعمال النقش  والزخرفة' },
    { en: 'Engraving and ornamentation', ar: 'النقش والزخرفة' },
    {
      en: 'Engraving and decorative ornamentation for building finishes.',
      ar: 'أعمال النقش والزخرفة ضمن تشطيبات المباني.',
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
  ),
  new Service(
    'plaster',
    { en: 'Plaster Works', ar: 'اعمال البلستر' },
    { en: 'Plaster works', ar: 'أعمال اللياسة' },
    {
      en: 'Plaster work to prepare or repair surfaces before finishing.',
      ar: 'أعمال اللياسة لتجهيز الأسطح أو ترميمها قبل التشطيب.',
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
  ),
];

export const legacyServiceIds = {
  ac: 'air-conditioning',
  electrical: 'electromechanical',
  maintenance: null,
} as const;
