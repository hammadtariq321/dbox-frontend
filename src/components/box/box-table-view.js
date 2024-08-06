"use client";
import React from "react";
import DataTableView from "../data-table-view";
import { box_columns } from "./box-columns";

const BoxTableView = ({ data }) => {
  return <DataTableView columns={box_columns} data={data} className="mt-10" />;
};

export default BoxTableView;
