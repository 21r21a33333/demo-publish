import React, { useState } from "react";

interface NumberInputFieldProps {
  placeholder?: string; // Placeholder text for the input
  isRequired?: boolean; // Whether the field is required
  min?: number; // Minimum value for the input
  max?: number; // Maximum value for the input
  styles?: React.CSSProperties; // Custom styles for the input container
  className?: string; // Additional class names for the input
}

const NumberInputField: React.FC<NumberInputFieldProps> = ({
  placeholder = "Enter a number",
  isRequired = false,
  min,
  max,
  styles = {},
  className = "",
}) => {
  const [value, setValue] = useState<number | string>(""); // State to store the input value
  const [error, setError] = useState<string>(""); // State to store the error message

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    // Check if the input is empty
    if (isRequired && !inputValue) {
      setError("This field is required.");
    } else {
      const numberValue = parseFloat(inputValue);
      if (isNaN(numberValue)) {
        setError("Please enter a valid number.");
      } else if (min !== undefined && numberValue < min) {
        setError(`Value must be at least ${min}.`);
      } else if (max !== undefined && numberValue > max) {
        setError(`Value must not exceed ${max}.`);
      } else {
        setError(""); // Clear error if valid
      }
    }

    setValue(inputValue);
  };

  return (
    <div style={styles} className={`mb-4 ${className}`}>
      <label
        htmlFor="number-input"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Select a number:
      </label>
      <input
        type="number"
        id="number-input"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
          focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
          dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
          dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
            error ? "border-red-500" : "border-gray-300"
          }`}
        required={isRequired}
        min={min} // Set min value if provided
        max={max} // Set max value if provided
      />
      {error && <div className="text-red-500 text-sm mt-1">{error}</div>}
    </div>
  );
};

export default NumberInputField;
