import { EMAIL_REGEX, PASSWORD_REGEX } from "@/helper/constants";
import * as Yup from "yup";

export const loginValidationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid Email")
    .required("Email is Required")
    .max(50, "Maximum 50 characters")
    .matches(EMAIL_REGEX, "Email is Invalid"),
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
  email: "",
  password: "",
};
