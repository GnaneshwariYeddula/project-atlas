import api from "@/lib/api";

export const getSites = () => api.get("/sites");

export const getSite = (id: string) =>
  api.get(`/sites/${id}`);

export const createSite = (data: any) =>
  api.post("/sites", data);

export const updateSite = (id: string, data: any) =>
  api.put(`/sites/${id}`, data);

export const deleteSite = (id: string) =>
  api.delete(`/sites/${id}`);