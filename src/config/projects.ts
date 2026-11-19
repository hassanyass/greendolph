import { ProjectPhoto, type Project } from '../domain/project.ts';
import {
  alAjbanPhotos,
  alAwirPhotos,
  nadAlShebaPhotos,
  sharjahPhotos,
} from './project-photos.ts';

export const companyProfilePath = '/downloads/aldolphin-company-profile.pdf';

// Order controls the homepage: the first project receives the larger feature.
export const featuredProjectIds: readonly string[] = [
  'nad-al-sheba',
  'al-awir',
  'al-ajban',
];

export const projects: readonly Project[] = [
  {
    id: 'nad-al-sheba',
    location: { en: 'Nad Al Sheba', ar: 'ند الشبا' },
    title: { en: 'Prefabricated rooms and majlis', ar: 'غرف جاهزة ومجالس' },
    teaser: {
      en: 'From insulated rooms to finished interiors: gypsum details, lighting, AC and flooring brought together in one project.',
      ar: 'من الغرف المعزولة إلى المساحات الجاهزة للاستخدام؛ تشطيبات جبسية وإنارة وتكييف وأرضيات اجتمعت في مشروع واحد.',
    },
    summary: {
      en: 'Insulated prefabricated rooms and majlis spaces in Nad Al Sheba, fitted out with gypsum finishes, lighting and AC. The project also included four dog houses and a fenced exercise area.',
      ar: 'غرف جاهزة ومجالس معزولة في ند الشبا، مع تشطيبات جبسية وإنارة وتكييف. شمل المشروع أيضاً أربعة بيوت للكلاب ومنطقة خارجية مسيّجة للعب.',
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
    homepagePhoto: new ProjectPhoto(
      '/images/home/projects/nad-al-sheba',
      800,
      600,
      nadAlShebaPhotos[0].caption,
    ),
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
    teaser: {
      en: 'Finished rooms with wood and rubber flooring, sanitary fixtures and a dedicated drainage network.',
      ar: 'غرف متكاملة التشطيب بأرضيات خشبية ومطاطية وأطقم صحية وشبكة صرف خاصة بها.',
    },
    location: { en: 'Al Awir', ar: 'العوير' },
    title: {
      en: 'Prefabricated rooms and outdoor enclosures',
      ar: 'غرف جاهزة ومرافق خارجية',
    },
    summary: {
      en: 'Sandwich-panel rooms in Al Awir with wood and rubber flooring, sanitary fixtures and a drainage network. Four finished dog houses and a fenced yard completed the outdoor area.',
      ar: 'غرف جاهزة في العوير بألواح ساندوتش بانل وأرضيات خشبية ومطاطية وأطقم صحية وشبكة صرف. وشملت الأعمال الخارجية أربعة بيوت للكلاب وساحة مسيّجة.',
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
    homepagePhoto: new ProjectPhoto(
      '/images/home/projects/al-awir',
      800,
      600,
      alAwirPhotos[0].caption,
    ),
    serviceIds: [
      'air-conditioning',
      'carpentry-and-wood-flooring',
      'plumbing-and-sanitary',
    ],
    indexable: true,
  },
  {
    id: 'al-ajban',
    teaser: {
      en: 'Room interiors fitted with AC, lighting, flooring and sanitary fixtures, supported by drainage works.',
      ar: 'تجهيز غرف بالتكييف والإنارة والأرضيات والأطقم الصحية، مع تنفيذ أعمال الصرف الصحي.',
    },
    location: { en: 'Al Ajban', ar: 'العجبان' },
    title: { en: 'Prefabricated room fit-out', ar: 'تنفيذ وتجهيز غرف جاهزة' },
    summary: {
      en: 'Prefabricated room fit-out in Al Ajban combining AC, wiring, flooring and sanitary fixtures. A dedicated drainage network serves the rooms, with a septic tank and inspection chambers.',
      ar: 'تجهيز غرف جاهزة في العجبان بالتكييف والتمديدات الكهربائية والأرضيات والأطقم الصحية، مع شبكة صرف خاصة بالغرف تشمل خزان صرف وغرف تفتيش.',
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
    homepagePhoto: new ProjectPhoto(
      '/images/home/projects/al-ajban',
      800,
      600,
      alAjbanPhotos[0].caption,
    ),
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
    scope: [
      {
        title: { en: 'Air conditioning units', ar: 'أجهزة التكييف' },
        items: [
          {
            en: 'Supplied the air conditioning units for the project.',
            ar: 'توريد أجهزة التكييف للمشروع.',
          },
          {
            en: 'Installed the supplied units on site in Sharjah.',
            ar: 'تركيب الأجهزة المورّدة في موقع المشروع في الشارقة.',
          },
        ],
      },
    ],
    photos: sharjahPhotos,
    illustrativePhotos: true,
    serviceIds: ['air-conditioning'],
    indexable: false,
  },
];
