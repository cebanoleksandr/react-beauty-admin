import type { CreateServiceDTO, UpdateServiceDTO } from "../utils/types";
import { httpPrivate } from "./index";

export const getAllServices = async ({ query, masterId }: { query?: string; masterId?: string }) => {
  const response = await httpPrivate.get('/services', { params: { query, masterId } });
  return response.data;
};

export const getServiceById = async (id: string) => {
  const response = await httpPrivate.get(`/services/${id}`);
  return response.data;
};

export const createService = async (data: CreateServiceDTO) => {
  const response = await httpPrivate.post('/services', data);
  return response.data;
};

export const updateService = async (id: string, data: UpdateServiceDTO) => {
  const response = await httpPrivate.patch(`/services/${id}`, data);
  return response.data;
};

export const deleteService = async (id: string) => {
  const response = await httpPrivate.delete(`/services/${id}`);
  return response.data;
};
