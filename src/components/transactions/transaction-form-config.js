import * as Yup from "yup";

export const transactionInitialValues = {
  name: "",
  gender: "",
  province: "",
  city: "",
  area: "",
  complete_address: "",
  mobile_number: "",
  donation_type: "",
  amount: 0,
  box: "", //UUID of box
};

export const transactionValidationSchema = Yup.object({
  donation_type: Yup.string()
    .required("Donation type is required")
    .min(1, "Donation type is required")
    .max(50, "Donation type is too long"),
  mobile_number: Yup.string()
    .min(8, "Mobile number is too short")
    .max(20, "Mobile number is too long"),
  name: Yup.string()
    .required("Name is required")
    .min(1, "Name is too short")
    .max(50, "Name is too long"),
  amount: Yup.number()
    .required("Amount is required")
    .positive("Amount must be greater than zero")
    .integer("Amount must be an integer"),
  province: Yup.string().max(20, "Province is too long"),
  city: Yup.string().max(20, "City is too long"),
  area: Yup.string().max(20, "Area is too long"),
  complete_address: Yup.string().max(300, "Complete is too long"),
  gender: Yup.string()
    .oneOf(["male", "female"], "Gender is required"),
  box: Yup.string().uuid("Box ID is not valid").nullable(),
});
