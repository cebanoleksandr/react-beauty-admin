import type { CreateMaterialDTO, UpdateMaterialDTO } from "../utils/types";
import { httpPrivate } from "./index";

export const getAllMaterials = async ({ query }: { query?: any }) => {
  const response = await httpPrivate.get('/materials', { params: query });
  return response.data;
};

export const getMaterialById = async (id: string) => {
  const response = await httpPrivate.get(`/materials/${id}`);
  return response.data;
};

export const createMaterial = async (data: CreateMaterialDTO) => {
  const response = await httpPrivate.post('/materials', data);
  return response.data;
};

export const updateMaterial = async (id: string, data: UpdateMaterialDTO) => {
  const response = await httpPrivate.patch(`/materials/${id}`, data);
  return response.data;
};

export const deleteMaterial = async (id: string) => {
  const response = await httpPrivate.delete(`/materials/${id}`);
  return response.data;
};
