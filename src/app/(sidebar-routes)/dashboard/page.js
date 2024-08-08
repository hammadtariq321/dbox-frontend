import PageHeading from "@/components/page-heading";
import React from "react";
import { LuCalendarDays } from "react-icons/lu";
import { FaRegCalendarCheck, FaRegCalendarMinus } from "react-icons/fa";

function DashboardPage() {
  return (
    <>
      <PageHeading title="Dashboard" />
      <div className="mt-10 flex justify-between gap-5">
        <div className=" p-5 w-full rounded border hover:shadow cursor-pointer">
          <div className="bg-gray-100 h-[50px] w-[50px] flex items-center justify-center rounded-full">
            <LuCalendarDays />
          </div>
          <p className="font-bold text-xl mt-5 text-gray-700">Rs 500</p>
          <p className="text-xs">Today</p>
        </div>
        <div className=" p-5 w-full rounded border hover:shadow cursor-pointer">
          <div className="bg-gray-100 h-[50px] w-[50px] flex items-center justify-center rounded-full">
            <FaRegCalendarCheck />
          </div>
          <p className="font-bold text-xl mt-5 text-gray-700">Rs 25,000</p>
          <p className="text-xs">Current Month</p>
        </div>
        <div className=" p-5 w-full rounded border hover:shadow cursor-pointer">
          <div className="bg-gray-100 h-[50px] w-[50px] flex items-center justify-center rounded-full">
            <FaRegCalendarMinus />
          </div>
          <p className="font-bold text-xl mt-5 text-gray-700">Rs 7,200</p>
          <p className="text-xs">Previous Month</p>
        </div>
      </div>
    </>
  );
}

export default DashboardPage;
