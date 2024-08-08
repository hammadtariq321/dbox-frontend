"use client";
import DataTable from "react-data-table-component";


const customStyles = {
  rows: {
    style: {
      minHeight: '50px', // override the row height
    },
  },
  headCells: {
    style: {
      paddingLeft: '8px', // override the cell padding for head cells
      paddingRight: '8px',
      fontWeight: 600,
      fontSize: 14
    },
  },
  cells: {
    style: {
      paddingLeft: '8px', // override the cell padding for data cells
      paddingRight: '8px',
      // fontSize: 13
    },
  },
};

const DataTableView = ({ columns, data, handlePageChange }) => {
  return <DataTable
    columns={columns}
    data={data?.results}
    customStyles={customStyles}
    className="mt-10"
    fixedHeader
    pagination
    paginationServer
    paginationTotalRows={data?.count}
  // onChangePage={handlePageChange}
  />;
};

export default DataTableView;
