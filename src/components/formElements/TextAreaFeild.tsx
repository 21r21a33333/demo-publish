import React, { useState } from "react";

interface TextAreaFieldProps {
  placeholder?: string; // Placeholder text for the textarea
  isRequired?: boolean; // Whether the field is required
  styles?: React.CSSProperties; // Custom styles for the textarea container
  className?: string; // Additional class names for the textarea
  rows?: number; // Number of rows for the textarea
  validator?: (value: string) => boolean; // Custom validation function
}

const TextAreaField: React.FC<TextAreaFieldProps> = ({
  placeholder = "Enter text here...",
  isRequired = false,
  styles = {},
  className = "",
  rows = 4,
  validator,
}) => {
  const [value, setValue] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue);

    // Validate input
    if (isRequired && !inputValue) {
      setError("This field is required.");
    } else if (validator && !validator(inputValue)) {
      setError("Invalid input.");
    } else {
      setError(""); // Clear error if valid
    }
  };

  return (
    <div style={styles} className={`mb-4 ${className}`}>
      <textarea
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        rows={rows}
        className={`border rounded-lg p-2 w-full ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      />
      {error && <div className="text-red-500 text-sm mt-1">{error}</div>}
    </div>
  );
};

export default TextAreaField;
