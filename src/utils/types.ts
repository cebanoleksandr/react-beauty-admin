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

export type GetAllAppointmentsDTO = { 
  masterId?: string; 
  clientId?: string; 
  serviceId?: string; 
  status?: string; 
  startTime?: string 
}

export type CreateAppointmentDTO = {
  clientId: string;
  masterId: string;
  serviceId: string;
  startTime: string;
  status: Status;
  finalPrice: number;
  notes: string;
}

export type UpdateAppointmentDTO = {
  clientId?: string;
  masterId?: string;
  serviceId?: string;
  startTime?: string;
  status?: Status;
  finalPrice?: number;
  notes?: string;
}

export type Status = 'BOOKED' | 'CONFIRMED' | 'COMPLETED' | 'CANCELED';
