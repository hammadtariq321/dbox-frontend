"use client";
import DataTable from "react-data-table-component";

const DataTableView = ({ columns, data }) => {
  return <DataTable columns={columns} data={data?.results} className="mt-10" />;
};

export default DataTableView;
