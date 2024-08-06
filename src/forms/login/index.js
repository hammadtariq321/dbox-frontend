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
import { setCookie } from "cookies-next";

const LoginForm = () => {
  const router = useRouter();
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const res = await axios.post(BASE_URL + "/token/", values);
      setCookie("accessToken", res.data?.access);
      setCookie("refreshToken", res.data?.refresh);
      setCookie("userInfo", JSON.stringify(res.data?.user_info));
      toast.success("Login successful");
      resetForm();
      router.push("/dashboard");
    } catch (error) {
      toast.error(getFirstError(error.response.data) || error.message);
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <Formik
      initialValues={loginInitialValues}
      validationSchema={loginValidationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, isSubmitting }) => (
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
            disabled={isSubmitting}
            type="submit"
            className={`w-full ${
              isSubmitting
                ? "cursor-not-allowed bg-gray-500"
                : "bg-blue-600 hover:bg-blue-700"
            } text-white py-2 px-4 rounded-md `}
          >
            {isSubmitting ? "Submitting..." : "Login"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
