export interface IUser {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  photoUrl: string | null;
  coverPhotoUrl: string | null;
  specializations: string[];
  contacts: IContact;
  updatedAt: string;
  createdAt: string;
}

export interface IContact {
  instagram: string | null;
  phone: string | null;
  telegram: string | null;
  facebook: string | null;
}

export interface IService {
  id: string;
  title: string;
  masterIds: string[];
  duration_minutes: number;
  price: number;
  createdAt: string;
  updatedAt: string;
}
