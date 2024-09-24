import React, { useState, useRef } from "react";
import EmailFieldProps from "../../types/EmailFieldProps";
const EmailField: React.FC<EmailFieldProps> = ({
  styles = {},
  className = "",
  isRequired = false,
  placeholder = "",
}) => {
  const [error, setError] = useState("");
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  // Email validation logic
  const validateEmail = (inputValue: string) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email regex
    if (isRequired) {
      if (inputValue === "") {
        setError("Email is required.");
      } else if (!emailPattern.test(inputValue)) {
        setError("Please enter a valid email address.");
      } else {
        setError(""); // No error
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    validateEmail(inputValue); // Validate the input as it changes
  };

  return (
    <div className="relative mb-4">
      <input
        type="email"
        id="email-input"
        ref={inputRef}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        required={isRequired}
        className={`bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5 focus:ring-blue-400 focus:border-blue-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 
          ${
            error
              ? "border-red-500 focus:border-red-500 focus:ring-red-500 dark:border-red-500 dark:focus:ring-red-500"
              : "border-gray-300"
          } ${className}`}
        style={styles}
      />
      <div className="min-h-4">
        {error && (
          <div className="absolute text-red-500 text-sm mt-1">{error}</div>
        )}
      </div>
    </div>
  );
};

export default EmailField;
