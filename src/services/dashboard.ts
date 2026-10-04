import api from "@/lib/api";

export interface DashboardData {
  totalMuseums: number;
  totalArtifacts: number;
  totalSites: number;
  totalCivilizations: number;
  totalHistoricalFigures: number;
  totalHistoricalEvents: number;

  // Personal data
  totalFavorites: number;
  totalCommunityPosts: number;
}

export interface DashboardResponse {
  success: boolean;
  dashboard: DashboardData;
}

export const getDashboardStats = async (): Promise<DashboardResponse> => {
  const response = await api.get<DashboardResponse>("/dashboard");

  return response.data;
};