import { ProjectPhoto } from '../domain/project.ts';
import type { Localized } from '../domain/service.ts';

const nadAlSheba = (
  name: string,
  width: number,
  height: number,
  caption: Localized,
) =>
  new ProjectPhoto(
    '/images/projects/nad-al-sheba/' + name,
    width,
    height,
    caption,
  );
export const nadAlShebaPhotos = [
  nadAlSheba('finished-exterior', 960, 1280, {
    en: 'Finished exterior with a wide window beside the garden',
    ar: 'الواجهة بعد التشطيب مع نافذة عريضة بجوار الحديقة',
  }),
  nadAlSheba('room-lighting', 960, 1280, {
    en: 'Finished room with recessed ceiling lighting',
    ar: 'غرفة بعد التشطيب مع إنارة مخفية في السقف',
  }),
  nadAlSheba('bathroom', 960, 1280, {
    en: 'Fitted bathroom with a vanity and mirror',
    ar: 'حمّام مجهز بمغسلة ومرآة',
  }),
  nadAlSheba('paved-approach', 960, 1280, {
    en: 'Paved approach beside the finished building',
    ar: 'ممر مرصوف بجوار المبنى بعد التشطيب',
  }),
  nadAlSheba('glazing-installation', 1440, 1080, {
    en: 'Glazed doors and windows during installation',
    ar: 'أبواب ونوافذ زجاجية أثناء التركيب',
  }),
  nadAlSheba('roof-construction', 1440, 1080, {
    en: 'Steel framing and underside of the roof during construction',
    ar: 'الهيكل المعدني والجزء السفلي من السقف أثناء التنفيذ',
  }),
] as const;

const alAwir = (
  name: string,
  width: number,
  height: number,
  caption: Localized,
) =>
  new ProjectPhoto('/images/projects/al-awir/' + name, width, height, caption);
export const alAwirPhotos = [
  alAwir('garden-exterior', 1280, 960, {
    en: 'Prefabricated room with a red roof edge framed by trees',
    ar: 'غرفة جاهزة بحافة سقف حمراء بين الأشجار',
  }),
  alAwir('courtyard-and-inspection-chamber', 1280, 960, {
    en: 'Courtyard between the rooms with a visible inspection chamber',
    ar: 'ساحة بين الغرف تظهر فيها غرفة تفتيش',
  }),
  alAwir('shower-fit-out', 960, 1280, {
    en: 'Shower enclosure installed in a finished bathroom',
    ar: 'كابينة دش مركّبة في حمّام بعد التشطيب',
  }),
  alAwir('entrance', 960, 1280, {
    en: 'Exterior steps leading to sliding glass doors',
    ar: 'درجات خارجية تؤدي إلى أبواب زجاجية منزلقة',
  }),
] as const;

const alAjban = (
  name: string,
  width: number,
  height: number,
  caption: Localized,
) =>
  new ProjectPhoto('/images/projects/al-ajban/' + name, width, height, caption);
export const alAjbanPhotos = [
  alAjban('finished-interior', 1440, 1080, {
    en: 'Finished panel-lined interior with ceiling lights and a glossy floor',
    ar: 'مساحة داخلية بعد التشطيب بجدران من الألواح وإنارة سقفية وأرضية لامعة',
  }),
  alAjban('room-exteriors', 1440, 1080, {
    en: 'Prefabricated rooms lining a paved path',
    ar: 'غرف جاهزة على امتداد ممر مرصوف',
  }),
  alAjban('drainage-installation', 1440, 1080, {
    en: 'Drainage structure being lowered into an excavation',
    ar: 'إنزال مكوّن من شبكة الصرف في حفرة',
  }),
  alAjban('roof-frame', 1440, 1080, {
    en: 'Roof framing above the panel walls during construction',
    ar: 'هيكل السقف فوق الجدران المكوّنة من ألواح أثناء التنفيذ',
  }),
  alAjban('panel-exterior', 1280, 960, {
    en: 'Exterior corner showing the panel wall and roof edge',
    ar: 'زاوية خارجية تظهر جدار الألواح وحافة السقف',
  }),
] as const;

export const sharjahPhotos = [
  new ProjectPhoto('/images/projects/sharjah/wall-mounted-ac', 1440, 960, {
    en: 'Illustrative photo of a wall-mounted air conditioner',
    ar: 'صورة توضيحية لمكيّف هواء مثبت على الحائط',
  }),
  new ProjectPhoto('/images/projects/sharjah/ac-technician', 1440, 2160, {
    en: 'Illustrative photo of a technician working on an air conditioner',
    ar: 'صورة توضيحية لفني يعمل على وحدة تكييف',
  }),
] as const;
