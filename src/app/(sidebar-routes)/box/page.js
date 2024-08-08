import { fetchBoxDetails } from "@/actions/box-action";
import BoxTableView from "@/components/box/box-table-view";
import PageHeading from "@/components/page-heading";
import Link from "next/link";
import React from "react";
import { LuPlus } from "react-icons/lu";

async function DonationBox() {
  const boxlists = await fetchBoxDetails();
  return (
    <>
      <div className="flex justify-between items-center">
        <PageHeading title={"Donation Box List"} />
        <Link
          href="/box/add"
          className="bg-green-600 text-white px-4 py-3 rounded shadow flex items-center text-xs hover:bg-green-700"
        >
          <LuPlus size={15} className="mr-2" /> Add New Box
        </Link>
      </div>

      <input name="search" className="input-field" />
      <BoxTableView data={boxlists} />
    </>
  );
}

export default DonationBox;
