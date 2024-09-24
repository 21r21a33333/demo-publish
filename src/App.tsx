import "./App.css";
import SearchField from "./components/formElements/searchField";
// import NumberInputField from "./components/formElements/NumberInputField";
import SliderField from "./components/formElements/SliderField";
const App: React.FC = () => {
  const names = [
    "Alice",
    "Bob",
    "Charlie",
    "David",
    "Eve",
    "Frank",
    "Grace",
    "Heidi",
    "Ivan",
    "Judy",
  ]; // Example names array

  return (
    <div className="max-w-sm mx-auto">
      <SearchField
        names={names} // Pass the names array to the component
        styles={{ marginBottom: "1rem" }} // Additional styles if needed
      />
    </div>
  );
};

export default App;
