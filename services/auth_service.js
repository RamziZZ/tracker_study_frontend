import api from "../lib/axios";

/**
 * Melakukan autentikasi ke Laravel Sanctum
 * @param {string} email - Email atau Username pengguna
 * @param {string} password - Password pengguna
 */
export const login = async (email, password) => {
  const res = await api.post("/login", { email, password });
  return res.data;
};

/**
 * Mendaftarkan akun alumni baru
 * @param {Object} formData - Data lengkap dari form registrasi
 */
export const register = async (formData) => {
  const res = await api.post("/register", formData);
  return res.data;
};

/**
 * Menghapus session di server (Revoke Token)
 */
export const logout = async () => {
  const res = await api.post("/logout");
  return res.data;
};
