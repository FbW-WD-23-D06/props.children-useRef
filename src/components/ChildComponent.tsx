interface ChildComponentProps {
  commonProp: string;
  additionalProp?: string;
}

export default function ChildComponent({
  commonProp,
  additionalProp,
}: ChildComponentProps) {
  return (
    <div>
      {/* Display common prop */}
      <p>Common Prop: {commonProp}</p>
      {/* Display additional prop, if provided */}
      {additionalProp && <p>Additional Prop: {additionalProp}</p>}
    </div>
  );
}
