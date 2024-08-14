
import { getWorkerById } from "@/actions/worker-action";
import BoxForm from "@/components/box/box-form";
import PageHeading from "@/components/page-heading";
import WorkerForm from "@/components/workers/worker-form";

const EditPage = async ({ params }) => {
  const { id } = params;
  const workerDetail = await getWorkerById(id);

  const initialValue = {
    phone_number: workerDetail?.phone_number || "",
    first_name: workerDetail?.first_name || "",
    last_name: workerDetail.last_name || ""
  };
  return (
    <>
      <PageHeading title="Edit Box" />
      <WorkerForm initialValue={initialValue} id={id} />
    </>
  );
};

export default EditPage;
