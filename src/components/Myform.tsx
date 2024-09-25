import React, { useContext } from "react";
import { FormContext } from "../components/contexts/FormProvider"; // Adjust the import based on your folder structure

interface MyFormProps {
  children?: React.ReactNode;
  onSubmit: (data: Record<string, string>) => void; // Prop for the submit handler
  buttonClasses: string;
  buttonStyles: React.CSSProperties;
  styles?: React.CSSProperties;
  className?: string;
}

const MyForm: React.FC<MyFormProps> = ({
  onSubmit,
  children,
  buttonClasses = "",
  buttonStyles = {},
  styles = {},
  className = "",
}) => {
  const { handleSubmit } = useContext(FormContext) || {
    handleSubmit: () => console.warn("FormContext is not available."),
  };
  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(onSubmit); // Trigger form submission with the passed-in onSubmit function
  };

  return (
    <form className={className} onSubmit={onFormSubmit} style={styles}>
      {children}
      <button
        type="submit"
        className={`w-full bg-blue-500 text-white p-2 rounded-lg ${buttonClasses}`}
        styles={buttonStyles}
      >
        Submit
      </button>
    </form>
  );
};

export default MyForm;
