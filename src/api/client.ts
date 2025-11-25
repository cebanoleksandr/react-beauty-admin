import { httpPrivate } from "./index";

export const getAllClients = async ({ query }: { query?: string }) => {
  const response = await httpPrivate.get('/clients', { params: { query } });
  return response.data;
}

export const getClientById = async (id: string) => {
  const response = await httpPrivate.get(`/clients/${id}`);
  return response.data;
}
