import React, { useState, useRef } from "react";
import PhoneNumberFieldProps from "../../types/phoneNumberProps";

const PhoneNumberField: React.FC<PhoneNumberFieldProps> = ({
  styles = {},
  className = "",
  isRequired = false,
  placeholder = "",
}) => {
  const [error, setError] = useState("");
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  // Phone number validation logic
  const validatePhoneNumber = (inputValue: string) => {
    const phonePattern = /^\d{10}$/; // Basic pattern for 10-digit phone numbers
    if (isRequired && inputValue === "") {
      setError("Phone number is required.");
    } else if (!phonePattern.test(inputValue)) {
      setError("Please enter a valid 10-digit phone number.");
    } else {
      setError(""); // No error
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    validatePhoneNumber(inputValue); // Validate the input as it changes
  };

  return (
    <div className="relative mb-4">
      <input
        type="tel" // Use 'tel' for phone number input
        id="phone-input"
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

export default PhoneNumberField;
