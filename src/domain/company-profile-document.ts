import { existsSync, statSync } from 'node:fs';
import { isAbsolute, relative, resolve } from 'node:path';
import type { Locale } from './routes';

export class CompanyProfileDocument {
  readonly bytes: number | null;

  constructor(
    readonly path: string,
    readonly languages: readonly Locale[],
  ) {
    const root = resolve('public');
    const file = resolve(root, `.${path}`);
    const local = relative(root, file);
    if (
      !path.startsWith('/') ||
      !path.endsWith('.pdf') ||
      local.startsWith('..') ||
      isAbsolute(local)
    ) {
      throw new Error('Company profile must reference a PDF inside public/.');
    }
    const info = existsSync(file) ? statSync(file) : null;
    if (
      info &&
      (!info.isFile() || info.size === 0 || info.size > 25 * 1024 * 1024)
    ) {
      throw new Error(
        'Company profile must be a non-empty PDF within the 25 MiB host limit.',
      );
    }
    this.bytes = info?.size ?? null;
  }

  get available() {
    return this.bytes !== null;
  }

  formatSize(locale: Locale) {
    if (this.bytes === null) return '';
    return new Intl.NumberFormat(locale, {
      style: 'unit',
      unit: 'megabyte',
      unitDisplay: 'short',
      maximumFractionDigits: 1,
    }).format(this.bytes / 1_000_000);
  }
}
