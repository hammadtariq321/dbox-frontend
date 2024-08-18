import { getAllTransactions } from "@/actions/transaction-actions";
import PageHeading from "@/components/page-heading";
import TableSearchField from "@/components/table-search-field";
import TransactionTableView from "@/components/transactions/transaction-table-view";
import Link from "next/link";
import React, { Suspense } from "react";
import { LuPlus } from "react-icons/lu";

async function DonationBox({ searchParams }) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  const transactionList = await getAllTransactions(query, currentPage);
  console.log("transactionList", transactionList)
  return (
    <>
      <div className="flex justify-between items-center">
        <PageHeading title="Transactions List" />
        <Link
          href="/transactions/add"
          className="bg-primary text-white px-4 py-3 rounded shadow flex items-center text-xs hover:bg-primary-hover"
        >
          <LuPlus size={15} className="mr-2" /> Add New Transaction
        </Link>
      </div>

      <TableSearchField />
      <Suspense key={query + currentPage} fallback={<div>Loading...</div>}>
        <TransactionTableView data={transactionList} />
      </Suspense>
    </>
  );
}

export default DonationBox;
