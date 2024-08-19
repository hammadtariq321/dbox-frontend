const ErrorMessage = ({ touched, error }) => {
  return touched && error ? <p className="mt-1.5 text-xs text-red-600">{error}</p> : null;
};

export default ErrorMessage;
