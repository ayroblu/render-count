import React from "react";

export const LocalState: React.FC = ({ children }) => {
  const [counter, setCounter] = React.useState(0);
  console.log("local state");
  return (
    <div className="LocalState">
      Some Local State{" "}
      <div
        onClick={React.useCallback(() => setCounter(counter + 1), [counter])}
      >
        {counter}
      </div>
      {children}
    </div>
  );
};
