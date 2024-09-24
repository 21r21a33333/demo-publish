import React, { useState, useRef } from "react";
import { defaultValidators } from "../../utils/defaults";
import TextFieldProps from "../../types/TextFeildProps";

const TextField: React.FC<TextFieldProps> = ({
  styles = {},
  className = "",
  isRequired = false,
  validator, // Validator function is optional now
  placeholder = "",
  type = "alphanumeric", // Default to alphanumeric
}) => {
  const [error, setError] = useState(false);
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  // Validation logic based on the "type" or "validator" prop
  const validate = (inputValue: string) => {
    if (isRequired) {
      if (inputValue === "") {
        setError(true);
      } else {
        let isValid = true;

        // Use built-in validation based on the "type" prop, or fallback to custom validator
        if (validator) {
          isValid = validator(inputValue);
        } else if (type && defaultValidators[type]) {
          isValid = defaultValidators[type](inputValue);
        } else {
          isValid = defaultValidators.alphanumeric(inputValue);
        }

        setError(!isValid);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    validate(inputValue); // Validate the input as it changes
  };

  return (
    <div className="relative mb-4">
      {" "}
      {/* Added relative positioning for absolute error message */}
      <input
        type="text"
        ref={inputRef}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        required={isRequired}
        className={`bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 
          ${
            error
              ? "border-red-500 focus:border-red-500 focus:ring-red-500 dark:border-red-500 dark:focus:ring-red-500"
              : "border-gray-300"
          } ${className}`} // Add custom class names here
        style={styles} // Custom styles
      />
      <div className="min-h-4">
        {error && (
          <div className="absolute text-red-500 text-sm mt-1">
            Invalid input
          </div> // Positioned below the input
        )}
      </div>
    </div>
  );
};

export default TextField;
