import axios from "axios";

const Project = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  // timeout: 30000,
});

Project.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

Project.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle token expiration (401 Unauthorized)
    if (error.response?.status === 401) {
      // Clear token and redirect to login
      localStorage.removeItem("token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default Project;
