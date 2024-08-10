import { getBoxById } from "@/actions/box-actions";
import BoxForm from "@/components/box/box-form";
import PageHeading from "@/components/page-heading";

const EditPage = async ({ params }) => {
  const { id } = params;
  const boxDetail = await getBoxById(id);

  const initialValue = {
    mobile_number: boxDetail?.mobile_number || "",
    name: boxDetail?.name || "",
    province: boxDetail.province || "",
    city: boxDetail?.city || "",
    area: boxDetail?.area || "",
    complete_address: boxDetail.complete_address || "",
    gender: boxDetail?.gender || "",
    image: boxDetail?.image || null,
  };
  return (
    <>
      <PageHeading title="Edit Box" />
      <BoxForm initialValue={initialValue} id={id} />
    </>
  );
};

export default EditPage;
