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
  readonly arabicName = brand.arabicName;
  readonly phone = '+971544485287';
  readonly whatsapp = optionalPhone(import.meta.env.CONTACT_WHATSAPP);
  readonly email = optionalEmail(import.meta.env.CONTACT_EMAIL);
  readonly address: BusinessAddress | null = null;
  readonly serviceAreas: readonly string[] = [];
  readonly social = {
    instagram: socialUrl(
      'INSTAGRAM',
      import.meta.env.CONTACT_INSTAGRAM,
      'instagram.com',
    ),
    facebook: socialUrl(
      'FACEBOOK',
      import.meta.env.CONTACT_FACEBOOK,
      'facebook.com',
    ),
    tiktok: socialUrl('TIKTOK', import.meta.env.CONTACT_TIKTOK, 'tiktok.com'),
  };

  get whatsappUrl() {
    return this.whatsapp ? `https://wa.me/${this.whatsapp.slice(1)}` : null;
  }

  get socialProfiles(): readonly string[] {
    return Object.values(this.social).filter((url) => url !== null);
  }
}

function optionalPhone(value?: string) {
  const phone = value?.trim();
  if (!phone) return null;
  if (!/^\+[1-9][0-9]{7,14}$/.test(phone)) {
    throw new Error(
      'CONTACT_WHATSAPP must be an international number such as +971 followed by digits.',
    );
  }
  return phone;
}

function optionalEmail(value?: string) {
  const email = value?.trim();
  if (!email) return null;
  if (!/^[^\s@<>?&#%]+@[^\s@<>?&#%]+\.[^\s@<>?&#%]+$/.test(email)) {
    throw new Error('CONTACT_EMAIL must be a single email address.');
  }
  return email;
}

function socialUrl(
  platform: string,
  value: string | undefined,
  domain: string,
) {
  const candidate = value?.trim();
  if (!candidate) return null;
  const url = URL.canParse(candidate) ? new URL(candidate) : null;
  if (
    !url ||
    url.protocol !== 'https:' ||
    url.username ||
    url.password ||
    url.port ||
    ![domain, `www.${domain}`, `m.${domain}`].includes(url.hostname) ||
    url.pathname === '/'
  ) {
    throw new Error(
      `CONTACT_${platform} must be a full HTTPS profile URL on ${domain}.`,
    );
  }
  return url.href;
}

// Leave unconfirmed channels empty so visitors see only real destinations.
export const company = new CompanyProfile();
