import PageHeading from "@/components/page-heading";
import React from "react";
import { LuCalendarDays } from "react-icons/lu";
import { FaRegCalendarCheck, FaRegCalendarMinus } from "react-icons/fa";
import DashboardCard from "@/components/dashbaord/dashbaord-card";
import { getDashboardCount } from "@/actions/dashboard-actions";

async function DashboardPage() {
  const dashbaordCount = await getDashboardCount();
  return (
    <>
      <PageHeading title="Dashboard" />
      <div className="mt-10 flex justify-between gap-5">
        <DashboardCard data={dashbaordCount?.daily_total} icon={<LuCalendarDays />} text="Today Amount" />
        <DashboardCard data={dashbaordCount?.current_month_total} icon={<FaRegCalendarCheck />} text="Current Month" />
        <DashboardCard data={dashbaordCount?.previous_month_total} icon={<FaRegCalendarMinus />} text="Previous Month" />
      </div>
    </>
  );
}

export default DashboardPage;
