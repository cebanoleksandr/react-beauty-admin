import axios from 'axios';

export const axiosPrivate = axios.create({
  baseURL: `http://localhost:3005`,
  headers: { 'Content-Type': 'application/json' },
});
