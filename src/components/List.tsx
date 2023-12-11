import { ReactNode } from "react";

interface ListProps {
  children: ReactNode;
  theme?: "chrismas" | "halloween" | "sommer";
}

export default function List({ children, theme }: ListProps) {
  let backgroundColor = "white";
  switch (theme) {
    case "chrismas":
      backgroundColor = "red";
      break;
    case "halloween":
      backgroundColor = "orange";
      break;
    case "sommer":
      backgroundColor = "yellow";
      break;
    default:
      backgroundColor = "white";
  }

  const listStyele = {
    listStyle: "none",
    padding: "10 px",
    margin: "10 px",
    backgroundColor,
  };

  return <ul style={listStyele}>{children}</ul>;
}
