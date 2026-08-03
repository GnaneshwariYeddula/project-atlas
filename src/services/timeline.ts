import api from "@/lib/api";

export const getTimelines = () =>
  api.get("/timelines");

export const getTimeline = (id: string) =>
  api.get(`/timelines/${id}`);

export const createTimeline = (data: any) =>
  api.post("/timelines", data);

export const updateTimeline = (
  id: string,
  data: any
) => api.put(`/timelines/${id}`, data);

export const deleteTimeline = (id: string) =>
  api.delete(`/timelines/${id}`);