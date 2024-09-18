import AsyncSelect from "react-select/async";
import { Field, useFormikContext } from "formik";

const AsyncSelectField = ({ name, loadOptions, ...props }) => {
  const { setFieldValue } = useFormikContext();

  const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: "#f9fafb",
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: "#d1d5db",
      color: "#111827",
      width: "100%",
      outline: "none",
      boxShadow: "0 0 0 2px transparent",
    }),
    input: (provided) => ({
      ...provided,
      border: "none",
      outline: "none",
    }),
  };

  return (
    <Field name={name}>
      {({ field }) => (
        <AsyncSelect
          styles={customStyles}
          className="text-xs mt-1"
          id={name}
          cacheOptions
          defaultOptions
          loadOptions={typeof loadOptions === "function" ? loadOptions : () => []}
          value={field.value ? { label: field.value, value: field.value } : null}
          onChange={(selectedOption) =>
            setFieldValue(name, selectedOption ? selectedOption.value : "")
          }
          {...props}
        />
      )}
    </Field>
  );
};

export default AsyncSelectField;
