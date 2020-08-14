import React from "react";

export function SecondLocalState() {
  const [counter, setCounter] = React.useState(0);
  console.log("second local state");
  return (
    <div className="SecondLocalState">
      My Second Local State{" "}
      <div
        onClick={React.useCallback(() => setCounter(counter + 1), [counter])}
      >
        {counter}
      </div>
    </div>
  );
}
