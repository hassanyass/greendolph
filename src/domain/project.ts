import type { Localized } from './service.ts';

export class ProjectPhoto {
  constructor(
    readonly path: string,
    readonly width: number,
    readonly height: number,
    readonly caption: Localized,
  ) {}

  get src() {
    return this.variant(this.width);
  }

  get preview() {
    return this.variant(Math.min(this.width, 960));
  }

  get srcset() {
    const widths = new Set(
      [480, 960, this.width].map((width) => Math.min(width, this.width)),
    );
    return [...widths]
      .map((width) => `${this.variant(width)} ${width}w`)
      .join(', ');
  }

  private variant(width: number) {
    return `${this.path}-${width}.webp`;
  }
}

export interface ProjectScope {
  title: Localized;
  items: readonly Localized[];
}

export interface Project {
  id: string;
  location: Localized;
  title: Localized;
  summary: Localized;
  teaser?: Localized;
  homepagePhoto?: ProjectPhoto;
  scope: readonly ProjectScope[];
  photos: readonly ProjectPhoto[];
  illustrativePhotos?: boolean;
  serviceIds: readonly string[];
  indexable: boolean;
}
