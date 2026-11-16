import type { Locale } from './routes';

export type Localized = Record<Locale, string>;

export interface ServiceImage {
  src: string;
  alt: Localized;
}

export class Service {
  constructor(
    readonly id: string,
    readonly licenceTitle: Localized,
    readonly title: Localized,
    readonly description: Localized,
    readonly detail: Localized,
    readonly image?: ServiceImage,
  ) {}
}
