import React from "react";
import { YesMemo } from "./YesMemo";
import { NoMemo } from "./NoMemo";

export const ToMemo = React.memo(() => {
  const [counter, setCounter] = React.useState(0);
  const myObj = React.useMemo(() => ({}), []);
  console.log("to memo");
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
      <h5>ToMemo {counter}</h5>
      <YesMemo />
      <YesMemo param={{}} name="ref object change" />
      <YesMemo param={myObj} name="memoised object" />
      <NoMemo />
    </div>
  );
});
