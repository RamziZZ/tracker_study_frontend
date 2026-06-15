import axiosInstance from "@/lib/axios";

export const newsService = {
  /**
   * Mengambil semua data berita dari API
   */
  getAllNews: async () => {
    try {
      const response = await axiosInstance.get("/news");
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  /**
   * Mengambil detail berita berdasarkan ID untuk Edit
   */
  getNewsById: async (slug) => {
    try {
      const response = await axiosInstance.get(`/news/${slug}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  /**
   * Membuat berita atau event baru
   */
  createNews: async (formData) => {
    try {
      const response = await axiosInstance.post("admin/news", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  /**
   * Memperbarui berita berdasarkan ID
   * Sesuai documentation.txt: POST /api/news/{id}
   */
  updateNews: async (id, formData) => {
    try {
      const response = await axiosInstance.post(`admin/news/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  /**
   * Menghapus berita atau event berdasarkan ID
   */
  deleteNews: async (id) => {
    try {
      const response = await axiosInstance.delete(`admin/news/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}