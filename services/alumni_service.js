import axiosInstance from "@/lib/axios";

export const alumniService = {
  getProfileMe: async () => {
    try {
      const response = await axiosInstance.get("/alumni/me");
      return response.data;
    } catch (error) {
      console.error("AlumniService Error:", error.response?.data?.message || error.message);
      throw error;
    }
  },

  getAllAlumni: async () => {
    try {
      const response = await axiosInstance.get("/alumni");
      return response.data;
    } catch (error) {
      console.error("AlumniService Error:", error.response?.data?.message || error.message);
      throw error;
    }
  },
};
