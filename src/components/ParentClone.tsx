import {
  Children,
  ReactNode,
  cloneElement,
  isValidElement,
  ReactElement,
} from "react";

interface ParentCloneProps {
  children: ReactNode[];
}

// Define a type for children with a common prop
interface ChildWithCommonProp extends ReactElement {
  props: {
    // Common prop shared among children
    commonProp: string;
    additionalProp: string;
  };
}

export default function ParentClone({ children }: ParentCloneProps) {
  // Clone and modify the children
  const modifiedChildren = Children.map(children, (child) => {
    if (isValidElement(child)) {
      // Cast child to the defined type
      const childWithCommonProp = child as ChildWithCommonProp;

      // Clone the element and add/modify props
      return cloneElement(childWithCommonProp, {
        // Add a new prop to the child
        commonProp: "test", // update the commonProp
        additionalProp: "Added Prop Value", // add additional prop
      });
    }
    return child;
  });

  return (
    <div>
      {/* Render the modified children */}
      {modifiedChildren}
    </div>
  );
}
