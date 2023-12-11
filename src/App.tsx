import "./App.css";
import ChildComponent from "./components/ChildComponent";
import List from "./components/List";
import ParentClone from "./components/ParentClone";
import RegisterForm from "./components/RegisterForm";

function App() {
  return (
    <>
      <RegisterForm>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" />
        <p>wqewqe</p>
      </RegisterForm>

      <br />
      <br />
      <br />

      <List theme="sommer">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </List>

      <List theme="chrismas">
        <li>Item 1</li>
        <li>Item 2</li>
      </List>

      <ParentClone>
        {/* Child component with a common prop */}
        <ChildComponent commonProp="Common Value 1" />
        {/* Child component with a common prop */}
        <ChildComponent commonProp="Common Value 2" />
      </ParentClone>
    </>
  );
}

export default App;
