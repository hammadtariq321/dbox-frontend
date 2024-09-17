const InputLabel = ({ label, name, required }) => {
  return (
    <label htmlFor={name} className="block text-sm font-medium text-gray-700">
      {label} {required && <span className="text-danger">*</span>}
    </label>
  );
};

export default InputLabel;
