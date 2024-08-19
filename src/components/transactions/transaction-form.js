"use client";
import { Form, Formik } from "formik";
import {
  BUTTON_VARIANT,
  Donation_Type,
  Donation_Type_OPTIONS,
  Gender_OPTIONS,
} from "@/helper/constants";
import Button from "../button";
import FormInput from "../form-input";
import FormSelectBox from "../form-select-box";
import axiosInstance from "@/helper/axios";
import { toast } from "sonner";
import { getFirstError } from "@/helper/utils";
import { useRouter } from "next/navigation";
import {
  transactionInitialValues,
  transactionValidationSchema,
} from "./transaction-form-config";
import { useState, useEffect } from "react";

const TransactionForm = ({ initialValue = {}, id = null }) => {
  const router = useRouter();
  const [boxOptions, setBoxOptions] = useState([]);
  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    console.log("Form values:", values);
    try {
      await axiosInstance.post("/transaction/", values);
      toast.success("Transaction created successfully");
      resetForm();
      router.refresh();
      router.push("/transactions");
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
      await axiosInstance.put(`/transaction/${id}/`, values);
      toast.success("Updated successfully");
      resetForm();
      router.refresh();
      router.push("/transactions");
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

  useEffect(() => {
    getAllBoxes();
  }, []);
  async function getAllBoxes(query = "", page) {
    try {
      const response = await axiosInstance.get(`/box/`);
      const mappedOptions = response?.data?.results.map((item) => ({
        value: item.id, // Use `id` from your API response as the value
        label: item.name, // Use `name` from your API response as the label
      }));
      setBoxOptions(mappedOptions);
    } catch (error) {
      console.log("🚀 ~ getAllBoxes ~ error:", error);
    }
  }
  return (
    <Formik
      initialValues={id ? initialValue : transactionInitialValues}
      validationSchema={transactionValidationSchema}
      enableReinitialize
      onSubmit={id ? handleEdit : handleSubmit}
    >
      {({ errors, isSubmitting, values, touched }) => (
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
                touched={touched}
                name="province"
                label="Province"
                errors={errors}
              />
            </div>
            <div className="flex-1">
              <FormInput
                touched={touched}
                name="city"
                label="City"
                errors={errors}
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

          <div className="flex gap-3 mb-2">
            <div className="mb-2 flex-1">
              <FormSelectBox
                errors={errors}
                label={"Donation Type"}
                name="donation_type"
                options={Donation_Type_OPTIONS}
                touched={touched}
              />
            </div>

            <div className="mb-2 flex-1">
              <FormInput
                name="amount"
                label="Amount"
                errors={errors}
                touched={touched}
              />
            </div>
          </div>

          {values?.donation_type == "box" && (
            <div className="mb-2">
              <FormSelectBox
                isDisabled={values?.donation_type != "box"}
                errors={errors}
                label="Select Box"
                name="box"
                options={boxOptions}
                touched={touched}
              />
            </div>
          )}

          <div className="flex justify-end items-center gap-3 mt-5">
            <Button disabled={isSubmitting} className="px-3" type="submit">
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
            <Button
              variant={BUTTON_VARIANT.SECONDARY}
              onClick={() => router.back()}
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

export default TransactionForm;
