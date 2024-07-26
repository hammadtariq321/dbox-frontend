import React from "react";

const ErrorMessage = ({ error }) => {
  return error ? <p className="mt-2 text-xs text-red-600">{error}</p> : null;
};

export default ErrorMessage;
