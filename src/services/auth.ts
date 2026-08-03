import api from "@/lib/api";

export interface RegisterData {
  fullName: string;
  email: string;
  password: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export const register = async (data: RegisterData) => {
  const response = await api.post("/auth/register", data);

  if (response.data.token) {
    localStorage.setItem("atlas_token", response.data.token);
    localStorage.setItem(
      "atlas_user",
      JSON.stringify(response.data.user)
    );
  }

  return response.data;
};

export const login = async (data: LoginData) => {
  const response = await api.post("/auth/login", data);

  if (response.data.token) {
    localStorage.setItem("atlas_token", response.data.token);
    localStorage.setItem(
      "atlas_user",
      JSON.stringify(response.data.user)
    );
  }

  return response.data;
};

export const logout = () => {
  localStorage.removeItem("atlas_token");
  localStorage.removeItem("atlas_user");
};

export const getCurrentUser = () => {
  const user = localStorage.getItem("atlas_user");

  return user ? JSON.parse(user) : null;
};

export const isAuthenticated = () => {
  return !!localStorage.getItem("atlas_token");
};