export function getFirstError(errorObject) {
  for (const key in errorObject) {
    if (errorObject.hasOwnProperty(key)) {
      const errors = errorObject[key];
      if (Array.isArray(errors) && errors.length > 0) {
        return errors[0];
      } else if (typeof errors === "string") {
        return errors; // Return the error message if it's a string
      } else if (typeof errors === "object" && errors.hasOwnProperty("error")) {
        return errors.error; // Return the error message if it's an object with an 'error' property
      }
    }
  }
  return null; // Return null if no errors found
}
