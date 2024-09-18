"use client";
import { Form, Formik } from "formik";
import {
  workerInitialValues,
  workerValidationSchema,
  workerValidationWithoutPasswordSchema,
} from "./worker-form-config";
import { BUTTON_VARIANT } from "@/helper/constants";
import Button from "../button";
import FormInput from "../form-input";
import axiosInstance from "@/helper/axios";
import { toast } from "sonner";
import { getFirstError } from "@/helper/utils";
import { useRouter } from "next/navigation";

const WorkerForm = ({ initialValue = {}, id = null }) => {
  const router = useRouter();
  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    try {
      await axiosInstance.post("/register/", values);
      toast.success("Worker created successfully");
      resetForm();
      router.push("/workers");
      router.refresh();
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
      await axiosInstance.put(`/users/${id}/`, values);
      toast.success("Worker updated successfully");
      resetForm();
      router.push("/workers");
      router.refresh();
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
      initialValues={id ? initialValue : workerInitialValues}
      validationSchema={
        id ? workerValidationWithoutPasswordSchema : workerValidationSchema
      }
      enableReinitialize
      onSubmit={id ? handleEdit : handleSubmit}
    >
      {({ errors, isSubmitting, touched }) => (
        <Form className="mt-5">
          {/* First Row */}
          <div className="flex gap-3 mb-2">
            <div className="flex-1">
              <FormInput
                name="first_name"
                label="First Name"
                errors={errors}
                touched={touched}
                required={true}
              />
            </div>
            <div className="flex-1">
              <FormInput
                name="last_name"
                label="Last Name"
                errors={errors}
                touched={touched}
                required={true}
              />
            </div>
          </div>
          {/* Second Row */}
          <div className="flex gap-3 mb-2">
            <div className="flex-1">
              <FormInput
                name="phone_number"
                label="Phone No"
                errors={errors}
                touched={touched}
                required={true}
              />
            </div>
            <div className="flex-1">
              {!id && (
                <FormInput
                  name="password"
                  label="Password"
                  errors={errors}
                  touched={touched}
                  required={true}
                />
              )}
            </div>
          </div>

          <div className="flex justify-end items-center gap-3 mt-5">
            <Button disabled={isSubmitting} className="px-3" type="submit">
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
            <Button
              variant={BUTTON_VARIANT.SECONDARY}
              onClick={() => router.push("/workers")}
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

export default WorkerForm;
