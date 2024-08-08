"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { useDebouncedCallback } from "use-debounce";

const customStyles = {
  rows: {
    style: {
      minHeight: "50px", // override the row height
    },
  },
  headCells: {
    style: {
      paddingLeft: "8px", // override the cell padding for head cells
      paddingRight: "8px",
      fontWeight: 600,
      fontSize: 14,
    },
  },
  cells: {
    style: {
      paddingLeft: "8px", // override the cell padding for data cells
      paddingRight: "8px",
      // fontSize: 13
    },
  },
  subHeader: {
    style: {
      paddingLeft: "8px",
      paddingRight: "8px",
      justifyContent: "flex-end",
      alignItems: "center",
      display: "flex",
    },
  },
};

const DataTableView = ({ columns, data }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const [currentPage, setCurrentPage] = useState(
    Number(searchParams.get("page")) || 1
  );

  useEffect(() => {
    setCurrentPage(Number(searchParams.get("page")) || 1);
  }, [searchParams]);

  const handlePageChange = (pageNumber) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    replace(`${pathname}?${params.toString()}`);
    setCurrentPage(pageNumber);
  };

  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <DataTable
      columns={columns}
      data={data?.results}
      customStyles={customStyles}
      fixedHeader
      pagination
      paginationServer
      paginationTotalRows={data?.count}
      onChangePage={handlePageChange}
      paginationDefaultPage={currentPage}
    />
  );
};

export default DataTableView;
