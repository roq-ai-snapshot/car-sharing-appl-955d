interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Team Member'],
  tenantName: 'Company',
  applicationName: 'Car Sharing Application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Manage own bookings', 'Create a review', 'Create a report', 'Edit own information'],
  ownerAbilities: ['Manage company information', 'Manage car information', 'Manage bookings', 'Manage reports'],
  getQuoteUrl: 'https://app.roq.ai/proposal/b0a8a04a-6ec9-4aed-a402-a2b0f270cc7d',
};
