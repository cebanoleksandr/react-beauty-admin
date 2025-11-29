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

export type CreateMasterScheduleDTO = {
  dayOfWeek: number;
  masterId: string;
  startTime: string;
  endTime: string;
  isAvailable: boolean;
}

export type UpdateMasterScheduleDTO = {
  dayOfWeek?: number;
  masterId?: string;
  startTime?: string;
  endTime?: string;
  isAvailable?: boolean;
}

export type CreateMaterialDTO = { 
  title: string;
  quantity: number;
  unit: string;
  lowStockThreshold: number;
}

export type UpdateMaterialDTO = { 
  title?: string;
  quantity?: number;
  unit?: string;
  lowStockThreshold?: number;
}

export type Status = 'BOOKED' | 'CONFIRMED' | 'COMPLETED' | 'CANCELED';
