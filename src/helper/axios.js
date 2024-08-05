import axios from "axios";

const API_URL = "https://your-api-url.com"; // Replace with your API URL

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: API_URL,
});

// Function to get access token from localStorage
const getAccessToken = () => localStorage.getItem("accessToken");

// Function to get refresh token from localStorage
const getRefreshToken = () => localStorage.getItem("refreshToken");

// Function to save tokens to localStorage
const saveTokens = (accessToken, refreshToken) => {
  localStorage.setItem("accessToken", accessToken);
  localStorage.setItem("refreshToken", refreshToken);
};

// Request interceptor to add the access token to headers
axiosInstance.interceptors.request.use(
  (config) => {
    const token = getAccessToken();
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Function to refresh the access token
const refreshAccessToken = async () => {
  try {
    const refreshToken = getRefreshToken();
    if (!refreshToken) {
      throw new Error("No refresh token available");
    }

    const response = await axios.post(`${API_URL}/refresh-token`, {
      refreshToken,
    });
    const { accessToken, newRefreshToken } = response.data;

    saveTokens(accessToken, newRefreshToken);
    return accessToken;
  } catch (error) {
    console.error("Failed to refresh token:", error);
    // Handle token refresh failure (e.g., redirect to login)
    return null;
  }
};

// Response interceptor to handle expired access token
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      const newAccessToken = await refreshAccessToken();

      if (newAccessToken) {
        originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
        return api(originalRequest);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
