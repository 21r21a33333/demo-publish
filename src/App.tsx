import React from "react";
import "./App.css";
import { FormProvider } from "./components/contexts/FormProvider";
import MyForm from "./components/Myform";
import TextField from "./components/formElements/TextElementField";
import EmailField from "./components/formElements/EmailField";
import PhoneNumberField from "./components/formElements/PhoneNumberField";

const App: React.FC = () => {
  const handleFormSubmit = (data: Record<string, string>) => {
    console.log("Submitted Data: ", data);
  };

  return (
    <FormProvider>
      <MyForm
        onSubmit={handleFormSubmit}
        buttonClasses="asdf"
        buttonStyles={{ width: "100%" }}
      >
        <TextField name="firstname" placeholder="Enter firstname" isRequired />
        <TextField name="lastname" placeholder="Enter lastname" />
        <EmailField
          name="email"
          placeholder="Enter email"
          isRequired
          styles={{ width: "50%" }}
        />
        <PhoneNumberField
          name="phoneNumber"
          placeholder="Enter phone number"
          isRequired
          styles={{ width: "50%" }}
          className="asdfffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        />
      </MyForm>
    </FormProvider>
  );
};

export default App;
// export default App;

// export default MyForm;
