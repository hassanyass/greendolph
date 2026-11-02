import { brand } from './brand';

export interface BusinessAddress {
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode?: string;
  addressCountry: 'AE';
}

export class CompanyProfile {
  readonly name = brand.name;
  readonly arabicName = 'الدولفين الأخضر';
  readonly phone: string | null = null;
  readonly email: string | null = null;
  readonly address: BusinessAddress | null = null;
  readonly serviceAreas: readonly string[] = [];
  readonly socialProfiles: readonly string[] = [];
}

// Add company-confirmed information here; absent values are not published as claims.
export const company = new CompanyProfile();
