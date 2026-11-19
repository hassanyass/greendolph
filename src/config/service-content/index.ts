import type { Locale } from '../../domain/routes';
import { serviceContentEn } from './en';
import { serviceContentAr } from './ar';

const content = { en: serviceContentEn, ar: serviceContentAr };

export function serviceContent(id: string, locale: Locale) {
  const editorial = content[locale][id];
  if (!editorial)
    throw new Error(`Missing ${locale} service content for ${id}.`);
  return editorial;
}

export const serviceContentLabels = {
  en: {
    requests: 'Tell us what you’re planning',
    faqHeading: 'Questions about this service',
    faqIntro:
      'A few details now help us understand the work you need. Send an enquiry when you’re ready to discuss your space.',
  },
  ar: {
    requests: 'أخبرنا بما تخطّط له',
    faqHeading: 'أسئلتك عن الخدمة',
    faqIntro:
      'تساعدنا التفاصيل على فهم العمل الذي تحتاجه. أرسل استفسارك عندما تكون مستعداً لمناقشة متطلّبات مساحتك.',
  },
};
