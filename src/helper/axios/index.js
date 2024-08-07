import axiosClientInstance from "./axios-client-instance";
import axiosServerInstance from "./axios-server-instance";

const axiosInstance =
  typeof window === "undefined" ? axiosServerInstance : axiosClientInstance;

export default axiosInstance;
