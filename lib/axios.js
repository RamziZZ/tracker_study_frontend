import axios from "axios";
import Cookies from "js-cookie";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  // withCredentials: true, ← hapus ini, kamu pakai Bearer Token bukan session cookie
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Interceptor untuk menyisipkan Bearer Token ke setiap request
axiosInstance.interceptors.request.use((config) => {
  const tokenFromCookie = Cookies.get("token");
  const tokenFromStorage = typeof window !== "undefined" ? localStorage.getItem("token") : null;
  
  // Tambahkan log ini sementara
  console.log("=== AXIOS INTERCEPTOR ===");
  console.log("Token dari Cookie:", tokenFromCookie);
  console.log("Token dari LocalStorage:", tokenFromStorage);
  console.log("URL:", config.url);
  
  const token = tokenFromCookie || tokenFromStorage;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
// axiosInstance.interceptors.request.use((config) => {
//   // Mengambil token dari cookie (sinkron dengan login page)
//   const token =
//     Cookies.get("token") ||
//     (typeof window !== "undefined" ? localStorage.getItem("token") : null);

//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// Interceptor untuk menangani response error secara global
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Jika status 401 (Unauthorized), hapus session dan redirect ke login secara paksa
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      Cookies.remove("token");
      Cookies.remove("role");
      if (typeof window !== "undefined") window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
