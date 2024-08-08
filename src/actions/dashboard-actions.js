"use server";

import axiosServerInstance from "@/helper/axios/axios-server-instance";

export async function fetchTransactionTotal() {
  try {
    const response = await axiosServerInstance.get(
      `/transaction-totals/`
    );
    return response.data;
  } catch (error) {
    console.log("🚀 ~ fetchTransactionTotal ~ error:", error);
  }
}
