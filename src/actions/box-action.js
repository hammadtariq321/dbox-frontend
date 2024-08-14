"use server";

import axiosInstance from "@/helper/axios";

export async function getAllBoxes(query = "", page) {
  try {
    const response = await axiosInstance.get(
      `/box/?search=${query}&page=${page}`
    );
    return response.data;
  } catch (error) {
    console.log("🚀 ~ getAllBoxes ~ error:", error);
  }
}

export async function getBoxById(id) {
  try {
    const response = await axiosInstance.get(`/box/${id}`);
    return response.data;
  } catch (error) {
    console.log("🚀 ~ getAllBoxes ~ error:", error);
  }
}

export async function getDashboardCount() {
  try {
    const response = await axiosInstance.get(
      `/transaction-totals/`
    );
    return response.data;
  } catch (error) {
    console.log("🚀 ~ getDashboardCount ~ error:", error);
  }
}