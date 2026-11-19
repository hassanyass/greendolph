import type { Locale } from './routes';

export type Localized = Record<Locale, string>;

export interface ServiceEditorial {
  heading: string;
  overview: string;
  scope: readonly { title: string; text: string }[];
  requests: readonly string[];
  quotationFactors: string;
  faqs: readonly { question: string; answer: string }[];
}

export class Service {
  constructor(
    readonly id: string,
    readonly licenceTitle: Localized,
    readonly title: Localized,
    readonly description: Localized,
  ) {}
}
