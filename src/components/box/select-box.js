import React from "react";
import Select from "react-select";
import { Field, useFormikContext } from "formik";

const SelectField = ({ label, name, options, ...props }) => {
  const { setFieldValue } = useFormikContext();

  return (
    <Field name={name}>
      {({ field }) => (
        <Select
          id={name}
          name={name}
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
