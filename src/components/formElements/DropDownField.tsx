import React, { useState } from "react";
import { DropdownProps } from "../../types/DropDownFieldProps";

const DropDownField: React.FC<DropdownProps> = ({
  options,
  placeholder = "Select an option",
  isRequired = false,
  styles = {},
  className = "",
  listItemsClassName = "",
  listItemstyles = {},
}) => {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const [error, setError] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // State to manage dropdown open/close

  const handleChange = (value: string) => {
    setSelectedValue(value);
    setIsOpen(false); // Close dropdown on selection
    if (isRequired && value === "") {
      setError(true);
    } else {
      setError(false);
    }
  };

  return (
    <div style={styles} className={`relative mb-4 ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)} // Toggle dropdown on click
        className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none 
          focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center 
          dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
      >
        {selectedValue
          ? options.find((opt) => opt.value === selectedValue)?.label
          : placeholder}
        <svg
          className="w-2.5 h-2.5 ms-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute z-10  divide-y divide-gray-100 rounded-lg  w-full max-h-60 overflow-y-auto">
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDelayButton"
          >
            {options.map((option, index) => (
              <li key={index}>
                <div
                  onClick={() => handleChange(option.value)} // Change value on click
                  className={
                    "block bg-white shadow max-w-xs mx-auto px-4 py-2 text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer " +
                    `${listItemsClassName}`
                  }
                  style={listItemstyles}
                >
                  {option.label}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
      {error && (
        <div className="text-red-500 text-sm mt-1">
          At least one option must be selected.
        </div>
      )}
    </div>
  );
};

export default DropDownField;
