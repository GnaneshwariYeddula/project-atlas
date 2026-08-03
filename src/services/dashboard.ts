import api from "@/lib/api";

export interface DashboardData {
  totalMuseums: number;
  totalArtifacts: number;
  totalSites: number;
  totalCivilizations: number;
  totalHistoricalFigures: number;
  totalHistoricalEvents: number;
  totalFavorites: number;
  totalCommunityPosts: number;
}

export const getDashboardStats = async () => {
  const response = await api.get("/dashboard");

  return response.data;
};