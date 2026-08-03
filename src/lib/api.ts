
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach JWT Token Automatically
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("atlas_token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// Handle Unauthorized
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("atlas_token");
      localStorage.removeItem("atlas_user");
    }

    return Promise.reject(error);
  }
);

export default api;