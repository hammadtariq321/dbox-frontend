import axios from "axios";
import { getCookie } from "cookies-next";
import { BASE_URL } from "../constants";

const axiosClientInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 60000,
});

const getAccessToken = () => getCookie("accessToken");
const getRefreshToken = () => getCookie("refreshToken");

const saveTokens = (accessToken, refreshToken) => {
  cookies().set("accessToken", accessToken);
  cookies().set("refreshToken", refreshToken);
};

axiosClientInstance.interceptors.request.use(
  (config) => {
    const token = getAccessToken();
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

const refreshAccessToken = async () => {
  try {
    const refreshToken = getRefreshToken();
    if (!refreshToken) {
      throw new Error("No refresh token available");
    }

    const response = await axios.post(`/refresh-token/`, {
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

// Add a response interceptor to handle timeout
axiosClientInstance.interceptors.response.use(
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

export default axiosClientInstance;
