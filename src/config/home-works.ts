import type { Localized } from '../domain/service';

export const homeWorksCopy: Record<
  'label' | 'title' | 'intro' | 'viewProject' | 'viewAll' | 'relatedServices',
  Localized
> = {
  label: { en: 'Selected works', ar: 'من أعمالنا' },
  title: { en: 'The work, in place.', ar: 'أعمالنا على أرض الواقع.' },
  intro: {
    en: 'A closer look at the spaces we’ve fitted out, and the details behind them.',
    ar: 'تعرّف على المساحات التي جهّزناها، والتفاصيل التي جمعت أعمالنا فيها.',
  },
  viewProject: { en: 'Explore project', ar: 'تصفّح المشروع' },
  viewAll: { en: 'View all our work', ar: 'شاهد جميع أعمالنا' },
  relatedServices: { en: 'Related services', ar: 'خدمات مرتبطة بالمشروع' },
};
