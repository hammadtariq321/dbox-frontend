export const BUTTON_VARIANT = {
  PRIMARY: "primary",
  OUTLINE: "outline",
  SUCCESS: "success",
  DANGER: "danger",
  SECONDARY: "secondary",
};

export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const PASSWORD_REGEX =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[=!@#$%^&*()_+[\]{};':"\\|,.<>/?]).*$/;

export const BASE_URL =
  process.env.BASE_URL || process.env.NEXT_PUBLIC_BASE_URL;

export const Gender_OPTIONS = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
];

export const Donation_Type_OPTIONS = [
  { label: "Zakat", value: "zakat" },
  { label: "Sadqa", value: "sadqa" },
  // { label: "Box", value: "box" },
];
