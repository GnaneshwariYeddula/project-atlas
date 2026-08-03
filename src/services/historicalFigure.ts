import api from "@/lib/api";

export const getHistoricalFigures = () =>
  api.get("/historical-figures");

export const getHistoricalFigure = (id: string) =>
  api.get(`/historical-figures/${id}`);

export const createHistoricalFigure = (data: any) =>
  api.post("/historical-figures", data);

export const updateHistoricalFigure = (
  id: string,
  data: any
) => api.put(`/historical-figures/${id}`, data);

export const deleteHistoricalFigure = (id: string) =>
  api.delete(`/historical-figures/${id}`);