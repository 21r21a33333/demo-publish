import React, { useState, useEffect } from "react";

interface SliderFieldProps {
  min?: number; // Minimum value for the slider
  max?: number; // Maximum value for the slider
  initialValue?: number; // Initial value for the slider
  styles?: React.CSSProperties; // Custom styles for the input container
  className?: string; // Additional class names for the input
}

const SliderField: React.FC<SliderFieldProps> = ({
  min = 0,
  max = 100,
  initialValue = 50,
  styles = {},
  className = "",
}) => {
  const [value, setValue] = useState(initialValue); // State to store the slider value
  const [throttleTimeout, setThrottleTimeout] = useState<number | null>(null);

  // Throttling function
  const throttle = (func: Function, limit: number) => {
    return function (...args: any) {
      if (throttleTimeout) return; // If there is already a timeout, do nothing
      func.apply(this, args);
      const timeout = window.setTimeout(() => {
        setThrottleTimeout(null); // Clear timeout
      }, limit);
      setThrottleTimeout(timeout); // Set the timeout
    };
  };

  // Scroll event handler
  const handleScroll = throttle((event: WheelEvent) => {
    event.preventDefault();
    const delta = Math.sign(event.deltaY); // Determine scroll direction
    setValue((prevValue) => {
      const newValue = prevValue + (delta > 0 ? -1 : 1); // Decrease value on scroll down, increase on scroll up
      return Math.min(max, Math.max(min, newValue)); // Clamp value between min and max
    });
  }, 100); // Throttle to 100ms

  // Attach scroll event listener
  useEffect(() => {
    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScroll);
      if (throttleTimeout) {
        window.clearTimeout(throttleTimeout); // Clear timeout on cleanup
      }
    };
  }, [handleScroll, throttleTimeout]);

  // Calculate the position of the tooltip based on the slider's value
  const tooltipPosition = ((value - min) / (max - min)) * 100;

  return (
    <div style={styles} className={`relative mb-4 ${className}`}>
      <label
        htmlFor="slider-input"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Default range
      </label>

      {/* Background for filled portion */}
      <div className="relative mb-1 h-2 bg-gray-200 rounded-lg dark:bg-gray-700">
        <div
          className="absolute h-full bg-blue-600 rounded-lg"
          style={{
            width: `${tooltipPosition}%`, // Fill percentage based on slider value
          }}
        ></div>
      </div>

      {/* Tooltip */}
      <div
        className="absolute left-0 transform -translate-x-1/2 -translate-y-full mb-1 text-white bg-blue-600 rounded-lg text-sm p-1"
        style={{
          left: `calc(${tooltipPosition}% + 0.5rem)`, // Position tooltip above slider thumb
        }}
      >
        {value} {/* Display current slider value */}
      </div>

      <input
        id="slider-input"
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="w-full h-2 bg-transparent appearance-none cursor-pointer"
      />

      {/* Min and Max values display */}
      <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300">
        <span>{min}</span>
        <span>{max}</span>
      </div>
    </div>
  );
};

export default SliderField;
