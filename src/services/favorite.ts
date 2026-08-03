import api from "@/lib/api";

export const getFavorites = async () => {
  const response = await api.get("/favorites");
  return response.data;
};

export const addFavorite = async (
  targetType: string,
  targetId: string
) => {
  const response = await api.post("/favorites", {
    targetType,
    targetId,
  });

  return response.data;
};

export const removeFavorite = async (id: string) => {
  const response = await api.delete(`/favorites/${id}`);
  return response.data;
};