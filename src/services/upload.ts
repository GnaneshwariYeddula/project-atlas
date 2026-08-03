import api from "@/lib/api";

export const uploadImage = (formData: FormData) =>
  api.post("/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });