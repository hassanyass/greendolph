export class Brand {
  readonly name = 'Aldolphin Alakhthar';
  readonly arabicName = 'الدولفين الأخضر';
  readonly logo = '/brand/logo.svg';
  readonly inverseLogo = '/brand/logo-white.svg';
  readonly mark = '/brand/mark.svg';
  readonly favicon = { src: this.mark, type: 'image/svg+xml' };
  readonly logoSize = { width: 280, height: 60 };
  readonly inverseLogoSize = this.logoSize;
  readonly markSize = { width: 76, height: 76 };
  readonly shareImage = {
    src: '/images/electrical-service.webp',
    width: 1280,
    height: 720,
  };
  readonly typography = {
    en: { body: "'DM Sans', sans-serif", heading: "'DM Sans', sans-serif" },
    ar: {
      body: "'Readex Pro', sans-serif",
      heading: "'Readex Pro', sans-serif",
    },
    stylesheet:
      'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;450;500;550;600;650;700&family=Readex+Pro:wght@400;500;600;700&display=swap',
  };
  readonly colors = {
    green: '#0b6a47',
    forest: '#153f35',
    ink: '#1b302b',
    muted: '#52645c',
    paper: '#f7f7f2',
    white: '#ffffff',
    mist: '#e9eee7',
    line: '#d9dfd5',
    accent: '#c5d8a4',
  };
  cssVariables() {
    return Object.entries({
      ...this.colors,
      'font-en-body': this.typography.en.body,
      'font-en-heading': this.typography.en.heading,
      'font-ar-body': this.typography.ar.body,
      'font-ar-heading': this.typography.ar.heading,
    })
      .map(([key, value]) => `--${key}:${value}`)
      .join(';');
  }
}

export const brand = new Brand();
export const media = {
  hero: '/images/electrical-service.webp',
  video: '/images/electrical-service.mp4',
  heroWidth: 1280,
  heroHeight: 720,
  interior: '/images/interior.webp',
};
