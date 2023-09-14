export interface IProfile {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string;
  lastName: string;
  fullName: string;
  middleName: null | string;
  username: string;
  email: string;
  status: string;
  sub: string;
  profile: {
    avatarUrl: string;
  };
}
