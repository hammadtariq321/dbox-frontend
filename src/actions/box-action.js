"use server";

import axiosServerInstance from "@/helper/axios/axios-server-instance";

export async function fetchBoxDetails(page = 1) {
  try {
    const response = await axiosServerInstance.get(`/box/?page=${page}`);
    console.log("🚀 ~ fetchBoxDetails ~ response:", response?.data);
    return response.data;
  } catch (error) {
    console.log("🚀 ~ fetchBoxDetails ~ error:", error);
  }
}
