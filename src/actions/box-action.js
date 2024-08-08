"use server";

import axiosServerInstance from "@/helper/axios/axios-server-instance";

export async function fetchBoxDetails(query = "", page) {
  try {
    const response = await axiosServerInstance.get(
      `/box/?search=${query}&page=${page}`
    );
    return response.data;
  } catch (error) {
    console.log("🚀 ~ fetchBoxDetails ~ error:", error);
  }
}
