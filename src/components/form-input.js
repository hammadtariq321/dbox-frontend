import InputLabel from "./input-label";
import InputField from "./input-field";
import ErrorMessage from "./error-message";

const FormInput = ({ name, label, required = false, touched, errors, ...otherProps }) => {
  return (
    <>
      <InputLabel name={name} label={label} required={required} />
      <InputField id={name} name={name} {...otherProps} />
      <ErrorMessage error={errors?.[name]} touched={touched?.[name]} />
    </>
  );
};

export default FormInput;
