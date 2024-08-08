import { Field, useField, useFormikContext } from "formik";

const FileInputField = ({ name, label, multiple = false, ...props }) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(name);
  console.log("🚀 ~ FileInputField ~ field:", field);

  const handleChange = (event) => {
    const files = event.currentTarget.files;
    console.log("🚀 ~ handleChange ~ files:", files);
    if (files.length) {
      setFieldValue(name, multiple ? Array.from(files) : files[0]);
    }
  };

  return (
    <input
      type="file"
      className="mt-1 block w-full text-xs text-gray-500
    file:mr-4 file:py-2 file:px-4
    file:rounded-full file:border-0
    file:text-xs file:font-semibold
    file:bg-blue-50 file:text-primary
    hover:file:bg-blue-100 cursor-pointer"
      onChange={handleChange}
      {...props}
    />
  );
};

export default FileInputField;
