import { useState, useRef, useEffect, ChangeEvent } from "react";
import "./App.css";

// the ref is used to persist a value between renders (without case re-render)
// that can be useful when you want to store a value that you don't want to be part of the state

function App() {
  // State
  const [stateValue, setStateValue] = useState<string>("");

  // Ref
  const refValue = useRef<string>("");

  // Variabile
  let variableValue: string = "";

  useEffect(() => {
    console.log("State:", stateValue); // the state value is updated because the state was updated and case a re-render
    console.log("Ref:", refValue.current); // the ref value is updated because the state was updated and the value persisted between renders (without case re-render)
    console.log("Variable:", variableValue); // the variable value is "" because the variable value is not persisted between renders (without case re-render)
  }, [stateValue, refValue, variableValue]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    // Update state value
    setStateValue(event.target.value);
  };

  const handleButtonClick = () => {
    refValue.current = stateValue; // update ref.current value

    variableValue = stateValue; // update variable value

    console.log("refValue:", refValue);
    console.log("variableValue:", variableValue);
  };

  return (
    <div>
      <input type="text" value={stateValue} onChange={handleChange} />
      <button onClick={handleButtonClick}>Update State</button>
    </div>
  );
}

export default App;
