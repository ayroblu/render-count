import React from "react";

export const NoMemo = () => {
  const [counter, setCounter] = React.useState(0);
  console.log("No memo");
  return (
    <div
      onClick={React.useCallback(
        (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
          e.stopPropagation();
          setCounter(counter + 1);
        },
        [counter]
      )}
    >
      NoMemo {counter}
    </div>
  );
};

