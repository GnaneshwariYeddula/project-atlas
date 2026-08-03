import api from "@/lib/api";

export const getMuseums = () => api.get("/museums");

export const getMuseum = (id: string) =>
  api.get(`/museums/${id}`);

export const createMuseum = (data: any) =>
  api.post("/museums", data);

export const updateMuseum = (id: string, data: any) =>
  api.put(`/museums/${id}`, data);

export const deleteMuseum = (id: string) =>
  api.delete(`/museums/${id}`);