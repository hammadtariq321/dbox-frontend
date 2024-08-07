import React from "react";
import Select from "react-select";
import { Field, useFormikContext } from "formik";

const SelectField = ({ name, options, ...props }) => {
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
        <Select
          styles={customStyles}
          className="text-xs mt-1"
          id={name}
          options={options}
          value={options.find((option) => option.value === field.value)}
          onChange={(selectedOption) =>
            setFieldValue(name, selectedOption ? selectedOption.value : "")
          }
          {...props}
        />
      )}
    </Field>
  );
};

export default SelectField;
