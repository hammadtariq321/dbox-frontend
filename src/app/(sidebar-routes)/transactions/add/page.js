import PageHeading from "@/components/page-heading";
import TransactionForm from "@/components/transactions/transaction-form";

const AddBox = () => {
  return (
    <>
      <PageHeading title="Add New Transaction" />
      <TransactionForm />
    </>
  );
};

export default AddBox;
