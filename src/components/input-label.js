const InputLabel = ({ label, name }) => {
  return (
    <label htmlFor={name} className="block text-sm font-medium text-gray-700">
      {label}
    </label>
  );
};

export default InputLabel;
