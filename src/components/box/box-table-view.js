"use client";
import React from "react";
import DataTableView from "../data-table-view";
import { box_columns } from "./box-columns";
//  /?page=1

const BoxTableView = ({ data, handlePageChange }) => {
  return <DataTableView columns={box_columns} data={data} handlePageChange={handlePageChange} className="mt-10" />;
};

export default BoxTableView;
