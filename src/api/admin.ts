import type { UpdateAdmin } from "../utils/types";
import { httpPrivate } from "./index";

export const getAllAdmins = async ({ query }: { query: string }) => {
  const response = await httpPrivate.get('/admins', { params: { query } });
  return response.data;
}

export const deleteAdminById = async (id: string) => {
  const response = await httpPrivate.delete(`/admins/${id}`);
  return response.data;
}

export const getAdminById = async (id: string) => {
  const response = await httpPrivate.get(`/admins/${id}`);
  return response.data;
}

export const updateAdminById = async (id: string, data: UpdateAdmin) => {
  const response = await httpPrivate.patch(`/admins/${id}`, data);
  return response.data;
}
