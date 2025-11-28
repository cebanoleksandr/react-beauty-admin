import type { CreateAppointmentDTO, GetAllAppointmentsDTO, UpdateAppointmentDTO } from "../utils/types";
import { httpPrivate } from "./index";

export const getAllAppointments = async (getAllAppointmentsDTO: GetAllAppointmentsDTO) => {
  const response = await httpPrivate.get('/appointments', { params: getAllAppointmentsDTO });
  return response.data;
}

export const getAppointmentById = async (id: string) => {
  const response = await httpPrivate.get(`/appointments/${id}`);
  return response.data;
}

export const createAppointment = async (appointmentData: CreateAppointmentDTO) => {
  const response = await httpPrivate.post('/appointments', appointmentData);
  return response.data;
}

export const updateAppointment = async (id: string, appointmentData: UpdateAppointmentDTO) => {
  const response = await httpPrivate.patch(`/appointments/${id}`, appointmentData);
  return response.data;
}

export const deleteAppointment = async (id: string) => {
  const response = await httpPrivate.delete(`/appointments/${id}`);
  return response.data;
}
