import axios from "axios";
import Cookies from "js-cookie";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use((config) => {
  const token = Cookies.get("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const jobService = {
  getAllJobs: async () => {
    const response = await api.get("/jobs");
    return response.data;
  },
  createJob: async (data) => {
    const response = await api.post("admin/jobs", data);
    return response.data;
  },
  updateJob: async (id, data) => {
    // Menggunakan POST karena Laravel menangani FormData/Multipart paling baik via POST
    const response = await api.post(`admin/jobs/${id}`, data);
    return response.data;
  },
  deleteJob: async (id) => {
    const response = await api.delete(`admin/jobs/${id}`);
    return response.data;
  },
};
