import type { Locale } from '../domain/routes';

export const aboutCopy = {
  en: {
    intro:
      'We help homeowners, businesses and property teams in the UAE plan and carry out installation, maintenance and finishing work.',
    company: 'Building services and interior fit-outs',
    companyText: [
      'Aldolphin Alakhthar brings ten licensed services together for homes, workplaces and managed properties. If you’re fitting out a space, we can discuss how the AC, plumbing and partitions fit into the same scope. We also handle individual jobs, from maintaining equipment to painting a room.',
      'When you get in touch, we ask how you use the space, what you need and when we can access the site. Those details help us explain what the quote covers and what still needs to be checked.',
    ],
    visionTitle: 'Our vision',
    vision:
      'To become a trusted name for technical and maintenance services across the UAE, with the long-term ambition to serve customers in Saudi Arabia and other GCC markets.',
    missionTitle: 'Our mission',
    mission:
      'To give customers a clear way to get technical work done. We focus on defining the scope, coordinating the trades involved and carrying out the agreed work with care.',
    valuesTitle: 'What guides our work',
    values: [
      {
        title: 'Attention to the finish',
        text: 'Pay attention to the details that affect how a space works, from installations to the final finish.',
      },
      {
        title: 'Trust and integrity',
        text: 'Explain what the quotation covers and flag anything that still needs to be checked.',
      },
      {
        title: 'Planning around the property',
        text: 'Plan around access, working hours and the order in which the different trades need to work.',
      },
      {
        title: 'Customer satisfaction',
        text: 'Listen to how you use the property so the proposed work meets your needs.',
      },
    ],
  },
  ar: {
    intro:
      'نساعد أصحاب المنازل والمنشآت وفرق إدارة العقارات في الإمارات على تخطيط أعمال التركيب والصيانة والتشطيبات وتنفيذها.',
    company: 'أعمال المباني والتجهيزات الداخلية',
    companyText: [
      'تقدّم مؤسسة الدولفين الأخضر عشر خدمات فنية مرخّصة للمنازل وأماكن العمل والعقارات المُدارة. إذا كنت تجهّز مساحة، نناقش معك التكييف والسباكة والقواطع ضمن نطاق واحد. وننفّذ أيضاً أعمالاً منفردة، مثل صيانة المعدات أو دهان غرفة.',
      'عند تواصلك معنا، نسألك عن استخدام المكان والأعمال المطلوبة وأوقات الدخول إلى الموقع. تساعدنا هذه التفاصيل على توضيح ما يشمله عرض السعر وما يحتاج إلى معاينة.',
    ],
    visionTitle: 'رؤيتنا',
    vision:
      'أن نصبح اسماً موثوقاً في الخدمات الفنية والصيانة في الإمارات، مع طموح على المدى الطويل لخدمة عملاء في السعودية وأسواق خليجية أخرى.',
    missionTitle: 'رسالتنا',
    mission:
      'أن نسهّل على عملائنا إنجاز الأعمال الفنية من خلال تحديد نطاق العمل بوضوح، وتنسيق التخصصات اللازمة، وتنفيذ الأعمال المتفق عليها بعناية.',
    valuesTitle: 'القيم التي توجّه عملنا',
    values: [
      {
        title: 'العناية بالتشطيب',
        text: 'نهتم بالتفاصيل التي تؤثر في استخدام المكان، بدءاً من التركيبات وحتى التشطيب النهائي.',
      },
      {
        title: 'الثقة والنزاهة',
        text: 'نوضّح ما يشمله عرض السعر ونبيّن النقاط التي تحتاج إلى مزيد من التحقّق.',
      },
      {
        title: 'التخطيط حسب ظروف الموقع',
        text: 'نراعي ظروف الوصول إلى الموقع وساعات العمل وترتيب المهام بين التخصصات المختلفة.',
      },
      {
        title: 'رضا العملاء',
        text: 'نستمع إلى احتياجاتك وطريقة استخدامك للعقار حتى تناسبك الأعمال المقترحة.',
      },
    ],
  },
} satisfies Record<
  Locale,
  {
    intro: string;
    company: string;
    companyText: string[];
    visionTitle: string;
    vision: string;
    missionTitle: string;
    mission: string;
    valuesTitle: string;
    values: { title: string; text: string }[];
  }
>;
