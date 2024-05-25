export interface UserTokenModel {
  jti: string;
  uid: string;
  organizationId: string;
  organizationName: string;
  ip: string;
  firstName: string;
  lastName: string;
  email: string;
  isServerAdmin: boolean;
  roles: string;
  loggedApplicationUserCode: string;
  loggedApplicationCode: string;
  loggedApplicationId: string;
  IsApplicationAdmin: string;
  exp: number;
  iss: string;
  aud: string;
}
