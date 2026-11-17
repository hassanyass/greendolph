const palette = {
  green: '#00583E',
  lime: '#B3FD6A',
  charcoal: '#231F20',
  white: '#FFFFFF',
} as const;

const adobeKitId = import.meta.env.PUBLIC_ADOBE_FONTS_KIT_ID?.trim();
const englishFonts =
  "'acumin-variable', 'Acumin Variable Concept', 'Inter', sans-serif";
const arabicFonts = "'Cairo', sans-serif";

export class Brand {
  readonly name = 'Aldolphin Alakhthar';
  readonly arabicName = 'الدولفين الأخضر';
  readonly logos = {
    en: {
      primary: { src: '/brand/logo-en.svg', width: 342, height: 95 },
      inverse: { src: '/brand/logo-inverse-en.png', width: 444, height: 363 },
    },
    ar: {
      primary: { src: '/brand/logo-ar.svg', width: 366, height: 97 },
      inverse: { src: '/brand/logo-inverse-ar.png', width: 669, height: 177 },
    },
  };
  readonly mark = { src: '/brand/mark.svg', width: 121, height: 108 };
  readonly favicon = { src: '/brand/favicon.svg', type: 'image/svg+xml' };
  readonly shareImage = {
    src: '/images/site-installation.webp',
    width: 1280,
    height: 720,
  };
  readonly typography = {
    en: {
      body: englishFonts,
      heading: englishFonts,
      preload: '/fonts/inter-latin.woff2',
    },
    ar: {
      body: arabicFonts,
      heading: arabicFonts,
      preload: '/fonts/cairo-arabic.woff2',
    },
    stylesheet:
      adobeKitId && /^[a-z0-9]+$/i.test(adobeKitId)
        ? `https://use.typekit.net/${adobeKitId}.css`
        : undefined,
  };
  readonly colors = {
    green: palette.green,
    forest: palette.green,
    ink: palette.charcoal,
    muted: `color-mix(in srgb, ${palette.charcoal} 76%, ${palette.white})`,
    paper: palette.white,
    white: palette.white,
    mist: `color-mix(in srgb, ${palette.lime} 14%, ${palette.white})`,
    line: `color-mix(in srgb, ${palette.green} 17%, ${palette.white})`,
    accent: palette.lime,
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
  interior: '/images/interior.webp',
};
