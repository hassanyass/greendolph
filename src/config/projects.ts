import type { Project } from '../domain/project.ts';
import {
  alAjbanPhotos,
  alAwirPhotos,
  nadAlShebaPhotos,
} from './project-photos.ts';

export const companyProfilePath = '/downloads/aldolphin-company-profile.pdf';

export const projects: readonly Project[] = [
  {
    id: 'nad-al-sheba',
    location: { en: 'Nad Al Sheba', ar: 'ند الشبا' },
    title: { en: 'Prefabricated rooms and majlis', ar: 'غرف جاهزة ومجالس' },
    summary: {
      en: 'Design and fit-out of prefabricated rooms and majlis spaces in Nad Al Sheba, with four finished dog houses and a fenced outdoor exercise area.',
      ar: 'تصميم وتنفيذ غرف جاهزة ومجالس متكاملة التشطيب في ند الشبا، إلى جانب أربعة بيوت للكلاب ومنطقة خارجية مسيّجة للعب.',
    },
    scope: [
      {
        title: { en: 'Building envelope', ar: 'هيكل المبنى وعزله' },
        items: [
          {
            en: 'Sandwich-panel roofing with roof waterproofing.',
            ar: 'أسقف من ألواح الساندوتش بانل مع عزل مائي للسطح.',
          },
          {
            en: 'Cement board on the exterior and gypsum board on the interior, with thermal insulation between them.',
            ar: 'ألواح سمنت بورد للجدران الخارجية وألواح جبس بورد للجدران الداخلية، مع عزل حراري بينهما.',
          },
        ],
      },
      {
        title: {
          en: 'Interior and building services',
          ar: 'التشطيبات والتجهيزات',
        },
        items: [
          {
            en: 'Decorative gypsum work, wallpaper, and interior and exterior painting.',
            ar: 'ديكورات جبسية وورق جدران ودهانات داخلية وخارجية.',
          },
          {
            en: 'Electrical wiring, integrated lighting, air conditioning and sanitary fixtures.',
            ar: 'تمديدات كهربائية ونظام إنارة متكامل وأجهزة تكييف وأطقم صحية.',
          },
          {
            en: 'Wood, rubber and epoxy flooring.',
            ar: 'أرضيات خشبية ومطاطية وأرضيات إيبوكسي.',
          },
        ],
      },
      {
        title: {
          en: 'Dog houses and outdoor area',
          ar: 'بيوت الكلاب والمنطقة الخارجية',
        },
        items: [
          {
            en: 'Four finished enclosures with purpose-made flooring and doors, plus fencing for the exercise area.',
            ar: 'أربعة بيوت متكاملة التشطيب بأرضيات وأبواب مخصصة، مع سياج لمنطقة اللعب الخارجية.',
          },
        ],
      },
    ],
    photos: nadAlShebaPhotos,
    serviceIds: [
      'ceilings-and-partitions',
      'air-conditioning',
      'carpentry-and-wood-flooring',
      'plumbing-and-sanitary',
      'painting',
    ],
    indexable: true,
  },
  {
    id: 'al-awir',
    location: { en: 'Al Awir', ar: 'العوير' },
    title: {
      en: 'Prefabricated rooms and outdoor enclosures',
      ar: 'غرف جاهزة ومرافق خارجية',
    },
    summary: {
      en: 'Design and fit-out of sandwich-panel rooms in Al Awir, with a drainage network, four dog houses and a fenced exercise area.',
      ar: 'تصميم وتنفيذ غرف جاهزة من ألواح الساندوتش بانل في العوير، مع شبكة صرف صحي وأربعة بيوت للكلاب ومنطقة لعب مسيّجة.',
    },
    scope: [
      {
        title: {
          en: 'Room construction and fit-out',
          ar: 'تنفيذ الغرف وتجهيزها',
        },
        items: [
          {
            en: 'Fully finished sandwich-panel rooms with electrical wiring and air conditioning.',
            ar: 'غرف متكاملة التشطيب من ألواح الساندوتش بانل، مع التمديدات الكهربائية والتكييف.',
          },
          {
            en: 'Wood and rubber flooring, plus sanitary fixtures.',
            ar: 'أرضيات خشبية ومطاطية وتركيب الأطقم الصحية.',
          },
          {
            en: 'Drainage network with a septic tank, soakaways and inspection chambers.',
            ar: 'شبكة صرف صحي تشمل خزان الصرف وحفر الامتصاص وغرف التفتيش.',
          },
        ],
      },
      {
        title: { en: 'Dog houses and yard', ar: 'بيوت الكلاب والساحة' },
        items: [
          {
            en: 'Four finished dog houses with purpose-made flooring and doors, plus fencing for the exercise area.',
            ar: 'أربعة بيوت للكلاب متكاملة التشطيب مع أرضيات وأبواب مخصصة وسياج خارجي لمنطقة اللعب.',
          },
        ],
      },
    ],
    photos: alAwirPhotos,
    serviceIds: [
      'air-conditioning',
      'carpentry-and-wood-flooring',
      'plumbing-and-sanitary',
    ],
    indexable: true,
  },
  {
    id: 'al-ajban',
    location: { en: 'Al Ajban', ar: 'العجبان' },
    title: { en: 'Prefabricated room fit-out', ar: 'تنفيذ وتجهيز غرف جاهزة' },
    summary: {
      en: 'Design and fit-out of prefabricated sandwich-panel rooms in Al Ajban, including drainage, electrical wiring, air conditioning, flooring and sanitary fixtures.',
      ar: 'تصميم وتنفيذ غرف جاهزة متكاملة التشطيب في العجبان باستخدام ألواح الساندوتش بانل، مع أعمال الصرف الصحي والكهرباء والتكييف والأرضيات والأطقم الصحية.',
    },
    scope: [
      {
        title: { en: 'Construction and finishes', ar: 'التنفيذ والتشطيبات' },
        items: [
          {
            en: 'Fully finished sandwich-panel rooms with wood and rubber flooring.',
            ar: 'غرف من ألواح الساندوتش بانل متكاملة التشطيب، مع أرضيات خشبية ومطاطية.',
          },
          {
            en: 'Electrical wiring, air conditioning and sanitary fixtures.',
            ar: 'تمديدات كهربائية وأجهزة تكييف وأطقم صحية.',
          },
        ],
      },
      {
        title: { en: 'Drainage', ar: 'الصرف الصحي' },
        items: [
          {
            en: 'A drainage network serving the rooms, with a septic tank, soakaways and inspection chambers.',
            ar: 'شبكة صرف صحي متكاملة للغرف، مع خزان صرف وحفر امتصاص وغرف تفتيش.',
          },
        ],
      },
    ],
    photos: alAjbanPhotos,
    serviceIds: [
      'air-conditioning',
      'carpentry-and-wood-flooring',
      'plumbing-and-sanitary',
    ],
    indexable: true,
  },
  {
    id: 'sharjah',
    location: { en: 'Sharjah', ar: 'الشارقة' },
    title: { en: 'Air conditioning installation', ar: 'توريد وتركيب المكيفات' },
    summary: {
      en: 'Supply and installation of air conditioning units for a project in Sharjah.',
      ar: 'توريد وتركيب أجهزة التكييف ضمن مشروع في الشارقة.',
    },
    scope: [],
    photos: [],
    serviceIds: ['air-conditioning'],
    indexable: false,
  },
];
