import clsx from "clsx";

const ColumnActionButton = (props) => {
  return (
    <button
      className={clsx("text-ms text-white rounded-md px-2", props.className)}
    >
      {props.children}
    </button>
  );
};

export default ColumnActionButton;
