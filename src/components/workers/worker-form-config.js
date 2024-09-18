import * as Yup from "yup";
export const workerInitialValues = {
  first_name: "",
  last_name: "",
  password: "",
  phone_number: "",
  user_type: "worker",
};

export const workerValidationSchema = Yup.object({
  phone_number: Yup.string()
    .required("Mobile number is required")
    .min(8, "Mobile number is too short")
    .max(20, "Mobile number is too long"),
  first_name: Yup.string()
    .required("First Name is required")
    .min(3, "Name is too short")
    .max(50, "Name is too long"),
  last_name: Yup.string()
    .required("Last Name is required")
    .min(3, "Name is too short")
    .max(50, "Name is too long"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Passwored will not be less than 8 characters")
    .max(20, "Passwored will not be more than 20 characters"),

});

export const workerValidationWithoutPasswordSchema = Yup.object({
  phone_number: Yup.string()
    .required("Mobile number is required")
    .min(8, "Mobile number is too short")
    .max(20, "Mobile number is too long"),
  first_name: Yup.string()
    .required("First Name is required")
    .min(3, "Name is too short")
    .max(50, "Name is too long"),
  last_name: Yup.string()
    .required("Last Name is required")
    .min(3, "Name is too short")
    .max(50, "Name is too long")
});
