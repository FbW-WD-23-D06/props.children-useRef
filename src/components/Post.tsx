import { ReactNode } from "react";

interface PostProps {
  title: string;
  text: string;
  children?: ReactNode; // ReactNode is a type that represents anything that can be rendered by React 
  // use optional type for children prop to avoid error when no children are passed
}

export default function Post({ title, text, children }: PostProps) {
  console.log(`children-${title}:`, children);
  return (
    <div style={{ border: "1px solid white", margin: 20 }}>
      <h6>{title}</h6>
      <p>{text}</p>
      {children} {/* render children, the children can be everything (node, html elements, etc...) */}
    </div>
  );
}
