import {
  ReactNode,
  FormEvent,
  Children,
  isValidElement,
  cloneElement,
  useState,
  ChangeEvent,
} from "react";

interface RegisterFormProps {
  children: ReactNode;
}

/**
 * Register form that saves the values of all input-children.
 * This component is very useful, to re-use the same form in different places.
 * With this componet we can avoid repeating the same logic in different places.
 *
 * @param {ReactNode} children - The children of the component.
 */

export default function RegisterForm({ children }: RegisterFormProps) {
  const [formData, setFormData] = useState({});

  const handleInputChange = (name: string, value: string | number) => {
    // update the state formData with the new value of the key name,
    // example: if we update with onchange the name input with "John" the state will be:
    // {name: "John"}
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSumbit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("formData", formData);
  };

  // clone the children and add the onChange prop to all input elements
  //
  const clonedChildren = Children.map(children, (child) => {
    if (isValidElement(child)) {
      return cloneElement(child, {
        // disable ts in this line because we don't know the error
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        onChange: (e: ChangeEvent<HTMLInputElement>) => {
          handleInputChange(child.props.name, e.target.value);
        },
      });
    }
    return child;
  });

  return (
    <form onSubmit={handleSumbit}>
      {clonedChildren}
      <input type="submit" value="send" />
    </form>
  );
}
