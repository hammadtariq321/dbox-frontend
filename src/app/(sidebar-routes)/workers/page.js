
import { getWorkers } from "@/actions/worker-action";
import PageHeading from "@/components/page-heading";
import TableSearchField from "@/components/table-search-field";
import WorkerTableView from "@/components/workers/worker-table-view";
import Link from "next/link";
import React, { Suspense } from "react";
import { LuPlus } from "react-icons/lu";

async function WorkersPage({ searchParams }) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  const workeslist = await getWorkers(query, currentPage);
  console.log("workeslist", workeslist)
  return (
    <>
      <div className="flex justify-between items-center">
        <PageHeading title={"Workers List"} />
        <Link
          href="/workers/add"
          className="bg-primary text-white px-4 py-3 rounded shadow flex items-center text-xs hover:bg-primary-hover"
        >
          <LuPlus size={15} className="mr-2" /> Add Worker
        </Link>
      </div>

      <TableSearchField />
      <Suspense key={query + currentPage} fallback={<div>Loading...</div>}>
        <WorkerTableView data={workeslist} />
      </Suspense>
    </>
  )
}

export default WorkersPage;
