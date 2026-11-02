import type { Localized } from './service';

export class Project {
  constructor(
    readonly id: string,
    readonly title: Localized,
    readonly summary: Localized,
    readonly image: string,
    readonly imageAlt: Localized,
  ) {}
}
