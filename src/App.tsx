import { useEffect, useRef } from "react";
import "./App.css";

// With useRef we can access the DOM elements and style them like with DOM manipulation
// Is very important to understand why we use useRef to access the DOM elements and not use the DOM manipulation directly
// The reason is:
// If we use DOM selectors, we will select the DOM elements for each re-render of the component, with useRef we select the DOM elements only once

function App() {
  const appRef = useRef<HTMLDivElement>(null);
  const inputTextRef = useRef<HTMLInputElement>(null);
  console.log("appRef-outside-useEffect:", appRef); // we get null because the component has not been rendered yet

  useEffect(() => {
    console.log("appRef-in-useEffect:", appRef); // we get the div element because the component has been rendered
    inputTextRef.current?.focus(); // we focus the input element when the component has been rendered
  }, []);

  return (
    <div ref={appRef}>
      <h1>useRef</h1>
      <label htmlFor="inputText">Please, write your name</label>
      <input ref={inputTextRef} type="text" id="inputText" />
      {/* we change the color of the div element when the component has been rendered (we can use "setProperty" or use the name of the css property to change*/}
      {/* <button onClick={() => appRef.current?.style.setProperty("backgroundColor", "blue")}> */}
      <button onClick={() => (appRef.current!.style.backgroundColor = "blue")}>
        update background
      </button>
    </div>
  );
}

export default App;
