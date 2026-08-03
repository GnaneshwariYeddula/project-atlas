import api from "@/lib/api";

export const getArtifacts = () => api.get("/artifacts");

export const getArtifact = (id: string) =>
  api.get(`/artifacts/${id}`);

export const createArtifact = (data: any) =>
  api.post("/artifacts", data);

export const updateArtifact = (id: string, data: any) =>
  api.put(`/artifacts/${id}`, data);

export const deleteArtifact = (id: string) =>
  api.delete(`/artifacts/${id}`);