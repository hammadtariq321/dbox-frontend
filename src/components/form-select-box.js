import InputLabel from "./input-label";
import ErrorMessage from "./error-message";
import SelectField from "./box/select-box";

const FormSelectBox = ({ name, label, options, errors, ...otherProps }) => {
  return (
    <>
      <InputLabel name={name} label={label} />
      <SelectField id={name} name={name} options={options} {...otherProps} />
      <ErrorMessage error={errors?.[name]} />
    </>
  );
};

export default FormSelectBox;
