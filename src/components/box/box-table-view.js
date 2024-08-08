"use client";
import React from "react";
import DataTableView from "../data-table-view";
import { box_columns } from "./box-columns";
import ColumnActionButton from "../column-action-button";

const BoxTableView = ({ data }) => {
  const columns = [
    ...box_columns,
    {
      name: "Action",
      selector: (row) => (
        <ColumnActionButton className="bg-primary">Edit</ColumnActionButton>
      ),
    },
  ];
  return <DataTableView columns={columns} data={data} className="mt-10" />;
};

export default BoxTableView;
