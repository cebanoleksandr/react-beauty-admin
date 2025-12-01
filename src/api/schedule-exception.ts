import type { CreateScheduleExceptionDTO, UpdateScheduleExceptionDTO } from "../utils/types";
import { httpPrivate } from "./index";

export const getAllScheduleExceptions = async ({ query, masterId }: { query: string; masterId: string }) => {
  const response = await httpPrivate.get('/schedule-exceptions', { params: { query, masterId } });
  return response.data;
}

export const getScheduleExceptionById = async (id: string) => {
  const response = await httpPrivate.get(`/schedule-exceptions/${id}`);
  return response.data;
}

export const createScheduleException = async (data: CreateScheduleExceptionDTO) => {
  const response = await httpPrivate.post('/schedule-exceptions', data);
  return response.data;
}

export const deleteScheduleException = async (id: string) => {
  const response = await httpPrivate.delete(`/schedule-exceptions/${id}`);
  return response.data;
} 

export const updateScheduleException = async (id: string, data: UpdateScheduleExceptionDTO) => {
  const response = await httpPrivate.patch(`/schedule-exceptions/${id}`, data);
  return response.data;
} 
