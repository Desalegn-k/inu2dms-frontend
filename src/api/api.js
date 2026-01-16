// frontend/src/api/api.js
import axios from "axios";

// Create Axios instance
export const api = axios.create({
  baseURL: "http://localhost:5003/api", // your backend base URL
  timeout: 10000, // 10 seconds timeout
});

// Add a request interceptor to include token if logged in
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // JWT stored in localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Optional: add a response interceptor for handling errors globally
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default api;
