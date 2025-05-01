// src/api/axios.ts
import axios from "axios";

const instance = axios.create({
  baseURL: "https://localhost:44317/api/",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// instance.interceptors.request.use((config) => {
//   const token = sessionStorage.getItem("token");
//   if (token) config.headers.Authorization = `Bearer ${token}`;
//   return config;
// });
// instance.interceptors.response.use(
//   (response) => {
//     console.log("Response:", response);
//     return response;
//   },
//   async (error) => {
//     if (error.response?.status === 401) {
//       console.error("Token expired, refreshing...");
//       try {
//         await axios.post(
//           "https://localhost:44317/api/auth/refresh-token",
//           {},
//           { withCredentials: true }
//         );
//         return instance(error.config); // Retry original request
//       } catch (refreshError) {
//         console.error("Token refresh failed:", refreshError);
//         window.location.href = "/login"; // Redirect to login if refresh fails
//       }
//     }
//     return Promise.reject(error);
//   }
// );
export default instance;
