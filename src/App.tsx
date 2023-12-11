import "./App.css";
import List from "./components/List";

function App() {
  return (
    <>
      <List theme="sommer">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </List>

      <List theme="chrismas">
        <li>Item 1</li>
        <li>Item 2</li>
      </List>
    </>
  );
}

export default App;
