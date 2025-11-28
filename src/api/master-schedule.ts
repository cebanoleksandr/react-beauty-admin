import type { CreateMasterScheduleDTO, UpdateMasterScheduleDTO } from "../utils/types";
import { httpPrivate } from "./index";

export const getAllMasterSchedules = async ({ query, masterId }: { query?: string; masterId?: string }) => {
  const response = await httpPrivate.get('/schedule', { params: { query, masterId } });
  return response.data;
};

export const getMasterScheduleById = async (id: string) => {
  const response = await httpPrivate.get(`/schedule/${id}`);
  return response.data;
};

export const createMasterSchedule = async (data: CreateMasterScheduleDTO) => {
  const response = await httpPrivate.post('/schedule', data);
  return response.data;
};

export const updateMasterSchedule = async (id: string, data: UpdateMasterScheduleDTO) => {
  const response = await httpPrivate.patch(`/schedule/${id}`, data);
  return response.data;
};

export const deleteMasterSchedule = async (id: string) => {
  const response = await httpPrivate.delete(`/schedule/${id}`);
  return response.data;
};
