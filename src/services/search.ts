import api from "@/lib/api";

export const globalSearch = async (query: string) => {
  const response = await api.get("/search", {
    params: { q: query },
  });

  return response.data;
};
