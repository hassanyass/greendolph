import { CompanyProfileDocument } from '../domain/company-profile-document';

// Replace the PDF at this path and rebuild; its displayed size updates automatically.
export const companyProfile = new CompanyProfileDocument(
  '/downloads/aldolphin-company-profile.pdf',
  ['ar', 'en'],
);
