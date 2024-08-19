import InputLabel from "./input-label";
import InputField from "./input-field";
import ErrorMessage from "./error-message";

const FormInput = ({ name, label, touched, errors, ...otherProps }) => {
  return (
    <>
      <InputLabel name={name} label={label} />
      <InputField id={name} name={name} {...otherProps} />
      <ErrorMessage error={errors?.[name]} touched={touched?.[name]} />
    </>
  );
};

export default FormInput;
