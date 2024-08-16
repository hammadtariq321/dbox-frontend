"use server";

import axiosInstance from "@/helper/axios";

export async function getAllTransactions(query = "", page) {
  try {
    const response = await axiosInstance.get(
      `/transaction/?search=${query}&page=${page}`
    );
    console.log("🚀 ~ getAllTransactions ~ response:", response);
    return response.data;
  } catch (error) {
    console.log("🚀 ~ getAllBoxes ~ error:", error);
  }
}

export async function getTransactionById(id) {
  try {
    const response = await axiosInstance.get(`/transaction/${id}`);
    return response.data;
  } catch (error) {
    console.log("🚀 ~ getAllBoxes ~ error:", error);
  }
}
