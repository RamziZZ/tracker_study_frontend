import axiosInstance from "@/lib/axios";

export const userService = {
  getAllUsers: async () => {
    const response = await axiosInstance.get("admin/users");
    return response.data;
  },

  createUser: async (data) => {
    const response = await axiosInstance.post("admin/users", data);
    return response.data;
  },

  updateUser: async (id, data) => {
    const response = await axiosInstance.put(`admin/users/${id}`, data);
    return response.data;
  },

  deleteUser: async (id) => {
    const response = await axiosInstance.delete(`admin/users/${id}`);
    return response.data;
  },
};
