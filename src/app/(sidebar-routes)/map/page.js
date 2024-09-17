import { getAllTransactions } from "@/actions/transaction-actions";
import MapView from "@/components/map-view";
import PageHeading from "@/components/page-heading";
import TableSearchField from "@/components/table-search-field";
import TransactionTableView from "@/components/transactions/transaction-table-view";
import Link from "next/link";
import React, { Suspense } from "react";
import { LuPlus } from "react-icons/lu";

async function MapPage() {
    return (
        <>
            <div className="flex justify-between items-center">
                <PageHeading title="Map View" />
                {/* <Link
                    href="/transactions/add"
                    className="bg-primary text-white px-4 py-3 rounded shadow flex items-center text-xs hover:bg-primary-hover"
                >
                    <LuPlus size={15} className="mr-2" /> Add New Transaction
                </Link> */}
            </div>

            <div className="mt-10">
                <MapView />
            </div>
        </>
    );
}

export default MapPage;
