import type { Locale } from './routes';

export type Localized = Record<Locale, string>;

export class Service {
  constructor(
    readonly id: string,
    readonly licenceTitle: Localized,
    readonly title: Localized,
    readonly description: Localized,
  ) {}
}
