import { useEffect, useRef } from "react";
import "./App.css";


// With useRef we can access the DOM elements and style them like with DOM manipulation

function App() {
  const appRef = useRef<HTMLDivElement>(null);
  const inputTextRef = useRef<HTMLInputElement>(null);
  console.log("appRef-outside-useEffect:", appRef); // we get null because the component has not been rendered yet

  useEffect(() => {
    console.log("appRef-in-useEffect:", appRef); // we get the div element because the component has been rendered
    inputTextRef.current?.focus(); // we focus the input element when the component has been rendered
    appRef.current?.style.setProperty("color", "red"); // we change the color of the div element when the component has been rendered
  }, []);

  return (
    <div ref={appRef}>
      {/* use the Post component without props.children */}
      <h1>useRef</h1>
      <label htmlFor="inputText">Please, write your name</label>
      <input ref={inputTextRef} type="text" id="inputText" />
    </div>
  );
}

export default App;
