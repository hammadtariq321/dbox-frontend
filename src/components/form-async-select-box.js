import InputLabel from "./input-label";
import ErrorMessage from "./error-message";
import AsyncSelectField from "./async-select";

const FormAsyncSelectBox = ({
  name,
  label,
  touched,
  options,
  errors,
  required = false,
  ...otherProps
}) => {
  return (
    <>
      <InputLabel name={name} label={label} required={required} />
      <AsyncSelectField
        id={name}
        name={name}
        loadOptions={options}
        {...otherProps}
      />
      <ErrorMessage error={errors?.[name]} touched={touched?.[name]} />
    </>
  );
};

export default FormAsyncSelectBox;
