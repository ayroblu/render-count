import React from "react";

export function FirstChild() {
  const [counter, setCounter] = React.useState(0);
  return (
    <div>
      <div>
        FirstChild
        <div
          onClick={(e) => {
            e.stopPropagation();
            setCounter(counter + 1);
          }}
        >
          (do nothing {counter})
        </div>
      </div>
    </div>
  );
}
