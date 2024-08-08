import PageHeading from "@/components/page-heading";
import React from "react";
import { LuCalendarDays } from "react-icons/lu";
import { FaRegCalendarCheck, FaRegCalendarMinus } from "react-icons/fa";
import { fetchTransactionTotal } from "@/actions/dashboard-actions";

async function DashboardPage() {
  const transactions = await fetchTransactionTotal()
  console.log(transactions)
  return (
    <>
      <PageHeading title="Dashboard" />
      <div className="mt-10 flex flex-col justify-between gap-5 md:flex-row">
        <div className=" p-5 w-full rounded border bg-white hover:shadow cursor-pointer">
          <div className="bg-gray-100 h-[50px] w-[50px] flex items-center justify-center rounded-full">
            <LuCalendarDays size={20} />
          </div>
          <p className="font-bold text-xl mt-5 text-gray-700">Rs {transactions?.total_amount}</p>
          <p className="text-xs">Total Amount</p>
        </div>
        <div className=" p-5 w-full rounded border bg-white hover:shadow cursor-pointer">
          <div className="bg-gray-100 h-[50px] w-[50px] flex items-center justify-center rounded-full">
            <FaRegCalendarCheck size={20} />
          </div>
          <p className="font-bold text-xl mt-5 text-gray-700">Rs {transactions?.current_month_total}</p>
          <p className="text-xs">Current Month</p>
        </div>
        <div className=" p-5 w-full rounded border bg-white hover:shadow cursor-pointer">
          <div className="bg-gray-100 h-[50px] w-[50px] flex items-center justify-center rounded-full">
            <FaRegCalendarMinus size={20} />
          </div>
          <p className="font-bold text-xl mt-5 text-gray-700">Rs {transactions?.previous_month_total}</p>
          <p className="text-xs">Previous Month</p>
        </div>
      </div>
    </>
  );
}

export default DashboardPage;
