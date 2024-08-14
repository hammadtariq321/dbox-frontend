"use server";

import axiosInstance from "@/helper/axios";


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