"use server";

import axiosServerInstance from "@/helper/axios/axios-server-instance";

export async function fetchBoxDetails() {
  try {
    const response = await axiosServerInstance.get("/box/");
    console.log("🚀 ~ fetchBoxDetails ~ response:", response?.data);
    return response.data;
  } catch (error) {
    console.log("🚀 ~ fetchBoxDetails ~ error:", error);
  }
}
