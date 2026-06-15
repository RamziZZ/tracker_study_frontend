import axios from 'axios';

// Ganti dengan URL dasar API Laravel lu
const API_BASE_URL = 'http://localhost:8000/api'; 

// Helper untuk mengambil token dari localStorage
const getAuthHeader = () => {
  const token = typeof window !== 'undefined' ? localStorage.getItem('access_token') : null;
  return token ? { Authorization: `Bearer ${token}` } : {};
};

export const userAlumniService = {
  /**
   * Mengambil data profil alumni yang sedang login (GET /api/alumni/me)
   */
  getProfile: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/alumni/me`, {
        headers: getAuthHeader(),
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  /**
   * Memperbarui profil alumni (POST /api/alumni/update)
   */
  updateProfile: async (formData) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/alumni/update`, formData, {
        headers: getAuthHeader(),
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
};