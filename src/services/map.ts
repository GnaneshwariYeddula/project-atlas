import api from "@/lib/api";

export const getMapData = async () => {
  const response = await api.get("/map");
  return response.data;
};

export const getNearbyLocations = async (
  latitude: number,
  longitude: number
) => {
  const response = await api.get("/map/nearby", {
    params: { latitude, longitude },
  });
  return response.data;
};
