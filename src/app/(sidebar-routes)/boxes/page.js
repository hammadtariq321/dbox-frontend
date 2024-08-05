'use client'
import { BoxColumns } from "@/columns/BoxColumns";
import PageHeading from "@/components/page-heading";
import React from "react";
import DataTable from "react-data-table-component";
import { LuPlus } from "react-icons/lu";


const data = [
  {
    id: 1,
    title: 'Beetlejuice',
    year: '1988',
  },
  {
    id: 2,
    title: 'Ghostbusters',
    year: '1984',
  },
]

function DonationBox() {
  return <>
    <div className="flex justify-between items-center">
      <PageHeading title={"Donation Box List"} />
      <button className="bg-green-600 text-white px-4 py-3 rounded shadow flex items-center text-xs hover:bg-green-700"><LuPlus size={15} className="mr-2" /> Add New Box</button>
    </div>

    <DataTable
      columns={BoxColumns}
      data={data}
      className="mt-10"
    />
  </>
}

export default DonationBox;
