import api from "@/lib/api";

export const getHistoricalEvents = () =>
  api.get("/historical-events");

export const getHistoricalEvent = (id: string) =>
  api.get(`/historical-events/${id}`);

export const createHistoricalEvent = (data: any) =>
  api.post("/historical-events", data);

export const updateHistoricalEvent = (
  id: string,
  data: any
) => api.put(`/historical-events/${id}`, data);

export const deleteHistoricalEvent = (id: string) =>
  api.delete(`/historical-events/${id}`);