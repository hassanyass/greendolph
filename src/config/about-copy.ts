import type { Locale } from '../domain/routes';

export const aboutCopy = {
  en: {
    intro:
      'We help homeowners, businesses and property teams in the UAE plan and carry out installation, maintenance and finishing work.',
    company: 'Technical care for the spaces you use every day',
    companyText: [
      'Aldolphin Alakhthar brings together licensed trades for homes and workplaces. Our work covers air conditioning and ventilation, electromechanical equipment, plumbing, ceilings and partitions, and interior finishes.',
      'We start by understanding the space, the problem and any access constraints. We use those details to define the proposed work and prepare a quotation you can review before deciding how to proceed.',
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
        title: 'Quality and care',
        text: 'Pay attention to the details that affect how a space works, from installations to the final finish.',
      },
      {
        title: 'Trust and integrity',
        text: 'Explain what the quotation covers and flag anything that still needs to be checked.',
      },
      {
        title: 'Commitment and efficiency',
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
    company: 'عناية فنية بالأماكن التي تستخدمها كل يوم',
    companyText: [
      'تجمع مؤسسة الدولفين الأخضر عدداً من التخصصات الفنية المرخّصة لخدمة المنازل وأماكن العمل. تشمل أعمالنا التكييف والتهوية والمعدات الكهروميكانيكية والتمديدات الصحية والأسقف والقواطع والتشطيبات الداخلية.',
      'نبدأ بفهم طبيعة المكان والمشكلة وأي قيود تتعلّق بالوصول إلى الموقع. وبناءً على هذه التفاصيل نحدّد الأعمال المقترحة ونعدّ عرض سعر يمكنك مراجعته قبل اتخاذ قرار التنفيذ.',
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
        title: 'الجودة والعناية',
        text: 'نهتم بالتفاصيل التي تؤثر في استخدام المكان، بدءاً من التركيبات وحتى التشطيب النهائي.',
      },
      {
        title: 'الثقة والنزاهة',
        text: 'نوضّح ما يشمله عرض السعر ونبيّن النقاط التي تحتاج إلى مزيد من التحقّق.',
      },
      {
        title: 'الالتزام والكفاءة',
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
