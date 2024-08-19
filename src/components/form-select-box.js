import InputLabel from "./input-label";
import ErrorMessage from "./error-message";
import SelectField from "./select-box";

const FormSelectBox = ({
  name,
  label,
  touched,
  options,
  errors,
  ...otherProps
}) => {
  return (
    <>
      <InputLabel name={name} label={label} />
      <SelectField id={name} name={name} options={options} {...otherProps} />
      <ErrorMessage error={errors?.[name]} touched={touched?.[name]} />
    </>
  );
};

export default FormSelectBox;
