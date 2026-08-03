import api from "@/lib/api";

export interface CommunityPost {
  _id: string;
  title: string;
  content: string;
  image?: string;
  author: {
    _id: string;
    fullName: string;
    avatar?: string;
  };
  likes: string[];
  comments: {
    user: {
      fullName: string;
    };
    comment: string;
  }[];
  createdAt: string;
}

export const getPosts = async () => {
  const response = await api.get("/community");
  return response.data;
};

export const getPost = async (id: string) => {
  const response = await api.get(`/community/${id}`);
  return response.data;
};

export interface CreateCommunityPostData {
  title: string;
  content: string;
}

export const createPost = async (data: CreateCommunityPostData) => {
  const response = await api.post("/community", data);
  return response.data;
};

export const deletePost = async (id: string) => {
  const response = await api.delete(`/community/${id}`);
  return response.data;
};
