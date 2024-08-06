'use client'
import { BoxColumns } from "@/columns/BoxColumns";
import Heading from "@/components/Heading";
import React from "react";
import DataTable from "react-data-table-component";


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
    <Heading />
    <DataTable
      columns={BoxColumns}
      data={data}
      className="mt-10"
    />
  </>
}

export default DonationBox;
