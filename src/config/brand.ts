export class Brand {
  readonly name = 'Aldolphin Alakhthar';
  readonly logo = '/brand/logo.svg';
  readonly inverseLogo = '/brand/logo-white.svg';
  readonly mark = '/brand/mark.svg';
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
    return Object.entries(this.colors)
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
