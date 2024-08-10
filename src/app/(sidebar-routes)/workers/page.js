import { getAllBoxes } from "@/actions/box-actions";
import BoxTableView from "@/components/box/box-table-view";
import PageHeading from "@/components/page-heading";
import TableSearchField from "@/components/table-search-field";
import Link from "next/link";
import React, { Suspense } from "react";
import { LuPlus } from "react-icons/lu";

async function DonationBox({ searchParams }) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  const boxlists = await getAllBoxes(query, currentPage);
  return (
    <>
      <div className="flex justify-between items-center">
        <PageHeading title="Workers List" />
        <Link
          href="/workers/add"
          className="bg-primary text-white px-4 py-3 rounded shadow flex items-center text-xs hover:bg-primary-hover"
        >
          <LuPlus size={15} className="mr-2" /> Add New Workers
        </Link>
      </div>

      <TableSearchField />
      <Suspense key={query + currentPage} fallback={<div>Loading...</div>}>
        <BoxTableView data={boxlists} />
      </Suspense>
    </>
  );
}

export default DonationBox;
