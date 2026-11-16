import type { Localized } from '../domain/service';

export const servicePhotoPath = (id: string) => `/images/services/${id}`;

interface ServicePresentation {
  tint: string;
  placement: 'start' | 'end';
  leadAlt: Localized;
  detailAlt: Localized;
  enquiry: { en: readonly string[]; ar: readonly string[] };
}

const presentation: Readonly<Record<string, ServicePresentation>> = {
  electromechanical: {
    tint: '#dce7ec',
    placement: 'end',
    leadAlt: {
      en: 'Electrical cabinet being serviced',
      ar: 'صيانة لوحة تحكم كهربائية',
    },
    detailAlt: {
      en: 'Technician inspecting the wiring in a control cabinet',
      ar: 'فني يفحص أسلاك لوحة تحكم',
    },
    enquiry: {
      en: [
        'Equipment type and model',
        'Fault codes or unusual behaviour',
        'Access to the equipment',
      ],
      ar: [
        'نوع المعدة وطرازها',
        'رموز الأعطال أو علامات الخلل',
        'إمكانية الوصول إلى المعدة',
      ],
    },
  },
  'ceilings-and-partitions': {
    tint: '#dce5e2',
    placement: 'start',
    leadAlt: {
      en: 'Suspended ceiling grid and glass partitions in an office',
      ar: 'سقف معلّق وقواطع زجاجية في مكتب',
    },
    detailAlt: {
      en: 'Drywall panels being installed along a framed wall',
      ar: 'تركيب ألواح الجدران الجافة على هيكل داخلي',
    },
    enquiry: {
      en: [
        'Plan or room dimensions',
        'Ceiling height and partition locations',
        'Access for lights, vents and fittings',
      ],
      ar: [
        'المخطط أو أبعاد الغرفة',
        'ارتفاع السقف ومواقع القواطع',
        'منافذ الوصول إلى الإضاءة والتهوية والتجهيزات',
      ],
    },
  },
  'air-conditioning': {
    tint: '#dce7e9',
    placement: 'end',
    leadAlt: {
      en: 'Technician servicing an outdoor air-conditioning unit',
      ar: 'فني يصون وحدة تكييف خارجية',
    },
    detailAlt: {
      en: 'Wall-mounted indoor air-conditioning unit',
      ar: 'وحدة تكييف داخلية مثبّتة على الجدار',
    },
    enquiry: {
      en: [
        'Unit type or room size',
        'Cooling, airflow or filtration concern',
        'Indoor and outdoor unit locations',
      ],
      ar: [
        'نوع الوحدة أو مساحة الغرفة',
        'مشكلة التبريد أو تدفق الهواء أو تنقيته',
        'مواقع الوحدات الداخلية والخارجية',
      ],
    },
  },
  'carpentry-and-wood-flooring': {
    tint: '#e8d4b8',
    placement: 'start',
    leadAlt: {
      en: 'Wood parquet laid in a herringbone pattern',
      ar: 'باركيه خشبي مركّب بنمط متعرّج',
    },
    detailAlt: {
      en: 'Hands shaping wood with a hammer and chisel',
      ar: 'تشكيل الخشب بمطرقة وإزميل',
    },
    enquiry: {
      en: [
        'Floor or fitting dimensions',
        'Preferred timber, finish or plank pattern',
        'Condition of the floor or existing fittings',
      ],
      ar: [
        'أبعاد الأرضية أو التجهيزات',
        'نوع الخشب أو التشطيب أو نمط الألواح المفضّل',
        'حالة الأرضية أو التجهيزات القائمة',
      ],
    },
  },
  'building-cleaning': {
    tint: '#dee6d5',
    placement: 'end',
    leadAlt: {
      en: 'Window being cleaned from inside a building',
      ar: 'تنظيف نافذة من داخل المبنى',
    },
    detailAlt: {
      en: 'Gloved hands spraying cleaning solution on glass',
      ar: 'يدان ترتديان قفازين وترشّان محلول التنظيف على الزجاج',
    },
    enquiry: {
      en: [
        'Property type and approximate size',
        'Rooms, surfaces or areas to clean',
        'Single visit or recurring cleaning',
      ],
      ar: [
        'نوع العقار ومساحته التقريبية',
        'الغرف والأسطح أو المناطق المطلوب تنظيفها',
        'زيارة واحدة أو تنظيف دوري',
      ],
    },
  },
  'plumbing-and-sanitary': {
    tint: '#d3e4e8',
    placement: 'start',
    leadAlt: {
      en: 'Metal tap connected to a blue supply pipe',
      ar: 'صنبور معدني موصول بأنبوب تغذية أزرق',
    },
    detailAlt: {
      en: 'Hands using a tool on a pipe connection',
      ar: 'يدان تستخدمان أداة للعمل على وصلة أنبوب',
    },
    enquiry: {
      en: [
        'Fixtures or connections to install',
        'Location of the supply and drain points',
        'Photos or drawings of existing pipework',
      ],
      ar: [
        'الأدوات الصحية أو الوصلات المطلوب تركيبها',
        'مواقع نقاط التغذية والصرف',
        'صور أو مخططات للتمديدات القائمة',
      ],
    },
  },
  'engraving-and-ornamentation': {
    tint: '#e5d4c2',
    placement: 'end',
    leadAlt: {
      en: 'Openwork decorative panel with a carved floral pattern',
      ar: 'لوح زخرفي مفرّغ بنقوش نباتية',
    },
    detailAlt: {
      en: 'Carver shaping the openings in a lattice panel',
      ar: 'حرفي يشكّل الفتحات في لوح زخرفي مفرّغ',
    },
    enquiry: {
      en: [
        'Surface material and area',
        'Pattern or reference image',
        'Location and intended finish',
      ],
      ar: [
        'خامة السطح ومساحته',
        'النمط أو الصورة المرجعية',
        'الموقع والتشطيب المطلوب',
      ],
    },
  },
  painting: {
    tint: '#edd6cb',
    placement: 'start',
    leadAlt: {
      en: 'Painter applying a coating to an interior wall',
      ar: 'دهّان يطلي جداراً داخلياً',
    },
    detailAlt: {
      en: 'Paint roller with brown paint beside a stepladder',
      ar: 'أسطوانة طلاء بنية بجانب سلّم',
    },
    enquiry: {
      en: [
        'Surfaces and approximate area',
        'Current condition of the surfaces',
        'Preferred colour and sheen',
      ],
      ar: [
        'الأسطح ومساحتها التقريبية',
        'الحالة الحالية للأسطح',
        'اللون ودرجة اللمعان المفضّلان',
      ],
    },
  },
  plaster: {
    tint: '#e8e0cd',
    placement: 'end',
    leadAlt: {
      en: 'Worker applying plaster to a wall',
      ar: 'عامل ينفّذ أعمال اللياسة على جدار',
    },
    detailAlt: {
      en: 'Trowel smoothing a fresh coat on a wall',
      ar: 'مالج يسوّي طبقة لياسة حديثة على الجدار',
    },
    enquiry: {
      en: [
        'Wall or ceiling area',
        'New surface or existing plaster',
        'Uneven areas or damage to repair',
      ],
      ar: [
        'مساحة الجدران أو الأسقف',
        'سطح جديد أو لياسة قائمة',
        'مواضع عدم الاستواء أو التلف المطلوب إصلاحها',
      ],
    },
  },
  'floor-and-wall-tiling': {
    tint: '#dedee9',
    placement: 'start',
    leadAlt: {
      en: 'Gloved hand aligning tiles with levelling spacers',
      ar: 'يد بقفاز تحاذي البلاط باستخدام فواصل تسوية',
    },
    detailAlt: {
      en: 'Tiled walls in a finished bathroom',
      ar: 'جدران مبلّطة في حمّام مكتمل التشطيب',
    },
    enquiry: {
      en: [
        'Floor or wall dimensions',
        'Tile size and preferred layout',
        'Existing tiles and any removal needed',
      ],
      ar: [
        'أبعاد الأرضية أو الجدران',
        'مقاس البلاط ونمط تركيبه المفضّل',
        'البلاط القائم وما يلزم إزالته',
      ],
    },
  },
};

export function servicePresentation(id: string) {
  const design = presentation[id];
  if (!design) throw new Error(`Missing service presentation for "${id}"`);
  return design;
}
