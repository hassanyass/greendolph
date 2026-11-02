import type { Locale } from './routes';
export type Localized = Record<Locale, string>;

export class Service {
  constructor(
    public readonly id: string,
    public readonly title: Localized,
    public readonly description: Localized,
    public readonly detail: Localized,
    public readonly image: string,
    public readonly alt: Localized,
  ) {}
}
