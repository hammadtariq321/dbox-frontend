import { EMAIL_REGEX, PASSWORD_REGEX } from "@/helper/constants";
import * as Yup from "yup";

export const loginValidationSchema = Yup.object({
  phone_number: Yup.string()
    .required("Phone Number is Required")
    .min(11, "Invalid Phone Number")
    .max(11, "Invalid Phone Number"),
  password: Yup.string()
    .required("Password is Required")
    .test("no-spaces", "Password contain space", (value) => !/\s/.test(value))
    .min(8, "Minimum 8 Characters")
    .max(50, "Maximum 50 Characters")
    .matches(
      PASSWORD_REGEX,
      "The minimum password length is 8 characters that requires atleast one Uppercase letter, one lowercase letter, one number, and one special character"
    ),
});

export const loginInitialValues = {
  phone_number: "",
  password: "",
};
