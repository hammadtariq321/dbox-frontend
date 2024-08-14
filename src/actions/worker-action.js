"use server";

import axiosInstance from "@/helper/axios";


export async function getWorkers(query = "", page) {
  try {
    const response = await axiosInstance.get(
      `/users/?user_type=worker&search=${query}&page=${page}`
    );
    return response.data;
  } catch (error) {
    console.log("🚀 ~ getWorkers ~ error:", error);
  }
}

export async function getWorkerById(id) {
  try {
    const response = await axiosInstance.get(`/users/${id}`);
    return response.data;
  } catch (error) {
    console.log("🚀 ~ getAllBoxes ~ error:", error);
  }
}