import type { AuthCredentials } from "../utils/types";
import { http } from "./index";

export const login = async ({ email, password }: AuthCredentials) => {
  const response = await http.post('/admins/login', { email, password });
  return response.data;
}

export const register = async ({ email, password }: AuthCredentials) => {
  const response = await http.post('/admins/register', { email, password });
  return response.data;
}
