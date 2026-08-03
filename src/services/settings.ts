import api from "@/lib/api";

export interface SettingsData {
  notifications: {
    email: boolean;
    push: boolean;
    newsletter: boolean;
    researchUpdates: boolean;
    communityReplies: boolean;
  };
  privacy: {
    publicProfile: boolean;
    showActivity: boolean;
    displayAchievements: boolean;
    allowMessages: boolean;
  };
  appearance: {
    theme: "system" | "light" | "dark";
  };
}

export const getSettings = async () => {
  const response = await api.get("/settings");
  return response.data;
};

export const updateSettings = async (data: Partial<SettingsData>) => {
  const response = await api.put("/settings", data);
  return response.data;
};
