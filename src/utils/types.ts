import type { IContact } from "./interfaces";

export type AuthCredentials = {
  email: string;
  password: string;
}

export type UpdateAdmin = {
  firstName?: string;
  lastName?: string;
  photoUrl?: string;
  coverPhotoUrl?: string;
  specializations?: string[];
  contacts?: IContact;
}
