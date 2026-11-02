import { Service, type Localized } from '../domain/service';
export type { Locale } from '../domain/routes';
export type { Localized } from '../domain/service';

export const services = [
  new Service(
    'ac',
    { en: 'Air conditioning', ar: 'التكييف' },
    { en: 'Comfort, in every degree.', ar: 'راحة في كل درجة.' },
    {
      en: 'AC repair, installation and maintenance for your space. Tell us about your system and the issue so we can understand the work and prepare a quotation.',
      ar: 'إصلاح وتركيب وصيانة أجهزة التكييف لمساحتك. أخبرنا بنوع الجهاز والمشكلة لنفهم احتياجاتك ونُعد عرض سعر مناسباً.',
    },
    '/images/ac.webp',
    {
      en: 'Technician maintaining an air conditioning unit',
      ar: 'فني يقوم بصيانة وحدة تكييف',
    },
  ),
  new Service(
    'electrical',
    { en: 'Electrical works', ar: 'الأعمال الكهربائية' },
    { en: 'Keep everyday life connected.', ar: 'لتستمر تفاصيل يومك.' },
    {
      en: 'Electrical repairs and installation work. Describe the fittings, lighting or electrical issue you need help with. The scope and requirements will be confirmed before work is agreed.',
      ar: 'أعمال الإصلاح والتركيب الكهربائية. وضّح احتياجاتك من التوصيلات أو الإضاءة أو الأعطال الكهربائية، ليتم تحديد نطاق العمل ومتطلباته قبل الاتفاق.',
    },
    '/images/electrical.webp',
    {
      en: 'Electrician working on an electrical control panel',
      ar: 'فني كهربائي يعمل على لوحة تحكم كهربائية',
    },
  ),
  new Service(
    'maintenance',
    { en: 'Property maintenance', ar: 'صيانة العقارات' },
    {
      en: 'A little care. A lasting difference.',
      ar: 'عناية بسيطة، وأثر يدوم.',
    },
    {
      en: 'Have several maintenance jobs in mind? Share your requirements and property type. We will review which works we can provide and confirm the scope in your quotation.',
      ar: 'هل لديك عدة أعمال صيانة؟ شاركنا متطلباتك ونوع العقار لنراجع الأعمال التي يمكننا تقديمها ونحدّد نطاقها في عرض السعر.',
    },
    '/images/interior.webp',
    {
      en: 'Bright living space with natural materials and carefully finished surfaces',
      ar: 'مساحة معيشة مضيئة بخامات طبيعية وتشطيبات متقنة',
    },
  ),
];

export const copy = {
  en: {
    title: 'Technical Services in the UAE | Aldolphin Alakhthar',
    description:
      'Explore AC repair, installation and electrical works from Aldolphin Alakhthar, a UAE technical services company. Discuss your property and request a quotation.',
    nav: ['Home', 'Services', 'About us', 'Contact'],
    lang: 'العربية',
    langLabel: 'Switch to Arabic',
    menu: 'Menu',
    close: 'Close',
    quote: 'Request a quote',
    eyebrow: 'TECHNICAL SERVICES · UNITED ARAB EMIRATES',
    heroTop: 'Good spaces.',
    heroBottom: 'In good hands.',
    heroText:
      'From the AC that keeps you cool to the details that make a space work. Technical care for the places you live and work.',
    explore: 'Explore our services',
    pause: 'Pause video',
    play: 'Play video',
    heroFoot: 'A little care goes a long way.',
    heroCaption: 'HERE FOR YOUR EVERYDAY',
    strip: [
      'AC repair & installation',
      'Electrical works',
      'Property maintenance',
    ],
    servicesLabel: '01 / WHAT WE DO',
    servicesTitle: 'Every space needs\na little expertise.',
    servicesText:
      'One place to start for your technical needs. Explore the work we do, then tell us what your space needs.',
    serviceExplore: 'Explore service',
    allServices: 'Find the right service',
    aboutLabel: '02 / WHO WE ARE',
    aboutTitle: 'The care behind\nyour everyday.',
    aboutText:
      'We are Aldolphin Alakhthar, a technical services company based in the UAE. We help look after the practical things that keep homes and workplaces running, from air conditioning to electrical works.',
    aboutMore: 'More about us',
    aboutDetail:
      'Every property has its own requirements. Our starting point is simple: understand what you need, discuss the work, and define the scope before moving forward. Tell us about your space and we can take the next step together.',
    aboutNote: 'For the places that matter.',
    aboutImageAlt: 'A calm, thoughtfully maintained living space',
    processLabel: '03 / A SIMPLE START',
    processTitle: 'From a small fix\nto your next project.',
    steps: [
      {
        title: 'Tell us what you need',
        text: 'Choose a service and share a few details about your space.',
      },
      {
        title: 'Let’s understand the work',
        text: 'Discuss the requirements, location and a suitable scope.',
      },
      {
        title: 'Agree on the next step',
        text: 'Review your quotation before arranging the work.',
      },
    ],
    contactLabel: '04 / LET’S TALK',
    contactTitle: 'What can we\ntake care of?',
    contactText:
      'A repair, an installation, or something you’d like to discuss. Start with a few details.',
    formNote:
      'Concept preview: this form lets you review your request. It does not send an enquiry.',
    name: 'Your name',
    phone: 'Phone number',
    service: 'Service',
    choose: 'Select a service',
    location: 'Emirate',
    locationChoose: 'Select your emirate',
    details: 'Tell us a little about the work',
    detailsHint: 'Property type, the issue, and anything else we should know…',
    submit: 'Review my request',
    reviewTitle: 'Your request, ready to review',
    reviewText:
      'This is a local preview only. Your details have not been sent or saved. Contact delivery will be connected in the next stage.',
    edit: 'Edit request',
    footerText: 'Technical care. Thoughtfully done.',
    footerLocation: 'Based in the United Arab Emirates',
    footerNav: 'Explore',
    footerContact: 'Start a conversation',
    copyright: 'Aldolphin Alakhthar Technical Services',
    skip: 'Skip to content',
    dialogQuote: 'Discuss this service',
    other: 'Other / not sure yet',
    rights: 'All rights reserved.',
  },
  ar: {
    title: 'خدمات فنية في الإمارات | الدولفين الأخضر',
    description:
      'تعرّف على خدمات إصلاح وتركيب التكييف والأعمال الكهربائية من الدولفين الأخضر، شركة خدمات فنية في الإمارات. أخبرنا باحتياجات عقارك واطلب عرض سعر.',
    nav: ['الرئيسية', 'خدماتنا', 'من نحن', 'تواصل معنا'],
    lang: 'English',
    langLabel: 'Switch to English',
    menu: 'القائمة',
    close: 'إغلاق',
    quote: 'اطلب عرض سعر',
    eyebrow: 'خدمات فنية · الإمارات العربية المتحدة',
    heroTop: 'مساحاتك بخير.',
    heroBottom: 'بين أيدٍ تهتم.',
    heroText:
      'من التكييف الذي يمنحك الراحة، إلى التفاصيل التي تُكمل مساحتك. عناية فنية بالأماكن التي تعيش وتعمل فيها.',
    explore: 'تعرّف على خدماتنا',
    pause: 'إيقاف الفيديو',
    play: 'تشغيل الفيديو',
    heroFoot: 'القليل من العناية يصنع الكثير.',
    heroCaption: 'نهتم بتفاصيل يومك',
    strip: ['إصلاح وتركيب التكييف', 'الأعمال الكهربائية', 'صيانة العقارات'],
    servicesLabel: '٠١ / خدماتنا',
    servicesTitle: 'كل مساحة تحتاج\nإلى خبرة تهتم بها.',
    servicesText:
      'بداية واحدة لاحتياجاتك الفنية. تعرّف على أعمالنا وأخبرنا بما تحتاجه مساحتك.',
    serviceExplore: 'اكتشف الخدمة',
    allServices: 'اختر الخدمة المناسبة',
    aboutLabel: '٠٢ / من نحن',
    aboutTitle: 'عناية تُحدث فرقاً\nفي تفاصيل يومك.',
    aboutText:
      'نحن الدولفين الأخضر، شركة خدمات فنية مقرها الإمارات العربية المتحدة. نعتني بالتفاصيل العملية التي تُبقي المنازل وأماكن العمل في أفضل حال، من التكييف إلى الأعمال الكهربائية.',
    aboutMore: 'المزيد عن شركتنا',
    aboutDetail:
      'لكل عقار احتياجاته الخاصة. نبدأ بفهم ما تحتاجه، ومناقشة الأعمال، وتحديد نطاقها قبل المضي قدماً. أخبرنا عن مساحتك لنحدّد الخطوة التالية معاً.',
    aboutNote: 'للأماكن التي تعني لك الكثير.',
    aboutImageAlt: 'مساحة معيشة هادئة تحظى بالعناية',
    processLabel: '٠٣ / بداية بسيطة',
    processTitle: 'من إصلاح بسيط\nإلى مشروعك القادم.',
    steps: [
      {
        title: 'أخبرنا بما تحتاجه',
        text: 'اختر الخدمة وشاركنا بعض التفاصيل عن مساحتك.',
      },
      {
        title: 'لنفهم متطلبات العمل',
        text: 'نناقش الاحتياجات والموقع ونطاق العمل المناسب.',
      },
      {
        title: 'نتفق على الخطوة التالية',
        text: 'راجع عرض السعر قبل ترتيب تنفيذ الأعمال.',
      },
    ],
    contactLabel: '٠٤ / لنتواصل',
    contactTitle: 'كيف يمكننا\nالعناية بمساحتك؟',
    contactText: 'إصلاح أو تركيب أو عمل تود مناقشته. لنبدأ ببعض التفاصيل.',
    formNote:
      'معاينة التصميم: يمكنك مراجعة طلبك هنا، ولن يتم إرسال أي استفسار.',
    name: 'الاسم',
    phone: 'رقم الهاتف',
    service: 'الخدمة',
    choose: 'اختر الخدمة',
    location: 'الإمارة',
    locationChoose: 'اختر الإمارة',
    details: 'أخبرنا قليلاً عن العمل',
    detailsHint: 'نوع العقار والمشكلة وأي تفاصيل أخرى تود مشاركتها…',
    submit: 'مراجعة طلبي',
    reviewTitle: 'طلبك جاهز للمراجعة',
    reviewText:
      'هذه معاينة محلية فقط. لم يتم إرسال بياناتك أو حفظها. سيتم ربط وسيلة التواصل في المرحلة التالية.',
    edit: 'تعديل الطلب',
    footerText: 'عناية فنية. باهتمام يستحقه مكانك.',
    footerLocation: 'مقرنا الإمارات العربية المتحدة',
    footerNav: 'اكتشف',
    footerContact: 'لنبدأ الحديث',
    copyright: 'الدولفين الأخضر للخدمات الفنية',
    skip: 'انتقل إلى المحتوى',
    dialogQuote: 'استفسر عن هذه الخدمة',
    other: 'أخرى / لم أحدد بعد',
    rights: 'جميع الحقوق محفوظة.',
  },
};

export const emirates: Localized[] = [
  { en: 'Abu Dhabi', ar: 'أبوظبي' },
  { en: 'Dubai', ar: 'دبي' },
  { en: 'Sharjah', ar: 'الشارقة' },
  { en: 'Ajman', ar: 'عجمان' },
  { en: 'Umm Al Quwain', ar: 'أم القيوين' },
  { en: 'Ras Al Khaimah', ar: 'رأس الخيمة' },
  { en: 'Fujairah', ar: 'الفجيرة' },
];
