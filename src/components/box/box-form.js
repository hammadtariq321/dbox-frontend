"use client";
import { Form, Formik } from "formik";
import { boxInitialValues, boxValidationSchema } from "./box-form-config";
import { BUTTON_VARIANT, Gender_OPTIONS } from "@/helper/constants";
import Button from "../button";
import InputLabel from "../input-label";
import FormInput from "../form-input";
import FormSelectBox from "../form-select-box";
import FileInputField from "../file-input-field";
import axiosInstance from "@/helper/axios";
import { toast } from "sonner";
import { getFirstError } from "@/helper/utils";
import { useRouter } from "next/navigation";

const BoxForm = ({ initialValue = {}, id = null }) => {
  const router = useRouter();
  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    console.log("Form values:", values);
    try {
      await axiosInstance.post("/box/", values, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success("Box created successfully");
      resetForm();
      router.refresh();
      router.push("/box");
    } catch (error) {
      toast.error(
        getFirstError(error?.response?.data) ||
        "Something went wrong while creating data..."
      );
    } finally {
      setSubmitting(false);
    }
  };

  const handleEdit = async (values, { resetForm, setSubmitting }) => {
    try {
      await axiosInstance.put(`/box/${id}/`, values, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success("Updated successfully");
      resetForm();
      router.refresh();
      router.push("/box");
    } catch (error) {
      console.log("🚀 ~ handleEdit ~ error:", error);
      toast.error(
        getFirstError(error?.response?.data?.message) ||
        "Something went wrong while Updating data..."
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={id ? initialValue : boxInitialValues}
      validationSchema={boxValidationSchema}
      enableReinitialize
      onSubmit={id ? handleEdit : handleSubmit}
    >
      {({ errors, isSubmitting, touched }) => (
        <Form className="mt-5">
          {/* First Row */}
          <div className="flex gap-3 mb-2">
            <div className="flex-1">
              <FormInput
                name="name"
                label="Name"
                errors={errors}
                touched={touched}
              />
            </div>
            <div className="flex-1">
              <FormSelectBox
                name="gender"
                label="Gender"
                errors={errors}
                options={Gender_OPTIONS}
                touched={touched}
              />
            </div>
          </div>

          {/* Second Row */}
          <div className="flex gap-3 mb-2">
            <div className="flex-1">
              <FormInput
                name="province"
                label="Province"
                errors={errors}
                touched={touched}
              />
            </div>
            <div className="flex-1">
              <FormInput
                name="city"
                label="City"
                errors={errors}
                touched={touched}
              />
            </div>
          </div>

          {/* Third Row */}
          <div className="flex gap-3 mb-2">
            <div className="flex-1">
              <FormInput
                name="area"
                label="Area"
                errors={errors}
                touched={touched}
              />
            </div>
            <div className="flex-1">
              <FormInput
                name="mobile_number"
                label="Mobile Number"
                errors={errors}
                touched={touched}
              />
            </div>
          </div>

          {/* Fourth Row */}
          <div className="mb-2">
            <FormInput
              name="complete_address"
              label="Complete Address"
              errors={errors}
              touched={touched}
            />
          </div>

          <div className="mb-2">
            <InputLabel name="image" label="Upload Image" />
            <FileInputField id="image" name="image" />
          </div>

          <div className="flex justify-end items-center gap-3 mt-5">
            <Button disabled={isSubmitting} className="px-3" type="submit">
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
            <Button
              variant={BUTTON_VARIANT.SECONDARY}
              onClick={() => router.push("/box")}
              className="px-3"
            >
              Cancel
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default BoxForm;
