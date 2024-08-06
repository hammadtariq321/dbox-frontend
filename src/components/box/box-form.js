"use client";
import { Field, Form, Formik } from "formik";
import ErrorMessage from "../error-message";
import { boxInitialValues, boxValidationSchema } from "./box-form-config";
import SelectField from "./select-box";
import { Gender_OPTIONS } from "@/helper/constants";

const BoxForm = () => {
  const handleSubmit = (values) => {
    console.log("Form values:", values);
    // Handle form submission
  };

  return (
    <Formik
      initialValues={boxInitialValues}
      validationSchema={boxValidationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, form, isSubmitting }) => (
        <Form>
          <div className="flex gap-3">
            <div className="flex-1">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <Field
                id="name"
                name="name"
                className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />

              <ErrorMessage error={errors?.name} />
            </div>

            <div className="flex-1">
              <label
                htmlFor="gender"
                className="block text-sm font-medium text-gray-700"
              >
                Gender
              </label>
              <SelectField
                form={form}
                options={Gender_OPTIONS}
                id="gender"
                name="gender"
                placeholder="Gender"
              />
              <ErrorMessage error={errors?.gender} />
            </div>
          </div>

          <div className="flex gap-3">
            <div className="flex-1">
              <label
                htmlFor="province"
                className="block text-sm font-medium text-gray-700"
              >
                Province
              </label>
              <Field
                id="province"
                name="province"
                className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <ErrorMessage error={errors?.province} />
            </div>
            <div className="flex-1">
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700"
              >
                City
              </label>
              <Field
                id="city"
                name="city"
                className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <ErrorMessage error={errors?.city} />
            </div>
          </div>

          <div className="flex gap-3">
            <div className="flex-1">
              <label
                htmlFor="area"
                className="block text-sm font-medium text-gray-700"
              >
                Area
              </label>
              <Field
                id="area"
                name="area"
                className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <ErrorMessage error={errors?.area} />
            </div>
            <div className="flex-1">
              <label
                htmlFor="mobile_number"
                className="block text-sm font-medium text-gray-700"
              >
                Mobile Number
              </label>
              <Field
                id="mobile_number"
                name="mobile_number"
                className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
              <ErrorMessage error={errors?.mobile_number} />
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="complete_address"
              className="block text-sm font-medium text-gray-700"
            >
              Complete Address
            </label>
            <Field
              id="complete_address"
              name="complete_address"
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            <ErrorMessage error={errors?.complete_address} />
          </div>

          <div className="mb-4">
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700"
            >
              Image (Read-Only)
            </label>
            <Field
              id="image"
              name="image"
              className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              disabled
            />
            {/* No validation or error message needed for read-only field */}
          </div>

          <button
            disabled={isSubmitting}
            type="submit"
            className={`w-full ${
              isSubmitting
                ? "cursor-not-allowed bg-gray-500"
                : "bg-blue-600 hover:bg-blue-700"
            } text-white py-2 px-4 rounded-md`}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default BoxForm;
