import { useMemo } from "react";
import clsx from "clsx";
import { BUTTON_VARIANT } from "@/helper/constants";

const getVariant = (variant) => {
  switch (variant) {
    case BUTTON_VARIANT.PRIMARY:
      return "bg-secondary text-white hover:bg-primary";
    case BUTTON_VARIANT.SUCCESS:
      return "bg-primary text-white hover:bg-primary-hover";
    case BUTTON_VARIANT.DANGER:
      return "bg-red-500 text-white hover:bg-primary";
    case BUTTON_VARIANT.SECONDARY:
      return "bg-gray-500 text-white hover:bg-primary";
    case BUTTON_VARIANT.OUTLINE:
      return "border border-primary bg-white text-primary hover:border-primary hover:bg-primary hover:text-white";
    default:
      return "";
  }
};

const Button = ({
  className,
  children,
  variant = BUTTON_VARIANT.PRIMARY,
  ...otherProps
}) => {
  const variantClasses = useMemo(() => getVariant(variant), [variant]);

  return (
    <button
      type="button"
      className={clsx(
        "rounded-md px-1.5 py-2.5 transform transition duration-300 ease-in-out text-sm font-biennale font-medium",
        variantClasses,
        className
      )}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
