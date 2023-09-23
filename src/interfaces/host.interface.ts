export interface IHost {
  id: string;
  firstName: string;
  lastName: string;
  middleName: string | null;
  fullName: string;
  email: string;
  profile: Profile;
}

export interface Profile {
  id: string;
  createdAt: string;
  updatedAt: string;
  bankName: string;
  bankAccount: string;
  avatarUrl: string;
}

export interface BankCredentials {
  name: string;
  bankName: string;
  bankAccount: string;
}
