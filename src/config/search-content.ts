import { brand } from './brand';
import { projects } from './projects';
import type { Locale, PageKey } from '../domain/routes';
import type { Localized } from '../domain/service';

interface SearchCopy {
  title: Localized;
  description: Localized;
}
interface ServiceSearchCopy extends SearchCopy {
  heading: Localized;
  projectLink?: Localized;
}

const pages: Record<string, SearchCopy> = {
  home: {
    title: {
      en: 'Technical Services in the UAE',
      ar: 'خدمات فنية في الإمارات',
    },
    description: {
      en: 'Installation, maintenance and fit-outs for UAE homes and businesses. Explore AC, plumbing, ceilings, flooring and finishing work, then request a quotation.',
      ar: 'أعمال التركيب والصيانة والتشطيبات للمنازل والمنشآت في الإمارات. تعرّف على خدمات التكييف والسباكة والأسقف والأرضيات والدهانات واطلب عرض سعر.',
    },
  },
  services: {
    title: {
      en: 'Installation, Maintenance & Finishing Services UAE',
      ar: 'خدمات التركيب والصيانة والتشطيبات في الإمارات',
    },
    description: {
      en: 'Explore ten licensed technical services: AC and ventilation, equipment, ceilings, carpentry, cleaning, plumbing, ornamentation, painting, plaster and tiling.',
      ar: 'تعرّف على خدماتنا الفنية العشر: التكييف والتهوية والمعدات والأسقف والنجارة والتنظيف والسباكة والزخرفة والدهانات واللياسة والتبليط.',
    },
  },
  about: {
    title: {
      en: 'About Our UAE Technical Services Company',
      ar: 'عن مؤسستنا للخدمات الفنية',
    },
    description: {
      en: 'Learn about our approach to technical services in the UAE: understanding the space, defining the scope and coordinating installation, maintenance and finishing.',
      ar: 'تعرّف على نهجنا في الخدمات الفنية في الإمارات: فهم احتياج المكان وتحديد نطاق العمل وتنسيق أعمال التركيب والصيانة والتشطيب.',
    },
  },
  contact: {
    title: {
      en: 'Request a Technical Services Quote UAE',
      ar: 'اطلب عرض سعر للخدمات الفنية في الإمارات',
    },
    description: {
      en: 'Tell us about your UAE property and the installation, maintenance or finishing work you need. Request a quote through the form or start a WhatsApp conversation.',
      ar: 'أخبرنا عن عقارك في الإمارات وأعمال التركيب أو الصيانة أو التشطيب المطلوبة. اطلب عرض سعر عبر النموذج أو تواصل معنا على واتساب.',
    },
  },
  works: {
    title: {
      en: 'UAE Fit-out Projects & Company Profile',
      ar: 'مشاريع التجهيز في الإمارات وملف الشركة',
    },
    description: {
      en: 'Explore documented room and majlis fit-outs in Nad Al Sheba, Al Awir and Al Ajban, with project photos and scope details. Download our Arabic-English company profile.',
      ar: 'اطّلع على مشاريع تجهيز الغرف والمجالس في ند الشبا والعوير والعجبان بالصور ونطاق الأعمال، ونزّل ملف الشركة باللغتين العربية والإنجليزية.',
    },
  },
  notFound: {
    title: { en: 'Page not found', ar: 'الصفحة غير موجودة' },
    description: {
      en: 'Find your way back to the Aldolphin Alakhthar website.',
      ar: 'عُد إلى موقع الدولفين الأخضر للخدمات الفنية.',
    },
  },
};

const services: Record<string, ServiceSearchCopy> = {
  electromechanical: {
    title: {
      en: 'Electromechanical Equipment Installation & Maintenance UAE',
      ar: 'تركيب وصيانة المعدات الكهروميكانيكية في الإمارات',
    },
    heading: {
      en: 'Electromechanical equipment installation and maintenance',
      ar: 'تركيب وصيانة المعدات الكهروميكانيكية',
    },
    description: {
      en: 'Enquire about electromechanical equipment installation or maintenance in the UAE. Share the equipment type, model and site details to discuss the scope.',
      ar: 'استفسر عن تركيب وصيانة المعدات الكهروميكانيكية في الإمارات. أرسل نوع المعدّة وطرازها ومعلومات الموقع لمناقشة نطاق العمل وعرض السعر.',
    },
  },
  'ceilings-and-partitions': {
    title: {
      en: 'False Ceilings & Light Partitions UAE',
      ar: 'تركيب الأسقف المعلقة والقواطع الخفيفة في الإمارات',
    },
    heading: {
      en: 'False ceilings and light partitions',
      ar: 'تركيب الأسقف المعلّقة والقواطع الخفيفة',
    },
    description: {
      en: 'Plan suspended ceilings, gypsum details and light partitions for your UAE property. Share the layout, dimensions and lighting or AC openings for a quotation.',
      ar: 'خطّط للأسقف المعلّقة وتفاصيل الجبس والقواطع الخفيفة في عقارك بالإمارات. أرسل التوزيع والمقاسات وفتحات الإنارة والتكييف لطلب عرض سعر.',
    },
    projectLink: {
      en: 'Gypsum finishes · {location}',
      ar: 'تشطيبات جبسية · {location}',
    },
  },
  'air-conditioning': {
    title: {
      en: 'AC Installation, Maintenance & Ventilation UAE',
      ar: 'تركيب وصيانة التكييف والتهوية في الإمارات',
    },
    heading: {
      en: 'AC installation, maintenance and ventilation',
      ar: 'تركيب وصيانة التكييف والتهوية',
    },
    description: {
      en: 'AC, ventilation and air filtration installation and maintenance in the UAE. Describe your space, system or cooling concern and request a quotation.',
      ar: 'تركيب وصيانة أنظمة التكييف والتهوية وتنقية الهواء في الإمارات. صف المساحة ونوع النظام أو مشكلة التبريد التي لاحظتها واطلب عرض سعر.',
    },
    projectLink: {
      en: 'AC and room fit-out · {location}',
      ar: 'تكييف وتجهيز غرف · {location}',
    },
  },
  'carpentry-and-wood-flooring': {
    title: {
      en: 'Carpentry & Wood Flooring Installation UAE',
      ar: 'النجارة وتركيب الأرضيات الخشبية في الإمارات',
    },
    heading: {
      en: 'Carpentry and wood flooring installation',
      ar: 'أعمال النجارة وتركيب الأرضيات الخشبية',
    },
    description: {
      en: 'Discuss carpentry and wood flooring for a UAE room or fit-out. Share dimensions, the existing surface and your preferred finish or parquet reference.',
      ar: 'ناقش أعمال النجارة وتركيب الأرضيات الخشبية في الإمارات. أرسل المقاسات وحالة الأرضية وصورة مرجعية للخشب أو الباركيه والتشطيب الذي تريده.',
    },
    projectLink: {
      en: 'Flooring in fitted-out rooms · {location}',
      ar: 'أرضيات ضمن تجهيز الغرف · {location}',
    },
  },
  'building-cleaning': {
    title: {
      en: 'Building & Residential Cleaning Services UAE',
      ar: 'خدمات تنظيف المباني والمساكن في الإمارات',
    },
    heading: {
      en: 'Building and residential cleaning',
      ar: 'تنظيف المباني والمساكن',
    },
    description: {
      en: 'Request building or residential cleaning in the UAE. Identify the rooms, shared areas, surface condition and access so the proposed work can be discussed.',
      ar: 'اطلب تنظيف المباني والمساكن في الإمارات. حدّد الغرف والمناطق المشتركة وحالة الأسطح وترتيبات الدخول لمناقشة الأعمال المطلوبة وعرض السعر.',
    },
  },
  'plumbing-and-sanitary': {
    title: {
      en: 'Plumbing & Sanitary Installation UAE',
      ar: 'تركيب الأدوات والتمديدات الصحية في الإمارات',
    },
    heading: {
      en: 'Plumbing and sanitary installation',
      ar: 'السباكة وتركيب الأدوات الصحية',
    },
    description: {
      en: 'Plan sanitary fixtures, water connections and drainage for a UAE bathroom, kitchen or fit-out. Share the layout and existing connections to request a quote.',
      ar: 'خطّط لتركيب الأدوات الصحية وتمديدات المياه والصرف لمشروعك في الإمارات. أرسل توزيع الحمّام أو المطبخ والتوصيلات القائمة لطلب عرض سعر.',
    },
    projectLink: {
      en: 'Sanitary installation and room fit-out · {location}',
      ar: 'تركيبات صحية وتجهيز غرف · {location}',
    },
  },
  'engraving-and-ornamentation': {
    title: {
      en: 'Architectural Engraving & Ornamentation UAE',
      ar: 'أعمال النقش والزخرفة المعمارية في الإمارات',
    },
    heading: {
      en: 'Architectural engraving and ornamentation',
      ar: 'النقش والزخرفة المعمارية',
    },
    description: {
      en: 'Discuss decorative engraving and architectural ornamentation in the UAE. Send your design reference, surface material and dimensions to define the proposed work.',
      ar: 'ناقش أعمال النقش والزخرفة المعمارية في الإمارات. أرسل التصميم المرجعي ونوع السطح وأبعاده لمناقشة التشطيب المطلوب وتحديد نطاق التنفيذ.',
    },
  },
  painting: {
    title: {
      en: 'Interior & Exterior Painting Services UAE',
      ar: 'أعمال الصبغ والدهانات الداخلية والخارجية في الإمارات',
    },
    heading: {
      en: 'Interior and exterior painting',
      ar: 'الدهانات الداخلية والخارجية',
    },
    description: {
      en: 'Plan interior or exterior painting for a UAE home or business. Describe the surfaces, existing paint and finish so preparation can be included in the quotation.',
      ar: 'خطّط للدهانات الداخلية والخارجية لمنزلك أو منشأتك في الإمارات. صف الأسطح وحالة الدهان والتشطيب المطلوب لتوضيح أعمال التجهيز وعرض السعر.',
    },
    projectLink: {
      en: 'Interior and exterior painting · {location}',
      ar: 'دهانات داخلية وخارجية · {location}',
    },
  },
  plaster: {
    title: {
      en: 'Plaster Works & Wall Preparation UAE',
      ar: 'أعمال البلاستر واللياسة في الإمارات',
    },
    heading: {
      en: 'Plaster work and wall preparation',
      ar: 'أعمال البلاستر واللياسة وتجهيز الجدران',
    },
    description: {
      en: 'Enquire about plaster work and wall preparation in the UAE. Share the surface condition, area and planned final finish to discuss the scope and quotation.',
      ar: 'استفسر عن أعمال البلاستر واللياسة وتجهيز الجدران في الإمارات. أرسل حالة السطح ومساحته والتشطيب التالي المخطّط له لمناقشة النطاق وعرض السعر.',
    },
  },
  'floor-and-wall-tiling': {
    title: {
      en: 'Floor & Wall Tile Installation UAE',
      ar: 'تركيب بلاط الأرضيات والجدران في الإمارات',
    },
    heading: {
      en: 'Floor and wall tile installation',
      ar: 'تركيب بلاط الأرضيات والجدران',
    },
    description: {
      en: 'Floor and wall tiling for UAE interiors, kitchens and bathrooms. Share tile sizes, the area, existing surface and layout to request an installation quotation.',
      ar: 'تركيب بلاط الأرضيات والجدران للمطابخ والحمّامات والمساحات الداخلية في الإمارات. أرسل مقاس البلاط والمساحة وحالة السطح والتوزيع لطلب عرض سعر.',
    },
  },
};

export function serviceSearch(id: string): ServiceSearchCopy {
  const value = services[id];
  if (!value) throw new Error(`Missing search presentation for service ${id}.`);
  return value;
}

export function searchPresentation(key: PageKey, locale: Locale) {
  const name = locale === 'ar' ? brand.arabicName : brand.name;
  if (key.startsWith('project:')) {
    const project = projects.find(({ id }) => id === key.slice(8));
    if (!project) throw new Error(`Unknown project ${key}.`);
    return {
      title: `${project.title[locale]} · ${project.location[locale]} | ${name}`,
      description: (project.teaser ?? project.summary)[locale],
    };
  }
  const value = key.startsWith('service:')
    ? serviceSearch(key.slice(8))
    : pages[key];
  if (!value) throw new Error(`Missing search presentation for ${key}.`);
  return {
    title: `${value.title[locale]} | ${name}`,
    description: value.description[locale],
  };
}
