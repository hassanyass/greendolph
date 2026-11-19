import type { Locale } from '../domain/routes.ts';

export const breadcrumbCopy: Record<
  Locale,
  {
    label: string;
    home: string;
    services: string;
    works: string;
  }
> = {
  en: {
    label: 'Breadcrumb',
    home: 'Home',
    services: 'Services',
    works: 'Our Works',
  },
  ar: {
    label: 'مسار التنقل',
    home: 'الرئيسية',
    services: 'الخدمات',
    works: 'أعمالنا',
  },
};
