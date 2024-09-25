import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./App.css";
import { FormProvider } from "./components/contexts/FormProvider";
import MyForm from "./components/Myform";
import TextField from "./components/formElements/TextElementField";
import EmailField from "./components/formElements/EmailField";
import PhoneNumberField from "./components/formElements/PhoneNumberField";
import DropDownField from "./components/formElements/DropDownField";
import NumberInputField from "./components/formElements/NumberInputField";
import SliderField from "./components/formElements/SliderField";
import DatePickerField from "./components/formElements/DatePickerField";
import TextAreaField from "./components/formElements/TextAreaField";
import Label from "./components/formElements/LabelField";
const App = () => {
    const handleFormSubmit = (data) => {
        console.log("Submitted Data: ", data);
    };
    const dropdownOptions = [
        { value: "option1", label: "Option 1" },
        { value: "option2", label: "Option 2" },
        { value: "option3", label: "Option 3" },
    ];
    return (_jsx(FormProvider, { children: _jsxs(MyForm, { onSubmit: handleFormSubmit, buttonClasses: "asdf", buttonStyles: { width: "100%" }, formtitle: "Form", children: [_jsx(Label, { For: "firstname", text: "Name", isRequired: true }), _jsx(TextField, { name: "firstname", placeholder: "Enter firstname", isRequired: true }), _jsx(Label, { For: "lastname", text: "Name", isRequired: true }), _jsx(TextField, { name: "lastname", placeholder: "Enter lastname" }), _jsx(Label, { For: "email", text: "Name", isRequired: true }), _jsx(EmailField, { name: "email", placeholder: "Enter email", isRequired: true, styles: { width: "50%" } }), _jsx(Label, { For: "PhoneNumber", text: "Name", isRequired: true }), _jsx(PhoneNumberField, { name: "phoneNumber", placeholder: "Enter phone number", isRequired: true, styles: { width: "50%" }, className: "asdfffaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" }), _jsx(Label, { For: "dropdown", text: "Name", isRequired: true }), _jsx(DropDownField, { name: "dropdown", isRequired: true, options: dropdownOptions, placeholder: "Select an option" }), _jsx(Label, { For: "age", text: "Name", isRequired: true }), _jsx(NumberInputField, { name: "age", placeholder: "Enter your age", isRequired: true, min: 18, max: 99 }), _jsx(Label, { For: "age2", text: "Name", isRequired: true }), _jsx(NumberInputField, { name: "age2", placeholder: "Enter your age", isRequired: true, min: 18, max: 99 }), _jsx(Label, { For: "slider1", text: "Name", isRequired: true }), _jsx(SliderField, { name: "slider1", min: 0, max: 100, initialValue: 50, className: "mb-4" }), _jsx(Label, { For: "selectedDate", text: "Name", isRequired: true }), _jsx(DatePickerField, { isRequired: true, name: "selectedDate", className: "mb-4" }), _jsx(Label, { For: "description", text: "Name", isRequired: true }), _jsx(TextAreaField, { isRequired: true, name: "description", className: "mb-4" })] }) }));
};
export default App;
