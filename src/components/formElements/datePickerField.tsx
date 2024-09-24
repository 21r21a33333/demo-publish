import React, { useState } from "react";

interface DatePickerFieldProps {
  placeholder?: string; // Placeholder text for the input
  isRequired?: boolean; // Whether the field is required
  styles?: React.CSSProperties; // Custom styles for the container
  className?: string; // Additional class names for the input
}

const DatePickerField: React.FC<DatePickerFieldProps> = ({
  placeholder = "Select date",
  isRequired = false,
  styles = {},
  className = "",
}) => {
  const [date, setDate] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);

    // Validate input
    if (isRequired && !selectedDate) {
      setError("Date is required.");
    } else {
      setError(""); // Clear error if valid
    }
  };

  return (
    <div style={styles} className={`mb-4 ${className}`}>
      <input
        type="date"
        value={date}
        onChange={handleChange}
        className={`border rounded p-2 ${
          error ? "border-red-500" : "border-gray-300"
        }`}
        placeholder={placeholder}
      />
      {error && <div className="text-red-500 text-sm mt-1">{error}</div>}
    </div>
  );
};

export default DatePickerField;
