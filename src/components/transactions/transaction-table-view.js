"use client";
import { useState } from "react";
import DataTableView from "../data-table-view";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useRouter } from "next/navigation";
import ConfirmationModal from "../modal/confirmation-modal";
import axiosInstance from "@/helper/axios";
import { toast } from "sonner";
import { transaction_columns } from "./transaction-columns";

const TransactionTableView = ({ data }) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [selectedRowID, setSelectedRowID] = useState(null);

  const onDelete = (id) => {
    setSelectedRowID(id);
    setOpen(true); // Open the modal
  };

  const handleConfirmDelete = async () => {
    try {
      const res = await axiosInstance.delete(`/transaction/${selectedRowID}`);
      setSelectedRowID(null);
      setOpen(false);
      toast.success("Transaction deleted successfully");
      router.refresh();
    } catch (error) {
      console.log("🚀 ~ handleConfirmDelete ~ error:", error);
      toast.error(
        error?.response?.data?.message ||
        "Something went wrong while deleting the Transaction"
      );
    }
  };

  const actionColumn = {
    name: "Actions",
    cell: (row) => (
      <div className="flex space-x-2">
        <button
          onClick={() => router.push(`/transactions/edit/${row?.id}`)}
          className="text-primary hover:text-primary-hover "
        >
          <FaEdit size={18} />
        </button>
        <button
          onClick={() => onDelete(row?.id)}
          className="text-danger hover:text-danger-hover"
        >
          <FaTrash size={18} />
        </button>
      </div>
    ),
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  };

  const columns = [...transaction_columns, actionColumn];

  return (
    <>
      <DataTableView columns={columns} data={data} className="mt-2" />
      <ConfirmationModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={handleConfirmDelete}
        message="Are you sure you want to delete this box?"
      />
    </>
  );
};

export default TransactionTableView;