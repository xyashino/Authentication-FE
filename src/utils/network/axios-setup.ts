import axios from "axios";

export const AxiosSetup = axios.create({
  baseURL: import.meta.env.VITE_BE_URL ?? "http://localhost:3000",
  headers: {
    "Content-type": "application/json",
  },
  withCredentials: true,
});
