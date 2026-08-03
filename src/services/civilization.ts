import api from "@/lib/api";

export const getCivilizations = () =>
  api.get("/civilizations");

export const getCivilization = (id: string) =>
  api.get(`/civilizations/${id}`);

export const createCivilization = (data: any) =>
  api.post("/civilizations", data);

export const updateCivilization = (
  id: string,
  data: any
) => api.put(`/civilizations/${id}`, data);

export const deleteCivilization = (id: string) =>
  api.delete(`/civilizations/${id}`);