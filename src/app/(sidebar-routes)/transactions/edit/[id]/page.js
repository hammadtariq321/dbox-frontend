import { getTransactionById } from "@/actions/transaction-actions";
import BoxForm from "@/components/box/box-form";
import PageHeading from "@/components/page-heading";
import TransactionForm from "@/components/transactions/transaction-form";

const EditPage = async ({ params }) => {
  const { id } = params;
  const transactionDetail = await getTransactionById(id);
  console.log("🚀 ~ EditPage ~ transactionDetail:", transactionDetail);

  const initialValue = {
    name: transactionDetail?.name || "",
    gender: transactionDetail?.gender || "",
    province: transactionDetail?.province || "",
    city: transactionDetail?.city || "",
    area: transactionDetail?.area || "",
    complete_address: transactionDetail?.complete_address || "",
    mobile_number: transactionDetail?.mobile_number || "",
    donation_type: transactionDetail?.donation_type || "",
    amount: transactionDetail?.amount || 0,
    box: transactionDetail?.box || "", // UUID of box
  };
  return (
    <>
      <PageHeading title="Edit Transaction" />
      <TransactionForm initialValue={initialValue} id={id} />
    </>
  );
};

export default EditPage;
