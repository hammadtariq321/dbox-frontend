"use client";
import ErrorMessage from "@/components/error-message";
import { Field, Form, Formik } from "formik";
import React from "react";
import { loginInitialValues, loginValidationSchema } from "./form-config";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import axios from "axios";
import { BASE_URL } from "@/helper/constants";
import { getFirstError } from "@/helper/utils";

const LoginForm = () => {
  const router = useRouter();
  const handleSubmit = async (values, { resetForm }) => {
    try {
      const res = await axios.post(BASE_URL + "/token/", values);
      console.log("🚀 ~ handleSubmit ~ res:", res);
      toast.success("Login successful");

      // router.push("/dashboard");
    } catch (error) {
      console.log("🚀 ~ handleSubmit ~ error:", error);
      toast.error(getFirstError(error.response.data) || error.message);
    }
  };
  return (
    <Formik
      initialValues={loginInitialValues}
      validationSchema={loginValidationSchema}
      onSubmit={handleSubmit}
    >
      {({ touched, errors }) => (
        <Form>
          <div className="mb-4">
            <label
              htmlFor="phone_number"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <Field
              id="phone_number"
              name="phone_number"
              className={`mt-1 block w-full px-3 py-2 border  rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
            />
            <ErrorMessage error={errors.phone_number} />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <Field
              type="password"
              id="password"
              name="password"
              className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
            />
            <ErrorMessage error={errors.password} />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          >
            Login
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
