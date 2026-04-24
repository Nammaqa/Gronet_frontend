import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

// ── Get Token ─────────────────────────────────────────
const getToken = () =>
  localStorage.getItem("token") || import.meta.env.VITE_API_TOKEN;

// ── Axios Instance ────────────────────────────────────
const api = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
  timeout: 10000,
});

// ── Request Interceptor ───────────────────────────────
api.interceptors.request.use(
  (config) => {
    const token = getToken();

    config.headers = config.headers || {};

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      console.log("🔑 Token attached");
    } else {
      console.warn("⚠️ No token found");
    }

    return config;
  },
  (error) => Promise.reject(error),
);

// ── Response Interceptor ──────────────────────────────
api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const message = error.response?.data?.message || error.message || "Error";
    console.error("❌", message);
    return Promise.reject(new Error(message));
  },
);

// ── POSTS ─────────────────────────────────────────────
export const createPost = (data) =>
  api.post("/posts", {
    title: data.title,
    content: data.content,
    community: data.community,
    industry: data.industry,
    images: data.images || [],
    groupId: data.groupId || "f30e50c1-1061-4ddf-bb2b-19ef98a8cd3e",
    isPublic: data.isPublic ?? true,
    tags: data.tags || [],
  });

export const getPosts = () => api.get("/posts");
export const getPostById = (id) => api.get(`/posts/${id}`);
export const updatePost = (id, data) => api.put(`/posts/${id}`, data);
export const deletePost = (id) => api.delete(`/posts/${id}`);

// ── USERS ─────────────────────────────────────────────
export const getProfile = () => api.get("/users/profile");
export const updateProfile = (data) => api.put("/users/profile", data);

// ── AUTH ──────────────────────────────────────────────
export const setToken = (token) => localStorage.setItem("token", token);
export const clearToken = () => localStorage.removeItem("token");
export const getStoredToken = () => localStorage.getItem("token");

export default api;


