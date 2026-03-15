import axios from "axios";

export const createApi = (getToken) => {
  const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASEURL,
  });

  api.interceptors.request.use(async (config) => {
    const token = await getToken({
      authorizationParams: {
        audience: import.meta.env.VITE_AUTH0_API_IDENTIFIER,
      },
    });
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  });

  return api;
};
