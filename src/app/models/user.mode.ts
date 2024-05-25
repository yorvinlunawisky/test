export interface UserModel {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  // Optional properties
  website?: string;
  company?: string;
}
