import * as Yup from "yup";
export const boxInitialValues = {
  id: "", // Read-only, no input needed
  mobile_number: "",
  name: "",
  province: "",
  city: "",
  area: "",
  complete_address: "",
  gender: "",
  image: "", // Read-only, no input needed
};

export const boxValidationSchema = Yup.object({
  mobile_number: Yup.string()
    .required("Mobile number is required")
    .min(13, "Mobile number is too short")
    .max(13, "Mobile number is too long"),
  name: Yup.string()
    .required("Name is required")
    .min(1, "Name is too short")
    .max(50, "Name is too long"),
  province: Yup.string()
    .required("Province is required")
    .min(1, "Province is too short")
    .max(20, "Province is too long"),
  city: Yup.string()
    .required("City is required")
    .min(1, "City is too short")
    .max(20, "City is too long"),
  area: Yup.string()
    .required("Area is required")
    .min(1, "Area is too short")
    .max(20, "Area is too long"),
  complete_address: Yup.string()
    .required("Complete address is required")
    .min(1, "Complete address is too short")
    .max(300, "Complete is too long"),
  gender: Yup.string()
    .required("Gender is required")
    .oneOf(["male", "female"], "Gender is required"),
  image: Yup.string().nullable(), // Read-only field
});
